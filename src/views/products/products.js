import { html } from "lit-html";

export default class Product {
    getHtml() {
        return html`
        <div class="row">
        <div class="col s4">
          <aside>
              <p>FILTER BY</p>
              <div class="row">
                <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                          <label for="collection">Collection</label>
                          <select id="collection">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </select>
                      </div>
                      <div class="input-field col s12">
                      <select>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                      <label
                     </div> 
                </form>
              </div>
          </aside>
        </div>
        <div class="col s8">
          <main>

          </main>
        </div>
    </div>
        `;
    }

    buttonEvent() {

    }
}
