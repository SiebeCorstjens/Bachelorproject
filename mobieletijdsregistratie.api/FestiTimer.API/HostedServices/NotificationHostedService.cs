using FestiTimer.API.HubConfig;
using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FestiTimer.API.ViewModels;

namespace FestiTimer.API.HostedServices
{
    public class NotificationHostedService : IHostedService, IDisposable
    {
        private Timer _timer;
        private readonly IServiceScopeFactory _serviceScopeFactory;
        private readonly IHubContext<NotificationHub> _hub;

        public NotificationHostedService(IServiceScopeFactory serviceScopeFactory, IHubContext<NotificationHub> hub)
        {
            _serviceScopeFactory = serviceScopeFactory;
            _hub = hub;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(DoWork, null, TimeSpan.Zero,
                TimeSpan.FromMinutes(10));

            return Task.CompletedTask;
        }

        private async void DoWork(object state)
        {
            using (var scope = _serviceScopeFactory.CreateScope())
            {
                var workshiftService = (IWorkshiftService)scope.ServiceProvider.GetService(typeof(IWorkshiftService));
                var notificationService = (INotificationService)scope.ServiceProvider.GetService(typeof(INotificationService));
                var mapper = (IMapper)scope.ServiceProvider.GetService(typeof(IMapper));

                var workshifts = await workshiftService.GetAllWorkshifts();

                foreach (var workshift in workshifts)
                {
                    var notification = await notificationService.CheckWorkshiftForNotification(workshift);

                    if (notification == null) continue;

                    var notificationFromRepo = await notificationService.AddNotification(notification);

                    var mappedNotification = mapper.Map<NotificationViewModel>(notificationFromRepo);
                    await _hub.Clients.All.SendAsync("broadcastnotification", mappedNotification);
                }
            }
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}