const fs = require("fs");
const path = require("path");

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function organize(dir) {
  const items = fs.readdirSync(dir);

  const folders = [];
  const files = [];

  items.forEach(item => {
    const fullPath = path.join(dir, item);

    if (!fs.existsSync(fullPath)) return;

    const stat = fs.lstatSync(fullPath);

    if (stat.isDirectory()) {
      folders.push(item);
    } else {
      files.push(item);
    }
  });

  const sorted = [...shuffle(folders), ...shuffle(files)];

  sorted.forEach((item, index) => {
    const oldPath = path.join(dir, item);
    const newPath = path.join(dir, `${index}_${item}`);

    fs.renameSync(oldPath, newPath);
  });

  console.log("✅ FolderFirst completed!");
}

module.exports = organize;
