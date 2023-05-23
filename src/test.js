

// 快排
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

// 格式化日期
function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

// 过滤数组
function filterArr(arr, key, value) {
    return arr.filter(item => item[key] === value);
}

// 数组去重
function uniqueArr(arr) {
    return Array.from(new Set(arr));
}
// 测试格式化日期
describe('formatDate', () => {
    it('should return the correct date', () => {
        expect(formatDate(new Date(2018, 1, 1), 'yyyy-MM-dd')).toBe('2018-02-01');
    });
});

// 测试快排
describe('quickSort', () => {
    it('should return the correct sorted array', () => {
        expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
    });
});

// 发送http请求
function sendHttpRequest(url, method, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send(data);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
}

// 伪装成浏览器
function fakeBrowser() {
    let userAgent = navigator.userAgent;
    let isOpera = userAgent.indexOf('Opera') > -1;
    if (isOpera) {
        return 'Opera';
    }
    if (userAgent.indexOf('Firefox') > -1) {
        return 'FF';
    }
    if (userAgent.indexOf('Chrome') > -1) {
        return 'Chrome';
    }
    if (userAgent.indexOf('Safari') > -1) {
        return 'Safari';
    }
    if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
        return 'IE';
    }
}

// 针对操作系统的模拟
function fakeOS() {
    let userAgent = navigator.userAgent;
    let isWindows = userAgent.indexOf('Windows') > -1;
    if (isWindows) {
        return 'Windows';
    }
    let isMac = userAgent.indexOf('Mac') > -1;
    if (isMac) {
        return 'Mac';
    }
    let isX11 = userAgent.indexOf('X11') > -1;
    if (isX11) {
        return 'Unix';
    }
    let isLinux = userAgent.indexOf('Linux') > -1;
    if (isLinux) {
        return 'Linux';
    }
}

// 模拟带验证码的登录
function fakeLogin(username, password, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`username=${username}&password=${password}`);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
}

// 模拟退火算法
function simulatedAnnealing(initTemp, endTemp, coolingRate, initState, energyFunc, acceptFunc) {
    let temp = initTemp;
    let currentState = initState;
    let bestState = currentState;
    let bestEnergy = energyFunc(currentState);
    while (temp > endTemp) {
        let nextState = acceptFunc(currentState);
        let nextEnergy = energyFunc(nextState);
        if (nextEnergy < bestEnergy) {
            bestState = nextState;
            bestEnergy = nextEnergy;
        }
        if (Math.random() < Math.exp((bestEnergy - nextEnergy) / temp)) {
            currentState = nextState;
        }
        temp *= coolingRate;
    }
    return bestState;
}

// 蚁群算法
function antColony(n, m, alpha, beta, rho, Q, initState, energyFunc, acceptFunc) {
    let ants = [];
    for (let i = 0; i < n; i++) {
        ants.push({
            state: initState(),
            energy: energyFunc(initState())
        });
    }
    let bestState = ants[0].state;
    let bestEnergy = ants[0].energy;
    for (let i = 0; i < m; i++) {
        let nextStates = ants.map(ant => {
            let nextState = ant.state;
            for (let j = 0; j < Q; j++) {
                let r = Math.random();
                if (r < alpha) {
                    nextState = acceptFunc(nextState);
                } else if (r < alpha + beta) {
                    let candidateStates = [];
                    for (let k = 0; k < n; k++) {
                        if (k !== i) {
                            candidateStates.push(ants[k].state);
                        }
                    }
                    let candidateState = candidateStates[Math.floor(Math.random() * candidateStates.length)];
                    if (Math.random() < rho) {
                        nextState = candidateState;
                    }
                }
            }
            return {
                state: nextState,
                energy: energyFunc(nextState)
            };
        });
        let bestNextState = nextStates[0];
        for (let j = 1; j < nextStates.length; j++) {
            if (nextStates[j].energy < bestNextState.energy) {
                bestNextState = nextStates[j];
            }
        }
        if (bestNextState.energy < bestEnergy) {
            bestState = bestNextState.state;
            bestEnergy = bestNextState.energy;
        }
        ants = nextStates;
    }
    return {
        state: bestState,
        energy: bestEnergy
    };
}

// floyed算法
function floyed(n, edges) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist.push([]);
        for (let j = 0; j < n; j++) {
            dist[i].push(0);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
        dist[v][u] = w;
    }
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    return dist;
}

