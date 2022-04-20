using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using University.BL.DTOs;

namespace University.Web.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Donut()
        {
            return View();
        }
        public ActionResult Bar()
        {
            return View();
        }

        public async Task<ActionResult> DonutJson()
        {
            var data = new List<DonutExampleDTO>();
            data.Add(new DonutExampleDTO { Value = 70, Label = "Java"});
            data.Add(new DonutExampleDTO { Value = 30, Label = "Angular"});
            data.Add(new DonutExampleDTO { Value = 50, Label = "React"});
            data.Add(new DonutExampleDTO { Value = 45, Label = "Node.Js"});

            var dataJson = JsonConvert.SerializeObject(data);
           

            return Json(dataJson, JsonRequestBehavior.AllowGet);

        }
    }
}