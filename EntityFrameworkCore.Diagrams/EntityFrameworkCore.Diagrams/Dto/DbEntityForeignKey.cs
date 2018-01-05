﻿using System.Collections.Generic;

namespace EntityFrameworkCore.Diagrams.Dto
{
    public class DbEntityForeignKey : DbEntityForeignKeyBase
    {
        public DbEntity PrincipalEntity { get; internal set; }

        public DbEntityKey PrincipalKey { get; internal set; }

        public IEnumerable<DbEntityProperty> Properties { get; internal set; }
    }
}