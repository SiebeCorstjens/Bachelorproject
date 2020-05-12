using System.Linq;
using FestiTimer.Identity.Data;
using Microsoft.AspNetCore.Identity;

namespace FestiTimer.Identity.Extensions
{
    public static class UserManagerExtensions
    {
        public static ApplicationUser FindByCodeAsync(this UserManager<ApplicationUser> userManager, string code)
        {
            return userManager?.Users?.SingleOrDefault(x => x.QrCode.ToString() == code);
        }
    }
}
