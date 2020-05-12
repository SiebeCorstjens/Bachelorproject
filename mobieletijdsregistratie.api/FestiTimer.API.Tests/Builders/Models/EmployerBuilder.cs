using FestiTimer.Domain.Models;

namespace FestiTimer.API.Tests.Builders.Models
{
    public class EmployerBuilder
    {
        private long _id;
        private string _firstName;
        private string _lastName;

        public EmployerBuilder()
        {
            _id = 1;
            _firstName = "Wim";
            _lastName = "Kesselaar";
        }

        public EmployerBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public EmployerBuilder WithFirstName(string firstName)
        {
            _firstName = firstName;
            return this;
        }

        public EmployerBuilder WithLastName(string lastName)
        {
            _lastName = lastName;
            return this;
        }

        public Employer Build()
        {
            return new Employer(_id, _firstName, _lastName);
        }
    }
}
