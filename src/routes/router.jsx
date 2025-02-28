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
import JobDescIndex from '../pages/job_desc_page/JobDescIndex';

const RoutesConfig = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/signin" />}/>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            {/* Dashboard */}
            <Route path="/dashboard/*" element={<LayOut />}>
                <Route index element={<DashBoard />} />
                <Route path="job_describtion" element={<JobDescIndex />} />
                <Route path="interview" element={<h2>Interview Page</h2>} />
                <Route path="candidate" element={<h2>Candidate Page</h2>} />
                <Route path="crm" element={<h2>CRM Page</h2>} />
                <Route path="operations" element={<h2>Operations Page</h2>} />
                <Route path="vendor" element={<h2>Vendor Page</h2>} />
                <Route path="settings" element={<h2>Settings Page</h2>} />
                <Route path="profile" element={<h2>Profile Page</h2>} />
           </Route>

        </Routes>
      </Router>
    </>
  )
}

export default RoutesConfig