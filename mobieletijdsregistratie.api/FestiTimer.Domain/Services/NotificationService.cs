using FestiTimer.Domain.Factories;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Models.States;
using FestiTimer.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FestiTimer.Domain.Services
{
    public class NotificationService : INotificationService
    {
        private readonly INotificationRepository _notificationRepository;
        private readonly INotificationFactory _notificationFactory;
        private readonly IContractService _contractService;

        public NotificationService(IContractService contractService, INotificationFactory notificationFactory, INotificationRepository notificationRepository)
        {
            _contractService = contractService;
            _notificationFactory = notificationFactory;
            _notificationRepository = notificationRepository;
        }

        public async Task<Notification> GetNotification(long notificationId)
        {
            return await _notificationRepository.GetNotification(notificationId);
        }

        public async Task<IEnumerable<Notification>> GetAllNotificationsByEmployerId(long employerId)
        {
            return await _notificationRepository.GetAllNotificationsByEmployerId(employerId);
        }

        public async Task<Notification> AddNotification(Notification notification)
        {
            var notificationFromRepo = _notificationRepository.AddNotification(notification);

            await _notificationRepository.SaveAsync();

            return notificationFromRepo;
        }

        public async void DeleteNotification(long notificationId)
        {
            var notification = await _notificationRepository.GetNotification(notificationId);

            _notificationRepository.DeleteNotification(notification);

            await _notificationRepository.SaveAsync();
        }

        public async Task<Notification> CheckWorkshiftForNotification(Workshift workshift)
        {
            var currentDate = DateTime.Now;

            if (workshift.StartDateTime.Day != currentDate.Day) return null;

            var contract = await _contractService.GetContractByWorkshiftId(workshift.Id);

            if (currentDate - workshift.StartDateTime >= TimeSpan.FromMinutes(10) &&
                workshift.State.GetType() == typeof(NoState))
            {
                var notification = _notificationFactory.CreateNotification(contract.Employer, contract.Person, "NotStarted",
                    workshift.Job, currentDate);

                if (await _notificationRepository.CheckNotificationIfExist(notification)) return null;

                return notification;
            }

            if (workshift.State.GetType() != typeof(PausedState)) return null;

            if (currentDate - workshift.WorkedTimeblocks.Last().StopTime >= TimeSpan.FromMinutes(70))
            {
                return _notificationFactory.CreateNotification(contract.Employer, contract.Person, "Paused",
                    workshift.Job, currentDate);
            }

            return null;
        }

    }
}
