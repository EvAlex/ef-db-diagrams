using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Text;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public abstract class DbEntityPropertyBase
    {
        public string Name { get; set; }

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
