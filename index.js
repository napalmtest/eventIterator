module.exports = eventIterator = function (data) {
    console.log('Iterating Events');
    data.events.forEach(function (event) {
        eventHandler(event);
    });
}