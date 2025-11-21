let card_form_html = `<div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text">Card Name</span>
    </div>
    <input type="text" class="form-control" id="cardName" value="" aria-describedby="cardName" placeholder="Enter name">
</div>

<div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text">Corner Pips</span>
    </div>
    <input class="form-control" type="text" id="pipTL" value="" placeholder="top left">
    <input class="form-control" type="text" id="pipTR" value="" placeholder="top right">
    <input class="form-control" type="text" id="pipBR" value="" placeholder="bottom right">
    <input class="form-control" type="text" id="pipBL" value="" placeholder="bottom left">
</div>
<hr>

<div clas="input-group">
    <div class="input-group-prepend">
        <label class="input-group-text" for="mainText">main card text</label>
    </div>
    <textarea class="form-control mb-9" id="mainText">Write your card effects and flavour text here</textarea>
</div>`;