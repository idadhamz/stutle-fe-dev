// fungsi menentukan element dari test-id
const selectorElement = (element) => {
  return document.querySelectorAll(element);
};

/* fungsi untuk melakukan merubah menjadi array dari html collections 
dan melakukan looping untuk mengambil contentnya */
const mappingArrayElement = (element) => {
  return Array.from(element).map((item) => item.innerHTML);
};

const mappingArrayImageElement = (element) => {
  return Array.from(element).map((item) => item.lastChild.currentSrc);
};

// fungsi untuk mengumpulkan dan memperoleh isi untuk array array of object products
const getProducts = () => {
  const element = {
    name: "spnSRPProdName",
    price: "spnSRPProdPrice",
    image: "imgSRPProdMain",
  };

  const elementProductName = selectorElement(`[data-testid=${element.name}]`);
  const elementProductPrice = selectorElement(`[data-testid=${element.price}]`);
  const elementProductImage = selectorElement(`[data-testid=${element.image}]`);
  const elementProductStar = selectorElement(`.css-1ffszw6`);

  const productsName = mappingArrayElement(elementProductName);
  const productsPrice = mappingArrayElement(elementProductPrice);
  const productsImage = mappingArrayImageElement(elementProductImage);
  const productsStar = mappingArrayElement(elementProductStar);

  const products = [];

  for (let i = 0; i < productsName.length; i++) {
    let product = {
      name: productsName[i],
      price: productsPrice[i],
      image: productsImage[i],
      star: parseFloat(productsStar[i]),
    };

    products.push(product);
  }

  return products;
};

console.log(getProducts());
