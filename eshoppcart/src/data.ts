import { Tag } from "./app/shared/Tag";
import { productsi } from "./app/shared/productsi"; // Food from Food.ts

export const sample_products: productsi[] = [ //  const sample_foods: Food [] = [] {}  //
{
    id: '',
    name: 'Yellow Fabric Tshirt',
    price: 200,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    imageUrl: 'a41c642f417551df48b038db763c302a.jpg_720x720q80.jpg',
    origins: ['Made in America'],
    tags: ['Tshirt','Casual'],
},

{
    id: '',
    name: 'USB Driver',
    price: 500,
    //cookTime:'40-50'//
    //favorite: false//
    //stars: 4.0,//
    origins: ['Made in China'],
    imageUrl: 'usb-driver.jpg',
    tags: ['Gadgets','Electronics'],
},

{
    id: '',
    name: 'Bracelet',
    price: 5000,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in Thailand'],
    imageUrl: 'bracelet.jpg',
    tags: ['Accesories'],
},

{
    id: '',
    name: 'Ring',
    price: 2000,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in France'],
    imageUrl: 'Bottle-Shampoo.webp',
    tags: ['Accesories'],
},
{
    id: '',
    name: 'Toothbrush',
    price: 2000,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in France'],
    imageUrl: 'toothbrush.avif',
    tags: ['Hygiene'],
},
{
    id: '',
    name: 'Soap',
    price: 2000,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in California'],
    imageUrl: 'soap.webp',
    tags: ['Hygiene'],
},
{
    id: '',
    name: 'Bottle Shampoo',
    price: 2000,
    //cookTime:'40-50'//
    //favorite: false,//
    //stars: 4.0,//
    origins: ['Made in France'],
    imageUrl: 'Bottle-Shampoo.webp',
    tags: ['Hygiene'],
},
]   

export const sample_tags:Tag[] = [
    {name: 'All', count: 7},
    {name: 'Hygiene', count: 3},
    {name: 'Accesories', count: 2},
    {name: 'Tshirt', count:1 },
    {name: 'Casual', count:1 },
    {name: 'Gadgets', count:1 },
    {name: 'Electronics', count:1 },


]