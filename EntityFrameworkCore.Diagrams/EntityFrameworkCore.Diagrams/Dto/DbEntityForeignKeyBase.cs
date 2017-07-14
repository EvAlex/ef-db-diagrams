using Microsoft.EntityFrameworkCore.Metadata;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public abstract class DbEntityForeignKeyBase
    {
        public DeleteBehavior DeleteBehavior { get; internal set; }
        public bool IsRequired { get; internal set; }
        public bool IsUnique { get; internal set; }
    }
}