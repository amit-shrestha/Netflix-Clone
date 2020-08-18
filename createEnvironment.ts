const { writeFile } = require('fs');
require('dotenv').config();

const targetPath = `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   production: false,
   API_KEY: "${process.env.API_KEY}"
};
`;

writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Environment created successfully to ${targetPath}`);
});
