using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using BackendWebApi.Helpers;


namespace BackendWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JsonController : ControllerBase
    {
        private readonly FileLoader _fileLoader;
        public JsonController(FileLoader fileLoader)
        {
            _fileLoader = fileLoader;
        }

        // GET: api/<JsonController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "LoL", "Pokemon" };
        }


        [HttpGet]
        [Route("lol")]
        [Produces("application/json")]
        //[Produces(MediaTypeNames.Application.Json)]
        public string GetLoL()
        {
            string jsonText = _fileLoader.LoadFile("Json", "champion.json");

            return jsonText;
        }


        [HttpGet]
        [Route("pokemon")]
        [Produces("application/json")]
        //[Produces(MediaTypeNames.Application.Json)]
        public string GetPokemon()
        {
            return _fileLoader.LoadFile("Json", "pokemon.json");
        }

        // GET api/<JsonController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<JsonController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<JsonController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<JsonController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
