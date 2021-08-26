import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProjectDocument = Project & Document;

export type GitHubReference = {
    name: string;
    url: string;
};

@Schema()
export class Project {
    // id: number;

    @Prop()
    title: string;

    @Prop()
    subtitle?: string;

    @Prop()
    url?: string;

    @Prop()
    year: number;

    @Prop()
    description?: string;

    @Prop()
    imageUrl: string;

    @Prop({ type: [{ name: { type: String }, url: { type: String } }] })
    githubUrls: GitHubReference[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
