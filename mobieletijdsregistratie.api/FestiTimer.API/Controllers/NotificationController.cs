using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace FestiTimer.API.Controllers
{
    [Route("notifications")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly INotificationService _notificationService;

        public NotificationController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }

        [HttpDelete]
        [Route("{notificationId}")]
        public IActionResult DeleteNotification(long notificationId)
        {
            _notificationService.DeleteNotification(notificationId);

            return NoContent();
        }
    }
}