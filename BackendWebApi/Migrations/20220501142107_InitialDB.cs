using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendWebApi.Migrations
{
    public partial class InitialDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Champions",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Key = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Chinese = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Hp = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Movespeed = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Armor = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Spellblock = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Attackrange = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Champions", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Champions");
        }
    }
}
