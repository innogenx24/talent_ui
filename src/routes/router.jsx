import React from "react";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "../pages/auth_page/SignIn";
import DashBoard from "../pages/dashboard_page/DashBoard";
import SignUp from "../pages/auth_page/SignUp";
import LayOut from "../layouts/LayOut.jsx"; // ✅ Ensure correct file extension
import JobDescIndex from "../pages/job-descriptions/JobDescIndex";
import InterviewTable from "../pages/interview/InterviewTable";
import CandidateTable from "../pages/candidate/CandidateTable";
import SettingsTable from "../pages/settings/SettingsTable";
import VendorTable from "../pages/vendor/VendorTable";
import CRMTable from "../pages/crm/CRMTable";
import OperationsTable from "../pages/operations/OperationsTable";
import DepartmentTable from "../pages/settings/department/DepartmentTable.jsx";
import ExperienceRangeTable from "../pages/settings/experiance/ExperienceRangeTable.jsx";
import RolesTable from "../pages/settings/roles/RolesTable.jsx";
import UsersTable from "../pages/settings/users/UsersTable.jsx";
import AccountTable from "../pages/operations/accounts/AccountTable.jsx";
import OffBoardedTable from "../pages/candidate/OffBoardedTable";
import UpcomingOffBoardingsTable from "../pages/candidate/UpcomingOffBoardingsTable";
import OnBoardingTable from "../pages/candidate/OnBoardingTable";
import BenchTable from "../pages/candidate/BenchTable";
import ResumeBankTable from "../pages/candidate/ResumeBankTable";
import ProfilePage from "../pages/user-profile/ProfilePage";
import ContactTable from "../pages/crm/ContactTable";
import OrdersTable from "../pages/crm/OrdersTable";
import QuotationTable from "../pages/crm/QuotationTable";
import AddInterview from "../pages/interview/AddInterview";
import AddVendorForm from "../pages/vendor/AddVendorForm.jsx";
import EditVendorForm from "../pages/vendor/EditVendorForm.jsx";
import AddUserForm from "../pages/settings/users/AddUserForm.jsx";
import EditUserForm from "../pages/settings/users/EditUserForm.jsx";
import AddRoleForm from "../pages/settings/roles/AddRoleForm.jsx";
import EditRoleForm from "../pages/settings/roles/EditRoleForm.jsx";
import AddExperienceForm from "../pages/settings/experiance/AddExperienceForm.jsx";
import EditExperienceForm from "../pages/settings/experiance/EditExperienceForm.jsx";
import AddDepartmentForm from "../pages/settings/department/AddDepartmentForm.jsx";
import EditDepartmentForm from "../pages/settings/department/EditDepartmentForm.jsx";
import AddBranchForm from "../pages/settings/branch/AddBranchForm.jsx";
import EditBranchForm from "../pages/settings/branch/EditBranchForm .jsx";
import BranchesTable from "../pages/settings/branch/BranchesTable.jsx";
import EditProfile from "../pages/user-profile/EditProfile.jsx";
import AddAccountForm from "../pages/operations/accounts/AddAccountFrom.jsx";
import EditAccountForm from "../pages/operations/accounts/EditAccountForm.jsx";
import AddInvoiceForm from "../pages/operations/invoice/AddInvoiceForm.jsx";
import InvoiceTable from "../pages/operations/invoice/InvoiceTable.jsx";
import EditInvoiceForm from "../pages/operations/invoice/EditInvoiceForm.jsx";

const ProtectedRoute = ({ element }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? element : <Navigate to="/signin" replace />;
};


const RoutesConfig = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Dashboard */}
          <Route path="/dashboard/*" element={<ProtectedRoute element={<LayOut />} />}>
          <Route index element={<DashBoard />} />

            <Route path="job_description" element={<JobDescIndex />} />
            <Route path="interview" element={<InterviewTable />} />
            <Route path="interview/add" element={<AddInterview />} />

            <Route path="candidate" element={<CandidateTable />} />
            <Route path="crm" element={<CRMTable />} />
            <Route path="crm/quotations" element={<QuotationTable />} />
            <Route path="crm/orders" element={<OrdersTable />} />
            <Route path="crm/contacts" element={<ContactTable />} />

            <Route path="operations" element={<AccountTable />} />
            <Route path="operations/add" element={<AddAccountForm />} />
            <Route path="operations/edit/:id" element={<EditAccountForm />} />

            <Route path="operations/invoices" element={<InvoiceTable />} />
            <Route path="operations/invoices/add" element={<AddInvoiceForm />} />
            <Route path="operations/invoices/edit/:id" element={<EditInvoiceForm />} />

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
            <Route path="vendor/add" element={<AddVendorForm />} />
            <Route path="vendor/edit/:id" element={<EditVendorForm />} />

            {/* Setting Sections */}

            <Route path="settings" element={<UsersTable />} />
            <Route path="settings/add" element={<AddUserForm />} />
            <Route path="settings/edit/:id" element={<EditUserForm />} />
            <Route path="settings/roles" element={<RolesTable />} />
            <Route path="settings/roles/add" element={<AddRoleForm />} />
            <Route path="settings/roles/edit/:id" element={<EditRoleForm />} />

            <Route
              path="settings/experience-range"
              element={<ExperienceRangeTable />}
            />
            <Route
              path="settings/experience-range/add"
              element={<AddExperienceForm />}
            />
            <Route
              path="settings/experience-range/edit/:id"
              element={<EditExperienceForm />}
            />
            <Route path="settings/department" element={<DepartmentTable />} />
            <Route path="settings/department/add" element={<AddDepartmentForm />} />
            <Route path="settings/department/edit/:id" element={<EditDepartmentForm />} />

            <Route path="settings/branch" element={<BranchesTable />} />
            <Route path="settings/branch/add" element={<AddBranchForm />} />
            <Route path="settings/branch/edit/:id" element={<EditBranchForm />} />

            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/edit-profile/:id" element={<EditProfile />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesConfig;
