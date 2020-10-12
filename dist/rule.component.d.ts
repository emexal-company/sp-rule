import { Base } from '@spectrum/sp-base';
export declare class Rule extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    small: boolean;
    medium: boolean;
    large: boolean;
    label: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-rule': Rule;
    }
}
