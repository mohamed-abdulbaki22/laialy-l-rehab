import Card from "../Card";
import donor from "../assets/donation.png"
import org from "../assets/organization.png"
const GeneralSignUp = () => {
    return (
    <div className="card-container">
       <Card id={1} img={donor} title="Register as a donor" description="" path="RegistrationForm"/>
       <Card id={2} img={org} title="Register as an organization" description="" path="RegistrationForm"/>
    </div> 
    );
}
 
export default GeneralSignUp;