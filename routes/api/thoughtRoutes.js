const router = require('express').Router();
//adds all functions from thoughtController
const {
  getSingleThought,
  getThoughts,
  createThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

//all of these set the functions from thoughtController to the correct routes
router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/reactionId').delete(removeReaction);

module.exports = router;
