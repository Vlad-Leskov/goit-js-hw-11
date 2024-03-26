import{S as u,i as a}from"./assets/vendor-5b791d57.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="43042751-379763e2b45d181b55d7040e4",h="https://pixabay.com/api/";function y(s){const l=`${h}?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(l).then(r=>{if(!r.ok)throw new Error("Unable to fetch images");return r.json()}).then(r=>r.hits).catch(r=>{console.error(r)})}function f(){const s=document.querySelector(".gallery");s.innerHTML=""}function p(s){const l=document.querySelector(".gallery");if(f(),s.length===0){a.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=s.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${t.likes}</p>
          </li>
          <li><h3>Views</h3><p>${t.views}</p>
            </li>
            <li><h3>Comments</h3><p>${t.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${t.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),m.refresh()}const m=new u(".gallery a",{captionsData:"alt"}),g=document.querySelector("#search-form"),c=document.querySelector("#search-input"),i=document.getElementById("loader"),b=document.querySelector(".gallery");g.addEventListener("submit",s=>{s.preventDefault(),i.style.display="block",b.innerHTML="";const l=c.value.trim();if(l===""){i.style.display="none",a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}y(l).then(r=>{i.style.display="none",p(r),c.value=""}).catch(r=>{console.error(r),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
