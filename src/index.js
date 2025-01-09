console.log('Hello there!');
import "./global.css";
import createHomeContent from "./homeContent.js";
import createMenuContent from "./menuContent.js";
import emptyContent from "./emptyContent.js";
// createMenuContent();

window.addEventListener("load", () => {
    createHomeContent(); 
  });


const navBtns = document.querySelectorAll('.navBtns');

navBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        emptyContent();
        // console.log(this.id);
        if (this.id === 'home') {
            import("./home.css")
                .then (() => {
                    createHomeContent();
            })
        } else if (this.id === 'menu') {
            import("./menu.css")
                .then (() => {
                    createMenuContent();
                });
        } else console.log('Error!');
    });
});




