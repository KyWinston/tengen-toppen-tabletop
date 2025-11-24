let deck_form_html = `<div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text">Deck Name</span>
    </div>
    <input type="text" class="form-control" id="deckName" value="" aria-describedby="deckName" placeholder="Enter the deck name">
</div>

<div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text">Deck Size</span>
    </div>
    <input class="form-control" type="number" id="deckWidth" value="">
    <input class="form-control" type="number" id="deckHeight" value="">

</div>
<hr>

<div clas="input-group">
    <div class="input-group-prepend">
        <label class="input-group-text" for="deckBack">Deck back</label>
    </div>
    <input class="form-control mb-9" id="deckBack"></input>
</div>`;

let deck_place_html = `
    <select type="text" class="form-control" id="deckSelect" value="" aria-describedby="cardName" placeholder="Choose a deck to place on the board">
    </select>`;


let deck_object_html = `<div draggable="true" class="drag card deck" style="width: 18rem;">
            <img class="card-img-top" src="assets/blue_back.png" alt="Card image cap">
        </div>`;