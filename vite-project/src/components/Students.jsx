import Button from "./Button"
const Student = ({ student, removeStudent }) => {
    return (
        <tr className="table-row">
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.major}</td>
            <td>{student.university}</td>
            <td>{student.averageGrade}</td>
            <td>
                <Button onClick={() => deleteStudent(id)} className="btn-delete">
                    Delete
                </Button>
            </td>
        </tr>
    )
}
export default Student