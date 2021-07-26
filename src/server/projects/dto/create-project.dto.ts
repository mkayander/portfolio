export class CreateProjectDto {
    title: string;

    subtitle?: string;

    url?: string;

    year: number;

    description?: string;

    githubUrls: string[];
}
