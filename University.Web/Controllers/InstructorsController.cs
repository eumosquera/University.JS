using System.Threading.Tasks;
using System.Web.Mvc;
using University.BL.Models;
using University.BL.DTOs;
using University.BL.Repositories;
using University.BL.Repositories.Implements;
using AutoMapper;
using System.Linq;
using System;

namespace University.Web.Controllers
{
    public class InstructorsController : Controller
    {
        private readonly IMapper mapper = MvcApplication.MapperConfiguration.CreateMapper();
        private readonly IInstructorRepository instructorRepository = new InstructorRepository(new UniversityModel());

        // GET: Instructors
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> IndexJson()
        {
            var instructorsModel = await instructorRepository.GetAll();
            var instructorsDTO = instructorsModel.Select(x => mapper.Map<InstructorDTO>(x));

            return Json(instructorsDTO, JsonRequestBehavior.AllowGet);
        }


    }//CLAS
}//NAMESPACE