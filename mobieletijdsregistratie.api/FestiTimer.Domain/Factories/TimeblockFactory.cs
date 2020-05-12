using System;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public class TimeblockFactory : ITimeblockFactory
    {
        public Timeblock CreateTimeblock(long id, DateTime startTime, DateTime stopTime)
        {
            return new Timeblock(id, startTime, stopTime);
        }

        public Timeblock CreateTimeblock(DateTime startTime)
        {
            return new Timeblock(startTime);
        }
    }
}
