import React from 'react';
import { connect } from 'react-redux';

import CarouselComponent from 'CarouselComponent';

class CarouselContainer extends React.Component {
  render() {
    let { photos } = this.props;
    let renderToScreen = () => {
      if (photos.length > 0) {
        return <CarouselComponent photos={photos} />;
      } else {
        return (
          <div className="message_container">
            <h4>No photos!</h4>
          </div>
        );
      }
    }
    return (
      <div>
        {renderToScreen()}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      photos: state.photos
    };
  }
)(CarouselContainer);
