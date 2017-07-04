var suomiBar = new ProgressBar.Circle(suomi, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: true,
        style: {
            color: 'orange',
            position: 'absolute',
            top: '55%',
            left: '45%',
        },
    },
    from: {
        color: '#ffff66',
        width: 2
    },
    to: {
        color: '#33cc33',
        width: 5
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});

var ruotsiBar = new ProgressBar.Circle(ruotsi, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'bounce',
    duration: 1900,
    text: {
        autoStyleContainer: true,
        style: {
            color: 'orange',
            position: 'absolute',
            top: '55%',
            left: '45%',
        },
    },
    from: {
        color: '#ffff66',
        width: 2
    },
    to: {
        color: '#33cc33',
        width: 5
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});

var englantiBar = new ProgressBar.Circle(englanti, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'bounce',
    duration: 2500,
    text: {
        autoStyleContainer: true,
        style: {
            color: 'orange',
            position: 'absolute',
            top: '55%',
            left: '45%',
        },
    },
    from: {
        color: '#ffff66',
        width: 2
    },
    to: {
        color: '#33cc33',
        width: 5
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
var saksaBar = new ProgressBar.Circle(saksa, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'bounce',
    duration: 1800,
    text: {
        autoStyleContainer: true,
        style: {
            color: 'orange',
            position: 'absolute',
            top: '55%',
            left: '45%',
        },

    },
    from: {
        color: '#ffff66',
        width: 2
    },
    to: {
        color: '#33cc33',
        width: 5
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }
    }
});

const circleBars = [suomiBar,englantiBar,saksaBar,ruotsiBar];



var cplusBar = new ProgressBar.Line(cplus, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            margin: 0,
            transform: null,
            zIndex:100
        },
        value:'C++',
        autoStyleContainer: true
    },
});

var javaBar = new ProgressBar.Line(java, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'Java EE',
        autoStyleContainer: true
    },
});

var csharpBar = new ProgressBar.Line(csharp, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'C#',
        autoStyleContainer: true
    },
});

var pythonBar = new ProgressBar.Line(python, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'Python',
        autoStyleContainer: true
    },
});


var HTMLBar = new ProgressBar.Line(htmlcss, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'HTML&CSS',
        autoStyleContainer: true
    },
});

var jsBar = new ProgressBar.Line(javascript, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'Javascript',
        autoStyleContainer: true
    },
});

var jqueryBar = new ProgressBar.Line(jquery, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'jQuery',
        autoStyleContainer: true
    },
});

var reactreduxBar = new ProgressBar.Line(reactredux, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'React+Redux',
        autoStyleContainer: true
    },
});

var psqlBar = new ProgressBar.Line(psql, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'PostgreSQL',
        autoStyleContainer: true
    },
});

var oracleBar = new ProgressBar.Line(oracle, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: 'none',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '25px'
    },
    from: {
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            left: '5px',
            bottom: '7.5px',
            padding: 0,
            transform: null
        },
        value:'Oracle SQL',
        autoStyleContainer: true
    },
});

const progressBars = [cplusBar,javaBar,csharpBar,pythonBar,HTMLBar, jsBar,jqueryBar,reactreduxBar,psqlBar,oracleBar];