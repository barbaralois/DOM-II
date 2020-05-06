// Targeting the blocks
let container = document.querySelector('.blocks');
let boxes = document.querySelectorAll('.block');

let individualBoxes = boxes.forEach((box) => {
  box.addEventListener('click', function (event) {
    container.insertBefore(box, boxes[0]);
    boxes = document.querySelectorAll('.block');
  });
});
