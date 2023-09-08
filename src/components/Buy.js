import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/react-splide/css';

// Import your images
import '../buy.css'; // Your CSS import
import Image1 from '../assets/Swap.png';
import Image2 from '../assets/BurnPortal.png';
import Image3 from '../assets/Liquidity.png';
import Image4 from '../assets/NFTs.png';
import Image5 from '../assets/More.png';
import Splide_Background_Vid from '../assets/Splide_Background.mp4'

function Buy() {
  useEffect(() => {
    // Initialize Splide with AutoScroll when the component mounts.
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'left',
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
      rewind: true,
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
          <video autoPlay muted loop className="video-background">
            <source src={Splide_Background_Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <a href="Buy/Swap">
                    <div className="image-container pop-effect">
                      <img src={Image1} alt="Product 1" />
                      <div className="image-text">Swap</div>
                    </div>
                  </a>
                </li>
                <li className="splide__slide">
                  <a href="Buy/BurnPortal">
                    <div className="image-container pop-effect">
                      <img src={Image2} alt="Product 2" />
                      <div className="image-text">Burn Portal</div>
                    </div>
                  </a>
                </li>
                <li className="splide__slide">
                  <a href="Buy/Liquidity">
                    <div className="image-container pop-effect">
                      <img src={Image3} alt="Product 3" />
                      <div className="image-text">Liquidity</div>
                    </div>
                  </a>
                </li>
                <li className="splide__slide">
                  <a href="Buy/NFTs">
                    <div className="image-container pop-effect">
                      <img src={Image4} alt="Product 4" />
                      <div className="image-text">NFT's</div>
                    </div>
                  </a>
                </li>
                <li className="splide__slide">
                  <a href="Buy/More">
                    <div className="image-container pop-effect">
                      <img src={Image5} alt="Product 5" />
                      <div className="image-text">More</div>
                    </div>
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

      {/* Container below Splide for additional content */}
      <div className="buy-mid-container">
        {/* Add your content here */}
        <h2>Additional Content Container</h2>
        <p>This is where you can add more content below the Splide slider.</p>
      </div>

      {/* Container below the additional content */}
      <div className="buy-bottom-container">
        {/* Add your content here */}
        <h2>Bottom Content Container</h2>
        <p>This is where you can add even more content below the additional content container.</p>
      </div>
    </div>
  );
}

export default Buy;
