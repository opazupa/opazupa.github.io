var suomiBar = new ProgressBar.Circle(suomi, {
  color: '#FFFFFF',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 2,
  easing: 'bounce',
  duration: 8000,
  trailColor: '#FFFFFF',
  fill: '#acdbfa',
  text: {
    autoStyleContainer: true,
    style: {
      color: 'orange',
      position: 'absolute',
      top: '55%',
      left: '45%'
    }
  },
  from: {
    color: '#FFFFFF',
    width: 2
  },
  to: {
    color: '#0222be',
    width: 4
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  }
});

var ruotsiBar = new ProgressBar.Circle(ruotsi, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 2,
  easing: 'bounce',
  duration: 5000,
  trailColor: '#FFFFFF',
  fill: '#FFFFCC',
  text: {
    autoStyleContainer: true,
    style: {
      color: 'orange',
      position: 'absolute',
      top: '55%',
      left: '45%'
    }
  },
  from: {
    color: '#FFFFFF',
    width: 2
  },
  to: {
    color: '#FFDE00',
    width: 4
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  }
});

var englantiBar = new ProgressBar.Circle(englanti, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 2,
  trailColor: '#FFFFFF',
  fill: '#f5cbcb',
  easing: 'bounce',
  duration: 5000,
  text: {
    autoStyleContainer: true,
    style: {
      color: 'orange',
      position: 'absolute',
      top: '55%',
      left: '45%'
    }
  },
  from: {
    color: '#FFFFFF',
    width: 2
  },
  to: {
    color: '#c62828',
    width: 4
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  }
});
var saksaBar = new ProgressBar.Circle(saksa, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 2,
  easing: 'bounce',
  duration: 5000,
  trailColor: '#FFFFFF',
  fill: 'whitesmoke',
  text: {
    autoStyleContainer: true,
    style: {
      color: 'orange',
      position: 'absolute',
      top: '55%',
      left: '45%'
    }
  },
  from: {
    color: '#FFFFFF',
    width: 2
  },
  to: {
    color: '#000000',
    width: 4
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  }
});

const circleBars = [suomiBar, englantiBar, saksaBar, ruotsiBar];

var nodeBar = new ProgressBar.Line(node, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
      zIndex: 100
    },
    value: 'Node',
    autoStyleContainer: true
  }
});

var javaBar = new ProgressBar.Line(java, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'Java EE + Spring',
    autoStyleContainer: true
  }
});

var csharpBar = new ProgressBar.Line(csharp, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'C# + .NET',
    autoStyleContainer: true
  }
});

var pythonBar = new ProgressBar.Line(python, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'Python',
    autoStyleContainer: true
  }
});

var HTMLBar = new ProgressBar.Line(htmlcss, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'HTML&CSS',
    autoStyleContainer: true
  }
});

var jsBar = new ProgressBar.Line(javascript, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'Typescript + Javascript',
    autoStyleContainer: true
  }
});

var angularBar = new ProgressBar.Line(angular, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'Angular',
    autoStyleContainer: true
  }
});

var reactreduxBar = new ProgressBar.Line(reactredux, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'React+Redux',
    autoStyleContainer: true
  }
});

var psqlBar = new ProgressBar.Line(psql, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'PostgreSQL',
    autoStyleContainer: true
  }
});

var mssqlBar = new ProgressBar.Line(mssql, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'MSSQL',
    autoStyleContainer: true
  }
});

var dockerBar = new ProgressBar.Line(docker, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'Docker',
    autoStyleContainer: true
  }
});

var bambooBar = new ProgressBar.Line(bamboo, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 7500,
  color: '#FFFFFF',
  trailColor: 'none',
  trailWidth: 1,
  svgStyle: {
    width: '100%',
    height: '25px'
  },
  from: {
    color: '#FFFFFF'
  },
  to: {
    color: '#FFDE00'
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
    value: 'Bamboo',
    autoStyleContainer: true
  }
});

const progressBars = [
  nodeBar,
  javaBar,
  csharpBar,
  pythonBar,
  HTMLBar,
  jsBar,
  angularBar,
  reactreduxBar,
  psqlBar,
  mssqlBar,
  dockerBar,
  bambooBar
];
