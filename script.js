document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');
    const question = document.querySelector('.question');

    let size = 16;
    let messages = [
        "<span style='color:red;'>No! don't click that! 😠</span>",
        "<span style='color:white;'>Wrong answer, bossing! ❌</span>",
        "<span style='color:red;'>Come on, say yes! 😤</span>",
        "<span style='color:white;'>:C :C :C :C :C :C :C :C :C</span>",
        "<span style='color:red;'>Hey, ur not listening 👂</span>",
        "<span style='color:white;'>:C :C :C :C :C :C :C :C :C</span>",
    ];
    let messageIndex = 0;

    noButton.addEventListener('click', () => {
        if (size < 80) {  
            size += 5;
            yesButton.style.fontSize = `${size}px`;
            yesButton.style.transform = `scale(${size / 16})`;
            yesButton.style.boxShadow = "0 0 20px red";
        }

        if (question) {
            question.innerHTML = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length;
        }
    });

    yesButton.addEventListener('click', () => {
        question.innerHTML = "<span style='color:red; font-size: 24px;'> Sorry sa lahat ng masamang nangyari sa atin. I never meant to hurt our bond, relationship, and especially you, and it breaks my heart knowing that I did. I can't imagine my days without you, so let’s give this a chance para maayos na tayo. I’ll do whatever it takes to make things right. Kailangan kita, and mahal na mahal kita. Please be my valentine.</span>";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });

    function startHeartsAnimation() {
        const heartContainer = document.createElement('div');
        heartContainer.classList.add('hearts-container');
        document.body.appendChild(heartContainer);

        for (let i = 0; i < 30; i++) {
            let heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
            heartContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }
});

function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    
    // Random positioning and animation duration
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 

    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Generate hearts at intervals
setInterval(createFloatingHeart, 200);
