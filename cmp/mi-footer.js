class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Heber Matias Cartagena.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
