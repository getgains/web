export default function(params) {

    var burstOne = new mojs.Burst({
        parent: params[0],
        duration: 600,
        shape: 'circle',
        fill: '#C0C1C3',
        x: '0%',
        y: '0%',
        childOptions: {
            radius: {
                60: 0
            },
            type: 'line',
            stroke: '#988ADE',
            strokeWidth: 1
        },
        radius: {
            80: 250
        },
        angle: -90,
        count: 1,
        isRunLess: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    var burstTwo = new mojs.Burst({
        parent: params[0],
        duration: 600,
        shape: 'circle',
        fill: '#C0C1C3',
        x: '0%',
        y: '50%',
        childOptions: {
            radius: {
                60: 0
            },
            type: 'line',
            stroke: '#988ADE',
            strokeWidth: 1
        },
        radius: {
            80: 200
        },
        angle: -90,
        count: 1,
        isRunLess: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    var burstThree = new mojs.Burst({
        parent: params[0],
        duration: 600,
        shape: 'circle',
        fill: '#C0C1C3',
        x: '0%',
        y: '100%',
        childOptions: {
            radius: {
                60: 0
            },
            type: 'line',
            stroke: '#988ADE',
            strokeWidth: 1
        },
        radius: {
            80: 250
        },
        angle: -90,
        count: 1,
        isRunLess: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    var burstFour = new mojs.Burst({
        parent: params[0],
        duration: 600,
        delay: 150,
        shape: 'circle',
        fill: '#C0C1C3',
        x: '50%',
        y: '50%',
        childOptions: {
            radius: {
                30: 0
            },
            type: 'line',
            stroke: '#988ADE',
            strokeWidth: {
                2: 1
            }
        },
        radius: {
            60: 90
        },
        degree: -90,
        angle: 135,
        count: 20,
        isRunLess: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    var tween = new mojs.Tween({
        duration: 1000,
        onUpdate: function(progress) {
            var elasticOutProgress = mojs.easing.elastic.out(progress);
            params[1].style.WebkitTransform = params[1].style.transform = 'translate3d(' + -50 * (1 - elasticOutProgress) + '%,0,0)';
        }
    });

    return [burstOne, burstTwo, burstThree, burstFour, tween];

};
