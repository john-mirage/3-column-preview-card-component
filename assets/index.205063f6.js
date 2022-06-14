var l=Object.defineProperty;var c=(i,t,o)=>t in i?l(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o;var a=(i,t,o)=>(c(i,typeof t!="symbol"?t+"":t,o),o);const d=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};d();class p extends HTMLDivElement{constructor(){super();a(this,"_category");a(this,"initialCall");a(this,"fragment");a(this,"useElement");a(this,"titleElement");a(this,"descriptionElement");a(this,"buttonElement");this._category=!1,this.initialCall=!0;const o=document.getElementById("template-category");this.fragment=o.content.cloneNode(!0),this.useElement=this.fragment.querySelector('[data-name="shape"]'),this.titleElement=this.fragment.querySelector('[data-name="title"]'),this.descriptionElement=this.fragment.querySelector('[data-name="description"]'),this.buttonElement=this.fragment.querySelector('[data-name="button"]')}get category(){if(this._category)return this._category;throw new Error("The category is not defined")}set category(o){this._category=o}connectedCallback(){this.initialCall&&(this.classList.add("p-32","sm:p-48","md:p-32","md:flex-1","lg:p-48",this.category.class.bg),this.useElement.setAttribute("href",this.category.shape),this.titleElement.textContent=this.category.title,this.descriptionElement.textContent=this.category.description,this.buttonElement.classList.add(this.category.class.text),this.append(this.fragment))}}const w=[{shape:"#icon-sedans",title:"sedans",description:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",class:{bg:"bg-bright-orange",text:"text-bright-orange"}},{shape:"#icon-suvs",title:"suvs",description:"Take and SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures",class:{bg:"bg-dark-cyan",text:"text-dark-cyan"}},{shape:"#icon-luxury",title:"luxury",description:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",class:{bg:"bg-very-dark-cyan",text:"text-very-dark-cyan"}}];customElements.define("web-category",p,{extends:"div"});const h=document.getElementById("main");w.forEach(i=>{const t=document.createElement("div",{is:"web-category"});t.category=i,h.append(t)});