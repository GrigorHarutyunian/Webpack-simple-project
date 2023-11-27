import plant1 from '../images/pngegg (1).png';
import plant2 from '../images/pngegg (2).png';
import plant3 from '../images/pngegg (3).png';
import plant4 from '../images/pngegg (4).png';

export function createGameSection({ element, className }) {
  const gameSection = document.createElement(element);
  gameSection.setAttribute("class", className);
  gameSection.setAttribute('id', 'game');

  const outerWrapper = document.createElement('div');
  outerWrapper.classList.add('aquarium__outer-wrapper');

  // Create plant elements
  for (let i = 1; i <= 4; i++) {
    const plant = createPlantElement(i);
    outerWrapper.appendChild(plant);
  }

  // Create bubble elements
  for (let i = 1; i <= 15; i++) {
    const bubble = createBubbleElement(i);
    outerWrapper.appendChild(bubble);
  }

  // Create fish element
  const fish = createFishElement();

  // Create game start element
  const gameStart = document.createElement('div');
  gameStart.classList.add('aquarium__game-start');

  // Create game start title element
  const title = document.createElement('div');
  title.classList.add('aquarium__game-start-title');
  title.textContent = 'Aquasqape Game';

  // Create game start button
  const startButton = document.createElement('button');
  startButton.classList.add('aquarium__game-start-button');
  startButton.textContent = 'Start To Play';

  // Append title and start button to game start element
  gameStart.appendChild(title);
  gameStart.appendChild(startButton);

  // Append game start element to outer wrapper
  outerWrapper.appendChild(gameStart);

  outerWrapper.appendChild(fish);

  gameSection.appendChild(outerWrapper);

  // Helper functions
  function createPlantElement(index) {
    const plant = document.createElement('div');
    plant.classList.add('aquarium__plant', `aquarium__plant--${index}`);

    const plantImg = document.createElement('img');

    const plantImages = [plant1, plant2, plant3, plant4];
    plantImg.src = plantImages[index - 1]; // Adjust index to match array indexing
    plantImg.alt = `plant ${index}`;
    plant.appendChild(plantImg);

    return plant;
  }

  function createBubbleElement(index) {
    const bubble = document.createElement('div');
    bubble.classList.add('aquarium__bubble', `aquarium__bubble--${index}`);

    const bubbleDot = document.createElement('div');
    bubbleDot.classList.add('aquarium__bubble-dot');
    bubble.appendChild(bubbleDot);

    return bubble;
  }

  function createFishElement() {
    const fishBody = document.createElement('div');
    fishBody.classList.add('aquarium__fish-body');

    const fishWhole = document.createElement('div');
    fishWhole.classList.add('aquarium__fish-whole');

    const fishTopFin = document.createElement('div');
    fishTopFin.classList.add('aquarium__fish-top-fin');

    const fishTailFin = document.createElement('div');
    fishTailFin.classList.add('aquarium__fish-tail-fin');

    const fishBody2 = document.createElement('div');
    fishBody2.classList.add('aquarium__fish-body-2');

    const fishEye = document.createElement('div');
    fishEye.classList.add('aquarium__fish-eye');

    const fishTail1 = document.createElement('div');
    fishTail1.classList.add('aquarium__fish-tail-1');

    const fishTail2 = document.createElement('div');
    fishTail2.classList.add('aquarium__fish-tail-2');

    const fishTail3 = document.createElement('div');
    fishTail3.classList.add('aquarium__fish-tail-3');

    const fishTail4 = document.createElement('div');
    fishTail4.classList.add('aquarium__fish-tail-4');

    // Append elements to build the fish structure
    fishWhole.appendChild(fishTopFin);
    fishWhole.appendChild(fishTailFin);
    fishBody2.appendChild(fishEye);
    fishBody2.appendChild(fishTail1);
    fishBody2.appendChild(fishTail2);
    fishBody2.appendChild(fishTail3);
    fishBody2.appendChild(fishTail4);
    fishWhole.appendChild(fishBody2);
    fishBody.appendChild(fishWhole);

    // Add click event listener to the fish element
    fishBody.addEventListener('click', function (event) {
      const fishOffsetLeft = this.offsetLeft;
      const aquariumOffsetLeft = outerWrapper.offsetLeft;
      const aquariumWidth = outerWrapper.clientWidth;
      const fishWidth = this.clientWidth;

      const minLeftCoordinate = aquariumOffsetLeft;
      const maxLeftCoordinate = aquariumWidth - fishWidth;
      const leftCoordinate = Math.floor(Math.random() * (maxLeftCoordinate - minLeftCoordinate + 1)) + minLeftCoordinate / 2;

      if (fishOffsetLeft > leftCoordinate) {
        // If the fish is moving to the left
        this.style.transform = 'rotateY(180deg)';
      } else {
        // If the fish is moving to the right
        this.style.transform = 'rotateY(0)';
      }

      this.style.left = leftCoordinate + 'px';
      this.style.top = Math.floor(Math.random() * (outerWrapper.clientHeight - this.clientHeight)) + 'px';
    });

    return fishBody;
  }

  // Add click event listener to the start button
  startButton.addEventListener('click', () => {
    gameStart.style.transform = 'translateY(-100%)';
  });

  return gameSection;
}
