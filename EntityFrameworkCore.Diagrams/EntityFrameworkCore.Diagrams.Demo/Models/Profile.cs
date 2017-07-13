using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class Profile
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public DateTime BirthDate { get; set; }

        public List<Friendship> OutgoingFriendRequests { get; set; }

        public List<Friendship> IncomingFriendRequests { get; set; }

        public List<PhotoAlbum> PhotoAlbums { get; set; }

        public List<Post> Posts { get; set; }

        public List<PrivateMessage> PrivateMessages { get; set; }
    }
}
