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
        /// <summary>
        /// Adds <see cref="EfDiagramsMiddleware"/> with default <see cref="EfDiagramsOptions"/> 
        /// to application's request pipeline.
        /// </summary>
        /// <typeparam name="TDbContext"></typeparam>
        /// <param name="app"></param>
        /// <returns></returns>
        public static IApplicationBuilder AddEfDiagrams<TDbContext>(this IApplicationBuilder app)
            where TDbContext: DbContext
        {
            var options = new EfDiagramsOptions { DbContextType = typeof(TDbContext) };

            return app.AddEfDiagrams(options);
        }

        /// <summary>
        /// Adds <see cref="EfDiagramsMiddleware"/> with specified <see cref="EfDiagramsOptions"/> 
        /// to application's request pipeline.
        /// </summary>
        /// <typeparam name="TDbContext"></typeparam>
        /// <param name="app"></param>
        /// <returns></returns>
        public static IApplicationBuilder AddEfDiagrams(this IApplicationBuilder app, EfDiagramsOptions options)
        {
            var sharedOptions = new SharedOptions { FileProvider = options.FrontendAppFilesProvider, RequestPath = options.RequestPath };
            app.UseDefaultFiles(new DefaultFilesOptions(sharedOptions) { DefaultFileNames = { "index.html" } });
            app = app.UseStaticFiles(new StaticFileOptions(sharedOptions));

            app = app.UseMiddleware<EfDiagramsMiddleware>(Options.Options.Create(options));

            return app;
        }
    }
}
