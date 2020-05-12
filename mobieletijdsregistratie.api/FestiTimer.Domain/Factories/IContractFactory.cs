using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public interface IContractFactory
    {
        Contract CreateContract(long id, Person person, Employer employer, Workschedule workschedule);
    }
}
