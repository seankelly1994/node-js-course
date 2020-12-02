// Object property shorthand
// const name = 'Sean'
// const userAge = 26
// const user = {
//     name: name,
//     age: userAge,
//     location: 'Durban'
// }

// console.log(user)

const product = {
    label: 'Red Notebook',
    price: 30,
    stock: 201,
    salePrice: undefined 
}

// const label = product.label
// const stock = product.stock

// const {label, stock} = product
// console.log(label)
// console.log(stock)

const transaction = (type, {label, stock}) => {
    console.log(label)
}

transaction('order', product)