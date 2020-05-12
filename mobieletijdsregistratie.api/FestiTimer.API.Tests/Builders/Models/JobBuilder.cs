using FestiTimer.Domain.Models;

namespace FestiTimer.API.Tests.Builders.Models
{
    public class JobBuilder
    {
        private long _id;
        private string _description;
        private string _location;

        public JobBuilder()
        {
            _id = 1;
            _description = "Opruimingsdienst";
            _location = "Camping A";
        }

        public JobBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public JobBuilder WithDescription(string description)
        {
            _description = description;
            return this;
        }

        public JobBuilder WithLocation(string location)
        {
            _location = location;
            return this;
        }

        public Job Build()
        {
            return new Job(_id, _description, _location);
        }
    }
}
