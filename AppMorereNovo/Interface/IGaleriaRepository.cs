using System.Collections.Generic;
using AppMorereNovo.Models;

namespace AppMorereNovo.Interface
{
    public interface IGaleriaRepository
    {
        List<GaleriaFoto> List();
        //GaleriaFoto GetByTitulo(string titulo);

        List<GaleriaFoto> ListByTitulo(string titulo);
   //     List<Author> GetByNameSubstring(string nameSubstring);

    }
}
