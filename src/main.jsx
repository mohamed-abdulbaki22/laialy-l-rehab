import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import ClothesDonationPage from "./ClothesDonation/ClothesDonationPage.jsx";
import ToysDonationPage from "./ToysDonation/ToysDonationPage.jsx";
import SchoolDonationPage from "./SchoolDonation/SchoolDonationPage.jsx";
import FoodDonationPage from "./FoodDonation/FoodDonationPage.jsx";
import MedicalDonationPage from "./MedicalDonation/MedicalDonationPage.jsx";
import BloodDonationPage from "./BloodDonation/BloodDonationPage.jsx";
import CurrentDetails from "./CurrentDetails.jsx";
import Nav from "./Nav.jsx";
import ClothesDetails from "./ClothesDonation/ClothesDetails.jsx";
import SchoolDetails from "./SchoolDonation/SchoolDetails.jsx";
import ToysDetails from "./ToysDonation/ToysDetails.jsx";
import FoodDetails from "./FoodDonation/FoodDetails.jsx";
import MedicalDetails from "./MedicalDonation/MedicalDetails.jsx";
import BloodDetails from "./BloodDonation/BloodDetails.jsx";

import RegistrationForm from './Organization/RegistrationForm.jsx'
import OrganizationRegistraion from './Organization/OrganizationRegistraion.jsx'
import OrganizationLogin from './Organization/OrganizationLogin.jsx'
import OrgazizationHomePage from './Organization/OrgazizationHomePage.jsx'
import CreateBloodDonation from './Organization/CreateBloodDonation.jsx'
import CreateFoodDonation from './Organization/CreateFoodDonation.jsx'
import CreateClothesDonation from './Organization/CreateClothesDonation.jsx'
import CreateToysDonation from './Organization/CreateToysDonation.jsx'
import CreateSchoolDonation from './Organization/CreateSchoolDonation.jsx'
import CreateMedicalDonation from './Organization/CreateMedicalDonation.jsx'
import DonationDropOff from './Organization/DonationDropOff.jsx'
import UpdateOrDeletePage from './Organization/UpdateOrDeletePage.jsx'

import TeachingPage from './Teaching/TeachingPage.jsx'
import DoctorPage from './MedicalCases/DoctorPage.jsx'
import OrganizationPage from './Organizations/OrganizationPage.jsx'
import DonorPage from './DonorProfile/DonorPage.jsx'
import EditDonorPage from './DonorProfile/EditDonorPage.jsx'
import TeachingDetails from './Teaching/TeachingDetails.jsx'
import DoctorDetails from './MedicalCases/DoctorDetails.jsx'
import OrganizationDetails from './Organizations/OrganizationDetails.jsx'

