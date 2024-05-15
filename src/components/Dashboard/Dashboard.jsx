import React from 'react';
import Navbar from '../Common/Navebar/Navbar';// Assuming the correct path to your Navbar component
import { IMAGES } from '../../assets/images/Images'; // Assuming the correct path to your image constants
import styles from './Dashboard.module.css';
import GameCard from '../GameCard/GameCard'; // Assuming the correct path to your GameCard component
import SearchBar from '../SearchBar/SearchBar';

const Dashboard = () => {
    // Sample data for GameCard components
    const gameData = [
        {
            // imageUrl: "/path/to/game-image1.jpg",
            // heading: "Game 1",
            // link: "https://example.com/game1",
            // paragraph: "Description of Game 1",
            // price: "$19.99",
            showButton: true,
        },
        {
            imageUrl: "/path/to/game-image1.jpg",
            heading: "Game 1",
            link: "https://example.com/game1",
            paragraph: "Description of Game 1",
            price: "$19.99",
            showButton: false,
        },
        {
            imageUrl: "/path/to/game-image1.jpg",
            heading: "Game 1",
            link: "https://example.com/game1",
            paragraph: "Description of Game 1",
            price: "$19.99",
            showButton: false,
        },
        {
            imageUrl: "/path/to/game-image1.jpg",
            heading: "Game 1",
            link: "https://example.com/game1",
            paragraph: "Description of Game 1",
            price: "$19.99",
            showButton: false,
        },
        {
            imageUrl: "/path/to/game-image1.jpg",
            heading: "Game 1",
            link: "https://example.com/game1",
            paragraph: "Description of Game 1",
            price: "$19.99",
            showButton: false,
        },
        {
            imageUrl: "/path/to/game-image1.jpg",
            heading: "Game 1",
            link: "https://example.com/game1",
            paragraph: "Description of Game 1",
            price: "$19.99",
            showButton: false,
        },
        {
            imageUrl: "/path/to/game-image1.jpg",
            heading: "Game 1",
            link: "https://example.com/game1",
            paragraph: "Description of Game 1",
            price: "$19.99",
            showButton: false,
        },
        {
            imageUrl: "/path/to/game-image1.jpg",
            heading: "Game 1",
            link: "https://example.com/game1",
            paragraph: "Description of Game 1",
            price: "$19.99",
            showButton: false,
        },
        // Add more game data objects as needed
    ];

    return (
        <>
            <Navbar
                logoPath=""
                profileImagePath={IMAGES.profilePic}
                profileName="John Doe"
                email="john.doe@example.com"
            />
          
                <div className="container">
                <div className={`${styles.dashboardWrapper} mt-5 pb-5`}>

                    <div className={`${styles.SearchBarWrapper} pb-5`}>
                        <SearchBar />
                    </div>

                    <div className="row">
                        {gameData.map((game, index) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                <GameCard
                                cssClass={styles.CardCustom}
                                    imageUrl={game.imageUrl}
                                    heading={game.heading}
                                    link={game.link}
                                    paragraph={game.paragraph}
                                    price={game.price}
                                    showButton={game.showButton} 
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;
