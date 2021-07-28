export class CreateContactDto {
    type: "mobile" | "email" | "url";

    iconUrl: string;

    title: string;

    value: string;
}
