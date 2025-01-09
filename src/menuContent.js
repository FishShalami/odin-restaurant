
function createMenuContent() {
  console.log('we are running create Menu Content')

    const contentContainer = document.querySelector('#content');
    if (!contentContainer) {
        console.error('Error: No element with ID "content" found in the DOM.');
        return;
      }

    const header1 = document.createElement('h1');
    header1.textContent = "Our Cereal Menu";

    const entreeDiv = document.createElement('div');


    const entrees = document.createElement('h2');
    entrees.textContent = "Cereal Entrees";

    const entree1 = document.createElement('h3');
    entree1.textContent = 'Cinnamon Toast Crunch';

    const entree1Desc = document.createElement('p');
    entree1Desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi corporis unde eos id ullam quos officia ex sunt sit, necessitatibus soluta nihil temporibus deleniti facere, impedit eligendi tempora error?"



    contentContainer.appendChild(header1);
    contentContainer.appendChild(entreeDiv)
    entreeDiv.appendChild(entrees);
    entreeDiv.appendChild(entree1);
    entreeDiv.appendChild(entree1Desc);

    return contentContainer
}

export default createMenuContent;