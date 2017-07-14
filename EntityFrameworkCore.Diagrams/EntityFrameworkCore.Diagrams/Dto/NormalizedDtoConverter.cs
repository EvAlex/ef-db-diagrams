using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class NormalizedDtoConverter
    {
        private readonly DtoConverter _converter = new DtoConverter();
        
        public NormalizedDbModel ConvertToDto(IModel model)
        {
            var dto = _converter.ConvertToDto(model);
            var clrTypesComparer = new DistinctClrTypesComparer();
            var entitiesComparer = new DistinctEntitiesComparer();

            var normalizedDto = new NormalizedDbModel();

            normalizedDto.AllClrTypes = FindAllClrTypes(dto)
                .Distinct(clrTypesComparer)
                .Select((e, i) => new NormalizedClrType
                {
                    Id = i + 1,
                    Assembly = e.Assembly,
                    Namespace = e.Namespace,
                    Name = e.Name
                });
            normalizedDto.AllEntities = FindAllEntities(dto)
                .Distinct(entitiesComparer)
                .Select((e, i) => new NormalizedDbEntity
                {
                    Id = i + 1,
                    ClrTypeId = normalizedDto.AllClrTypes.First(ee => clrTypesComparer.Equals(ee, e.ClrType)).Id,
                    ForeignKeys = e.ForeignKeys.Select(ee => new NormalizedDbEntityForeignKeyWithEntity
                    {
                        DeleteBehavior = ee.DeleteBehavior,
                        IsRequired = ee.IsRequired,
                        IsUnique = ee.IsUnique,
                        PrincipalEntity = ee.PrincipalEntity,
                        //  PrincipalEntityId - will be set later
                        PrincipalKey = new NormalizedDbEntityKey
                        {
                            Properties = ee.PrincipalKey.Properties.Select(eee => Normalize(eee, normalizedDto.AllClrTypes, clrTypesComparer))
                        },
                        Properties = ee.Properties.Select(eee => Normalize(eee, normalizedDto.AllClrTypes, clrTypesComparer)) 
                    }),
                    Indexes = e.Indexes.Select(ee => new NormalizedDbEntityIndex
                    {
                        IsUnique = ee.IsUnique,
                        Properties = ee.Properties.Select(eee => Normalize(eee, normalizedDto.AllClrTypes, clrTypesComparer))
                    }),
                    Keys = e.Keys.Select(ee => new NormalizedDbEntityKey
                    {
                        Properties = ee.Properties.Select(eee => Normalize(eee, normalizedDto.AllClrTypes, clrTypesComparer))
                    }),
                    Name = e.Name,
                    Properties = e.Properties.Select(eee => Normalize(eee, normalizedDto.AllClrTypes, clrTypesComparer))
                });
            foreach (var fk in normalizedDto.AllEntities.SelectMany(e => e.ForeignKeys.Cast<NormalizedDbEntityForeignKeyWithEntity>()))
            {
                int clrTypeId = normalizedDto.AllClrTypes
                    .First(e => clrTypesComparer.Equals(e, fk.PrincipalEntity.ClrType))
                    .Id;
                int entityId = normalizedDto.AllEntities
                    .First(e => e.ClrTypeId == clrTypeId && e.Name == fk.PrincipalEntity.Name)
                    .Id;

                fk.PrincipalEntityId = entityId;
                fk.PrincipalEntity = null;
            }
            normalizedDto.EntitiesIds = dto.Entities.Select(e =>
            {
                int clrTypeId = normalizedDto.AllClrTypes
                    .First(ee => clrTypesComparer.Equals(ee, e.ClrType))
                    .Id;
                return normalizedDto.AllEntities.First(ee => ee.ClrTypeId == clrTypeId && ee.Name == e.Name).Id;
            });

            return normalizedDto;
        }

        private NormalizedDbEntityProperty Normalize(DbEntityProperty eee, IEnumerable<NormalizedClrType> allClrTypes, DistinctClrTypesComparer clrTypesComparer)
        {
            return new NormalizedDbEntityProperty
            {
                ClrTypeId = allClrTypes.First(eeee => clrTypesComparer.Equals(eeee, eee.ClrType)).Id,
                IsConcurrencyToken = eee.IsConcurrencyToken,
                IsNullable = eee.IsNullable,
                IsReadOnlyAfterSave = eee.IsReadOnlyAfterSave,
                IsReadOnlyBeforeSave = eee.IsReadOnlyBeforeSave,
                IsShadowProperty = eee.IsShadowProperty,
                IsStoreGeneratedAlways = eee.IsStoreGeneratedAlways,
                Name = eee.Name,
                RequiresValueGenerator = eee.RequiresValueGenerator,
                ValueGenerated = eee.ValueGenerated
            };
        }

        private IEnumerable<DbEntity> FindAllEntities(DbModel dto)
        {
            foreach (var entity in dto.Entities)
            {
                yield return entity;
                
                foreach (var fk in entity.ForeignKeys)
                    yield return fk.PrincipalEntity;
            }
        }

        private IEnumerable<ClrType> FindAllClrTypes(DbModel dto)
        {
            foreach (var entity in dto.Entities)
            {
                yield return entity.ClrType;

                foreach (var fk in entity.ForeignKeys)
                {
                    foreach (var property in fk.PrincipalKey.Properties)
                        yield return property.ClrType;

                    foreach (var property in fk.Properties)
                        yield return property.ClrType;
                }

                foreach (var index in entity.Indexes)
                {
                    foreach (var property in index.Properties)
                        yield return property.ClrType;
                }

                foreach (var key in entity.Keys)
                {
                    foreach (var property in key.Properties)
                        yield return property.ClrType;
                }

                foreach (var property in entity.Properties)
                        yield return property.ClrType;
            }
        }

        class NormalizedDbEntityForeignKeyWithEntity : NormalizedDbEntityForeignKey
        {
            public DbEntity PrincipalEntity { get; set; }
        }
    }
}
