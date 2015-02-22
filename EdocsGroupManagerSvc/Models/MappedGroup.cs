using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EdocsGroupManagerSvc.Models
{
    public class MappedGroup : Group
    {
        public bool FullControl { get; set; }
        public bool ReadOnly { get; set; }        
    }
}