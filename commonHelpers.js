import{i as u}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function a(r){return fetch(`https://pixabay.com/api/?key=45133335-13ec6f60d2d4b23fe19aa58e6&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function c(r){u.error({position:"topRight",message:`${r}`})}const f=document.querySelector(".gallery-form");f.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.query.value.trim();if(o===""){c("Please enter a search query.");return}a(o).then(s=>{console.log(s)}).catch(s=>{c(s)})});
//# sourceMappingURL=commonHelpers.js.map
