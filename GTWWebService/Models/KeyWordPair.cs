using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GTWWebService.Models
{
    public class KeyWordPair
    {
        public int Id { get; set; }

        public string Key { get; set; }

        public string Word { get; set; }

        public Boolean WasAttempted { get; set; }

        public Boolean WasCorrectlyGuessed { get; set; }

        public KeyWordPair()
        {

        }

        public KeyWordPair(string key, string wordToGuess)
        {
            Key = key;
            Word = wordToGuess;
        }

    }
}

