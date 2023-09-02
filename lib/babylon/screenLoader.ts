export class ScreenLoader {
  private loaderElement: HTMLElement | null = null;
  loadingUIBackgroundColor: string = '';
  loadingUIText: string = '';

  constructor() {}

  displayLoadingUI() {
    this.loaderElement = document.createElement('div');
    this.loaderElement.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 100%;
      background: #1b1b23;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    this.loaderElement.innerHTML = '<p style="text-align: center; color: #fff; font-size: 1.5rem;">Loading...</p>';
    document.body.appendChild(this.loaderElement);
  }

  hideLoadingUI() {
    if (this.loaderElement) {
      document.body.removeChild(this.loaderElement);
      this.loaderElement = null;
    }
  }
}
