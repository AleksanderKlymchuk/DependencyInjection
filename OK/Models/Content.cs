using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace OK.Models
{
    
    public class Content:EntityBase
    {
        public DateTime CreateTime { get; set; }
        public Guid ID { get; set; }
        [Required]
        public string Topic { get; set; }
        [Required]
        public string Message { get; set; }
        public Guid PersonId { get; set; }
        public Person Person { get; set; }
        
    }

}