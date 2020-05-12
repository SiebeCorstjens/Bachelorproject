using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FestiTimer.Domain.Context;
using FestiTimer.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace FestiTimer.Domain.Repositories
{
    public class ContractRepository : IContractRepository
    {
        private readonly FestiTimerContext _context;

        public ContractRepository(FestiTimerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Contract>> GetAllContracts()
        {
            return await _context.Contracts.ToListAsync();
        }
        
        public async Task<Contract> GetContract(long contractId)
        {
            return await _context.Contracts.FirstOrDefaultAsync(c => c.Id == contractId);
        }

        public async Task<List<Contract>> GetContractsByEmployerId(long employerId)
        {
            return await _context.Contracts
                .Include(c => c.Workschedule.Workshifts).ThenInclude(w => w.Job)
                .Include(c => c.Workschedule.Workshifts).ThenInclude(w => w.WorkedTimeblocks)
                .Include(c => c.Employer)
                .Include(c => c.Person)
                .Where(c => c.Employer.Id == employerId).ToListAsync();
        }

        public async Task<Contract> GetContractByWorkshiftId(long workshiftId)
        {
            return await _context.Contracts
                .Include(c => c.Employer)
                .Include(c => c.Person)
                .FirstOrDefaultAsync(c => c.Workschedule.Workshifts.Any(w => w.Id == workshiftId));
        }
    }
}
