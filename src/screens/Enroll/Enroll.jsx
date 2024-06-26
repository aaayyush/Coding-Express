import React, { useState } from "react";
import "./Enroll.css"; // Import your CSS file

function Enroll() {
  const [name, setName] = useState("");
  const [institutionType, setInstitutionType] = useState("school");
  const [schoolOrCollege, setSchoolOrCollege] = useState("");
  const [classOrCourse, setClassOrCourse] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional validations here

    // Display alert after form submission
    alert("Form submitted successfully!");

    // Clear form fields after submission (optional)
    setName("");
    setInstitutionType("school"); // Reset to default value
    setSchoolOrCollege("");
    setClassOrCourse("");
    setAge("");
    setGender("");
    setCountry("");
    setCity("");
  };

  return (
    <div className="enroll-container">
      {" "}
      {/* Apply container styling */}
      <h2 className="enroll-heading">Enrollment Form</h2>{" "}
      {/* Apply heading styling */}
      <form className="enroll-form" onSubmit={handleSubmit}>
        {" "}
        {/* Apply form styling */}
        <label htmlFor="name" className="enroll-label">
          Name:
        </label>{" "}
        {/* Apply label styling */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="enroll-input" // Apply input field styling
          required
        />
        <label htmlFor="institutionType" className="enroll-label">
          Institution Type:
        </label>{" "}
        {/* Apply label styling */}
        <select
          id="institutionType"
          value={institutionType}
          onChange={(e) => setInstitutionType(e.target.value)}
          className="enroll-select" // Apply select styling
        >
          <option value="school">School</option>
          <option value="college">College</option>
        </select>
        {institutionType === "school" ? (
          <div className="enroll-school-section">
            {" "}
            {/* Apply section specific styling */}
            <label htmlFor="schoolName" className="enroll-label">
              School Name:
            </label>{" "}
            {/* Apply label styling */}
            <input
              type="text"
              id="schoolName"
              value={schoolOrCollege}
              onChange={(e) => setSchoolOrCollege(e.target.value)}
              className="enroll-input" // Apply input field styling
              required
            />
          </div>
        ) : (
          <div className="enroll-college-section">
            {" "}
            {/* Apply section specific styling */}
            <label htmlFor="collegeName" className="enroll-label">
              College Name:
            </label>{" "}
            {/* Apply label styling */}
            <input
              type="text"
              id="collegeName"
              value={schoolOrCollege}
              onChange={(e) => setSchoolOrCollege(e.target.value)}
              className="enroll-input" // Apply input field styling
              required
            />
          </div>
        )}
        <label htmlFor="classOrCourse" className="enroll-label">
          {institutionType === "school" ? "Class:" : "Course:"}
        </label>{" "}
        {/* Apply label styling */}
        <input
          type="text"
          id="classOrCourse"
          value={classOrCourse}
          onChange={(e) => setClassOrCourse(e.target.value)}
          className="enroll-input" // Apply input field styling
          required
        />
        <label htmlFor="age" className="enroll-label">
          Age:
        </label>{" "}
        {/* Apply label styling */}
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="enroll-input" // Apply input field styling
          required
        />
        <label htmlFor="gender" className="enroll-label">
          Gender:
        </label>{" "}
        {/* Apply label styling */}
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="enroll-select" // Apply select styling
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="country" className="enroll-label">
          Country:
        </label>{" "}
        {/* Apply label styling */}
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="enroll-input" // Apply input field styling
          required
        />
        <label htmlFor="city" className="enroll-label">
          City:
        </label>{" "}
        {/* Apply label styling */}
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="enroll-input" // Apply input field styling
          required
        />
        <button type="submit" className="enroll-button">
          Submit
        </button>{" "}
        {/* Apply button styling */}
      </form>
    </div>
  );
}

export default Enroll;
