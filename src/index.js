import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SkillsBody from './Components/SkillsBody.jsx'
import ProjectsBody from './Components/ProjectsBody.jsx';
import ExperienceBody from './Components/ExperienceBody.jsx';
import ContactBody from './Components/ContactBody.jsx';
import MeBody from './Components/MeBody.jsx'
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    <MeBody></MeBody>
    <SkillsBody></SkillsBody> 
    <ProjectsBody></ProjectsBody>
    <ExperienceBody></ExperienceBody>
    <ContactBody></ContactBody>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
