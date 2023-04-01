import { useEffect, useState, useRef } from 'react'
import '../../styles/ImageSlider.css'
import rightArrowImage from '../../assets/right-arrow.png';
import leftArrowImage from '../../assets/left-arrow.png'
import HeroText from './Text';

const ImageSlider = ({slides}) => {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };
const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0 
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
};
const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
};

useEffect(() => {
    timerRef.current = setTimeout(() => {
        goToNext();
    }, 5000);
})

    return (
          <div className='sliderStyles'>
            <div onClick={goToPrevious}>
            <img className='leftArrowStyles' src={leftArrowImage} alt='arrow facing left'/>
            </div>
            <div onClick={goToNext}>
                <img className='rightArrowStyles' src={rightArrowImage} alt='arrow facing right'/>
            </div>
          <div style={slideStyles}></div>
          <HeroText />
        </div>
    )
}

export default ImageSlider;