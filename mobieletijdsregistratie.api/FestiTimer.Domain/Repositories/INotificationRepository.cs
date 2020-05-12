using System.Collections.Generic;
using System.Threading.Tasks;
using FestiTimer.Domain.Models;

namespace FestiTimer.Domain.Repositories
{
    public interface INotificationRepository
    {
        Task<IEnumerable<Notification>> GetAllNotificationsByEmployerId(long employerId);
        Task<Notification> GetNotification(long notificationId);
        Notification AddNotification(Notification notification);
        void DeleteNotification(Notification notification);
        Task<bool> CheckNotificationIfExist(Notification notification);
        Task SaveAsync();
    }
}
