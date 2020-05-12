using FestiTimer.Domain.Models;
using FestiTimer.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FestiTimer.Domain.Factories;

namespace FestiTimer.Domain.Services
{
    public class ContractService : IContractService
    {
        private readonly IContractRepository _contractRepository;
        private readonly IContractFactory _contractFactory;
        private readonly IWorkscheduleFactory _workscheduleFactory;

        public ContractService(IContractRepository contractRepository, IContractFactory contractFactory, IWorkscheduleFactory workscheduleFactory)
        {
            _contractRepository = contractRepository;
            _contractFactory = contractFactory;
            _workscheduleFactory = workscheduleFactory;
        }

        public async Task<IEnumerable<Contract>> GetAllContracts()
        {
            return await _contractRepository.GetAllContracts();
        }

        public async Task<Contract> GetContract(long contractId)
        {
            return await _contractRepository.GetContract(contractId);
        }

        public async Task<List<Contract>> GetAllContractsByDay(long employerId, DateTime dateTime)
        {
            var contracts = await _contractRepository.GetContractsByEmployerId(employerId);

            return contracts
                .Where(c => c.Workschedule.Workshifts.Any(w => w.StartDateTime.Day == dateTime.Day))
                .ToList();
        }

        public async Task<List<Contract>> GetAllContractsByDayAndHour(long employerId, DateTime dateTime)
        {
            var contracts = await _contractRepository.GetContractsByEmployerId(employerId);

            return contracts
                .Where(c => c.Workschedule.Workshifts.Any(w => w.StartDateTime.Day == dateTime.Day))
                .Select(c =>
                {
                    var filteredWorkshifts = c.Workschedule.Workshifts
                        .Where(w => w.StartDateTime.Hour == dateTime.Hour 
                                    || w.StartDateTime.Hour == dateTime.AddHours(-1).Hour
                                    || w.StartDateTime.Hour == dateTime.AddHours(1).Hour
                                    || w.TimerState == "StartedState"
                                    || w.TimerState == "PausedState")
                        .ToList();

                    var workschedule = _workscheduleFactory.CreateWorkschedule(c.Workschedule.Id, filteredWorkshifts);

                    return _contractFactory.CreateContract(c.Id, c.Person, c.Employer, workschedule);
                })
                .Where(c => c.Workschedule.Workshifts.Any())
                .ToList();
        }

        public async Task<Contract> GetContractByWorkshiftId(long workshiftId)
        {
            return await _contractRepository.GetContractByWorkshiftId(workshiftId);
        }
    }
}
