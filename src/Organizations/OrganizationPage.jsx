import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import Nav from "../Nav";
import OrganizationGrid from "./OrganizationGrid";

const OrganizationPage = () => {
  const {
    data: Organization,
    isPending,
    error,
  } = useFetch("http://localhost:4000/OrganizationPosts");

  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="OrganizationPage">
      <Nav />
      <div className="content">
        <div className="postHeadlines">
          <h2>Registered Organizations</h2>

          <div className="filter-logic">
            <label>Search by Organization Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>filter by area:</label>
            <select
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
                console.log("the chosen area", area);
              }}
            >
              <option value="">All</option>
              <option value="Al tagamo3">Al tagamo3</option>
              <option value="suez-canal">suez-canal</option>
              <option value="sidy gaber">sidy gaber</option>
              <option value="m3adi">m3adi</option>
              <option value="october">october</option>
            </select>
            <label>filter by type:</label>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                console.log("the type is", e.target.value);
              }}
            >
              <option value="">All</option>
              <option value={"hospital"}>hospital</option>
              <option value={"school"}>school</option>
            </select>
            <label>filter by governorate:</label>
            <select
              value={governorate}
              onChange={(e) => {
                setGovernorate(e.target.value);
                console.log("the chosen governorate", season);
              }}
            >
              <option value="">All</option>
              <option value="cairo">cairo</option>
              <option value="other">other governorates</option>
            </select>
          </div>
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
      {Organization && (
        <OrganizationGrid
          crads={Organization.filter(
            (item) =>
              (type === "" || item.type === type) &&
              (governorate === "" || item.governorate === governorate) &&
              (area === "" || area === item.area) &&
              (name === "" || item.author.includes(name))
          )}
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

export default OrganizationPage;
