using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Repositories
{
    public interface IContractRepository
    {
        Task<IEnumerable<Contract>> GetAllContracts();
        Task<Contract> GetContract(long contractId);
        Task<List<Contract>> GetContractsByEmployerId(long employerId);
        Task<Contract> GetContractByWorkshiftId(long workshiftId);
    }
}
