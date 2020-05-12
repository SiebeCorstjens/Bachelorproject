using System;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Models;

namespace FestiTimer.API.Tests.Builders.ViewModels
{
    internal class WorkshiftRegistrationViewModelBuilder
    {
        private long _id;
        private Job _job;
        private DateTime _startDateTime;
        private DateTime _stopDateTime;
        private TimeSpan _workTime;
        private string _timerState;

        public WorkshiftRegistrationViewModelBuilder()
        {
            _id = 1;
            _startDateTime = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 09, 00, 00);
            _stopDateTime = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 12, 00, 00);
            _workTime = TimeSpan.MinValue;
            _timerState = "NoState";
        }

        public WorkshiftRegistrationViewModelBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public WorkshiftRegistrationViewModelBuilder WithJob(Job job)
        {
            _job = job;
            return this;
        }

        public WorkshiftRegistrationViewModelBuilder WithStartDateTime(DateTime startDateTime)
        {
            _startDateTime = startDateTime;
            return this;
        }

        public WorkshiftRegistrationViewModelBuilder WithStopDateTime(DateTime stopDateTime)
        {
            _stopDateTime = stopDateTime;
            return this;
        }

        public WorkshiftRegistrationViewModelBuilder WithWorkTime(TimeSpan workTime)
        {
            _workTime = workTime;
            return this;
        }

        public WorkshiftRegistrationViewModelBuilder WithTimeState(string timerState)
        {
            _timerState = timerState;
            return this;
        }

        public WorkshiftRegistrationViewModel Build()
        {
            return new WorkshiftRegistrationViewModel()
            {
                Id = _id,
                Job = _job,
                StartDateTime = _startDateTime,
                StopDateTime = _stopDateTime,
                WorkTime = _workTime,
            };
        }
    }
}
