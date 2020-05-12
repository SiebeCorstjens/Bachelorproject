using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public class JobFactory : IJobFactory
    {
        public Job CreateJob(long id, string description, string location)
        {
            return new Job(id, description, location);
        }
    }
}
