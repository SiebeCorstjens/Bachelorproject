using FestiTimer.Domain.Models;
using System;

namespace FestiTimer.API.ViewModels
{
    public class WorkshiftRegistrationViewModel
    {
        public long Id { get; set; }
        public Job Job { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime StopDateTime { get; set; }
        public TimeSpan WorkTime { get; set; }
        public string TimerState { get; set; }
    }
}
