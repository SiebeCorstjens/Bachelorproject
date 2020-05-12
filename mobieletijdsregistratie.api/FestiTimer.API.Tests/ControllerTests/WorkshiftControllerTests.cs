using AutoMapper;
using FestiTimer.API.Controllers;
using FestiTimer.API.Tests.Builders.Models;
using FestiTimer.API.Tests.Builders.ViewModels;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System;

namespace FestiTimer.API.Tests.ControllerTests
{
    [TestFixture]
    public class WorkshiftControllerTests
    {
        private Mock<IWorkshiftService> _workshiftServiceMock;
        private Mock<IMapper> _mapperMock;
        private WorkshiftController _controller;

        [SetUp]
        public void Setup()
        {
            _workshiftServiceMock = new Mock<IWorkshiftService>();
            _mapperMock = new Mock<IMapper>();
            _controller = new WorkshiftController(_workshiftServiceMock.Object, _mapperMock.Object);
        }

        [Test]
        public void GetWorkshift_ReturnsWorkshiftFromService()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).Build();
            var workshiftViewModel = new WorkshiftViewModelBuilder().WithId(1).Build();

            _workshiftServiceMock.Setup(x => x.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            _mapperMock.Setup(r => r.Map<WorkshiftViewModel>(workshift))
                .Returns(workshiftViewModel);

            // Act
            var okResult = _controller.GetWorkshift(workshift.Id).Result as OkObjectResult;

            // Assert
            Assert.That(okResult, Is.Not.Null);
            Assert.That(okResult.Value, Is.EqualTo(workshiftViewModel));
            _mapperMock.Verify(r => r.Map<WorkshiftViewModel>(workshift), Times.Once);
        }

        [Test]
        public void GetWorkshift_ReturnsNotFoundIfItDoesNotExists()
        {
            // Arrange
            _workshiftServiceMock.Setup(r => r.GetWorkshift(It.IsAny<long>())).ReturnsAsync((Workshift)null);

            // Act
            var notFoundResult = _controller.GetWorkshift(1).Result as NotFoundObjectResult;

            // Assert
            Assert.That(notFoundResult, Is.Not.Null);
        }

        [Test]
        public void GetWorkshiftElapsedTime_ReturnsTotalWorktimeInMillisecondsIfExists()
        {
            // Arrange
            var startDatetime = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 13, 00, 00);
            var stopDatetime = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 15, 00, 00);

            var workshift = new WorkshiftBuilder().WithId(1).WithTimeblock(1, startDatetime, stopDatetime).Build();
            var workshiftRegistrationViewModel = new WorkshiftRegistrationViewModelBuilder().WithId(1).WithWorkTime(TimeSpan.FromHours(2)).Build();

            var elapsedWorktime = workshiftRegistrationViewModel.WorkTime.TotalMilliseconds;

            _workshiftServiceMock.Setup(x => x.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            _mapperMock.Setup(r => r.Map<WorkshiftRegistrationViewModel>(workshift))
                .Returns(workshiftRegistrationViewModel);

            // Act
            var okResult = _controller.GetWorkshiftElapsedTime(1).Result as OkObjectResult;

            // Assert
            Assert.That(okResult, Is.Not.Null);
            Assert.That(okResult.Value, Is.EqualTo(elapsedWorktime));
            _mapperMock.Verify(r => r.Map<WorkshiftRegistrationViewModel>(workshift), Times.Once);
        }

        [Test]
        public void GetWorkshiftElapsedTime_ReturnsNotFoundIfItDoesNotExists()
        {
            // Arrange
            _workshiftServiceMock.Setup(r => r.GetWorkshift(It.IsAny<long>())).ReturnsAsync((Workshift)null);

            // Act
            var notFoundResult = _controller.GetWorkshiftElapsedTime(1).Result as NotFoundObjectResult;

            // Assert
            Assert.That(notFoundResult, Is.Not.Null);
        }

        [Test]
        public void StartWorkshift_ReturnsAcceptedIfRequestIsValid()
        {
            // Arrange
            _workshiftServiceMock.Setup(r => r.StartWorkshift(It.IsAny<long>()))
                .ReturnsAsync(true);

            // Act
            var acceptedResult = _controller.StartWorkshift(1).Result as AcceptedResult;

            // Assert
            Assert.That(acceptedResult, Is.Not.Null);
        }

        [Test]
        public void StartWorkshift_ReturnsBadRequestIfRequestIsInvalid()
        {
            // Arrange
            _workshiftServiceMock.Setup(r => r.StartWorkshift(It.IsAny<long>()))
                .ReturnsAsync(false);

            // Act
            var badRequestResult = _controller.StartWorkshift(1).Result as BadRequestResult;

            // Assert
            Assert.That(badRequestResult, Is.Not.Null);
        }

        [Test]
        public void PauseWorkshift_ReturnsAcceptedIfRequestIsValid()
        {
            // Arrange
            _workshiftServiceMock.Setup(r => r.PauseWorkshift(It.IsAny<long>()))
                .ReturnsAsync(true);

            // Act
            var acceptedResult = _controller.PauseWorkshift(1).Result as AcceptedResult;

            // Assert
            Assert.That(acceptedResult, Is.Not.Null);
        }

        [Test]
        public void PauseWorkshift_ReturnsBadRequestIfRequestIsInvalid()
        {
            // Arrange
            _workshiftServiceMock.Setup(r => r.PauseWorkshift(It.IsAny<long>()))
                .ReturnsAsync(false);

            // Act
            var badRequestResult = _controller.PauseWorkshift(1).Result as BadRequestResult;

            // Assert
            Assert.That(badRequestResult, Is.Not.Null);
        }

        [Test]
        public void StopWorkshift_ReturnsAcceptedIfRequestIsValid()
        {
            // Arrange
            _workshiftServiceMock.Setup(r => r.StopWorkshift(It.IsAny<long>()))
                .ReturnsAsync(true);

            // Act
            var acceptedResult = _controller.StopWorkshift(1).Result as AcceptedResult;

            // Assert
            Assert.That(acceptedResult, Is.Not.Null);
        }

        [Test]
        public void StopWorkshift_ReturnsBadRequestIfRequestIsInvalid()
        {
            // Arrange
            _workshiftServiceMock.Setup(r => r.StopWorkshift(It.IsAny<long>()))
                .ReturnsAsync(false);

            // Act
            var badRequestResult = _controller.StopWorkshift(1).Result as BadRequestResult;

            // Assert
            Assert.That(badRequestResult, Is.Not.Null);
        }
    }
}