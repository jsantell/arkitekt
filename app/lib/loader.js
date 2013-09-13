var rainbow = require('rainbow-load');

rainbow.config({
  autoRun: true,
  barThickness: 5,
  barColors: {
    '0': 'rgba(66, 139, 202, 1)',
    '1': 'rgba(66, 170, 255, 1)'
  },
  shadowBlur   : 5,
  shadowColor  : 'rgba(0, 0, 0, .5)'
});

module.exports = rainbow;
