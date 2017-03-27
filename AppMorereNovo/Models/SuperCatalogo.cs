using System;
using System.Collections.Generic;


namespace AppMorereNovo.Models
{
    //public class quadro
    //{
    //    [JsonProperty("quadro")]
    //    public infoquadro oquadro { get; set; }

    //}

    public class SuperCatalogo
    {
        public Int16 oindex { get; set; }
        public string Caminho { get; set; }
        public string Titulo { get; set; }
      //  [JsonProperty("Quadros")]
        public List<quadro> Quadros { get; set; }
    }
}
