import {NavItemModel} from "./navitem.model";


export interface NavitemRespModel {
    rc: number;
    message: string;
    count:number;
    results: NavItemModel[];
}
