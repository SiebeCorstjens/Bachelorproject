namespace FestiTimer.Domain.Models
{
    public class Person
    {
        public Person(long id, string firstName, string lastName, string cellphoneNumber)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            CellphoneNumber = cellphoneNumber;
        }

        protected Person() { }

        public long Id { get; private set; }

        public string FirstName { get; private set; }

        public string LastName { get; private set; }

        public string CellphoneNumber { get; private set; }
    }
}
