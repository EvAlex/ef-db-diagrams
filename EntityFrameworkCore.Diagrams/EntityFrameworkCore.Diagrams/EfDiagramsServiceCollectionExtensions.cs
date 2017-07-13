using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class EfDiagramsServiceCollectionExtensions
    {
        public static IApplicationBuilder AddEfDiagrams<TDbContext>(this IApplicationBuilder app)
            where TDbContext: DbContext
        {
            var options = new EfDiagramsOptions { DbContextType = typeof(TDbContext) };

            app = app.UseMiddleware<EfDiagramsMiddleware>(Options.Options.Create(options));

            return app;
        }
    }
}
