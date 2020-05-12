using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public interface IJobFactory
    {
        Job CreateJob(long id, string description, string location);
    }
}
