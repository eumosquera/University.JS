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
    public class CoursesController : Controller
    {
        private readonly IMapper mapper = MvcApplication.MapperConfiguration.CreateMapper();
        private readonly ICourseRepository courseRepository = new CourseRepository(new UniversityModel());

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> IndexJson()
        {
            var coursesModel = await courseRepository.GetAll();
            var coursesDTO = coursesModel.Select(x => mapper.Map<CourseDTO>(x));
            //var courses = courseRepository.GetCoursesByInstructor();

            return Json(coursesDTO, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public async Task<ActionResult> GetCourses()
        {
            var coursesModel = await courseRepository.GetAll();
            var coursesDTO = coursesModel.Select(x => mapper.Map<CourseDTO>(x));
            var coursesSelect = coursesDTO.Select(x => new SelectControl
            {
                Id = x.CourseID,
                Text = x.Title
            });
            return Json(JsonConvert.SerializeObject(coursesSelect), JsonRequestBehavior.AllowGet);
        } //SELECT2

        [HttpGet]
        public ActionResult Create()
        {


            return PartialView(new CourseDTO());
        }//GET CREATE

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(CourseDTO courseDTO)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var courseModel = mapper.Map<Course>(courseDTO);
                    await courseRepository.Insert(courseModel);

                }
                else
                {
                    throw new Exception("Missing data required!");
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


        [HttpGet]
        public async Task<ActionResult> Edit(int id)
        {

            var courseModel = await courseRepository.GetById(id);
            var courseDTO = mapper.Map<CourseDTO>(courseModel);

            return PartialView(courseDTO);
        }//GET EDIT

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit(CourseDTO courseDTO)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var courseModel = mapper.Map<Course>(courseDTO);
                    await courseRepository.Update(courseModel);

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
        }//POST EDIT

        [HttpGet]
        public async Task<ActionResult> Delete(int id)
        {

            try
            {
                await courseRepository.Delete(id);


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

        }//DELETE

    } // CONTROLLER
} // NAME SPACE