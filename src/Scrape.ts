import { Fields } from "./Fields.js";

export type Scrape = {
    url: string;
    selector: string;
    fields: Fields;
};
