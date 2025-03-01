import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "../pages/auth_page/SignIn";
import DashBoard from "../pages/dashboard_page/DashBoard";
import SignUp from "../pages/auth_page/SignUp";
import LayOut from "../layouts/LayOut";
import JobDescIndex from "../pages/job-descriptions/JobDescIndex";
import InterviewTable from "../pages/interview/InterviewTable";
import CandidateTable from "../pages/candidate/CandidateTable";
import SettingsTable from "../pages/settings/SettingsTable";
import VendorTable from "../pages/vendor/VendorTable";
import CRMTable from "../pages/crm/CRMTable";
import OperationsTable from "../pages/operations/OperationsTable";
import BranchesTable from "../pages/settings/BranchesTable";
import DepartmentTable from "../pages/settings/DepartmentTable";
import ExperienceRangeTable from "../pages/settings/ExperienceRangeTable";
import RolesTable from "../pages/settings/RolesTable";
import UsersTable from "../pages/settings/UsersTable";
import AccountTable from "../pages/operations/AccountTable";
import InvoiceTable from "../pages/operations/InvoiceTable";
import OffBoardedTable from "../pages/candidate/OffBoardedTable";
import UpcomingOffBoardingsTable from "../pages/candidate/UpcomingOffBoardingsTable";
import OnBoardingTable from "../pages/candidate/OnBoardingTable";
import BenchTable from "../pages/candidate/BenchTable";
import ResumeBankTable from "../pages/candidate/ResumeBankTable";
import ProfilePage from "../pages/user-profile/ProfilePage";

const RoutesConfig = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Dashboard */}
          <Route path="/dashboard/*" element={<LayOut />}>
            <Route index element={<DashBoard />} />

            <Route path="job_description" element={<JobDescIndex />} />
            <Route path="interview" element={<InterviewTable />} />
            <Route path="candidate" element={<CandidateTable />} />
            <Route path="crm" element={<CRMTable />} />

            <Route path="operations" element={<AccountTable />} />
            <Route path="operations/invoices" element={<InvoiceTable />} />
            <Route
              path="candidate/resume-bank"
              element={<ResumeBankTable />}
            />
            <Route path="candidate/bench" element={<BenchTable />} />
            <Route
              path="candidate/on-boarding"
              element={<OnBoardingTable />}
            />
            <Route
              path="candidate/upcoming-off-boardings"
              element={<UpcomingOffBoardingsTable />}
            />
            <Route
              path="candidate/off-boarded"
              element={<OffBoardedTable />}
            />

            <Route path="vendor" element={<VendorTable />} />

            {/* Setting Sections */}

            <Route path="settings" element={<UsersTable />} />
            <Route path="settings/roles" element={<RolesTable />} />
            <Route
              path="settings/experience-range"
              element={<ExperienceRangeTable />}
            />
            <Route path="settings/department" element={<DepartmentTable />} />
            <Route path="settings/branches" element={<BranchesTable />} />

            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesConfig;
