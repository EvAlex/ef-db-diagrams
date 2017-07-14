using Microsoft.EntityFrameworkCore.Metadata;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbEntityProperty
    {
        public string Name { get; set; }

        public ClrType ClrType { get; set; }

        public bool IsConcurrencyToken { get; internal set; }

        public bool IsNullable { get; internal set; }

        public bool IsReadOnlyAfterSave { get; internal set; }

        public bool IsReadOnlyBeforeSave { get; internal set; }

        public bool IsShadowProperty { get; internal set; }

        public bool IsStoreGeneratedAlways { get; internal set; }

        public bool RequiresValueGenerator { get; internal set; }

        public ValueGenerated ValueGenerated { get; internal set; }
    }
}