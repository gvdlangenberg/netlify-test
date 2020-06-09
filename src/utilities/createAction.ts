export function createAction(
    type: string,
    promise?: Promise<any> | null,
    data: object = {},
    meta: object = {}
) {
    return {
        type,
        payload: {
            data: data,
            promise: promise,
        },
        meta,
    };
}
