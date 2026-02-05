import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./exp-3.3.css";
import profilePic from "../assets/first.png";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="app-name">MyApp</h2>
    </div>
  );
}

function Profile() {
  return (
    <div className="container">
      <div className="card">
        <h1>Profile Page</h1>

        <img src={profilePic} className="profile-img" />

        <h2>Projects</h2>
        <ol className="list">
          <li>News Bias Detection</li>
          <li>AEGIS</li>
          <li>Clipify</li>
        </ol>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard</h1>

        <h2>Skills</h2>
        <ol className="list">
          <li>Golang</li>
          <li>Mermaid</li>
          <li>Data Structure</li>
          <li>Machine Learning</li>
        </ol>

        <h2>About Me</h2>
        <p>
          I am a third year computer science student with string focus on backend , data structure and algorithm and i hate onins   
        </p>
      </div>
    </div>
  );
}

function Exp33() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Exp33;
