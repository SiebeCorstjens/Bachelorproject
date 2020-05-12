using FestiTimer.Domain.Models;
using System;

namespace FestiTimer.Domain.Factories
{
    public class NotificationFactory : INotificationFactory
    {
        public Notification CreateNotification(Employer employer, Person person, string state, Job job, DateTime date)
        {
            return new Notification(employer, person, state, job, date);
        }
    }
}
