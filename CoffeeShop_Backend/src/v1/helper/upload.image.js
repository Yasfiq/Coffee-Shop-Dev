// Imports
const multer = require('multer') // multer


// Save upload image in storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        // eslint-disable-next-line no-undef
        cb(null, `${file.fieldname}_${Date.now()}_${file.originalname.replace(/\s/g, '')}`)
    }
})


const upload = multer({
    storage: storage
}).array('productimage')


const uploadSingle = multer({
    storage: storage
}).single('productimage')


// Export
module.exports = {upload, uploadSingle }