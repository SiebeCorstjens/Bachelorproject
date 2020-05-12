export class Filter {
    name: string;
    doesApply: (model: any) => boolean;
    selected: boolean;
    value: any;
}