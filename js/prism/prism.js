var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(l){var e,n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,a={},L={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof j?new j(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function n(e,a){var r,t;switch(a=a||{},L.util.type(e)){case"Object":if(t=L.util.objId(e),a[t])return a[t];for(var s in r={},a[t]=r,e)e.hasOwnProperty(s)&&(r[s]=n(e[s],a));return r;case"Array":return t=L.util.objId(e),a[t]||(r=[],a[t]=r,e.forEach(function(e,t){r[t]=n(e,a)}),r);default:return e}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack)||[])[1];if(t){var n,a=document.getElementsByTagName("script");for(n in a)if(a[n].src==t)return a[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n,a=L.util.clone(L.languages[e]);for(n in t)a[n]=t[n];return a},insertBefore:function(n,e,t,a){var r,s=(a=a||L.languages)[n],i={};for(r in s)if(s.hasOwnProperty(r)){if(r==e)for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);t.hasOwnProperty(r)||(i[r]=s[r])}var l=a[n];return a[n]=i,L.languages.DFS(L.languages,function(e,t){t===l&&e!=n&&(this[e]=i)}),i},DFS:function e(t,n,a,r){r=r||{};var s,i,o,l=L.util.objId;for(s in t)t.hasOwnProperty(s)&&(n.call(t,s,t[s],a||s),i=t[s],"Object"!==(o=L.util.type(i))||r[l(i)]?"Array"!==o||r[l(i)]||(r[l(i)]=!0,e(i,n,s,r)):(r[l(i)]=!0,e(i,n,null,r)))}},plugins:{},highlightAll:function(e,t){L.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};L.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),L.hooks.run("before-all-elements-highlight",a);for(var r,s=0;r=a.elements[s++];)L.highlightElement(r,!0===t,a.callback)},highlightElement:function(e,t,n){var a=L.util.getLanguage(e),r=L.languages[a],s=(L.util.setLanguage(e,a),e.parentElement),i=(s&&"pre"===s.nodeName.toLowerCase()&&L.util.setLanguage(s,a),{element:e,language:a,grammar:r,code:e.textContent});function o(e){i.highlightedCode=e,L.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,L.hooks.run("after-highlight",i),L.hooks.run("complete",i),n&&n.call(i.element)}L.hooks.run("before-sanity-check",i),(s=i.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),i.code?(L.hooks.run("before-highlight",i),i.grammar?t&&l.Worker?((a=new Worker(L.filename)).onmessage=function(e){o(e.data)},a.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}))):o(L.highlight(i.code,i.grammar,i.language)):o(L.util.encode(i.code))):(L.hooks.run("complete",i),n&&n.call(i.element))},highlight:function(e,t,n){e={code:e,grammar:t,language:n};if(L.hooks.run("before-tokenize",e),e.grammar)return e.tokens=L.tokenize(e.code,e.grammar),L.hooks.run("after-tokenize",e),j.stringify(L.util.encode(e.tokens),e.language);throw new Error('The language "'+e.language+'" has no grammar.')},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}for(var r=new c,s=($(r,r.head,e),function e(t,n,a,r,s,i){for(var o in a)if(a.hasOwnProperty(o)&&a[o]){var l=a[o];l=Array.isArray(l)?l:[l];for(var c=0;c<l.length;++c){if(i&&i.cause==o+","+c)return;var u,d=l[c],p=d.inside,g=!!d.lookbehind,m=!!d.greedy,f=d.alias;m&&!d.pattern.global&&(u=d.pattern.toString().match(/[imsuy]*$/)[0],d.pattern=RegExp(d.pattern.source,u+"g"));for(var b=d.pattern||d,h=r.next,y=s;h!==n.tail&&!(i&&y>=i.reach);y+=h.value.length,h=h.next){var k=h.value;if(n.length>t.length)return;if(!(k instanceof j)){var w,v=1;if(m){if(!(w=T(b,y,t,g))||w.index>=t.length)break;var x=w.index,A=w.index+w[0].length,S=y;for(S+=h.value.length;S<=x;)S+=(h=h.next).value.length;if(y=S-=h.value.length,h.value instanceof j)continue;for(var P=h;P!==n.tail&&(S<A||"string"==typeof P.value);P=P.next)v++,S+=P.value.length;v--,k=t.slice(y,S),w.index-=y}else if(!(w=T(b,0,k,g)))continue;x=w.index;var F=w[0],_=k.slice(0,x),C=k.slice(x+F.length),k=y+k.length,E=(i&&k>i.reach&&(i.reach=k),h.prev);_&&(E=$(n,E,_),y+=_.length),z(n,E,v),h=$(n,E,new j(o,p?L.tokenize(F,p):F,f,F)),C&&$(n,h,C),1<v&&(_={cause:o+","+c,reach:k},e(t,n,a,h.prev,y,_),i)&&_.reach>i.reach&&(i.reach=_.reach)}}}}}(e,r,t,r.head,0),r),i=[],o=s.head.next;o!==s.tail;)i.push(o.value),o=o.next;return i},hooks:{all:{},add:function(e,t){var n=L.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=L.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}},Token:j};function j(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function T(e,t,n,a){e.lastIndex=t;t=e.exec(n);return t&&a&&t[1]&&(e=t[1].length,t.index+=e,t[0]=t[0].slice(e)),t}function c(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function $(e,t,n){var a=t.next,n={value:n,prev:t,next:a};return t.next=n,a.prev=n,e.length++,n}function z(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;(t.next=a).prev=t,e.length-=r}return(l.Prism=L,j.stringify=function t(e,n){if("string"==typeof e)return e;var a;if(Array.isArray(e))return a="",e.forEach(function(e){a+=t(e,n)}),a;var r,s={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},e=e.alias,i=(e&&(Array.isArray(e)?Array.prototype.push.apply(s.classes,e):s.classes.push(e)),L.hooks.run("wrap",s),"");for(r in s.attributes)i+=" "+r+'="'+(s.attributes[r]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+i+">"+s.content+"</"+s.tag+">"},l.document)?((a=L.util.currentScript())&&(L.filename=a.src,a.hasAttribute("data-manual"))&&(L.manual=!0),L.manual||("loading"===(e=document.readyState)||"interactive"===e&&a&&a.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16))):l.addEventListener&&!L.disableWorkerMessageHandler&&l.addEventListener("message",function(e){var e=JSON.parse(e.data),t=e.language,n=e.code,e=e.immediateClose;l.postMessage(L.highlight(n,L.languages[t],t)),e&&l.close()},!1),L;function r(){L.manual||L.highlightAll()}}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={},n=(n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}}),t=(n["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]},{});t[e]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",t)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+e+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,t=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+t.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript,Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean,function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n="\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|'+"<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(Prism),function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n="(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",a={pattern:RegExp("(^|[^\\w.])"+n+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[a,{pattern:RegExp("(^|[^\\w.])"+n+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),lookbehind:!0,inside:a.inside},{pattern:RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)"+n+"[A-Z]\\w*\\b"),lookbehind:!0,inside:a.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":a,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp("(\\bimport\\s+)"+n+"(?:[A-Z]\\w*|\\*)(?=\\s*;)"),lookbehind:!0,inside:{namespace:a.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp("(\\bimport\\s+static\\s+)"+n+"(?:\\w+|\\*)(?=\\s*;)"),lookbehind:!0,alias:"static",inside:{namespace:a.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism),function(l){var e=l.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,o){(e="string"==typeof e?[e]:e).forEach(function(e){function t(e){e.inside||(e.inside={}),e.inside.rest=o}var n="doc-comment",a=l.languages[e];if(a){var r=a[n];if((r=r||(a=l.languages.insertBefore(e,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[n])instanceof RegExp&&(r=a[n]={pattern:r}),Array.isArray(r))for(var s=0,i=r.length;s<i;s++)r[s]instanceof RegExp&&(r[s]={pattern:r[s]}),t(r[s]);else t(r)}})}}),e.addSupport(["java","javascript","php"],e)}(Prism),function(e){var t=/(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,n="(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(/<mem>/g,function(){return"#\\s*\\w+(?:\\s*\\([^()]*\\))?"});e.languages.javadoc=e.languages.extend("javadoclike",{}),e.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp("(@(?:exception|link|linkplain|see|throws|value)\\s+(?:\\*\\s*)?)(?:"+n+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:e.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:t,lookbehind:!0,inside:e.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:t,lookbehind:!0,inside:{tag:e.languages.markup.tag,entity:e.languages.markup.entity,code:{pattern:/.+/,inside:e.languages.java,alias:"language-java"}}}}}],tag:e.languages.markup.tag,entity:e.languages.markup.entity}),e.languages.javadoclike.addSupport("java",e.languages.javadoc)}(Prism),Prism.languages.javastacktrace={summary:{pattern:/^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,lookbehind:!0,inside:{keyword:{pattern:/^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,lookbehind:!0},string:{pattern:/^(\s*)"[^"]*"/,lookbehind:!0},exceptions:{pattern:/^(:?\s*)[\w$.]+(?=:|$)/,lookbehind:!0,inside:{"class-name":/[\w$]+$/,namespace:/\b[a-z]\w*\b/,punctuation:/\./}},message:{pattern:/(:\s*)\S.*/,lookbehind:!0,alias:"string"},punctuation:/:/}},"stack-frame":{pattern:/^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,lookbehind:!0,inside:{keyword:{pattern:/^(\s*)at(?= )/,lookbehind:!0},source:[{pattern:/(\()\w+\.\w+:\d+(?=\))/,lookbehind:!0,inside:{file:/^\w+\.\w+/,punctuation:/:/,"line-number":{pattern:/\b\d+\b/,alias:"number"}}},{pattern:/(\()[^()]*(?=\))/,lookbehind:!0,inside:{keyword:/^(?:Native Method|Unknown Source)$/}}],"class-name":/[\w$]+(?=\.(?:<init>|[\w$]+)\()/,function:/(?:<init>|[\w$]+)(?=\()/,"class-loader":{pattern:/(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,lookbehind:!0,alias:"namespace",inside:{punctuation:/\./}},module:{pattern:/([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,lookbehind:!0,inside:{version:{pattern:/(@)[\s\S]+/,lookbehind:!0,alias:"number"},punctuation:/[@.]/}},namespace:{pattern:/(?:\b[a-z]\w*\.)+/,inside:{punctuation:/\./}},punctuation:/[()/.]/}},more:{pattern:/^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,lookbehind:!0,inside:{punctuation:/\.{3}/,number:/\d+/,keyword:/\b[a-z]+(?: [a-z]+)*\b/}}},function(){var r,s,e,t;function i(e){0!=(e=e.filter(function(e){e=((e=e)?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null)["white-space"];return"pre-wrap"===e||"pre-line"===e})).length&&((e=e.map(function(e){var t,n=e.querySelector("code"),a=e.querySelector(".line-numbers-rows");if(n&&a)return a=e.querySelector(".line-numbers-sizer"),t=n.textContent.split(s),a||((a=document.createElement("span")).className="line-numbers-sizer",n.appendChild(a)),a.innerHTML="0",a.style.display="block",n=a.getBoundingClientRect().height,a.innerHTML="",{element:e,lines:t,lineHeights:[],oneLinerHeight:n,sizer:a}}).filter(Boolean)).forEach(function(e){var a=e.sizer,t=e.lines,r=e.lineHeights,s=e.oneLinerHeight;r[t.length-1]=void 0,t.forEach(function(e,t){var n;e&&1<e.length?((n=a.appendChild(document.createElement("span"))).style.display="block",n.textContent=e):r[t]=s})}),e.forEach(function(e){for(var t=e.sizer,n=e.lineHeights,a=0,r=0;r<n.length;r++)void 0===n[r]&&(n[r]=t.children[a++].getBoundingClientRect().height)}),e.forEach(function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach(function(e,t){n.children[t].style.height=e+"px"})}))}void 0!==Prism&&"undefined"!=typeof document&&(r="line-numbers",s=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains(r)){var n,a=e.querySelector(".line-numbers-rows");if(a)return n=(t=(n=(e=parseInt(e.getAttribute("data-start"),10)||1)+(a.children.length-1))<(t=t<e?e:t)?n:t)-e,a.children[n]}},resize:function(e){i([e])},assumeViewportIndependence:!0},t=void 0,window.addEventListener("resize",function(){e.assumeViewportIndependence&&t===window.innerWidth||(t=window.innerWidth,i(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))}),Prism.hooks.add("complete",function(e){var t,n,a;e.code&&(t=(a=e.element).parentNode)&&/pre/i.test(t.nodeName)&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,r)&&(a.classList.remove(r),t.classList.add(r),a=(a=e.code.match(s))?a.length+1:1,a=new Array(a+1).join("<span></span>"),(n=document.createElement("span")).setAttribute("aria-hidden","true"),n.className="line-numbers-rows",n.innerHTML=a,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n),i([t]),Prism.hooks.run("line-numbers",e))}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}(),function(){var s,i,o,e,t;void 0!==Prism&&"undefined"!=typeof document&&(s=[],i={},o=function(){},Prism.plugins.toolbar={},e=Prism.plugins.toolbar.registerButton=function(e,n){var t="function"==typeof n?n:function(e){var t;return"function"==typeof n.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){n.onClick.call(this,e)})):"string"==typeof n.url?(t=document.createElement("a")).href=n.url:t=document.createElement("span"),n.className&&t.classList.add(n.className),t.textContent=n.text,t};e in i?console.warn('There is a button with the key "'+e+'" registered already.'):s.push(i[e]=t)},t=Prism.plugins.toolbar.hook=function(n){var e,a,t,r=n.element.parentNode;r&&/pre/i.test(r.nodeName)&&!r.parentNode.classList.contains("code-toolbar")&&((e=document.createElement("div")).classList.add("code-toolbar"),r.parentNode.insertBefore(e,r),e.appendChild(r),(a=document.createElement("div")).classList.add("toolbar"),r=s,(r=(t=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(n.element))?t.map(function(e){return i[e]||o}):r).forEach(function(e){var t,e=e(n);e&&((t=document.createElement("div")).classList.add("toolbar-item"),t.appendChild(e),a.appendChild(t))}),e.appendChild(a))},e("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(e){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}}),Prism.hooks.add("complete",t))}(),function(){var n;void 0!==Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?(n={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",sh:"Shell",basic:"BASIC",bbcode:"BBcode",bbj:"BBj",bnf:"BNF",rbnf:"RBNF",bqn:"BQN",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cilkc:"Cilk/C","cilk-c":"Cilk/C",cilkcpp:"Cilk/C++","cilk-cpp":"Cilk/C++",cilk:"Cilk/C++",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",metafont:"METAFONT",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",res:"ReScript",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (SCSS)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wgsl:"WGSL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"},Prism.plugins.toolbar.registerButton("show-language",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)){e=t.getAttribute("data-language")||n[e.language]||(t=e.language)&&(t.substring(0,1).toUpperCase()+t.substring(1)).replace(/s(?=cript)/,"S");if(e)return(t=document.createElement("span")).textContent=e,t}})):console.warn("Show Languages plugin loaded before Toolbar plugin."))}(),function(){function l(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy");setTimeout(function(){n?e.success():e.error()},1)}catch(t){setTimeout(function(){e.error(t)},1)}document.body.removeChild(t)}void 0!==Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(e){var t,n=e.element,a=function(e){var t,n={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(t in n){for(var a="data-prismjs-"+t,r=e;r&&!r.hasAttribute(a);)r=r.parentElement;r&&(n[t]=r.getAttribute(a))}return n}(n),r=document.createElement("button"),s=(r.className="copy-to-clipboard-button",r.setAttribute("type","button"),document.createElement("span"));return r.appendChild(s),o("copy"),t={getText:function(){return n.textContent},success:function(){o("copy-success"),i()},error:function(){o("copy-error"),setTimeout(function(){var e;e=n,window.getSelection().selectAllChildren(e)},1),i()}},r.addEventListener("click",function(){var e;e=t,navigator.clipboard?navigator.clipboard.writeText(e.getText()).then(e.success,function(){l(e)}):l(e)}),r;function i(){setTimeout(function(){o("copy")},a["copy-timeout"])}function o(e){s.textContent=a[e],r.setAttribute("data-copy-state",e)}}):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}();