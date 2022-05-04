using AutoMapper;
using BackendWebApi.Models;
using BackendWebApi.ViewModels;


namespace BackendWebApi.Profiles
{
    public class ChampionProfile : Profile
    {
        public ChampionProfile()
        {
            CreateMap<ChampionViewModel, Champion>();
            
            CreateMap<Champion, ChampionViewModel>();
        }
    }
}
