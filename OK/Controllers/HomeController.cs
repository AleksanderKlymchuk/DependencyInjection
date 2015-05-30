using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OK.Models;
namespace OK.Controllers
{
    public class HomeController : Controller
    {
        private IContentService iContentService;
        public HomeController(IContentService iContentService)
        {
            this.iContentService = iContentService;
        }
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost,ValidateAntiForgeryToken]
        public ActionResult Index(Content content)
        {
           
            if (content.Person.Email != null)
            {
                iContentService.Add(content);

            }
            if(Request.IsAjaxRequest())
            {
               
                return Json("done", JsonRequestBehavior.AllowGet);
            }
            return View();
        }
        public ActionResult CV()
        {
            
            return View();
        }
       
        public PartialViewResult Contact()
        {
            return PartialView ("_contact");
        }
        [ChildActionOnly]
        public PartialViewResult Info()
        {
            return PartialView("_info");
        }
    }
}