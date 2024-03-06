import students from "../data/students";
import { useState } from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

const StudentsApp = () => {
    const [student, setStudent] = useState(students)
    const addStudent = (name, age, major, university, averageGrade) => {
        const newStudent = {
            id: 1,
            name,
            age,
            major,
            university,
            averageGrade
        }
        const updatedStudents = [...student, newStudent];

        setStudent(updatedStudents);
    }

    const removeStudent = (studentId) => {
        const updatedStudents = students.filter((student) => student.id !== studentId)
        setStudent(updatedStudents)
    }
    return (
        <>
            <StudentList student={student} removeStudent={removeStudent} />
            <AddStudent addStudent={addStudent} />
        </>
    )
}
export default StudentsApp