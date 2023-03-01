import fetch from 'node-fetch';
import urls from './urls-all.json' assert { type: 'json' };

async function main() {
  for (const url of urls) {
    try {
      const start = Date.now();
      const response = await fetch(url);
      if (response.ok && Date.now() - start < 1000) {
        console.log(url);
      }
    } catch (_) {}
  }
}

main();
