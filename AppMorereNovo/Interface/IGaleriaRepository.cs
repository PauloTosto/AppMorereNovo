using System.Collections.Generic;
using AppMorereNovo.Models;

namespace AppMorereNovo.Interface
{
    public interface IGaleriaRepository
    {
        List<IndexCatalogo> List();
        //   IndexObj0 Lista();
        CatFotos Pesquisa();

        SuperCatFotos SuperPesquisa();

    }
}
