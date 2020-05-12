using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public class ContractFactory : IContractFactory
    {
        public Contract CreateContract(long id, Person person, Employer employer, Workschedule workschedule)
        {
            return new Contract(id, person, employer, workschedule);
        }
    }
}
