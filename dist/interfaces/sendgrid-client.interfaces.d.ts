export interface SendGridClientOptions {
    apiKey?: string;
    credentials?: {
        username: string;
        password: string;
    };
    subuser?: string;
    defaultHeader?: {
        key: string;
        value: string;
    };
}
