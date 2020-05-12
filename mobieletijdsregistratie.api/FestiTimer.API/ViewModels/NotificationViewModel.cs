using System;
using FestiTimer.Domain.Models;

namespace FestiTimer.API.ViewModels
{
    public class NotificationViewModel
    {
        public long Id { get; set; }
        public PersonViewModel Person { get;  set; }
        public string State { get;  set; }
        public Job Job { get;  set; }
        public DateTime Date { get; set; }
    }
}
