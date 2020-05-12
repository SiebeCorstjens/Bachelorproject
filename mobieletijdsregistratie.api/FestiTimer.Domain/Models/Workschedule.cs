using System.Collections.Generic;

namespace FestiTimer.Domain.Models
{
    public class Workschedule
    {
        public Workschedule(long id, List<Workshift> workshifts)
        {
            Id = id;
            Workshifts = workshifts;
        }

        protected Workschedule() { }

        public long Id { get; private set; }

        public List<Workshift> Workshifts { get; private set; }
    }
}
