type ItemWithIndex = {
    index?: number;
};

export const sortItemsByIndex = <T extends ItemWithIndex>(promise: Promise<T[]>) =>
    promise.then(list => list.sort((a, b) => Number(a.index) - Number(b.index)));
