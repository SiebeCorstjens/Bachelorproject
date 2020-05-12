using System;

namespace FestiTimer.Domain.Models
{
    public class Timeblock
    {
        public Timeblock(long id, DateTime startTime, DateTime stopTime)
        {
            Id = id;
            StartTime = startTime;
            StopTime = stopTime;
        }

        public Timeblock(DateTime startTime)
        {
            StartTime = startTime;
        }

        protected Timeblock() { }

        public long Id { get; private set; }

        public DateTime StartTime { get; private set; }

        public DateTime StopTime { get; private set; }
    }
}
