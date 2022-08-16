export class Guid {
    gerarNovoId() {
        const dateSrt = Date
            .now()
            .toString(36);
        const randomStr = Math
            .random()
            .toString(36)
            .substring(2, 8);
        return `${dateSrt}-${randomStr}`;
    }
}
