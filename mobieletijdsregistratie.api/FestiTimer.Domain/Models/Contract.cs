namespace FestiTimer.Domain.Models
{
    public class Contract
    {
        public Contract(long id, Person person, Employer employer, Workschedule workschedule)
        {
            Id = id;
            Person = person;
            Employer = employer;
            Workschedule = workschedule;
        }

        public Contract() { }

        public long Id { get; private set; }

        public Person Person { get; private set; }

        public Employer Employer { get; private set; }

        public Workschedule Workschedule { get; private set; }
    }
}
