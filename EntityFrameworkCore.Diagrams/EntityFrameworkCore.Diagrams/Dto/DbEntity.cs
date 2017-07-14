using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbEntity : DbEntityBase
    {
        public ClrType ClrType { get; set; }

        public IEnumerable<DbEntityProperty> Properties { get; set; }

        public IEnumerable<DbEntityKey> Keys { get; set; }

        public IEnumerable<DbEntityForeignKey> ForeignKeys { get; set; }

        public IEnumerable<DbEntityIndex> Indexes { get; set; }
    }
}