import React from 'react';
import {Link} from "react-router-dom";

const StaarTestDashboard = () => (
  <div className="container">
    <div className="dashboard__links">
      <Link className="dashboard__link" to="/exploration">EXPLORATION</Link>
      <Link className="dashboard__link" to="/revolution">REVOLUTION</Link>
      <Link className="dashboard__link" to="/constitution">CONSTITUTION</Link>
      <Link className="dashboard__link" to="/colonization">COLONIZATION</Link>
      <Link className="dashboard__link" to="/earlyRepublic">EARLY REPUBLIC</Link>
      <Link className="dashboard__link" to="/jackson">JACKSON</Link>
      <Link className="dashboard__link" to="/indianRevolution">INDIAN REVOLUTION</Link>
      <Link className="dashboard__link" to="/westExpansion">WEST EXPANSION</Link>
      <Link className="dashboard__link" to="/reform">REFORM</Link>
      <Link className="dashboard__link" to="/sectionalism">SECTIONALISM</Link>
      <Link className="dashboard__link" to="/civilWar">CIVIL WAR</Link>
      <Link className="dashboard__link" to="/reconstruction">RECONSTRUCTION</Link>
    </div>
  </div>
);

export default StaarTestDashboard
