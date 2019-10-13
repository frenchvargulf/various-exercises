import React from 'react';

class NewPost extends React.Component {

  loadIPS() {
    return {
      type: ['LOAD','AWESOME','OH_NO'],
      payload: {
        request:{
          url:'/1.1.1.1'
        }
      }
    }
  }


  render() {
    return (
      <div>
        {this.loadIPS}
      </div>
    );
  }
}

export default NewPost;