using FestiTimer.API.Controllers;
using FestiTimer.Domain.Services;
using Moq;
using NUnit.Framework;

namespace FestiTimer.API.Tests.ControllerTests
{
    [TestFixture]
    public class NotificationControllerTests
    {
        private Mock<INotificationService> _notificationServiceMock;
        private NotificationController _controller;

        [SetUp]
        public void SetUp()
        {
            _notificationServiceMock = new Mock<INotificationService>();
            _controller = new NotificationController(_notificationServiceMock.Object);
        }

        [Test]
        public void DeleteNotification_CallsDeleteNotificationFromService()
        {
            // Arrange
            _notificationServiceMock.Setup(n => n.DeleteNotification(It.IsAny<long>()));

            // Act
            _controller.DeleteNotification(1);

            // Assert
            _notificationServiceMock.Verify(n => n.DeleteNotification(1));
        }
    }
}
