import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const loadParticles = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        fpsLimit: 60,
        detectRetina: true,

        background: {
          color: {
            value: "#000000",
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 190,
              links: {
                opacity: 0.55,
              },
            },
          },
        },

        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 900,
            },
          },

          color: {
            value: "#ffffff",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.18,
              max: 0.5,
            },
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          links: {
            enable: true,
            distance: 175,
            color: "#ffffff",
            opacity: 0.16,
            width: 1,
          },

          move: {
            enable: true,
            speed: 0.38,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBg;