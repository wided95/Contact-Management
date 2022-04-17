const mongoose=require('mongoose');
const contactSchema = new mongoose.Schema({
FirstName:{
    type:String,
    required: true
},
LastName:{
    type:String,
    required: true
},
Email:{
    type:String,
    required: true,
    unique:true
},
PhoneNumber:{
    type:String,
    required: true
},
Status:{
    type:String,
    required: true
},
Address:{
    type:String,
    required: true
}

  });
  const Contact = mongoose.model('Contact', contactSchema);
  module.exports=Contact;