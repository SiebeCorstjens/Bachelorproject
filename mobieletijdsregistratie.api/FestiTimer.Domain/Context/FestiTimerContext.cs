using FestiTimer.Domain.Factories;
using FestiTimer.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace FestiTimer.Domain.Context
{
    public sealed class FestiTimerContext : DbContext
    {
        public IEmployerFactory EmployerFactory;
        public IPersonFactory PersonFactory;
        public IContractFactory ContractFactory;
        public IWorkscheduleFactory WorkscheduleFactory;
        public IJobFactory JobFactory;
        public IWorkshiftFactory WorkshiftFactory;

        public FestiTimerContext(
            DbContextOptions options, 
            IEmployerFactory employerFactory,
            IPersonFactory personFactory, 
            IContractFactory contractFactory,
            IWorkscheduleFactory workscheduleFactory,
            IJobFactory jobFactory,
            IWorkshiftFactory workshiftFactory) : base(options)
        {
            EmployerFactory = employerFactory;
            PersonFactory = personFactory;
            ContractFactory = contractFactory;
            WorkscheduleFactory = workscheduleFactory;
            JobFactory = jobFactory;
            WorkshiftFactory = workshiftFactory;
            Database.EnsureCreated();
        }

        public DbSet<Employer> Employers { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Workschedule> Workschedules { get; set; }
        public DbSet<Workshift> Workshifts { get; set; }
        public DbSet<Timeblock> Timeblocks { get; set; }
        public DbSet<Notification> Notifications { get; set; }
    }
}
