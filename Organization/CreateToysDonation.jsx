import OrganizationNav from "./OrganizationNav";
import React, { useState } from 'react';



const CreateToysDonation = () => {
    const [formData, setFormData] = useState({
        ToysType: '',
        gender: '',
        age: '',
        img: '',
        category: '',
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
            const response = await fetch('http://localhost:4000/ToysPosts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author: 'Toys Organization New', // Hardcoded author value for now
                    ToysType: formData.ToysType,
                    gender: formData.gender,
                    age: formData.age,
                    img: formData.img, // Assuming the image URL is provided in the form
                    category: formData.category,
                    'quantity requested': parseInt(formData.quantity), // Parse quantity to integer
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            // Clear form fields if registration is successful
            setFormData({
                ToysType: '',
                gender: '',
                age: '',
                img: '',
                category: '',
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
            <h2 className="heading">Create Toys Donation Post</h2>
            <div className="info">
                <form className="create" onSubmit={handleSubmit}>
                Toys Type:<br/>
                    <input
                        type="ToysType"
                        name="ToysType"
                        placeholder="Toys Type"
                        value={formData.ToysType}
                        onChange={handleChange}
                        required
                    />
                    category: <br/>
                    <input
                        type="category"
                        name="category"
                        placeholder="category"
                        value={formData.category}
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
                    gender:<br/>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select> 
                    <select
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    >
                        <option value="">All</option>
                        <option value={"1-3"}>1 - 3</option>
                        <option value={"3-7"}>3 - 7</option>
                        <option value={"7-12"}>7 - 12</option>
                        <option value={"12-18"}>12 - 18</option>
                        <option value={"18+"}>18+</option>
                    </select>
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

export default CreateToysDonation;
