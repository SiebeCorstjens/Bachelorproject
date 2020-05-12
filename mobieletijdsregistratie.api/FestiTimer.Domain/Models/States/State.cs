namespace FestiTimer.Domain.Models.States
{
    public abstract class State
    {
        internal readonly Workshift Workshift;

        protected State(Workshift workshift)
        {
            Workshift = workshift;
        }

        public abstract bool StartTimer();
        public abstract bool PauseTimer();
        public abstract bool StopTimer();
    }
}
