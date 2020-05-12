using System;
using System.Collections.Generic;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Models.States;

namespace FestiTimer.Domain.Factories
{
    public interface IWorkshiftFactory
    {
        Workshift CreateWorkshift(long id, Job job, DateTime startDateTime, DateTime stopDateTime);

        Workshift CreateWorkshfit(long id, Job job, DateTime startDateTime, DateTime stopDateTime,
            List<Timeblock> workedTimeblocks, State state);
    }
}
