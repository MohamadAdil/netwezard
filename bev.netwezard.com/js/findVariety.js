(function() {

  const findVariety = (id, root = variants, labels = []) => {
    if (labels.length === 3 && root.id === parseFloat(id)) {
      return labels;
    }

    let result = null;
  
    for (const [k,v] of Object.entries(root)) {
      if (typeof(v) === 'object') {
        labels.push(k);
        result = findVariety(id, root[k], labels);
        if (result !== null) {
          break;
        } else {
          labels.pop();        
        }
      }
    }
    return result;
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = findVariety;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return findVariety;
      });
    }
    else {
      window.findVariety = findVariety;
    }
  }

  
})();


