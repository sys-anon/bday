/* =========================================================
   BIRTHDAY WEBSITE
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function goTo(page) {

    window.location.href = page;

}


/* =========================================================
   TYPING MESSAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const messageElement =
            document.getElementById(
                "typing-message"
            );


        if (!messageElement) {
            return;
        }


        /*
         * IMPORTANT:
         * The message uses BACKTICKS.
         * This fixes the syntax error
         * from the previous version.
         */

        const message = `**Happy birthday to my favourite person. ❤️**

I don’t think I say it enough, but having you in my life means more to me than I can explain. You’ve seen so many different versions of me, stayed through my moods, listened to all my endless talks, and somehow still choose to be here. 😂❤️

Thank you for all the little things you do, for the comfort you give me without even trying, and for all the memories that are so special simply because they’re with you.

I’m so proud of the person you are, and I genuinely hope this year gives you everything you deserve. I may not always know how to express it perfectly, but I hope you always know how much you mean to me.

**Happy birthday, ADWAITH. 🎂❤️

I’m really, really glad it’s you. 🫶🏻🎂❤️**`;


        let index = 0;


        function typeMessage() {

            if (index < message.length) {

                messageElement.textContent +=
                    message.charAt(index);

                index++;


                setTimeout(
                    typeMessage,
                    25
                );

            }

        }


        setTimeout(
            typeMessage,
            700
        );

    }
);


/* =========================================================
   CAKE CELEBRATION
========================================================= */

function celebrate() {


    const scene =
        document.querySelector(
            ".cake-scene"
        );


    const button =
        document.querySelector(
            ".celebrate-btn"
        );


    const message =
        document.getElementById(
            "cutMessage"
        );


    if (!scene) {
        return;
    }


    /*
     * Prevent multiple clicks.
     */

    if (
        scene.classList.contains(
            "cake-cutting"
        )
    ) {

        return;

    }


    /*
     * Start cake cutting.
     */

    scene.classList.add(
        "cake-cutting"
    );


    /*
     * Change button text.
     */

    if (button) {

        button.classList.add(
            "clicked"
        );

        button.innerHTML =
            "Cutting the Cake... 🎂";

    }


    /*
     * Change message.
     */

    if (message) {

        message.textContent =
            "Make a wish... 🖤✨";

        message.style.color =
            "#ff9fba";

    }


    /*
     * Wait 5 seconds.
     *
     * This matches the longer
     * CSS cake animation.
     */

    setTimeout(
        function () {


            startConfetti();


            if (button) {

                button.innerHTML =
                    "Cake Cut! ❤️";

            }


            if (message) {

                message.textContent =
                    "Wish made! Happy Birthday! 🎉❤️";

            }


        },
        5000
    );

}


/* =========================================================
   CONFETTI
========================================================= */

function startConfetti() {


    const canvas =
        document.getElementById(
            "confetti"
        );


    if (!canvas) {
        return;
    }


    const ctx =
        canvas.getContext("2d");


    /*
     * Canvas size.
     */

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const pieces = [];


    /*
     * Confetti colors.
     */

    const colors = [

        "#ff5c8a",
        "#ff9fba",
        "#9b6cff",
        "#ffd166",
        "#ffffff",
        "#6ee7ff"

    ];


    /*
     * Create 250 confetti pieces.
     */

    for (
        let i = 0;
        i < 250;
        i++
    ) {


        pieces.push({

            x:
                Math.random() *
                canvas.width,


            y:
                -Math.random() *
                canvas.height,


            size:
                Math.random() * 8 + 4,


            speed:
                Math.random() * 4 + 3,


            rotation:
                Math.random() * 360,


            rotationSpeed:
                Math.random() * 8 - 4,


            gravity:
                Math.random() * 0.08 + 0.04,


            color:
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ],


            opacity: 1

        });

    }


    /*
     * Draw confetti.
     */

    function drawConfetti() {


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        let activePieces = 0;


        pieces.forEach(
            function (piece) {


                /*
                 * Movement.
                 */

                piece.y +=
                    piece.speed;


                piece.speed +=
                    piece.gravity;


                piece.rotation +=
                    piece.rotationSpeed;


                piece.opacity -=
                    0.002;


                /*
                 * Check whether
                 * piece is still visible.
                 */

                if (
                    piece.y <
                    canvas.height + 50 &&
                    piece.opacity > 0
                ) {

                    activePieces++;

                }


                /*
                 * Draw piece.
                 */

                ctx.save();


                ctx.translate(
                    piece.x,
                    piece.y
                );


                ctx.rotate(
                    piece.rotation *
                    Math.PI /
                    180
                );


                ctx.globalAlpha =
                    Math.max(
                        piece.opacity,
                        0
                    );


                ctx.fillStyle =
                    piece.color;


                ctx.fillRect(

                    -piece.size / 2,

                    -piece.size / 2,

                    piece.size,

                    piece.size

                );


                ctx.restore();

            }
        );


        /*
         * Continue animation.
         */

        if (
            activePieces > 0
        ) {

            requestAnimationFrame(
                drawConfetti
            );

        } else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        }

    }


    drawConfetti();

}


/* =========================================================
   CONFETTI RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {


        const canvas =
            document.getElementById(
                "confetti"
            );


        if (canvas) {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;

        }

    }
);