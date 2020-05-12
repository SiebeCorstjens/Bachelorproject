using FestiTimer.Domain.Context;
using FestiTimer.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FestiTimer.Domain.Repositories
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly FestiTimerContext _context;

        public NotificationRepository(FestiTimerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Notification>> GetAllNotifications()
        {
            return await _context.Notifications.ToListAsync();
        }

        public async Task<IEnumerable<Notification>> GetAllNotificationsByEmployerId(long employerId)
        {
            return await _context.Notifications
                .Include(n => n.Employer)
                .Include(n => n.Person)
                .Include(n => n.Job)
                .Where(n => n.Employer.Id == employerId).ToListAsync();
        }

        public async Task<Notification> GetNotification(long notificationId)
        {
            return await _context.Notifications
                .Include(n => n.Employer)
                .Include(n => n.Person)
                .Include(n => n.Job)
                .FirstOrDefaultAsync(n => n.Id == notificationId);
        }

        public Notification AddNotification(Notification notification)
        {
            return _context.Add(notification).Entity;
        }

        public void DeleteNotification(Notification notification)
        {
            _context.Notifications.Remove(notification);
        }

        public async Task<bool> CheckNotificationIfExist(Notification notification)
        {
            return await _context.Notifications.AnyAsync(n => n.Employer == notification.Employer && 
                                                              n.Person == notification.Person &&
                                                              n.State == notification.State && 
                                                              n.Job == notification.Job);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
