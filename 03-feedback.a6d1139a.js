!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,l=setTimeout(T,t),s?y(e):u}function w(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function T(){var e=b();if(w(e))return h(e);l=setTimeout(T,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function h(e){return l=void 0,m&&o?y(e):(o=i=void 0,u)}function O(){var e=b(),n=w(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(T,t),y(f)}return void 0===l&&(l=setTimeout(T,t)),u}return t=S(t)||0,p(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},O.flush=function(){return void 0===l?u:h(b())},O}function p(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),submit:document.querySelector("button"),email:document.querySelector("input[name=email]"),message:document.querySelector("textarea[name=message]")};j.form.addEventListener("input",n((function(e){if(e.currentTarget){var t=e.currentTarget.elements,n=t.email,o=t.message;if(""!==n.value&&""!==o.value&&n.value.includes("@")){var r={email:n.value,message:o.value};!function(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}(r),console.log(r)}}}),500)),j.submit.addEventListener("click",(function(e){if("submit"===e.target.type){if(e.preventDefault(),""!==j.email.value&&""!==j.message.value&&j.email.value.includes("@")&&(j.email.value="",j.message.value=""),null===localStorage.getItem("feedback-form-state"))return;console.log(localStorage.getItem("feedback-form-state")),localStorage.clear()}})),window.onload=function(){sessionStorage.getItem("loaded")?function(){try{var e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);j.email.value=t.email||"",j.message.value=t.message||""}catch(e){}}():sessionStorage.setItem("loaded",!0)}}();
//# sourceMappingURL=03-feedback.a6d1139a.js.map