import OrganizationNav from "./OrganizationNav";
import React, { useState } from 'react';

const CreateSchoolDonation = () => {
    const [formData, setFormData] = useState({
        Type: '',
        Name: '',
        img: '',
        bookAuthor: '',
        language:"",
        edition:'',
        summary: '',
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
            const response = await fetch('http://localhost:4000/SchoolPosts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author: 'Food organization New', // Hardcoded author value for now
                    type: formData.Type,
                    name: formData.Name,
                    img: formData.img, // Assuming the image URL is provided in the form
                    language: formData.language,
                    bookAuthor: formData.bookAuthor,
                    edition: formData.edition,
                    summary: formData.summary,
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
                bookAuthor: '',
                language:"",
                edition:'',
                summary: '',
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
            <h2 className="heading">Create School Donation Post</h2>
            <div className="info">
                <form className="create" onSubmit={handleSubmit}> 
                    Supply Name:<br />
                    <input
                        type="Name"
                        name="Name"
                        placeholder="Supply Name"
                        value={formData.Name} 
                        onChange={handleChange}
                        required
                    />
                
                    {formData.Type === 'Book' && (
                        <>
                            Book Author: <br/>
                            <input
                                type="bookAuthor"
                                name="bookAuthor"
                                placeholder="bookAuthor"
                                value={formData.bookAuthor}
                                onChange={handleChange}
                                required
                            />
                            Language:<br/>
                            <input
                                type="language"
                                name="language"
                                placeholder="language"
                                value={formData.language}
                                onChange={handleChange}
                                required
                            />
                            Edition:<br/>
                            <input
                                type="edition"
                                name="edition"
                                placeholder="edition"
                                value={formData.edition}
                                onChange={handleChange}
                                required
                            />
                            Summary:<br/>
                            <input
                                type="summary"
                                name="summary"
                                placeholder="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}
                    
                    {formData.Type === 'Stationary' && (
                        <>
                            {/* Add stationary-specific input fields here */}
                        </>
                    )}
                    
                    Amount: <br/>
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                    
                    Supply type:<br/>
                    <select
                        name="Type"
                        value={formData.Type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Book">Book</option>
                        <option value="Stationary">Stationary</option>
                    </select> 
                    
                    Image (optional) : <br/>
                    <input
                        type="text"
                        name="img"
                        placeholder="Image URL"
                        value={formData.img}
                        onChange={handleChange}
                    />
                    
                    File (optional): <br/>
                    <input
                        type="file"
                        name="documents"
                        onChange={handleFileChange}
                    />
                    
                    <button type="submit">Create</button>

                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
}

export default CreateSchoolDonation;
