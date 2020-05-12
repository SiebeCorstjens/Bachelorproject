using System.Collections.Generic;
using FestiTimer.Domain.Models;

namespace FestiTimer.API.Tests.Builders.Models
{
    public class WorkscheduleBuilder
    {
        private long _id;
        private List<Workshift> _workshifts;

        public WorkscheduleBuilder()
        {
            _id = 1;
            _workshifts = new List<Workshift>
            {
                new WorkshiftBuilder().Build(),
                new WorkshiftBuilder().Build(),
            };
        }

        public WorkscheduleBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public WorkscheduleBuilder WithWorkshifts(List<Workshift> workshifts)
        {
            _workshifts = workshifts;
            return this;
        }

        public Workschedule Build()
        {
            return new Workschedule(_id, _workshifts);
        }
    }
}
