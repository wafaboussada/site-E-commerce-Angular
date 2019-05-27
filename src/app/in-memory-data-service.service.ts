import { PRODUCTS } from "./product-list/mock-product";
import {USERS} from './user-list/mock-user-list';
import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = PRODUCTS;
    let users = USERS;
    return { products,
             users };
  }
}
