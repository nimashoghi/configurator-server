(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(t,e,n){t.exports=n(258)},120:function(t,e,n){},257:function(t,e,n){},258:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(113),c=n.n(o),s=(n(120),n(19)),u=n.n(s),i=n(28),f=n(40),l=n(114),p=n.n(l);n(257);var d="http://".concat(window.CONFIGURATOR_HOST||"localhost","/settings");function m(t){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(u.a.mark(function t(e){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d,"/").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function h(t,e){return v.apply(this,arguments)}function v(){return(v=Object(f.a)(u.a.mark(function t(e,n){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:if(r=t.sent,t.t0=r.ok,!t.t0){t.next=9;break}return t.next=7,r.json();case 7:t.t1=t.sent.success,t.t0=!0===t.t1;case 9:if(!t.t0){t.next=13;break}alert("Successfully updated settings"),t.next=14;break;case 13:alert("Failed to update settings...");case 14:case"end":return t.stop()}},t)}))).apply(this,arguments)}function b(){var t=function(t,e){var n=Object(r.useState)(function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(r){return console.log(r),e}}),a=Object(i.a)(n,2),o=a[0],c=a[1];return[o,function(e){try{var n=e instanceof Function?e(o):e;c(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(r){console.log(r)}},function(){return window.localStorage.removeItem(t)}]}("passcode",""),e=Object(i.a)(t,3),n=e[0],a=e[1],o=e[2];return Object(r.useEffect)(function(){n||a(prompt("Please enter your passcode here")||"")},[n,a]),[n,o]}var O=function(){var t=b(),e=Object(i.a)(t,2),n=e[0],o=e[1],c=function(t){var e=Object(r.useState)(),n=Object(i.a)(e,2),a=n[0],o=n[1];return Object(r.useEffect)(function(){Object(f.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,m(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e)}))()},[t]),[a,o]}(n),s=Object(i.a)(c,2),l=s[0],d=s[1];return n&&l?a.a.createElement("div",{className:"formContainer"},a.a.createElement("button",{onClick:function(){o(),document.location.reload()}},"Logout"),a.a.createElement("div",{className:"form"},a.a.createElement(p.a,{schema:JSON.parse(window.CONFIGURATOR_SCHEMA||"{}"),formData:l,onChange:function(t){var e=t.formData;return d(e)},onSubmit:function(){var t=Object(f.a)(u.a.mark(function t(e){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.formData,t.next=3,h(n,r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),onError:function(){return console.log("errors")}}))):a.a.createElement("div",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[115,1,2]]]);
//# sourceMappingURL=main.a7cfe0af.chunk.js.map