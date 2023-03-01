import fetch from 'node-fetch';
import { exec } from 'child_process';

async function main() {
  const apisResponse = await fetch('https://api.publicapis.org/entries');
  const { entries } = await apisResponse.json();

  const urls = entries
    .filter(entry => !entry.Auth)
    .map(entry => entry.Link);

  for (const url of urls) {
    try {
      const start = Date.now();
      const response = await fetch(url);
      if (response.ok && Date.now() - start < 1000) {
        console.log(url);
        exec(`open ${url}`);
      }
    } catch (_) {}
  }
}

main();
