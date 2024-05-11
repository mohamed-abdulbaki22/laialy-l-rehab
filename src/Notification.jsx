import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  const notify = () => {
    toast.success('🍕 Your Food donation to Organization 3 is finally there!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    toast.info("🚘 Your Driver is coming within 1:20 - 2:10PM", {
      position: "top-center",
      theme: "dark",
    });
    toast.info("Organization 1 posted a new donation request!", {
      position: "top-center",
      theme: "dark",
    });
    toast.warn("Your password will expire in 3 days!", {
      position: "top-center",
      theme: "dark",
    });
    toast.error('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });
    toast("Wow so easy!", {
      position: "top-center",
      theme: "dark",
    });
  };

  return (
    <div>
      <label onClick={notify} className="notification">Notification</label>
      <ToastContainer />
    </div>
  );
};

export default Notification;
