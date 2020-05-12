using System.Collections.Generic;
using FestiTimer.API.ViewModels;

namespace FestiTimer.API.Tests.Builders.ViewModels
{
    public class PersonWorkshiftRegistrationsViewModelBuilder
    {
        private long _id;
        private string _name;
        private List<WorkshiftRegistrationViewModel> _workshifts;

        public PersonWorkshiftRegistrationsViewModelBuilder()
        {
            _id = 1;
            _name = "Wim Kesselaar";
            _workshifts = null;
        }

        public PersonWorkshiftRegistrationsViewModelBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public PersonWorkshiftRegistrationsViewModelBuilder WithName(string name)
        {
            _name = name;
            return this;
        }

        public PersonWorkshiftRegistrationsViewModelBuilder WithWorkshifts(List<WorkshiftRegistrationViewModel> workshifts)
        {
            _workshifts = workshifts;
            return this;
        }

        public PersonWorkshiftRegistrationsViewModel Build()
        {
            return new PersonWorkshiftRegistrationsViewModel
            {
                Id = _id,
                Name = _name,
                Workshifts = _workshifts
            };
        }
    }
}
