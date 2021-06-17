import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import { RouteWrapper } from "./components/startup/RouteWrapper";
import AddSubscription from "./components/panel/Subscription/AddSubscription";
import ManageSubscriptions from "./components/panel/Subscription/ManageSubscriptions";
import AddBlog from "./components/panel/Blog/AddBlog";
import ManageBlog from "./components/panel/Blog/ManageBlog";
import Login from "./components/auth/Login/Login";
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword/ResetPassword";
import Admin from "./components/layouts/Admin";
import Dashboard from "./components/panel/Dashboard/Dashboard";
import ManageManager from "./components/panel/Manager/ManageManager";
import ManagerDetails from "./components/panel/Manager/ManagerDetails";
import ManageCaptain from "./components/panel/Captain/ManageCaptain";
import CaptainDetails from "./components/panel/Captain/CaptainDetails";
import Bookings from "./components/panel/Bookings/Bookings";
import Profile from "./components/panel/Profile/Profile";
import DocFile from "./components/panel/Bookings/DocFile";
import AddFAQ from "./components/panel/FAQ/AddFAQ";
import ManageFAQ from "./components/panel/FAQ/ManageFAQ";
import ManageCategory from "./components/panel/Category/ManageCategory";
import Settings from "./components/panel/Settings/Settings";
import VerifyEmail from "./components/panel/VerifyEmail/VerifyEmail";
import About from "./components/panel/CMS/About";
import Policy from "./components/panel/CMS/Policy";
import UpdateAbout from "./components/panel/CMS/About";
import Terms from "./components/panel/CMS/Terms-and-condition";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick
            transition={Slide}
          />
          <Switch>
          
            <Route exact path="/verify/email/:id" component={VerifyEmail} />
            <Route exact path="/admin/login" component={Login} />
            <Route
              exact
              path="/admin/forgot/password"
              component={ForgotPassword}
            />
            <Route
              exact
              path="/admin/reset/password"
              component={ResetPassword}
            />
            <Route
              exact
              path="/admin/appointment/doc/:doc_file"
              component={DocFile}
            />
            <RouteWrapper exact path="/" component={Dashboard} layout={Admin} />
            <RouteWrapper
              exact
              path="/admin/dashboard"
              component={Dashboard}
              layout={Admin}
            />
            <RouteWrapper
              exact
              path="/admin/managers"
              component={ManageManager}
              layout={Admin}
            />
            <RouteWrapper
              exact
              path="/admin/manager-details/:id"
              component={ManagerDetails}
              layout={Admin}
            />
            <RouteWrapper
              exact
              path="/admin/captains"
              component={ManageCaptain}
              layout={Admin}
            />
            <RouteWrapper
              exact
              path="/admin/captain-details/:id"
              component={CaptainDetails}
              layout={Admin}
            />
              <RouteWrapper
              exact
              path="/admin/subscriptions/add"
              component={AddSubscription}
              layout={Admin}
            />
          
            <RouteWrapper
              exact
              path="/admin/subscriptions/manage"
              component={ManageSubscriptions}
              layout={Admin}
            />

            <RouteWrapper
            exact
            path="/admin/blog/add"
            component={AddBlog}
            layout={Admin}
            />
            
            <RouteWrapper
            path="/admin/blog/manage"
            component={ManageBlog}
            layout={Admin}
            />
            
            <RouteWrapper
              exact
              path="/admin/bookings"
              component={Bookings}
              layout={Admin}
            />
          
            <RouteWrapper
              exact
              path="/admin/faq/add"
              component={AddFAQ}
              layout={Admin}
            />
            <RouteWrapper
              exact
              path="/admin/faq/manage"
              component={ManageFAQ}
              layout={Admin}
            />
             <RouteWrapper
              exact
              path="/admin/about"
              component={UpdateAbout}
              layout={Admin}
            />
            <RouteWrapper
              exact
              path="/admin/about"
              component={About}
              layout={Admin}
            />
             <RouteWrapper
               exact path="/admin/privacy-policy" 
               component={Policy} layout={Admin}/>
             <RouteWrapper
              exact
              path="/admin/terms-and-condition"
              component={Terms}
              layout={Admin}
            />
           
            <RouteWrapper
              exact
              path="/admin/profile"
              component={Profile}
              layout={Admin}
            />
           
           
            <RouteWrapper
              exact
              path="/admin/settings"
              component={Settings}
              layout={Admin}
            />
            <RouteWrapper
              exact
              path="/admin/categories"
              component={ManageCategory}
              layout={Admin}
            />
          
            {/* <RouteWrapper
              exact
              path="/admin/live-chat"
              component={LiveChat}
              layout={Admin}
            /> */}
            
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
