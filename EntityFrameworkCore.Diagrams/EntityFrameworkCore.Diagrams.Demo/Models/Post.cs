using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class Post
    {
        public int Id { get; set; }

        public string Message { get; set; }

        public int AuthorId { get; set; }

        public Profile Author { get; set; }

        public DateTime CreatedAt { get; set; }

        public int LikesCount { get; set; }

        public List<AlbumContentComment> AlbumContentComments { get; set; }

        public List<PrivateMessage> PrivateMessages { get; set; }
    }
}
