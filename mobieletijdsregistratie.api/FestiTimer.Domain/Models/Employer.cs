namespace FestiTimer.Domain.Models
{
    public class Employer
    {
        public Employer(long id, string firstName, string lastName)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
        }

        protected Employer() { }

        public long Id { get; private set; }

        public string FirstName { get; private set; }

        public string LastName { get; private set; }
    }
}
