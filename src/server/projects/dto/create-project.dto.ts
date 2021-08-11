export class CreateProjectDto {
    title: string;

    subtitle?: string;

    url?: string;

    year: number;

    description?: string;

    imageUrl?: string;

    githubUrls: string[];
}
