import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectList from './Components/ProjectList.jsx'

// import SkillsBody from './Components/SkillsBody.jsx'
// import ProjectsBody from './Components/ProjectsBody.jsx';
// import ExperienceBody from './Components/ExperienceBody.jsx';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <App/>
    <ProjectList></ProjectList>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
