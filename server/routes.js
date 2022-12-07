const express = require("express")
const Review = require("./reviewSchema") // new
const router = express.Router()

// Get all posts
router.get("/reviews", async (req, res) => {
	 res.header("Access-Control-Allow-Origin", "*");
	const result = await Review.find()
	res.send(result)
})

router.get("/reviews/:name", async (req, res) => {
	 res.header("Access-Control-Allow-Origin", "*");
	try{
		const result = await Review.findOne({name: req.params.name})
		res.send(result)
	} catch{
		res.status(404)
		res.send("Restraunt not Found")
	}
	
})

router.post("/reviews", async (req, res) => {

	console.log(req.body)
	const review = new Review({
		name: req.body.name,
		rating: req.body.rating,
		website: "test",
		review: req.body.review
	})
	await review.save()
	res.send(review)
})


router.delete('/reviews/:name', async (req, res) => {
	try {
		console.log(req)
		await Review.deleteOne({name: req.params.name })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({error: "Post doesn't exist!"})
	}
})

module.exports = router