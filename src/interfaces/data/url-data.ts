export interface UrlData {
    id: number;
    userId: string;
    title: string;
    url: URL;
    shortUrlHash: string;
    dateCreated?: Date;
    dateLastModified?: Date;
    version: number;
}
