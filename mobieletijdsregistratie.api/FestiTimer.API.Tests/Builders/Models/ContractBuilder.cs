using FestiTimer.Domain.Models;

namespace FestiTimer.API.Tests.Builders.Models
{
    public class ContractBuilder
    {
        private long _id;
        private Person _person;
        private Employer _employer;
        private Workschedule _workschedule;

        public ContractBuilder()
        {
            _id = 1;
            _person = null;
            _employer = null;
            _workschedule = null;
        }

        public ContractBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public ContractBuilder WithPerson(Person person)
        {
            _person = person;
            return this;
        }

        public ContractBuilder WithEmployer(Employer employer)
        {
            _employer = employer;
            return this;
        }

        public ContractBuilder WithWorkschedule(Workschedule workschedule)
        {
            _workschedule = workschedule;
            return this;
        }

        public Contract Build()
        {
            return new Contract(_id, _person, _employer, _workschedule);
        }
    }
}
