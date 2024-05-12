import Toys from "./Toys";
import Posts from "../notUsed/Posts";
import SideBar from "../notUsed/SideBar";
import useFetch from "../useFetch";
import { useState, useEffect } from "react";

import CardGrid from "../ClothesDonation/ClothesGrid";

import Nav from "../Nav";
import ToysGrid from "./ToysGrid";

const Cards = [
  {
    id: "1",
    img: "https://th.bing.com/th/id/R.15d1757c4a61b52b9b37256e792b032f?rik=SbUfBfWqB%2b%2b6zg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-fsRz26kHgwI%2fUrDKnjiWdAI%2fAAAAAAAAFxM%2fm6GMC2VFF90%2fs1600%2fIMG_8907.JPG&ehk=jezQgM%2bp5zGTPhQE6yLApRNNuqaRIHSrF7BOGFYdAHQ%3d&risl=&pid=ImgRaw&r=0",
    title: "Card 1",
    description: "This is the first card description.",
  },
  {
    id: "2",
    img: "https://i.pinimg.com/474x/aa/d6/ee/aad6ee28d9bd9f14385553ff2f8bbaa3.jpg",
    title: "Card 2",
    description: "This is the second card description.",
  },
  {
    id: "3",
    img: "https://th.bing.com/th/id/OIP.uZ2TjMUPjDobSDCPMy3T3gHaHa?rs=1&pid=ImgDetMain",
    title: "Card 3",
    description: "ksmsknfkfnkdf",
  },
  {
    id: "4",
    img: "https://th.bing.com/th/id/R.15d1757c4a61b52b9b37256e792b032f?rik=SbUfBfWqB%2b%2b6zg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-fsRz26kHgwI%2fUrDKnjiWdAI%2fAAAAAAAAFxM%2fm6GMC2VFF90%2fs1600%2fIMG_8907.JPG&ehk=jezQgM%2bp5zGTPhQE6yLApRNNuqaRIHSrF7BOGFYdAHQ%3d&risl=&pid=ImgRaw&r=0",
    title: "Card 4",
    description: "This is the first card description.",
  },
  {
    id: "5",
    img: "https://i.pinimg.com/474x/aa/d6/ee/aad6ee28d9bd9f14385553ff2f8bbaa3.jpg",
    title: "Card 5",
    description: "This is the second card description.",
  },
  {
    id: "6",
    img: "https://th.bing.com/th/id/OIP.uZ2TjMUPjDobSDCPMy3T3gHaHa?rs=1&pid=ImgDetMain",
    title: "Card 6",
    description: "mfdefnkdnfk",
  },
];

const ToysDonationPage = () => {
  const {
    data: Toys,
    isPending,
    error,
  } = useFetch("http://localhost:4000/ToysPosts");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  // Function to handle button click
  const handleButtonClick = (itemId) => {
    alert(`Button clicked for item ${itemId}`);
  };

  return (
    <div className="ToysDonationPage">
      <Nav />
      <div className="content">
        <div className="postHeadlines">
          <h2>Toys Donation</h2>

          <div className="filter-logic">
            <label>filter by category:</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                console.log("the chosen category", category);
              }}
            >
              <option value="">All</option>
              <option value="board games">board games</option>
              <option value="stuffed toys">stuffed toys</option>
              <option value="dolls">dolls</option>
              <option value="sports">sports</option>
              <option value="cars">cars</option>
              <option value="outdoor">outdoor</option>
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
              <option value={"3-7"}>3 - 7</option>
              <option value={"7-12"}>7 - 12</option>
              <option value={"12-18"}>12 - 18</option>
              <option value={"18+"}>18+</option>
            </select>
            <label>filter by Gender:</label>
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
                console.log("the chosen season", season);
              }}
            >
              <option value="">Both</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
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
      {Toys && (
        <ToysGrid
          crads={Toys.filter(
            (item) =>
              item.category.includes(category) &&
              (age === "" || item.age === age) &&
              (gender === "" || gender === item.gender)
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

export default ToysDonationPage;
