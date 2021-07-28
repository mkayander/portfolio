import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProjectDocument = Project & Document;

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

    @Prop([String])
    githubUrls: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
