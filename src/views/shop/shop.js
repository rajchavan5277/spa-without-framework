import { LitElement, html } from 'lit-element';
import ShopService from './shop-service';
import './shop.scss';
import { loader } from '../../helpers/loader';

export default class Shop extends LitElement {
  shopService = new ShopService();
  pageNo = 1;
  pageLimit = 12;
  constructor() {
    super();
    this.commandata = [];
    this.products = [];
    this.getFilterData();
    this.getProducts(this.pageNo, this.pageLimit);

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
    loader(true);
    this.shopService.getFilterData().then(res => {
      loader(false);
      this.commandata = res;
    });
  }

  getProducts(pageNo, pageLimit) {
    loader(true);
    this.shopService.getProducts(pageNo, pageLimit).then(res => {
      loader(false);
      this.products = res;
    })
  }

  serialize = function(obj) {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  changeFilter(pageNo, pageLimit) {
    loader(true);
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
    this.shopService.getFilter(queryString, pageNo, pageLimit).then(res => {
      this.products = res;
      loader(false);
    });
  }

  render() {
    const { commandata } = this;
    const { products } = this;
    return html`
  <div class="container">
    <div class="row">
    <div class="col s3 hide-on-med-and-down">
       <aside>
          <p class="filter-text">FILTER BY</p>
          <div>
             <form class="col s12">
                <div class="row">
                <div class="col s12">
                  <div class="input-field margin-top-0">
                    <select id="select-collection" @change="${(e)=> { this.changeFilter(this.pageNo, this.pageLimit)}}">
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
                  <div class="input-field margin-top-0">
                    <select id="select-color" @change="${(e)=> { this.changeFilter(this.pageNo, this.pageLimit)}}">
                    <option value="" disabled selected>Choose your color</option>
                      ${ commandata.colors.map(item => {
                        return html`<option value="${item.color_id}">${item.color_label}</option>`
                      })
                    }
                    </select>
                    <label></label>
                  </div>
                </div>
                <div class="col s12">
                <div class="">
                  <select id="select-categroy" @change="${(e)=> { this.changeFilter(this.pageNo, this.pageLimit)}}">
                    <option value="" disabled selected>Choose your category</option>
                    ${ commandata.category.map(item => {
                      return html`<option class="grey text-darken-4" value="${item.category_id}">${item.category_label}</option>`
                    })
                  }
                  </select>
                  <label></label>
                </div>
              </div>
                <div class="col s12 margin-top">
                    <label for="collection" class="price-label">Price Range</label>
                    <p class="range-field">
                      <input type="range" @change="${(e)=> { this.changeFilter(this.pageNo, this.pageLimit)}}" id="price" min="${commandata.price_range.min}" max="${commandata.price_range.max}" />
                      <span class="price-mm">$${commandata.price_range.min}</span> <span class="price-mm right"> $${commandata.price_range.max}+</span>
                    </p>
                  </div>
                </div>
             </form>
          </div>
       </aside>
    </div>
    <div class="col s12 m12 l9 xl9">
       <main>
       <div class="no-products">${ products.length === 0 ? "No Products Available" : ""}</div>
      ${ products.map(item => {
        return html`<div class="col s12 m6 l6 xl4">
          <div class="image">
            <a href="product/${item.id}" class="product-link">
              <img src="${item.cover_image}" alt="cover-image" class="product-image"/>
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
              <img src="../src/assets/icon/shopping-cart.png" alt="cart" />
            </div>
          </div>
        </div>`
      })
      }
  </main>
    </div>
 </div>
  <div class="row pagination-wrapper">
   <div class="col s12">
      <ul class="pagination">
        ${Array( Math.round(products.length / this.pageLimit)).fill().map((i, index) => {
            return html`<li class="active"><a href="javascript:void(0)" @click="${()=> this.changeFilter(index + 1, this.pageLimit)}" >${index + 1}</a></li>`
          })
        }
        <li class="waves-effect"><a href="javascript:void(0)"><i class="material-icons">chevron_right</i></a></li>
      </ul>
   </div>
  </div>
  <!--Sidebar COde -->
  <ul id="slide-out-2" class="sidenav" >
  
  <div class="">
    <h6 class="sidebar-filter">FILTER</h6>
  </div>
  <form class="row margin-top-20">
  <div class="row margin-top-20">
  <div class="col s12">
    <div class="input-field margin-top-0">
      <select id="select-collection" @change="${(e)=> { this.changeFilter(this.pageNo, this.pageLimit)}}">
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
    <div class="input-field margin-top-0">
      <select id="select-color" @click="${(e)=> { this.changeFilter(this.pageNo, this.pageLimit)}}">
      <option value="" disabled selected>Choose your color</option>
        ${ commandata.colors.map(item => {
          return html`<option value="${item.color_id}">${item.color_label}</option>`
        })
      }
      </select>
      <label></label>
    </div>
  </div>
  <div class="col s12">
  <div class="">
    <select id="select-categroy" @click="${(e)=> { this.changeFilter(this.pageNo, this.pageLimit)}}">
      <option value="" disabled selected>Choose your category</option>
      ${ commandata.category.map(item => {
        return html`<option class="grey text-darken-4" value="${item.category_id}">${item.category_label}</option>`
      })
    }
    </select>
    <label></label>
  </div>
</div>
  <div class="col s12 margin-top">
      <label for="collection" class="price-label">Price Range</label>
      <p class="range-field">
        <input type="range" @click="${(e)=> { this.changeFilter(this.pageNo, this.pageLimit)}}" id="price" min="${commandata.price_range.min}" max="${commandata.price_range.max}" />
        <span class="price-mm">$${commandata.price_range.min}</span> <span class="price-mm right"> $${commandata.price_range.max}+</span>
      </p>
    </div>
  </div>
</form>
  </ul>
  <a href="#" data-target="slide-out-2" class="sidenav-trigger btn-floating btn-large black" id="sidebar-filter"><i class="material-icons">filter_list</i></a>
</div> 

 `;
  }
}

customElements.define('app-shop', Shop);
