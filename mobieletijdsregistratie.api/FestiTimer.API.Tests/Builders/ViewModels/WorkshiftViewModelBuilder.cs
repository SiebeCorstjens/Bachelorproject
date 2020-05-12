using System;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Models;

namespace FestiTimer.API.Tests.Builders.ViewModels
{
    internal class WorkshiftViewModelBuilder
    {
        private long _id;
        private Job _job;
        private DateTime _startDateTime;
        private DateTime _stopDateTime;

        public WorkshiftViewModelBuilder()
        {
            _id = 1;
            _startDateTime = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 09, 00, 00);
            _stopDateTime = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 12, 00, 00);
        }

        public WorkshiftViewModelBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public WorkshiftViewModelBuilder WithJob(Job job)
        {
            _job = job;
            return this;
        }

        public WorkshiftViewModelBuilder WithStartDateTime(DateTime startDateTime)
        {
            _startDateTime = startDateTime;
            return this;
        }

        public WorkshiftViewModelBuilder WithStopDateTime(DateTime stopDateTime)
        {
            _stopDateTime = stopDateTime;
            return this;
        }

        public WorkshiftViewModel Build()
        {
            return new WorkshiftViewModel()
            {
                Id = _id,
                Job = _job,
                StartDateTime = _startDateTime,
                StopDateTime = _stopDateTime,
            };
        }
    }
}
