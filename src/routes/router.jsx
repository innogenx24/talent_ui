import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import SignIn from '../pages/auth_page/SignIn';
import DashBoard from '../pages/dashboard_page/DashBoard';
import SignUp from '../pages/auth_page/SignUp';
import LayOut from '../layouts/LayOut';

const RoutesConfig = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/signin" />}/>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />

            <Route
            path="/dashboard/*"
            element={
                <LayOut/>
            }
          >

            <Route path="*" element={<DashBoard/>} />
</Route>

        </Routes>
      </Router>
    </>
  )
}

export default RoutesConfig