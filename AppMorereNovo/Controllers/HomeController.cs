using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AppMorereNovo.Interface;
using AppMorereNovo.Models;

namespace AppMorereNovo.Controllers
{
    public class HomeController : Controller
    {

        //private readonly GaleriaDbContext _context;

        //public HomeController(GaleriaDbContext context)
        //{
        //    _context = context;
        //}


        //private readonly IGaleriaRepository _galeriaRepository;

        //public HomeController(IGaleriaRepository galRepository)
        //{
        //    _galeriaRepository = galRepository;
        //}



        //public HomeController()
        // {

        //}


        //GET: api/galeria
        [HttpGet]
        public IActionResult NovaGaleria()
        {
            //var resultado = _galeriaRepository.List();
            //return View(resultado);
            return View();

        }


        //public async Task<IActionResult> Galeria() 
        //{

        //    var galeriaDbContext = (from nomefoto in _context.FotoSites
        //                            join path in _context.Categorias on nomefoto.CategoriaID equals path.ID
        //                            orderby nomefoto.CategoriaID //descending where nomefoto.CategoriaID != 3
        //                            select new MatrizFotos { Caminho = path.Path, Titulo = path.Titulo, Foto = nomefoto.FotoTit });

        //    return View(await galeriaDbContext.ToListAsync());
        //}



        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            // ViewData["Message"] = "Your contact page.";

            //return View();
            return RedirectToAction("demoangular");

        }

        public IActionResult Error()
        {
            return View();
        }


        public IActionResult mapsGoogle()
        {
            return View();

        }





        public IActionResult demoangular()
        {

            return View();// File("~/wwwroot/demoAngularJS.html","text/html");
        }





        [HttpPost]
        public IActionResult Contact(string message)
        {
            //ViewData[""] = "Your contact page.";


            ViewBag.TheMessage = "Obrigado, recebemos sua mensagem";
            return View();
        }



        public IActionResult Serial(string letterCase)
        {
            var serial = "ASPNETMVC5";
            if (letterCase == "lower")
            {
                return Content(serial.ToLower());
            }
            return RedirectToAction("Index");
        }

        public IActionResult comochegar()
        {


            return View();
        }

        
        
        //public async Task<IActionResult> Galeria() 
        //{

        //    var galeriaDbContext = (from nomefoto in _context.FotoSites
        //                            join path in _context.Categorias on nomefoto.CategoriaID equals path.ID
        //                            orderby nomefoto.CategoriaID //descending where nomefoto.CategoriaID != 3
        //                            select new MatrizFotos { Caminho = path.Path, Titulo = path.Titulo, Foto = nomefoto.FotoTit });

        //    return View(await galeriaDbContext.ToListAsync());
        //}


        //public async Task<IActionResult> Galeria() //IActionResult Galeria()
        //{

        //    //var galeriaDbContext = (from nomefoto in _context.FotoSites
        //    //                        join path in _context.Categorias on nomefoto.CategoriaID equals path.ID
        //    //                        orderby nomefoto.CategoriaID //descending where nomefoto.CategoriaID != 3
        //    //                        select new MatrizFotos { Caminho = path.Path, Titulo = path.Titulo, Foto = nomefoto.FotoTit });

        //    //return View(await galeriaDbContext.ToListAsync());
        //}


        //public JsonResult Galeria()
        //{
        //    //var movies = new List<object>();

        //    //movies.Add(new { Title = "Ghostbusters", Genre = "Comedy", Year = 1984 });
        //    //movies.Add(new { Title = "Gone with Wind", Genre = "Drama", Year = 1939 });
        //    //movies.Add(new { Title = "Star Wars", Genre = "Science Fiction", Year = 1977 });

        //    //return Json(movies, JsonRequestBehavior.AllowGet);
        //    return View()
        //}




    }
}
