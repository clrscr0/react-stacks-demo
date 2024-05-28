const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

/**
 * @swagger
 * /languages:
 *   get:
 *     summary: Get a list of programming languages
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;