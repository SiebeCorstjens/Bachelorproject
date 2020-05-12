using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public interface IPersonFactory
    {
        Person CreatePerson(long id, string firstName, string lastName, string cellphoneNumber);
    }
}
