using AutoMapper;
using FestiTimer.API.Controllers;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System.Collections.Generic;
using FestiTimer.API.Tests.Builders.Models;
using FestiTimer.API.Tests.Builders.ViewModels;

namespace FestiTimer.API.Tests.ControllerTests
{
    [TestFixture]
    public class PersonControllerTests
    {
        private Mock<IPersonService> _personServiceMock;
        private Mock<IMapper> _mapperMock;
        private PersonController _controller;

        [SetUp]
        public void SetUp()
        {
            _personServiceMock = new Mock<IPersonService>();
            _mapperMock = new Mock<IMapper>();
            _controller = new PersonController(_personServiceMock.Object, _mapperMock.Object);
        }

        [Test]
        public void GetAllPersons_ReturnsAllPersonsFromService()
        {
            // Arrange
            var persons = new List<Person>
            {
                new PersonBuilder().WithId(1).Build(),
                new PersonBuilder().WithId(2).Build(),
            };

            var personViewModels = new List<PersonViewModel>
            {
                new PersonViewModelBuilder().WithId(1).Build(),
                new PersonViewModelBuilder().WithId(2).Build(),
            };

            _personServiceMock.Setup(p => p.GetAllPersons()).ReturnsAsync(persons);

            _mapperMock.Setup(m => m.Map<IEnumerable<PersonViewModel>>(persons)).Returns(personViewModels);

            // Act
            var okResult = _controller.GetAllPersons().Result as OkObjectResult;

            // Assert
            Assert.That(okResult, Is.Not.Null);
            Assert.That(okResult.Value, Is.EquivalentTo(personViewModels));
            _mapperMock.Verify(m => m.Map<IEnumerable<PersonViewModel>>(persons), Times.Once);
        }

        [Test]
        public void GetAllPersons_ReturnsNotFoundIfNoneExists()
        {
            // Arrange
            _personServiceMock.Setup(p => p.GetAllPersons()).ReturnsAsync((IEnumerable<Person>) null);

            // Act
            var notFoundResult = _controller.GetAllPersons().Result as NotFoundResult;

            // Assert
            Assert.That(notFoundResult, Is.Not.Null);
        }

        [Test]
        public void GetPerson_ReturnsPersonFromService()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).WithFirstName("Siebe").WithLastName("Corstjens").Build();
            var personViewModel = new PersonViewModelBuilder().WithId(1).WithName("Siebe Corstjens").Build();

            _personServiceMock.Setup(p => p.GetPerson(It.IsAny<long>())).ReturnsAsync(person);

            _mapperMock.Setup(m => m.Map<PersonViewModel>(person)).Returns(personViewModel);

            // Act
            var okResult = _controller.GetPerson(1).Result as OkObjectResult;

            // Assert
            Assert.That(okResult, Is.Not.Null);
            Assert.That(okResult.Value, Is.EqualTo(personViewModel));
            _mapperMock.Verify(m => m.Map<PersonViewModel>(person), Times.Once);
        }

        [Test]
        public void GetPerson_ReturnsNotFoundIfItsDoesNotExists()
        {
            // Arrange
            _personServiceMock.Setup(p => p.GetPerson(It.IsAny<long>())).ReturnsAsync((Person) null);

            // Act
            var notFoundResult = _controller.GetPerson(1).Result as NotFoundObjectResult;

            // Assert
            Assert.That(notFoundResult, Is.Not.Null);
        }
    }
}
