export type Contact = {
    id: number;

    index: number;

    type: "mobile" | "email" | "url";

    iconUrl?: string;

    title: string;

    value: string;
};
