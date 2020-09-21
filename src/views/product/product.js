import { LitElement, html } from 'lit-element';
import  ProductService  from './product-service.js';
import './product.scss';

export default class Product extends LitElement {
  productService = new ProductService();
  constructor() {
    super();
    // TODO : Interface
    this.productData = { assets : []}
    this.images = { image_path : ["",""] };
  }

  static get properties() {
    return {
      location: Object,
      productData: Object,
      images: Object
    };
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    M.AutoInit();
    this.getProduct(this.location.params.id);
  }

  getProduct(id) {
    this.productService.getProduct(id).then(res => {
      res.assets[0].selected  = true;
      this.images = res.assets[0]; // intial first element
      this.productData = res;
      let elems = document.querySelectorAll('.slider');
      M.Slider.init(elems, { interval: 900000, height: 500 });
      M.AutoInit();
    });
  }

  colorChange(item) {
    this.images = this.productData.assets.filter(i => i === item)[0]
    this.productData.assets.map( i => {
      if(i.color_id === item.color_id) {
        i.selected = true;
      }else  {
        i.selected = false;
      }
    })
    
  }

  changeImage(text) {
    let elems = document.querySelectorAll('.slider');
    let instance = M.Slider.getInstance(elems);
    if(text === 'left') {
      instance.prev();
    }else if(text === 'right'){
      instance.next();
    }
  }

  render() {
    const { productData } = this;
    const { images } = this;
    return html`
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l6 xl6">
        <div class="slider">
        <ul class="slides">
        ${
          images.image_path.map( item => {
            return html`<li> <img src="${item}"></li>`
         })
        }
        </ul>
        </div>
        </div>
        <div class="col s12 m12 l6 xl6">
          <h6 class="p-category">${productData.category_label}</h6>
          <h1 class="p-title">${productData.title}</h1>
          <p class="p-content">
          ${productData.description}
          </p>
          <div class="color-wrapper">
            <p class="p-color">Color</p>
            <div>
              ${
                productData.assets.map( item => {
                  return html`<a  @click=${() => {this.colorChange(item)}} class="product btn-floating btn-small waves-effect waves-light ${item.color_code}"><i class="material-icons">${item.selected ? "done" : ""}</i></a>`
                })
              }
            </div>
          </div>
          <div class="price-wrapper">
            <p class="price-unit-label">Price per Unit</p>
            <div>
              <div class="price-content">
                <div class="p-price">$ ${productData.price}</div>
                <div class="buy-btn"><a class="waves-effect waves-light btn black">Buy Now</a></div>
                <div class="waves-effect waves-light p-cart"><img src="../../src/assets/icon/shopping-cart.png" /></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
 `;
  }
}

customElements.define('app-product', Product);