

import School from './School';
import Posts from '../notUsed/Posts';
import SideBar from '../notUsed/SideBar';
import useFetch from '../useFetch';
import { useState, useEffect } from "react";
import CardGrid from '../ClothesDonation/ClothesGrid';
import Nav from '../Nav';
import SchoolGrid from './SchoolGrid';

const Cards = [
  {
    "id": "1",
    "img": "https://th.bing.com/th/id/R.15d1757c4a61b52b9b37256e792b032f?rik=SbUfBfWqB%2b%2b6zg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-fsRz26kHgwI%2fUrDKnjiWdAI%2fAAAAAAAAFxM%2fm6GMC2VFF90%2fs1600%2fIMG_8907.JPG&ehk=jezQgM%2bp5zGTPhQE6yLApRNNuqaRIHSrF7BOGFYdAHQ%3d&risl=&pid=ImgRaw&r=0",
    "title": "Card 1",
    "description": "This is the first card description."
  },
  {
    "id": "2",
    "img": "https://i.pinimg.com/474x/aa/d6/ee/aad6ee28d9bd9f14385553ff2f8bbaa3.jpg",
    "title": "Card 2",
    "description": "This is the second card description."
  },
  {
    "id": "3",
    "img": "https://th.bing.com/th/id/OIP.uZ2TjMUPjDobSDCPMy3T3gHaHa?rs=1&pid=ImgDetMain",
    "title": "Card 3",
    "description": "ksmsknfkfnkdf"
  },
  {
    "id": "4",
    "img": "https://th.bing.com/th/id/R.15d1757c4a61b52b9b37256e792b032f?rik=SbUfBfWqB%2b%2b6zg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-fsRz26kHgwI%2fUrDKnjiWdAI%2fAAAAAAAAFxM%2fm6GMC2VFF90%2fs1600%2fIMG_8907.JPG&ehk=jezQgM%2bp5zGTPhQE6yLApRNNuqaRIHSrF7BOGFYdAHQ%3d&risl=&pid=ImgRaw&r=0",
    "title": "Card 4",
    "description": "This is the first card description."
  },
  {
    "id": "5",
    "img": "https://i.pinimg.com/474x/aa/d6/ee/aad6ee28d9bd9f14385553ff2f8bbaa3.jpg",
    "title": "Card 5",
    "description": "This is the second card description."
  },
  {
    "id": "6",
    "img": "https://th.bing.com/th/id/OIP.uZ2TjMUPjDobSDCPMy3T3gHaHa?rs=1&pid=ImgDetMain",
    "title": "Card 6",
    "description": "mfdefnkdnfk"
  }
]


const SchoolDonationPage = () => {

    const {
      data: Supplies,
      isPending,
      error,
    } = useFetch("http://localhost:4000/SchoolPosts");
    const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlogs);
      }
      
      const [type, setType] = useState("");

//  Function to handle button click
  const handleButtonClick = (itemId) => {
    alert(`Button clicked for item ${itemId}`);
  };

  return (
    <div className='SchoolDonationPage'>
      <Nav />
     
      <div className="content">   
        <div className='postHeadlines'>
         <h2>School supplies donation</h2>

         <div className="filter-logic">
              <label>filter by type:</label>
              <select
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  console.log("the chosen season", type);
                }}
              >
                <option value="">All</option>
                <option value="book">Books</option>
                <option value="stationary">stationary</option>
              </select>
          </div>

         </div>  
      </div>
      
      {/* <Posts items={items} handleButtonClick={handleButtonClick} />    */}
      {error && <div>{error}</div>}
    {isPending && <div className="loader">
          <l-waveform
            size="35"
            stroke="3.5"
            speed="1"
            color="black"
          ></l-waveform>
        </div>}
    {Supplies && (
        <SchoolGrid  
        crads={Supplies.filter(
          (item) =>
            item.type.includes(type) 
               
        )}/>
      
  //     <CardGrid  crads = {
  //       Cards
  //     }/>

      // <Posts
      //   title="All Blogs!!"
      //   blogs={blogs} handleDelete={handleDelete}
      //   handleButtonClick={handleButtonClick}
      // />

      // <ClothesList title='Clothes Donation' blogs={blogs} handleDelete={()=>{}}/>
    )}
    </div>
  );
}

 
export default SchoolDonationPage;








    
       
 
