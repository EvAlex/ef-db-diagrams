using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using EntityFrameworkCore.Diagrams.Demo.Models;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace EntityFrameworkCore.Diagrams.Demo.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "1.1.2");

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.AlbumContent", b =>
                {
                    b.Property<int>("AlbumId");

                    b.Property<int>("ContentId");

                    b.HasKey("AlbumId", "ContentId");

                    b.ToTable("AlbumContents");
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.AlbumContentComment", b =>
                {
                    b.Property<int>("AlbumId");

                    b.Property<int>("ContentId");

                    b.Property<int>("PostId");

                    b.HasKey("AlbumId", "ContentId", "PostId");

                    b.HasIndex("PostId");

                    b.ToTable("AlbumContentComments");
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.Content", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("MimeType");

                    b.Property<string>("Uri");

                    b.HasKey("Id");

                    b.ToTable("Contents");
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.Friendship", b =>
                {
                    b.Property<int>("SourceProfileId");

                    b.Property<int>("TargetProfileId");

                    b.Property<DateTime?>("ConfirmedAt");

                    b.Property<DateTime>("CreatedAt");

                    b.HasKey("SourceProfileId", "TargetProfileId");

                    b.HasIndex("TargetProfileId");

                    b.ToTable("Friendships");
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int>("ProfileId");

                    b.HasKey("Id");

                    b.HasIndex("ProfileId");

                    b.ToTable("PhotoAlbums");
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AuthorId");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<int>("LikesCount");

                    b.Property<string>("Message");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.PrivateMessage", b =>
                {
                    b.Property<int>("PostId");

                    b.Property<int>("TargetProfileId");

                    b.HasKey("PostId", "TargetProfileId");

                    b.HasIndex("TargetProfileId");

                    b.ToTable("PrivateMessages");
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.Profile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("BirthDate");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("MiddleName");

                    b.HasKey("Id");

                    b.ToTable("Profiles");
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.AlbumContent", b =>
                {
                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.Content", "Content")
                        .WithMany("AlbumContents")
                        .HasForeignKey("AlbumId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum", "Album")
                        .WithMany("Contents")
                        .HasForeignKey("AlbumId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.AlbumContentComment", b =>
                {
                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.Post", "Post")
                        .WithMany("AlbumContentComments")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.AlbumContent", "AlbumContent")
                        .WithMany("Comments")
                        .HasForeignKey("AlbumId", "ContentId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.Friendship", b =>
                {
                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.Profile", "SourceProfile")
                        .WithMany("OutgoingFriendRequests")
                        .HasForeignKey("SourceProfileId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.Profile", "TargetProfile")
                        .WithMany("IncomingFriendRequests")
                        .HasForeignKey("TargetProfileId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.PhotoAlbum", b =>
                {
                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.Profile", "Profile")
                        .WithMany("PhotoAlbums")
                        .HasForeignKey("ProfileId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.Post", b =>
                {
                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.Profile", "Author")
                        .WithMany("Posts")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EntityFrameworkCore.Diagrams.Demo.Models.PrivateMessage", b =>
                {
                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.Post", "Post")
                        .WithMany("PrivateMessages")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EntityFrameworkCore.Diagrams.Demo.Models.Profile", "TargetProfile")
                        .WithMany("PrivateMessages")
                        .HasForeignKey("TargetProfileId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
