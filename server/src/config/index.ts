import fs from 'fs';
import path from 'path';

const env = process.env.NODE_ENV || 'development';

const configFile = path.join(__dirname, `${env}.json`);
if (!fs.existsSync(configFile)) {
    throw new Error(`Configuration file not found: ${configFile}`);
}

const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));

export default config;
