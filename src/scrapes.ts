import { Scrape } from "./Scrape.js";

export const scrapes: Array<Scrape> = [
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
