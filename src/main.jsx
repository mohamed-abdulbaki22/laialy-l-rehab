import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DonationDetails from "./detailsOfDonation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
