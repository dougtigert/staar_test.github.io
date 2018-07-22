import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {MuiThemeProvider} from "material-ui";
import NavLink from "react-router-dom/es/NavLink";

const SideBar = () => (
  <MuiThemeProvider>
    <Drawer width={240} open={true}>
      <div className="sidebar__sideMenu">
        <div className="sidebar__title">Exploration - Constitution</div>
        <div className="sidebar__divider"></div>
        <MenuItem className="detail-sideMenu">
          <NavLink className="sidebar__links" activeClassName="is-active" to="/exploration" exact={true}>EXPLORATION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/revolution" exact={true}>REVOLUTION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/constitution" exact={true}>CONSTITUTION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/colonization" exact={true}>COLONIZATION</NavLink>
        </MenuItem>
        <div className="sidebar__title">Early Republic - Reconstruction</div>
        <div className="sidebar__divider"></div>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/earlyRepublic" exact={true}>EARLY REPUBLIC</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/jackson" exact={true}>JACKSON</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/indianRevolution" exact={true}>INDIAN REVOLUTION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/westExpansion" exact={true}>WEST EXPANSION</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/sectionalism" exact={true}>SECTIONALISM</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/civilWar" exact={true}>CIVIL WAR</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="sidebar__links" activeClassName="is-active" to="/reconstruction">RECONSTRUCTION</NavLink>
        </MenuItem>
      </div>
    </Drawer>
  </MuiThemeProvider>
);

export default SideBar