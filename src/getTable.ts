import { Table } from "console-table-printer";
import { compareDates } from "./compareDates.js";
import { Item } from "./Item.js";

export function getTable(items: Array<Item>) {
    const table = new Table({
        title: "Current Software Versions",
        enabledColumns: ["name", "version", "date"],
        columns: [
            { name: "name", title: "Name" },
            { name: "version", title: "Version" },
            { name: "date", title: "Date" },
        ],
        sort: (a, b) => compareDates(b.date, a.date),
    });

    for (const item of items) {
        table.addRow(
            {
                name: item.name,
                version: item.version,
                date: item.date,
            },
            { color: "green" },
        );
    }

    return table;
}
