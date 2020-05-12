using System;
using System.Collections.Generic;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Models.States;

namespace FestiTimer.Domain.Factories
{
    public class WorkshiftFactory : IWorkshiftFactory
    {
        public Workshift CreateWorkshift(long id, Job job, DateTime startDateTime, DateTime stopDateTime)
        {
            return new Workshift(id, job, startDateTime, stopDateTime);
        }

        public Workshift CreateWorkshfit(long id, Job job, DateTime startDateTime, DateTime stopDateTime, List<Timeblock> workedTimeblocks, State state)
        {
            return new Workshift(id, job, startDateTime, stopDateTime, workedTimeblocks, state);
        }
    }
}
