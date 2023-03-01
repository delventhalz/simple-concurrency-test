import fetch from 'node-fetch';
import urlList from './urls-reliable.json' assert { type: 'json' };

function range(size) {
  return Array(size).fill(null).map((_, i) => i);
}

async function test(count) {
  const label = `${count} Requests`;

  const allUrls = range(Math.ceil(count / urlList.length)).flatMap(() => urlList);
  const start = Math.floor(Math.random() * (allUrls.length - count));
  const fetchList = allUrls.slice(start, start + count);

  console.log('-----------------------');

  console.time(label);
  const responses = await Promise.all(fetchList.map(url => fetch(url)));
  console.timeEnd(label);

  const successCount = responses.filter(response => response.ok).length;
  const failures = responses.flatMap((response, i) => response.ok ? [] : urls[i]);

  console.log(`Success Count:`, successCount);
  if (failures.length > 0) {
    console.log('Failures:', JSON.stringify(failures, null, 2));
  }

  console.log('-----------------------\n');
}

async function main() {
  await test(1);
  await test(10);
  await test(100);
  await test(1000);
}

main();
