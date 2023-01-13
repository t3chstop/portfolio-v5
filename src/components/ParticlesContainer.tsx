import React from 'react'
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";


export default class ParticlesContainer extends React.PureComponent<IProps> {
    // this customizes the component tsParticles installation
    async customInit(engine: Engine): Promise<void> {
      // this adds the preset to tsParticles, you can safely use the
      await loadTrianglesPreset(engine);
    }
  
    render() {
      const options = {
        preset: "triangles",
      };
  
      return <Particles options={options} init={this.customInit} />;
    }
  }