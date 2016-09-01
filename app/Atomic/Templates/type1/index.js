import createPreview from 'Editor/creators/createPreview';
import { fromJS } from 'immutable';
export default {
  Preview: createPreview('organism', {
    preview: require('./preview.jpg'), 
    data: fromJS(require('./state.json'))
  })
};
