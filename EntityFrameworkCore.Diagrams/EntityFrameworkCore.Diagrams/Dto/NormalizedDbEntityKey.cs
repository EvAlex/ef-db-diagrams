using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class NormalizedDbEntityKey
    {
        public IEnumerable<NormalizedDbEntityProperty> Properties { get; internal set; }
    }
}