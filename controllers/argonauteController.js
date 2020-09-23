const Argonaute = require("../models/argonaute")

exports.all = async (req, res, next) => {
    try {
        const argonautes = await Argonaute.find({})
        console.log(argonautes)
        res.status(200).json(argonautes)
    } catch (error) {
        res.status(500).json({ error: error })
        next(error)
    }
}

exports.store = async (req, res, next) => {
    try {
        let argonaute = new Argonaute(req.body)
        argonaute = await argonaute.save()
        res.status(200).json(argonaute)
    } catch (error) {
        res.status(500).json({ error: error })
        next(error)
    }
}