import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import Clothes from "./Clothes";
import Posts from "../notUsed/Posts";
import SideBar from "../notUsed/SideBar";
import CardGrid from "./ClothesGrid";
import Select from "react-select";
import Nav from "../Nav";
import ClothesGrid from "./ClothesGrid";
import "ldrs/waveform";

function ClothesDonationPage() {
  const {
    data: Clothes,
    isPending,
    error,
  } = useFetch("http://localhost:4000/ClothesPosts");
  const [view, setView] = useState(null);
  const [season, setSeason] = useState("");
  const [age, setAge] = useState("");
  const [gender,setGender] = useState("");

  const handleDelete = (id) => {
    const newitems = items.filter((item) => item.id !== id);
    setitems(newitems);
  };
  return (
    <div className="ClothesDonationPage">
      <Nav />

      <div className="content">
        <div className="postHeadlines">
          <h1>Clothes Donation Requests</h1>
          <div className="filter-logic">
              <label>filter by Season:</label>
              <select
                value={season}
                onChange={(e) => {
                  setSeason(e.target.value);
                  console.log("the chosen season", season);
                }}
              >
                <option value="">All</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="autumn">Autumn</option>
                <option value="spring">Spring</option>
              </select>
              <label>filter by age:</label>
              <select
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  console.log("the age group is", e.target.value);
                }}
              >
                <option value="">All</option>
                <option value={"1-3"}>1 - 3</option>
                <option value={"3-5"}>3 - 5</option>
                <option value={"5-7"}>5 - 7</option>
                <option value={"7-10"}>7 - 10</option>
                <option value={"10-15"}>10 - 15</option>
                <option value={"15-18"}>15 - 18</option>
                <option value={"18-20"}>18 - 20</option>
                <option value={"20-30"}>20 - 30</option>
                <option value={"30-40"}>30 - 40</option>
                <option value={"40-50"}>40 - 50</option>
                <option value={"50-60"}>50 - 60</option>
                <option value={"60+"}>60+</option>
              </select>
              <label>filter by Gender:</label>
              <select
                value={gender}
                onChange={(e) => {setGender(e.target.value)
                  console.log('the chosen season', season);
                }}
              >
                <option value="">Both</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
           
          </div>
        </div>
      </div>
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
{Clothes && (
  <ClothesGrid
    crads={Clothes.filter(
      (item) =>
        item.season.includes(season) &&
        (age === "" || item.age === age) &&
        (gender === "" || gender === item.gender)
    )}
  />


        // <Posts
        //   title="All items!!"
        //   items={items} handleDelete={handleDelete}
        // />
        // <ClothesList title='Clothes Donation' items={items} handleDelete={()=>{}}/>
      )}
      {/* <itemList title="Mario's" items = {items.filter((item) => item.author === 'luigi')}/> */}
      {/* <button onClick={() => setName('luigi')}>click me</button> */}
      {/* <p>{name}</p> */}
    </div>
  );
}

export default ClothesDonationPage;
