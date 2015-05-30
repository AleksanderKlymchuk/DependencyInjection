using OK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OK
{
    public interface IContentService
    {
        void Add(Content content);
        List<Content> GetList();
        void Update(Content content);
    }
    public class ContentService:IContentService
    {
        private IDataService iDataService;
        public ContentService(IDataService iDataService)
        {
            this.iDataService = iDataService;
        }
        public void Add(Content content)
        {
            using (FluentModel db = iDataService.Instance<FluentModel>())
            {
                content.CreateTime = DateTime.Now;
                if (!iDataService.participantExist(content))
                {
                    content.ID = Guid.NewGuid();
                    content.Person.ID = Guid.NewGuid();
                    content.Person.CreateTime = DateTime.Now;
                    db.Add(content);
                    db.SaveChanges();
                }
                else
                {
                    content.Person = db.GetAll<Person>().Where(p => p.Email == content.Person.Email).FirstOrDefault();
                    content.ID = Guid.NewGuid();
                    db.Add(content);
                    db.SaveChanges();
                }

            }
        }
        public List<Content> GetList()
        {
            
            using (FluentModel db = iDataService.Instance<FluentModel>())
            {
                return db.GetAll<Content>().ToList();
            }
        }
        public void Update(Content content)
        {
            using (FluentModel db = iDataService.Instance<FluentModel>())
            {   
                db.AttachCopy(content);
                db.SaveChanges();
            }
        }
    }
}