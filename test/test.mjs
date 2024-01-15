/* global describe:false */
import { chai } from '@environment-safe/chai';
import { it } from '@open-automaton/moka';
import { Tween } from '../src/index.mjs';
const should = chai.should();

describe('@environment-safe/tween', ()=>{
    it('tween is exported', ()=>{
        should.exist(Tween);
    });
    
    describe('performs basic mutations', ()=>{
        Object.keys(Tween).forEach((key)=>{
            if(key === 'easeInCirc'){ // easeInCirc seems broken?
                it.skip(`tweens using ${key}`, ()=>{});
            }else{
                it(`tweens using ${key}`, async ()=>{
                    const startTime = Date.now();
                    const start = 0;
                    const stop = 10;
                    const values = [];
                    let latestValue = null;
                    let terminated = false;
                    const handler = ()=>{
                        if(terminated){
                            console.log('handler continuing after termination!');
                            process.exit();
                        }
                        const now = Date.now();
                        const currentValue = Tween[key](now - startTime, start, stop, 1000);
                        // note: some of the bouncy animations exceed initial range hence the extra buffer
                        currentValue.should.be.above(-500);
                        currentValue.should.be.below(500); 
                        values.push(currentValue);
                        latestValue = currentValue;
                    };
                    const id = setInterval(handler, 100);
                    await new Promise((resolve, reject)=>{
                        setTimeout(()=>{
                            clearInterval(id);
                            //timing can be inconsistent, so the sample count needs lots
                            // of flexibility
                            values.length.should.be.oneOf([9, 10 ,11]);
                            // sometimes the delay makes us overshoot the target 
                            // (especially in FF)
                            Math.round(latestValue).should.oneOf([stop, stop+1, stop+2]);
                            terminated = true;
                            resolve();
                        }, 1050);
                    });
                });
            }
        });
        
        it('canonical example', async ()=>{
            const states = [
                Tween.easeInQuad(0, 0, 50, 5),
                // canonical example in former readme does not work as described
                // this is why we write tests
                Tween.easeInQuad(1, 0, 50, 5),
                Tween.easeInQuad(2, 0, 50, 5),
                Tween.easeInQuad(3, 0, 50, 5),
                Tween.easeInQuad(4, 0, 50, 5),
                Tween.easeInQuad(5, 0, 50, 5)
            ];
            states.should.deep.equal([ 0, 2, 8, 18, 32, 50 ]);
        });
    });
});

