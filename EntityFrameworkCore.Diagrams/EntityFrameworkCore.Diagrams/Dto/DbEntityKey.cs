using System;
using System.Collections.Generic;
using System.Text;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbEntityKey
    {
        public IEnumerable<DbEntityProperty> Properties { get; internal set; }
    }
}
