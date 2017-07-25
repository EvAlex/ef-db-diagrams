using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.StaticFiles.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using System;
using System.IO;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class EfDiagramsServiceCollectionExtensions
    {
        public static IApplicationBuilder AddEfDiagrams<TDbContext>(this IApplicationBuilder app)
            where TDbContext: DbContext
        {
            var options = new EfDiagramsOptions { DbContextType = typeof(TDbContext) };

            var sharedOptions = new SharedOptions
            {
                FileProvider = new PhysicalFileProvider(EfDiagramsMiddleware.GetEfDiagramsContentRoot()),
                RequestPath = new PathString("/db-diagrams")
            };
            app.UseDefaultFiles(new DefaultFilesOptions(sharedOptions)
            {
                DefaultFileNames = { "index.html" }
            });
            app = app.UseStaticFiles(new StaticFileOptions(sharedOptions));
            app = app.UseMiddleware<EfDiagramsMiddleware>(Options.Options.Create(options));

            return app;
        }
    }
}
