# EntityFrameworkCore.Diagrams

Visualize model created with EntityFramework Core in ASP.NET Core app.

https://db-diagrams.firebaseapp.com/

## Installation

1. Install NuGet package `EntityFrameworkCore.Diagrams`
2. Use `AddEfDiagrams()` extension method in `Configure()` method of your Startup class to add middleware. Specify your DbContext type instead of ApplicationDbContext in the following example: `app.AddEfDiagrams<ApplicationDbContext>();`
Here's how your Configure() method might look like after this step (notice commented line):
  ```cs
public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
{
    loggerFactory.AddConsole(Configuration.GetSection("Logging"));
    loggerFactory.AddDebug();

    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
        app.UseBrowserLink();
        app.AddEfDiagrams<ApplicationDbContext>();  //  <-- Here's the config for EntityFrameworkCore.Diargams
    }
    else
    {
        app.UseExceptionHandler("/Home/Error");
    }

    app.UseStaticFiles();

    app.UseMvc(routes =>
    {
        routes.MapRoute(
            name: "default",
            template: "{controller=Home}/{action=Index}/{id?}");
    });
}
```
3. Start your app and browse to `/db-diagrams page`. You should see the diagram now.

Notice that the middleware is added only in Development mode. This is important! Otherwise, any user in Production will se your model structure, which may not be desireable. This is not the case if you are developing public API, though.


## Contributing
Feel free to report any bugs or feature requests - just create an issue. Contributions are appreciated!

## License
MIT