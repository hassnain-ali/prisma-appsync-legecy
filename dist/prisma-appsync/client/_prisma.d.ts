import { PrismaClient } from "@prisma/client";
import { CustomPrismaClientOptions } from "./_types";
export declare class CustomPrismaClient extends PrismaClient<any, "query"> {
    constructor({ connectionUrl, debug }: CustomPrismaClientOptions);
}
