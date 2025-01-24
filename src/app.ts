import "dotenv/config";
import * as cheerio from "cheerio";
import axios from "axios";
import { Item } from "./Item.js";
import { scrapes } from "./scrapes.js";
import { getTable } from "./getTable.js";

(async () => {
    const items: Array<Item> = [];

    for (const scrape of scrapes) {
        const response = await axios.get(scrape.url);

        const data = await response.data;
        const $ = cheerio.load(data);

        const elements = $(scrape.selector);

        if (!elements) {
            continue;
        }

        for (const element of elements) {
            const name = $(element).find(scrape.fields.name).text().trim();

            if (!name) {
                continue;
            }

            const version = $(element)
                .find(scrape.fields.version)
                .text()
                .trim();

            if (!version) {
                continue;
            }

            const size = $(element).find(scrape.fields.size).text().trim();
            const date = $(element).find(scrape.fields.date).text().trim();

            items.push({ name, version, size, date });
        }
    }

    getTable(items).printTable();
})();
