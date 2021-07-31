'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARScene,
  ViroMaterials,
 ViroAmbientLight,
  ViroSpotLight,
   ViroDirectionalLight,
   ViroAnimations,
   ViroParticleEmitter,
   ViroSurface,
  Viro3DObject,
   ViroNode,
   ViroScene,
   Viro360Image,
   ViroText,
   ViroBox,
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {
      text : "Hello naruto!",
    }

    // bind this to the class functions
    this._onBoxHover = this._onBoxHover.bind(this);
    this._showHelloBeachScene = this._showHelloBeachScene.bind(this);
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/360_park.jpg')} />
        <ViroText text={this.state.text} width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />

        <ViroBox position={[0, -1, -2]} scale={[.5,.5,.2]} materials={["grid"]} onHover={this._onBoxHover} onClick={this._showHelloBeachScene} />
        <ViroAmbientLight color="#FFFFFF" />
        <Viro3DObject source={require('./res/naruto/scene.gltf')}
                    resources={[require('./res/naruto/textures/C__Users_Loris_Desktop___ntxr00_0_baseColor.png'),
                                require('./res/naruto/textures/C__Users_Loris_Desktop___ntxr00_baseColor.png'),
                                require('./res/naruto/textures/Material__3_baseColor.png'),
                                require('./res/naruto/textures/Material__3_emissive.png'),
                                require('./res/naruto/scene.bin')]}
                    position={[0.0, -5.0, -12.1]}
                    rotation={[0, 0, 0]}
                    scale={[0.1, 0.1, 0.1]}
                    onLoadStart={this._onLoadStart}
                    onLoadEnd={this._onLoadEnd}
                    onError={this._onError}   
                    type="GLTF"/>
              
      </ViroScene>
    );
  }

  _onBoxHover(isHovering) {
    let text = isHovering ? "click Box!" : "Hello naruto!";
    this.setState({
      text
    });
  }

  _showHelloBeachScene() {
    this.props.sceneNavigator.push({scene:require("./HelloBeachScene.js")});
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

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

module.exports = HelloWorldScene;