const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const brain = "C:/Users/OZARU/.gemini/antigravity/brain/3c256134-d97d-410f-98aa-b8fd09781232";
const pub = path.join(__dirname, "..", "public");

const targets = [
  { in: path.join(brain, "media__1784572380029.png"), out: "aurum.webp" },
  { in: path.join(brain, "media__1784572422345.png"), out: "nova-dental.webp" },
  { in: path.join(brain, "media__1784572422421.jpg"), out: "elevate-realty.webp" },
];

(async () => {
  for (const t of targets) {
    const outPath = path.join(pub, t.out);
    await sharp(t.in)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);
    const meta = await sharp(outPath).metadata();
    const outSize = (fs.statSync(outPath).size / 1024).toFixed(0);
    console.log(`OK ${t.out} (${outSize}KB, ${meta.width}x${meta.height})`);
  }
})();
