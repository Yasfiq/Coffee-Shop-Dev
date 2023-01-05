/* eslint-disable no-undef */
// Imports
const productsModel = require('../models/model.products')
// eslint-disable-next-line no-undef
const validator = require('validator') // validator

const productsController = {
    get: (req, res) => {
        const page = (req.query.page && req.query.page > 0) ? parseInt(req.query.page) : 1
        const limit = (req.query.limit && req.query.limit > 0) ? parseInt(req.query.limit) : 10
        const offset = limit * (page - 1)
        return productsModel.get(req.query, limit, offset).then(result => {
            return res.send({
                Message: 'Successfully fetch data from database',
                TotalRows: result.totalRows,
                TotalPage: result.totalPage,
                Data: result.Data
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to fetch, Error: ${error}`
            })
        })
    },
    getById: (req, res) => {
        const id = req.params.id
        return productsModel.getById(id).then(result => {
            return res.send({
                Message: `Successfully fetch data id=${id} from database`,
                Data: result
            })
        })
    },
    add: (req, res) => {
        let productname = req.body.productname.replace(/[\s]/g, '')
        let category = req.body.category.replace(/[\s]/g, '')
        if (!validator.isAlphanumeric(productname) || !validator.isAlphanumeric(category)) {
            return res.send({
                Message: 'Product name and category can only consist of letters and numbers!'
            })
        } else if (!validator.isNumeric(req.body.price)) {
            return res.send({
                Message: 'Price must consist of numbers!'
            })
        } else {
            return productsModel.add(req).then(result => {
                return res.send({
                    Message: result
                })
            }).catch(error => {
                return res.send({
                    Message: `Failed to add, Error: ${error}`
                })
            })
        }
    },
    edit: async (req, res) => {
        const id = req.params.id
        return await productsModel.edit(req, id).then(result => {
            return res.send({
                Message: result,
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to update data, Error: ${error}`
            })
        })
    },
    remove: (req, res) => {
        const id = req.params.id
        return productsModel.remove(id).then(result => {
            return res.send({
                Message: result
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to delete data, Error: ${error}`
            })
        })
    }
}

// Exports
module.exports = productsController