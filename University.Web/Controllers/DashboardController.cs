using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using University.BL.DTOs;
using University.BL.Models;
using University.BL.Repositories;
using University.BL.Repositories.Implements;

namespace University.Web.Controllers
{
    public class DashboardController : Controller
    {
        private readonly ICourseRepository courseRepository = new CourseRepository(new UniversityModel());

        // GET: Dashboard
        public ActionResult Donut()
        {
            return View();
        }

        public async Task<ActionResult> DonutJson(int id)
        {
            var data = new List<DonutExampleDTO>();
            switch (id)
            {
                case 1:
                    data = courseRepository.GetReport().ToList();
                    break;
                case 2:
                    data = courseRepository.GetReport2().ToList(); ;
                    break;
                case 3:
                    data = courseRepository.GetReport3().ToList(); ;
                    break;
                case 4:
                    data = courseRepository.GetReport3().ToList(); ;
                    break;
                default:
                    break;
            }

            var dataJson = JsonConvert.SerializeObject(data);
            return Json(dataJson, JsonRequestBehavior.AllowGet);
        }
                
       
        public ActionResult Bar()
        {
            return View();
        }
    }
}
