const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

router.get('/', mahasiswaController.getAllMahasiswa);
router.get('/:nim', mahasiswaController.getMahasiswaByNim);
router.post('/', mahasiswaController.createMahasiswa);
router.put('/:nim', mahasiswaController.updateMahasiswa);
router.delete('/:nim', mahasiswaController.deleteMahasiswa);

module.exports = router;
