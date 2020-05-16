import { SendGridClientOptions } from "./interfaces";
import { resource } from "./common";
export declare class SendGridClient {
    constructor(options?: SendGridClientOptions);
    send: (model: resource.Mail.MailData) => Promise<[import("@sendgrid/client/src/response").ClientResponse, any]>;
}
