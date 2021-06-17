import React, { useEffect } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
} from "react-pro-sidebar";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainMenuItem from "./MenuItem";
import GoSubMenu from "./SubMenu";
import SubMenuItem from "./SubmenuItem";
import { logoutUser } from "../../../actions/authActions";
import { getProfile } from "../../../actions/dashboardActions";
import "./styles.scss";

const Sidebar = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    props.getProfile(token);
  }, []);

  const handleLogout = () => {
    props.logoutUser(props.history);
  };

  return (
    <React.Fragment>
      <ProSidebar
        collapsed={props.collapsed}
        toggled={props.toggled}
        breakPoint="md"
        onToggle={props.handleToggle}
      >
        <SidebarHeader>
          {window.innerWidth > 767 &&
            !props.collapsed &&
            (!props.toggled || props.toggled) && (
              <h3>
                <img className="logo" src="/logo.png" alt="logo" />
              </h3>
            )}
          {window.innerWidth <= "767" && props.toggled && (
            <>
              <h3>
                <img className="logo-small" src="/logo192.png" alt="logo" />
              </h3>
              <i
                onClick={() => props.handleToggle("toggled")}
                className="fa fa-times"
              ></i>
            </>
          )}
        </SidebarHeader>

        <SidebarContent>
          {/* Dashboard */}
          <Menu iconShape="square" popperArrow={true}>
            <MainMenuItem
              icon="tachometer"
              collapsed={props.collapsed}
              name="Dashboard"
              link="/admin/dashboard"
              handleClick={() => props.handleToggle("toggled")}
            />
            {/* Manage Owner */}
              <MainMenuItem
                icon="user-plus"
                collapsed={props.collapsed}
                name="Managers"
                link="/admin/managers"
                handleClick={() => props.handleToggle("toggled")}
              />
            {/* Walker */}
              <MainMenuItem
                icon="user-md"
                collapsed={props.collapsed}
                name="Captains"
                link="/admin/captains"
                handleClick={() => props.handleToggle("toggled")}
              />
            {/* Bookings */}
          
              <MainMenuItem
                icon="sticky-note"
                collapsed={props.collapsed}
                name="Vessels"
                link="/admin/bookings"
                handleClick={() => props.handleToggle("toggled")}
              />
         
            {/* Manage FAQ */}
          
              <GoSubMenu collapsed={props.collapsed} name="FAQs" icon="file">
                  <SubMenuItem name="Add FAQ" link="/admin/faq/add" />
                  <SubMenuItem name="Manage FAQ" link="/admin/faq/manage" />
              </GoSubMenu>
               
              <GoSubMenu
                collapsed={props.collapsed}
                name="Subscriptions"
                icon="ticket"
              >
                    <SubMenuItem
                      name="Add Subscription Plan"
                      link="/admin/subscriptions/add"
                      handleClick={() => props.handleToggle("toggled")}
                    />
                    <SubMenuItem
                    name="Manage Subscriptions"
                    link="/admin/subscriptions/manage"
                    handleClick={() => props.handleToggle("toggled")}
                  />
              </GoSubMenu>
              <GoSubMenu
                collapsed={props.collapsed}
                name="Blogs"
                icon="ticket"
              >
                    <SubMenuItem
                      name="Add Blog"
                      link="/admin/blog/add"
                      handleClick={() => props.handleToggle("toggled")}
                    />
                    <SubMenuItem
                    name="Manage Blogs"
                    link="/admin/blog/manage"
                    handleClick={() => props.handleToggle("toggled")}
                  />
              </GoSubMenu>
         
            {/* Manage Static Content */}

              <GoSubMenu
                collapsed={props.collapsed}
                name="Static Content"
                icon="file"
              >
                    <SubMenuItem name="About" link="/admin/about" />
              <SubMenuItem name="Privacy Policy" link="/admin/privacy-policy" />
              <SubMenuItem name="Terms & conditions" link="/admin/terms-and-condition" />
              </GoSubMenu>
     
            {/* Profile */}

            <MainMenuItem
              icon="user"
              collapsed={props.collapsed}
              name="Profile"
              link="/admin/profile"
              handleClick={() => props.handleToggle("toggled")}
            />

            {/* Settings */}

            <MainMenuItem
              icon="cog"
              collapsed={props.collapsed}
              name="Settings"
              link="/admin/settings"
              handleClick={() => props.handleToggle("toggled")}
            />
            
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { logoutUser, getProfile })(
  withRouter(Sidebar)
);
