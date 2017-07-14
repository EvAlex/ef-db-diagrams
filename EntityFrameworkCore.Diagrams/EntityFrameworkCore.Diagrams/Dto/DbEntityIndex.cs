using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbEntityIndex : DbEntityIndexBase
    {
        public IEnumerable<DbEntityProperty> Properties { get; set; }
    }
}