using System;
using Microsoft.AspNetCore.Identity;

namespace FestiTimer.Identity.Data
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Guid QrCode { get; set; }
        public string Pincode { get; set; }
    }
}
