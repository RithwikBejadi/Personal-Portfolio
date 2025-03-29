/* projects.js */
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});


/* projects.js */


