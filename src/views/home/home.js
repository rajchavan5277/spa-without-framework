import { LitElement, html } from 'lit-element';
import HomeService from './home-service';
import "./home.scss";

export default class Home extends LitElement {
  constructor() {
    super();
  }
  static get properties() {
    return {
      product: Array,
      instance: Object,
      location: Object
    };
  }
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    M.AutoInit();
    let elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, { interval: 900000, height: 500 });
    console.log(this.location.params.id);
  }


  render() {
    return html`
    <div class="container">
      <div class="row">
        <div class="col s6">
        <div class="slider">
        <ul class="slides">
            <li>
              <img src="../src/assets/img/furniture/sofa.webp" class="slider-image">
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/2">
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/3">
            </li>
            <li>
              <img src="https://lorempixel.com/580/250/nature/4">
            </li>
          </ul>
        </div>
        </div>
        <div class="col s6">
          <p>Kappu Regular chari</p>
          <h1>Scandanavian Collection</h1>
          <p>Vass Shoe makes handcrafted men's shoes in the 
           heart of Budapest. I made a concept product page 
           for practise. which in my opinions represent their qualities better 
           than their current site.
          </p>
          <div class="color-wrapper">
            <p>Color</p>
            <div>
              <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
              <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
          </div>
          <div class="price-wrapper">
            <p>Price per Unit</p>
            <div>
              <div class="">
                <span>$2600</span>
                <a class="waves-effect waves-light btn">button</a>
                <img src="../../src/assets/icon/shopping-cart.png" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
 `;
  }
}
customElements.define('app-home', Home);