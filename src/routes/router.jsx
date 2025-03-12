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
import OperationsTable from "../pages/operations/OperationsTable";
import DepartmentTable from "../pages/settings/department/DepartmentTable.jsx";
import ExperienceRangeTable from "../pages/settings/experiance/ExperienceRangeTable.jsx";
import UsersTable from "../pages/settings/users/UsersTable.jsx";
import AccountTable from "../pages/operations/accounts/AccountTable.jsx";
import OffBoardedTable from "../pages/candidate/OffBoardedTable";
import UpcomingOffBoardingsTable from "../pages/candidate/UpcomingOffBoardingsTable";
import OnBoardingTable from "../pages/candidate/OnBoardingTable";
import BenchTable from "../pages/candidate/BenchTable";
import ResumeBankTable from "../pages/candidate/ResumeBankTable";
import ProfilePage from "../pages/user-profile/ProfilePage";
import OrdersTable from "../pages/crm/OrdersTable";
import QuotationTable from "../pages/crm/QuotationTable";
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
import ClientForm from "../pages/crm/client/ClientForm.jsx";
import ContactForms from "../pages/crm/contact/ContactForms.jsx";
import CRMTable from "../pages/crm/client/CRMTable.jsx";
import { QuotationsForm } from "../pages/crm/Quotations/QuotationsForm.jsx";
import { OrdersForms } from "../pages/crm/Orders/OrdersForms.jsx";
import ClientFormEdit from "../pages/crm/client/ClientFormEdit.jsx";
import ContactTable from "../pages/crm/contact/ContactTable.jsx";
import { QuotationsFormEdit } from "../pages/crm/Quotations/QuotationsFormEdit.jsx";
import OrdersFormsEdit from "../pages/crm/Orders/OrdersFormsEdit.jsx";
import ContactFormsEdit from "../pages/crm/contact/ContactFormsEdit.jsx";
import RolesTable from "../pages/settings/roles/RolesTable.jsx";
import { CandidateListAdd } from "../pages/candidate/cadidatelist/CandidateListAdd.jsx";
import { CandidateListEdit } from "../pages/candidate/cadidatelist/CandidateListEdit.jsx";
import { ResumeBankAdd } from "../pages/candidate/resumebank/ResumeBankAdd.jsx";
import { ResumeBankEdit } from "../pages/candidate/resumebank/ResumeBankEdit.jsx";
import { BenchAdd } from "../pages/candidate/bench/BenchAdd.jsx";
import { BenchEdit } from "../pages/candidate/bench/BenchEdit.jsx";
import { OnBoardingAdd } from "../pages/candidate/onboarding/OnBoardingAdd.jsx";
import { OnBoardingEdit } from "../pages/candidate/onboarding/OnBoardingEdit.jsx";
import { UpComingOffBoardingsAdd } from "../pages/candidate/UpComingOffBoardings/UpComingOffBoardingsAdd.jsx";
import { UpComingOffBoardingsEdit } from "../pages/candidate/UpComingOffBoardings/UpComingOffBoardingsEdit.jsx";
import { OffBoardedEdit } from "../pages/candidate/OffBoarded/OffBoardedEdit.jsx";
import { AddInterview } from "../pages/interview/AddInterview.jsx";
import { InterviewEdit } from "../pages/interview/InterviewEdit.jsx";
import { WorkLayoutTable } from "../pages/settings/WorkLayout/WorkLayoutTable.jsx";
import { CandidateStatusTable } from "../pages/settings/CandidateStatus/CandidateStatusTable.jsx";
import { BenchStatusTable } from "../pages/settings/BenchStatus/BenchStatusTable.jsx";
import { JobTitleTable } from "../pages/settings/JobTitle/JobTitleTable.jsx";
import { SkillsTable } from "../pages/settings/Skills/SkillsTable.jsx";
import { IndustryTable } from "../pages/settings/Industry/IndustryTable.jsx";
import { InterviewNameTable } from "../pages/settings/InterviewName/InterviewNameTable.jsx";
import { InterviewStatusTable } from "../pages/settings/InterviewStatus/InterviewStatusTable.jsx";
import { LanguageproficiencyTable } from "../pages/settings/Languageproficiency/LanguageproficiencyTable.jsx";
import { SourceTable } from "../pages/settings/SourceSe/SourceTable.jsx";
import { OverallStatusTable } from "../pages/settings/OverallStatus/OverallStatusTable.jsx";
import { AvailabilityTable } from "../pages/settings/Availability/AvailabilityTable.jsx";
import { OffBoardingReasonsTable } from "../pages/settings/OffBoardingReasons/OffBoardingReasonsTable.jsx";
import { CurrencyTable } from "../pages/settings/Currency/CurrencyTable.jsx";
import { RateTypeTable } from "../pages/settings/RateType/RateTypeTable.jsx";
import { WorkLayoutAdd } from "../pages/settings/WorkLayout/WorkLayoutAdd.jsx";
import { WorkLayoutEdit } from "../pages/settings/WorkLayout/WorkLayoutEdit.jsx";
import { CandidateStatusAdd } from "../pages/settings/CandidateStatus/CandidateStatusAdd.jsx";
import { CandidateStatusEdit } from "../pages/settings/CandidateStatus/CandidateStatusEdit.jsx";
import { BenchStatusAdd } from "../pages/settings/BenchStatus/BenchStatusAdd.jsx";
import { BenchStatusEdit } from "../pages/settings/BenchStatus/BenchStatusEdit.jsx";
import { JobTitleAdd } from "../pages/settings/JobTitle/JobTitleAdd.jsx";
import { JobTitleEdit } from "../pages/settings/JobTitle/JobTitleEdit.jsx";
import { SkillsAdd } from "../pages/settings/Skills/SkillsAdd.jsx";
import { SkillsEdit } from "../pages/settings/Skills/SkillsEdit.jsx";
import { IndustryAdd } from "../pages/settings/Industry/IndustryAdd.jsx";
import { IndustryEdit } from "../pages/settings/Industry/IndustryEdit.jsx";
import { InterviewNameAdd } from "../pages/settings/InterviewName/InterviewNameAdd.jsx";
import { InterviewNameEdit } from "../pages/settings/InterviewName/InterviewNameEdit.jsx";
import { InterviewStatusAdd } from "../pages/settings/InterviewStatus/InterviewStatusAdd.jsx";
import { InterviewStatusEdit } from "../pages/settings/InterviewStatus/InterviewStatusEdit.jsx";
import { SourceAdd } from "../pages/settings/SourceSe/SourceAdd.jsx";
import { SourceEdit } from "../pages/settings/SourceSe/SourceEdit.jsx";
import { OverallStatusAdd } from "../pages/settings/OverallStatus/OverallStatusAdd.jsx";
import { OverallStatusEdit } from "../pages/settings/OverallStatus/OverallStatusEdit.jsx";
import { AvailabilityAdd } from "../pages/settings/Availability/AvailabilityAdd.jsx";
import { AvailabilityEdit } from "../pages/settings/Availability/AvailabilityEdit.jsx";
import { OffBoardingReasonsAdd } from "../pages/settings/OffBoardingReasons/OffBoardingReasonsAdd.jsx";
import { OffBoardingReasonsEdit } from "../pages/settings/OffBoardingReasons/OffBoardingReasonsEdit.jsx";
import { CurrencyAdd } from "../pages/settings/Currency/CurrencyAdd.jsx";
import { CurrencyEdit } from "../pages/settings/Currency/CurrencyEdit.jsx";
import { RateTypeAdd } from "../pages/settings/RateType/RateTypeAdd.jsx";
import { RateTypeEdit } from "../pages/settings/RateType/RateTypeEdit.jsx";
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
            <Route path="job_description/add" element={<JobDescIndex />} />
            <Route path="job_description/edit/:id" element={<JobDescIndex />} />

            <Route path="interview" element={<InterviewTable />} />
            <Route path="interview/add" element={<AddInterview/>}/>
            <Route path="interview/edit/:id" element={<InterviewEdit/>}/>

            <Route path="candidate" element={<CandidateTable />} />
            <Route path="candidate/add" element={<CandidateListAdd />} />
            <Route path="candidate/edit/:id" element={<CandidateListEdit/>} />
            <Route path="candidate/resume-bank/add" element={<ResumeBankAdd/>} />
            <Route path="candidate/resume-bank/edit/:id" element={<ResumeBankEdit/>} />
            <Route path="crm" element={<CRMTable />} />
            <Route path="crm/add" element={<ClientForm />} />
            <Route path="crm/edit/:id" element={<ClientFormEdit/>} />
            <Route path="crm/quotations" element={<QuotationTable />} />
            <Route path="crm/quotations/add" element={<QuotationsForm/>}/>
            <Route path="crm/quotations/edit/:id" element={<QuotationsFormEdit/>}/>
            <Route path="crm/orders" element={<OrdersTable />} />
            <Route path="crm/orders/add" element={<OrdersForms />} />
            <Route path="crm/orders/edit/:id" element={<OrdersFormsEdit />} />
            <Route path="crm/contacts" element={<ContactTable />}/>
            <Route path="crm/contacts/add" element={<ContactForms/>} />
            <Route path="crm/contacts/edit/:id" element={<ContactFormsEdit/>} />

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
            <Route path="candidate/bench/add" element={<BenchAdd/>} />
            <Route path="candidate/bench/Edit/:id" element={<BenchEdit/>} />
            <Route path="candidate/on-boarding" element={<OnBoardingTable/>}/>
            <Route path="candidate/on-boarding/add" element={<OnBoardingAdd/>}/>
            <Route path="candidate/on-boarding/edit/:id" element={<OnBoardingEdit/>}/>
            <Route path="candidate/upcoming-off-boardings"element={<UpcomingOffBoardingsTable />}/>
            <Route path="candidate/upcoming-off-boardings/add"element={<UpComingOffBoardingsAdd/>}/>
            <Route path="candidate/upcoming-off-boardings/edit/:id"element={<UpComingOffBoardingsEdit/>}/>
            <Route path="candidate/off-boarded" element={<OffBoardedTable />}/>
            <Route path="candidate/off-boarded/edit/:id" element={<OffBoardedEdit/>}/>

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
            <Route path="settings/WorkLayout" element={<WorkLayoutTable />} />
            <Route path="settings/WorkLayout/add" element={<WorkLayoutAdd/>} />
            <Route path="settings/WorkLayout/edit/:id" element={<WorkLayoutEdit/>} />
            <Route path="settings/CandidateStatus" element={<CandidateStatusTable/>} />
            <Route path="settings/CandidateStatus/add" element={<CandidateStatusAdd/>} />
            <Route path="settings/CandidateStatus/edit/:id" element={<CandidateStatusEdit/>} />
            <Route path="settings/BenchStatus" element={<BenchStatusTable/>} />
            <Route path="settings/BenchStatus/add" element={<BenchStatusAdd/>} />
            <Route path="settings/BenchStatus/edit/:id" element={<BenchStatusEdit/>} />
            <Route path="settings/JobTitle" element={<JobTitleTable/>} />
            <Route path="settings/JobTitle/add" element={<JobTitleAdd/>} />
            <Route path="settings/JobTitle/edit/:id" element={<JobTitleEdit/>} />
            <Route path="settings/Skills" element={<SkillsTable/>} />
            <Route path="settings/Skills/add" element={<SkillsAdd/>} />
            <Route path="settings/Skills/edit/:id" element={<SkillsEdit/>} />
            <Route path="settings/Industry" element={<IndustryTable/>}/>
            <Route path="settings/Industry/add" element={<IndustryAdd/>}/>
            <Route path="settings/Industry/edit/:id" element={<IndustryEdit/>}/>
            <Route path="settings/InterviewName" element={<InterviewNameTable/>}/>
            <Route path="settings/InterviewName/add" element={<InterviewNameAdd/>}/>
            <Route path="settings/InterviewName/edit/:id" element={<InterviewNameEdit/>}/>
            <Route path="settings/InterviewStatus" element={<InterviewStatusTable/>}/>
            <Route path="settings/InterviewStatus/add" element={<InterviewStatusAdd/>}/>
            <Route path="settings/InterviewStatus/edit/:id" element={<InterviewStatusEdit/>}/>
            <Route path="settings/Languageproficiency" element={<LanguageproficiencyTable/>}/>
            <Route path="settings/SourceSe" element={<SourceTable/>}/>
            <Route path="settings/SourceSe/add" element={<SourceAdd/>}/>
            <Route path="settings/SourceSe/edit/:id" element={<SourceEdit/>}/>
            <Route path="settings/OverallStatus" element={<OverallStatusTable/>}/>
            <Route path="settings/OverallStatus/add" element={<OverallStatusAdd/>}/>
            <Route path="settings/OverallStatus/edit/:id" element={<OverallStatusEdit/>}/>
            <Route path="settings/Availability" element={<AvailabilityTable/>}/>
            <Route path="settings/Availability/add" element={<AvailabilityAdd/>}/>
            <Route path="settings/Availability/edit/:id" element={<AvailabilityEdit/>}/>
            <Route path="settings/OffBoardingReasons" element={<OffBoardingReasonsTable/>}/>
            <Route path="settings/OffBoardingReasons/add" element={<OffBoardingReasonsAdd/>}/>
            <Route path="settings/OffBoardingReasons/edit/:id" element={<OffBoardingReasonsEdit/>}/>
            <Route path="settings/Currency" element={<CurrencyTable/>}/>
            <Route path="settings/Currency/add" element={<CurrencyAdd/>}/>
            <Route path="settings/Currency/edit/:id" element={<CurrencyEdit/>}/>
            <Route path="settings/RateType" element={<RateTypeTable/>}/>
            <Route path="settings/RateType/add" element={<RateTypeAdd/>}/>
            <Route path="settings/RateType/edit/:id" element={<RateTypeEdit/>}/>

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
