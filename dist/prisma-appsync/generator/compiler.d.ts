import { DMMF } from "@prisma/generator-helper";
import { CompilerOptions } from "./types";
export declare class PrismaAppSyncCompiler {
    private dmmf;
    private data;
    private options;
    constructor(dmmf: DMMF.Document, options: CompilerOptions);
    makeSchema(customSchemaPath?: string): Promise<this>;
    getClientConfig(): string;
    makeResolvers(customResolversPath?: string): Promise<this>;
    makeClient(): Promise<this>;
    makeDocs(): Promise<this>;
    private parseDMMF;
    private filterSubscriptionFields;
    private isFieldUnique;
    private isFieldRequired;
    private isFieldEnum;
    private isFieldImmutableDate;
    private isFieldGeneratedRelation;
    private makeFile;
    private getFieldSample;
    private getFieldRelationName;
    private getFieldRelationKind;
    private getFieldScalar;
    private getFieldType;
    private getModelDirectives;
    private isIgnored;
    private getFieldDirectives;
    private getModelIfExists;
    private getDirectives;
}
