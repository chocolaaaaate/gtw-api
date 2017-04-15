using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GTWWebService.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Guess()
        {
            ViewBag.Title = "Guess The Word";

            return View();
        }

        public ActionResult SetWord()
        {
            ViewBag.Title = "Set The Word";

            return View();
        }
    }
}
