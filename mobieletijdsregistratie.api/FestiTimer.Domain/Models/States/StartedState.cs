namespace FestiTimer.Domain.Models.States
{
    public class StartedState : State
    {
        public StartedState(Workshift workshift) : base(workshift) { }

        public override bool StartTimer()
        {
            return false;
        }

        public override bool PauseTimer()
        {
            Workshift.ChangeState(new PausedState(Workshift));
            return true;
        }

        public override bool StopTimer()
        {
            Workshift.ChangeState(new StoppedState(Workshift));
            return true;
        }
    }
}
