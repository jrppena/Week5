import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/ICS",{useNewURLParser:true,useUnifiedTopology: true})

const Student = mongoose.model('Student', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
});

const homepage = (req, res) => {
    res.send('Welcome to the Homepage');

}

const findStudents = async (req, res)=>{
    res.send(await Student.find({}));
}

const findStudentsPost = async(req, res)=>{ //find
    res.send(await Student.find({age: req.body.age}))
}

const addStudentPost = async(req, res)=>{ // create
    try{
        const student = new Student({
            stdnum: req.body.stdnum,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age,
        });
        const result = await student.save(); 
        res.send(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

const updateStudentPost = async (req,res)=>{ //update
    let updateStudent = await Student.findOne({stdnum:"0106563890"});
    updateStudent.fname = req.body.fname;
    updateStudent.lname = req.body.lname;
    updateStudent.age = req.body.age;
    const result = await updateStudent.save(); 
    res.send(result);
}

const deleteStudentPost = async (req,res)=>{ // delete
    let haha = req.body.stdnum;
    await Student.deleteOne({stdnum:req.body.stdnum});
}


export { homepage,findStudents,findStudentsPost, addStudentPost,updateStudentPost,deleteStudentPost};