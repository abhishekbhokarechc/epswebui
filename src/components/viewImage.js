import React, {useState} from 'react';
import './viewImage.scss';
import rxImage from '../assets/images/rx-image.jpg';
import rxBlue from '../assets/images/rx-blue.jpg';
import rxPink from '../assets/images/rx-pink.jpg';

function ViewImage() {

    const [rotateDegree, updateDegree] = useState(0);
    const [imgZoom, updateZoom] = useState(100);
    const [imgIndex, updateImgIndex] = useState(0);

    const imgArray = [
        {
            name : 'default',
            src : rxImage
        },
        {
            name : 'blue',
            src : rxBlue
        },
        {
            name : 'pink',
            src : rxPink
        }
    ];

    const rotateImg = (e) => {
        (e == 'r') ? updateDegree(rotateDegree + 90) : updateDegree(rotateDegree - 90);
    }

    const zoomImg = (e) => {
        if(e == 'i' && imgZoom < 180){ updateZoom(imgZoom + 20);} 
        if(e == 'o' && imgZoom > 100){updateZoom(imgZoom - 20);}
    }

    const moveImg = (e) => {
        if(e == 'n'){updateImgIndex(imgIndex + 1);}
        if(e == 'p'){updateImgIndex(imgIndex - 1);}
    }

    return (
        <div className="imageViewerContainer">
            <button onClick={() => rotateImg('r')}>Rotate Right</button>
            <button onClick={() => rotateImg('l')}>Rotate Left</button>
            <button disabled={(imgZoom == 100)} onClick={() => zoomImg('o')}>Zoom Out</button>
            <button disabled={(imgZoom == 180)} onClick={() => zoomImg('i')}>Zoom In</button>
            <button disabled={(imgIndex == 0)} onClick={() => moveImg('p')}>Prev</button>
            <span>{imgIndex + 1} / {imgArray.length}</span>
            <button disabled={(imgIndex == imgArray.length - 1)} onClick={() => moveImg('n')}>Next</button>
            
            <div className="imageContainer">
                {imgArray.map((img, i) => {
                    return (
                        <img style={{transform: `rotate(${rotateDegree}deg)`,
                        width: `${imgZoom}%`, 
                        display: (imgIndex == i) ? 'block' : 'none'  }} 
                        src={img.src} />
                    )
                })} 
            </div>
        </div>
    )
}

export default ViewImage;
