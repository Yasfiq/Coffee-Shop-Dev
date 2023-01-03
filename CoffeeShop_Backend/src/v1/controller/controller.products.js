// Imports
const productsModel = require("../models/model.products")

const productsController = {
    get: (req, res) => {
        return productsModel.get(req.query).then(result => {
            return res.send({
                Message: 'Successfully fetch data from database',
                Data: result
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to fetch, Error: ${error}`
            })
        })
    },
    add: (req, res) => {
        return productsModel.add(req).then(result => {
            return res.send({
                Message: result
            })
        }).catch(error => {
            return res.send({
                Message: `Failed to add, Error: ${error}`
            })
        })
    },
    edit: (req, res) => {
        const id = req.params.id
        return productsModel.edit(req, id).then(result => {
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