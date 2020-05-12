using System;
using System.Collections.Generic;
using FestiTimer.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace FestiTimer.Domain.Context
{
    public static class FestiTimerContextExtensions
    {
        public static void EnsureSeedDataForContext(this FestiTimerContext context)
        {
            context.Timeblocks.Clear();
            context.Jobs.Clear();
            context.Workshifts.Clear();
            context.Workschedules.Clear();
            context.Notifications.Clear();
            context.Contracts.Clear();
            context.Persons.Clear();
            context.Employers.Clear();
            context.SaveChanges();

            var employers = new List<Employer>
            {
                context.EmployerFactory.CreateEmployer(1, "Siebe", "Corstjens"),
                context.EmployerFactory.CreateEmployer(1, "Liesbeth", "Vandevenne"),
            };

            var persons = new List<Person>
            {
                context.PersonFactory.CreatePerson(1, "Wim", "Kesselaar", "0476164261"),
                context.PersonFactory.CreatePerson(2, "Lorna", "De Vroom", "0474267406"),
                context.PersonFactory.CreatePerson(3, "Céleste", "Schijvens", "0478638175"),
                context.PersonFactory.CreatePerson(4, "Myriam", "Dekens", "0473576611"),
            };

            var jobs = new List<Job>
            {
                context.JobFactory.CreateJob(1, "Opruimingsdienst", "Camping A"),
                context.JobFactory.CreateJob(2, "Verkoopstand hamburgers", "Mainstage"),
            };

            var workshifts = new List<Workshift>
            {
                context.WorkshiftFactory.CreateWorkshift(1, 
                    jobs[0],
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 08, 00, 00),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 12, 00, 00)),

                context.WorkshiftFactory.CreateWorkshift(2,
                    jobs[0],
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 08, 00, 00),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 12, 00, 00)),

                context.WorkshiftFactory.CreateWorkshift(3,
                    jobs[0],
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 13, 00, 00),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 16, 00, 00)),

                context.WorkshiftFactory.CreateWorkshift(4,
                    jobs[0],
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 13, 00, 00),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 16, 00, 00)),

                context.WorkshiftFactory.CreateWorkshift(5,
                    jobs[1],
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 12, 00, 00),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 16, 00, 00)),

                context.WorkshiftFactory.CreateWorkshift(6,
                    jobs[1],
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 12, 00, 00),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 16, 00, 00)),

                context.WorkshiftFactory.CreateWorkshift(7,
                    jobs[1],
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 17, 00, 00),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 20, 00, 00)),

                context.WorkshiftFactory.CreateWorkshift(8,
                    jobs[1],
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 17, 00, 00),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 20, 00, 00)),
            };

            var workschedule = new List<Workschedule>
            {
                context.WorkscheduleFactory.CreateWorkschedule(1, new List<Workshift>
                {
                    workshifts[0],
                    workshifts[2],
                }),
                context.WorkscheduleFactory.CreateWorkschedule(2, new List<Workshift>
                {
                    workshifts[1],
                    workshifts[3],
                }),
                context.WorkscheduleFactory.CreateWorkschedule(3, new List<Workshift>
                {
                    workshifts[4],
                    workshifts[6],
                }),
                context.WorkscheduleFactory.CreateWorkschedule(4, new List<Workshift>
                {
                    workshifts[5],
                    workshifts[7],
                }),
            };

            var contracts = new List<Contract>
            {
                context.ContractFactory.CreateContract(1, persons[0], employers[0], workschedule[0]),
                context.ContractFactory.CreateContract(2, persons[1], employers[0], workschedule[1]),
                context.ContractFactory.CreateContract(3, persons[2], employers[0], workschedule[2]),
                context.ContractFactory.CreateContract(4, persons[3], employers[0], workschedule[3]),
            };
            
            context.Contracts.AddRange(contracts);
            context.SaveChanges();
        }

        public static void Clear<T>(this DbSet<T> dbSet) where T : class
        {
            dbSet.RemoveRange(dbSet);
        }
    }
}
