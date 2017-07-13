using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class PrivateMessage
    {
        public int TargetProfileId { get; set; }

        public Profile TargetProfile { get; set; }

        public int PostId { get; set; }

        public Post Post { get; set; }
    }
}
