import cerealImage from "./images/benefits-of-cereal.webp";

function createHomeContent() {

    const image = document.createElement("img");
    image.src = cerealImage;
   

    const contentContainer = document.querySelector('#content');
    if (!contentContainer) {
        console.error('Error: No element with ID "content" found in the DOM.');
        return;
      }

    const header1 = document.createElement('h1');
    header1.textContent = "Dave's Cereal Club";

    const paraDescribe = document.createElement('p');
    paraDescribe.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi corporis unde eos id ullam quos officia ex sunt sit, necessitatibus soluta nihil temporibus deleniti facere, impedit eligendi tempora error?"



    contentContainer.appendChild(header1);
    contentContainer.appendChild(paraDescribe);
    contentContainer.appendChild(image);

    return contentContainer
}

export default createHomeContent;