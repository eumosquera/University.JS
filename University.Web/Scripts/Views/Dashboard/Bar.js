﻿Morris.Bar({
    element: 'graph',
    data: [
        { x: '2011 Q1', y: 3, z: 2, a: 3 },
        { x: '2011 Q2', y: 2, z: null, a: 1 },
        { x: '2011 Q3', y: 0, z: 2, a: 4 },
        { x: '2011 Q4', y: 2, z: 4, a: 3 }
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Y', 'Z', 'A']
}).on('click', function (i, row) {
    console.log(i, row);
});
