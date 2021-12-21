import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import banner1 from './img/banner1.jpg'
import banner2 from './img/banner2.jpg'
import banner3 from './img/banner3.jpg'

const Inicio = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="imagen banner 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="imagen banner 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="imagen banner 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Inicio
