import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import slide_1 from "../images/img_slide_1.jpg";
import slide_2 from "../images/img_slide_2.jpg";
import slide_3 from "../images/img_slide_3.jpg";
import slide_4 from "../images/img_slide_4.jpg";

import slide_5 from "../images/img_slide_5.jpg";
import slide_6 from "../images/img_slide_6.jpg";

const items = [
  {
    src: slide_1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: slide_2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: slide_3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: slide_4,
    altText: "Slide 4",
    caption: "Slide 4",
  },
  {
    src: slide_5,
    altText: "Slide 5",
    caption: "Slide 5",
  },
  {
    src: slide_6,
    altText: "Slide 6",
    caption: "Slide 6",
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
        //   captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Example;
