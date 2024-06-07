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

/**
 * @swagger
 * /languages/{id}:
 *   get:
 *     summary: Get programming language by ID
 *     description: Retrieve details of a specific programming language record.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Programming Language ID
 *     responses:
 *       200:
 *         description: Successful response with language details
 *       404:
 *         description: Language record not found
 */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.search(req.params.id));
  } catch (err) {
    console.error(`Error while searching programming languages `, err.message);
    next(err);
  }
});

module.exports = router;