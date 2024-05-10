import "./App.css";
import "./ClothesDonation/clothes.css";
import "./ToysDonation/Toys.css";
import "./SchoolDonation/school.css";
import "./FoodDonation/Food.css";
import "./MedicalDonation/Medical.css";
import "./BloodDonation/Blood.css";
import Card from "./Card";
import { useState } from "react";
import Nav from "./Nav";
import "./Navbar.css";
import SideBar from "./notUsed/SideBar";
import Notification from "./Notification";


function App() {
  return (
    <div className="App">
      <Nav />
      <h2 className="heading"> Completed Donations</h2>
      <div className="card-container">
        <Card
          title="Clothes Donation"
          img="https://th.bing.com/th/id/OIP.4lILxx7gOtGR6VaiI-KquQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          description={
            <div>
              <h4>Organization 1</h4>
              <p>2/10/2023</p>
            </div>
          }
          id={1}
          path="ClothesDonationPage"
        />
        <Card
          title="Blood Donation"
          img="https://th.bing.com/th/id/OIP.4lILxx7gOtGR6VaiI-KquQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          description={
            <div>
              <h4>Hospital 1</h4>
              <p>20/3/2022</p>
            </div>
          }
          id={2}
          path="ClothesDonationPage"
        />
        <Card
          title="Clothes Donation"
          img="https://th.bing.com/th/id/OIP.4lILxx7gOtGR6VaiI-KquQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          description={
            <div>
              <h4>Organization 2</h4>
              <p>10/6/2023</p>
            </div>
          }
          id={3}
          path="ClothesDonationPage"
        />
      </div>
      <h2 className="heading"> Current Donations</h2>
      <div className="card-container">
        <Card
          title="Food Donation"
          img="src/assets/meat.jpg"
          description={
            <div>
              <h4>Organization 1</h4>
              <p>2/10/2023</p>
            </div>
          }
          id={4}
          path="CurrentDetails"
        />
        <Card
          title="Toy Donation"
          img="src/assets/cars.jpg"
          description={
            <div>
              <h4>Organization 2</h4>
              <p>20/3/2022</p>
            </div>
          }
          id={5}
          path="CurrentDetails"
        />
        <Card
          title="Stationary Donation"
          img="src/assets/notebooks.jpg"
          description={
            <div>
              <h4>Organization 3</h4>
              <p>10/6/2023</p>
            </div>
          }
          id={6}
          path="CurrentDetails"
        />
      </div>
    </div>
  );
}

export default App;
