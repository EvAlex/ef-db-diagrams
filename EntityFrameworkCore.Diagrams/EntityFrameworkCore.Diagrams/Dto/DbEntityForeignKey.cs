using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbEntityForeignKey
    {
        public DbEntity PrincipalEntity { get; internal set; }
        public DbEntityKey PrincipalKey { get; internal set; }
        public IEnumerable<DbEntityProperty> Properties { get; internal set; }
        public DeleteBehavior DeleteBehavior { get; internal set; }
        public bool IsRequired { get; internal set; }
        public bool IsUnique { get; internal set; }
    }
}