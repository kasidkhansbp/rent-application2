export type Action = {
    type: ReduxAction,
    [id: string]: any
}

export enum ReduxAction {
    SEARCH_PROPERTY = 'SEARCH_PROPERTY'
}