using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace AppMorereNovo.Models
{
    //public class quadro
    //{
    //    [JsonProperty("quadro")]
    //    public infoquadro oquadro { get; set; }

    //}

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

    public class SuperCatalogo
    {
        public Int16 oindex { get; set; }
        public string Caminho { get; set; }
        public string Titulo { get; set; }
      //  [JsonProperty("Quadros")]
        public List<quadro> Quadros { get; set; }
    }
}
