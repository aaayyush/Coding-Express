import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Contant.css";

function Contant() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEnrollClick = () => {
    navigate("/Enroll"); // Navigate to the /enroll route when clicked
  };

  return (
    <div>
      <div className="content_img">
        <img src="/images/logo1.png" alt="" />
      </div>
      <p>
        OUR WEBSITE PROVIDES AN INTUITIVE PLATFORM WITH INTERACTIVE TUTORIALS
        AND PRACTICAL EXERCISES, MAKING CODING EDUCATION ACCESSIBLE AND
        EFFECTIVE FOR LEARNERS OF ALL LEVELS.
      </p>
      <div className="side_img">
        <div>
          <h2>LET US START A JOURNEY TOGETHER!</h2>
          <button className="small-btn" onClick={handleEnrollClick}>
            Enroll Yourself
          </button>
        </div>
        <img
          src="/images/image2.jpg"
          alt="student learning from CODE EXPRESS"
        />
      </div>
    </div>
  );
}

export default Contant;
