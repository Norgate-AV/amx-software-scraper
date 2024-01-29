import "dotenv/config";
import * as cheerio from "cheerio";
import axios from "axios";

console.log(`Running in ${process.env.NODE_ENV} mode`);
console.log("Hello, World!");

type Item = {
    name: string;
    version: string;
    size: string;
    date: string;
};

type Fields = {
    name: string;
    version: string;
    size?: string;
    date?: string;
};

type Scrape = {
    url: string;
    selector: string;
    fields: Fields;
};

const scrapes: Array<Scrape> = [
    {
        url: "https://www.amx.com/en/products/netlinx-studio",
        selector: "tr.download-item-row",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
            size: "td:nth-child(4)",
            date: "td:nth-child(5)",
        },
    },
    {
        url: "https://www.amx.com/en/products/tpdesign5",
        selector: "tr.download-item-row",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
            size: "td:nth-child(4)",
            date: "td:nth-child(5)",
        },
    },
    {
        url: "https://www.amx.com/en/products/muse-extension-for-vs-code",
        selector: "tr.download-item-row",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
            size: "td:nth-child(4)",
            date: "td:nth-child(5)",
        },
    },
    {
        url: "https://www.amx.com/en/products/muse-automator",
        selector: "tr.download-item-row",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
            size: "td:nth-child(4)",
            date: "td:nth-child(5)",
        },
    },
    {
        url: "https://www.amx.com/en/products/manager",
        selector: "tr.download-item-row",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
            size: "td:nth-child(4)",
            date: "td:nth-child(5)",
        },
    },
    {
        url: "https://www.amx.com/en/products/iredit2",
        selector: "tr.download-item-row",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
            size: "td:nth-child(4)",
            date: "td:nth-child(5)",
        },
    },
    {
        url: "https://www.amx.com/en/products/iredit",
        selector: "tr.download-item-row",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
            size: "td:nth-child(4)",
            date: "td:nth-child(5)",
        },
    },
    {
        url: "https://www.amx.com/en/products/rms-ent",
        selector: "tr.download-item-row",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
            size: "td:nth-child(4)",
            date: "td:nth-child(5)",
        },
    },
    {
        url: "https://www.amx.com/en/softwares",
        selector: "div.columns > table > tbody > tr",
        fields: {
            name: "td:nth-child(1) > a",
            version: "td:nth-child(2)",
        },
    },
];

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

    console.table(items);
})();
