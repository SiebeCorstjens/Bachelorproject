using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using FestiTimer.Domain.Models.States;

namespace FestiTimer.Domain.Models
{
    public class Workshift
    {
        public Workshift(long id, Job job, DateTime startDateTime, DateTime stopDateTime)
        {
            Id = id;
            Job = job;
            StartDateTime = startDateTime;
            StopDateTime = stopDateTime;
            State = new NoState(this);
            WorkedTimeblocks = new List<Timeblock>();
        }

        public Workshift(long id, Job job, DateTime startDateTime, DateTime stopDateTime, List<Timeblock> workedTimeblocks, State state)
        {
            Id = id;
            Job = job;
            StartDateTime = startDateTime;
            StopDateTime = stopDateTime;
            WorkedTimeblocks = workedTimeblocks;
            State = state;
        }

        public Workshift() { }

        public long Id { get; private set; }

        public Job Job { get; private set; }

        public DateTime StartDateTime { get; private set; }

        public DateTime StopDateTime { get; private set; }

        public List<Timeblock> WorkedTimeblocks { get; private set; }

        public string TimerState { get; private set; }

        [NotMapped]
        public State State
        {
            get => StateFactory.GetState(TimerState, this);
            set => TimerState = value.GetType().Name;
        }

        public void ChangeState(State currentState)
        {
            State = currentState;
        }
    }
}
