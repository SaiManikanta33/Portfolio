import Particles from "@tsparticles/react";

function ParticleBackground() {

  const options = {
    background: {
      color: {
        value: "#020617",
      },
    },

    fpsLimit: 60,

    particles: {
      color: {
        value: "#00ffff",
      },

      links: {
        color: "#00ffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },

      move: {
        enable: true,
        speed: 2,
      },

      number: {
        value: 60,
      },

      opacity: {
        value: 0.5,
      },

      size: {
        value: 3,
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  );
}

export default ParticleBackground;