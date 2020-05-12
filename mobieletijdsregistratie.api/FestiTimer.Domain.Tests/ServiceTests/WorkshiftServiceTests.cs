using System;
using FestiTimer.Domain.Factories;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Services;
using Moq;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FestiTimer.API.Tests.Builders.Models;
using FestiTimer.Domain.Repositories;

namespace FestiTimer.Domain.Tests.ServiceTests
{
    [TestFixture]
    public class WorkshiftServiceTests
    {
        private Mock<IWorkshiftRepository> _workshiftRepositoryMock;
        private Mock<ITimeblockRepository> _timeblockRepositoryMock;
        private Mock<ITimeblockFactory> _timeblockFactoryMock;
        private WorkshiftService _workshiftService;

        [SetUp]
        public void SetUp()
        {
            _workshiftRepositoryMock = new Mock<IWorkshiftRepository>();
            _timeblockRepositoryMock = new Mock<ITimeblockRepository>();
            _timeblockFactoryMock = new Mock<ITimeblockFactory>();
            _workshiftService = new WorkshiftService(_workshiftRepositoryMock.Object, _timeblockRepositoryMock.Object, _timeblockFactoryMock.Object);
        }

        [Test]
        public async Task GetAllWorkshifts_ShouldReturnAllWorkshiftsFromRepository()
        {
            // Arrange
            var workshifts = new List<Workshift>
            {
                new WorkshiftBuilder().WithId(1).Build(),
                new WorkshiftBuilder().WithId(2).Build(),
            };

            _workshiftRepositoryMock.Setup(t => t.GetAllWorkshifts()).ReturnsAsync(workshifts);

            // Act
            var result = await _workshiftService.GetAllWorkshifts();
            var enumerableResult = result.ToList();

            // Arrange 
            Assert.That(enumerableResult, Is.Not.Null);
            Assert.That(enumerableResult, Is.EqualTo(workshifts));
            _workshiftRepositoryMock.Verify(t => t.GetAllWorkshifts(), Times.Once);
        }

        [Test]
        public async Task GetWorkshift_ShouldReturnWorkshiftFromRepository()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.GetWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(workshift));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }

        [Test]
        public async Task StartWorkshift_ShouldReturnTrueAndStartWorkshiftWhenStateIsNoState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.StartWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(true));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
            _workshiftRepositoryMock.Verify(t => t.UpdateWorkshift(It.IsAny<Workshift>()), Times.Once);
        }

        [Test]
        public async Task StartWorkshift_ShouldReturnFalseWhenStateIsStartedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithStartedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.StartWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(false));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }

        [Test]
        public async Task StartWorkshift_ShouldReturnTrueAndStartWorkshiftWhenStateIsPausedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithPausedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.StartWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(true));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
            _workshiftRepositoryMock.Verify(t => t.UpdateWorkshift(It.IsAny<Workshift>()), Times.Once);
        }

        [Test]
        public async Task StartWorkshift_ShouldReturnFalseWhenStateIsStoppedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithStoppedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.StartWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(false));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }

        [Test]
        public async Task PauseWorkshift_ShouldReturnFalseWhenStateIsNoState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.PauseWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(false));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }

        [Test]
        public async Task PauseWorkshift_ShouldReturnTrueWhenStateIsStartedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithTimeblock(DateTime.Now).WithStartedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.PauseWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(true));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
            _timeblockRepositoryMock.Verify(t => t.UpdateTimeblock(It.IsAny<Timeblock>(), It.IsAny<Timeblock>()), Times.Once);
        }

        [Test]
        public async Task PauseWorkshift_ShouldReturnFalseWhenStateIsPausedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithPausedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.PauseWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(false));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }

        [Test]
        public async Task PauseWorkshift_ShouldReturnFalseWhenStateIsStoppedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithStoppedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.PauseWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(false));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }

        [Test]
        public async Task StopWorkshift_ShouldReturnFalseWhenStateIsNoState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.StopWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(false));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }

        [Test]
        public async Task StopWorkshift_ShouldReturnTrueWhenStateIsStartedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithTimeblock(DateTime.Now).WithStartedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.StopWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(true));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
            _timeblockRepositoryMock.Verify(t => t.UpdateTimeblock(It.IsAny<Timeblock>(), It.IsAny<Timeblock>()), Times.Once);
        }

        [Test]
        public async Task StopWorkshift_ShouldReturnTrueWhenStateIsPausedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithTimeblock(1,DateTime.Now, DateTime.Now).WithPausedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.StopWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(true));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }

        [Test]
        public async Task StopWorkshift_ShouldReturnFalseWhenStateIsStoppedState()
        {
            // Arrange
            var workshift = new WorkshiftBuilder().WithId(1).WithStoppedState().Build();

            _workshiftRepositoryMock.Setup(t => t.GetWorkshift(It.IsAny<long>()))
                .ReturnsAsync(workshift);

            // Act
            var result = await _workshiftService.StopWorkshift(workshift.Id);

            // Arrange
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(false));
            _workshiftRepositoryMock.Verify(t => t.GetWorkshift(workshift.Id), Times.Once);
        }
    }
}
