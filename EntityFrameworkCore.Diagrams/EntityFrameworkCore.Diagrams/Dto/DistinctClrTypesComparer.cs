using System;
using System.Collections.Generic;
using System.Linq;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DistinctClrTypesComparer : IEqualityComparer<ClrType>
    {
        public bool Equals(ClrType x, ClrType y)
        {
            return x is ClrType && y is ClrType && x.Equals(y);
        }

        public int GetHashCode(ClrType obj)
        {
            return obj.ToString().GetHashCode();
        }
    }
}