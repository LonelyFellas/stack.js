const HTMLElement = window.HTMLElement;
console.log(HTMLElement);
export default class HStack extends HTMLElement {
  // private template: any;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    // @ts-ignore
    this.template = document.createElement('template');
    // @ts-ignore
    this.template.innerHTML = `<div>Hello World</div>`;
    // @ts-ignore
    this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
  }
}
customElements.define('h-stack', HStack);
