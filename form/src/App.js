import './App.css';
import { React, useState} from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName,lastName,email,contact,gender,selectedOption,subjects,resume,url,about);
  }

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub]
    }))
  }

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects({
      english: true,
      maths: false,
      physics: false
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  }


  return (
    <div className="App">
      <h1>Form in React</h1>

      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name</label>
          <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required />

          <label for="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required />

          <label for="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />

          <label for="tel">Contact</label>
          <input type="tel" name="contact" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Mobile Number" required />

          <label for="gender">Gender</label>
          <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />Male
          <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />male
          <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} />Other

          <label for="lang">Your best Subject</label>
          <input type="checkbox" name="lang" id="english" checked={subjects.english === true} onChange={(e) => handleSubjectChange("english")} />
          <input type="checkbox" name="lang" id="maths" checked={subjects.maths === true} onChange={(e) => handleSubjectChange("maths")} />
          <input type="checkbox" name="lang" id="physics" checked={subjects.physics === true} onChange={(e) => handleSubjectChange("physics")} />

          <label for="file">Upload Resume</label>
          <input type="file" name="file" id="file" onChange={(e) => setResume(e.target.files[0])} placeholder="Upload File" required />

          <label></label>

        </form>
      </fieldset>
    </div>
  )

}

export default App;
