using FestiTimer.Domain.Models;

namespace FestiTimer.API.Tests.Builders.Models
{
    public class PersonBuilder
    {
        private long _id;
        private string _firstName;
        private string _lastName;
        private string _cellphoneNumber;

        public PersonBuilder()
        {
            _id = 1;
            _firstName = "Wim";
            _lastName = "Kesselaar";
            _cellphoneNumber = "0476164261";
        }

        public PersonBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public PersonBuilder WithFirstName(string firstName)
        {
            _firstName = firstName;
            return this;
        }

        public PersonBuilder WithLastName(string lastName)
        {
            _lastName = lastName;
            return this;
        }

        public PersonBuilder WithCellphoneNumber(string cellphoneNumber)
        {
            _cellphoneNumber = cellphoneNumber;
            return this;
        }

        public Person Build()
        {
            return new Person(_id, _firstName, _lastName, _cellphoneNumber);
        }
    }
}
