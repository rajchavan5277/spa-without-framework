import { enviroment } from '../../../enviroment';
import { ajax } from '../../helpers/fetch-api.js';

export default class HomeService {
    constructor() {
        
    }

    getProducts() {
        return ajax(enviroment.url + 'products', {}, 'GET');
    }

    getCollections() {
        return ajax(enviroment.url + 'collections', {}, 'GET');
    }
}