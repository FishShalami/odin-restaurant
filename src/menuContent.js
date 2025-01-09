
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
  entreeDiv.className = 'entree-container';

  const entrees = document.createElement('h2');
  entrees.textContent = "Cereal Entrees";

  const entreesData = [
    {
      name: 'Cinammon Toast Crunch',
      description: 'Small squares with cinammon sugar'
    },
    {
      name: 'Frosted Flakes',
      description: 'Corn flakes with sugar'
    },
    {
      name: 'Cocoa Puffs',
      description: 'Corn puff balls with chocolate syrup'
    }
  ];

  const sideDiv = document.createElement('div');
  sideDiv.className = 'sides-container';
  const sides = document.createElement('h2');
  sides.textContent = "Cereal Sides";

  const sidesData = [
    {
      name: 'Chocolate Milk',
      description: '2% Milk with chocolate syrup'
    },
    {
      name: 'Apple Slices',
      description: 'Honeycrisp apples sliced thin'
    },
    {
      name: 'Bananna Slices',
      description: 'Slices of ripe bananna'
    }
  ];

  contentContainer.appendChild(header1);
  contentContainer.appendChild(entreeDiv);
  entreeDiv.appendChild(entrees);

  entreesData.forEach((entree) => {
    const entreeElement = createItem(entree.name, entree.description, 'entree');
    entreeDiv.appendChild(entreeElement);
  });

  contentContainer.appendChild(sideDiv);
  sideDiv.appendChild(sides);

  sidesData.forEach((side) => {
      const sideElement = createItem(side.name, side.description, 'side');
      sideDiv.appendChild(sideElement);
    });

    return contentContainer
}

function createItem(name, description, htmlClass) {
  const entreeDiv = document.createElement('div');
  entreeDiv.className = htmlClass;

  const entreeName = document.createElement('h3');
  entreeName.textContent = name;

  const entreeDesc = document.createElement('p');
  entreeDesc.textContent = description;

  entreeDiv.appendChild(entreeName);
  entreeDiv.appendChild(entreeDesc);

  return entreeDiv;
}

export default createMenuContent;