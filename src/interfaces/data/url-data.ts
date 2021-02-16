export interface UrlData {
    id: number;
    userId: string;
    title: string;
    url: URL;
    shortUrl: URL;
    dateCreated?: Date;
    dateLastModified?: Date;
    version: number;
}
