import { getDocs, collection, query, where } from 'firebase/firestore'
import { createAdaptedProductFromFirestore } from '../../Adapter/productAdapter'
import { db } from ".."

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {

        const collectionRef = categoryId

            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')


        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {

                return createAdaptedProductFromFirestore(doc)
            })
            console.log(productsAdapted)

            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}