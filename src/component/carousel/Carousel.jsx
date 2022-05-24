import {useState} from "react";
import {Carousel} from "react-bootstrap"
import pic from "../../pic/pic.png";
import pic1 from "../../pic/pic1.png"
import pic2 from "../../pic/pic2.png"
import "./caro.css"

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic}
            alt="First slide"
          />
          <Carousel.Caption className="cautio">
            <h3 >ARE YOU DEPRESS</h3>
            <p>there is always solution to every problem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic1}
            alt="Second slide"
          />
  
          <Carousel.Caption className="cautio">
            <h3>DO YOU NEED ADVICE</h3>
            <p>today advise might be the answer you have be looking for!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            alt="Third slide"
          />
  
          <Carousel.Caption className="cautio">
            <h3>WE ARE HERE TO HELP YOU</h3>
            <p>
              Advise room we always be at your service.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;