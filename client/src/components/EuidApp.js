// HTMLElement를 확장한 커스텀 요소의 클래스
class EuidApp extends HTMLElement {
  constructor() {
    super();
    this.rendered = false;
  }

  // 문서에 연결 (탄생)
  connectedCallback() {
    if (!this.rendered) {
      this.attachShadow({ mode: 'open' });
      this.render();
      this.rendered = true;
    }
  }

  render() {
    console.log(this); // this 커스텀 요소 (클래스로부터 생성된 객체)

    this.shadowRoot.innerHTML = /* html */ `
      <style>
        .app {
          color: red;
        }
      </style>
      <div class="app" lang="en">
        <h1 class="app-headline">Web Component</h1>  
        <ul>
          <li>custom element</li>
          <li>shadow dom</li>
        </ul>
      </div>
    `;
  }

  static get observedAttributes() {
    return ['class', 'lang'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // logic
  }

  // 문서에 연결 해제 (죽음)
  disconnectedCallback() {
    console.log('<euid-app> 요소가 문서에 제거');
  }
}

customElements.define('euid-app', EuidApp);
