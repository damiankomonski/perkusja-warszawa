import * as bootstrap from 'bootstrap';
import "./../scss/style.scss";
import Velocity from "velocity-animate";
import HTML_index from "./../index.html";
import HTML_contact from "./../kontakt.html";

(() => {
    function navIconAnimation(){
        let McButton = document.querySelector("[data=hamburger-menu]");
        let McBar1 = McButton.querySelector("span:nth-child(1)");
        let McBar2 = McButton.querySelector("span:nth-child(2)");
        let McBar3 = McButton.querySelector("span:nth-child(3)");
        const mobileNav = document.querySelector(".mobile-nav");

        McButton.addEventListener("click", () => {
            McButton.classList.toggle("active");
            mobileNav.classList.toggle("active");
            
            if (McButton.classList.contains("active")) {
                Velocity(McBar1, { top: "50%" }, {duration: 200, easing: "swing"});
                Velocity(McBar3, { top: "50%" }, {duration: 200, easing: "swing"});
                Velocity(McBar3, {rotateZ: "90deg"}, {duration: 800, delay: 200, easing: [500,20] });
                Velocity(McButton, {rotateZ: "135deg"}, {duration: 800, delay: 200, easing: [500,20] });
                // McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
                // McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"}).velocity({transform: "rotateZ(90deg)"}, {duration: 800, delay: 200, easing: [500,20] });
                // McButton.velocity({transform: "rotateZ(135deg)"}, {duration: 800, delay: 200, easing: [500,20] });
            } else {
                // McButton.velocity("reverse");
                Velocity(McButton, "reverse");
                Velocity(McBar3, {rotateZ: "0deg"}, {duration: 800, easing: [500,20] })
                Velocity(McBar3, { top: "100%" }, {duration: 200, easing: "swing"});
                Velocity(McBar1, "reverse", {delay: 800});
                // McBar3.velocity({transform: "rotateZ(0deg)"}, {duration: 800, easing: [500,20] })
                        // .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
                // McBar1.velocity("reverse", {delay: 800});
            }
        });
    }

    navIconAnimation();
})();

