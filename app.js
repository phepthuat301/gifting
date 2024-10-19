let countHeartOver = 0;
let totalHearts = 84; // Total number of hearts

let contentHTML = '';
for (let i = 0; i < totalHearts; i++) {
    contentHTML += `<div id="${i}" class="TwitterHeart"></div>`;
}
document.body.innerHTML += contentHTML;

window.addEventListener("mouseover", HeartAnimation);

function HeartAnimation(event) {
    if (event.target.classList.contains('TwitterHeart')) { // Check if mouse is over a heart
        var targetHeart = event.target;
        if (!targetHeart.classList.contains('lit')) { // Only count if the heart hasn't been "lit"
            countHeartOver++;
            targetHeart.classList.add('lit'); // Mark heart as "lit"
        }

        var heartStateCounter = 1;

        // Create a simple animation effect by scaling the heart
        targetHeart.style.transform = 'scale(1.5)'; // Scale up on hover

        var timer = setInterval(function () {
            if (heartStateCounter != 29) {
                targetHeart.style.backgroundPosition = -100 * heartStateCounter++ + 'px 0';
            } else {
                clearInterval(timer);
            }
        }, 100);

        // Reset the heart style after the animation
        setTimeout(function () {
            targetHeart.style.transform = 'scale(1)'; // Scale back to normal
        }, 500);

        // Check if all hearts have been hovered
        if (countHeartOver === totalHearts) {
            setTimeout(function () {
                // Redirect to another page after all hearts are lit
                window.location.href = 'greet.html'; // Replace with your URL
            }, 1000); // Delay the redirect for 1 second
        }
    }
}
