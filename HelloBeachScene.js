'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  Viro360Image,
  ViroImage,
  ViroAnimations,
  Viro3DObject,
  ViroText,
  ViroAmbientLight,
} from 'react-viro';

ViroAnimations.registerAnimations({
  loopRotate:{properties:{rotateY:"+=45"}, duration:1000},
});

export default class HelloBeachScene extends Component {
  constructor() {
    super();
  
    this.state = {
      text : "Hello World!",
    } // initialize state
  
    this._showHelloWorldScene = this._showHelloWorldScene.bind(this);
  }
  
  render() {
    return (
      <ViroScene onClick={this._showHelloWorldScene}>
        <Viro360Image source={require('./res/guadalupe_360.jpg')} />
        <ViroImage source={require('./res/myimage.jpg')}
                   position={[0, -1, -12]}    
                   scale={[0.1, 0.1, 0.1]}
                   animation={{name:'loopRotate',run:true,loop:true}}/>
      <ViroAmbientLight color="#FFFFFF" />
      <Viro3DObject source={require('./res/naruto/scene.gltf')}
                    resources={[require('./res/naruto/textures/C__Users_Loris_Desktop___ntxr00_0_baseColor.png'),
                                require('./res/naruto/textures/C__Users_Loris_Desktop___ntxr00_baseColor.png'),
                                require('./res/naruto/textures/Material__3_baseColor.png'),
                                require('./res/naruto/textures/Material__3_emissive.png'),
                                require('./res/naruto/scene.bin')]}
                    position={[2.2, 5.0, 2.1]}
                    rotation={[0, -45, 0]}
                    scale={[1.1, 1.1, 1.1]}
                    onLoadStart={this._onLoadStart}
                    onLoadEnd={this._onLoadEnd}
                    onError={this._onError}   
                    type="GLTF"/>
      
             
      
      </ViroScene>
    );
  }

  _showHelloWorldScene() {
    this.props.sceneNavigator.pop();
  }

  _onLoadStart() {
    console.log("GLTF loading has started");
}

_onLoadEnd() {
    console.log("GLTF loading has finished");
}

_onError(event) {
    console.log("GLTF loading failed with error: " + event.nativeEvent.error);
}

}


module.exports = HelloBeachScene;
