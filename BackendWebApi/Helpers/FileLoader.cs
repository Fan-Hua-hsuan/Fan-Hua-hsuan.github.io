using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace BackendWebApi.Helpers
{
    public class FileLoader
    {
        private readonly IWebHostEnvironment _env;
        public FileLoader(IWebHostEnvironment env)
        {
            _env = env;
        }
        public string LoadFile(string folderName, string fileName)
        {
            if (string.IsNullOrEmpty(folderName) || string.IsNullOrEmpty(fileName))
            {
                return @"{""Error"":""The folder or file name is null or empty.It is not allowed.""}";
            }

            string path = Path.Combine(_env.ContentRootPath, folderName);
            //string path2 = Path.Combine(Directory.GetCurrentDirectory(), "Json");
            string pathFile = Path.Combine(path, fileName);
            string json = System.IO.File.ReadAllText(pathFile);

            return json;
        }
    }
}
