using AutoMapper;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace FestiTimer.API.Controllers
{
    [Route("person")]
    [ApiController]
    [Authorize]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService _personService;
        private readonly IMapper _mapper;

        public PersonController(IPersonService personService, IMapper mapper)
        {
            _personService = personService;
            _mapper = mapper;
        }

        // GET: person
        [HttpGet]
        public async Task<IActionResult> GetAllPersons()
        {
            var personsFromRepo = await _personService.GetAllPersons();

            if (personsFromRepo == null) return NotFound();

            var persons = _mapper.Map<IEnumerable<PersonViewModel>>(personsFromRepo);

            return Ok(persons);
        }

        // GET: person/1
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetPerson(long id)
        {
            var personFromRepo = await _personService.GetPerson(id);

            if (personFromRepo == null) return NotFound(id);

            var person = _mapper.Map<PersonViewModel>(personFromRepo);

            return Ok(person);
        }
    }
}