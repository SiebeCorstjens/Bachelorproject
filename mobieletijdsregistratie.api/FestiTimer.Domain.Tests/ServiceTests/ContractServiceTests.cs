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
    public class ContractServiceTests
    {
        private Mock<IContractRepository> _contractRepositoryMock;
        private ContractFactory _contractFactory;
        private WorkscheduleFactory _workscheduleFactory;
        private ContractService _contractService;

        [SetUp]
        public void SetUp()
        {
            _contractRepositoryMock = new Mock<IContractRepository>();
            _contractFactory = new ContractFactory();
            _workscheduleFactory = new WorkscheduleFactory();

            _contractService = new ContractService(_contractRepositoryMock.Object, _contractFactory, _workscheduleFactory);
        }

        [Test]
        public async Task GetAllContracts_ShouldReturnAllContractsFromRepository()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();

            var contracts = new List<Contract>
            {
                new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer).Build(),
            };

            _contractRepositoryMock.Setup(c => c.GetAllContracts()).ReturnsAsync(contracts);

            // Act
            var result = await _contractService.GetAllContracts();
            var enumerableResult = result.ToList();

            // Assert
            Assert.That(enumerableResult, Is.Not.Null);
            Assert.That(enumerableResult, Is.EqualTo(contracts));
            _contractRepositoryMock.Verify(c => c.GetAllContracts(), Times.Once);
        }

        [Test]
        public async Task GetContract_ShouldReturnContractFromRepository()
        {
            // Arrange 
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var contract = new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer).Build();

            _contractRepositoryMock.Setup(c => c.GetContract(It.IsAny<long>())).ReturnsAsync(contract);

            // Act
            var result = await _contractService.GetContract(contract.Id);

            // Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(contract));
        }

        [Test]
        public async Task GetAllContractsByDay_ShouldReturnAllContractsByDayFromRepository()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var workshifts = new List<Workshift>
            {
                new WorkshiftBuilder().WithStartDateTime(DateTime.Now).Build(),
            };

            var workschedule = new WorkscheduleBuilder().WithId(1).WithWorkshifts(workshifts).Build();
            var contracts = new List<Contract>
            {
                new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer).WithWorkschedule(workschedule).Build(),
            };

            _contractRepositoryMock.Setup(c => c.GetContractsByEmployerId(It.IsAny<long>())).ReturnsAsync(contracts);

            // Act
            var result = await _contractService.GetAllContractsByDay(1, DateTime.Now);

            // Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(contracts));
            _contractRepositoryMock.Verify(c => c.GetContractsByEmployerId(1), Times.Once);
        }

        [Test]
        public async Task GetAllContractsByDayAndHour_ShouldReturnAllContractsByDayAndHourFromRepository()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var workshifts = new List<Workshift>
            {
                new WorkshiftBuilder().WithStartDateTime(DateTime.Now).Build(),
            };

            var workschedule = new WorkscheduleBuilder().WithId(1).WithWorkshifts(workshifts).Build();
            var contracts = new List<Contract>
            {
                new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer).WithWorkschedule(workschedule).Build(),
            };

            _contractRepositoryMock.Setup(c => c.GetContractsByEmployerId(It.IsAny<long>())).ReturnsAsync(contracts);

            // Act
            var result = await _contractService.GetAllContractsByDayAndHour(1, DateTime.Now);

            // Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result[0].Workschedule.Workshifts.Count, Is.EqualTo(contracts[0].Workschedule.Workshifts.Count));
            _contractRepositoryMock.Verify(c => c.GetContractsByEmployerId(1), Times.Once);
        }

        [Test]
        public async Task GetContractByWorkshiftId_ShouldReturnContractByWorkshiftIdFromRepository()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).Build();
            var employer = new EmployerBuilder().WithId(1).Build();
            var workshifts = new List<Workshift>
            {
                new WorkshiftBuilder().WithStartDateTime(DateTime.Now).Build(),
            };

            var workschedule = new WorkscheduleBuilder().WithId(1).WithWorkshifts(workshifts).Build();
            var contract = new ContractBuilder().WithId(1).WithPerson(person).WithEmployer(employer)
                .WithWorkschedule(workschedule).Build();

            _contractRepositoryMock.Setup(c => c.GetContractByWorkshiftId(It.IsAny<long>())).ReturnsAsync(contract);

            // Act
            var result = await _contractService.GetContractByWorkshiftId(1);

            // Assert
            Assert.That(result, Is.Not.Null);
            _contractRepositoryMock.Verify(c => c.GetContractByWorkshiftId(1), Times.Once);
        }
    }
}
