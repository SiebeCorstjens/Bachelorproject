using System;

namespace FestiTimer.Domain.Models
{
    public class Notification
    {
        public Notification(long id, Employer employer, Person person, string state, Job job, DateTime date)
        {
            Id = id;
            Employer = employer;
            Person = person;
            State = state;
            Job = job;
            Date = date;
        }

        public Notification(Employer employer, Person person, string state, Job job, DateTime date)
        {
            Employer = employer;
            Person = person;
            State = state;
            Job = job;
            Date = date;
        }

        public Notification() { }

        public long Id { get; private set; }

        public Employer Employer { get; private set; }

        public Person Person { get; private set; }

        public string State { get; private set; }

        public Job Job { get; private set; }

        public DateTime Date { get; private set; }
    }
}
