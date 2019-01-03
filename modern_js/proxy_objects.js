// https://blog.campvanilla.com/advanced-guide-javascript-proxy-objects-introduction-301c0fce9432

const handler = {
  get: function(obj, prop) {
    if (obj[prop]) {
      console.log("A value has been accessed");
      return obj[prop]; // Return the value stored in the key being accessed
    } else {
      return `You asked for a "${prop}". Soz. This object doesn't have one of those.`;
    }
  }
};

const initialObj = {
  id: 1,
  name: "Foo Bar"
};

const proxiedObj = new Proxy(initialObj, handler);

console.log(proxiedObj.name);
console.log(proxiedObj.gimlet);

const family = {
  dad: "Richard",
  mum: "Mariko",
  daughter: "Elia",
  son: "Kaito"
};

const handler2 = {
  get: function(object, property) {
    if (object[property]) {
      return object[property];
    } else {
      return `You asked for "${property}". Soz. This family doesn't have one of those.`;
    }
  },
  set: function(object, property, value) {
    console.log(`You are setting the family ${property} as ${value}.`);
    return (object[property] = value);
  }
};

const proxyObject = new Proxy(family, handler2);

console.log(proxyObject.dad);
console.log(proxyObject.mum);
console.log(proxyObject.daughter);
console.log(proxyObject.son);
console.log(proxyObject.dog);

proxyObject.dog = "Ollie";
console.log(proxyObject.dog);
