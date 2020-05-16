"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendGridClient = void 0;
const client_1 = require("@sendgrid/client");
const common_1 = require("./common");
class SendGridClient {
    constructor(options) {
        this.send = (model) => common_1.resource.Mail.send(model);
        if (!options) {
            throw new Error("Configuration option apiKey is required");
        }
        else if (options.apiKey) {
            client_1.setApiKey(options.apiKey);
        }
        else if (!options.apiKey && options.credentials) {
            client_1.setTwilioEmailAuth(options.credentials.username, options.credentials.password);
        }
        else if (options.subuser) {
            client_1.setImpersonateSubuser(options.subuser);
        }
        else if (options.defaultHeader) {
            client_1.setDefaultHeader(options.defaultHeader.key, options.defaultHeader.value);
        }
    }
}
exports.SendGridClient = SendGridClient;
