const HTMLElement = window.HTMLElement;
console.log(HTMLElement);
export default class HStack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.template = document.createElement('template');
    this.template.innerHTML = `
      <div>Hello World</div>
    `;
    this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
  }
}
customElements.define('h-stack', HStack);
