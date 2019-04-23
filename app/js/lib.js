var msg;
exports.setMsg = function (input) {
    msg = input;
}

exports.getMsg = function () {
    return msg;
}


exports.add = function (x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

exports.ms = minus;