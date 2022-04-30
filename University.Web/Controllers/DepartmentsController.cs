using AutoMapper;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using University.BL.Controls;
using University.BL.DTOs;
using University.BL.Models;
using University.BL.Repositories;
using University.BL.Repositories.Implements;

namespace University.Web.Controllers
{
    public class DepartmentsController : Controller
    {
        private readonly IMapper mapper = MvcApplication.MapperConfiguration.CreateMapper();
        private readonly IDepartmentRepository departmentRepository = new DepartmentRepository(new UniversityModel());
        private readonly IInstructorRepository instructorRepository = new InstructorRepository(new UniversityModel());

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> IndexJson()
        {
            var departmentModel = await departmentRepository.GetAll();
            var coursesDTO = departmentModel.Select(x => mapper.Map<DepartmentDTO>(x));
            return Json(coursesDTO, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Create()
        {
            return PartialView(new DepartmentDTO());
        }

        #region Lista de Instructores
        public async Task<ActionResult> GetInstructorID()
        { 
            var instructorsModel = await instructorRepository.GetAll();
            var instructorsDTO = instructorsModel.Select(x => mapper.Map<InstructorDTO>(x));
            var InstructorSelect = instructorsDTO.Select(x => new SelectControl
            {
                Id = x.ID,
                Text = x.FullName
            });
            return Json(JsonConvert.SerializeObject(InstructorSelect), JsonRequestBehavior.AllowGet);
        } //Listas de instructores

        #endregion

        [HttpPost]
        public async Task<ActionResult> Create(DepartmentDTO departmentDTO)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var departmentModel = mapper.Map<Department>(departmentDTO);
                    await departmentRepository.Insert(departmentModel);

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
        }


        [HttpGet]
        public async Task<ActionResult> Edit(int id)
        {

            var departmentModel = await departmentRepository.GetById(id);
            var departmentDTO = mapper.Map<DepartmentDTO>(departmentModel);

            return PartialView(departmentDTO);
        }

        [HttpPost]
        public async Task<ActionResult> Edit(DepartmentDTO departmentDTO)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var departmentModel = mapper.Map<Department>(departmentDTO);
                    await departmentRepository.Update(departmentModel);

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
        }


        [HttpGet]
        public async Task<ActionResult> Delete(int id)
        {

            try
            {
                await departmentRepository.Delete(id);


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

        }


    }
}