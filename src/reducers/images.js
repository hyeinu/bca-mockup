export default function imagesReducer(state = [], action) {
  switch (action.type) {
  case 'GET_IMAGES':
    return action.payload.images;
    break;
  case 'GET_MORE':
    return Object.assign([], state, state.push(action.payload.images));
    break;
  default:
    return null;
  }
}
