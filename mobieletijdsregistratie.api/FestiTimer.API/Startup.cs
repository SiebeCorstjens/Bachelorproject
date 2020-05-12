using AutoMapper;
using FestiTimer.API.HostedServices;
using FestiTimer.API.HubConfig;
using FestiTimer.API.Mapping;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Context;
using FestiTimer.Domain.Factories;
using FestiTimer.Domain.Models;
using FestiTimer.Domain.Repositories;
using FestiTimer.Domain.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Claims;

namespace FestiTimer.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => options.AddPolicy("CorsPolicy",
                builder =>
                {
                    builder.AllowAnyHeader()
                        .AllowAnyMethod()
                        .SetIsOriginAllowed((host) => true)
                        .AllowCredentials();
                }));

            services.AddEntityFrameworkNpgsql()
                .AddDbContext<FestiTimerContext>(options =>
                options.UseNpgsql(Configuration.GetConnectionString("ApiConnection")), ServiceLifetime.Singleton);

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = Configuration.GetConnectionString("IdentityServerConnection");
                    options.RequireHttpsMetadata = false;
                    options.Audience = "festitimer-api";
                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("Employer", policy => policy.RequireClaim(ClaimTypes.Role, "Employer"));
            });

            services.AddHostedService<NotificationHostedService>();

            services.AddScoped<IPersonService, PersonService>();
            services.AddScoped<IWorkshiftService, WorkshiftService>();
            services.AddScoped<IContractService, ContractService>();
            services.AddScoped<INotificationService, NotificationService>();

            services.AddScoped<IPersonRepository, PersonRepository>();
            services.AddScoped<IContractRepository, ContractRepository>();
            services.AddScoped<IWorkshiftRepository, WorkshiftRepository>();
            services.AddScoped<ITimeblockRepository, TimeblockRepository>();
            services.AddScoped<INotificationRepository, NotificationRepository>();

            services.AddSingleton<IEmployerFactory, EmployerFactory>();
            services.AddSingleton<IPersonFactory, PersonFactory>();
            services.AddSingleton<IContractFactory, ContractFactory>();
            services.AddSingleton<IJobFactory, JobFactory>();
            services.AddSingleton<IWorkscheduleFactory, WorkscheduleFactory>();
            services.AddSingleton<IWorkshiftFactory, WorkshiftFactory>();
            services.AddSingleton<ITimeblockFactory, TimeblockFactory>();
            services.AddSingleton<INotificationFactory, NotificationFactory>();

            services.AddTransient<ITypeConverter<Person, PersonViewModel>,
                MappingProfile.PersonConverter>();
            services.AddTransient<ITypeConverter<Workshift, WorkshiftRegistrationViewModel>,
                MappingProfile.WorkshiftRegistrationConverter>();
            services.AddTransient<ITypeConverter<Contract, PersonWorkshiftsViewModel>,
                MappingProfile.ContractToPersonWorkshiftsConverter>();
            services.AddTransient<ITypeConverter<Contract, PersonWorkshiftRegistrationsViewModel>,
                MappingProfile.ContractToPersonWorkshiftRegistrationsConverter>();

            services.AddAutoMapper();
            services.AddSignalR();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, FestiTimerContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            context.EnsureSeedDataForContext();

            app.UseCors("CorsPolicy");
            app.UseAuthentication();

            app.UseSignalR(routes =>
            {
                routes.MapHub<NotificationHub>("/notificaties");
            });

            app.UseMvc();
        }
    }
}