// dijskira算法
function dijsktra(n, edges, start) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist.push([]);
        for (let j = 0; j < n; j++) {
            dist[i].push(0);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
        dist[v][u] = w;
    }
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    let queue = [];
    queue.push(start);
    visited[start] = true;
    while (queue.length > 0) {
        let u = queue.shift();
        for (let i = 0; i < n; i++) {
            if (dist[u][i] !== 0 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }
    return dist;
}

// 图的遍历
function dfs(n, edges, start) {
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    let stack = [];
    stack.push(start);
    visited[start] = true;
    while (stack.length > 0) {
        let u = stack.pop();
        for (let i = 0; i < n; i++) {
            if (edges[u][i] !== 0 && !visited[i]) {
                stack.push(i);
                visited[i] = true;
            }
        }
    }
    return visited;
}

// 主席树
function presidentTree(n, edges) {
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            stack.push(i);
            visited[i] = true;
            while (stack.length > 0) {
                let u = stack.pop();
                for (let j = 0; j < n; j++) {
                    if (edges[u][j] !== 0 && !visited[j]) {
                        stack.push(j);
                        visited[j] = true;
                    }
                }
            }
        }
    }
    return visited;
}

// 图的最短路径
function dijsktra(n, edges, start) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist.push([]);
        for (let j = 0; j < n; j++) {
            dist[i].push(0);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
        dist[v][u] = w;
    }
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    let queue = [];
    queue.push(start);
    visited[start] = true;
    while (queue.length > 0) {
        let u = queue.shift();
        for (let i = 0; i < n; i++) {
            if (dist[u][i] !== 0 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }
    return dist;
}

// 滑动窗口
function slidingWindow(n, edges, start, end) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist.push([]);
        for (let j = 0; j < n; j++) {
            dist[i].push(0);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
        dist[v][u] = w;
    }
    let queue = [];
    queue.push(start);
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    visited[start] = true;
    while (queue.length > 0) {
        let u = queue.shift();
        for (let i = 0; i < n; i++) {
            if (dist[u][i] !== 0 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }
    return dist;
}

// 优先队列
function priorityQueue(n, edges) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist.push([]);
        for (let j = 0; j < n; j++) {
            dist[i].push(0);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
        dist[v][u] = w;
    }
    let queue = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dist[i][j] !== 0) {
                queue.push([i, j, dist[i][j]]);
            }
        }
    }
    queue.sort((a, b) => a[2] - b[2]);
    return queue;
}

// 背包问题
function knapsack(n, edges, start, end, weight) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist.push([]);
        for (let j = 0; j < n; j++) {
            dist[i].push(0);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
        dist[v][u] = w;
    }
    let queue = [];
    queue.push(start);
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    visited[start] = true;
    while (queue.length > 0) {
        let u = queue.shift();
        for (let i = 0; i < n; i++) {
            if (dist[u][i] !== 0 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }
    return dist;
}

// 图的最小生成树
function prim(n, edges) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist.push([]);
        for (let j = 0; j < n; j++) {
            dist[i].push(0);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
        dist[v][u] = w;
    }
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    let queue = [];
    queue.push(0);
    visited[0] = true;
    while (queue.length > 0) {
        let u = queue.shift();
        for (let i = 0; i < n; i++) {
            if (dist[u][i] !== 0 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }
    return dist;
}

// 欧拉回路
function euler(n, edges) {
    let dist = [];
    for (let i = 0; i < n; i++) {
        dist.push([]);
        for (let j = 0; j < n; j++) {
            dist[i].push(0);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i];
        dist[u][v] = w;
        dist[v][u] = w;
    }
    let queue = [];
    queue.push(0);
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    visited[0] = true;
    while (queue.length > 0) {
        let u = queue.shift();
        for (let i = 0; i < n; i++) {
            if (dist[u][i] !== 0 && !visited[i]) {
                queue.push(i);
                visited[i] = true;
            }
        }
    }
    return dist;
}

// fast inverse square root
function fastInvSqrt(x) {
    let xhalf = 0.5 * x;
    i = Math.floor(x);
    x = 0.5 * x;
    i = 0x5f3759df - (i >> 1);
    x = x * (1.5 - xhalf * x * x);
    return x;
}