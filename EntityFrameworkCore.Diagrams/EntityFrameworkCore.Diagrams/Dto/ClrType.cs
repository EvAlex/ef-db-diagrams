using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class ClrType : IEquatable<ClrType>, IEquatable<Type>
    {
        public string Namespace { get; set; }

        public string Name { get; set; }

        public string Assembly { get; internal set; }

        public IEnumerable<ClrType> GenericTypeArguments { get; set; }

        public bool Equals(ClrType other)
        {
            return other is ClrType
                && Name == other.Name
                && Namespace == other.Namespace
                && Assembly == other.Assembly
                && GenericTypeArguments.Count() == other.GenericTypeArguments.Count()
                && GenericTypeArguments.All(e => other.GenericTypeArguments.Any(ee => e.Equals(ee)));
        }

        public bool Equals(Type other)
        {
            return other is Type
                && Name == other.Name
                && Namespace == other.Namespace
                && Assembly == other.AssemblyQualifiedName
                && GenericTypeArguments.Count() == other.GenericTypeArguments.Length
                && GenericTypeArguments.All(e => other.GenericTypeArguments.Any(ee => e.Equals(ee)));
        }

        public override string ToString()
        {
            return $"{Namespace}.{Name}<{GenericTypeArguments.Select(e => e.ToString())}> [{Assembly}]";
        }
    }
}
