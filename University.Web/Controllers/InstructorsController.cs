﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace University.Web.Controllers
{
    public class InstructorsController : Controller
    {
        // GET: Instructors
        public ActionResult Index()
        {
            return View();
        }
    }
}