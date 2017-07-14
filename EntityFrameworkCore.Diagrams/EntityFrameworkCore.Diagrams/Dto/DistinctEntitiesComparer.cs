using System;
using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    internal class DistinctEntitiesComparer : IEqualityComparer<DbEntity>
    {
        private readonly DistinctClrTypesComparer _clrTypesComparer = new DistinctClrTypesComparer();

        public bool Equals(DbEntity x, DbEntity y)
        {
            return x is DbEntity && y is DbEntity
                && x.Name == y.Name
                && _clrTypesComparer.Equals(x.ClrType, y.ClrType);
        }

        public int GetHashCode(DbEntity obj)
        {
            return $"{obj.Name} ({obj.ClrType})".GetHashCode();
        }
    }
}