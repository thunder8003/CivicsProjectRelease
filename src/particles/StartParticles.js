function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const { height, width } = getWindowDimensions();

const Options = {
    background: {
        color: "#ffffff"
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            resize: true
        },
    },
    particles: {
        color: ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"],
        links: {
            color: "#000000",
            distance: height/10,
            enable: true,
            opacity: .5,
            width: 1,
        },
        collisions: false,
        move: {
            direction: "none",
            enable: "true",
            outMode: "bounce",
            random: true,
            speed: 6,
            straight: false,
        },
        shape: {
            type: ["circle","triangle"]
        },
        size: {
            value: 5,
            random: false,
        },
        number: {
            value: Math.sqrt(width*height)/15
        }
    }
}

export default Options;