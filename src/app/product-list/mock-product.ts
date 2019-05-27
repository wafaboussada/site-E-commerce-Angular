import { Product } from './product';

export const PRODUCTS: Product[] = [
  {
	id: 1,
    name: 'Pantalon',
    disponibility: true,
    price: 15,
    category: 'clothes',
	picture: "/assets/img/product_1.jpg",
	created: new Date()
	},
	{
	id: 2,
    name: 'Chemise',
    disponibility: false,
    price: 25,
    category: 'clothes',
	  picture: "/assets/img//product_2.jpg",
		created: new Date()
  },
  {
		id: 3,
    name: 'Pantacourt',
    disponibility: true,
    price: 8,
    category: 'clothes',
	  picture: "/assets/img//product_3.jpg",
		created: new Date()
  },
  {
		id: 4,
    name: 'Veste',
    disponibility: true,
    price: 72,
    category: 'clothes',
	  picture: "/assets/img//product_4.jpg",
		created: new Date()
  },
  {
	id: 5,
    name: 'Costume',
    disponibility: true,
    price: 125,
    category: 'clothes',
	picture: "/assets/img//product_5.jpg",
	created: new Date()
  },
  {
		id: 6,
    name: 'Gilet',
    disponibility: false,
    price: 83,
    category: 'clothes',
	  picture: "/assets/img//product_6.jpg",
		created: new Date()
	},
]
