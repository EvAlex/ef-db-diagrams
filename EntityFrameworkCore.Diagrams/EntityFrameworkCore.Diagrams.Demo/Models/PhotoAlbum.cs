using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class PhotoAlbum
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int ProfileId { get; set; }

        public Profile Profile { get; set; }

        public DateTime CreatedAt { get; set; }

        public List<AlbumContent> Contents { get; set; }
    }
}
