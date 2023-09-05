import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// Import your images
import '../buy.css'; // Your CSS import
import Image1 from '../assets/PlaceHolder_Image.png';
import Image2 from '../assets/PlaceHolder_Image2.png';
import Image3 from '../assets/PlaceHolder_Image3.png';
import Image4 from '../assets/PlaceHolder_Image4.png'
import Image5 from '../assets/PlaceHolder_Image2.png'
import '@splidejs/react-splide/css';

function Buy() {
  useEffect(() => {
    // Initialize Splide with AutoScroll when the component mounts.
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
    });

    // Use the AutoScroll extension.
    splide.mount({ AutoScroll });

    return () => {
      // Clean up or destroy the Splide instance when the component unmounts.
      splide.destroy();
    };
  }, []);

  return (
    <div name="buy" className="buy-body-top-section">
      {/* Main Content */}
      <div className="buy-main-content">
        {/* Splide Slider Container */}
        <div className="splide-container">
          <div className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide pop-effect">
                <a href="/Swap"> {/* Add your destination URL here */}
                  <img src={Image1} alt="Product 1" />
                  </a>
                </li>
                <li className="splide__slide pop-effect">
                <a href="/BurnPortal"> {/* Add your destination URL here */}
                  <img src={Image2} alt="Product 2" />
                  </a>
                </li>
                <li className="splide__slide pop-effect">
                <a href="/Liquidity"> {/* Add your destination URL here */}
                  <img src={Image3} alt="Product 3" />
                  </a>
                </li>
                <li className="splide__slide pop-effect">
                <a href="/NFTs"> {/* Add your destination URL here */}
                  <img src={Image4} alt="Product 4" />
                  </a>
                </li>
                <li className="splide__slide pop-effect">
                <a href="/More"> {/* Add your destination URL here */}
                  <img src={Image5} alt="Product 5" />
                  </a>
                </li>
                {/* Add more slides with images */}
              </ul>
            </div>
            <div className="splide__pagination">
    {/* Pagination dots will be added here automatically */}
  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
