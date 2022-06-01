const {Router} = require('express')
const router = Router()
const Watch = require('../models/Watch')
const hiWatch = require('../middleware/watch.middleware')

// /api/watch/add-item
router.post('/add-item',hiWatch, async (req, res) =>{
        try{
            const exit = await Watch.findOne({name: req.body.name, owner: req.user.userId})
            if(exit){
                return res.status(500).json({message: "Вже додано"})
            }
            const watch = new Watch({
                name: req.body.name, owner: req.user.userId
            })
            await watch.save(function(err,result){
                if (err){
                    res.status(500).json({message: err})
                }
                else{
                    res.status(201).json({result})
                }
            })
        }catch (e){
            res.status(500).json({message: "Сталася помилка, спробуйте ще раз"})
        }
})

// /api/watch/all
router.get('/all', hiWatch ,async (req, res) =>{
        try{
            const watch = await Watch.find({owner: req.user.userId})
            res.json(watch)
        }catch (e){
            res.status(500).json({message: "Сталася помилка, спробуйте ще раз"})
        }
 })

// /api/watch/delete-item
router.post('/delete-item',async (req, res) =>{
    try{
        await Watch.findOneAndDelete({ _id: req.body.data });
    }catch (e){
        res.status(500).json({message: "Сталася помилка, спробуйте ще раз"})
    }
})

module.exports = router
