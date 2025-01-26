import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const StudentFormModal = ({ isOpen, onClose, fetchStudents }) => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    class: "",
    section: "",
    rollNumber: "",
    // Add more fields as required
  });

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "students"), studentData);
    fetchStudents();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={studentData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={studentData.age}
          onChange={handleChange}
          required
        />
        {/* Add more inputs for all required fields */}
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default StudentFormModal;
