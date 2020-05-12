using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Services
{
    public interface IContractService
    {
        Task<IEnumerable<Contract>> GetAllContracts();
        Task<Contract> GetContract(long contractId);
        Task<List<Contract>> GetAllContractsByDay(long employerId, DateTime dateTime);
        Task<List<Contract>> GetAllContractsByDayAndHour(long employerId, DateTime dateTime);
        Task<Contract> GetContractByWorkshiftId(long workshiftId);
    }
}
