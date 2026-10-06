/**
 * Component: <wl-faq>
 * Accordion câu hỏi thường gặp với giới hạn số lượng câu hỏi qua limit
 */
class WlFaq extends HTMLElement {
  set data(val) {
    this._data = val;
    this.render();
  }

  get data() {
    return this._data;
  }

  set config(val) {
    this._config = val;
    this.render();
  }

  get config() {
    return this._config;
  }

  connectedCallback() {
    if (this._data) {
      this.render();
    }
  }

  render() {
    if (!this._data || !Array.isArray(this._data)) return;

    const config = this._config || {};
    const tag = config.tag || 'Giải đáp';
    const title = config.title || 'Câu hỏi thường gặp';
    const subtitle = config.subtitle || 'Giải đáp nhanh các thắc mắc trước khi bạn quyết định đăng ký';
    const limit = config.limit ? parseInt(config.limit, 10) : this._data.length;

    const itemsToRender = this._data.slice(0, limit);

    const faqHtml = itemsToRender.map((item, idx) => `
      <details class="faq-item" ${idx === 0 ? 'open' : ''}>
        <summary class="faq-question">
          <span>${item.q}</span>
          <span class="faq-icon">+</span>
        </summary>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </details>
    `).join('');

    this.innerHTML = `
      <section id="faq" class="section-wrapper">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">${tag}</span>
            <h2 class="section-title">${title}</h2>
            <p class="section-subtitle">${subtitle}</p>
          </div>

          <div class="faq-list">
            ${faqHtml}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('wl-faq', WlFaq);
export default WlFaq;
