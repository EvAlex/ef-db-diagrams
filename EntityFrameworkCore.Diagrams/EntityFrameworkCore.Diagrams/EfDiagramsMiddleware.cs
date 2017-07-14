using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Microsoft.Extensions.DependencyInjection
{
    public class EfDiagramsMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly EfDiagramsOptions _options;
        private readonly ILogger _logger;

        /// <summary>
        ///     Initializes a new instance of the <see cref="DatabaseErrorPageMiddleware" /> class
        /// </summary>
        /// <param name="next">Delegate to execute the next piece of middleware in the request pipeline.</param>
        /// <param name="loggerFactory">
        ///     The <see cref="ILoggerFactory" /> for the application. This middleware both produces logging messages and
        ///     consumes them to detect database related exception.
        /// </param>
        /// <param name="options">The options to control what information is displayed on the error page.</param>
        public EfDiagramsMiddleware(
            RequestDelegate next,
            ILoggerFactory loggerFactory,
            IOptions<EfDiagramsOptions> options)
        {
            if (loggerFactory == null)
            {
                throw new ArgumentNullException(nameof(loggerFactory));
            }

            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            _next = next;
            _options = options.Value;
            _logger = loggerFactory.CreateLogger<EfDiagramsMiddleware>();
        }

        /// <summary>
        ///     Process an individual request.
        /// </summary>
        /// <param name="httpContext">The HTTP context for the current request.</param>
        /// <returns>A task that represents the asynchronous operation.</returns>
        public virtual async Task Invoke(HttpContext httpContext)
        {
            if (httpContext == null)
            {
                throw new ArgumentNullException(nameof(httpContext));
            }

            try
            {
                if (IsModelRequest(httpContext))
                    await GetModel(httpContext);
                else if (ShouldDisplayDiagramsPage(httpContext))
                    await DisplayDiagramsPage(httpContext);
                else
                    await _next(httpContext);
            }
            catch (Exception ex)
            {
                _logger.LogError(new EventId(1, "EfDiagrams"), ex, $"Error in {nameof(EfDiagramsMiddleware)}");
                throw;
            }
        }

        private async Task DisplayDiagramsPage(HttpContext httpContext)
        {
            string html = File.ReadAllText(Path.Combine("frontend", "index.html"));
            await httpContext.Response.WriteAsync(html);
        }

        private bool ShouldDisplayDiagramsPage(HttpContext httpContext)
        {
            return httpContext.Request.Path.Value.ToLower().StartsWith("/db-diagrams")
                && httpContext.Request.Method == HttpMethods.Get;
        }

        private async Task GetModel(HttpContext httpContext)
        {
            var dbContext = httpContext.RequestServices.GetService(_options.DbContextType) as DbContext;
            var converter = new DtoConverter();
            var dto = converter.ConvertToDto(dbContext.Model);
            string json = JsonConvert.SerializeObject(dto);
            await httpContext.Response.WriteAsync(json);
        }

        private bool IsModelRequest(HttpContext httpContext)
        {
            return httpContext.Request.Path.Value.ToLower().StartsWith("/db-diagrams/model")
                && httpContext.Request.Method == HttpMethods.Get;
        }
    }
}