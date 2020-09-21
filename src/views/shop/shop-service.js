import { enviroment } from '../../../enviroment';
import { ajax } from '../../helpers/fetch-api.js';

export default class ShopService {
    getFilterData() {
        return ajax(enviroment.url + 'filterData', {}, 'GET');
    }
    getProducts() {
        return ajax(enviroment.url + 'products', {}, 'GET');
    }
    getFilter(queryString) {
        return ajax(enviroment.url + 'products?' + queryString, {}, 'GET');
    }
}