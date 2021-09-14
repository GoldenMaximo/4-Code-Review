// https://github.com/nasa/apod-api
export interface IApod {
    date: string;
    explanation: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
    hdurl?: string;
}
