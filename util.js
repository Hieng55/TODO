const $ = function (selector) {
    return document.querySelector(selector);
};
const localStorageItem = function (method, key, array) {
    return localStorage[method](key, arrToString(array));
};
const getLocalItem = function (method, key) {
    return eval(localStorage[method](key));
};
const inner = function (selector, value) {
    return ($(selector).innerHTML = value);
};
const updateValue = function () {
    return ($("input").value = "");
};
const toggleClass = function (selector, status, setClass) {
    return $(selector).classList[status](setClass);
};
const arrToString = function (array) {
    return (
        "[" +
        array
            .map(function (item) {
                return '{"id":' + item.id + ',"course":"' + item.course + '"}';
            })
            .join(",") +
        "]"
    );
};