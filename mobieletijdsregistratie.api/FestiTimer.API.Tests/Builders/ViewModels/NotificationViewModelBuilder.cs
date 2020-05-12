using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Models;
using System;

namespace FestiTimer.API.Tests.Builders.ViewModels
{
    public class NotificationViewModelBuilder
    {
        private long _id;
        private PersonViewModel _person;
        private string _state;
        private Job _job;
        private DateTime _date;

        public NotificationViewModelBuilder()
        {
            _id = 1;
            _person = null;
            _state = null;
            _job = null;
            _date = DateTime.MinValue;
        }

        public NotificationViewModelBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public NotificationViewModelBuilder WithPerson(PersonViewModel person)
        {
            _person = person;
            return this;
        }

        public NotificationViewModelBuilder WithState(string state)
        {
            _state = state;
            return this;
        }

        public NotificationViewModelBuilder WithJob(Job job)
        {
            _job = job;
            return this;
        }

        public NotificationViewModelBuilder WithDateTime(DateTime date)
        {
            _date = date;
            return this;
        }

        public NotificationViewModel Build()
        {
            return new NotificationViewModel
            {
                Id = _id,
                Person = _person,
                State = _state,
                Job = _job,
                Date = _date
            };
        }
    }
}
