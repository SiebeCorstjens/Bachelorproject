using System;
using FestiTimer.Domain.Models;

namespace FestiTimer.API.ViewModels
{
    public class WorkshiftViewModel
    {
        public long Id { get; set; }
        public Job Job { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime StopDateTime { get; set; }
    }
}
