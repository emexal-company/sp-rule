import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import ruleStyles from './rule.styles';
import standardTemplate from './rule.template';

@customElement('sp-rule')
export class Rule extends Base {
  public static componentStyles = [ruleStyles];

  @property({ type: Boolean }) public small: boolean = false;
  @property({ type: Boolean }) public medium: boolean = false;
  @property({ type: Boolean }) public large: boolean = false;
  @property({ type: String })  public label: string = '';

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-rule': Rule;
  }
}
