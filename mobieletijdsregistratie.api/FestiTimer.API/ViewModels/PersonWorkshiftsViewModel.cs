using System.Collections.Generic;

namespace FestiTimer.API.ViewModels
{
    public class PersonWorkshiftsViewModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<WorkshiftViewModel> Workshifts { get; set; }
    }
}
