console.log('Hello there!');
import "./styles.css";
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
            createHomeContent();
        } else if (this.id === 'menu') {
            createMenuContent();
        } else console.log('Error!');
    });
});


// homeBtn.addEventListener('click', function(e) {
//     console.log(this.id);
// });

