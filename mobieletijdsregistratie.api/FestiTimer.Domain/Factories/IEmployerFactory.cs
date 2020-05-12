using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public interface IEmployerFactory
    {
        Employer CreateEmployer(long id, string firstName, string lastName);
    }
}
