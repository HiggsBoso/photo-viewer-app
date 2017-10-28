import React from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';

const CarouselComponent = (props) => {
  let renderCarouselItems = () => {
    return props.photos.map((photo) => {
      return <Carousel.Item key={photo.pid}>
          <img src={photo.src_big}/>
        </Carousel.Item>
      });
  }
  return (
    <div>
      <Grid>
        <Row>
          <Col lg={4} lgOffset={4}>
            <Carousel>
              {renderCarouselItems()}
            </Carousel>
          </Col>
        </Row>
      </Grid>

    </div>
  );
}

export default CarouselComponent;
