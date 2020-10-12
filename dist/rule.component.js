import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import ruleStyles from './rule.styles';
import standardTemplate from './rule.template';
let Rule = class Rule extends Base {
    constructor() {
        super(...arguments);
        this.small = false;
        this.medium = false;
        this.large = false;
        this.label = '';
    }
    render() {
        return standardTemplate.call(this);
    }
};
Rule.componentStyles = [ruleStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Rule.prototype, "small", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Rule.prototype, "medium", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Rule.prototype, "large", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Rule.prototype, "label", void 0);
Rule = __decorate([
    customElement('sp-rule')
], Rule);
export { Rule };
//# sourceMappingURL=rule.component.js.map