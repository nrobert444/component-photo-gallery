import React, { Component } from 'react';
import './App.css';
import images from './data.js';
import Header from './Header.js';
// import ImageItem from './ImageItem.js';
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
  
    const keywords = allImages.map((item, index) => {
      return <option value ={item.keyword} key={index}>{item.keyword}</option>
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
            {/* filter section drop down */}
          </section>
          <section>
            <ImageList images={filteredImages} />
          </section>
        </main>
      </div>
    );
  }
}
  

// export default App;


//   return
//       <div>
//           <!-- Header goes here -->
  
//           <main>
//               <section class="options-section">
//                   <!-- FilterCats goes here -->
//               </section>
//               <section class="list-section">
//                   <!-- CatList goes here -->
//               </section>
//           </main>
//       </div>
//   `;
// 
//  return (
//   <div>
//   <header>
//     <img src="logo192.png" alt="Alchemy Code Lab Logo" />
//     <h1>Famous Cats</h1>
//   </header>

//   <main>
//     <section className="options">
//       <select className="cat-type-filter" onChange={handleChange}>
//         <option value="" defaultValue>
//           All Types
//         </option>
//         <option value="Angora">Angora</option>
//         <option value="Tuxedo">Tuxedo</option>
//         <option value="Orange Tabby">Orange Tabby</option>
//         <option value="Manx">Manx</option>
//       </select>
//     </section>

//     <section className="list-section">
//       <ul className="cats">{catNodes}</ul>
//     </section>
//   </main>
// </div>
// 
// 