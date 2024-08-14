function up() {
    moveSound.play();
    inputDir.x = -1;
    inputDir.y = 0;
}

function down() {
    moveSound.play();
    inputDir.x = 1;
    inputDir.y = 0;
}

function left() {
    moveSound.play();
    inputDir.x = 0;
    inputDir.y = -1;
}

function right() {
    moveSound.play();
    inputDir.x = 0;
    inputDir.y = 1;
}