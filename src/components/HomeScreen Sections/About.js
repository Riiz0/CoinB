import React from "react"

function About () {
    return(
        <div id="about" className="about-container">
        {/* About Container */}
        <div className="about-background-image"></div>
            <div className="about-content">
                <p className="about-subtitle">ABOUT</p>
                <h1 className="about-title">WHAT IS BUNIME?</h1>
                <p className="about-text">BUNIME is an exciting cryptocurrency meme coin that serves as a vibrant community-driven token designed specifically for anime enthusiasts. It aims to bridge the worlds of anime and cryptocurrency, bringing them together for a shared experience of fun, friendships, and creative exploration.</p>          
                <p className="about-text">As a meme coin, BUNIME embraces the lighthearted and humorous nature of internet culture, allowing anime lovers to engage with their favorite fandoms in a unique way. It provides a platform for the anime community to connect, interact, and support each other through a shared passion for animated shows, characters, and storylines.</p>
                <p className="about-text">BUNIME offers an opportunity to participate in the crypto world with a distinct anime twist. It allows individuals to buy and hold BUNIME tokens, representing their involvement in this thriving community. However, it's important to note that investing in BUNIME should be done at one's own risk, as with any cryptocurrency.</p>
            </div>
        </div>
    );
}

export default About;
