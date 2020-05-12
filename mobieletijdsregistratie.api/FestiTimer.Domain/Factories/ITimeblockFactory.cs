using System;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Factories
{
    public interface ITimeblockFactory
    {
        Timeblock CreateTimeblock(long id, DateTime startTime, DateTime stopTime);
        Timeblock CreateTimeblock(DateTime startTime);
    }
}
