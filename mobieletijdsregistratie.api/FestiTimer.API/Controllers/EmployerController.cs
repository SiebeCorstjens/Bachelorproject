using AutoMapper;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace FestiTimer.API.Controllers
{
    [Route("employer")]
    [ApiController]
    [Authorize(Policy = "Employer")]
    public class EmployerController : ControllerBase
    {
        private readonly IContractService _contractService;
        private readonly INotificationService _notificationService;
        private readonly IMapper _mapper;

        public EmployerController(IContractService contractService, INotificationService notificationService, IMapper mapper)
        {
            _contractService = contractService;
            _notificationService = notificationService;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("{employerId}/persons/{datetime}")]
        public async Task<IActionResult> GetAllPersonsByEmployerAndDay(long employerId, DateTime dateTime)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId != employerId.ToString()) return BadRequest();

            var contractsFromRepo = await _contractService.GetAllContractsByDay(employerId, dateTime);

            if (contractsFromRepo == null) return NotFound();

            var personsWorkshifts = _mapper.Map<List<PersonWorkshiftsViewModel>>(contractsFromRepo);

            return Ok(personsWorkshifts);
        }

        [HttpGet]
        [Route("{employerId}/workshifts/{datetime}")]
        public async Task<IActionResult> GetAllWorkshiftsByEmployerAndDayAndHour(long employerId, DateTime dateTime)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId != employerId.ToString()) return BadRequest();

            var contractsFromRepo = await _contractService.GetAllContractsByDayAndHour(employerId, dateTime);

            if (contractsFromRepo == null) return NotFound();

            var contracts = _mapper.Map<List<PersonWorkshiftRegistrationsViewModel>>(contractsFromRepo);

            return Ok(contracts);
        }

        [HttpGet]
        [Route("{employerId}/notifications")]
        public async Task<IActionResult> GetAllNotificationsByEmployer(long employerId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId != employerId.ToString()) return BadRequest();

            var notificationsFromRepo = await _notificationService.GetAllNotificationsByEmployerId(employerId);

            if (notificationsFromRepo == null) return NotFound();

            var notifications = _mapper.Map<List<NotificationViewModel>>(notificationsFromRepo);

            return Ok(notifications);
        }
    }
}