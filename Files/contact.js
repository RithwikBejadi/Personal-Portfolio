// Particles.js Configuration for Dynamic Background
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        color: { value: ["#ff1493", "#00ffcc", "#6a0dad"] },
        shape: { type: "circle", stroke: { width: 1, color: "#ffffff" } },
        opacity: { value: 0.8, random: true },
        size: { value: 5, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
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
            grab: { distance: 200, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

// Firebase Configuration and Initialization
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHoaWlTMrs59jQzbnMh6SjRqRuZoo4Sdk",
    authDomain: "portfolio-rithwik.firebaseapp.com",
    projectId: "portfolio-rithwik",
    storageBucket: "portfolio-rithwik.firebasestorage.app",
    messagingSenderId: "974742715478",
    appId: "1:974742715478:web:9c2f812c182a4d53df8ff7",
    measurementId: "G-PJN6E0F1K5"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form Submission Logic
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        // Add contact message to Firestore
        await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            message: message,
            timestamp: new Date() // Add a timestamp
        });
        alert("Message sent successfully!");
        form.reset(); // Reset form fields
    } catch (error) {
        alert("An error occurred while sending your message. Please try again.");
        console.error("Error storing message:", error);
    }
});


import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from './firebaseConfig';
const messagesRef = collection(db, "contacts");
const messagesList = document.getElementById("messages-list");
const messages = await getDocs(messagesRef);
messages.forEach((doc) => {
    const messageData = doc.data();
    const li = document.createElement("li");
    li.textContent = `${messageData.name} (${messageData.email}): ${messageData.message}`;
    messagesList.appendChild(li);
});


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const confirmationMessage = document.getElementById("confirmation-message");

    // Fetch input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        await addDoc(collection(db, "contacts"), {
            name,
            email,
            message,
            timestamp: new Date()
        });

        confirmationMessage.textContent = "Thank you! Your message has been sent successfully.";
        confirmationMessage.style.color = "#00ffcc";
        form.reset(); // Reset form fields
    } catch (error) {
        confirmationMessage.textContent = "Oops! Something went wrong. Please try again.";
        confirmationMessage.style.color = "#ff1493";
        console.error("Error:", error);
    }
});
