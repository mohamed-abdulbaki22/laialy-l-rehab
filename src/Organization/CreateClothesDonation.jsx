import OrganizationNav from "./OrganizationNav";
import React, { useState } from 'react';

const CreateClothesDonation = () => {
    const [formData, setFormData] = useState({
        ClothesType: '',
        age:'',
        gender: '',
        season: '',
        img: '',
        material: '',
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
            const response = await fetch('http://localhost:4000/ClothesPosts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author: 'ClothesNew', // Hardcoded author value for now
                    ClothesType: formData.ClothesType,
                    age:formData.age,
                    gender: formData.gender,
                    season: formData.season,
                    img: formData.img, // Assuming the image URL is provided in the form
                    material: formData.material,
                    hospitalAddress: formData.hospitalAddress,
                    'quantity requested': parseInt(formData.quantity), // Parse quantity to integer
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            // Clear form fields if registration is successful
            setFormData({
                ClothesType: '',
                age:'',
                gender: '',
                season: '',
                img: '',
                material: '',
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
            <h2 className="heading">Create School Supplies Donation Post</h2>
            <div className="info">
                <form className="create" onSubmit={handleSubmit}>
                    Clothes Type:<br/>
                    <input
                        type="ClothesType"
                        name="ClothesType"
                        placeholder="Clothes Type"
                        value={formData.ClothesType}
                        onChange={handleChange}
                        required
                    />
                    season: <br/>
                    <input
                        type="season"
                        name="season"
                        placeholder="season"
                        value={formData.season}
                        onChange={handleChange}
                        required
                    />
                    material: <br/>
                    <input
                        type="material"
                        name="material"
                        placeholder="material"
                        value={formData.material}
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
                    </select> 
                    age: <br/>
                    <select
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
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

export default CreateClothesDonation;
