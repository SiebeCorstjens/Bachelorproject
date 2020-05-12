using FestiTimer.API.ViewModels;

namespace FestiTimer.API.Tests.Builders.ViewModels
{
    public class PersonViewModelBuilder
    {
        private long _id;
        private string _name;

        public PersonViewModelBuilder()
        {
            _id = 1;
            _name = "Wim Kesselaar";
        }

        public PersonViewModelBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public PersonViewModelBuilder WithName(string name)
        {
            _name = name;
            return this;
        }

        public PersonViewModel Build()
        {
            return new PersonViewModel
            {
                Id = _id,
                Name = _name
            };
        }
    }
}
