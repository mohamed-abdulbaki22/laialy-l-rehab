import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import AdminNav from "../AdminNav";
import RegDonorsGrid from "./RegDonorsGrid";


const RegDonorsPage = () => {
  const {
    data: Donor,
    isPending,
    error,
  } = useFetch("http://localhost:4000/DonorPosts");

  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="RegDonorsPage">
      <AdminNav />
      <div className="content">
        <div className="postHeadlines">
          <h2>Registered Donors</h2>
        </div>
      </div>

      {/* <Posts items={items} handleButtonClick={handleButtonClick} />    */}
      {error && <div>{error}</div>}
      {isPending && (
        <div className="loader">
          <l-waveform
            size="35"
            stroke="3.5"
            speed="1"
            color="black"
          ></l-waveform>
        </div>
      )}
      {Donor && (
        <RegDonorsGrid
          crads={Donor}
        />

        // <Posts
        //   title="All Blogs!!"
        //   blogs={blogs} handleDelete={handleDelete}
        //   handleButtonClick={handleButtonClick}
        // />
      )}
    </div>
  );
};

export default RegDonorsPage;
