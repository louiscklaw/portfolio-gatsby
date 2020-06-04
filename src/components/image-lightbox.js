import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// import StyleContext from '../contexts/StyleContext'


const defaultState = {isOpen: false}
const TestContext = React.createContext(defaultState)

function ImageLightBox(props) {
  // Declare a new state variable, which we'll call "count"
  const [is_open, updateIsOpen] = React.useState(0);
  return (
    <div>

      <img
        src={props.src}
        onClick={(e)=>{ updateIsOpen(true) }}
        style={{cursor: "pointer",...props.style}}
      />

      { is_open && (
        <Lightbox
          mainSrc={props.src}
          // nextSrc={images[(photoIndex + 1) % images.length]}
          // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => updateIsOpen(false)}
          // onMovePrevRequest={() =>
          //   this.setState({
          //     photoIndex: (photoIndex + images.length - 1) % images.length,
          //   })
          // }
          // onMoveNextRequest={() =>
          //   this.setState({
          //     photoIndex: (photoIndex + 1) % images.length,
          //   })
          // }
        />
      )}
    </div>
  );
}


export default ImageLightBox