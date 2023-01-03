// Imports
const db = require("../helper/database.connect")
const { v4: uuidv4 } = require('uuid')

const productsModel = {
    get: function (queryParams) {
        return new Promise((success, failed) => {
            db.query(`SELECT * FROM products ${this.search(queryParams.search)} ${this.sort(queryParams.sort)} ${this.order(queryParams.order)}`, (error, result) => {
                if (error) {
                    return failed(error.message)
                } else {
                    return success(result.rows)
                }
            })
        })
    },
    add: (req) => {
        const { productname, price, category, productimage } = req.body
        return new Promise((success, failed) => {
            db.query(`INSERT INTO products (id, productname, price, category, productimage) VALUES ('${uuidv4()}','${productname}',${price},'${category}','${productimage}')`, (error, result) => {
                if (error) {
                    return failed(error.message)
                } else {
                    return success('Data successfully added to database')
                }
            })
        })
    },
    edit: (req, id) => {
        const { productname, price, category, productimage } = req.body
        return new Promise((success, failed) => {
            db.query(`SELECT * FROM products WHERE id='${id}'`, (error, dataRes) => {
                if (error) {
                    return failed(error.message)
                } else {
                    db.query(`UPDATE products SET productname='${productname || dataRes.rows[0].productname}', price=${price || dataRes.rows[0].price},  category='${category || dataRes.rows[0].category}',  productimage='${productimage || dataRes.rows[0].productimage}' WHERE id='${id}'`, (error, result) => {
                        if (error) {
                            return failed(error.message)
                        } else {
                            return success(`Successfully update data id=${id}`)
                        }
                    })
                }
            })
        })
    },
    remove: (id) => {
        return new Promise((success, failed) => {
            db.query(`DELETE FROM products WHERE id='${id}'`, (error, result) => {
                if (error) {
                    return failed(error.message)
                } else {
                    return success(`Data deleted successfully`)
                }
            })
        })
    },
    search: (queryParams) => {
        if (queryParams) {
            return `WHERE productname LIKE '%${queryParams}%' OR category LIKE '%${queryParams}%'  OR price=${queryParams}`
        } else {
            return
        }
    },
    sort: (queryParams) => {
        if (queryParams) {
            return `ORDER BY ${queryParams}`
        } else {
            return `ORDER BY productname`
        }
    },
    order: (queryParams) => {
        if (queryParams.toUpperCase() === 'DESC') {
            return 'DESC'
        } else {
            return ''
        }
    }
}

// Exports
module.exports = productsModel