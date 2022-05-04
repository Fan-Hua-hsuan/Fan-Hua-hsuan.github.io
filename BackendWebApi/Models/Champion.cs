using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendWebApi.Models
{
    public class Champion
    {
        public string Id { get; set; }
        public string Key { get; set; }
        public string Chinese { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Hp { get; set; }
        [Column(TypeName ="decimal(18,2)")]
        public decimal Movespeed { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Armor { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Spellblock { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Attackrange { get; set; }
    }
}
