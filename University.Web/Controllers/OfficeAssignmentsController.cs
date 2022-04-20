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
    public class OfficeAssignmentsController : Controller
    {
        private readonly IMapper mapper = MvcApplication.MapperConfiguration.CreateMapper();
        private readonly IOfficeAssignmentRepository officeAssignmentRepository = new OfficeAssignmentRepository(new UniversityModel());

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> IndexJson()
        {
            var officeAssignmentModel = await officeAssignmentRepository.GetAll();
            var officeAssignmentDTO = officeAssignmentModel.Select(x => mapper.Map<OfficeAssignmentDTO>(x));

            return Json(officeAssignmentDTO, JsonRequestBehavior.AllowGet);
        }

        public async Task<ActionResult> GetInstructorID()
        {
            var officeAssignmentModel = await officeAssignmentRepository.GetAll();
            var officeAssignmentDTO = officeAssignmentModel.Select(x => mapper.Map<InstructorDTO>(x));
            var officeAssignmentsSelect = officeAssignmentDTO.Select(x => new SelectControl
            {
                Id = x.ID,
                Text = x.FullName
            });
            return Json(JsonConvert.SerializeObject(officeAssignmentsSelect), JsonRequestBehavior.AllowGet);
        } //SELECT2

        [HttpGet]
        public ActionResult Create()
        {
            return PartialView(new OfficeAssignmentDTO());
        }//GET CREATE

        [HttpPost]
        public async Task<ActionResult> Create(OfficeAssignmentDTO officeAssignmentDTO)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var officeAssignmentModel = mapper.Map<OfficeAssignment>(officeAssignmentDTO);
                    await officeAssignmentRepository.Insert(officeAssignmentModel);

                }

                return Json(new ResponseDTO
                {

                    Message = "Process done successfull!",
                    IsSuccess = true

                }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                return Json(new ResponseDTO
                {

                    Message = ex.Message,
                    IsSuccess = false

                }, JsonRequestBehavior.AllowGet);
            }
        }//POST CREATE


    } // CONTROLLER

} //namespace