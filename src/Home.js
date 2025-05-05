import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Space Fest 2025</h1>
        <p>
          Join us for an extraordinary journey beyond the stars! Space Fest 2025 is a celebration of innovation, exploration, and creativity. 
          Dive into a world of workshops, hackathons, and inspiring talks by industry leaders. 
          Whether you're a tech enthusiast, a space lover, or just curious, there's something for everyone!
        </p>
        <p>
          <b>Date:</b> April 20-23, 2025<br />
          <b>Location:</b> Galaxy Convention Center, New York
        </p>
        <button className="explore-button">Explore Events</button>
      </div>
    </div>
  );
};

export default Home;