/**
 * Component: <wl-steps>
 * Section 3 bước học thông minh (tương tự PrepEdu)
 */
class WlSteps extends HTMLElement {
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
    const tag = config.tag || 'Lộ trình rõ ràng';
    const title = config.title || '3 Bước chinh phục mục tiêu';
    const subtitle = config.subtitle || 'Quy trình học tập tinh gọn giúp bạn đạt kết quả tối đa';

    const stepsHtml = this._data.map(step => `
      <div class="step-card">
        <div class="step-num">${step.num || '01'}</div>
        <h3 class="step-title">${step.title}</h3>
        <p class="step-desc">${step.desc}</p>
      </div>
    `).join('');

    this.innerHTML = `
      <section id="steps" class="section-wrapper">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">${tag}</span>
            <h2 class="section-title">${title}</h2>
            <p class="section-subtitle">${subtitle}</p>
          </div>

          <div class="steps-grid">
            ${stepsHtml}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('wl-steps', WlSteps);
export default WlSteps;
