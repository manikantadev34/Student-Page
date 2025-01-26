import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Sidebar from "../components/Sidebar";
import StudentFormModal from "../components/StudentFormModal";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchStudents = async () => {
    const studentCollection = collection(db, "students");
    const studentSnapshot = await getDocs(studentCollection);
    setStudents(studentSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="students-page">
      <Sidebar />
      <button onClick={() => setModalOpen(true)}>Add Student</button>
      <StudentFormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        fetchStudents={fetchStudents}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.rollNumber}</td>
              <td>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;
