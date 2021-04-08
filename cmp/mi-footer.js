class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       kevin soto navarro 
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
