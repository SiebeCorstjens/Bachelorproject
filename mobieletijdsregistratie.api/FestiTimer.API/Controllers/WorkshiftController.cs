using System.Threading.Tasks;
using AutoMapper;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FestiTimer.API.Controllers
{
    [Route("workshift")]
    [ApiController]
    [Authorize]
    public class WorkshiftController : Controller
    {
        private readonly IWorkshiftService _workshiftService;
        private readonly IMapper _mapper;

        public WorkshiftController(IWorkshiftService workshiftService, IMapper mapper)
        {
            _workshiftService = workshiftService;
            _mapper = mapper;
        }

        // GET workshift/1
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetWorkshift(long id)
        {
            var workshiftFromRepo = await _workshiftService.GetWorkshift(id);

            if (workshiftFromRepo == null) return NotFound(id);

            var workshift = _mapper.Map<WorkshiftViewModel>(workshiftFromRepo);

            return Ok(workshift);
        }

        // GET workshift/1/elapsed
        [HttpGet]
        [Route("{id}/elapsed")]
        public async Task<IActionResult> GetWorkshiftElapsedTime(long id)
        {
            var workshiftFromRepo = await _workshiftService.GetWorkshift(id);

            if (workshiftFromRepo == null) return NotFound(id);

            var workshift = _mapper.Map<WorkshiftRegistrationViewModel>(workshiftFromRepo);

            return Ok(workshift.WorkTime.TotalMilliseconds);
        }

        // POST: workshift/start
        [HttpPost]
        [Route("start")]
        public async Task<IActionResult> StartWorkshift(long id)
        {
            if (!await _workshiftService.StartWorkshift(id))
            {
                return BadRequest();
            }

            return Accepted();
        }

        // POST: workshift/pause
        [HttpPost]
        [Route("pause")]
        public async Task<IActionResult> PauseWorkshift(long id)
        {
            if (!await _workshiftService.PauseWorkshift(id))
            {
                return BadRequest();
            }

            return Accepted();
        }

        // POST: workshift/stop
        [HttpPost]
        [Route("stop")]
        public async Task<IActionResult> StopWorkshift(long id)
        {
            if (!await _workshiftService.StopWorkshift(id))
            {
                return BadRequest();
            }

            return Accepted();
        }
    }
}
