using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace GTWWebService.Hubs
{
    /**
     * Only to allow server to talk to the clients. 
     */
     // TODO: consider moving entire WordsController API into this Hub.
    public class WordsHub : Hub
    {
        public void NotifyWordSetterClients()
        {
            Clients.All.otherPlayerFinished("guessed it");
        }
    }
}