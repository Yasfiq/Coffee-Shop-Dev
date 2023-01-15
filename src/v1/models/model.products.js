// Imports
const db = require('../helper/database.connect')
const { v4: uuidv4 } = require('uuid');

const productsModel = {
    get:()=>{
        return new Promise((success, failed)=>{  
            db.query(`SELECT * FROM products`, (error, result)=>{
                if(error) {
                    return failed(error.message)
                } else {
                    return success(result.rows)
                }
            })
        })
    },
    add:(req, img)=>{
        const { productname, price, category } = req.body
        return new Promise((success, failed)=>{
            db.query(`INSERT INTO products (id, productname, price, category, productimage) VALUES ('${uuidv4()}','${productname}',${price},'${category}','${img}')`, (error, result)=>{
                if(error) {
                    return failed(error.message)
                } else {
                    return success(result.rows)
                }
            })
        })
    },
    delete:(id)=>{
        return 
    }
}

module.exports = productsModel