using System.Collections.Generic;

namespace FestiTimer.API.ViewModels
{
    public class PersonWorkshiftRegistrationsViewModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<WorkshiftRegistrationViewModel> Workshifts { get; set; }
    }
}
