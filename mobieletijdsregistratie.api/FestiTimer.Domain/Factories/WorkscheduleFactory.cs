using System.Collections.Generic;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public class WorkscheduleFactory : IWorkscheduleFactory
    {
        public Workschedule CreateWorkschedule(long id, List<Workshift> workshifts)
        {
            return new Workschedule(id, workshifts);
        }
    }
}
