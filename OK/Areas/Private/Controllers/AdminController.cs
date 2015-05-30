using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OK.Models;

namespace OK.Areas.Private.Controllers
{
    public class AdminController : Controller
    {
        private IContentService iContentService;
        public AdminController(IContentService iContentService)
        {
            this.iContentService=iContentService;
        }
        // GET: Private/Admin
        public ActionResult Index()
        {
            return View(iContentService.GetList());
        }
        [HttpPost]
        public ActionResult Update(Content content)
        {
            if (content.ID!=null)
            {
                iContentService.Update(content);
            }
            
            return RedirectToAction("Index");
        }
    }
}