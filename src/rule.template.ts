import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Rule } from './rule.component';


export default function standardTemplate(this: Rule) {
  const classes = {
    'spectrum-Rule--large': this.large,
    'spectrum-Rule--medium': this.medium,
    'spectrum-Rule--small': this.small,
};
  return html`
    <sp-heading size="${this.large ? 'L' : this.small ? 'S' : 'M'}">${this.label}</sp-heading>
    <hr class="spectrum-Rule ${classMap(classes)}">
    <p class="spectrum-Body">${this.title}</p>
  `;
}