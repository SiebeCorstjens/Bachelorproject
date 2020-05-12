namespace FestiTimer.Domain.Models.States
{
    public class StoppedState : State
    {
        public StoppedState(Workshift workshift) : base(workshift) { }

        public override bool StartTimer()
        {
            return false;
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
