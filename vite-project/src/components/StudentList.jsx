import React from "react";
import Student from "./Students";

const StudentList = ({ student, removeStudent }) => {
    return (
        <table className="table-Students">
            <React.Fragment>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Major</th>
                        <th>University</th>
                        <th>Average Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((student) => (
                        <Student key={student.id} student={student} removeStudent={removeStudent} />
                    ))}
                </tbody>
            </React.Fragment>
        </table>
    );
};

export default StudentList;
