function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d,h,p=!1;function m(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:m(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function _(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:A(t,s,e[s])}function R(t){return Array.from(t.childNodes)}function O(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,s,r=!1){O(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function L(t,e,n,s){return P(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function C(t,e,n){return L(t,e,n,y)}function H(t,e,n){return L(t,e,n,w)}function U(t,e){return P(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function k(t){return U(t," ")}function D(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function M(t,e){const n=D(t,"HTML_TAG_START",0),s=D(t,"HTML_TAG_END",n);if(n===s)return new F(void 0,e);O(t);const r=t.splice(n,s-n+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new F(o,e)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function B(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function q(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),v(n)}}function K(t,e){const n=[];let s=0;for(const r of e.childNodes)if(8===r.nodeType){const e=r.textContent.trim();e===`HEAD_${t}_END`?(s-=1,n.push(r)):e===`HEAD_${t}_START`&&(s+=1,n.push(r))}else s>0&&n.push(r);return n}class W{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}class F extends W{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}}function J(t,e){return new t(e)}function V(t){h=t}function X(){if(!h)throw new Error("Function called outside component initialization");return h}function Y(t){X().$$.on_mount.push(t)}function Q(t){X().$$.after_update.push(t)}function Z(t){X().$$.on_destroy.push(t)}const tt=[],et=[],nt=[],st=[],rt=Promise.resolve();let ot=!1;function it(t){nt.push(t)}const at=new Set;let ct=0;function lt(){if(0!==ct)return;const t=h;do{try{for(;ct<tt.length;){const t=tt[ct];ct++,V(t),ut(t.$$)}}catch(t){throw tt.length=0,ct=0,t}for(V(null),tt.length=0,ct=0;et.length;)et.pop()();for(let t=0;t<nt.length;t+=1){const e=nt[t];at.has(e)||(at.add(e),e())}nt.length=0}while(tt.length);for(;st.length;)st.pop()();ot=!1,at.clear(),V(t)}function ut(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}const ft=new Set;let dt;function ht(){dt={r:0,c:[],p:dt}}function pt(){dt.r||r(dt.c),dt=dt.p}function mt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function gt(t,e,n,s){if(t&&t.o){if(ft.has(t))return;ft.add(t),dt.c.push((()=>{ft.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function bt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function _t(t){return"object"==typeof t&&null!==t?t:{}}function vt(t){t&&t.c()}function $t(t,e){t&&t.l(e)}function yt(t,e,s,i){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,s),i||it((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):r(e),t.$$.on_mount=[]})),c.forEach(it)}function wt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(tt.push(t),ot||(ot=!0,rt.then(lt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(e,n,o,i,a,c,l,u=[-1]){const f=h;V(e);const d=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&Et(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){p=!0;const t=R(n.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&mt(e.$$.fragment),yt(e,n.target,n.anchor,n.customElement),p=!1,lt()}V(f)}class St{$destroy(){wt(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Tt=[];function Nt(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!Tt.length;for(const t of r)t[1](),Tt.push(t,e);if(t){for(let t=0;t<Tt.length;t+=2)Tt[t][0](Tt[t+1]);Tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const At={};var It={owner:"Xx-Mohit-xX",repo:"Uptimemoon",sites:[{name:"Comfi",url:"https://comfibot.ml"},{name:"Rcomfi",url:"https://comfi-bot.xx-mohit-xx.repl.co"}],"status-website":{baseUrl:"/Uptimemoon",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"UptimeMoon",theme:"night",introTitle:"**UptimeMoom** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/Xx-Mohit-xX/Uptimemoon). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},notifications:{NOTIFICATION_DISCORD:!0,NOTIFICATION_DISCORD_WEBHOOK:!0,NOTIFICATION_DISCORD_WEBHOOK_URL:"$NOTIFICATION_DISCORD_WEBHOOK_URL"},path:"https://Xx-Mohit-xX.github.io/Uptimemoon",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Rt(t,e,n){const s=t.slice();return s[1]=e[n],s}function Ot(e){let n,s,r,o=It["status-website"]&&!It["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=y("img"),this.h()},l(t){n=C(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),c(n.src,s=It["status-website"].logoUrl)||A(n,"src",s),A(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}(),i=It["status-website"]&&!It["status-website"].hideNavTitle&&function(e){let n,s,r=It["status-website"].name+"";return{c(){n=y("div"),s=E(r)},l(t){n=C(t,"DIV",{});var e=R(n);s=U(e,r),e.forEach(v)},m(t,e){_(t,n,e),g(n,s)},p:t,d(t){t&&v(n)}}}();return{c(){n=y("div"),s=y("a"),o&&o.c(),r=x(),i&&i.c(),this.h()},l(t){n=C(t,"DIV",{});var e=R(n);s=C(e,"A",{href:!0,class:!0});var a=R(s);o&&o.l(a),r=k(a),i&&i.l(a),a.forEach(v),e.forEach(v),this.h()},h(){A(s,"href",It["status-website"].logoHref||It.path),A(s,"class","logo svelte-a08hsz")},m(t,e){_(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(t,e){It["status-website"]&&!It["status-website"].hideNavLogo&&o.p(t,e),It["status-website"]&&!It["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&v(n),o&&o.d(),i&&i.d()}}}function Pt(t){let e,n,s,r,o,i=t[1].title+"";return{c(){e=y("li"),n=y("a"),s=E(i),o=x(),this.h()},l(t){e=C(t,"LI",{});var r=R(e);n=C(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=R(n);s=U(a,i),a.forEach(v),o=k(r),r.forEach(v),this.h()},h(){A(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",t[1].href.replace("$OWNER",It.owner).replace("$REPO",It.repo)),A(n,"target",t[1].target||"_self"),A(n,"class","svelte-a08hsz")},m(t,r){_(t,e,r),g(e,n),g(n,s),g(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(t){t&&v(e)}}}function Lt(e){let n,s,r,o,i,a=It["status-website"]&&It["status-website"].logoUrl&&Ot(),c=It["status-website"]&&It["status-website"].navbar&&function(t){let e,n=It["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Pt(Rt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(1&r){let o;for(n=It["status-website"].navbar,o=0;o<n.length;o+=1){const i=Rt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Pt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&v(e)}}}(e),l=It["status-website"]&&It["status-website"].navbarGitHub&&!It["status-website"].navbar&&function(e){let n,s,r,o=It.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=E(o),this.h()},l(t){n=C(t,"LI",{});var e=R(n);s=C(e,"A",{href:!0,class:!0});var i=R(s);r=U(i,o),i.forEach(v),e.forEach(v),this.h()},h(){A(s,"href",`https://github.com/${It.owner}/${It.repo}`),A(s,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&v(n)}}}();return{c(){n=y("nav"),s=y("div"),a&&a.c(),r=x(),o=y("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=C(t,"NAV",{class:!0});var e=R(n);s=C(e,"DIV",{class:!0});var u=R(s);a&&a.l(u),r=k(u),o=C(u,"UL",{class:!0});var f=R(o);c&&c.l(f),i=k(f),l&&l.l(f),f.forEach(v),u.forEach(v),e.forEach(v),this.h()},h(){A(o,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){It["status-website"]&&It["status-website"].logoUrl&&a.p(t,e),It["status-website"]&&It["status-website"].navbar&&c.p(t,e),It["status-website"]&&It["status-website"].navbarGitHub&&!It["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&v(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ct(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Ht extends St{constructor(t){super(),xt(this,t,Ct,Lt,i,{segment:0})}}var Ut={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function kt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Dt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mt(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Ut[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+kt(Dt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Mt(kt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Dt(r[8])+'" alt="'+Dt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Dt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Mt(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Dt(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function jt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Gt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Bt(t,e,n){const s=t.slice();return s[8]=e[n],s}function qt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${It.path}/themes/${(It["status-website"]||{}).theme||"light"}.css`)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function zt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(It["status-website"]||{}).themeUrl)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Kt(e){let n,s;return{c(){n=y("script"),this.h()},l(t){n=C(t,"SCRIPT",{src:!0}),R(n).forEach(v),this.h()},h(){c(n.src,s=e[8].src)||A(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Wt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Ft(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=C(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){_(t,n,e)},p:t,d(t){t&&v(n)}}}function Jt(e){let n,s,r,o,i,a,c,u,f,d,h,p,m,b,w,E,T,N,I=Mt(It.i18n.footer.replace(/\$REPO/,`https://github.com/${It.owner}/${It.repo}`))+"",O=(It["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(It["status-website"]||{}).customHeadHtml+"";return{c(){n=new F(!1),s=S(),this.h()},l(t){n=M(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}();let P=((It["status-website"]||{}).themeUrl?zt:qt)(e),L=(It["status-website"]||{}).scripts&&function(t){let e,n=(It["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Kt(Bt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(It["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Bt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Kt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&v(e)}}}(e),H=(It["status-website"]||{}).links&&function(t){let e,n=(It["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Wt(Gt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(It["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Gt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Wt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&v(e)}}}(e),U=(It["status-website"]||{}).metaTags&&function(t){let e,n=(It["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ft(jt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(It["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=jt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Ft(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&v(e)}}}(e),D=It["status-website"].css&&function(e){let n,s,r=`<style>${It["status-website"].css}</style>`;return{c(){n=new F(!1),s=S(),this.h()},l(t){n=M(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}(),j=It["status-website"].js&&function(e){let n,s,r=`<script>${It["status-website"].js}<\/script>`;return{c(){n=new F(!1),s=S(),this.h()},l(t){n=M(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}(),G=(It["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(It["status-website"]||{}).customBodyHtml+"";return{c(){n=new F(!1),s=S(),this.h()},l(t){n=M(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}();p=new Ht({props:{segment:e[0]}});const B=e[2].default,q=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(B,e,e[1],null);return{c(){O&&O.c(),n=S(),P.c(),s=y("link"),r=y("link"),o=y("link"),L&&L.c(),i=S(),H&&H.c(),a=S(),U&&U.c(),c=S(),D&&D.c(),u=S(),j&&j.c(),f=S(),d=x(),G&&G.c(),h=x(),vt(p.$$.fragment),m=x(),b=y("main"),q&&q.c(),w=x(),E=y("footer"),T=y("p"),this.h()},l(t){const e=K("svelte-fmspuk",document.head);O&&O.l(e),n=S(),P.l(e),s=C(e,"LINK",{rel:!0,href:!0}),r=C(e,"LINK",{rel:!0,type:!0,href:!0}),o=C(e,"LINK",{rel:!0,type:!0,href:!0}),L&&L.l(e),i=S(),H&&H.l(e),a=S(),U&&U.l(e),c=S(),D&&D.l(e),u=S(),j&&j.l(e),f=S(),e.forEach(v),d=k(t),G&&G.l(t),h=k(t),$t(p.$$.fragment,t),m=k(t),b=C(t,"MAIN",{class:!0});var l=R(b);q&&q.l(l),l.forEach(v),w=k(t),E=C(t,"FOOTER",{class:!0});var g=R(E);T=C(g,"P",{}),R(T).forEach(v),g.forEach(v),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${It.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(It["status-website"]||{}).faviconSvg||(It["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(It["status-website"]||{}).favicon||"/logo-192.png"),A(b,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){O&&O.m(document.head,null),g(document.head,n),P.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),L&&L.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,a),U&&U.m(document.head,null),g(document.head,c),D&&D.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,f),_(t,d,e),G&&G.m(t,e),_(t,h,e),yt(p,t,e),_(t,m,e),_(t,b,e),q&&q.m(b,null),_(t,w,e),_(t,E,e),g(E,T),T.innerHTML=I,N=!0},p(t,[e]){(It["status-website"]||{}).customHeadHtml&&O.p(t,e),P.p(t,e),(It["status-website"]||{}).scripts&&L.p(t,e),(It["status-website"]||{}).links&&H.p(t,e),(It["status-website"]||{}).metaTags&&U.p(t,e),It["status-website"].css&&D.p(t,e),It["status-website"].js&&j.p(t,e),(It["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),q&&q.p&&(!N||2&e)&&function(t,e,n,s,r,o){if(r){const i=l(e,n,s,o);t.p(i,r)}}(q,B,t,t[1],N?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(B,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){N||(mt(p.$$.fragment,t),mt(q,t),N=!0)},o(t){gt(p.$$.fragment,t),gt(q,t),N=!1},d(t){O&&O.d(t),v(n),P.d(t),v(s),v(r),v(o),L&&L.d(t),v(i),H&&H.d(t),v(a),U&&U.d(t),v(c),D&&D.d(t),v(u),j&&j.d(t),v(f),t&&v(d),G&&G.d(t),t&&v(h),wt(p,t),t&&v(m),t&&v(b),q&&q.d(t),t&&v(w),t&&v(E)}}}function Vt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Xt extends St{constructor(t){super(),xt(this,t,Vt,Jt,i,{segment:0})}}function Yt(t){let e,n,s=t[1].stack+"";return{c(){e=y("pre"),n=E(s)},l(t){e=C(t,"PRE",{});var r=R(e);n=U(r,s),r.forEach(v)},m(t,s){_(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&j(n,s)},d(t){t&&v(e)}}}function Qt(e){let n,s,r,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Yt(e);return{c(){s=x(),r=y("h1"),o=E(e[0]),i=x(),a=y("p"),c=E(f),l=x(),d&&d.c(),u=S(),this.h()},l(t){K("svelte-1moakz",document.head).forEach(v),s=k(t),r=C(t,"H1",{class:!0});var n=R(r);o=U(n,e[0]),n.forEach(v),i=k(t),a=C(t,"P",{class:!0});var h=R(a);c=U(h,f),h.forEach(v),l=k(t),d&&d.l(t),u=S(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(t,e){_(t,s,e),_(t,r,e),g(r,o),_(t,i,e),_(t,a,e),g(a,c),_(t,l,e),d&&d.m(t,e),_(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(o,t[0]),2&e&&f!==(f=t[1].message+"")&&j(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Yt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&v(s),t&&v(r),t&&v(i),t&&v(a),t&&v(l),d&&d.d(t),t&&v(u)}}}function Zt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class te extends St{constructor(t){super(),xt(this,t,Zt,Qt,i,{status:0,error:1})}}function ee(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=J(i,a())),{c(){n&&vt(n.$$.fragment),s=S()},l(t){n&&$t(n.$$.fragment,t),s=S()},m(t,e){n&&yt(n,t,e),_(t,s,e),r=!0},p(t,e){const r=16&e?bt(o,[_t(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ht();const t=n;gt(t.$$.fragment,1,0,(()=>{wt(t,1)})),pt()}i?(n=J(i,a()),vt(n.$$.fragment),mt(n.$$.fragment,1),yt(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&mt(n.$$.fragment,t),r=!0)},o(t){n&&gt(n.$$.fragment,t),r=!1},d(t){t&&v(s),n&&wt(n,t)}}}function ne(t){let e,n;return e=new te({props:{error:t[0],status:t[1]}}),{c(){vt(e.$$.fragment)},l(t){$t(e.$$.fragment,t)},m(t,s){yt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){gt(e.$$.fragment,t),n=!1},d(t){wt(e,t)}}}function se(t){let e,n,s,r;const o=[ne,ee],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=S()},l(t){n.l(t),s=S()},m(t,n){i[e].m(t,n),_(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(ht(),gt(i[c],1,1,(()=>{i[c]=null})),pt(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),mt(n,1),n.m(s.parentNode,s))},i(t){r||(mt(n),r=!0)},o(t){gt(n),r=!1},d(t){i[e].d(t),t&&v(s)}}}function re(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[se]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Xt({props:o}),{c(){vt(n.$$.fragment)},l(t){$t(n.$$.fragment,t)},m(t,e){yt(n,t,e),s=!0},p(t,[e]){const s=12&e?bt(r,[4&e&&{segment:t[2][0]},8&e&&_t(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(mt(n.$$.fragment,t),s=!0)},o(t){gt(n.$$.fragment,t),s=!1},d(t){wt(n,t)}}}function oe(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return Q(l),u=At,f=s,X().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class ie extends St{constructor(t){super(),xt(this,t,oe,re,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ae=[],ce=[{js:()=>Promise.all([import("./index.9bfb7bc4.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.be55b7a2.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.eed4d26e.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.e3b985ef.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.916942ee.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],le=(ue=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ue(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ue(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ue;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function fe(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function de(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let he,pe=1;const me="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ge={};let be,_e;const ve=t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]}));function $e(t){const e=Object.create(null);return t.length?ve(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ye(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(be))return null;let e=t.pathname.slice(be.length);if(""===e&&(e="/"),!ae.some((t=>t.test(e))))for(let n=0;n<le.length;n+=1){const s=le[n],r=s.pattern.exec(e);if(r){const n=$e(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=de(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ye(r);if(o){Se(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),me.pushState({id:he},"",r.href)}}function Ee(){return{x:pageXOffset,y:pageYOffset}}function xe(t){if(ge[he]=Ee(),t.state){const e=ye(new URL(location.href));e?Se(e,t.state.id):location.href=location.href}else!function(t){pe=t}(pe+1),function(t){he=t}(pe),me.replaceState({id:he},"",location.href)}function Se(t,e,n,s){return fe(this,void 0,void 0,(function*(){const r=!!e;if(r)he=e;else{const t=Ee();ge[he]=t,he=e=++pe,ge[he]=n?t:{x:0,y:0}}if(yield _e(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ge[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ge[he]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Te(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ne,Ae=null;function Ie(t){const e=de(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ye(new URL(t,Te(document)));if(e)Ae&&t===Ae.href||(Ae={href:t,promise:We(e)}),Ae.promise}(e.href)}function Re(t){clearTimeout(Ne),Ne=setTimeout((()=>{Ie(t)}),20)}function Oe(t,e={noscroll:!1,replaceState:!1}){const n=ye(new URL(t,Te(document)));if(n){const s=Se(n,null,e.noscroll);return me[e.replaceState?"replaceState":"pushState"]({id:he},"",t),s}return location.href=t,new Promise((()=>{}))}const Pe="undefined"!=typeof __SAPPER__&&__SAPPER__;let Le,Ce,He,Ue=!1,ke=[],De="{}";const Me={page:function(t){const e=Nt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:Nt(null),session:Nt(Pe&&Pe.session)};let je,Ge,Be;function qe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ze(t){return fe(this,void 0,void 0,(function*(){Le&&Me.preloading.set(!0);const e=function(t){return Ae&&Ae.href===t.href?Ae.promise:We(t)}(t),n=Ce={},s=yield e,{redirect:r}=s;if(n===Ce)if(r)yield Oe(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ke(n,e,qe(e,t.page))}}))}function Ke(t,e,n){return fe(this,void 0,void 0,(function*(){Me.page.set(n),Me.preloading.set(!1),Le?Le.$set(e):(e.stores={page:{subscribe:Me.page.subscribe},preloading:{subscribe:Me.preloading.subscribe},session:Me.session},e.level0={props:yield He},e.notify=Me.page.notify,Le=new ie({target:Be,props:e,hydrate:!0})),ke=t,De=JSON.stringify(n.query),Ue=!0,Ge=!1}))}function We(t){return fe(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!He){const t=()=>({});He=Pe.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},je)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>fe(this,void 0,void 0,(function*(){const f=s[a];if(function(t,e,n,s){if(s!==De)return!0;const r=ke[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:f};const d=c++;let h;if(Ge||u||!ke[a]||ke[a].part!==e.i){u=!1;const{default:s,preload:r}=yield ce[e.i].js();let o;o=Ue||!Pe.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},je):{}:Pe.preloaded[a+1],h={component:s,props:o,segment:f,match:l,part:e.i}}else h=ke[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Fe,Je,Ve;Me.session.subscribe((t=>fe(void 0,void 0,void 0,(function*(){if(je=t,!Ue)return;Ge=!0;const e=ye(new URL(location.href)),n=Ce={},{redirect:s,props:r,branch:o}=yield We(e);n===Ce&&(s?yield Oe(s.location,{replaceState:!0}):yield Ke(o,r,qe(r,e.page)))})))),Fe={target:document.querySelector("#sapper")},Je=Fe.target,Be=Je,Ve=Pe.baseUrl,be=Ve,_e=ze,"scrollRestoration"in me&&(me.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{me.scrollRestoration="auto"})),addEventListener("load",(()=>{me.scrollRestoration="manual"})),addEventListener("click",we),addEventListener("popstate",xe),addEventListener("touchstart",Ie),addEventListener("mousemove",Re),Pe.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Pe;He||(He=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:He},level1:{props:{status:o,error:i},component:te},segments:r},c=$e(n);Ke([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;me.replaceState({id:pe},"",e);const n=ye(new URL(location.href));if(n)return Se(n,pe,!0,t)}));export{j as A,T as B,r as C,et as D,M as E,c as F,f as G,F as H,B as I,K as J,Mt as K,w as L,H as M,Oe as N,G as O,N as P,e as Q,I as R,St as S,bt as T,Q as U,Z as V,u as W,_t as X,it as Y,z as Z,x as a,C as b,k as c,R as d,y as e,v as f,A as g,_ as h,xt as i,ht as j,pt as k,mt as l,E as m,U as n,Y as o,g as p,t as q,It as r,i as s,gt as t,S as u,$ as v,vt as w,$t as x,yt as y,wt as z};

import __inject_styles from './inject_styles.803b7e80.js';