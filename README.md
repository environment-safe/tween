@environment-safe/tween
=======================
Robert Penner's tweening functions as used in [tween-functions](https://github.com/chenglou/tween-functions), and unlike [@tweenjs/tween.js](https://www.npmjs.com/package/@tweenjs/tween.js) it's not written in a metalanguage so the source can be directly included without build, but it does include types built with jsdoc. 

Penner's original functions uses the change in value rather than final value as parameter. [tween-functions](https://github.com/chenglou/tween-functions) changed this to finalValue, which I continue to support.

Usage
-----
## API

`tweenFunction.tweenName(currentTime, beginValue, endValue, totalDuration)`

## Examples

<table><tr><td colspan="3">

`@environment-safe/tween'` supports legacy usage of commonjs, modern ESM, can be built with either of those or may be directly included in the browser with ESM. No build is required in your library or ours.
</td></tr><tr><td valign="top">
<details><summary> CommonJS </summary><p>

```js
const { Tween } = require('@environment-safe/tween');
Tween.easeInQuad(1, 0, 50, 5); // => 2
```

</p></details></td><td valign="top">

<details><summary> ES Modules </summary><p>

```js
import { Tween } from '@environment-safe/tween';
Tween.easeInQuad(1, 0, 50, 5); // => 2
```

</p></details></td><td valign="top">

<details><summary> HTML </summary><p>

```html
<script type="importmap">{ "imports" :{
    "@environment-safe/tween":
        "./node_modules/@environment-safe/tween/src/index.mjs"
}}</script>
<script type="module">
    import { Tween } from '@environment-safe/tween';
    Tween.easeInQuad(1, 0, 50, 5); // => 2
</script>
```
</p></details></td></tr></table>

### Available functions:

- [linear](https://environment-safe.github.io/tween/docs/global.html#linearAlineartweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInQuad](https://environment-safe.github.io/tween/docs/global.html#easeInQuadAeaseInQuadtweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutQuad](https://environment-safe.github.io/tween/docs/global.html#easeOutQuadAeaseOutQuadtweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutQuad](https://environment-safe.github.io/tween/docs/global.html#easeInOutQuadAeaseInOutQuadtweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInCubic](https://environment-safe.github.io/tween/docs/global.html#easeInCubicAeaseInCubictweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutCubic](https://environment-safe.github.io/tween/docs/global.html#easeOutCubicAeaseOutCubictweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutCubic](https://environment-safe.github.io/tween/docs/global.html#easeInOutCubicAeaseInOutCubictweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInQuart](https://environment-safe.github.io/tween/docs/global.html#easeInQuartAeaseInQuarttweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutQuart](https://environment-safe.github.io/tween/docs/global.html#easeOutQuartAeaseOutQuarttweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutQuart](https://environment-safe.github.io/tween/docs/global.html#easeInOutQuartAeaseInOutQuarttweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInQuint](https://environment-safe.github.io/tween/docs/global.html#easeInQuintAeaseInQuinttweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutQuint](https://environment-safe.github.io/tween/docs/global.html#easeOutQuintAeaseOutQuinttweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutQuint](https://environment-safe.github.io/tween/docs/global.html#easeInOutQuintAeaseInOutQuinttweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInSine](https://environment-safe.github.io/tween/docs/global.html#easeInSineAeaseInSinetweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutSine](https://environment-safe.github.io/tween/docs/global.html#easeOutSineAeaseOutSinetweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutSine](https://environment-safe.github.io/tween/docs/global.html#easeInOutSineAeaseInOutSinetweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInExpo](https://environment-safe.github.io/tween/docs/global.html#easeInExpoAeaseInExpotweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutExpo](https://environment-safe.github.io/tween/docs/global.html#easeOutExpoAeaseOutExpotweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutExpo](https://environment-safe.github.io/tween/docs/global.html#easeInOutExpoAeaseInOutExpotweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInCirc](https://environment-safe.github.io/tween/docs/global.html#easeInCircAeaseInCirctweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutCirc](https://environment-safe.github.io/tween/docs/global.html#easeOutCircAeaseOutCirctweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutCirc](https://environment-safe.github.io/tween/docs/global.html#easeInOutCircAeaseInOutCirctweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInElastic](https://environment-safe.github.io/tween/docs/global.html#easeInElasticAeaseInElastictweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutElastic](https://environment-safe.github.io/tween/docs/global.html#easeOutElasticAeaseOutElastictweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutElastic](https://environment-safe.github.io/tween/docs/global.html#easeInOutElasticAeaseInOutElastictweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInBack](https://environment-safe.github.io/tween/docs/global.html#easeInBackAeaseInBacktweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutBack](https://environment-safe.github.io/tween/docs/global.html#easeOutBackAeaseOutBacktweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutBack](https://environment-safe.github.io/tween/docs/global.html#easeInOutBackAeaseInOutBacktweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInBounce](https://environment-safe.github.io/tween/docs/global.html#easeInBounceAeaseInBouncetweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeOutBounce](https://environment-safe.github.io/tween/docs/global.html#easeOutBounceAeaseOutBouncetweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)
- [easeInOutBounce](https://environment-safe.github.io/tween/docs/global.html#easeInOutBounceAeaseInOutBouncetweenaccordingto%253Cahref=%2522http://robertpenner.com/easing/%2522%253ERobertPenner'seasingfunctions%253C/a%253E)

You can see a demo of all the easing functions in action by running:

```bash
npm run demo
```

Testing
-------

Run the es module tests to test the root modules
```bash
npm run import-test
```
to run the same test inside the browser:

```bash
npm run browser-test
```
to run the same test headless in chrome:
```bash
npm run headless-browser-test
```

to run the same test inside docker:
```bash
npm run container-test
```

Run the commonjs tests against the `/dist` commonjs source (generated with the `build-commonjs` target).
```bash
npm run require-test
```

Development
-----------
All work is done in the .mjs files and will be transpiled on commit to commonjs and tested.

If the above tests pass, then attempt a commit which will generate .d.ts files alongside the `src` files and commonjs classes in `dist`

