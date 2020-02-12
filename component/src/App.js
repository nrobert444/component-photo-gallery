import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';


export default class App extends Component {
  state = { selected: null };
  
  render() {
    const allImages = images;
    const filteredImages = allImages.filter(image => {
      if (!this.state.selected) return true;

      return image.keyword === this.state.selected;
    })
      // .map(image => <ImageItem image={image} />);

    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };
  
    const keywords = allImages.map((item) => {
      return <option value ={item.keyword}>{item.keyword}</option>
    })
    // const uniqueKeyWords = [...new Set(keywords)];

    return (
      <div className="App">
        <Header />
        <main>
          <section>
            <select onChange={handleChange}>
              <option value="" defaultValue>
                All Creatures
              </option>
              {keywords}
            </select>
          </section>
          <section>
            <ImageList images={filteredImages} />
          </section>
        </main>
      </div>
    );
  }
}
  
