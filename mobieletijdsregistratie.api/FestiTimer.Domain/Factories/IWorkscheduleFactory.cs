using System.Collections.Generic;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public interface IWorkscheduleFactory
    {
        Workschedule CreateWorkschedule(long id, List<Workshift> workshifts);
    }
}
