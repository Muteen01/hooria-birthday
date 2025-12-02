document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const cursor = document.querySelector('.cursor');
    const greetingDiv = document.querySelector('.greeting');
    
    // --- Custom Cursor Animation (using GSAP for smooth tracking) ---
    document.addEventListener('mousemove', (e) => {
        // Use GSAP to animate the cursor position
        gsap.to(cursor, {
            x: e.clientX - 15,
            y: e.clientY - 15,
            duration: 0.2,
            ease: "power2.out"
        });
    });

    // --- Typewriter Effect for Greeting ---
    const greetingText = "You're invited to a special birthday surprise! 🎁";
    
    // GSAP Timeline for smooth, controlled animations
    const tl = gsap.timeline();

    tl.from('h1', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    })
    .to(greetingDiv, {
        duration: greetingText.length * 0.05,
        text: {
            value: greetingText,
            speed: 1 // Slower typing speed
        },
        ease: "none",
        onComplete: () => {
            // Once typing is complete, show the button
            gsap.to(ctaButton, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });
        }
    }, "-=0.5"); // Start typing slightly before H1 animation ends

    // Hide button initially and scale it down
    gsap.set(ctaButton, {
        opacity: 0,
        y: 20,
        scale: 0.8
    });

    // --- CTA Button Functionality ---
    ctaButton.addEventListener('click', () => {
        // Button click animation
        gsap.to(ctaButton, {
            scale: 0.9,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });
        
        // Smooth transition to the next page
        gsap.to(['body', cursor], {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                // Navigate to the next page: cause.html
                window.location.href = 'cause.html'; 
            }
        });
    });
});