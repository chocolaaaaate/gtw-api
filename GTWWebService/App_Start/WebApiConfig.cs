using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace GTWWebService
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{gamekey}",
                defaults: new { gamekey = RouteParameter.Optional }
            );
        }
    }
}
