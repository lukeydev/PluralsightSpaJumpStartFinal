using EdocsGroupManagerSvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EdocsGroupManagerSvc.Controllers
{
    public class MappedGroupsController : ApiController
    {
        MappedGroup[] mappedGroups = new MappedGroup[]
        {
            new MappedGroup{SystemId=1, GroupId="DOCS_SUPERS", GroupName="DM Supers", FullControl=false, ReadOnly=true},
            new MappedGroup{SystemId=2, GroupId="DOCS_USASa", GroupName="DM Usas", FullControl=true, ReadOnly=false},
            new MappedGroup{SystemId=3, GroupId="BULLS1", GroupName="Chicago Bulls", FullControl=true, ReadOnly=false}        
        };

        public IEnumerable<Group> GetAllroups()
        {
            return mappedGroups;
        }

        public IHttpActionResult GetGroup(int systemId)
        {
            var group = mappedGroups.FirstOrDefault((g) => g.SystemId == systemId);
            if (group == null)
            {
                return NotFound();
            }

            return Ok(group);
        }
    }
}
