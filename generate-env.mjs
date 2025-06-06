import fs from 'fs';
import 'dotenv/config';

const envPath = './src/environments/environment.prod.ts';
const token = process.env.HF_API_TOKEN;

const content = `
export const environment = {
  production: true,
  hfToken: '${token}'
};
`;

fs.writeFileSync(envPath, content);
console.log(`✅ environment.prod.ts written with HF token.`);
