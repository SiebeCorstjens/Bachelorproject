using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FestiTimer.API.Tests.Builders.Models;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Repositories;
using FestiTimer.Domain.Services;
using Moq;
using NUnit.Framework;

namespace FestiTimer.Domain.Tests.ServiceTests
{
    [TestFixture]
    public class PersonServiceTests
    {
        private Mock<IPersonRepository> _personRepositoryMock;
        private PersonService _personService;

        [SetUp]
        public void SetUp()
        {
            _personRepositoryMock = new Mock<IPersonRepository>();
            _personService = new PersonService(_personRepositoryMock.Object);
        }

        [Test]
        public async Task GetAllPersons_ShouldReturnAllPersonsFromRepository()
        {
            // Arrange
            var persons = new List<Person>
            {
                new PersonBuilder().WithId(1).Build(),
                new PersonBuilder().WithId(2).Build(),
            };

            _personRepositoryMock.Setup(p => p.GetAllPersons()).ReturnsAsync(persons);

            // Act
            var result = await _personService.GetAllPersons();
            var enumerableResult = result.ToList();

            // Assert
            Assert.That(enumerableResult, Is.Not.Null);
            Assert.That(enumerableResult, Is.EqualTo(persons));
        }

        [Test]
        public async Task GetPerson_ShouldReturnPersonFromRepository()
        {
            // Arrange
            var person = new PersonBuilder().WithId(1).WithFirstName("Siebe").WithLastName("Corstjens").Build();

            _personRepositoryMock.Setup(p => p.GetPerson(It.IsAny<long>())).ReturnsAsync(person);

            // Act
            var result = await _personService.GetPerson(person.Id);

            // Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.EqualTo(person));
        }
    }
}
