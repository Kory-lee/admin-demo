import{aC as a}from"./index.19d428bb.js";import{d as t,a8 as l,c as e,w as r,o as n,u as i,aX as o,a as s,b as u,t as p}from"./vendor.9dfb8857.js";var c=t({name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2020},duration:{type:Number,default:1300},autoplay:{type:Boolean,default:!0},decimals:{type:Number,required:!1,default:0,validator:a=>a>=0},color:{type:String,required:!1},decimal:{type:String,default:"."},separator:{type:String,default:","},prefix:{type:String,default:""},suffix:{type:String,default:""},useEasing:{type:Boolean,default:!0},easingFn:{type:Function,default:(a,t,l,e)=>l*(1-Math.pow(2,-10*a/e))*1024/1023+t}},emits:["mounted","callback"],setup(t,{emit:s}){const u=l({localStartVal:t.startVal,displayName:d(t.startVal),printVal:null,paused:!1,localDuration:t.duration,startTime:null,timestamp:null,remaining:null,rAF:null,color:null}),p=e((()=>t.startVal>t.endVal));function c(){const{startVal:a,duration:l,color:e}=t;u.localStartVal=a,u.startTime=null,u.localDuration=l,u.color=e,u.paused=!1,u.rAF=requestAnimationFrame(m)}function m(a){const{useEasing:l,easingFn:e,endVal:r}=t;u.startTime||(u.startTime=a),u.timestamp=a;const n=a-u.startTime;u.remaining=u.localDuration-n,l?i(p)?u.printVal=u.localStartVal-e(n,0,u.localStartVal-r,u.localDuration):u.printVal=e(n,u.localStartVal,r-u.localStartVal,u.localDuration):u.printVal=u.localStartVal+(r-u.localStartVal)*(n/u.localDuration),i(p)?u.printVal=u.printVal<r?r:u.printVal:u.printVal=u.printVal>r?r:u.printVal,u.displayName=d(u.printVal),n<u.localDuration?u.rAf=requestAnimationFrame(m):s("callback")}function d(l){const{decimals:e,decimal:r,separator:n,suffix:i,prefix:o}=t,s=(l=`${Number(l).toFixed(e)}`).split(".");let u=s[0];const p=s.length>1?r+s[1]:"",c=/(\d+)(\d{3})/;if(n&&!a(n))for(;c.test(u);)u=u.replace(c,"$1"+n+"$2");return o+u+p+i}return r([()=>t.startVal,()=>t.endVal],(()=>{t.autoplay&&c()})),n((()=>{t.autoplay&&c(),s("mounted")})),{count:m,reset:function(){u.startTime=null,cancelAnimationFrame(u.rAF),u.displayName=d(t.startVal)},pauseResume:function(){u.paused?(u.startTime=null,u.localDuration=+u.remaining,u.localStartVal=+u.printVal,requestAnimationFrame(m),u.paused=!1):(cancelAnimationFrame(u.rAF),u.paused=!0)},start:c,displayName:o(u,"displayName")}}});c.render=function(a,t,l,e,r,n){return s(),u("span",{style:{color:a.color}},p(a.displayName),5)};export default c;
