﻿using AutoMapper;
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
    public class OfficeAssignmentsController : Controller
    {
        private readonly IMapper mapper = MvcApplication.MapperConfiguration.CreateMapper();
        private readonly IOfficeAssignmentRepository officeAssignmentRepository = new OfficeAssignmentRepository(new UniversityModel());
        private readonly IInstructorRepository instructorRepository = new InstructorRepository(new UniversityModel());

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
        #region Lista de Instructores
        public async Task<ActionResult> GetInstructorID()
        { // está buena solo implementar en la vista create
            var instructorsModel = await instructorRepository.GetAll();
            var instructorsDTO = instructorsModel.Select(x => mapper.Map<InstructorDTO>(x));
            var InstructorSelect = instructorsDTO.Select(x => new SelectControl
            {
                Id = x.ID,
                Text = x.FullName
            });
            return Json(JsonConvert.SerializeObject(InstructorSelect), JsonRequestBehavior.AllowGet);
        } //SELECT2

        #endregion
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

        [HttpGet]
        public async Task<ActionResult> Edit(int id)
        {

            var officeAssignmentModel = await officeAssignmentRepository.GetById(id);
            var officeAssignmentDTO = mapper.Map<OfficeAssignmentDTO>(officeAssignmentModel);

            return PartialView(officeAssignmentDTO);
        }

        [HttpPost]
        public async Task<ActionResult> Edit(OfficeAssignmentDTO officeAssignmentDTO)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var officeAssignmentModel = mapper.Map<OfficeAssignment>(officeAssignmentDTO);
                    await officeAssignmentRepository.Update(officeAssignmentModel);

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
                await officeAssignmentRepository.Delete(id);


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


    } // CONTROLLER

} //namespace