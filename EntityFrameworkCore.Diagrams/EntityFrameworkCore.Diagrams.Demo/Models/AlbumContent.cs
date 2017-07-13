using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class AlbumContent
    {
        public int AlbumId { get; set; }

        public PhotoAlbum Album { get; set; }

        public int ContentId { get; set; }

        public Content Content { get; set; }

        public List<AlbumContentComment> Comments { get; set; }
    }
}
