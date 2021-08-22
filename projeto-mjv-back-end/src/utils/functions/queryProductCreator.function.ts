import { QueryProductParamId, QueryProductParamName } from "../../models/queryProductParam.model";

export function queryProductCreator<T extends string | undefined>(name: T, id?: string): T extends string
? QueryProductParamName
: QueryProductParamId {
    if(name) {
        const queryProductName: QueryProductParamName = { type: "name", name: name };
        return queryProductName as any;
    }
    const queryProductId: QueryProductParamId = { type: "id", id: Number(id as string) };
    return queryProductId as any;
} 