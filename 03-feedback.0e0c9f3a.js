var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,u,f,c=0,l=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,u=setTimeout(T,t),l?y(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-c>=r}function T(){var e=d();if(w(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return g?m(n,r-(e-c)):n}(e))}function h(e){return u=void 0,b&&o?y(e):(o=i=void 0,a)}function j(){var e=d(),n=w(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(g)return u=setTimeout(T,t),y(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,r=(g="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},j.flush=function(){return void 0===u?a:h(d())},j}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form"),submit:document.querySelector("button"),email:document.querySelector("input[name=email]"),message:document.querySelector("textarea[name=message]")};b.form.addEventListener("input",t((function(e){if(e.currentTarget){const{elements:{email:t,message:n}}=e.currentTarget;if(""!==t.value){!function(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}({email:t.value,message:n.value})}}}),300)),b.submit.addEventListener("click",(function(e){if("submit"===e.target.type){if(e.preventDefault(),""!==b.email.value&&(b.email.value="",b.message.value=""),null===localStorage.getItem("feedback-form-state"))return;const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);console.log(n),localStorage.clear()}})),window.onload=function(){sessionStorage.getItem("loaded")?function(){try{const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);b.email.value=t.email||"",b.message.value=t.message||""}catch(e){}}():sessionStorage.setItem("loaded",!0)};
//# sourceMappingURL=03-feedback.0e0c9f3a.js.map