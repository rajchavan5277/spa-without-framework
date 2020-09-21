import { enviroment } from '../../../enviroment';
import { ajax } from '../../helpers/fetch-api.js';

export default class ProductService {
    constructor() { }

    getProduct(id) {
        return ajax(enviroment.url + `products/${id}`, {}, 'GET');
    }
}