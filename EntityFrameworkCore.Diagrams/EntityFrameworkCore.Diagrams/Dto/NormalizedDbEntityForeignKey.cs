using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class NormalizedDbEntityForeignKey : DbEntityForeignKeyBase
    {
        public int PrincipalEntityId { get; internal set; }

        public NormalizedDbEntityKey PrincipalKey { get; internal set; }

        public IEnumerable<NormalizedDbEntityProperty> Properties { get; internal set; }
    }
}