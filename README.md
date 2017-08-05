# EntityFrameworkCore.Diargams

Visualize model created with EntityFramework Core in ASP.NET Core app.

https://db-diagrams.firebaseapp.com/

## Installation

1. Install NuGet package `EntityFrameworkCore.Diagrams`
2. Add middleware in your `Startup.Configure()` method: `app.AddEfDiagrams<ApplicationDbContext>();`. Use it only in development mode (`if (env.IsDevelopment())`): you don't want everyone in public see your entire data structure :) Here's an example of how your code might may look like:
  ```cs
  if (env.IsDevelopment())
  {
      app.AddEfDiagrams<ApplicationDbContext>();
  }
```
3. Start your app and open `/db-diagrams` page. You should see yor entity model diagram.


Feel free to report any bugs or feature requests. Contributions are appreciated!