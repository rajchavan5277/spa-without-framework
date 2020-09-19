import { LitElement, html, css  } from 'lit-element';
import HomeService from './home-service';
import './home.scss';
import 'materialize-css/dist/css/materialize.min.css';

export default class Home extends LitElement{
  homeService = new HomeService();
  constructor() {
    super();
    this.getProducts();
    this.getCollections();
  }
  static get properties() {
    return {
      collections: { type: Array },
      products: {type: Array }
    };
  }
  static get styles() {
    return css``;
  }
  createRenderRoot() {
    return this;
  }
  getProducts() {
    this.homeService.getProducts().then(res => {
      console.log(res);
      this.products = res;
    })
  }

  getCollections() {
    this.homeService.getCollections().then(res => {
      console.log(res);
      this.collections = res;
    })
  }

  render() {
    return html`
    <div class="mui-row">
    <div class="mui-col-md-3">
       <aside>
          <p>FILTER BY</p>
          <div>
             <form class="mui-col-md-12">
                <div class="row">
                <div class="mui-col-md-12">
                  <div class="mui-select">
                    <select>
                      ${ this.collections.map(item => {
                          return html`<option value="${item.collections_name}">${item.collections_label}</option>`
                        })
                      }
                    </select>
                    <label>collection</label>
                  </div>
                </div>
                <div class="mui-col-md-12">
                  <div class="mui-select">
                    <select>
                      ${ this.collections.map(item => {
                          return html`<option value="${item.collections_name}">${item.collections_label}</option>`
                        })
                      }
                    </select>
                    <label>Color</label>
                  </div>
                </div>
                <div class="mui-col-md-12">
                <div class="mui-select">
                  <select>
                    ${ this.collections.map(item => {
                        return html`<option value="${item.collections_name}">${item.collections_label}</option>`
                      })
                    }
                  </select>
                  <label>Category</label>
                </div>
              </div>
                <div class="mui-col-md-12">
                    <label for="collection">Price Range</label>
                    <p class="range-field">
                      <input type="range" id="test5" min="0" max="100" />
                    </p>
                  </div>
                </div>
             </form>
          </div>
       </aside>
    </div>
    <div class="mui-col-md-9">
       <main>
      ${ this.products.map(item => {
       return html`<div class="mui-col-md-4">
          <div class="image">
            <img src="${item.image_url}" alt="image" class="product-image"/>
          </div>
          <div class="product-wrapper mui-row">
            <div class="product-content mui-col-md-8">
              <p class="title">${item.label}</p>
              <p class="title muted">${item.label} </p>
            </div>
            <div class="price mui-col-md-4">
            ${"$"+item.price}
            </div>
          </div>
          <div class="footer mui-row">
            <div class="rating mui-col-md-8">
              ${item.rating}
            </div>
            <div class="mui-col-md-4"> 
              <img src="../../src/assets/icon/shopping-cart.png" />
            </div>
          </div>
        </div>`
      })
    }
  </main>
    </div>
 </div>`;
  }
}
customElements.define('app-home', Home);