using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using System;
using System.IO;
using System.Reflection;

namespace Microsoft.Extensions.DependencyInjection
{
    /// <summary>
    /// Options for <see cref="EfDiagramsMiddleware"/>. 
    /// </summary>
    public class EfDiagramsOptions
    {
        /// <summary>
        /// Gets or sets <see cref="Type"/> of <see cref="EntityFrameworkCore.DbContext"/> that
        /// will be used to extract data model for diagram. Only one context type is currently supported.
        /// This will change as soon as frontend app supports it.
        /// </summary>
        public Type DbContextType { get; set; }

        /// <summary>
        /// Gets or sets base path for all requests within current library
        /// </summary>
        public PathString RequestPath { get; set; } = new PathString("/db-diagrams");

        public IFileProvider FrontendAppFilesProvider { get; set; } = new PhysicalFileProvider(GetEfDiagramsContentRoot());
        
        internal static string GetEfDiagramsContentRoot()
        {
            var asm = typeof(EfDiagramsMiddleware).GetTypeInfo().Assembly;
            var dllPath = Path.GetDirectoryName(asm.Location);
            var nupkgRoot = Path.Combine(dllPath, "..", "..");
            var contentRoot = Path.Combine(nupkgRoot, "content");
            if (!Directory.Exists(contentRoot))
            {
                //  NOTE: this means that we are not installed as NuGet packange
                contentRoot = Path.Combine(dllPath, "..", "..", "..", "..", "EntityFrameworkCore.Diagrams");
            }
            if (!Directory.Exists(contentRoot))
            {
                Directory.CreateDirectory(contentRoot);
            }
            contentRoot = Path.Combine(contentRoot, "wwwroot", "db-diagrams");
            return contentRoot;
        }
    }
}