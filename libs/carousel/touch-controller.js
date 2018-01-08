function touchEventStart(e) {
    console.log(e.touches[0]);
}

function touchEventMove(e) {
    console.log(e.touches[0]);
}

function touchEventEnd(e) {
    console.log(e.touches[0]);
}


module.exports = {
    touchEventStart,
    touchEventMove,
    touchEventEnd
};