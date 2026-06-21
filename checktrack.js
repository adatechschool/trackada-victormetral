import {readFileSync, existsSync} from 'fs';
import {join} from 'path';
import {homedir} from 'os';

const cheminHome = homedir();
const cheminAda = join(cheminHome, "ada");

if (existsSync(cheminAda)) {
  console.log("✅ dossier ada");
} else {
  console.log("❌ dossier ada");
}

const contenuJson = readFileSync(join("track.json"), "utf-8");
console.log(contenuJson);
