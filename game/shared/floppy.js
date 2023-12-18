let container = document.createElement('div');
 let ball = document.createElement('div');
 let body = document.querySelector('body');
 container.className = 'container';
 ball.className = 'ball';
 body.appendChild(container);
 container.appendChild(ball);
 let position = {
 x: 0,
 y: 0,
 speed: 100,
 };

 let positionBlock = {
 x: 0,
 };

 function createBlockElements(num) {
 for (let i = 1; i <= num; i++) {
 let blockContainer = document.createElement('div');
 let blockTop = document.createElement('div');
 let blockBottom = document.createElement('div');
 blockTop.className = 'block';
 blockBottom.className = 'block';
 blockContainer.classList.add('block-container');
 blockContainer.appendChild(blockTop);
 blockContainer.appendChild(blockBottom);
 container.appendChild(blockContainer);
 }

 }
 createBlockElements(6)
 function moveBlocks() {
 positionBlock.x = positionBlock.x + 100;
 const blocks = document.getElementsByClassName("block-container");
 for (let i = 0; i < blocks.length; i++) {
 blocks[i].style.transform = `translate(-${positionBlock.x}px, 0px)`;
 }
 }

 document.addEventListener('keypress', function (event) {
 if (event.keyCode === 119) {
 position.y = position.y - position.speed;
 } else if (event.keyCode === 115) {
 position.y = position.y + position.speed;
 } else if (event.keyCode === 97) {
 position.x = position.x - position.speed;
 } else if (event.keyCode === 100) {
 position.x = position.x + position.speed;
 moveBlocks();
 }
 ball.style.transform = `translate(${position.x}px, ${position.y}px)`;
 });