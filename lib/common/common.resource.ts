import client = require("@sendgrid/client");
import { ClientRequest } from "@sendgrid/client/src/request";

export namespace resource {
  export namespace Mail {
    export type MimeType =
      | "text/plain"
      | "text/html"
      | "image/gif"
      | "image/png"
      | "image/tiff";

    export interface ClickTracking {
      enable?: boolean;
      enable_text?: string;
    }

    export interface GAnalytics {
      enable?: boolean;
      utm_source?: string;
      utm_medium?: string;
      utm_term?: string;
      utm_content?: string;
      utm_campaign?: string;
    }

    export interface MailSettings {
      bcc?: {
        enable?: boolean;
        email: string;
      };
      bypass_list_management?: {
        enable?: boolean;
      };
      footer?: {
        enable?: boolean;
        text?: string;
        html?: string;
      };
      sandbox_mode?: {
        enable?: boolean;
      };
      spam_check?: {
        enable?: boolean;
        threshold?: number;
        post_to_url?: string;
      };
    }

    export interface OpenTracking {
      enable?: boolean;
      substitution_tag?: string;
    }

    export interface SubscriptionTracking {
      enable?: boolean;
      text?: string;
      html?: string;
      substitution_tag?: string;
    }

    export interface EmailData {
      /**
       * format: email
       */
      email: string;

      /**
       * The name of sender associated with the delivering email address
       */
      name?: string;
    }

    export interface ContentData {
      /**
       * The mime type of the content you are including in your email. For example, “text/plain” or “text/html”.
       */
      type: string;
      /**
       * he actual content of the specified mime type that you are including in your email.
       */
      value: string;
    }

    export interface Attachment {
      content: string;
      type?: string;
      filename: string;
      disposition?: string;
      content_id?: string;
    }

    export interface Asm {
      group_id: number;
      groups_to_display?: number[];
    }

    /**
     * An array of messages and their metadata. Each object within personalizations
     * can be thought of as an envelope - it defines who should receive an individual
     * message and how that message should be handled.
     */

    export interface PersonalizationData {
      to: EmailData[];
      cc?: EmailData[];
      bcc?: EmailData[];
      subject?: string;
      headers?: {};
      /**
       * A collection of key/value pairs following the pattern "substitution_tag":"value to substitute".
       * The key/value pairs must be strings. These substitutions will apply to the text and html content
       * of the body of your email, in addition to the subject and reply-to parameters. The total
       * collective size of your substitutions may not exceed 10,000 bytes per personalization object.
       */
      substitutions?: {};
      /**
       * A collection of key/value pairs that will apply to the text and html content of the body of
       * the dynamic template of your email.
       * NOTE: if using dynamic templates the templated_id is required
       */
      dynamic_template_data?: {};
      custom_args?: {};
      send_at?: number;
    }

    export interface MailData {
      /**
       * An array of messages and their metadata. Each object within personalizations
       * can be thought of as an envelope - it defines who should receive an individual
       * message and how that message should be handled.
       */
      personalizations: PersonalizationData[];
      from: EmailData;

      reply_to?: EmailData;

      /**
       * The global, or “message level”, subject of your email. This may be overridden by personalizations[x].subject.
       */
      subject?: string;
      /**
       * An array in which you may specify the content of your email. You can include multiple mime
       * types of content, but you must specify at least one mime type. To include more than one mime type,
       * simply add another object to the array containing the type and value parameters.
       */
      content?: ContentData[];
      /**
       * An array of objects in which you can specify any attachments you want to include.
       */
      attachments?: Attachment[];
      /**
       * The id of a template that you would like to use. If you use a template that contains
       * a subject and content (either text or html), you do not need to specify those
       * at the personalizations nor message level.
       */
      template_id?: string;
      /**
       * An object of key/value pairs that define block sections of code to be
       * used as substitutions. The key/value pairs must be strings.
       */
      sections?: {};
      /**
       * A collection of JSON key/value pairs allowing you to specify specific
       * handling instructions for your email. You may not overwrite the following
       * headers: x-sg-id, x-sg-eid, received, dkim-signature, Content-Type,
       * Content-Transfer-Encoding, To, From, Subject, Reply-To, CC, BCC
       */
      headers?: {};
      /**
       * An array of category names for this message. Each category name may not exceed 255 characters.
       */
      categories?: string[];
      /**
       * Values that are specific to the entire send that will be carried along with the email
       * and its activity data. Key/value pairs must be strings. Substitutions will not be made
       * on custom arguments, so any string that is entered into this parameter will be assumed
       * to be the custom argument that you would like to be used. This parameter is overridden
       * by personalizations[x].custom_args if that parameter has been defined. Total custom args
       * size may not exceed 10,000 bytes.
       */
      custom_args?: string;
      /**
       * A unix timestamp allowing you to specify when you want your email to be delivered. This may
       * be overridden by the personalizations[x].send_at parameter. You can't schedule more than 72
       * hours in advance. If you have the flexibility, it's better to schedule mail for off-peak times.
       * Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email
       * to avoid those times (for example, scheduling at 10:53) can result in lower deferral rates
       * because it won't be going through our servers at the same times as everyone else's mail.
       */
      send_at?: number;
      /**
       * This ID represents a batch of emails to be sent at the same time. Including a batch_id in your
       * request allows you include this email in that batch, and also enables you to cancel or pause
       * the delivery of that batch. For more information,
       * see https://sendgrid.com/docs/API_Reference/Web_API_v3/cancel_schedule_send.html
       */
      batch_id?: string;
      /**
       * An object allowing you to specify how to handle unsubscribes.
       */
      asm?: Asm;
      /**
       * The IP Pool that you would like to send this email from.
       */
      ip_pool_name?: string;
      /**
       * A collection of different mail settings that you can use to specify how you would like this email to be handled.
       */
      mail_settings?: MailSettings;
      /**
       * Settings to determine how you would like to track the metrics of how your recipients interact with your email.
       */
      tracking_settings?: {
        click_tracking?: ClickTracking;
        open_tracking?: OpenTracking;
        subscription_tracking?: SubscriptionTracking;
        ganalytics?: GAnalytics;
      };
    }

    export function send(model: MailData) {
      const data: ClientRequest = {
        method: "POST",
        url: "v3/mail/send",
        body: model,
      };

      return client.request(data);
    }
  }
}
