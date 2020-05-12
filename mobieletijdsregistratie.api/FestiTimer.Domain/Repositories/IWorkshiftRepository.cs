using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Repositories
{
    public interface IWorkshiftRepository
    {
        Task<IEnumerable<Workshift>> GetAllWorkshifts();
        Task<Workshift> GetWorkshift(long workshiftId);
        void UpdateWorkshift(Workshift workshift);
        Task SaveAsync();
    }
}
