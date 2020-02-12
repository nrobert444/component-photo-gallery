import React, { Component } from 'react';
import ImageItem from './ImageItem';

class ImageList extends Component {

    render() {
        const images = this.props.images;
        const imageList = images.map((item , index) => {
            return <ImageItem image={item} key={index}/>
        })
        return (
            <ul>
                {imageList}

            </ul>
        )
    }
}
           
export default ImageList;