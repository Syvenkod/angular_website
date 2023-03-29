"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(id, userId, date, products) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.products = products;
    }
    return Order;
}());
exports.Order = Order;
