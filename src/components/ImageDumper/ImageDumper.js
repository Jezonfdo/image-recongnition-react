import React from 'react';
import './ImageDumper.css';
import Tilt from 'react-tilt'
import 'tachyons'

function ImageDumper() {
  return (
    <div className="ImageDumper ma4">
    	<span id="imgbb">
			<a href="https://imgbb.com/" target="_blank" rel="noreferrer">
				<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 200, width: 150 }} >
					<button className="Tilt-inner" type="button">Create a link for your image</button>
					<img src="https://i.ibb.co/DLHkq7H/imgbb-logo.jpg" alt="imgbb-logo" border="0" width='100%' />
				</Tilt>
			</a>
		</span>
    </div>
  );
}

export default ImageDumper;
