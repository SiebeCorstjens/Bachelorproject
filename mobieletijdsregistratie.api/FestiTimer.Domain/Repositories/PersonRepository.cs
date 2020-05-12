using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Context;
using FestiTimer.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace FestiTimer.Domain.Repositories
{
    public class PersonRepository : IPersonRepository
    {
        private readonly FestiTimerContext _context;

        public PersonRepository(FestiTimerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Person>> GetAllPersons()
        {
            return await _context.Persons.ToListAsync();
        }

        public async Task<Person> GetPerson(long personId)
        {
            return await _context.Persons.FirstOrDefaultAsync(p => p.Id == personId);
        }
    }
}
