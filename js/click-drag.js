let draggableElements = $('.draggable');
let isDragging = false;
let offsetX, offsetY;



draggableElements.on('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
    element.style.cursor = 'grabbing';
});

draggableElements.on('mousemove', (e) => {
    if (!isDragging) return;

    element.style.left = (e.clientX - offsetX) + 'px';
    element.style.top = (e.clientY - offsetY) + 'px';
});

draggableElements.on('mouseup', () => {
    isDragging = false;
    element.style.cursor = 'grab';
});



function updateDraggables(x, y) {
    draggableElements.css({ 'left': x + 'px;', 'top': y + 'px;' });
}