using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class NormalizedDbEntityIndex : DbEntityIndexBase
    {
        public IEnumerable<NormalizedDbEntityProperty> Properties { get; set; }
    }
}