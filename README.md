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

- linear
- easeInQuad
- easeOutQuad
- easeInOutQuad
- easeInCubic
- easeOutCubic
- easeInOutCubic
- easeInQuart
- easeOutQuart
- easeInOutQuart
- easeInQuint
- easeOutQuint
- easeInOutQuint
- easeInSine
- easeOutSine
- easeInOutSine
- easeInExpo
- easeOutExpo
- easeInOutExpo
- easeInCirc
- easeOutCirc
- easeInOutCirc
- easeInElastic
- easeOutElastic
- easeInOutElastic
- easeInBack
- easeOutBack
- easeInOutBack
- easeInBounce
- easeOutBounce
- easeInOutBounce

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

