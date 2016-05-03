export default function(params) {

    var burst = new mojs.Burst({
        parent: params[0],
        duration: 1500,
        delay: 300,
        shape: 'circle',
        fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
        x: '50%',
        y: '50%',
        opacity: 0.6,
        radius: { 40: 90 },
        count: 6,
        isRunLess: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    var transit = new mojs.Transit({
        parent: params[0],
        duration: 750,
        type: 'circle',
        radius: { 0: 50 },
        fill: 'transparent',
        stroke: '#988ADE',
        strokeWidth: { 35: 0 },
        opacity: 0.6,
        x: '50%',
        y: '50%',
        isRunLess: true,
        easing: mojs.easing.bezier(0, 1, 0.5, 1)
    });

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

};
