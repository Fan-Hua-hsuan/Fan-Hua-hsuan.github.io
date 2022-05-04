using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BackendWebApi.Models;
using System.Linq;
using System.Collections.Generic;

namespace BackendWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FakerController : ControllerBase
    {
        private readonly ILogger<FakerController> _logger;
        private readonly IWebHostEnvironment _env;
        public FakerController(ILogger<FakerController> logger, IWebHostEnvironment env)
        {
            _logger = logger;
            _env = env;
        }

        [HttpPost]
        public IActionResult Post([FromBody] IEnumerable<User> fakerUsers)
        {
            return new ObjectResult ( new { StatusCode=200, message= $"收到前端送來的Faker資料:{fakerUsers.Count()}筆" } );

        }
    }
}
