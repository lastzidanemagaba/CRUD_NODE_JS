const mahasiswaModel = require('../models/mahasiswaModel');

exports.getAllMahasiswa = (req, res) => {
  const data = mahasiswaModel.getAll();
  res.json(data);
};

exports.getMahasiswaByNim = (req, res) => {
  const nim = req.params.nim;
  const mahasiswa = mahasiswaModel.getByNim(nim);
  if (mahasiswa) {
    res.json(mahasiswa);
  } else {
    res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  }
};

exports.createMahasiswa = (req, res) => {
  const { nim, nama, ipk } = req.body;
  const newMahasiswa = { nim, nama, ipk: parseFloat(ipk) };
  mahasiswaModel.create(newMahasiswa);
  res.status(201).json(newMahasiswa);
};

exports.updateMahasiswa = (req, res) => {
  const nim = req.params.nim;
  const updatedData = req.body;
  const updatedMahasiswa = mahasiswaModel.update(nim, updatedData);
  if (updatedMahasiswa) {
    res.json(updatedMahasiswa);
  } else {
    res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  }
};

exports.deleteMahasiswa = (req, res) => {
  const nim = req.params.nim;
  const isDeleted = mahasiswaModel.delete(nim);
  if (isDeleted) {
    res.json({ message: 'Mahasiswa berhasil dihapus' });
  } else {
    res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  }
};
