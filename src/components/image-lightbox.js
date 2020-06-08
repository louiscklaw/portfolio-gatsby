import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const defaultState = {isOpen: false}

function ImageLightBox(props) {
  // Declare a new state variable, which we'll call "count"
  const [is_open, updateIsOpen] = React.useState();
  return (
    <div>

      <img
        src={props.src}
        onClick={( )=>{ updateIsOpen(true) }}
        style={{cursor: "pointer",...props.style}}
        alt={props.alt}
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
