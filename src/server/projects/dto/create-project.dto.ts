import { GitHubReference } from "../schemas/project.schema";

export class CreateProjectDto {
    index: number;

    title: string;

    subtitle?: string;

    url?: string;

    year: number;

    description?: string;

    imageUrl?: string;

    githubUrls: GitHubReference[];
}
