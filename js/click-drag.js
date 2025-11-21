const draggableElement = document.getElementsByClassName('draggable');
let isDragging = false;
let offsetX, offsetY;

draggableElement.forEach(element => {

    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggableElement.offsetLeft;
        offsetY = e.clientY - draggableElement.offsetTop;
        draggableElement.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        draggableElement.style.left = (e.clientX - offsetX) + 'px';
        draggableElement.style.top = (e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        draggableElement.style.cursor = 'grab';
    });
});