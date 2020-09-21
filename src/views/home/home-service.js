import { enviroment } from '../../../enviroment';
import { ajax } from '../../helpers/fetch-api.js';

export default class HomeService {
    constructor() { }

    getCollections() {
        return ajax(enviroment.url + 'collections', {}, 'GET');
    }
}