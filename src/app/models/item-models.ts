import { Tag } from "./tag-models";

export interface Item {
    id?: string,
    title?: string,
    note?: string,
    price?:number,
    quanlity?:number,
    img?:string,
    tag?:Array<Tag>,
    user?:object,
    dateCreated?: number;
    dateUpdated?:number;
}