import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Auth from 'Auth';
import CarouselContainer from 'CarouselContainer';
import PageHeader from 'PageHeader';
import { setPhotos, setUserId, setAccessToken } from 'actions';

import vk from 'vk-api';

class Main extends React.Component {
  componentWillMount() {
    const parsedHash = queryString.parse(window.location.hash);
    let { dispatch } = this.props;
    const { user_id, access_token } = parsedHash;
    if (access_token && user_id) {
      vk.getUserPhotos(user_id, access_token).then((photos) => {
        dispatch(setPhotos(photos.slice(1)));
        dispatch(setAccessToken(parsedHash.access_token));
        dispatch(setUserId(parsedHash.user_id));
        window.location.hash = '';
      });
    }
  }
  render() {
    const redirect_uri = 'http://localhost:8000/';
    return (
      <div className="main_container">
        <PageHeader title={'Photo Viewer App'} />
        <Auth redirect_uri={redirect_uri} scope={'photos'} />
        <CarouselContainer />
      </div>
    );
  }
}

export default connect()(Main);
