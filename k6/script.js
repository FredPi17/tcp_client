import http from 'k6/http';
import {sleep, check} from 'k6';
import {Counter, Rate} from 'k6/metrics';

// A simple counter for http requests
const myFailRate = new Rate('failed requests');
export const requests = new Counter('http_reqs');

// you can specify stages of your test (ramp up/down patterns) through the options object
// target is the number of VUs you are aiming for

export const options = {
    stages: [
        {target: 100, duration: '1m'},
    ],
    thresholds: {
        'failed requests': ['rate<0.1'],
        requests: ['count < 100'],
    },
};

export default function () {
    // our HTTP request, note that we are saving the response to res, which can be accessed later

    const res = http.get('http://localhost:8000/api/students');

    sleep(1);

    const checkRes = check(res, {
        'status is 200': r => r.status === 200
    });
    myFailRate.add(res.status !== 200);
}
