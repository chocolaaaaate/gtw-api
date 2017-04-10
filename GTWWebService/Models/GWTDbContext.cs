using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace GTWWebService.Models
{
    public class GWTDbContext : DbContext
    {

        public DbSet<KeyWordPair> KeyWordPairs { get; set; }

        private static GWTDbContext Singleton;

        private GWTDbContext()
        {

        }

        public static GWTDbContext GetSingletonInstance()
        {
            if(Singleton == null)
            {
                Singleton = new GWTDbContext();                
            }
            return Singleton;
        }

    }
}