import React, { Component } from 'react';
                
export default class ImageItem extends Component {
    render() {
        return ( <li>
            <div className="info-container">
                <h2>{this.props.image.keyword}</h2> 
                <p className="creature-type">{this.props.image.title}</p>
                <p className="horn-number">{this.props.image.horns}</p>
            </div>
            <div className="image-container">
                <img
                    src={this.props.image.url}
                    alt={this.props.image.url} />
            </div>
            <p className="description">{this.props.image.description}</p>
        </li>
        );
    }
}

