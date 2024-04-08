import React, { useState } from 'react';

export default function Form() {
    // Initialize formData state with firstName and secondName fields
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: ""
    });

    // Log the current formData state to the console
    console.log(formData);

    // handleChange function to update formData based on input changes
    function handleChange(event) {
        const { name, value } = event.target;
        // Update formData by creating a new object with the spread operator
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value // Dynamically update the corresponding field in formData
        }));
    }

    return (
        <form>
            {/* Input for firstName */}
            <input
                type="text"
                placeholder='First Name'
                onChange={handleChange}
                name='firstName' // Set the name attribute to identify the field in handleChange
                value={formData.firstName} // Bind value to state to make it a controlled component
            />
            {/* Input for secondName */}
            <input
                type="text"
                placeholder='Last Name'
                onChange={handleChange}
                name='secondName' // Set the name attribute to identify the field in handleChange
                value={formData.secondName} // Bind value to state to make it a controlled component
            />
        </form>
    );
}

// Notes on React Forms:
// - Controlled Components: Input fields are controlled components where their values are controlled by React state.
// - State Management: useState hook is used to manage form data state, providing reactivity to input changes.
// - Event Handling: onChange event is used to trigger handleChange function, updating form data based on user input.
// - Dynamic Field Updates: Using computed property names ([name]: value), the form data is updated dynamically for each input field.
// - Logging: The current form data state is logged to the console, helping in debugging and tracking state changes.
