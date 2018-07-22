import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StaarTestDashboard from "../components/StaarTestDashboard";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import DetailPage from "../components/DetailPage";
import SideBar from "../components/SideBar";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header title="STAAR TEST" />
      <div style={{display: "flex", flexDirection: "column" }}>
        <SideBar />
        <Route path='/' component={StaarTestDashboard} exact={true} />
        <Route path='/exploration' component={DetailPage} />
        <Route path='/revolution' component={DetailPage} />
        <Route path='/constitution' component={DetailPage} />
        <Route path='/colonization' component={DetailPage} />
        <Route path='/earlyRepublic' component={DetailPage} />
        <Route path='/jackson' component={DetailPage} />
        <Route path='/indianRevolution' component={DetailPage} />
        <Route path='/westExpansion' component={DetailPage} />
        <Route path='/reform' component={DetailPage} />
        <Route path='/sectionalism' component={DetailPage} />
        <Route path='/civilWar' component={DetailPage} />
        <Route path='/reconstruction' component={DetailPage} />
        <Route path='/help' component={HelpPage} />
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter
