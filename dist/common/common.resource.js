"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = void 0;
const client = require("@sendgrid/client");
var resource;
(function (resource) {
    let Mail;
    (function (Mail) {
        function send(model) {
            const data = {
                method: "POST",
                url: "v3/mail/send",
                body: model,
            };
            return new Promise((resolve, reject) => {
                client.request(data, (err, resp) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(resp);
                    }
                });
            });
        }
        Mail.send = send;
    })(Mail = resource.Mail || (resource.Mail = {}));
})(resource = exports.resource || (exports.resource = {}));
