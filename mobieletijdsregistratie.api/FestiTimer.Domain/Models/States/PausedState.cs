namespace FestiTimer.Domain.Models.States
{
    public class PausedState : State
    {
        public PausedState(Workshift workshift) : base(workshift) { }

        public override bool StartTimer()
        {
            Workshift.ChangeState(new StartedState(Workshift));
            return true;
        }

        public override bool PauseTimer()
        {
            return false;
        }

        public override bool StopTimer()
        {
            Workshift.ChangeState(new StoppedState(Workshift));
            return true;
        }
    }
}
