using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public class PersonFactory : IPersonFactory
    {
        public Person CreatePerson(long id, string firstName, string lastName, string cellphoneNumber)
        {
            return new Person(id, firstName, lastName, cellphoneNumber);
        }
    }
}
