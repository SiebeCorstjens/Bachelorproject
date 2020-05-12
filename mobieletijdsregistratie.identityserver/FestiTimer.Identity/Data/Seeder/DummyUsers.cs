using System;
using System.Threading.Tasks;
using FestiTimer.Identity.Data.Libraries;
using Microsoft.AspNetCore.Identity;

namespace FestiTimer.Identity.Data.Seeder
{
    public class DummyUsers
    {
        public static async Task Initialize(ApplicationDbContext context,
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager)
        {
            context.Database.EnsureCreated();

            var employerRole = "Employer";
            var personRole = "Person";

            var password = "P@$$w0rd";

            if (await roleManager.FindByNameAsync(employerRole) == null)
            {
                await roleManager.CreateAsync(new ApplicationRole(employerRole));
            }

            if (await roleManager.FindByNameAsync(personRole) == null)
            {
                await roleManager.CreateAsync(new ApplicationRole(personRole));
            }

            if (await userManager.FindByNameAsync("SiebeCorstjens") == null)
            {
                var user = new ApplicationUser
                {
                    Id = "1",
                    UserName = "SiebeCorstjens",
                    FirstName = "Siebe",
                    LastName = "Corstjens",
                    Email = "siebe.corstjens@prato.be",
                    PhoneNumber = "0490634251",
                    QrCode = Guid.NewGuid(),
                    Pincode = HashEncoder.GetHashString("1000"),
                };

                var result = await userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, password);
                    await userManager.AddToRoleAsync(user, employerRole);
                }
            }

            if (await userManager.FindByNameAsync("LiesbethVandevenne") == null)
            {
                var user = new ApplicationUser
                {
                    Id = "2",
                    UserName = "LiesbethVandevenne",
                    FirstName = "Liesbeth",
                    LastName = "Vandevenne",
                    Email = "liesbeth.vandevenne@prato.be",
                    PhoneNumber = "0478812257",
                    QrCode = Guid.NewGuid(),
                    Pincode = HashEncoder.GetHashString("1000"),
                };

                var result = await userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, password);
                    await userManager.AddToRoleAsync(user, employerRole);
                }
            }

            if (await userManager.FindByNameAsync("LornaDeVroom") == null)
            {
                var user = new ApplicationUser
                {
                    Id = "3",
                    UserName = "LornaDeVroom",
                    FirstName = "Lorna",
                    LastName = "De Vroom",
                    Email = "lorna.devroom@hotmail.com",
                    PhoneNumber = "0474267406",
                    QrCode = Guid.NewGuid(),
                    Pincode = HashEncoder.GetHashString("9999"),
                };

                var result = await userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, password);
                    await userManager.AddToRoleAsync(user, personRole);
                }
            }

            if (await userManager.FindByNameAsync("MyriamDekens") == null)
            {
                var user = new ApplicationUser
                {
                    Id = "4",
                    UserName = "MyriamDekens",
                    FirstName = "Myriam",
                    LastName = "Dekens",
                    Email = "myriam.dekens@hotmail.com",
                    PhoneNumber = "0473576611",
                    QrCode = Guid.NewGuid(),
                    Pincode = HashEncoder.GetHashString("9999"),
                };

                var result = await userManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, password);
                    await userManager.AddToRoleAsync(user, personRole);
                }
            }
        }
    }
}
