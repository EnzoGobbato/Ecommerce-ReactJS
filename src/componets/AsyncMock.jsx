const products = [
    {
        id: '1', 
        name: 'Silicone Case Iphone', 
        price: 1800, 
        category: 'fundas', 
        img: "../imagenes/SamsungSilicone.jpg", 
        stock: 150, 
        description:'Fundas de silicona originales para Iphone en todos sus modelos'
    },
    { 
        id: '2',
        name: 'Silicone Case Iphone', 
        price: 1600, 
        category: 'fundas', 
        img: "../imagenes/IphoneSilicone.jpg", 
        stock: 150, 
        description:'Fundas de silicona originales para Samsung en todos sus modelos'
    },
    {
        id: '3', 
        name: 'Silicone Case Motorola', 
        price: 1600, 
        category: 'fundas', 
        img: "../imagenes/MotorolaSilicone.jpg", 
        stock: 100, 
        description:'Fundas de silicona originales para Motorola en todos sus modelos'
},
{ 
        id: '4', 
        name: 'Templado común', 
        price: 400, 
        category: 'templado', 
        img: "../imagenes/protectorcomun.jpg", 
        stock: 280, 
        description:'Relleno de salmón, langostinos, palta y queso crema, con salmón por fuera y salsa de sésamo.'
},
{ 
        id: '5', 
        name: 'Templado 9D', 
        price: 900, 
        category: 'templado', 
        img: "../imagenes/Tempado9D.jpg", 
        stock: 200, 
        description:' Cordoba Roll, Placer Real, Feel Roll, Honey Roll, Philadelphia Roll, Sashimi de Salmón y Niguiri de Salmón.'
},
{
        id: '6', 
        name: 'Hydrogel', 
        price: 1500, 
        category: 'templado', 
        img: "../imagenes/Hydrogel.png", 
        stock: 150, 
        description:'Cordoba Roll, Celerity Roll, Feel Roll, Soul Roll, Niguiri Fuego Thai. Incluye salsa'
},
{
        id: '7', 
        name: 'Cargardor Micro USB', 
        price: 1100, 
        category: 'cargadores', 
        img: "../imagenes/MicroUSB.jpg", 
        stock: 180, 
        description:'Placer Real, Soul Roll, Feel Roll, Geishas de Salmón, Futurama Roll, Sweet Roll, SPF Roll.'
},
{
        id: '8', 
        name: 'Cargardor Type C', 
        price: 2000, 
        category: 'cargadores', 
        img: "../imagenes/TypeC.jpg", 
        stock: 125, 
        description:' Placer Real, Merken Roll, Sweet Roll, Feel Roll, Sashimi de salmón, Niguiri Anticuchero.'  
},
{
        id: '9', 
        name: 'Cargador Iphone', 
        price: 2500, 
        category: 'cargadores', 
        img: "../imagenes/IphoneCargador.jpg", 
        stock: 80, 
        description:' Placer Real, Merken Roll, Sweet Roll, Feel Roll, Sashimi de salmón, Niguiri Anticuchero.'  
},
{
        id: '10', 
        name: 'Samsung A53', 
        price: 72500, 
        category: 'equipos', 
        img: "../imagenes/A53.png", 
        stock: 4, 
        description:' Placer Real, Merken Roll, Sweet Roll, Feel Roll, Sashimi de salmón, Niguiri Anticuchero.'  
},
{
        id: '11', 
        name: 'Samsung A73', 
        price: 142500, 
        category: 'equipos', 
        img: "../imagenes/a73.jpg", 
        stock: 2, 
        description:' Placer Real, Merken Roll, Sweet Roll, Feel Roll, Sashimi de salmón, Niguiri Anticuchero.'  
},
{
        id: '12', 
        name: 'Iphone 11', 
        price: 155000, 
        category: 'equipos', 
        img: "../imagenes/Iphone11.jpg", 
        stock: 6, 
        description:' Placer Real, Merken Roll, Sweet Roll, Feel Roll, Sashimi de salmón, Niguiri Anticuchero.'  
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}