import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(o){return fetch(`https://pixabay.com/api/?key=45133335-13ec6f60d2d4b23fe19aa58e6&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function c(o){l.error({position:"topRight",message:`${o}`})}function m(o){const n=new u(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s=o.hits.map(t=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image"
                src="${t.webformatURL}"
                alt="${t.tags}" 
            />
        </a>
        <div class="gallery-content">
            <h5 class="text-content">Likes<p class="text">${t.likes}</p></h5>
            <h5 class="text-content">Views<p class="text">${t.views}</p></h5>
            <h5 class="text-content">Comments<p class="text">${t.comments}</p></h5>
            <h5 class="text-content">Downloads<p class="text">${t.downloads}</p></h5>
        </div>
    </li>`).join("");document.querySelector(".gallery-list").insertAdjacentHTML("beforeend",s),n.refresh()}function f(){const o=document.querySelector(".gallery-list");o.innerHTML=""}const p=document.querySelector(".gallery-form"),y=document.querySelector(".input-gallery"),a=document.querySelector(".loading");p.addEventListener("submit",o=>{o.preventDefault(),f(),a.classList.remove("hidden");const n=y.value.trim();if(n===""){c("Please enter a search query."),a.classList.add("hidden");return}d(n).then(s=>{if(s.total===0){c("Sorry, there are no images matching your search query. Please try again!"),a.classList.add("hidden");return}a.classList.add("hidden"),console.log(s),m(s)}).catch(s=>{c(s)})});
//# sourceMappingURL=commonHelpers.js.map
