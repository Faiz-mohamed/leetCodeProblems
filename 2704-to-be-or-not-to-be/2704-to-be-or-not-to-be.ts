type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (v: any) => {
            if (val === v) return true;
            throw new Error("Not Equal");
        },
        notToBe: (v: any) => {
            if (val !== v) return true;
            throw new Error("Equal");
        }
    };
}
