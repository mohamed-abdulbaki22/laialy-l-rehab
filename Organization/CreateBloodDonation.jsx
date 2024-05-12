import OrganizationNav from "./OrganizationNav";
import React, { useState } from 'react';

const CreateBloodDonation = () => {
    const [formData, setFormData] = useState({
        BloodType: '',
        patientName: '',
        hospital: '',
        img: '',
        hospitalAddress: '',
        area: '',
        governorate: '',
        documents: null,
        quantity: 0, // Add quantity field to form data
    });

    // State to manage error message
    const [errorMessage, setErrorMessage] = useState('');

    // Handler for form input changes
    const handleChange = (e) => {
        // Extract the name and value of the input field triggering the change event
        const { name, value } = e.target;
        // Update the form data state with the new value
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        setFormData({ ...formData, documents: file }); // Store the selected file in state
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:4000/BloodPosts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author: 'hospitalNew', // Hardcoded author value for now
                    type: formData.BloodType,
                    nameOfPatient: formData.patientName,
                    hospital: formData.hospital,
                    img: formData.img, // Assuming the image URL is provided in the form
                    governorate: formData.governorate,
                    area: formData.area,
                    hospitalAddress: formData.hospitalAddress,
                    'quantity requested': parseInt(formData.quantity), // Parse quantity to integer
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            // Clear form fields if registration is successful
            setFormData({
                BloodType: '',
                patientName: '',
                hospital: '',
                img: '',
                hospitalAddress: '',
                area: '',
                governorate: '',
                documents: null,
                quantity: 0, // Reset quantity field to 0
            });

            alert('Post created successfully!');
        } catch (error) {
            console.error('Creation error:', error);
            setErrorMessage('Failed to create post');
        }
    };

    return (
        <div>
            <OrganizationNav />
            <h2 className="heading">Create Blood Donation Post</h2>
            <div className="info">
                <form className="create" onSubmit={handleSubmit}>
                    BloodType:<br/>
                    <input
                        type="BloodType"
                        name="BloodType"
                        placeholder="Blood Type"
                        value={formData.BloodType}
                        onChange={handleChange}
                        required
                    />
                    patientName: <br/>
                    <input
                        type="patientName"
                        name="patientName"
                        placeholder="Patient Name"
                        value={formData.patientName}
                        onChange={handleChange}
                        required
                    />
                    hospital: <br/>
                    <input
                        type="hospital"
                        name="hospital"
                        placeholder="Hospital"
                        value={formData.hospital}
                        onChange={handleChange}
                        required
                    />
                    hospitalAddress: <br/>
                    <input
                        type="hospitalAddress"
                        name="hospitalAddress"
                        placeholder="Hospital Address"
                        value={formData.hospitalAddress}
                        onChange={handleChange}
                        required
                    />
                    area:<br/>
                    <input
                        type="area"
                        name="area"
                        placeholder="Area"
                        value={formData.area}
                        onChange={handleChange}
                        required
                    />
                    governorate:<br/>
                    <input
                        type="governorate"
                        name="governorate"
                        placeholder="Governorate"
                        value={formData.governorate}
                        onChange={handleChange}
                        required
                    />
                    amount: <br/>
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                    image (optional) : <br/>
                    <input
                        type="img" 
                        name="img"
                        placeholder="Image URL" // Input field for image URL
                        value={formData.img}
                        onChange={handleChange}
                        
                    />
                    File (optional): <br/>
                    <input
                        type="file"
                        name="documents"
                        onChange={handleFileChange}
                    />
                    {/* Input field for quantity */}
                    <br/>
                    <button type="submit">Create</button>

                    {/* Error message display */}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
}

export default CreateBloodDonation;
