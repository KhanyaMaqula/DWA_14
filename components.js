import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PlusButton extends LitElement {
    static properties = {
        disabled: { type: Boolean}
    };

    constructor() {
        super();
        this.disabled = false;
    }

    render() {
        return html`
        <button ?disabled=${this.disabled}>+</button>
        `;
    }
}

customElements.define('plus-button', PlusButton);

class MinusButton extends LitElement {
    //add a properties object and add the disabled as
    //a property of this element.
    static properties = {
        disabled: { type: Boolean}
    };

    constructor() {
        super();
        this.disabled = false;
    }

    render() {
        return html`
        <button ?disabled=${this.disabled}>-</button>
        `;
    }
 }

 customElements.define('minus-button', MinusButton);


 class ResetButton extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <button>Reset</button>
        `;
    }
 }

 customElements.define('reset-button', ResetButton);