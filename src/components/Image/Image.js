import React from 'react';
import './Image.css';

function Image({ imageURL, box }) {
  return (
    <div className="Image" id="Image">
    	<div className="polaroid">
		<img id="inputimage" src={imageURL} alt="No Image Detected" width="500" height="auto" />
		<div className="bound-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
		</div>
    </div>
  );
}

export default Image;