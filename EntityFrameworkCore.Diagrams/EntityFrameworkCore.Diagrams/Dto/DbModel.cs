using System;
using System.Collections.Generic;
using System.Text;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbModel
    {
        public IEnumerable<DbEntity> Entities { get; set; }
    }
}
