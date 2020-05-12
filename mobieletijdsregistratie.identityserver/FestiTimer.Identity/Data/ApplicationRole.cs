using Microsoft.AspNetCore.Identity;

namespace FestiTimer.Identity.Data
{
    public class ApplicationRole : IdentityRole
    {
        public ApplicationRole() : base() { }

        public ApplicationRole(string roleName) : base(roleName)
        {
            base.Name = roleName;
        }
    }
}
