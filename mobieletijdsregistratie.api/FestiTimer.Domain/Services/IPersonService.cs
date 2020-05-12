using FestiTimer.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FestiTimer.Domain.Services
{
    public interface IPersonService
    {
        Task<IEnumerable<Person>> GetAllPersons();
        Task<Person> GetPerson(long personId);
    }
}