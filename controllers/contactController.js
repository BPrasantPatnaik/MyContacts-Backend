//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = (function(req,res){
    res.json({ message:"Get all contacts" });
});

//@desc Create New contacts
//@route POST /api/contacts
//@access public

const createContact = (function(req,res){
    console.log("The request body is :",req.body);
    const { name,email,phone } = req.body;
    if(!name|| !email || !phone){
        req.status(400);
        throw new Error("All fields are mandatory !!!");
    }
});

//@desc Get a contact
//@route POST /api/contacts
//@access public

const getContact = (function(req,res){
    res.json({ message:"Get contact for " + req.params.id });
});

//@desc Update a contact
//@route POST /api/contacts
//@access public

const updateContact = (function(req,res){
    res.json({ message:"Update  contact for " + req.params.id });
});

//@desc Delete a contacts
//@route POST /api/contacts
//@access public

const deleteContact = (function(req,res){
    res.json({ message:"Delete contact for " + req.params.id });
});

module.exports = {getContacts , createContact , getContact , updateContact , deleteContact}