import React from 'react';
import './Resume.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Resume() {
  const resumeData = {
    name: 'John Doe',
    title: 'Web Developer',
    contact: {
      email: 'john@example.com',
      phone: '123-456-7890',
      website: 'johndoe.com',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
    },
    education: [
      {
        institution: 'University of ABC',
        degree: 'Bachelor of Science in Computer Science',
        year: '2010 - 2014',
      },
      {
        institution: 'XYZ Technical Institute',
        degree: 'Web Development Certification',
        year: '2015',
      },
    ],
    experience: [
      {
        position: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        year: '2015 - Present',
        description:
          'Developed and maintained web applications using HTML, CSS, and JavaScript. Collaborated with cross-functional teams...',
      },
      {
        position: 'Junior Developer',
        company: 'Web Development Co.',
        year: '2014 - 2015',
        description:
          'Assisted in the development of responsive websites. Participated in code reviews and bug fixes...',
      },
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git', 'Responsive Design'],
  };

  // Function to handle the resume download
  const downloadResume = () => {
    // Implement your resume download logic here, e.g., creating and triggering a download link
    // For simplicity, this example opens the resume in a new tab (replace with actual download logic)
    window.open('/path/to/your/resume.pdf', '_blank');
  };

  return (
    <div>
        <Header></Header>
        <div className="resume">
        <header className='resume-header'>
            <h1>{resumeData.name}</h1>
            <p className='title'>{resumeData.title}</p>
            <button className="download-button" onClick={downloadResume}>
            Download Resume
            </button>
        </header>
        <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>Email: {resumeData.contact.email}</li>
          <li>Phone: {resumeData.contact.phone}</li>
          <li>Website: {resumeData.contact.website}</li>
          <li>LinkedIn: {resumeData.contact.linkedin}</li>
          <li>GitHub: {resumeData.contact.github}</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          {resumeData.education.map((item, index) => (
            <li key={index}>
              <p>{item.institution}</p>
              <p>{item.degree}</p>
              <p>{item.year}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <ul>
          {resumeData.experience.map((item, index) => (
            <li key={index}>
              <p>{item.position}</p>
              <p>{item.company}</p>
              <p>{item.year}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Resume;
