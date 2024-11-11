const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/mahasiswa.json');

// Membaca data dari file JSON
function readData() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Menyimpan data ke file JSON
function saveData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
  getAll: () => readData(),
  getByNim: (nim) => readData().find((mhs) => mhs.nim === nim),
  create: (mahasiswa) => {
    const data = readData();
    data.push(mahasiswa);
    saveData(data);
    return mahasiswa;
  },
  update: (nim, updatedData) => {
    const data = readData();
    const index = data.findIndex((mhs) => mhs.nim === nim);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedData };
      saveData(data);
      return data[index];
    }
    return null;
  },
  delete: (nim) => {
    let data = readData();
    const initialLength = data.length;
    data = data.filter((mhs) => mhs.nim !== nim);
    saveData(data);
    return initialLength !== data.length;
  },
};
