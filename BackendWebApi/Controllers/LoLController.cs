using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using BackendWebApi.Models;
using BackendWebApi.ViewModels;
using System.Linq;
using BackendWebApi.Data;
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace BackendWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoLController : ControllerBase
    {
        private readonly DatabaseContext _ctx;
        private readonly IMapper _mapper;
        public LoLController(DatabaseContext ctx, IMapper mapper)
        {
            _ctx = ctx;
            _mapper = mapper;
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] IEnumerable<Champion> champions)
        {
            if (champions == null || champions.Count() == 0)
            {
                return new ObjectResult(new { StatusCode = 400, message = $"收到前端送來的資料Modeling Binding失敗" });
            }


            if (_ctx.Champions.Any())
            {
                return new ObjectResult(new { StatusCode = 202, message = $"資料庫中已有英雄資料, 不重複寫入" });
            }

            //建立DatabaseContext
            //手工將ChampionViewModel轉成Champion模型, 然後寫入資料庫
            using (var tran = _ctx.Database.BeginTransaction())
            {
                try
                {
                    await _ctx.Champions.AddRangeAsync(champions);
                    await _ctx.SaveChangesAsync();
                    tran.Commit();
                    return new ObjectResult(new { StatusCode = 201, message = $"收到前端送來的資料{champions.Count()}筆, 並寫入資料庫成功" });
                }
                catch (Exception ex)
                {
                    tran.Rollback();
                    return new ObjectResult(new { StatusCode = 400, message = $"收到前端送來的資料{champions.Count()}筆, 並寫入資料庫失敗:{ex}" });
                }
            }

        }

        [HttpPost]
        [Route("automapper")]
        public async Task<IActionResult> PostAutoMapper([FromBody] IEnumerable<ChampionViewModel> championsVM)
        {
            //用AutoMapper將ChampionViewModel轉成Champion模型, 然後寫入資料庫
            var champions = _mapper.Map<List<Champion>>(championsVM);

            var championFakeVM = _mapper.Map<List<ChampionViewModel>>(champions);


            if (_ctx.Champions.Any())
            {
                return new ObjectResult(new { StatusCode = 202, message = $"資料庫中已有英雄資料, 不重複寫入" });
            }

            //建立DatabaseContext
            //手工將ChampionViewModel轉成Champion模型, 然後寫入資料庫
            using (var tran = _ctx.Database.BeginTransaction())
            {
                try
                {
                    await _ctx.Champions.AddRangeAsync(champions);
                    await _ctx.SaveChangesAsync();
                    tran.Commit();
                    return new ObjectResult(new { StatusCode = 201, message = $"收到前端送來的資料{championsVM.Count()}筆, 並寫入資料庫成功" });
                }
                catch (Exception ex)
                {
                    tran.Rollback();
                    return new ObjectResult(new { StatusCode = 400, message = $"收到前端送來的資料{championsVM.Count()}筆, 並寫入資料庫失敗:{ex}" });
                }
            }
        }

        [HttpGet]
        [Route("AllHeros")]
        public async Task<IActionResult> GetAllHeros()
        {
            var heros = await _ctx.Champions.ToListAsync();

            if(heros.Count > 0)
            {
                return Ok(heros);
            }
            else
            {
                return new ObjectResult(new { StatusCode = 202, message = $"資料庫無任何英雄資料" });
            }
        }

        [HttpGet]
        [Route("HeroName")]
        public async Task<IActionResult> GetHeroByName([FromQuery] string id)
        {
            //find hero by id(id即為英雄名字)
            var hero = await _ctx.Champions.FindAsync(id);

            if (hero != null)
            {
                return Ok(hero);
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPut("EditHero/{id}")]
        public async Task<IActionResult> PutHero(string id, ChampionViewModel championVM)
        {
            if (id != championVM.Id)
            {
                return BadRequest();
            }

            //方式1
            var champion = await _ctx.Champions.FindAsync(id);
            champion.Chinese = championVM.Chinese;
            champion.Hp = championVM.Hp;
            champion.Movespeed = championVM.Movespeed;
            champion.Armor = championVM.Armor;
            champion.Spellblock = championVM.Spellblock;
            champion.Attackrange = championVM.Attackrange;

            //方式2
            
            Champion champion_ = new Champion
            {
                Id = championVM.Id,
                Key = championVM.Key,
                Chinese = championVM.Chinese,
                Hp= championVM.Hp,
                Movespeed=championVM.Movespeed,
                Armor=championVM.Armor,
                Spellblock=championVM.Spellblock,
                Attackrange=championVM.Attackrange
            };

            _ctx.Entry(champion).State = EntityState.Modified;
            

            try
            {
                await _ctx.SaveChangesAsync();

                return Ok(champion);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_ctx.Champions.Any( x=> x.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }
    }
}
