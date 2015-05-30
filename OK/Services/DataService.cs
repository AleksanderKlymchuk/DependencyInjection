using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using OK.Models;
namespace OK
{
    public interface IDataService
    {
        T Instance<T>() where T : new();
        bool participantExist(Content content);
    }
    public class DataService:IDataService
    {
        public T Instance<T>() where T:new()
        {
           return new T();
        }
        public bool participantExist(Content content){
            using(FluentModel db=Instance<FluentModel>()){
                if (db.GetAll<Person>().Where(p => p.Email == content.Person.Email).FirstOrDefault() == null)
                    return true;
                return false;
            }
        }
    }
}