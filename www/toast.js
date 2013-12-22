/**
 * @author Tanin Srivaraphong
 *
 * Usage:
 *
 * Toast.longshow("Long Toast);
 * Toast.shortshow("Short Toast");
 */
var exec = require("cordova/exec");

var Toast = function () {};

Toast.prototype.LENGTH_SHORT = 0;
Toast.prototype.LENGTH_LONG = 1;

Toast.prototype._show = function (msg, duration, successCallback, failureCallback) {
    exec(successCallback, failureCallback, 'ToastPlugin', null, [{message:msg, duration:duration}]);
};

//Short Toast
Toast.prototype.shortshow = function (msg, successCallback, failureCallback) {
    this._show(msg, this.LENGTH_SHORT, successCallback, failureCallback);
};

//Long Toast
Toast.prototype.longshow = function (msg, successCallback, failureCallback) {
    this._show(msg, this.LENGTH_LONG, successCallback, failureCallback);
};

var toast = new Toast();
module.exports = toast;

// window.Toast = toast;
