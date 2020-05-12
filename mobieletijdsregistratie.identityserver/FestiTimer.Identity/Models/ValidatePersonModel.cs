using FestiTimer.Identity.Data;
using System.ComponentModel.DataAnnotations;

namespace FestiTimer.Identity.Models
{
    public class ValidatePersonModel
    {
        [Required]
        public ApplicationUser User { get; set; }
        public string ReturnUrl { get; set; }
    }
}
