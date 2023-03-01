# Simple Concurrency Test

Just a quick script to test how quickly Node can  handle many concurrent fetch
requests. Requires Node.

## Usage

```bash
git clone https://github.com/delventhalz/simple-concurrency-test.git
cd simple-concurrency-test
npm install
npm start
```

## Results

While there is some variability in the results, particularly when making a
single request to a random API, times tend to average out with more requests.
Running this script with Node 16.15.1, on an M1 MacBook Air, with gigabit
internet and WiFi 6 got these results:

- _1 Request:_ 0.1s - 0.3s
- _10 Requests:_ 0.3s - 0.4s
- _100 Requests:_ 1.5 - 1.8s
- _1000 Request:_ 3s - 4.5s
