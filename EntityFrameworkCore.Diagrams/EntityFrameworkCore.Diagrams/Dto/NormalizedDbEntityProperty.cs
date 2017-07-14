using Microsoft.EntityFrameworkCore.Metadata;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class NormalizedDbEntityProperty : DbEntityPropertyBase
    {
        public int ClrTypeId { get; set; }
    }
}