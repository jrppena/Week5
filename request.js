import needle from "needle";

const data = {
    age: 44
}

const addData = {
    stdnum: '111010008',
    fname: 'Megan',
    lname: 'Cruz',
    age:25
}


const updatedData = {
    stdnum: '123123123',
    fname: 'Mariela',
    lname: 'Flores',
    age:20
}
// needle.post('http://localhost:3000/add-students',{
//     stdnum: addData.stdnum,
//     fname: addData.fname,
//     lname: addData.lname,
//     age: addData.age
// }, (req,res)=> {
//     console.log(res.body);
// });


// needle.post('http://localhost:3000/update-student',{
//     stdnum: updatedData.stdnum,
//     fname: updatedData.fname,
//     lname: updatedData.lname,
//     age: updatedData.age
// }, (req,res)=> {
//     console.log(res.body);
// });

needle.post('http://localhost:3000/delete-student',{
    stdnum: addData.stdnum,
    fname: addData.fname,
    lname: addData.lname,
    age: addData.age
}, (req,res)=> {
    console.log(res.body);
});

// needle.post('http://localhost:3000/find-students-post',{
//     age: data.age
// },(req,res)=>{
//     console.log(res.body);
// });