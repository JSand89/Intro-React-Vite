import React from "react";
import "./Features.css"
const Features =()=>{
    const features =[
        {
            title:" Caracteristica 1",
            description : " Descripción primera funcionalidad",
            image : "/1.jpg"
        },
        {
            title:" Caracteristica 2",
            description : " Descripción primera funcionalidad",
            image : "/2.jpg"
        },
        {
            title:" Caracteristica 3",
            description : " Descripción primera funcionalidad",
            image : "/3.jpg"
        }
    ]
    return(
        <div className="features-container">
            {features.map((feature, index)=>(
                <div key={index} className="feature-item">
                    <img src={feature.image} alt={feature.title} className="feature-image" />
                    <div className="feature-text">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                </div>
            ))

            }
        </div>
    )
}
export default Features