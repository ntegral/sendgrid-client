import {
  setApiKey,
  setTwilioEmailAuth,
  setImpersonateSubuser,
  setDefaultHeader,
} from "@sendgrid/client";
import { SendGridClientOptions } from "./interfaces";
import { resource } from "./common";

export class SendGridClient {
  constructor(options?: SendGridClientOptions) {
    if (!options) {
      throw new Error("Configuration option apiKey is required");
    } else if (options.apiKey) {
      setApiKey(options.apiKey);
    } else if (!options.apiKey && options.credentials) {
      setTwilioEmailAuth(
        options.credentials.username,
        options.credentials.password,
      );
    } else if (options.subuser) {
      setImpersonateSubuser(options.subuser);
    } else if (options.defaultHeader) {
      setDefaultHeader(options.defaultHeader.key, options.defaultHeader.value);
    }
  }

  send = (model: resource.Mail.MailData) => resource.Mail.send(model);
}
