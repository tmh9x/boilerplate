import express from 'express';
import fs from 'fs';

console.log(fs.readFileSync('./README.md', 'utf-8'));

const app = express();

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));
