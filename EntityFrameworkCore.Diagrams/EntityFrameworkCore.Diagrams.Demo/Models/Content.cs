using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class Content
    {
        public int Id { get; set; }

        public string MimeType { get; set; }

        public string Uri { get; set; }

        public DateTime CreatedAt { get; set; }

        public List<AlbumContent> AlbumContents { get; set; }
    }
}
