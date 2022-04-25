using System.Threading.Tasks;
using System.Web.Mvc;
using University.BL.Models;
using University.BL.DTOs;
using University.BL.Controls;
using University.BL.Repositories;
using University.BL.Repositories.Implements;
using AutoMapper;
using System.Linq;
using System;
using Newtonsoft.Json;

namespace University.Web.Controllers
{
    public class DepartmentsController : Controller
    {
        private readonly IMapper mapper = MvcApplication.MapperConfiguration.CreateMapper();
        private readonly IDepartmentRepository departmentRepository = new DepartmentRepository(new UniversityModel());

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public async Task<ActionResult> IndexJson()
        {
            var departmentModel = await departmentRepository.GetAll();
            var departmentDTO = departmentModel.Select(x => mapper.Map<DepartmentDTO>(x));

            return Json(departmentDTO, JsonRequestBehavior.AllowGet);
        } 

    }
}
