using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppMorereNovo.Models;
using AppMorereNovo.Interface;
using Newtonsoft.Json;
using System.IO;

namespace AppMorereNovo.InfraEstrutura
{
    public class GaleriaRepository : IGaleriaRepository
    {
        //public List<GaleriaFoto> List()
        //{
        //    List<GaleriaFoto> ro;




        //    using (var stream = new FileStream("../AppMorereNovo/wwwroot/Galeria2.json", FileMode.Open)) 
        //    using (StreamReader r = new StreamReader(stream))
        //    {
        //        string json = r.ReadToEnd();
        //        ro = JsonConvert.DeserializeObject<List<GaleriaFoto>>(json);
        //    }
        //    return ro.OrderBy(a => a.Titulo).ToList();

        //}


        public List<IndexCatalogo> List()
        {
            
            SuperCatFotos re = SuperPesquisa();


            CatFotos ra = Pesquisa();
            List<IndexCatalogo> ro = ra.InfoFoto;

            //List<IndexCatalogo> ro = ra.InfoFoto;

            //using (var stream = new FileStream("../AppMorereNovo/wwwroot/galeria3.json", FileMode.Open))
            //using (StreamReader r = new StreamReader(stream))
            //{
            //    string json = r.ReadToEnd();
            //    ro = JsonConvert.DeserializeObject<List<IndexCatalogo>>(json);
            //}
            //   return ro.ToList();

            return ro.OrderBy(a => a.Titulo).ToList();
        }


        public CatFotos Pesquisa()
        {
            CatFotos ro;
            using (var stream = new FileStream("../AppMorereNovo/wwwroot/galeria3.json", FileMode.Open))
            using (StreamReader r = new StreamReader(stream))
            {
                string json = r.ReadToEnd();
                ro = JsonConvert.DeserializeObject<CatFotos>(json);
            }
            //   return ro.ToList();
            return ro;
        }


        public SuperCatFotos SuperPesquisa()
        {
            SuperCatFotos ro;
            using (var stream = new FileStream("../AppMorereNovo/wwwroot/galeria2.json", FileMode.Open))
            using (StreamReader r = new StreamReader(stream))
            {
                string json = r.ReadToEnd();
                ro = JsonConvert.DeserializeObject<SuperCatFotos>(json);
            }
            //   return ro.ToList();
            return ro;
        }





        /*public List<IndexCatalogo> List()
        {
            List<IndexCatalogo> ro;
            using (var stream = new FileStream("../AppMorereNovo/wwwroot/galeria3.json", FileMode.Open))
            using (StreamReader r = new StreamReader(stream))
            {
                string json = r.ReadToEnd();
                ro = JsonConvert.DeserializeObject<List<IndexCatalogo>>(json);
            }
            return ro.ToList();
            return ro.OrderBy(a => a.Titulo).ToList();
        }*/



        //    public IndexObj0 Lista()
        //{
        //    IndexObj0 ro;



        //    using (var stream = new FileStream("../AppMorereNovo/wwwroot/galeria3.json", FileMode.Open)) 
        //    using (StreamReader r = new StreamReader(stream))
        //    {
        //        string json = r.ReadToEnd();
        //        ro = JsonConvert.DeserializeObject<IndexObj0>(json);
        //    }
        //    return ro;

        //}





    }
}

/*
 * exemplo de linq com list
 *  public class AuthorRepository : IAuthorRepository
    {
        public List<Author> List()
        {
            return new List<Author>
            {
                new Author {Name = "Steve Smith", Twitter = "ardalis"},
                new Author {Name="Rick Anderson", Twitter = "RickAndMSFT"},
                new Author {Name="Rachel Appel", Twitter = "rachelappel"},
                new Author {Name="Daniel Roth", Twitter = "danroth27"}
            }.OrderBy(a => a.Name).ToList();
        }

        public Author GetByAlias(string twitterAlias)
        {
            string loweredAlias = twitterAlias.ToLowerInvariant();
            return List().FirstOrDefault(a => a.Twitter.ToLowerInvariant() == loweredAlias);
        }

        public List<Author> GetByNameSubstring(string nameSubstring)
        {
            return List()
            .Where(a => a.Name.IndexOf(nameSubstring, 0, StringComparison.CurrentCultureIgnoreCase) != -1).ToList();
        }
    }
 */

