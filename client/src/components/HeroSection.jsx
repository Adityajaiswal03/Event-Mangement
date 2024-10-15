import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
      <section className="hero">
          <img src="/restaurant.jpg" alt="restaurant" />
          <div className="item">
              <h3>Créateurs de Rêves</h3>
              <div>
                  <h1>Crafting Moments, Creating Memories</h1>
                  <p>
                      At Luxe Moments,we bring your biggest visions to life with meticulous
                      attention to detail. Every event is a chance to make
                      dreams a reality, whether it's a grand celebration or an
                      intimate gathering. Let us plan, so you can enjoy the
                      magic.
                  </p>
                  <Link to="contact" spy={true} smooth={true} duration={500}>
                      BOOK NOW
                  </Link>
              </div>
          </div>
      </section>
  );
  
}

export default HeroSection