/**
 * Component: <wl-testimonials>
 * Đánh giá của học viên & câu chuyện thành công sau khóa học
 */
class WlTestimonials extends HTMLElement {
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
    const tag = config.tag || 'Cảm nhận học viên';
    const title = config.title || 'Câu chuyện thành công';
    const subtitle = config.subtitle || 'Những chia sẻ chân thực từ các cựu học viên';

    const cardsHtml = this._data.map(item => `
      <div class="testimonial-card">
        <p class="testimonial-quote">“${item.quote}”</p>
        
        <div class="testimonial-user">
          <img class="testimonial-avatar" src="${item.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}" alt="${item.name}" loading="lazy">
          <div class="testimonial-info">
            <h4>${item.name}</h4>
            <p>${item.role}</p>
          </div>
        </div>
      </div>
    `).join('');

    this.innerHTML = `
      <section id="testimonials" class="section-wrapper">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">${tag}</span>
            <h2 class="section-title">${title}</h2>
            <p class="section-subtitle">${subtitle}</p>
          </div>

          <div class="testimonials-grid">
            ${cardsHtml}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('wl-testimonials', WlTestimonials);
export default WlTestimonials;
