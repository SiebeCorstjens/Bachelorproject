using System;
using System.Collections.Generic;
using System.Security.Claims;
using AutoMapper;
using FestiTimer.API.Controllers;
using FestiTimer.API.Tests.Builders.Models;
using FestiTimer.API.Tests.Builders.ViewModels;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;

namespace FestiTimer.API.Tests.ControllerTests
{
    [TestFixture]
    public class EmployerControllerTests
    {
        private Mock<IContractService> _contractServiceMock;
        private Mock<INotificationService> _notificationServiceMock;
        private Mock<IMapper> _mapperMock;
        private EmployerController _controller;

        [SetUp]
        public void SetUp()
        {
            _contractServiceMock = new Mock<IContractService>();
            _notificationServiceMock = new Mock<INotificationService>();
            _mapperMock = new Mock<IMapper>();

            var user = new ClaimsPrincipal(new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.NameIdentifier, "1"),
                new Claim(ClaimTypes.Name, "SiebeCorstjens")
            }));

            _controller = new EmployerController(_contractServiceMock.Object, _notificationServiceMock.Object,
                _mapperMock.Object)
            {
                ControllerContext = new ControllerContext() {HttpContext = new DefaultHttpContext() {User = user}}
            };
        }

        [Test]
        public void GetAllPersonsByEmployerAndDay_ReturnsAllPersonsByEmployerAndDayFromService()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();

            var contracts = new List<Contract>
            {
                new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer).Build(),
            };

            var personWorkshiftsViewModels = new List<PersonWorkshiftsViewModel>
            {
                new PersonWorkshiftsViewModelBuilder().WithId(1).WithName(person.FirstName + " " + person.LastName)
                    .Build(),
            };

            _contractServiceMock.Setup(c => c.GetAllContractsByDay(It.IsAny<long>(), It.IsAny<DateTime>()))
                .ReturnsAsync(contracts);

            _mapperMock.Setup(m => m.Map<List<PersonWorkshiftsViewModel>>(contracts))
                .Returns(personWorkshiftsViewModels);

            // Act
            var okResult = _controller.GetAllPersonsByEmployerAndDay(1, DateTime.MinValue).Result as OkObjectResult;

            // Assert
            Assert.That(okResult, Is.Not.Null);
            Assert.That(okResult.Value, Is.EqualTo(personWorkshiftsViewModels));
            _mapperMock.Verify(m => m.Map<List<PersonWorkshiftsViewModel>>(contracts), Times.Once);
        }

        [Test]
        public void GetAllPersonsByEmployerAndDay_ReturnsNotFoundIfNoneExists()
        {
            // Arrange
            _contractServiceMock.Setup(c => c.GetAllContractsByDay(It.IsAny<long>(), It.IsAny<DateTime>()))
                .ReturnsAsync((List<Contract>) null);

            // Act
            var notFoundResult = _controller.GetAllPersonsByEmployerAndDay(1, DateTime.MinValue).Result as NotFoundResult;

            // Assert
            Assert.That(notFoundResult, Is.Not.Null);
        }

        [Test]
        public void GetAllPersonsByEmployerAndDay_ReturnsBadRequestIfEmployerIdIsNotEqualToIdentityId()
        {
            // Act
            var badRequestResult =
                _controller.GetAllPersonsByEmployerAndDay(2, DateTime.MinValue).Result as BadRequestResult;

            // Assert
            Assert.That(badRequestResult, Is.Not.Null);
        }

        [Test]
        public void GetAllPersonsByEmployerAndDayAndHour_ReturnsAllPersonsByEmployerAndDayAndHourFromService()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();

            var contracts = new List<Contract>
            {
                new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer).Build(),
            };

            var personWorkshiftRegistrationsViewModels = new List<PersonWorkshiftRegistrationsViewModel>
            {
                new PersonWorkshiftRegistrationsViewModelBuilder().WithId(1).WithName(person.FirstName + " " + person.LastName)
                    .Build(),
            };

            _contractServiceMock.Setup(c => c.GetAllContractsByDayAndHour(It.IsAny<long>(), It.IsAny<DateTime>()))
                .ReturnsAsync(contracts);

            _mapperMock.Setup(m => m.Map<List<PersonWorkshiftRegistrationsViewModel>>(contracts))
                .Returns(personWorkshiftRegistrationsViewModels);

            // Act
            var okResult = _controller.GetAllWorkshiftsByEmployerAndDayAndHour(1, DateTime.MinValue).Result as OkObjectResult;

            // Assert
            Assert.That(okResult, Is.Not.Null);
            Assert.That(okResult.Value, Is.EqualTo(personWorkshiftRegistrationsViewModels));
            _mapperMock.Verify(m => m.Map<List<PersonWorkshiftRegistrationsViewModel>>(contracts), Times.Once);
        }

        [Test]
        public void GetAllPersonsByEmployerAndDayAndHour_ReturnsNotFoundIfNoneExists()
        {
            // Arrange
            _contractServiceMock.Setup(c => c.GetAllContractsByDayAndHour(It.IsAny<long>(), It.IsAny<DateTime>()))
                .ReturnsAsync((List<Contract>)null);

            // Act
            var notFoundResult = _controller.GetAllWorkshiftsByEmployerAndDayAndHour(1, DateTime.MinValue).Result as NotFoundResult;

            // Assert
            Assert.That(notFoundResult, Is.Not.Null);
        }

        [Test]
        public void GetAllPersonsByEmployerAndDayAndHour_ReturnsBadRequestIfEmployerIdIsNotEqualToIdentityId()
        {
            // Act
            var badRequestResult = _controller.GetAllWorkshiftsByEmployerAndDayAndHour(2, DateTime.MinValue).Result as BadRequestResult;

            // Assert
            Assert.That(badRequestResult, Is.Not.Null);
        }

        [Test]
        public void GetAllNotificationsByEmployer_ReturnsAllNotificationsByEmployerFromService()
        {
            // Assert
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var job = new JobBuilder().WithId(1).Build();
            var personViewModel = new PersonViewModelBuilder().WithId(1).Build();

            var notifications = new List<Notification>
            {
                new NotificationBuilder().WithId(1).WithEmployer(employer).WithPerson(person).WithJob(job).Build(),
            };

            var notificationViewModels = new List<NotificationViewModel>
            {
                new NotificationViewModelBuilder().WithId(1).WithPerson(personViewModel).WithJob(job).Build(),
            };

            _notificationServiceMock.Setup(n => n.GetAllNotificationsByEmployerId(It.IsAny<long>()))
                .ReturnsAsync(notifications);

            _mapperMock.Setup(m => m.Map<List<NotificationViewModel>>(notifications))
                .Returns(notificationViewModels);

            // Act 
            var okResult = _controller.GetAllNotificationsByEmployer(1).Result as OkObjectResult;
            
            // Assert
            Assert.That(okResult, Is.Not.Null);
            Assert.That(okResult.Value, Is.EqualTo(notificationViewModels));
            _mapperMock.Verify(m => m.Map<List<NotificationViewModel>>(notifications), Times.Once);
        }

        [Test]
        public void GetAllNotificationsByEmployer_ReturnsNotFoundIfNoneExists()
        {
            // Arrange
            _notificationServiceMock.Setup(n => n.GetAllNotificationsByEmployerId(It.IsAny<long>()))
                .ReturnsAsync((List<Notification>)null);

            // Act
            var notFoundResult = _controller.GetAllNotificationsByEmployer(1).Result as NotFoundResult;

            // Assert
            Assert.That(notFoundResult, Is.Not.Null);
        }

        [Test]
        public void GetAllNotificationsByEmployer_ReturnsBadRequestIfEmployerIdIsNotEqualToIdentityId()
        {
            // Act
            var badRequestResult = _controller.GetAllNotificationsByEmployer(2).Result as BadRequestResult;

            // Assert
            Assert.That(badRequestResult, Is.Not.Null);
        }
    }
}
