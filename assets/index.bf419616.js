import{R as t,C as e}from"./index.8d234ecc.js";import{a as o,N as a,R as s,U as n,V as r,aC as l,aM as d,c,am as m,a5 as u}from"./index.1c466c1d.js";import"./vendor.099cff95.js";const i=[{amount:"20",type:"成品总数"},{amount:"50",type:"未发布"},{amount:"80",type:"发布中"},{amount:"100",type:"异常"}];(()=>{const t=[];for(let e=0;e<3;e++)t.push({id:e,sbmter:"张三",sbmtTimer:(new Date).toLocaleString(),title:"主要",memo:"工作任务"})})(),(()=>{const t=[];for(let e=0;e<3;e++)t.push({id:e,sender:"里斯",sendTime:(new Date).toLocaleString(),title:"代码",memo:"工作任务",cnteId:`c${e}`,cnteStatus:"opened",dnteRepo:e})})();var p=o({components:{[t.name]:t,[e.name]:e},setup:()=>({workProd:i})});const f=r("data-v-3e3d8124"),_=f(((t,e,o,r,u,i)=>{const p=a("a-col"),_=a("a-row");return s(),n(_,{class:"prod-total"},{default:f((()=>[(s(!0),n(l,null,d(t.workProd,((t,e)=>(s(),n(p,{key:t.type,xs:12,sm:6,class:`prod-total__item prod-total__item-${e}`},{default:f((()=>[c("div",{class:["img",`prod-total__item-${e}-img`]},null,2),c("div",null,m(t.amount),1),c("span",null,m(t.type),1)])),_:2},1032,["class"])))),128))])),_:1})}));p.render=_,p.__scopeId="data-v-3e3d8124";var g=o({});g.render=function(t,e,o,a,r,l){return s(),n("div",null,"todo")};var w=o({name:"Workbench",components:{ProdTotal:p,TodoList:g,"a-col":e,"a-row":t},setup:()=>({workImg:"./assets/workbench.f373341e.png"})});w.render=function(t,e,o,r,l,d){const m=a("ProdTotal"),i=a("TodoList"),p=a("a-col"),f=a("a-row");return s(),n(f,{class:"workbench p-4",gutter:12},{default:u((()=>[c(p,{md:24,lg:17},{default:u((()=>[c(m,{class:"mb-3"}),c(i,{class:"mb-3"})])),_:1}),c(p,{md:24,lg:7},{default:u((()=>[c("img",{src:t.workImg,class:"workbench__img mb-3"},null,8,["src"])])),_:1})])),_:1})};export default w;
