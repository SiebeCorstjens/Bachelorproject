using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FestiTimer.API.Tests.Builders.Models;
using FestiTimer.Domain.Factories;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Repositories;
using FestiTimer.Domain.Services;
using Moq;
using NUnit.Framework;

namespace FestiTimer.Domain.Tests.ServiceTests
{
    [TestFixture]
    public class NotificationServiceTests
    {
        private Mock<INotificationRepository> _notificationRepositoryMock;
        private Mock<IContractService> _contractServiceMock;
        private NotificationFactory _notificationFactory;
        private NotificationService _notificationService;

        [SetUp]
        public void SetUp()
        {
            _notificationRepositoryMock = new Mock<INotificationRepository>();
            _contractServiceMock = new Mock<IContractService>();
            _notificationFactory = new NotificationFactory();

            _notificationService = new NotificationService(_contractServiceMock.Object, _notificationFactory, _notificationRepositoryMock.Object);
        }

        [Test]
        public async Task GetNotification_ShouldReturnNotificatoinFromRepository()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var job = new JobBuilder().WithId(1).Build();

            var notification = new NotificationBuilder().WithId(1).WithEmployer(employer).WithPerson(person)
                .WithJob(job).Build();

            _notificationRepositoryMock.Setup(n => n.GetNotification(It.IsAny<long>())).ReturnsAsync(notification);

            // Act
            var result = await _notificationService.GetNotification(1);

            // Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(result));
            _notificationRepositoryMock.Verify(n => n.GetNotification(1), Times.Once);
        }

        [Test]
        public async Task GetAllNotificationsByEmployerId_ShouldReturnAllNotificationsByEmployerIdFromRepository()
        {
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var job = new JobBuilder().WithId(1).Build();

            var notifications = new List<Notification>
            {
                new NotificationBuilder().WithId(1).WithEmployer(employer).WithPerson(person).WithJob(job).Build(),
            };

            _notificationRepositoryMock.Setup(n => n.GetAllNotificationsByEmployerId(It.IsAny<long>()))
                .ReturnsAsync(notifications);

            // Act
            var result = await _notificationService.GetAllNotificationsByEmployerId(1);
            var enumerableResult = result.ToList();

            // Assert
            Assert.That(enumerableResult, Is.Not.Null);
            Assert.That(enumerableResult, Is.EqualTo(result));
            _notificationRepositoryMock.Verify(n => n.GetAllNotificationsByEmployerId(1), Times.Once);
        }

        [Test]
        public async Task AddNotification_ShouldAddNotificationInRepository()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var job = new JobBuilder().WithId(1).Build();

            var notification = new NotificationBuilder().WithId(1).WithEmployer(employer).WithPerson(person)
                .WithJob(job).Build();

            // Act
            await _notificationService.AddNotification(notification);

            // Assert
            _notificationRepositoryMock.Verify(n => n.AddNotification(notification), Times.Once);
            _notificationRepositoryMock.Verify(m => m.SaveAsync(), Times.Once());
        }

        [Test]
        public void DeleteNotification_ShouldDeleteNotificationInRepository()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var job = new JobBuilder().WithId(1).Build();

            var notification = new NotificationBuilder().WithId(1).WithEmployer(employer).WithPerson(person)
                .WithJob(job).Build();

            _notificationRepositoryMock.Setup(n => n.GetNotification(It.IsAny<long>())).ReturnsAsync(notification);

            // Act
            _notificationService.DeleteNotification(1);

            // Assert
            _notificationRepositoryMock.Verify(n => n.GetNotification(1), Times.Once);
            _notificationRepositoryMock.Verify(n => n.DeleteNotification(notification), Times.Once);
            _notificationRepositoryMock.Verify(m => m.SaveAsync(), Times.Once());
        }

        [Test]
        public async Task CheckWorkshiftForNotification_ReturnsNullIfWorkshiftDayNotEqualsCurrentDay()
        {
            // Arrange
            var startDatetime = new DateTime(2019, 01, 01, 13, 00, 00);
            var stopDatetime = new DateTime(2019, 01, 01, 13, 15, 00);

            var workshift = new WorkshiftBuilder().WithId(1).WithTimeblock(1, startDatetime, stopDatetime).Build();

            // Act
            var result = await _notificationService.CheckWorkshiftForNotification(workshift);

            // Assert
            Assert.That(result, Is.Null);
        }

        [Test]
        public async Task CheckWorkshiftForNotification_ReturnsNotificationIfWorkshiftStateIsNoStateAndCurrentDateTimeIsTenMinutesLargerThanWorkshiftStartDateTime()
        {
            // Arrange
            var startDatetime = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, DateTime.Now.Hour, 00, 00);
            var stopDatetime = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, DateTime.Now.Hour, 00, 00);

            var workshift = new WorkshiftBuilder().WithId(1).WithStartDateTime(startDatetime).WithStopDateTime(stopDatetime).Build();

            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();

            var contract = new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer).Build();

            _contractServiceMock.Setup(c => c.GetContractByWorkshiftId(It.IsAny<long>())).ReturnsAsync(contract);

            // Act
            var result = await _notificationService.CheckWorkshiftForNotification(workshift);

            // Assert
            Assert.That(result, Is.Not.Null);
            _contractServiceMock.Verify(c => c.GetContractByWorkshiftId(workshift.Id), Times.Once);
        }

        [Test]
        public async Task CheckWorkshiftForNotification_ReturnsNotificationIfWorkshiftStateIsPausedStateAndCurrentDateTimeIsSeventyMinutesLargerThanWorkshiftStartDateTime()
        {
            // Arrange
            var startDatetime = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, DateTime.Now.Hour, 00, 00);
            var stopDatetime = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, DateTime.Now.Hour, 00, 00);

            var workshift = new WorkshiftBuilder().WithId(1).WithTimeblock(DateTime.Now).WithStartDateTime(startDatetime).WithStopDateTime(stopDatetime).WithPausedState().Build();

            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();

            var contract = new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer).Build();

            _contractServiceMock.Setup(c => c.GetContractByWorkshiftId(It.IsAny<long>())).ReturnsAsync(contract);

            // Act
            var result = await _notificationService.CheckWorkshiftForNotification(workshift);

            // Assert
            Assert.That(result, Is.Not.Null);
            _contractServiceMock.Verify(c => c.GetContractByWorkshiftId(workshift.Id), Times.Once);
        }

        [Test]
        public async Task CheckWorkshiftForNotification_ReturnsNullIfWorkshiftStateIsNotNoStateOrPausedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithStartedState().Build();

            // Act 
            var result = await _notificationService.CheckWorkshiftForNotification(workshift);

            // Assert
            Assert.That(result, Is.Null);
        }
    }
}
