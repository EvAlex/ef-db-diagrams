using System;
using System.Collections.Generic;
using System.Text;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class ClrType
    {
        public string Namespace { get; set; }

        public string Name { get; set; }
        public string Assembly { get; internal set; }
    }
}
