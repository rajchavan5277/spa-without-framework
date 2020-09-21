import { LitElement, html } from 'lit-element';
import ShopService from './shop-service';
import './shop.scss';

export default class Shop extends LitElement {
  shopService = new ShopService();
  constructor() {
    super();
    this.commandata = [];
    this.products = [];
    this.getFilterData();
    this.getProducts();

  }
  static get properties() {
    return {
      commandata: { type: Array },
      products: { type: Array }
    };
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    M.AutoInit();

  }

  getFilterData() {
    this.shopService.getFilterData().then(res => {
      this.commandata = res;
    });
  }

  getProducts() {
    this.shopService.getProducts().then(res => {
      console.log(this.products)
      this.products = res;
    })
  }

  serialize = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  changeFilter() {
    let id_collection = document.querySelector("#select-collection").value;
    let id_color = document.querySelector("#select-color").value;
    let id_categroy = document.querySelector("#select-categroy").value;
    let id_price = document.querySelector("#price").value;
    let obj = {}; 
    if (id_collection) {
      obj['collection_id'] = id_collection
    } if (id_color) {
      obj['color_id'] = id_color
    } if (id_categroy) {
      obj['category_id'] = id_categroy
    }
    if (id_price) {
      obj['price'] = id_price
    } 

    let queryString = this.serialize(obj);
    this.shopService.getFilter(queryString).then(res => {
      this.products = res;
    });
  }

  render() {
    const { commandata } = this;
    const { products } = this;
    return html`
  <div class="container">
    <div class="row">
    <div class="col s3" id="slide-out">
       <aside>
          <p class="filter-text">FILTER BY</p>
          <div>
             <form class="col s12">
                <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <select id="select-collection" @change="${(e)=> { this.changeFilter()}}">
                      <option value="" disabled selected>Choose your collection</option>
                      ${
                        commandata.collections.map(item => {
                          return html`<option value="${item.id}">${item.collections_label}</option>`
                        })
                       }
                    </select>
                    <label></label>
                  </div>
                </div>
                <div class="col s12">
                  <div class="input-field">
                    <select id="select-color" @change="${(e)=> { this.changeFilter()}}">
                    <option value="" disabled selected>Choose your color</option>
                      ${ commandata.colors.map(item => {
                        return html`<option value="${item.color_name}">${item.color_label}</option>`
                      })
                    }
                    </select>
                    <label></label>
                  </div>
                </div>
                <div class="col s12">
                <div class="">
                  <select id="select-categroy" @change="${(e)=> { this.changeFilter()}}">
                    <option value="" disabled selected>Choose your category</option>
                    ${ commandata.category.map(item => {
                      return html`<option class="grey text-darken-4" value="${item.category_name}">${item.category_label}</option>`
                    })
                  }
                  </select>
                  <label></label>
                </div>
              </div>
                <div class="col s12 margin-top">
                    <label for="collection">Price Range</label>
                    <p class="range-field">
                      <input type="range" @change="${(e)=> { this.changeFilter()}}" id="price" min="${commandata.price_range.min}" max="${commandata.price_range.max}" />
                    </p>
                  </div>
                </div>
             </form>
          </div>
       </aside>
    </div>
    <div class="col s9">
       <main>
      ${ products.map(item => {
        return html`<div class="col s4">
          <div class="image">
            <a href="product/${item.id}" class="product-link">
              <img src="${item.cover_image}" alt="image" class="product-image"/>
            </a>
          </div>
          <div class="product-wrapper">
            <div class="product-content col s8">
              <p class="product-title">${item.title}</p>
              <p class="product-category">${item.category_label} </p>
            </div>
            <div class="price col s4">
              ${"$" + item.price}
            </div>
          </div>
          <div class="product-footer">
            <div class="rating col s8">
            <div class="rating">
              <span>${item.rating >= 1 ? html`&#9733;` : html`&#9734;`}</span>
              <span>${item.rating >= 2 ? html`&#9733;` : html`&#9734;`}</span>
              <span>${item.rating >= 3 ? html`&#9733;` : html`&#9734;`}</span>
              <span>${item.rating >= 4 ? html`&#9733;` : html`&#9734;`}</span>
              <span>${item.rating >= 5 ? html`&#9733;` : html`&#9734;`}</span>  
            </div>
            </div>
            <div class="col s4 buy"> 
              <img src="../src/assets/icon/shopping-cart.png" />
            </div>
          </div>
        </div>`
      })
      }
  </main>
    </div>
 </div>
  <div class="row">
    <ul class="pagination">
      <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
      <li class="active"><a href="#!">1</a></li>
      <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li>
      <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
    </ul>
  </div>
</div>  
 `;
  }
}

customElements.define('app-shop', Shop);
