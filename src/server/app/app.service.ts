import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectConnection } from "@nestjs/typeorm";
import { Connection } from "typeorm";

@Injectable()
export class AppService implements OnModuleInit {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    onModuleInit() {
        console.log(this.connection.entityMetadatas.map(value => value.name));
    }

    getHello(): string {
        return "Hello World!";
    }
}
