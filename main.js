var canvas = new fabric.Canvas('myCanvas');

document.body.style.overflow = "hidden";
player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var block_image = "";
var player_image = "";

function player_image_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_image = Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_image);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image = Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_Pressed = e.keyCode;
    if (key_Pressed == '38') { up(); console.log("up"); } if (key_Pressed == '40') { down(); console.log("down"); } if (key_Pressed == '37') { left(); console.log("left"); } if (key_Pressed == '39') { right(); console.log("right"); }
    if (key_Pressed == '70')//F
    {
        new_image('thor_face.png');
        console.log("Thor's Face");
    }
    if (key_Pressed == '66')//B
    {
        new_image('hulkd_body.png');
        console.log("Hulk's Body");
    }
    if (key_Pressed == '76')//L
    {
        new_image('spiderman_left_hand.png');
        console.log("Spiderman's Left Hand");
    }
    if (key_Pressed == '82')//R
    {
        new_image('ironman_right_hand.png');
        console.log("Ironman's Right Hand");
    }
    if (key_Pressed == '68')//D
    {
        new_image('hulk_legs.png');
        console.log("Hulk's Legs");
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log("block height= " + block_height);
        console.log("When up arrow key is pressed, X=" + player_x + ",Y= " + player_y);
        canvas.remove(player_image);
        player_image_update();
    }
}
function down() {
    if (player_y <= 450) {
        player_y = player_y + block_height;
        console.log("block height= " + block_height);
        console.log("When down arrow key is pressed, X=" + player_x + ",Y= " + player_y);
        canvas.remove(player_image);
        player_image_update();
    }
}
function left() {
    if (player_x >= 0) {
        player_x = player_x - block_width;
        console.log("block width= " + block_width);
        console.log("When left arrow key is pressed, X=" + player_x + ",Y= " + player_y);
        canvas.remove(player_image);
        player_image_update();
    }
}
function right() {
    if (player_x <= 850) {
        player_x = player_x + block_width;
        console.log("block width= " + block_width);
        console.log("When right arrow key is pressed, X=" + player_x + ",Y= " + player_y);
        canvas.remove(player_image);
        player_image_update();
    }
}