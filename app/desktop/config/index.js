const env = process.env.NODE_ENV;
const config = require(`./config.${env}.json`);

if (!config) {
    throw new Error(`config not found for ${env}`);
}

module.exports = config;