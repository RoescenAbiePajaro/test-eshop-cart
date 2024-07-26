import { Tag } from "./app/shared/Tag";
import { productsi } from "./app/shared/productsi"; // Food from Food.ts
export const sample_products: productsi[] = [ //  const sample_foods: Food [] = [] {}  //
{
    id: '1',
    name: 'Yellow Fabric Tshirt',
    price: 30,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    imageUrl: 'a41c642f417551df48b038db763c302a.jpg_720x720q80.jpg',
    origins: ['Made in America'],
    tags: ['Tshirt','Casual'],
},

{
    id: '2',
    name: 'USB Driver',
    price: 8.55,
    //cookTime:'40-50'//
    //favorite: false//
    //stars: 4.0,//
    origins: ['Made in China'],
    imageUrl: 'usb-driver.jpg',
    tags: ['Gadgets','Electronics'],
},

{
    id: '3',
    name: 'Bracelet',
    price: 51.31,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in Thailand'],
    imageUrl: 'bracelet.jpg',
    tags: ['Accesories'],
},

{
    id: '4',
    name: 'Ring',
    price: 100,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in France'],
    imageUrl: '1_1_8e957653-5f7f-4345-84ea-a1c9ae26f028_1600x.webp',
    tags: ['Accesories'],
},
{
    id: '5',
    name: 'Toothbrush',
    price: 0.17,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in France'],
    imageUrl: 'toothbrush.avif',
    tags: ['Hygiene'],
},
{
    id: '6',
    name: 'Soap',
    price: 0.15,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in California'],
    imageUrl: 'soap.webp',
    tags: ['Hygiene'],
},
{
    id: '51.31',
    name: 'Bottle Shampoo',
    price: 5.41,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in France'],
    imageUrl: 'Bottle-Shampoo.webp',
    tags: ['Hygiene'],
},
{
    id: '8',
    name: 'Red T-Shirt',
    price: 60,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in China'],
    imageUrl: 'red shirt.jpg',
    tags: ['Tshirt','Casual'],
},


]   

export const sample_tags:Tag[] = [
    {name: 'All', count: 7},
    {name: 'Hygiene', count: 3},
    {name: 'Accesories', count: 2},
    {name: 'Tshirt', count:2 },
    {name: 'Casual', count:2 },
    {name: 'Gadgets', count:1 },
    {name: 'Electronics', count:1 },


]