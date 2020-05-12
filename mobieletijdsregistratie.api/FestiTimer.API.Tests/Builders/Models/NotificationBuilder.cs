using FestiTimer.Domain.Models;
using System;

namespace FestiTimer.API.Tests.Builders.Models
{
    public class NotificationBuilder
    {
        private long _id;
        private Employer _employer;
        private Person _person;
        private string _state;
        private Job _job;
        private DateTime _date;

        public NotificationBuilder()
        {
            _id = 1;
            _employer = null;
            _person = null;
            _state = null;
            _job = null;
            _date = DateTime.MinValue;
        }

        public NotificationBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public NotificationBuilder WithPerson(Person person)
        {
            _person = person;
            return this;
        }

        public NotificationBuilder WithEmployer(Employer employer)
        {
            _employer = employer;
            return this;
        }

        public NotificationBuilder WithState(string state)
        {
            _state = state;
            return this;
        }

        public NotificationBuilder WithJob(Job job)
        {
            _job = job;
            return this;
        }

        public NotificationBuilder WithDateTime(DateTime date)
        {
            _date = date;
            return this;
        }

        public Notification Build()
        {
            return new Notification(_id, _employer, _person, _state, _job, _date);
        }
    }
}
