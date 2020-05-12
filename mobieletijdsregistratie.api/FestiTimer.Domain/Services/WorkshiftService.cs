using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FestiTimer.Domain.Factories;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Repositories;

namespace FestiTimer.Domain.Services
{
    public class WorkshiftService : IWorkshiftService
    {
        private readonly IWorkshiftRepository _workshiftRepository;
        private readonly ITimeblockRepository _timeblockRepository;
        private readonly ITimeblockFactory _timeblockFactory;

        public WorkshiftService(IWorkshiftRepository workshiftRepository, ITimeblockRepository timeblockRepository, ITimeblockFactory timeblockFactory)
        {
            _workshiftRepository = workshiftRepository;
            _timeblockRepository = timeblockRepository;
            _timeblockFactory = timeblockFactory;
        }

        public async Task<IEnumerable<Workshift>> GetAllWorkshifts()
        {
            return await _workshiftRepository.GetAllWorkshifts();
        }

        public async Task<Workshift> GetWorkshift(long workshiftId)
        {
            return await _workshiftRepository.GetWorkshift(workshiftId);
        }

        public async Task<bool> StartWorkshift(long workshiftId)
        {
            var workshift = await _workshiftRepository.GetWorkshift(workshiftId);

            if (!workshift.State.StartTimer()) return false;

            var timeblock = _timeblockFactory.CreateTimeblock(DateTime.Now);

            workshift.WorkedTimeblocks.Add(timeblock);

            _workshiftRepository.UpdateWorkshift(workshift);
            await _workshiftRepository.SaveAsync();

            return true;
        }

        public async Task<bool> PauseWorkshift(long workshiftId)
        {
            var workshift = await _workshiftRepository.GetWorkshift(workshiftId);

            if (!workshift.State.PauseTimer()) return false;

            var timeblock = workshift.WorkedTimeblocks.LastOrDefault();
            if (timeblock == null) return false;

            var updatedTimeblock = _timeblockFactory.CreateTimeblock(timeblock.Id, timeblock.StartTime, DateTime.Now);

            _timeblockRepository.UpdateTimeblock(timeblock, updatedTimeblock);
            await _timeblockRepository.SaveAsync();

            return true;
        }

        public async Task<bool> StopWorkshift(long workshiftId)
        {
            var workshift = await _workshiftRepository.GetWorkshift(workshiftId);

            if (!workshift.State.StopTimer()) return false;

            var timeBlock = workshift.WorkedTimeblocks.LastOrDefault();
            if (timeBlock == null) return false;

            if (timeBlock.StopTime != DateTime.MinValue)
            {
                await _timeblockRepository.SaveAsync();
                return true;
            }

            var timeblockToBeUpdated = _timeblockFactory.CreateTimeblock(timeBlock.Id, timeBlock.StartTime, DateTime.Now);
            _timeblockRepository.UpdateTimeblock(timeBlock, timeblockToBeUpdated);

            await _timeblockRepository.SaveAsync();

            return true;
        }
    }
}
