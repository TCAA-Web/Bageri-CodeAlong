import style from "./Slider.module.scss";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import chevronIcon from "../../assets/icons/chevron.png";
import { useEffect, useState } from "react";

export function Slider() {
  const imageArray = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // updates the index number with +1 that is used to show the current image
  function nextIndex() {
    if (currentIndex === imageArray.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  // updates the index number with -1 that is used to show the current image
  function prevIndex() {
    if (currentIndex === 0) {
      setCurrentIndex(imageArray.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  // create a timeout that increments index after 2000ms and re-runs every time currentIndex updates
  useEffect(() => {
    let timeout = setTimeout(() => {
      nextIndex();
      console.log(currentIndex);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // returm markup
  return (
    <header className={style.slider}>
      <img src={imageArray[currentIndex]} />
      <h2>Vi elsker at lave brød</h2>
      <img src={chevronIcon} onClick={() => prevIndex()} />
      <img src={chevronIcon} onClick={() => nextIndex()} />
      <div>
        <span
          className={currentIndex == 0 ? style.active : null}
          onClick={() => setCurrentIndex(0)}
        ></span>
        <span
          className={currentIndex == 1 ? style.active : null}
          onClick={() => setCurrentIndex(1)}
        ></span>
        <span
          className={currentIndex == 2 ? style.active : null}
          onClick={() => setCurrentIndex(2)}
        ></span>
      </div>
    </header>
  );
}
