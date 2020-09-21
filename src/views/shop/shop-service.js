import { enviroment } from '../../../enviroment';
import { ajax } from '../../helpers/fetch-api.js';

export default class ShopService {
    getFilterData() {
        return ajax(enviroment.url + 'filterData', {}, 'GET');
    }
    getProducts(pageNo, limit,) {
        return ajax(enviroment.url + `products?_page=${pageNo}&_limit=${limit}`, {}, 'GET');
    }
    getFilter(queryString, pageNo, limit) {
        return ajax(enviroment.url + `products?_page=${pageNo}&_limit=${limit}` + queryString, {}, 'GET');
    }
}