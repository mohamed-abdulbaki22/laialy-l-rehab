import PasswordManagement from './PasswordManagement.jsx';
import AdminLogin from './AdminLogin.jsx';
import './index.css'
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom'
import DonorList from './DonorList.jsx';
import OrgList from './OrgList.jsx';
import DonorListInfo1 from './DonorListInfo1.jsx';
import DonorListInfo2 from './DonorListInfo2.jsx';
import DonorListInfo3 from './DonorListInfo3.jsx';
import DonorListInfo4 from './DonorListInfo4.jsx';
import DonorListInfo5 from './DonorListInfo5.jsx';
import DonorListInfo6 from './DonorListInfo6.jsx';
import OrganizationListInfo1 from './OrganizationListInfo1.jsx';
import OrganizationListInfo2 from './OrganizationListInfo2.jsx';
import OrganizationListInfo3 from './OrganizationListInfo3.jsx';
import OrganizationListInfo4 from './OrganizationListInfo4.jsx';
import OrganizationListInfo5 from './OrganizationListInfo5.jsx';
import OrganizationListInfo6 from './OrganizationListInfo6.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminHomePage from './AdminHomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "PasswordManagement",
    element: <div><PasswordManagement /></div>,
  },
  {
    path: "AdminHomePage",
    element: <div><AdminHomePage /></div>,
  },
  {
    path: "DonorList",
    element: <div><DonorList /></div>,
  },
  {
    path: "OrgList",
    element: <div><OrgList /></div>,
  },
  {
    path: "AdminLogin",
    element: <div><AdminLogin /></div>,
  },
  {
    path: "DonorListInfo1",
    element: <div><DonorListInfo1 /></div>,
  },
  {
    path: "DonorListInfo2",
    element: <div><DonorListInfo2 /></div>,
  },
  {
    path: "DonorListInfo3",
    element: <div><DonorListInfo3 /></div>,
  },
  {
    path: "DonorListInfo4",
    element: <div><DonorListInfo4 /></div>,
  },
  {
    path: "DonorListInfo5",
    element: <div><DonorListInfo5 /></div>,
  },
  {
    path: "DonorListInfo6",
    element: <div><DonorListInfo6 /></div>,
  },
  {
    path: "OrganizationListinfo1",
    element: <div><OrganizationListInfo1 /></div>,
  },
  {
    path: "OrganizationListinfo2",
    element: <div><OrganizationListInfo2 /></div>,
  },
  {
    path: "OrganizationListinfo3",
    element: <div><OrganizationListInfo3 /></div>,
  },
  {
    path: "OrganizationListinfo4",
    element: <div><OrganizationListInfo4 /></div>,
  },
  {
    path: "OrganizationListinfo5",
    element: <div><OrganizationListInfo5 /></div>,
  },
  {
    path: "OrganizationListinfo6",
    element: <div><OrganizationListInfo6 /></div>,
  },
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
  // <OrganizationLogin />
)
