using System;
using System.Collections.Generic;
using System.Text;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class NormalizedDbModel
    {
        public IEnumerable<int> EntitiesIds { get; set; }

        public IEnumerable<NormalizedDbEntity> AllEntities { get; set; }

        public IEnumerable<NormalizedClrType> AllClrTypes{ get; set; }
    }
}
