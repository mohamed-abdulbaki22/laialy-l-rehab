import OrganizationNav from "./OrganizationNav";
import React, { useState } from 'react';

const CreateMedicalDonation = () => {
    const [formData, setFormData] = useState({
        Type: '',
        Name: '',
        img: '',
        use: '',
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
            const response = await fetch('http://localhost:4000/MedicalPosts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author: 'hospital New', // Hardcoded author value for now
                    type: formData.Type,
                    name: formData.Name,
                    img: formData.img, // Assuming the image URL is provided in the form
                    use: formData.use,
                    'quantity requested': parseInt(formData.quantity), // Parse quantity to integer
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            // Clear form fields if registration is successful
            setFormData({
                Type: '',
                Name: '',
                img: '',
                use: '',
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
                    Supply Type:<br/>
                    <input
                        type="Type"
                        name="Type"
                        placeholder="Supply Type"
                        value={formData.Type}
                        onChange={handleChange}
                        required
                    />
                     
                    Supply Name:<br />
                    <input
                        type="Name"
                        name="Name"
                        placeholder="Supply Name"
                        value={formData.Name} 
                        onChange={handleChange}
                        required
                    />
               
             
                    use: <br/>
                    <input
                        type="use"
                        name="use"
                        placeholder="use"
                        value={formData.use}
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

export default CreateMedicalDonation;
