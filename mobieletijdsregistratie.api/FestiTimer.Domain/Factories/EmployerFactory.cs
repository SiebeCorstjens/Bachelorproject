using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public class EmployerFactory : IEmployerFactory
    {
        public Employer CreateEmployer(long id, string firstName, string lastName)
        {
            return new Employer(id, firstName, lastName);
        }
    }
}
