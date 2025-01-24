export function compareDates(a: string, b: string): number {
    if (a === "" && b === "") {
        return 0;
    }

    if (a === "") {
        return 0;
    }

    if (b === "") {
        return 0;
    }

    const months: { [key: string]: number } = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
    };

    const [monthA, yearA] = a.split(" ");
    const [monthB, yearB] = b.split(" ");

    const parsedYearA = parseInt(yearA ?? "0");
    const parsedYearB = parseInt(yearB ?? "0");

    const yearComparison = parsedYearA - parsedYearB;
    if (yearComparison !== 0) {
        return yearComparison;
    }

    return (
        (months[monthA as keyof typeof months] ?? -1) -
        (months[monthB as keyof typeof months] ?? -1)
    );
}
