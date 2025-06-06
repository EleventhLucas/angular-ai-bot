import fs from 'fs';
import 'dotenv/config';

const token = process.env.HF_API_TOKEN;
if (!token) throw new Error('HF_API_TOKEN not set in .env or env vars');

const envDir = './src/environments';
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

const envTemplate = (isProd) => `
export const environment = {
  production: ${isProd},
  hfToken: '${token}'
};
`;

fs.writeFileSync(`${envDir}/environment.ts`, envTemplate(false));
fs.writeFileSync(`${envDir}/environment.prod.ts`, envTemplate(true));

console.log('environment.ts and environment.prod.ts updated with HF token');
