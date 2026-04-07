const variants = require('./js/variants.js');


const v4 = require('uuid').v4;

const flavors = Object.keys(variants.onetime.twentyfour);
const sizes = Object.keys(variants.onetime);
const maps = [];


for (const flavor of flavors) {
  for (const size of sizes) {
    
    const oldVariant = variants["onetime"][size][flavor];
    const newVariant = variants["subscription"][size][flavor];
    
    if (oldVariant && newVariant) {
      maps.push({
        fromVariantId: oldVariant.id, 
        toVariantId: newVariant.id,
        quantity: 1,
        mapId: v4()
      });      
    }
    
  }
}



const result = {
  "id": "gid://shopify/ProductVariant/37748083392705",
  "maps": maps,
  "productVariantId": "gid://shopify/ProductVariant/37748083392705"
}


console.log(JSON.stringify(result, null, 4));