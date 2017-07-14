using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class NormalizedDbEntity : DbEntityBase
    {
        public int Id { get; set; }

        public int ClrTypeId { get; set; }

        public IEnumerable<NormalizedDbEntityProperty> Properties { get; set; }

        public IEnumerable<NormalizedDbEntityKey> Keys { get; set; }

        public IEnumerable<NormalizedDbEntityForeignKey> ForeignKeys { get; set; }

        public IEnumerable<NormalizedDbEntityIndex> Indexes { get; set; }
    }
}