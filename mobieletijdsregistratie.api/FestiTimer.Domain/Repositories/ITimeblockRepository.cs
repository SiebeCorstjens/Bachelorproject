using FestiTimer.Domain.Models;
using System.Threading.Tasks;

namespace FestiTimer.Domain.Repositories
{
    public interface ITimeblockRepository
    {
        void UpdateTimeblock(Timeblock timeblockFromRepo, Timeblock timeblockToBeUpdated);
        Task SaveAsync();
    }
}