import DonationDetails from "./detailsOfDonation.jsx";
import Doctor from './doctor.jsx'
import Teacher from "./teacher.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App/>
      </div>
    ),
  },
  {
    path: "OrganizationRegistraion",
    element: <div><OrganizationRegistraion /></div>,
  },
  {
    path: "OrganizationLogin",
    element: <div><OrganizationLogin /></div>,
  },
  {
    path: "OrgazizationHomePage",
    element: <div><OrgazizationHomePage /></div>,
  },
  {
    path: "CreateBloodDonation",
    element: <div><CreateBloodDonation /></div>,
  },
  {
    path: "CreateFoodDonation",
    element: <div><CreateFoodDonation /></div>,
  },
  {
    path: "CreateClothesDonation",
    element: <div><CreateClothesDonation /></div>,
  },
  {
    path: "CreateToysDonation",
    element: <div><CreateToysDonation /></div>,
  },
  {
    path: "CreateSchoolDonation",
    element: <div><CreateSchoolDonation /></div>,
  },
  {
    path: "CreateMedicalDonation",
    element: <div><CreateMedicalDonation /></div>,
  },
  {
    path: "DonationDropOff",
    element: <div><DonationDropOff /></div>,
  },
  {
    path: "RegistrationForm",
    element: <div><RegistrationForm /></div>,
  },
  {
    path: "OrgazizationHomePage/:id",
    element: <div><UpdateOrDeletePage /></div>,
  },
  {
    path: "ClothesDonationPage",
    element: (
      <div>
        <ClothesDonationPage />
      </div>
    ),
  },
  {
    path: "ToysDonationPage",
    element: (
      <div>
        <ToysDonationPage />
      </div>
    ),
  },
  {
    path: "SchoolDonationPage",
    element: (
      <div>
        <SchoolDonationPage />
      </div>
    ),
  },
  {
    path: "FoodDonationPage",
    element: (
      <div>
        <FoodDonationPage />
      </div>
    ),
  },
  {
    path: "MedicalDonationPage",
    element: (
      <div>
        <MedicalDonationPage />
      </div>
    ),
  },
  {
    path: "BloodDonationPage",
    element: (
      <div>
        <BloodDonationPage />
      </div>
    ),
  },
  {
    path: "ClothesDonationPage/:id",
    element: (
      <div>
        <ClothesDetails />
      </div>
    ),
  },
  {
    path: "SchoolDonationPage/:id",
    element: (
      <div>
        <SchoolDetails />
      </div>
    ),
  },
  {
    path: "ToysDonationPage/:id",
    element: (
      <div>
        <ToysDetails />
      </div>
    ),
  },
  {
    path: "FoodDonationPage/:id",
    element: (
      <div>
        <FoodDetails />
      </div>
    ),
  },
  {
    path: "MedicalDonationPage/:id",
    element: (
      <div>
        <MedicalDetails />
      </div>
    ),
  },
  {
    path: "BloodDonationPage/:id",
    element: (
      <div>
        <BloodDetails />
      </div>
    ),
  },
  {
    path: "DonationDetails",
    element: (
      <div>
        {" "}
        <DonationDetails />
      </div>
    ),
  },
  {
    path: "CurrentDetails/:id",
    element: (
      <div>
        <CurrentDetails />
      </div>
    ),
  },
  {
    path: "Notification",
    element: <div></div>,
  },
  {
    path: "doctor",
    element: <div><Doctor /></div>
  },
  {
    path: "teacher",
    element: <div><Teacher /></div>
  },
  {
    path: "TeachingPage",
    element: <div> <TeachingPage /></div>
  },
  {
    path: "TeachingPage/:id",
    element: <div><TeachingDetails /></div>,
  },
  {
    path: "DoctorPage",
    element: <div> <DoctorPage /></div>
  },
  {
    path: "DoctorPage/:id",
    element: <div><DoctorDetails /></div>,
  },
  {
    path: "OrganizationPage",
    element: <div> <OrganizationPage /></div>
  },
  {
    path: "OrganizationPage/:id",
    element: <div><OrganizationDetails /></div>,
  },
  {
    path: "DonorPage",
    element: <div> <DonorPage /></div>
  },
  // {
  //   path: "DonorPage/:id",
  //   element: <div><DonorPage /></div>,
  // },
  {
    path: "EditDonorPage",
    element: <div> <EditDonorPage /></div>
  }, {
    path: "OrganizationProfile",
    element: <div> <OrganizationProfile /></div>
  },
  {
    path: "EditOrganizationProfile",
    element: <div> <EditOrganizationProfile /></div>
  },
  {
    path: "FulfilledPage/:id",
    element: <div> <FulfilledDetails /></div>
  },
  {
    path: "FulfilledPage",
    element: <div> <FulfilledPage /></div>
  },
  {
    path: "DonorFDetails",
    element: <div> <DonorFDetails /></div>
  },
  {
    path: "DonorListPage",
    element: <div><DonorListPage /></div>,
  },
  {
    path: "DonorListPage/:id",
    element: <div><DonorListDetails /></div>,
  },
  {
    path: "OrganizationListPage",
    element: <div><OrganizationListPage /></div>,
  },
  {
    path: "OrganizationListPage/:id",
    element: <div><OrganizationListDetails /></div>,
  },
  {
    path: "PasswordManagement",
    element: <div><PasswordManagement /></div>,
  },
  {
    path: "RegOrganizationPage",
    element: <div><RegOrganizationPage /></div>,
  },
  {
    path: "RegOrganizationPage/:id",
    element: <div><RegOrganizationDetails /></div>,
  },
  {
    path: "RegDonorsPage",
    element: <div><RegDonorsPage /></div>,
  },
  {
    path: "RegDonorsPage/:id",
    element: <div><RegDonorsDetails /></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
