import React from 'react'

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h1>My Website</h1>
      </div>
      
      {/* Card Container */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
          />
          <h2>Card Title 1</h2>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
          />
          <h2>Card Title 2</h2>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
          />
          <h2>Card Title 3</h2>
        </div>
      </div>
    </div>
  )
}

export default Home