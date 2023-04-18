import { findStudents, homepage,findStudentsPost, addStudentPost,updateStudentPost,deleteStudentPost} from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/find-students',findStudents);
    app.post('/find-students-post',findStudentsPost);
    app.post('/add-students', addStudentPost);
    app.post('/update-student',updateStudentPost);
    app.post('/delete-student',deleteStudentPost);

}

export default router;