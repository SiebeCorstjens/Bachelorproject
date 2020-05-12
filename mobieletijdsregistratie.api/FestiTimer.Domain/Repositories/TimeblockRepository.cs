using System.Threading.Tasks;
using FestiTimer.Domain.Context;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Repositories
{
    public class TimeblockRepository : ITimeblockRepository
    {
        private readonly FestiTimerContext _context;

        public TimeblockRepository(FestiTimerContext context)
        {
            _context = context;
        }

        public void UpdateTimeblock(Timeblock timeblockFromRepo, Timeblock timeblockToBeUpdated)
        {
            _context.Entry(timeblockFromRepo).CurrentValues.SetValues(timeblockToBeUpdated);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
