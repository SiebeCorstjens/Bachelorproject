using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Repositories
{
    public interface IPersonRepository
    {
        Task<IEnumerable<Person>> GetAllPersons();
        Task<Person> GetPerson(long personId);
    }
}
