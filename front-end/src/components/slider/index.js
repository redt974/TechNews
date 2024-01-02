import ContentItem from './block-slider';
import './index.css';  

const Slider = ({ items, currentIndex, handlePrev, handleNext, style, totalSlides}) => {
  return (
    <section className="slider-container">
      <section className="slider" style={{ transform: `translateX(-${currentIndex * 25}%)`, transition: '1s' }}>
        {items.map((item, index) => (
          <ContentItem key={index} {...item} couleur={style}/>
        ))}
      </section>
      <i className={`fa-solid fa-arrow-left arrow left-arrow ${currentIndex === 0 ? 'hidden' : 'visible'}`} onClick={handlePrev}></i>
      <i className={`fa-solid fa-arrow-right arrow right-arrow ${currentIndex === totalSlides - 1 ? 'hidden' : 'visible'}`} onClick={handleNext}></i>
    </section>
  );
};




export default Slider;
