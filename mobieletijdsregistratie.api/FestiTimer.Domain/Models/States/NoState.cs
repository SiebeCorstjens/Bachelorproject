namespace FestiTimer.Domain.Models.States
{
    public class NoState : State
    {
        public NoState(Workshift workshift) : base(workshift) { }

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
            return false;
        }
    }
}
