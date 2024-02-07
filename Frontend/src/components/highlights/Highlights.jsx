import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Highlights.module.css'

const Highlights = () => {
  const [projects, setProjects] = useState([
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Depot%20-%20eCommerce%20Theme.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Arredo%20-%20Clean%20Furniture%20Store.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Gioia%20-%20Modern%20Fashion%20Shop.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Pearl%20-%20Corporate%20Business%20WordPress%20Theme.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Wanium%20-%20A%20Elegant%20Multi-Concept%20Theme.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/26768/image/ella.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/26768/image/ione.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/26768/image/gecjo.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/26768/image/wokiee.jpg' },
    { url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/26768/image/Shella%20-%20Multipurpose%20Shopify%20theme.jpg' },
  ])

  return (
    <div className={styles.carouselcontainer}>
      <h2>Take a look at our highlights</h2>
      <Carousel className={styles.carouselStyles}>
        {
          projects.map((project, index) => (
            <div key={index}>
              <img src={project.url} alt={`Image n${index}`} />
            </div>
          ))
        }

      </Carousel>
    </div>
  )
}

export default Highlights