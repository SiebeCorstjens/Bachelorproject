using FestiTimer.Domain.Models;
using System;

namespace FestiTimer.Domain.Factories
{
    public interface INotificationFactory
    {
        Notification CreateNotification(Employer employer, Person person, string state, Job job, DateTime date);
    }
}
