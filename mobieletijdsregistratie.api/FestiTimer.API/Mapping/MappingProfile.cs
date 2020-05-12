using AutoMapper;
using FestiTimer.API.ViewModels;
using FestiTimer.Domain.Models;
using System;
using System.Collections.Generic;

namespace FestiTimer.API.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Person, PersonViewModel>().ConvertUsing(new PersonConverter());
            CreateMap<Notification, NotificationViewModel>();
            CreateMap<Workshift, WorkshiftViewModel>();
            CreateMap<Workshift, WorkshiftRegistrationViewModel>().ConvertUsing(new WorkshiftRegistrationConverter());
            CreateMap<Contract, PersonWorkshiftsViewModel>().ConvertUsing(new ContractToPersonWorkshiftsConverter());
            CreateMap<Contract, PersonWorkshiftRegistrationsViewModel>().ConvertUsing(new ContractToPersonWorkshiftRegistrationsConverter());
        }

        public class PersonConverter : ITypeConverter<Person, PersonViewModel>
        {
            public PersonViewModel Convert(Person source, PersonViewModel destination, ResolutionContext context)
            {

                return new PersonViewModel
                {
                    Id = source.Id,
                    Name = source.FirstName + " " + source.LastName,
                };
            }
        }

        public class WorkshiftRegistrationConverter : ITypeConverter<Workshift, WorkshiftRegistrationViewModel>
        {
            public WorkshiftRegistrationViewModel Convert(Workshift source, WorkshiftRegistrationViewModel destination,
                ResolutionContext context)
            {
                var timeSpan = new TimeSpan();

                if (source.WorkedTimeblocks != null)
                {
                    foreach (var timeBlock in source.WorkedTimeblocks)
                    {
                        var stopTime = timeBlock.StopTime;

                        if (timeBlock.StopTime == DateTime.MinValue)
                        {
                            stopTime = DateTime.Now;
                        }

                        timeSpan += stopTime - timeBlock.StartTime;
                    }
                }

                return new WorkshiftRegistrationViewModel
                {
                    Id = source.Id,
                    Job = source.Job,
                    StartDateTime = source.StartDateTime,
                    StopDateTime = source.StopDateTime,
                    TimerState = source.TimerState,
                    WorkTime = timeSpan,
                };
            }
        }

        public class ContractToPersonWorkshiftsConverter : ITypeConverter<Contract, PersonWorkshiftsViewModel>
        {
            public PersonWorkshiftsViewModel Convert(Contract source, PersonWorkshiftsViewModel destination, ResolutionContext context)
            {
                return new PersonWorkshiftsViewModel
                {
                    Id = source.Id,
                    Name = source.Person.FirstName + " " + source.Person.LastName,
                    Workshifts = context.Mapper.Map<List<WorkshiftViewModel>>(source.Workschedule.Workshifts),
                };
            }
        }

        public class ContractToPersonWorkshiftRegistrationsConverter : ITypeConverter<Contract, PersonWorkshiftRegistrationsViewModel>
        {
            public PersonWorkshiftRegistrationsViewModel Convert(Contract source, PersonWorkshiftRegistrationsViewModel destination, ResolutionContext context)
            {
                return new PersonWorkshiftRegistrationsViewModel
                {
                    Id = source.Id,
                    Name = source.Person.FirstName + " " + source.Person.LastName,
                    Workshifts = context.Mapper.Map<List<WorkshiftRegistrationViewModel>>(source.Workschedule.Workshifts),
                };
            }
        }
    }
}
