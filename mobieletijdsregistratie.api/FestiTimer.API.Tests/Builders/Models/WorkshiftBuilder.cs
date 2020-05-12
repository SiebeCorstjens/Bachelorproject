using System;
using System.Collections.Generic;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Models.States;

namespace FestiTimer.API.Tests.Builders.Models
{
    public class WorkshiftBuilder
    {
        private long _id;
        private Job _job;
        private DateTime _startDateTime;
        private DateTime _stopDateTime;
        private State _state;
        private List<Timeblock> _workedTimeBlocks;

        public WorkshiftBuilder()
        {
            _id = 1;
            _job = new Job(1, "Poetsen Kookeilanden", "Camping A");
            _startDateTime = DateTime.MinValue;
            _stopDateTime = DateTime.MinValue;
            _state = new NoState(new Workshift());
            _workedTimeBlocks = new List<Timeblock>();
        }

        public WorkshiftBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public WorkshiftBuilder WithJob(Job job)
        {
            _job = job;
            return this;
        }

        public WorkshiftBuilder WithStartDateTime(DateTime startDateTime)
        {
            _startDateTime = startDateTime;
            return this;
        }

        public WorkshiftBuilder WithStopDateTime(DateTime stopDateTime)
        {
            _stopDateTime = stopDateTime;
            return this;
        }

        public WorkshiftBuilder WithStartedState()
        {
            _state = new StartedState(new Workshift());
            return this;
        }

        public WorkshiftBuilder WithPausedState()
        {
            _state = new PausedState(new Workshift());
            return this;
        }

        public WorkshiftBuilder WithStoppedState()
        {
            _state = new StoppedState(new Workshift());
            return this;
        }

        public WorkshiftBuilder WithWorkedTimeBlocks(List<Timeblock> workedTimeBlocks)
        {
            _workedTimeBlocks = workedTimeBlocks;
            return this;
        }

        public WorkshiftBuilder WithTimeblock(DateTime startTime)
        {
            _workedTimeBlocks.Add(new Timeblock(startTime));
            return this;
        }

        public WorkshiftBuilder WithTimeblock(long id, DateTime startTime, DateTime stopTime)
        {
            _workedTimeBlocks.Add(new Timeblock(id, startTime, stopTime));
            return this;
        }

        public Workshift Build()
        {
            return new Workshift(_id, _job, _startDateTime, _stopDateTime, _workedTimeBlocks, _state);
        }
    }
}
