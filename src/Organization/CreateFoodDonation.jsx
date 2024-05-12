import OrganizationNav from "./OrganizationNav";
import React, { useState } from 'react';

const CreateFoodDonation = () => {
    const [formData, setFormData] = useState({
        FoodType: '',
        FoodName: '',
        img: '',
        note: '',
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
            const response = await fetch('http://localhost:4000/FoodPosts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author: 'Food organization New', // Hardcoded author value for now
                    type: formData.FoodType,
                    name: formData.FoodName,
                    img: formData.img, // Assuming the image URL is provided in the form
                    note: formData.note,
                    'quantity requested': parseInt(formData.quantity), // Parse quantity to integer
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            // Clear form fields if registration is successful
            setFormData({
                FoodType: '',
                FoodName: '',
                img: '',
                note: '',
                documents: null,
                quantity: 0, // Add quantity field to form data
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
            <h2 className="heading">Create Food Donation Post</h2>
            <div className="info">
                <form className="create" onSubmit={handleSubmit}>
                    FoodType:<br/>
                    <input
                        type="FoodType"
                        name="FoodType"
                        placeholder="Food Type"
                        value={formData.FoodType}
                        onChange={handleChange}
                        required
                    />
                     
                    FoodName:<br />
                    <input
                        type="FoodName"
                        name="FoodName"
                        placeholder="Food Name"
                        value={formData.FoodName} 
                        onChange={handleChange}
                        required
                    />
               
             
                    note: <br/>
                    <input
                        type="note"
                        name="note"
                        placeholder="note"
                        value={formData.note}
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
                   
                    <button type="submit">Create</button>

                    {/* Error message display */}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
}

export default CreateFoodDonation;
