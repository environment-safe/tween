'use strict';
 
// t: current time, b: beginning value, _c: final value, d: total duration
/**
 * @method
 * @name linear
 * A linear tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const linear = function(t, b, _c, d){
    var c = _c - b;
    return c * t / d + b;
};
/**
 * @method
 * @name easeInQuad
 * A easeInQuad tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInQuad = function(t, b, _c, d){
    var c = _c - b;
    return c * (t /= d) * t + b;
};
/**
 * @method
 * @name easeOutQuad
 * A easeOutQuad tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutQuad = function(t, b, _c, d){
    var c = _c - b;
    return -c * (t /= d) * (t - 2) + b;
};
/**
 * @method
 * @name easeInOutQuad
 * A easeInOutQuad tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutQuad = function(t, b, _c, d){
    var c = _c - b;
    if ((t /= d / 2) < 1){
        return c / 2 * t * t + b;
    } else{
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
};
/**
 * @method
 * @name easeInCubic
 * A easeInCubic tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInCubic = function(t, b, _c, d){
    var c = _c - b;
    return c * (t /= d) * t * t + b;
};
/**
 * @method
 * @name easeOutCubic
 * A easeOutCubic tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutCubic = function(t, b, _c, d){
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t + 1) + b;
};
/**
 * @method
 * @name easeInOutCubic
 * A easeInOutCubic tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutCubic = function(t, b, _c, d){
    var c = _c - b;
    if ((t /= d / 2) < 1){
        return c / 2 * t * t * t + b;
    } else{
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
};
/**
 * @method
 * @name easeInQuart
 * A easeInQuart tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInQuart = function(t, b, _c, d){
    var c = _c - b;
    return c * (t /= d) * t * t * t + b;
};
/**
 * @method
 * @name easeOutQuart
 * A easeOutQuart tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutQuart = function(t, b, _c, d){
    var c = _c - b;
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
/**
 * @method
 * @name easeInOutQuart
 * A easeInOutQuart tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutQuart = function(t, b, _c, d){
    var c = _c - b;
    if ((t /= d / 2) < 1){
        return c / 2 * t * t * t * t + b;
    } else{
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
};
/**
 * @method
 * @name easeInQuint
 * A easeInQuint tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInQuint = function(t, b, _c, d){
    var c = _c - b;
    return c * (t /= d) * t * t * t * t + b;
};
/**
 * @method
 * @name easeOutQuint
 * A easeOutQuint tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutQuint = function(t, b, _c, d){
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};
/**
 * @method
 * @name easeInOutQuint
 * A easeInOutQuint tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutQuint = function(t, b, _c, d){
    var c = _c - b;
    if ((t /= d / 2) < 1){
        return c / 2 * t * t * t * t * t + b;
    } else{
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
};
/**
 * @method
 * @name easeInSine
 * A easeInSine tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInSine = function(t, b, _c, d){
    var c = _c - b;
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
/**
 * @method
 * @name easeOutSine
 * A easeOutSine tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutSine = function(t, b, _c, d){
    var c = _c - b;
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
/**
 * @method
 * @name easeInOutSine
 * A easeInOutSine tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutSine = function(t, b, _c, d){
    var c = _c - b;
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
/**
 * @method
 * @name easeInExpo
 * A easeInExpo tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInExpo = function(t, b, _c, d){
    var c = _c - b;
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
};
/**
 * @method
 * @name easeOutExpo
 * A easeOutExpo tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutExpo = function(t, b, _c, d){
    var c = _c - b;
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
};
/**
 * @method
 * @name easeInOutExpo
 * A easeInOutExpo tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutExpo = function(t, b, _c, d){
    var c = _c - b;
    if (t === 0){
        return b;
    }
    if (t === d){
        return b + c;
    }
    if ((t /= d / 2) < 1){
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else{
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
};
/**
 * @method
 * @name easeInCirc
 * A easeInCirc tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInCirc = function(t, b, _c, d){
    var c = _c - b;
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};
/**
 * @method
 * @name easeOutCirc
 * A easeOutCirc tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutCirc = function(t, b, _c, d){
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};
/**
 * @method
 * @name easeInOutCirc
 * A easeInOutCirc tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutCirc = function(t, b, _c, d){
    var c = _c - b;
    if ((t /= d / 2) < 1){
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else{
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
};
/**
 * @method
 * @name easeInElastic
 * A easeInElastic tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInElastic = function(t, b, _c, d){
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0){
        return b;
    } else if ((t /= d) === 1){
        return b + c;
    }
    if (!p){
        p = d * 0.3;
    }
    if (a < Math.abs(c)){
        a = c;
        s = p / 4;
    } else{
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};
/**
 * @method
 * @name easeOutElastic
 * A easeOutElastic tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutElastic = function(t, b, _c, d){
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0){
        return b;
    } else if ((t /= d) === 1){
        return b + c;
    }
    if (!p){
        p = d * 0.3;
    }
    if (a < Math.abs(c)){
        a = c;
        s = p / 4;
    } else{
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};
/**
 * @method
 * @name easeInOutElastic
 * A easeInOutElastic tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutElastic = function(t, b, _c, d){
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0){
        return b;
    } else if ((t /= d / 2) === 2){
        return b + c;
    }
    if (!p){
        p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)){
        a = c;
        s = p / 4;
    } else{
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1){
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else{
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
};
/**
 * @method
 * @name easeInBack
 * A easeInBack tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInBack = function(t, b, _c, d, s){
    var c = _c - b;
    if (s === void 0){
        s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
/**
 * @method
 * @name easeOutBack
 * A easeOutBack tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutBack = function(t, b, _c, d, s){
    var c = _c - b;
    if (s === void 0){
        s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
/**
 * @method
 * @name easeInOutBack
 * A easeInOutBack tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutBack = function(t, b, _c, d, s){
    var c = _c - b;
    if (s === void 0){
        s = 1.70158;
    }
    if ((t /= d / 2) < 1){
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else{
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
};
/**
 * @method
 * @name easeInBounce
 * A easeInBounce tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInBounce = function(t, b, _c, d){
    var c = _c - b;
    var v;
    v = easeOutBounce(d - t, 0, c, d);
    return c - v + b;
};
/**
 * @method
 * @name easeOutBounce
 * A easeOutBounce tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeOutBounce = function(t, b, _c, d){
    var c = _c - b;
    if ((t /= d) < 1 / 2.75){
        return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75){
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75){
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else{
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
};
/**
 * @method
 * @name easeInOutBounce
 * A easeInOutBounce tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
export const easeInOutBounce = function(t, b, _c, d){
    var c = _c - b;
    var v;
    if (t < d / 2){
        v = easeInBounce(t * 2, 0, c, d);
        return v * 0.5 + b;
    } else{
        v = easeOutBounce(t * 2 - d, 0, c, d);
        return v * 0.5 + c * 0.5 + b;
    }
};
export const Tween = {
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
    easeInOutBounce,
};
/**
 * @method
 * @name linear
 * A linear tween according to <a href="http://robertpenner.com/easing/">Robert Penner's easing functions</a>
 * @param {number} elapsedTime - The current time from 0
 * @param {number} initialValue - The starting value of the tween
 * @param {number} finalValue - The terminal value of the tween
 * @param {number} totalTime - The amount of time the total tween will take
 * @returns {number} currentValue - The current value for this moment in time
 */
 