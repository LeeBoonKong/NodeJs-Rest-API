const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).json({
        message: "Handling GET Request at /products"
    });
});

router.post('/', (req, res, next)=> {
    res.status(201).json({
        message: "Handling POST Request at /products"
    });
});

router.get('/:productId', (req, res, next)=> {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: "You discovered a special parameter",
            id : id
        });
    } else {
        res.status(200).json({
            message : 'You passed an id',
            id : id
        });
    }
});

router.patch('/:productId', (req, res, next)=> {
    res.status(200).json({
        message:'product updated!'
    });
});

router.delete('/:productId', (req, res, next)=> {
    res.status(200).json({
        message:'product deleted!'
    });
});

module.exports = router;