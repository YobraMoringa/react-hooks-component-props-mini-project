import React from "react";

function About({
    about,
    image = "https://via.placeholder.com/215"
    // image = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/DrumstickFlower.jpg/500px-DrumstickFlower.jpg"
}) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;