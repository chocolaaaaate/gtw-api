using GTWWebService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GTWWebService.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class KeyWordPairsController : ApiController
    {

        // GET api/keywordpair/<alphanumerickey>
        [HttpGet]
        public IHttpActionResult Get(string gamekey)
        {
            KeyWordPair kwp = GWTDbContext.GetSingletonInstance().KeyWordPairs.SingleOrDefault(k => k.Key == gamekey);
            if (kwp == null)
            {
                return NotFound();
            }
            return Ok(kwp.Word);
        }

        [HttpPost]
        public IHttpActionResult CreateKeyWordPair(KeyWordPair kwp)
        {
            Console.WriteLine("received create request");
            kwp.Key = Guid.NewGuid().ToString("n").Substring(0, 15);
            // Temp
            GWTDbContext.GetSingletonInstance().KeyWordPairs.Add(kwp);
            GWTDbContext.GetSingletonInstance().SaveChanges();
            //TODO DB context save + save changes 
            return Created(new Uri(Request.RequestUri + "/" + kwp.Key), kwp);
        }
    }
}

