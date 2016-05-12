var animations = {
    hudoken: function(params) {

        var burstOne = new mojs.Burst({
            parent: params[0],
            duration: 600,
            shape: 'circle',
            fill: '#FFFFFF',
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
            count: 6,
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

    },
    boom: function(params) {
        var burst = new mojs.Burst({
            parent: params[0],
            duration: 1500,
            delay: 300,
            shape: 'circle',
            fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
            x: '50%',
            y: '50%',
            opacity: 0.6,
            radius: {
                40: 90
            },
            count: 6,
            isRunLess: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        });
        // ring animation
        var transit = new mojs.Transit({
            parent: params[0],
            duration: 750,
            type: 'circle',
            radius: {
                0: 50
            },
            fill: 'transparent',
            stroke: '#988ADE',
            strokeWidth: {
                35: 0
            },
            opacity: 0.6,
            x: '50%',
            y: '50%',
            isRunLess: true,
            easing: mojs.easing.bezier(0, 1, 0.5, 1)
        });
        // icon scale animation
        var tween = new mojs.Tween({
            duration: 1100,
            onUpdate: function(progress) {
                if (progress > 0.3) {
                    var elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
                    params[1].style.WebkitTransform = params[1].style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
                } else {
                    params[1].style.WebkitTransform = params[1].style.transform = 'scale3d(0,0,1)';
                }
            }
        });

        return [burst, transit, tween];
    }
};

class Animation {

    constructor(params) {

        this.timeline = new mojs.Timeline();
        this.tweens = animations[params.animation](params.elements);
        this.build();

    }

    build() {

        this.tweens.forEach((segment) => {
            this.timeline.add(segment);
        });

    }

};
