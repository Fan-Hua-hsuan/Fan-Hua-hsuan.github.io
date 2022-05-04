using Microsoft.EntityFrameworkCore;
using BackendWebApi.Models;

namespace BackendWebApi.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options):base(options)
        {

        }

        public DbSet<Champion> Champions { get; set; }
    }
}
