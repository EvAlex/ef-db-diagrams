using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class Friendship
    {
        public int SourceProfileId { get; set; }

        public Profile SourceProfile { get; set; }

        public int TargetProfileId { get; set; }

        public Profile TargetProfile { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime? ConfirmedAt { get; set; }
    }
}
