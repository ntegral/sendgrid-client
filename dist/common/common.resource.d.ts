export declare namespace resource {
    namespace Mail {
        type MimeType = "text/plain" | "text/html" | "image/gif" | "image/png" | "image/tiff";
        interface ClickTracking {
            enable?: boolean;
            enable_text?: string;
        }
        interface GAnalytics {
            enable?: boolean;
            utm_source?: string;
            utm_medium?: string;
            utm_term?: string;
            utm_content?: string;
            utm_campaign?: string;
        }
        interface MailSettings {
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
        interface OpenTracking {
            enable?: boolean;
            substitution_tag?: string;
        }
        interface SubscriptionTracking {
            enable?: boolean;
            text?: string;
            html?: string;
            substitution_tag?: string;
        }
        interface EmailData {
            email: string;
            name?: string;
        }
        interface ContentData {
            type: string;
            value: string;
        }
        interface Attachment {
            content: string;
            type?: string;
            filename: string;
            disposition?: string;
            content_id?: string;
        }
        interface Asm {
            group_id: number;
            groups_to_display?: number[];
        }
        interface PersonalizationData {
            to: EmailData[];
            cc?: EmailData[];
            bcc?: EmailData[];
            subject?: string;
            headers?: {};
            substitutions?: {};
            dynamic_template_data?: {};
            custom_args?: {};
            send_at?: number;
        }
        interface MailData {
            personalizations: PersonalizationData[];
            from: EmailData;
            reply_to?: EmailData;
            subject?: string;
            content?: ContentData[];
            attachments?: Attachment[];
            template_id?: string;
            sections?: {};
            headers?: {};
            categories?: string[];
            custom_args?: string;
            send_at?: number;
            batch_id?: string;
            asm?: Asm;
            ip_pool_name?: string;
            mail_settings?: MailSettings;
            tracking_settings?: {
                click_tracking?: ClickTracking;
                open_tracking?: OpenTracking;
                subscription_tracking?: SubscriptionTracking;
                ganalytics?: GAnalytics;
            };
        }
        function send(model: MailData): Promise<[import("@sendgrid/client/src/response").ClientResponse, any]>;
    }
}
