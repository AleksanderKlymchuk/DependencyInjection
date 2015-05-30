using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace OK.Models
{
    public class Person
    {
        public DateTime CreateTime { get; set; }
        public Guid ID { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required,DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public IList<Content> Contents { get; set; }
        
    }
}