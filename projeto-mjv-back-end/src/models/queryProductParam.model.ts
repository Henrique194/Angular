export interface QueryProductParamName {
    type: "name",
    name: string,
}

export interface QueryProductParamId {
    type: "id",
    id: number,
};

export type QueryProductParam = QueryProductParamId | QueryProductParamName;
