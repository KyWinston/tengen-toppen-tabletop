function confirmPiece() {
  let modal = new bootstrap.Modal("#modalForm");
  switch (modal_state) {
    case 0:
      let card_name = $('input#cardName').val();
      let main_text = $('#mainText').val();
      let pips = `${$('input#pipTL').val()}|${$('input#pipTR').val()}|${$('input#pipBR').val()}|${$('input#pipBL').val()}`;
      console.log(card_name, pips, main_text);
      setup_json.cards.push({ card_name, pips, main_text });
      localStorage.setItem('setup', JSON.stringify(setup_json));
      break
    case 1:
      let deck_name = $('input#deckName').val();
      let card_back = $('input#deckBack').val();
      let dimensions = `${$('input#deckWidth').val()} | ${$('input#deckWidth').val()}`;
      console.log(deck_name, card_back, dimensions);
      setup_json.decks.push({ deck_name, card_back, dimensions });
      localStorage.setItem('setup', JSON.stringify(setup_json));
      break;
  }
  modal.hide();
}


function createPiece(type) {
  let modal = new bootstrap.Modal("#modalForm");

  switch (type) {
    case 0:
      modal_state = 0;
      $("#modalForm > .modal-dialog > .modal-content > .modal-header > .modal-title").html('<p>Create a new card</p>');
      $("#modalForm > .modal-dialog > .modal-content > .modal-body").html(card_form_html);
      $("#modalForm > .modal-dialog > .modal-content > .modal-footer > .btn-primary").html('Create card');
      break;
    case 1:
      modal_state = 1;
      $("#modalForm > .modal-dialog > .modal-content > .modal-header > .modal-title").html('<p>Create a new deck</p>');
      $("#modalForm > .modal-dialog > .modal-content > .modal-body").html(deck_form_html);
      $("#modalForm > .modal-dialog > .modal-content > .modal-footer > .btn-primary").html('Create deck');
      break;
  }
  modal.show();

}

/*
 <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Card Name</span>
      </div>
      <input type="text" class="form-control" id="cardName" aria-describedby="cardName" placeholder="Enter name">
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Corner Pips</span>
      </div>
      <input class="form-control" type="text" id="pipTL" placeholder="top left">
      <input class="form-control" type="text" id="pipTR" placeholder="top right">
      <input class="form-control" type="text" id="pipBR" placeholder="bottom right">
      <input class="form-control" type="text" id="pipBL" placeholder="bottom left">
    </div>
    <hr>
    <div clas="input-group mb-12">
      <div class="input-group-prepend">
        <label class="input-group-text" for="deckSelector">Options</label>
      </div>
      <select class="custom-select" id="deckSelector"></select>
    </div>
    <div clas="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">main card text</span>
      </div>
      <textarea id="mainText">Write your card effects and flavour text here</textarea>
    </div>

<div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">Precious Bauble</h5>
            </div>
            <img class="card-img-top" src="https://placehold.co/600x400" alt="Card image cap">

            <div class="card-body">

                <p class="card-text">Destroy this treasure when it lands or hits something.</p>
            </div>
            <div class="card-footer">
                <div class="card-text row justify-content-between">
                    <p class="badge col-sm-3 bg-warning text-dark">40</p>
                    <p class="badge col-sm-3 bg-primary">4</p>
                </div>
            </div>
        </div> */
