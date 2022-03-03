using System;
using Microsoft.EntityFrameworkCore;
using EntityFrameworkCore.Diagrams.Dto;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace EntityFrameworkCore.Diagrams.Dto
{
    internal class DtoConverter
    {
        private readonly List<DbEntity> _convertedEntities = new List<DbEntity>();

        public DtoConverter()
        {
        }

        internal DbModel ConvertToDto(IModel model)
        {
            var annotations = model.GetAnnotations();
            var entityTypes = model.GetEntityTypes();

            return new DbModel
            {
                Entities = model.GetEntityTypes().Select(e => ConvertToDto(e))
            };
        }

        private DbEntity ConvertToDto(IEntityType entityType)
        {
            var result = _convertedEntities
                .FirstOrDefault(e => e.Name == entityType.Name && e.ClrType.Equals(entityType.ClrType));
            if (result == null)
            {
                result = new DbEntity
                {
                    Name = entityType.Name,
                    ClrType = ConvertToDto(entityType.ClrType),
                    Properties = entityType.GetProperties().Select(e => ConvertToDto(e)),
                    Keys = entityType.GetKeys().Select(e => ConvertToDto(e)),
                    ForeignKeys = entityType.GetForeignKeys().Select(e => ConvertToDto(e)),
                    Indexes = entityType.GetIndexes().Select(e => ConvertToDto(e))
                };
                _convertedEntities.Add(result);
            }
            return result;
        }

        private ClrType ConvertToDto(Type type)
        {
            return new ClrType
            {
                Name = type.Name,
                Namespace = type.Namespace,
                Assembly = type.AssemblyQualifiedName,
                GenericTypeArguments = type.GenericTypeArguments.Select(e => ConvertToDto(e))
            };
        }

        private DbEntityProperty ConvertToDto(IProperty e)
        {
            return new DbEntityProperty
            {
                Name = e.Name,
                ClrType = ConvertToDto(e.ClrType),
                IsConcurrencyToken = e.IsConcurrencyToken,
                IsNullable = e.IsNullable,
                IsShadowProperty = e.IsShadowProperty(),
                RequiresValueGenerator = e.RequiresValueGenerator(),
                ValueGenerated = e.ValueGenerated
            };
        }

        private DbEntityKey ConvertToDto(IKey key)
        {
            return new DbEntityKey
            {
                Properties = key.Properties.Select(e => ConvertToDto(e))
            };
        }

        private DbEntityForeignKey ConvertToDto(IForeignKey foreignKey)
        {
            //  TODO convert INavigation?
            return new DbEntityForeignKey
            {
                PrincipalEntity = ConvertToDto(foreignKey.PrincipalEntityType),
                PrincipalKey = ConvertToDto(foreignKey.PrincipalKey),
                Properties = foreignKey.Properties.Select(e => ConvertToDto(e)),
                DeleteBehavior = foreignKey.DeleteBehavior,
                IsRequired = foreignKey.IsRequired,
                IsUnique = foreignKey.IsUnique
            };
        }

        private DbEntityIndex ConvertToDto(IIndex index)
        {
            return new DbEntityIndex
            {
                Properties = index.Properties.Select(e => ConvertToDto(e)),
                IsUnique = index.IsUnique
            };
        }
    }
}