import React from 'react'
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

function DJCarousel() {


    const [activeIndex, setActiveIndex] = React.useState(0);


    const [animating, setAnimating] = React.useState(false);

    const items = [
        {src: 
'/img/alfonso-scarpa-2LGx4cQAMks-unsplash.jpg',
        },
        {src: 
'/img/djGear.jpg',
        },
        {src:
'/img/john-fornander-yvs7ZH3AZNM-unsplash.jpg'
        },
        {src: 
'/img/alfonso-scarpa-2LGx4cQAMks-unsplash.jpg',
        },
        {src: 
'/img/ryoji-hayasaka-0UZj73PQVew-unsplash.jpg',
        },
        {src:
'/img/djGear.jpg'
        }
    ];

    // Items array length
    const itemLength = items.length - 1

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img className="d-block w-100" src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <div style={{
            display: 'block', padding: 0
        }}>
            <Carousel previous={previousButton} next={nextButton} 
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
            </Carousel>
        </div >
    );
}

export default DJCarousel;