using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Services
{
    public interface IWorkshiftService
    {
        Task<IEnumerable<Workshift>> GetAllWorkshifts();
        Task<Workshift> GetWorkshift(long workshiftId);
        Task<bool> StartWorkshift(long workshiftId);
        Task<bool> PauseWorkshift(long workshiftId);
        Task<bool> StopWorkshift(long workshiftId);
    }
}
