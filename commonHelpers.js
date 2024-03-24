import{i as a,S as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="43042751-379763e2b45d181b55d7040e4",h="https://pixabay.com/api/";function y(l){const o=`${h}?key=${d}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Unable to fetch images");return r.json()}).then(r=>r.hits).catch(r=>(console.error(r),[]))}function f(){const l=document.querySelector(".gallery");l.innerHTML=""}function p(l){const o=document.querySelector(".gallery");if(f(),l.length===0){a.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=l.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");o.insertAdjacentHTML("beforeend",r),new u(".gallery a",{captionsData:"alt"}).refresh()}const m=document.querySelector("#search-form"),c=document.querySelector("#search-input"),i=document.getElementById("loader"),g=document.querySelector(".gallery");m.addEventListener("submit",l=>{l.preventDefault(),i.style.display="block",g.innerHTML="";const o=c.value.trim();if(o===""){i.style.display="none",a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}y(o).then(r=>{i.style.display="none",p(r),c.value=""}).catch(r=>{console.error(r),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})})});
//# sourceMappingURL=commonHelpers.js.map
