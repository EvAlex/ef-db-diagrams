using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbEntityIndex
    {
        public IEnumerable<DbEntityProperty> Properties { get; internal set; }
        public bool IsUnique { get; internal set; }
    }
}