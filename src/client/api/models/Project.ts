export type Project = {
    _id: string;

    title: string;

    subtitle?: string;

    url?: string;

    year: number;

    description?: string;

    imageUrl?: string;

    githubUrls: Array<{
        _id?: string;
        name?: string;
        url: string;
    }>;
};
