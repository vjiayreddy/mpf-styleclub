if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Lt4CwfGouA7g-uKXn0r7v/_buildManifest.js",revision:"14ba7c2ed08732c4ff81600593dc721a"},{url:"/_next/static/Lt4CwfGouA7g-uKXn0r7v/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/363-ca37d08852144b6a.js",revision:"ca37d08852144b6a"},{url:"/_next/static/chunks/881-7a57902bdc262ac2.js",revision:"7a57902bdc262ac2"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-80c2b85c7932497e.js",revision:"80c2b85c7932497e"},{url:"/_next/static/chunks/pages/_app-9e6d0bd93a468c84.js",revision:"9e6d0bd93a468c84"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-cac6bfa2ae77c63d.js",revision:"cac6bfa2ae77c63d"},{url:"/_next/static/chunks/pages/login-c693bf76993b8b37.js",revision:"c693bf76993b8b37"},{url:"/_next/static/chunks/pages/message-d4ed08967a7d56fb.js",revision:"d4ed08967a7d56fb"},{url:"/_next/static/chunks/pages/products-631335e7efbdb535.js",revision:"631335e7efbdb535"},{url:"/_next/static/chunks/pages/recommendation/%5Bcategory%5D-f237ce9f7a520c26.js",revision:"f237ce9f7a520c26"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/8827f5a2d8f83aeb.css",revision:"8827f5a2d8f83aeb"},{url:"/assets/clients/1.jpg",revision:"f9fba257e45d5a0052f00ba4a498f54b"},{url:"/assets/clients/10.jpg",revision:"9e8f80523d845c9b53d0c4dbf7974998"},{url:"/assets/clients/11.jpg",revision:"d906a0e5d67a752b4fa6fe5a7b3f68d1"},{url:"/assets/clients/12.jpg",revision:"91fee4c4faed8e855647c792a67d24e8"},{url:"/assets/clients/13.jpg",revision:"1c34b9c955a958586c40c2d527952ff3"},{url:"/assets/clients/14.jpg",revision:"5e5257a0a87cce103e9b58ab1786c73a"},{url:"/assets/clients/15.jpg",revision:"ee0da8d94d50c1ed7561e442ee450fd5"},{url:"/assets/clients/16.jpg",revision:"13cec2ba1b062a036634b7a937e082e5"},{url:"/assets/clients/17.jpg",revision:"2afbdf5dc5f895c382d95520d6ae4ba3"},{url:"/assets/clients/18.jpg",revision:"7fd5ac2e27b455531149174933f2352f"},{url:"/assets/clients/19.jpg",revision:"84c1bb59b40a3178d9238cc5576afec3"},{url:"/assets/clients/2.jpg",revision:"8896aad0da38dd2b86d214a52a34d6f5"},{url:"/assets/clients/20.jpg",revision:"29fbebf5ce5dd8d51d62f12b43aa9d54"},{url:"/assets/clients/3.jpg",revision:"a8e883b736c1db46bce12bea475cb6f9"},{url:"/assets/clients/4.jpg",revision:"7cb4968a870843690a4fb740aa427034"},{url:"/assets/clients/5.jpg",revision:"75c0a97a43155d7077b08c861197a289"},{url:"/assets/clients/6.png",revision:"04b6671b889670ae2d660e059a119da7"},{url:"/assets/clients/7.jpg",revision:"dd10c24863f9ed2ca56d1950eeb54704"},{url:"/assets/clients/8.jpg",revision:"4ca615e579013003e097dba62e293bf8"},{url:"/assets/clients/9.jpg",revision:"e7a265b2fa1039b344408adb0ea88120"},{url:"/assets/grid.png",revision:"77119670ec485b6b4aa32b23b5541697"},{url:"/assets/home_groom_image.webp",revision:"d43e792cc8def5d0aad20507938a5ccc"},{url:"/assets/home_need_advice.webp",revision:"c2ec9345e2b652bffa5ba5202ad670e0"},{url:"/assets/home_page_hero_image.webp",revision:"06bfa9c77e67d2ec778537d2d9f0ac5d"},{url:"/assets/home_perfect_styled.webp",revision:"eee73c4011abd23328f0ff4db9c3253b"},{url:"/assets/home_shop_again.webp",revision:"1afa177bd2b811048052b1facb87547e"},{url:"/assets/logo_white.jpg",revision:"2e0e39f775c98ecf2155b540db416582"},{url:"/assets/product_image.webp",revision:"9b007f45013b34b4388bda747f129382"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"8a868f9a92439389b391269f469833e4"},{url:"/icon-256x256.png",revision:"824be1a4268b28e784044ce0158b7d2f"},{url:"/icon-384x384.png",revision:"e783274dde93fb3170abc1d51820d824"},{url:"/icon-512x512.png",revision:"db698a331642a8c2e110b0f7ace9859f"},{url:"/manifest.json",revision:"1529104a7359f0585828b0ed9c188405"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
