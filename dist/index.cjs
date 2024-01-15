/**
 * A JSON object
 * @typedef { object } JSON
 */

'use strict';

// t: current time, b: beginning value, _c: final value, d: total duration
/**
 * A linear tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = exports.easeOutSine = exports.easeOutQuint = exports.easeOutQuart = exports.easeOutQuad = exports.easeOutExpo = exports.easeOutElastic = exports.easeOutCubic = exports.easeOutCirc = exports.easeOutBounce = exports.easeOutBack = exports.easeInSine = exports.easeInQuint = exports.easeInQuart = exports.easeInQuad = exports.easeInOutSine = exports.easeInOutQuint = exports.easeInOutQuart = exports.easeInOutQuad = exports.easeInOutExpo = exports.easeInOutElastic = exports.easeInOutCubic = exports.easeInOutCirc = exports.easeInOutBounce = exports.easeInOutBack = exports.easeInExpo = exports.easeInElastic = exports.easeInCubic = exports.easeInCirc = exports.easeInBounce = exports.easeInBack = exports.Tween = void 0;
const linear = function (t, b, _c, d) {
  var c = _c - b;
  return c * t / d + b;
};
exports.linear = linear;
const easeInQuad = function (t, b, _c, d) {
  var c = _c - b;
  return c * (t /= d) * t + b;
};
exports.easeInQuad = easeInQuad;
const easeOutQuad = function (t, b, _c, d) {
  var c = _c - b;
  return -c * (t /= d) * (t - 2) + b;
};
exports.easeOutQuad = easeOutQuad;
const easeInOutQuad = function (t, b, _c, d) {
  var c = _c - b;
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t + b;
  } else {
    return -c / 2 * (--t * (t - 2) - 1) + b;
  }
};
exports.easeInOutQuad = easeInOutQuad;
const easeInCubic = function (t, b, _c, d) {
  var c = _c - b;
  return c * (t /= d) * t * t + b;
};
exports.easeInCubic = easeInCubic;
const easeOutCubic = function (t, b, _c, d) {
  var c = _c - b;
  return c * ((t = t / d - 1) * t * t + 1) + b;
};
exports.easeOutCubic = easeOutCubic;
const easeInOutCubic = function (t, b, _c, d) {
  var c = _c - b;
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t + b;
  } else {
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }
};
exports.easeInOutCubic = easeInOutCubic;
const easeInQuart = function (t, b, _c, d) {
  var c = _c - b;
  return c * (t /= d) * t * t * t + b;
};
exports.easeInQuart = easeInQuart;
const easeOutQuart = function (t, b, _c, d) {
  var c = _c - b;
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
exports.easeOutQuart = easeOutQuart;
const easeInOutQuart = function (t, b, _c, d) {
  var c = _c - b;
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t * t + b;
  } else {
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }
};
exports.easeInOutQuart = easeInOutQuart;
const easeInQuint = function (t, b, _c, d) {
  var c = _c - b;
  return c * (t /= d) * t * t * t * t + b;
};
exports.easeInQuint = easeInQuint;
const easeOutQuint = function (t, b, _c, d) {
  var c = _c - b;
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};
exports.easeOutQuint = easeOutQuint;
const easeInOutQuint = function (t, b, _c, d) {
  var c = _c - b;
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t * t * t + b;
  } else {
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }
};
exports.easeInOutQuint = easeInOutQuint;
const easeInSine = function (t, b, _c, d) {
  var c = _c - b;
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
exports.easeInSine = easeInSine;
const easeOutSine = function (t, b, _c, d) {
  var c = _c - b;
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
exports.easeOutSine = easeOutSine;
const easeInOutSine = function (t, b, _c, d) {
  var c = _c - b;
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
exports.easeInOutSine = easeInOutSine;
const easeInExpo = function (t, b, _c, d) {
  var c = _c - b;
  return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};
exports.easeInExpo = easeInExpo;
const easeOutExpo = function (t, b, _c, d) {
  var c = _c - b;
  return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
};
exports.easeOutExpo = easeOutExpo;
const easeInOutExpo = function (t, b, _c, d) {
  var c = _c - b;
  if (t === 0) {
    return b;
  }
  if (t === d) {
    return b + c;
  }
  if ((t /= d / 2) < 1) {
    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  } else {
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
};
exports.easeInOutExpo = easeInOutExpo;
const easeInCirc = function (t, b, _c, d) {
  var c = _c - b;
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};
exports.easeInCirc = easeInCirc;
const easeOutCirc = function (t, b, _c, d) {
  var c = _c - b;
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};
exports.easeOutCirc = easeOutCirc;
const easeInOutCirc = function (t, b, _c, d) {
  var c = _c - b;
  if ((t /= d / 2) < 1) {
    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  } else {
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
};
exports.easeInOutCirc = easeInOutCirc;
const easeInElastic = function (t, b, _c, d) {
  var c = _c - b;
  var a, p, s;
  s = 1.70158;
  p = 0;
  a = c;
  if (t === 0) {
    return b;
  } else if ((t /= d) === 1) {
    return b + c;
  }
  if (!p) {
    p = d * 0.3;
  }
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }
  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};
exports.easeInElastic = easeInElastic;
const easeOutElastic = function (t, b, _c, d) {
  var c = _c - b;
  var a, p, s;
  s = 1.70158;
  p = 0;
  a = c;
  if (t === 0) {
    return b;
  } else if ((t /= d) === 1) {
    return b + c;
  }
  if (!p) {
    p = d * 0.3;
  }
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }
  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};
exports.easeOutElastic = easeOutElastic;
const easeInOutElastic = function (t, b, _c, d) {
  var c = _c - b;
  var a, p, s;
  s = 1.70158;
  p = 0;
  a = c;
  if (t === 0) {
    return b;
  } else if ((t /= d / 2) === 2) {
    return b + c;
  }
  if (!p) {
    p = d * (0.3 * 1.5);
  }
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }
  if (t < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  } else {
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  }
};
exports.easeInOutElastic = easeInOutElastic;
const easeInBack = function (t, b, _c, d, s) {
  var c = _c - b;
  if (s === void 0) {
    s = 1.70158;
  }
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
exports.easeInBack = easeInBack;
const easeOutBack = function (t, b, _c, d, s) {
  var c = _c - b;
  if (s === void 0) {
    s = 1.70158;
  }
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
exports.easeOutBack = easeOutBack;
const easeInOutBack = function (t, b, _c, d, s) {
  var c = _c - b;
  if (s === void 0) {
    s = 1.70158;
  }
  if ((t /= d / 2) < 1) {
    return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  } else {
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }
};
exports.easeInOutBack = easeInOutBack;
const easeInBounce = function (t, b, _c, d) {
  var c = _c - b;
  var v;
  v = easeOutBounce(d - t, 0, c, d);
  return c - v + b;
};
exports.easeInBounce = easeInBounce;
const easeOutBounce = function (t, b, _c, d) {
  var c = _c - b;
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  } else {
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  }
};
exports.easeOutBounce = easeOutBounce;
const easeInOutBounce = function (t, b, _c, d) {
  var c = _c - b;
  var v;
  if (t < d / 2) {
    v = easeInBounce(t * 2, 0, c, d);
    return v * 0.5 + b;
  } else {
    v = easeOutBounce(t * 2 - d, 0, c, d);
    return v * 0.5 + c * 0.5 + b;
  }
};
exports.easeInOutBounce = easeInOutBounce;
const Tween = exports.Tween = {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce
};