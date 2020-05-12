using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Context;
using FestiTimer.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace FestiTimer.Domain.Repositories
{
    public class WorkshiftRepository : IWorkshiftRepository
    {
        private readonly FestiTimerContext _context;

        public WorkshiftRepository(FestiTimerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Workshift>> GetAllWorkshifts()
        {
            return await _context.Workshifts
                .Include(w => w.WorkedTimeblocks)
                .Include(w => w.Job)
                .ToListAsync();
        }

        public async Task<Workshift> GetWorkshift(long workshiftId)
        {
            return await _context.Workshifts
                .Include(w => w.WorkedTimeblocks)
                .FirstOrDefaultAsync(w => w.Id == workshiftId);
        }

        public void UpdateWorkshift(Workshift workshift)
        {
            _context.Workshifts.Update(workshift);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
