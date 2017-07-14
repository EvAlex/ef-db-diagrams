using Microsoft.EntityFrameworkCore.Metadata;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbEntityProperty : DbEntityPropertyBase
    {
        public ClrType ClrType { get; set; }
    }
}