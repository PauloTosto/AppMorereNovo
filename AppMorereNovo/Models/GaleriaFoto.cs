using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;


namespace AppMorereNovo.Models
{
    //galeria3
    /* public class Fotos
     {
         public IEnumerable<string> Foto { get; set; }

     }*/

    public class IndexCatalogo
    {
        public Int16 index { get; set; }
        public string Caminho { get; set; }
        public string Titulo { get; set; }
        public List<string> Fotos { get; set; }
    }
    public class CatFotos
    {
        [JsonProperty("InfoFoto")]
        public List<IndexCatalogo> InfoFoto { get; set; }
    }

    //galeria2
    //definir a classe mais baixa hierarquia
    public class quadro
    {
        [JsonProperty("intervalo")]
        public Int16 intervalo { get; set; }
        [JsonProperty("Fotos")]
        public List<string> Fotos { get; set; }
    }

    public class SuperCatFotos
    {
        [JsonProperty("InfoFoto")]
        public List<SuperCatalogo> InfoFoto { get; set; }
    }



    //exemplo
    public class IndexObj1
    {
        [JsonProperty("REGS")]
        public List<IndexCatalogo> REGS { get; set; }
    }
    public class IndexObj0
    {
        [JsonProperty("REG")]
        public IndexObj1 REG { get; set; }
    }


    public class myClass
    {
        public string ID { get; set; }
        public string KEY1 { get; set; }

        public List<string> CATEG { get; set; }
    }

    public class ESObject1
    {

        [JsonProperty("EVT")]
        public List<myClass> EVT { get; set; }
    }

    public class ESObject0
    {

        [JsonProperty("EVTS")]
        public ESObject1 EVTS { get; set; }
    }
}
