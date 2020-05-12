using System.Collections.Generic;
using FestiTimer.API.ViewModels;

namespace FestiTimer.API.Tests.Builders.ViewModels
{
    public class PersonWorkshiftsViewModelBuilder
    {
        private long _id;
        private string _name;
        private List<WorkshiftViewModel> _workshifts;

        public PersonWorkshiftsViewModelBuilder()
        {
            _id = 1;
            _name = "Wim Kesselaar";
            _workshifts = null;
        }

        public PersonWorkshiftsViewModelBuilder WithId(long id)
        {
            _id = id;
            return this;
        }

        public PersonWorkshiftsViewModelBuilder WithName(string name)
        {
            _name = name;
            return this;
        }

        public PersonWorkshiftsViewModelBuilder WithWorkshifts(List<WorkshiftViewModel> workshifts)
        {
            _workshifts = workshifts;
            return this;
        }

        public PersonWorkshiftsViewModel Build()
        {
            return new PersonWorkshiftsViewModel
            {
                Id = _id,
                Name = _name,
                Workshifts = _workshifts
            };
        }
    }
}
