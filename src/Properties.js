import React from "react";

export default function Properties() {
    
    const [propertyData, setPropertyData] = React.useState(
        {address: "", price: ""}
    )

    console.log(propertyData)

    function handleChange(event) {
        setPropertyData(prevPropertyData => {
            return {
                ...prevPropertyData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <div className="form--container">
            <form>
                <input 
                    type="text"
                    placeholder="enter a property"
                    onChange={handleChange}
                    name="address"
                />
                <input 
                    type="text"
                    placeholder="enter a purchase price"
                    onChange={handleChange}
                    name="price"
                />  
            </form>
        </div>
    )
}