

import helloworld  from "./helloworld.js";

helloworld()
console.info(import.meta.url)

// import { fileURLToPath } from 'url';
import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(import.meta.url);
console.info(__dirname)