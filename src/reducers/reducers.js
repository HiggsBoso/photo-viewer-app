export let userIdReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return action.userId;
    default:
      return state;
  }
}

export let accessTokenReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return action.access_token;
    default:
      return state;
  }
}

export let photosReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return [
        ...action.photos
      ];
    default:
      return state;
  }
}
