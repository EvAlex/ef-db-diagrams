using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class AlbumContentComment
    {
        public int AlbumId { get; set; }

        public int ContentId { get; set; }

        public AlbumContent AlbumContent { get; set; }

        public int PostId { get; set; }

        public Post Post { get; set; }
    }
}
