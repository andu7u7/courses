export class TarjetaSaldo extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
      <style>
        .tarjeta {
          background-color: #f3f4f6;
          padding: 20px;
          border-radius: 8px;
          font-family: sans-serif;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          max-width: 250px;
        }
        h2 { margin-top: 0; color: #333; font-size: 16px; }
        .saldo { font-size: 24px; font-weight: bold; color: #10b981; margin: 0; }
      </style>
      <div class="tarjeta">
        <h2>Saldo Actual</h2>
        <p class="saldo">$1,500.00</p>
      </div>
    `;
    }
}

customElements.define('tarjeta-saldo', TarjetaSaldo);