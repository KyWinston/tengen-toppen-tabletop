// const socket = new WebSocket('wss://your-websocket-server.com/path');
// socket.onopen = (event) => {
//     console.log('WebSocket connection opened:', event);
//     socket.send('Hello server!'); // Send a message upon connection
// };

// socket.onmessage = (event) => {
//     console.log('Message from server:', event.data);
// };

// socket.onclose = (event) => {
//     console.log('WebSocket connection closed:', event);
// };

// socket.onerror = (error) => {
//     console.error('WebSocket error:', error);
// };

let modal_state = 0;
let modal_type = 0;
let setup_json = {
    cards: [],
    decks: [],
    board: { src: "", pan: [0, 0], zoom: 0 },
    tiles: [],
    counters: [],
    figures: []
}

function getStorage() {
    let setup = JSON.parse(localStorage.getItem('setup'));
    if (setup) {
        setup_json = setup;
    }
}