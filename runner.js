const app = require('./app')

app.start(() => console.log('started app...'))

var metrics = require('datadog-metrics');
metrics.init({ host: 'myhost', prefix: 'myapp.' });

function collectMemoryStats() {
    var memUsage = process.memoryUsage();
    metrics.gauge('memory.rss', memUsage.rss);
    metrics.gauge('memory.heapTotal', memUsage.heapTotal);
    metrics.gauge('memory.heapUsed', memUsage.heapUsed);
    metrics.increment('memory.statsReported');
}

setInterval(collectMemoryStats, 500);


const stop = () => app.stop(() => console.log('stopped app...'))
process.once('SIGINT', stop)
process.once('SIGTERM', stop)
