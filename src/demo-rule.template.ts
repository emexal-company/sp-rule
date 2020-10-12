import { html } from 'lit-element';
import { DemoRule } from './demo-rule.component';

import '@spectrum/sp-rule';
import '@spectrum/sp-container';


export default function template(this: DemoRule) {
  return html`
  <sp-container>
  <section>
    <sp-heading size="XS">Large</sp-heading><pre><code id="code" class="language-html">&lt;sp-rule subtitle1 large label="Large" title="Page or Section Titles.">&lt;/sp-rule></code></pre>
    <sp-rule subtitle1 large label="large" title="Page or Section Titles."></sp-rule>
  </section>
  <section>
    <sp-heading size="XS">Medium</sp-heading><pre><code id="code" class="language-html">&lt;sp-rule subtitle2 medium label="Medium" title="Divide subsections, or divide different groups of elements (between panels, rails, etc.)">&lt;/sp-rule></code></pre>
    <sp-rule subtitle2 medium label="Medium" title="Divide subsections, or divide different groups of elements (between panels, rails, etc.)"></sp-rule>
  </section>
  <section>
    <sp-heading size="XS">Small</sp-heading><pre><code id="code" class="language-html">&lt;sp-rule subtitle3 small label="Small" title="Divide like-elements (tables, tool groups, elements within a panel, etc.)">&lt;/sp-rule></code></pre>
    <sp-rule subtitle3 small label="Small" title="Divide like-elements (tables, tool groups, elements within a panel, etc.)"></sp-rule>
  </section>
  </sp-container>
  `;
}
