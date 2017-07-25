using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EntityFrameworkCore.Diagrams.Demo.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<AlbumContent> AlbumContents { get; set; }

        public DbSet<AlbumContentComment> AlbumContentComments { get; set; }

        public DbSet<Content> Contents { get; set; }

        public DbSet<Friendship> Friendships { get; set; }

        public DbSet<PhotoAlbum> PhotoAlbums { get; set; }

        public DbSet<Post> Posts { get; set; }

        public DbSet<PrivateMessage> PrivateMessages { get; set; }

        public DbSet<Profile> Profiles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<AlbumContent>()
                .HasKey(e => new { e.AlbumId, e.ContentId });
            modelBuilder.Entity<AlbumContent>()
                .HasOne(e => e.Album)
                .WithMany(e => e.Contents)
                .HasForeignKey(e => e.AlbumId);
            modelBuilder.Entity<AlbumContent>()
                .HasOne(e => e.Content)
                .WithMany(e => e.AlbumContents)
                .HasForeignKey(e => e.ContentId);

            modelBuilder.Entity<AlbumContentComment>()
                .HasKey(e => new { e.AlbumId, e.ContentId, e.PostId });
            modelBuilder.Entity<AlbumContentComment>()
                .HasOne(e => e.AlbumContent)
                .WithMany(e => e.Comments)
                .HasForeignKey(e => new { e.AlbumId, e.ContentId });
            modelBuilder.Entity<AlbumContentComment>()
                .HasOne(e => e.Post)
                .WithMany(e => e.AlbumContentComments)
                .HasForeignKey(e => e.PostId);

            modelBuilder.Entity<Friendship>()
                .HasKey(e => new { e.SourceProfileId, e.TargetProfileId });
            modelBuilder.Entity<Friendship>()
                .HasOne(e => e.SourceProfile)
                .WithMany(e => e.OutgoingFriendRequests)
                .HasForeignKey(e => e.SourceProfileId);
            modelBuilder.Entity<Friendship>()
                .HasOne(e => e.TargetProfile)
                .WithMany(e => e.IncomingFriendRequests)
                .HasForeignKey(e => e.TargetProfileId);

            modelBuilder.Entity<PhotoAlbum>()
                .HasOne(e => e.Profile)
                .WithMany(e => e.PhotoAlbums)
                .HasForeignKey(e => e.ProfileId);

            modelBuilder.Entity<Post>()
                .HasOne(e => e.Author)
                .WithMany(e => e.Posts)
                .HasForeignKey(e => e.AuthorId);

            modelBuilder.Entity<PrivateMessage>()
                .HasKey(e => new { e.PostId, e.TargetProfileId });
            modelBuilder.Entity<PrivateMessage>()
                .HasOne(e => e.Post)
                .WithMany(e => e.PrivateMessages)
                .HasForeignKey(e => e.PostId);
            modelBuilder.Entity<PrivateMessage>()
                .HasOne(e => e.TargetProfile)
                .WithMany(e => e.PrivateMessages)
                .HasForeignKey(e => e.TargetProfileId);
        }
    }
}
