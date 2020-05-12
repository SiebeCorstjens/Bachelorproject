using FestiTimer.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Repositories;

namespace FestiTimer.Domain.Services
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepository _personRepository;

        public PersonService(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        public async Task<IEnumerable<Person>> GetAllPersons()
        {
            return await _personRepository.GetAllPersons();
        }

        public async Task<Person> GetPerson(long personId)
        {
            return await _personRepository.GetPerson(personId);
        }
    }
}
