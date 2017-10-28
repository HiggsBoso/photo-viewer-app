export var setPhotos = (photos) => {
  return {
    type: 'SET_PHOTOS',
    photos
  };
}

export var setUserId = (userId) => {
  return {
    type: 'SET_USER_ID',
    userId
  };
}

export var setAccessToken = (access_token) => {
  return {
    type: 'SET_ACCESS_TOKEN',
    access_token
  };
}
