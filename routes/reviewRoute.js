const router = require('express').Router({ mergeParams: true });
const {
  getReviews,
  createReview,
  deleteReview,
  updateReview,
  setTourUserIds,
  getReview
} = require('./../controller/reviewController');
const { protect, restrictTo } = require('./../controller/authController');

/* mergeParams: true makes all routes starting with any of the following
 POST /tour/245as/reviews
 POST /reviews
 to be redirected to any matching route */

router.use(protect);

router
  .route('/')
  .get(getReviews)
  .post(restrictTo('user'), setTourUserIds, createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);

module.exports = router;
