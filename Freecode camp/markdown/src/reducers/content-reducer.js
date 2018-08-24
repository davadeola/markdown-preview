import marked from 'marked';

const contentReducer =(state='', action)=>{
  let newState;

  switch (action.type) {
    case 'MARKUP_CONTENT':
      var markUp = marked(action.content)
      newState = markUp;
      return newState;
    default:
      return state;
  }
}

export default contentReducer;
