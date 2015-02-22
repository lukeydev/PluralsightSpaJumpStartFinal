using EdocsGroupManagerSvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EdocsGroupManagerSvc.Controllers
{
    public class GroupsController : ApiController
    {
        Group[] groups = new Group[]
        {
            new Group{SystemId=1, GroupId="DOCS_SUPERS", GroupName="DM Supers"},
            new Group{SystemId=2, GroupId="DOCS_USAS", GroupName="DM Usas"},
            new Group{SystemId=3, GroupId="BULLS", GroupName="Chicago Bulls"}        
        };

        public IEnumerable<Group> GetAllGroups()
        {
            return groups;
        }

        public IHttpActionResult GetGroup(int systemId)
        {
            var group = groups.FirstOrDefault((g) => g.SystemId == systemId);
            if (group==null)
            {
                return NotFound();
            }

            return Ok(group);
        }

    }
}
