using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace FestiTimer.Identity
{
    public class Config
    {
        private readonly string _appUrl;

        public Config(string appUrl)
        {
            _appUrl = appUrl;
        }

        public IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };
        }

        public IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "festitimer-client",
                    ClientName = "FestiTimer SPA",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "festitimer-api"
                    },
                    AllowAccessTokensViaBrowser = true,
                    RequireConsent = false,
                    AllowedCorsOrigins = { _appUrl },
                    RedirectUris = { _appUrl + "/assets/oidc-login-redirect.html" },
                    PostLogoutRedirectUris = { _appUrl + "/?postLogout=true" },
                    AccessTokenLifetime = 3600,
                }
            };
        }

        public IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("festitimer-api", "FestiTimer API")
            };
        }
    }
}
