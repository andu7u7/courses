// 1. Importamos las herramientas clave de Lit
import { LitElement, html, css } from "lit";

// 2. Ahora heredamos de LitElement en lugar de HTMLElement
class TarjetaSaldo extends LitElement {
  // 3. Propiedades Reactivas: Le decimos a Lit qué datos deben vigilarse.
  // Si 'ingresos' o 'gastos' cambian, Lit volverá a pintar el HTML automáticamente.
  static properties = {
    ingresos: { type: Number },
    gastos: { type: Number },
  };

  // 4. Estilos encapsulados de alto rendimiento usando la etiqueta 'css'
  static styles = css`
    .tarjeta {
      background-color: #f3f4f6;
      padding: 20px;
      border-radius: 8px;
      font-family: sans-serif;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 250px;
    }
    h2 {
      margin-top: 0;
      color: #333;
      font-size: 16px;
    }
    .saldo {
      font-size: 24px;
      font-weight: bold;
      margin: 0;
    }

    /* Clases dinámicas para el color del texto */
    .positivo {
      color: #10b981;
    } /* Verde */
    .negativo {
      color: #ef4444;
    } /* Rojo */
  `;

  // 5. El constructor inicializa los valores por defecto
  constructor() {
    super(); // Siempre obligatorio
    this.ingresos = 0;
    this.gastos = 0;
  }

  // 6. El método render(): Aquí es donde ocurre la magia.
  // Retorna el HTML que queremos mostrar usando la etiqueta 'html' de Lit.
  render() {
    // Calculamos el saldo real
    const saldoTotal = this.ingresos - this.gastos;

    // Decidimos qué clase CSS usar dependiendo de si hay deudas o no
    const claseSaldo = saldoTotal >= 0 ? "positivo" : "negativo";

    return html`
      <div class="tarjeta">
        <h2>Saldo Actual</h2>
        <p class="saldo ${claseSaldo}">$${saldoTotal.toFixed(2)}</p>
      </div>
    `;
  }
}

// 7. Registramos el componente igual que antes
customElements.define("tarjeta-saldo", TarjetaSaldo);
