export function getTimeShort() {
    return new Date().toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
        timeZoneName: 'short',
    });
}

export function durstenfeldShuffle(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

export function inRange(val, left, right) {
    return val >= left && val <= right;
}
