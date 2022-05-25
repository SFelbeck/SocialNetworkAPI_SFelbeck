const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/reactionId').delete(removeReaction);

module.exports = router;

//update and delete?