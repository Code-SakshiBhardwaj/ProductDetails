import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductData from './Utils/ProductData';
import Topbar from './Topbar/Topbar';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  }
  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos })
  }

  onFeatureItemClick = (pos) => {
    this.setState({ currentSelectedFeature: pos })
  }
  shouldComponentUpdate(nextProps, nextState) {
    //console.log('nextState=>', nextState);
    //console.log('currentState=>', this.state)
    console.log('Inside Should Component Update')
    if (nextState.currentPreviewImagePos === this.state.currentPreviewImagePos) {
      return false;
    }
    return true;

  }
  render() {
    console.log('Rendering Appjs');
    return (
      <div className="App">
        <Topbar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
              showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>


        </div>
      </div>
    );
  }


}
export default App;


