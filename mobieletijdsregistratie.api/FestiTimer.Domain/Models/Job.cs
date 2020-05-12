namespace FestiTimer.Domain.Models
{
    public class Job
    {
        public Job(long id, string description, string location)
        {
            Id = id;
            Description = description;
            Location = location;
        }

        protected Job() { }

        public long Id { get; private set; }

        public string Description { get; private set; }

        public string Location { get; private set; }
    }
}
