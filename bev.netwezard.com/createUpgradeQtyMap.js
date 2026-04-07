const variants = require('./js/variants.js');


const v4 = require('uuid').v4;

const flavors = Object.keys(variants.onetime.twentyfour);

const maps = [];


for (const orderType of ["onetime", "subscription"]) {
  for (const flavor of flavors) {
    
    const oldVariant = variants[orderType]["eight"][flavor];
    const newVariant = variants[orderType]["twentyfour"][flavor];
    

    if (oldVariant && newVariant) {    
      maps.push({
        fromVariantId: oldVariant.id, 
        toVariantId: newVariant.id,
        quantity: 1,
        mapId: v4()
      })
      
      
    } else {
      console.log(`NO ${orderType} eight ${flavor} ${oldVariant} ${newVariant}`);
    }

    const oldVariant2 = variants[orderType]["twentyfour"][flavor];
    const newVariant2 = variants[orderType]["fortyeight"][flavor];

    if (oldVariant2 && newVariant2) {
      maps.push({
        fromVariantId: oldVariant2.id, 
        toVariantId: newVariant2.id,
        quantity: 1,
        mapId: v4()
      });
      
    } else {
      console.log(`NO ${orderType} twentyfour ${flavor}`);
    }


  }
}


const result = {
  "id": "gid://shopify/ProductVariant/37748081656001",
  "maps": maps,
  "productVariantId": "gid://shopify/ProductVariant/37748081656001"
}
console.log(JSON.stringify(result, null, 4));