using FestiTimer.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FestiTimer.Domain.Services
{
    public interface INotificationService
    {
        Task<Notification> GetNotification(long notificationId);
        Task<IEnumerable<Notification>> GetAllNotificationsByEmployerId(long employerId);
        Task<Notification> AddNotification(Notification notification);
        void DeleteNotification(long notificationId);
        Task<Notification> CheckWorkshiftForNotification(Workshift workshift);
    }
}
