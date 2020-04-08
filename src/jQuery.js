window.jQuery = function (selectorOrArrayOrTemplate) {
  let elements;
  if (typeof selectorOrArrayOrTemplate === "string") {
    elements = document.querySelectorAll(selectorOrArrayOrTemplate);
  } else if (selectorOrArrayOrTemplate instanceof Array) {
    elements = selectorOrArrayOrTemplate;
  }
  return {
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        const node = elements[i];
        node.classList.add(className);
      }
      return this;
    },
    find(selector) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        const node2 = Array.from(elements[i].querySelectorAll(selector));
        array = array.concat(node2);
      }

      return jQuery(array);
    },
  };
};
