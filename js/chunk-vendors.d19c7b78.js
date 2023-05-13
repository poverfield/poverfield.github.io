(self["webpackChunkmy_travel_app"]=self["webpackChunkmy_travel_app"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(7045),y=n(7976),v=n(9518),w=n(7674),b=n(5112),_=n(9711),E=n(9909),I=E.enforce,S=E.get,T=c.Int8Array,x=T&&T.prototype,C=c.Uint8ClampedArray,A=C&&C.prototype,D=T&&v(T),k=x&&v(x),N=Object.prototype,R=c.TypeError,O=b("toStringTag"),F=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),P=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(V,t)||h(U,t)},j=function(e){var t=v(e);if(l(t)){var n=S(t);return n&&h(n,L)?n[L]:j(t)}},q=function(e){if(!l(e))return!1;var t=d(e);return h(V,t)||h(U,t)},$=function(e){if(q(e))return e;throw R("Target is not a typed array")},z=function(e){if(u(e)&&(!w||y(D,e)))return e;throw R(f(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}k[e]&&!n||m(k,e,n?t:M&&x[e]||t,r)}},G=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(D[e]&&!n)return;try{return m(D,e,n?t:M&&D[e]||t)}catch(s){}}for(r in V)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in V)i=c[r],s=i&&i.prototype,s?I(s)[L]=i:M=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(I(s)[L]=i);if((!M||!u(D)||D===Function.prototype)&&(D=function(){throw R("Incorrect invocation")},M))for(r in V)c[r]&&w(c[r],D);if((!M||!k||k===N)&&(k=D.prototype,M))for(r in V)c[r]&&w(c[r].prototype,k);if(M&&v(A)!==k&&w(A,k),a&&!h(k,O))for(r in P=!0,g(k,O,{configurable:!0,get:function(){return l(this)?this[F]:void 0}}),V)c[r]&&p(c[r],F,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:P&&F,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:j,isView:B,isTypedArray:q,TypedArray:D,TypedArrayPrototype:k}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,i=r(t),s=new e(i);while(i>n)s[n]=t[n++];return s}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},1572:function(e,t,n){var r=n(6244),i=n(9303),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw m(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},s=function(e){return l(e,b)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(w,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4599:function(e,t,n){var r=n(7593),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},1439:function(e,t,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(e,t,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},5315:function(e,t,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3767:function(e,t,n){n(1439)},8585:function(e,t,n){n(7585)},8696:function(e,t,n){n(5315)},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",y=s("Error"),v=s(g),w=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=y(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,_="stack"in y(g),E="stack"in new v(1,2),I=v&&p&&Object.getOwnPropertyDescriptor(i,g),S=!!I&&!(I.writable&&I.configurable),T=_&&!S&&!E;r({global:!0,constructor:!0,forced:m||T},{DOMException:T?w:v});var x=s(g),C=x.prototype;if(C.constructor!==x)for(var A in m||a(C,"constructor",o(1,x)),d)if(c(d,A)){var D=d[A],k=D.s;c(x,k)||a(x,k,o(6,D.c))}},5765:function(){},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return v},G6:function(){return I},L:function(){return c},LL:function(){return A},Sg:function(){return w},ZB:function(){return l},ZR:function(){return C},aH:function(){return y},eu:function(){return T},hl:function(){return S},jU:function(){return E},m9:function(){return V},ne:function(){return F},r3:function(){return N},vZ:function(){return R},z$:function(){return b}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function E(){return"object"===typeof self&&self.self===self}function I(){return!_()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){try{return"object"===typeof indexedDB}catch(e){return!1}}function T(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x="FirebaseError";class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=x,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?D(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new C(r,o,n);return a}}function D(e,t){return e.replace(k,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(O(n)&&O(s)){if(!R(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){const n=new L(e,t);return n.subscribe.bind(n)}class L{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=M(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function M(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return Ge},IU:function(){return ke},Jd:function(){return S},PG:function(){return xe},SU:function(){return je},Um:function(){return Ie},WL:function(){return $e},X$:function(){return A},X3:function(){return De},XI:function(){return Ve},Xl:function(){return Ne},dq:function(){return Me},iH:function(){return Pe},j:function(){return x},lk:function(){return T},nZ:function(){return a},qj:function(){return Ee},qq:function(){return b},yT:function(){return Ae}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}function a(){return i}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30;let y;const v=Symbol(""),w=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=y,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,E=!0,m=1<<++p,p<=g?h(this):_(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,y=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const I=[];function S(){I.push(E),E=!1}function T(){const e=I.pop();E=void 0===e||e}function x(e,t,n){if(E&&y){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;C(r,i)}}function C(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"set":(0,r._N)(e)&&u.push(a.get(v));break}if(1===u.length)u[0]&&D(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);D(c(e))}}function D(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&k(r,t);for(const r of n)r.computed||k(r,t)}function k(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),O=U(),F=U(!1,!0),L=U(!0),M=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ke(this);for(let t=0,i=this.length;t<i;t++)x(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ke)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=ke(this)[t].apply(this,e);return T(),n}})),e}function V(e){const t=ke(this);return x(t,"has",e),t.hasOwnProperty(e)}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?we:ve:t?ye:ge).get(n))return n;const o=(0,r.kJ)(n);if(!e){if(o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);if("hasOwnProperty"===i)return V}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?R.has(i):N(i))?a:(e||x(n,"get",i),t?a:Me(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Se(a):Ee(a):a)}}const B=q(),j=q(!0);function q(e=!1){return function(t,n,i,s){let o=t[n];if(Ce(o)&&Me(o)&&!Me(i))return!1;if(!e&&(Ae(i)||Ce(i)||(o=ke(o),i=ke(i)),!(0,r.kJ)(t)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===ke(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),c}}function $(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function z(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&R.has(t)||x(e,"has",t),n}function K(e){return x(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const G={get:O,set:B,deleteProperty:$,has:z,ownKeys:K},H={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},Q=(0,r.l7)({},G,{get:F,set:j}),W=e=>e,X=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const i=ke(e),s=ke(t);n||(t!==s&&x(i,"get",t),x(i,"get",s));const{has:o}=X(i),a=r?W:n?Oe:Re;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=ke(n),i=ke(e);return t||(e!==i&&x(r,"has",e),x(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&x(ke(e),"iterate",v),Reflect.get(e,"size",e)}function ee(e){e=ke(e);const t=ke(this),n=X(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function te(e,t){t=ke(t);const n=ke(this),{has:i,get:s}=X(n);let o=i.call(n,e);o||(e=ke(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function ne(e){const t=ke(this),{has:n,get:r}=X(t);let i=n.call(t,e);i||(e=ke(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function re(){const e=ke(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=ke(s),a=t?W:e?Oe:Re;return!e&&x(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function se(e,t,n){return function(...i){const s=this["__v_raw"],o=ke(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?W:t?Oe:Re;return!t&&x(o,"iterate",u?w:v),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return J(this,e)},get size(){return Z(this)},has:Y,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Z(this)},has:Y,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)})),[e,n,t,r]}const[ce,ue,le,he]=ae();function de(e,t){const n=t?e?he:le:e?ue:ce;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const fe={get:de(!1,!1)},pe={get:de(!1,!0)},me={get:de(!0,!1)};const ge=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap;function be(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _e(e){return e["__v_skip"]||!Object.isExtensible(e)?0:be((0,r.W7)(e))}function Ee(e){return Ce(e)?e:Te(e,!1,G,fe,ge)}function Ie(e){return Te(e,!1,Q,pe,ye)}function Se(e){return Te(e,!0,H,me,ve)}function Te(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=_e(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function xe(e){return Ce(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function Ae(e){return!(!e||!e["__v_isShallow"])}function De(e){return xe(e)||Ce(e)}function ke(e){const t=e&&e["__v_raw"];return t?ke(t):e}function Ne(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Re=e=>(0,r.Kn)(e)?Ee(e):e,Oe=e=>(0,r.Kn)(e)?Se(e):e;function Fe(e){E&&y&&(e=ke(e),C(e.dep||(e.dep=c())))}function Le(e,t){e=ke(e);const n=e.dep;n&&D(n)}function Me(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Ue(e,!1)}function Ve(e){return Ue(e,!0)}function Ue(e,t){return Me(e)?e:new Be(e,t)}class Be{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ke(e),this._value=t?e:Re(e)}get value(){return Fe(this),this._value}set value(e){const t=this.__v_isShallow||Ae(e)||Ce(e);e=t?e:ke(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Re(e),Le(this,e))}}function je(e){return Me(e)?e.value:e}const qe={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $e(e){return xe(e)?e:new Proxy(e,qe)}var ze;class Ke{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ze]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=ke(this);return Fe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Ke(i,s,o||!s,n);return a}ze="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},FN:function(){return dn},Fl:function(){return An},HY:function(){return kt},JJ:function(){return z},Ko:function(){return Pe},P$:function(){return te},Q6:function(){return ae},U2:function(){return re},Us:function(){return St},Wm:function(){return Wt},Y3:function(){return v},Y8:function(){return Y},YP:function(){return H},_:function(){return Qt},aZ:function(){return ce},f3:function(){return K},h:function(){return Dn},iD:function(){return jt},ic:function(){return Ie},j4:function(){return qt},kq:function(){return tn},nK:function(){return oe},uE:function(){return en},up:function(){return Oe},w5:function(){return L},wg:function(){return Mt},wy:function(){return ke}});n(7658),n(541);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=x(h[r]);i<e?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),_())}function _(){u||l||(l=!0,y=g.then(A))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function I(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),_()}function S(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function T(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>x(e)-x(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const x=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=x(e)-x(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){l=!1,u=!0,h.sort(C);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,T(e),u=!1,y=null,(h.length||f.length)&&A(e)}}new Set;new Map;function D(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function k(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=k(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let R=null,O=null;function F(e){const t=R;return R=e,O=e&&e.type.__scopeId||null,t}function L(e,t=R,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ut(-1);const i=F(t);let s;try{s=e(...n)}finally{F(i),r._d&&Ut(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function M(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const b=F(e);try{if(4&n.shapeFlag){const e=s||r;v=nn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=nn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:P(l)}}catch(E){Ft.length=0,a(E,e,1),v=Wt(Rt)}let _=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(i.tR)&&(w=V(w,c)),_=Yt(_,w))}return n.dirs&&(_=Yt(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,F(b),v}const P=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},V=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function U(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||B(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?B(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!N(u,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!N(n,s))return!0}return!1}function j({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const q=e=>e.__isSuspense;function $(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):I(e)}function z(e,t){if(hn){let n=hn.provides;const r=hn.parent&&hn.parent.provides;r===n&&(n=hn.provides=Object.create(r)),n[e]=t}else 0}function K(e,t,n=!1){const r=hn||R;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const G={};function H(e,t,n){return Q(e,t,n)}function Q(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=(0,r.nZ)()===(null===hn||void 0===hn?void 0:hn.scope)?hn:null;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?J(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[y])}:i.dG,t&&a){const e=d;d=()=>J(e())}let g,y=e=>{f=E.onStop=()=>{s(e,h,4)}};if(vn){if(y=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,y]):d(),"sync"!==c)return i.dG;{const e=Nn();g=e.__watcherHandles||(e.__watcherHandles=[])}}let v=m?new Array(e.length).fill(G):G;const w=()=>{if(E.active)if(t){const e=E.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(f&&f(),o(t,h,3,[e,v===G?void 0:m&&v[0]===G?[]:v,y]),v=e)}else E.run()};let _;w.allowRecurse=!!t,"sync"===c?_=w:"post"===c?_=()=>It(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),_=()=>b(w));const E=new r.qq(d,_);t?n?w():v=E.run():"post"===c?It(E.run.bind(E),h&&h.suspense):E.run();const I=()=>{E.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,E)};return g&&g.push(I),I}function W(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?X(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=hn;fn(this);const c=Q(s,o.bind(r),n);return a?fn(a):pn(),c}function X(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function J(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))J(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)J(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{J(e,t)}));else if((0,i.PO)(e))for(const n in e)J(e[n],t);return e}function Y(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _e((()=>{e.isMounted=!0})),Se((()=>{e.isUnmounting=!0})),e}const Z=[Function,Array],ee={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},setup(e,{slots:t}){const n=dn(),i=Y();let s;return()=>{const o=t.default&&ae(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Rt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ie(a);const l=se(a);if(!l)return ie(a);const h=re(l,c,i,n);oe(l,h);const d=n.subTree,f=d&&se(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Rt&&(!zt(l,f)||p)){const e=re(f,c,i,n);if(oe(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ie(a);"in-out"===u&&l.type!==Rt&&(e.delayLeave=(e,t,n)=>{const r=ne(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},te=ee;function ne(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function re(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),E=ne(n,e),I=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];I(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const i=E[_];i&&zt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),I(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=w||h,i=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,I(t?i:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),I(n?g:m,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,p?S(p,[t,o]):o()},clone(e){return re(e,t,n,r)}};return T}function ie(e){if(le(e))return e=Yt(e),e.children=null,e}function se(e){return le(e)?e.children?e.children[0]:void 0:e}function oe(e,t){6&e.shapeFlag&&e.component?oe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ae(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===kt?(128&o.patchFlag&&i++,r=r.concat(ae(o.children,t,a))):(t||o.type!==Rt)&&r.push(null!=a?Yt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ce(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const ue=e=>!!e.type.__asyncLoader;const le=e=>e.type.__isKeepAlive;RegExp,RegExp;function he(e,t){return(0,i.kJ)(e)?e.some((e=>he(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function de(e,t){pe(e,"a",t)}function fe(e,t){pe(e,"da",t)}function pe(e,t,n=hn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ve(t,r,n),n){let e=n.parent;while(e&&e.parent)le(e.parent.vnode)&&me(r,t,n,e),e=e.parent}}function me(e,t,n,r){const s=ve(t,e,r,!0);Te((()=>{(0,i.Od)(r[t],s)}),n)}function ge(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ye(e){return 128&e.shapeFlag?e.ssContent:e}function ve(e,t,n=hn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),fn(n);const s=o(t,n,e,i);return pn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const we=e=>(t,n=hn)=>(!vn||"sp"===e)&&ve(e,((...e)=>t(...e)),n),be=we("bm"),_e=we("m"),Ee=we("bu"),Ie=we("u"),Se=we("bum"),Te=we("um"),xe=we("sp"),Ce=we("rtg"),Ae=we("rtc");function De(e,t=hn){ve("ec",e,t)}function ke(e,t){const n=R;if(null===n)return e;const r=Tn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&J(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ne(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const Re="components";function Oe(e,t){return Le(Re,e,!0,t)||e}const Fe=Symbol();function Le(e,t,n=!0,r=!1){const s=R||hn;if(s){const n=s.type;if(e===Re){const e=xn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Me(s[e]||n[e],t)||Me(s.appContext[e],t);return!o&&r?n:o}}function Me(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Pe(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Ve=e=>e?mn(e)?Tn(e)||e.proxy:Ve(e.parent):null,Ue=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ve(e.parent),$root:e=>Ve(e.root),$emit:e=>e.emit,$options:e=>He(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>W.bind(e)}),Be=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),je={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Be(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];qe&&(c[t]=0)}}const d=Ue[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Be(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Be(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Ue,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let qe=!0;function $e(e){const t=He(e),n=e.proxy,s=e.ctx;qe=!1,t.beforeCreate&&Ke(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:I,renderTracked:S,renderTriggered:T,errorCaptured:x,serverPrefetch:C,expose:A,inheritAttrs:D,components:k,directives:N,filters:R}=t,O=null;if(h&&ze(h,s,O,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(qe=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=An({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ge(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{z(t,e[t])}))}function F(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ke(d,e,"c"),F(be,f),F(_e,p),F(Ee,m),F(Ie,g),F(de,y),F(fe,v),F(De,x),F(Ae,S),F(Ce,T),F(Se,b),F(Te,E),F(xe,C),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===i.dG&&(e.render=I),null!=D&&(e.inheritAttrs=D),k&&(e.components=k),N&&(e.directives=N)}function ze(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=Ye(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?K(n.from||o,n.default,!0):K(n.from||o):K(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ke(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ge(e,t,n,r){const s=r.includes(".")?X(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&H(s,n)}else if((0,i.mf)(e))H(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ge(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&H(s,r,e)}else 0}function He(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Qe(u,e,a,!0))),Qe(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function Qe(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Qe(e,s,n,!0),i&&i.forEach((t=>Qe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=We[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const We={data:Xe,props:et,emits:et,methods:et,computed:et,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:et,directives:et,watch:tt,provide:Xe,inject:Je};function Xe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Je(e,t){return et(Ye(e),Ye(t))}function Ye(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ze(e,t){return e?[...new Set([].concat(e,t))]:t}function et(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function tt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Ze(e[r],t[r]);return n}function nt(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Kt,1),e.propsDefaults=Object.create(null),it(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function rt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;it(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=st(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=st(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function it(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:N(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=st(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function st(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(fn(s),r=i[n]=e.call(null,t),pn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ot(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=ot(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);at(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(at(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=lt(Boolean,r.type),n=lt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function at(e){return"$"!==e[0]}function ct(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ut(e,t){return ct(e)===ct(t)}function lt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ut(t,e))):(0,i.mf)(t)&&ut(t,e)?0:-1}const ht=e=>"_"===e[0]||"$stable"===e,dt=e=>(0,i.kJ)(e)?e.map(nn):[nn(e)],ft=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>dt(t(...e))),n);return r._c=!1,r},pt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ht(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=ft(s,n,r);else if(null!=n){0;const e=dt(n);t[s]=()=>e}}},mt=(e,t)=>{const n=dt(t);e.slots.default=()=>n},gt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):pt(t,e.slots={})}else e.slots={},t&&mt(e,t);(0,i.Nj)(e.slots,Kt,1)},yt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,pt(t,s)),a=t}else t&&(mt(e,t),a={default:1});if(o)for(const i in s)ht(i)||i in a||delete s[i]};function vt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wt=0;function bt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=vt(),o=new Set;let a=!1;const c=s.app={_uid:wt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Rn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=Wt(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Tn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function _t(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>_t(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(ue(o)&&!a)return;const c=4&o.shapeFlag?Tn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,It(r,n)):r()}else 0}}function Et(){}const It=$;function St(e){return Tt(e)}function Tt(e,t){Et();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!zt(e,t)&&(r=Y(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Nt:v(e,t,n,r);break;case Rt:w(e,t,n,r);break;case Ot:null==e&&_(t,n,r,o);break;case kt:F(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,ee)}null!=l&&i&&_t(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},x=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:w}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&k(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&Ne(e,null,r,"created"),D(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,J);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&an(p,r,e)}w&&Ne(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||b||w)&&It((()=>{p&&an(p,r,e),b&&v.enter(f),w&&Ne(e,null,r,"mounted")}),o)},D=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;D(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},k=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?rn(e[u]):nn(e[u]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&xt(n,!1),(g=m.onVnodeBeforeUpdate)&&an(g,n,t,e),f&&Ne(t,e,n,"beforeUpdate"),n&&xt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?R(e.dynamicChildren,h,u,n,r,y,o):c||$(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)O(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,J)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||O(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&It((()=>{g&&an(g,n,t,e),f&&Ne(t,e,n,"updated")}),r)},R=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===kt||!zt(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},O=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,J);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,J)}"value"in r&&a(e,"value",n.value,r.value)}},F=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),k(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Ct(e,t,!0)):$(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):P(t,n,r,i,s,o,c):V(e,t,c)},P=(e,t,n,r,i,s,o)=>{const a=e.component=ln(e,r,i);if(le(e)&&(a.ctx.renderer=ee),wn(a),a.asyncDep){if(i&&i.registerDep(a,B),!e.el){const e=a.subTree=Wt(Rt);w(null,e,t,n)}}else B(a,e,t,n,i,s,o)},V=(e,t,n)=>{const r=t.component=e.component;if(U(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void q(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},B=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,xt(e,!1),n?(n.el=l.el,q(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&an(t,u,n,l),xt(e,!0);const d=M(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),Y(p),e,o,a),n.el=d.el,null===h&&j(e,d.el),s&&It(s,o),(t=n.props&&n.props.onVnodeUpdated)&&It((()=>an(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=ue(t);if(xt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&an(r,d,t),xt(e,!0),c&&ne){const n=()=>{e.subTree=M(e),ne(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=M(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&It(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;It((()=>an(r,d,e)),o)}(256&t.shapeFlag||d&&ue(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&It(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>b(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,xt(e,!0),h()},q=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,rt(e,t.props,i,n),yt(e,t.children,n),(0,r.Jd)(),S(),(0,r.lk)()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void K(u,h,n,r,i,s,o,a,c);if(256&f)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&J(u,i,s),h!==u&&d(n,h)):16&l?16&p?K(u,h,n,r,i,s,o,a,c):J(u,i,s,!0):(8&l&&d(n,""),16&p&&k(h,n,r,i,s,o,a,c))},z=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?rn(t[f]):nn(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?J(e,s,o,!0,!1,d):k(t,n,r,s,o,a,c,u,d)},K=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?rn(t[l]):nn(t[l]);if(!zt(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?rn(t[f]):nn(t[f]);if(!zt(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?rn(t[l]):nn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?rn(t[l]):nn(t[l]);null!=e.key&&g.set(e.key,l)}let v,w=0;const b=f-m+1;let _=!1,E=0;const I=new Array(b);for(l=0;l<b;l++)I[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===I[v-m]&&zt(r,t[v])){i=v;break}void 0===i?H(r,s,o,!0):(I[i-m]=l+1,i>=E?E=i:_=!0,y(r,t[i],n,null,s,o,a,c,u),w++)}const S=_?At(I):i.Z6;for(v=S.length-1,l=b-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===I[l]?y(null,i,n,d,s,o,a,c,u):_&&(v<0||l!==S[v]?G(i,n,d,2):v--)}}},G=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void G(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===kt){s(o,t,n);for(let e=0;e<u.length;e++)G(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Ot)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),It((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&_t(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!ue(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&an(m,t,e),6&l)X(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Ne(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(s!==kt||h>0&&64&h)?J(u,t,n,!1,!0):(s===kt&&384&h||!i&&16&l)&&J(c,t,n),r&&Q(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&It((()=>{m&&an(m,t,e),f&&Ne(e,null,t,"unmounted")}),n)},Q=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===kt)return void W(n,r);if(t===Ot)return void x(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},W=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&It(c,t),It((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),S(),T(),t._vnode=e},ee={p:y,um:H,m:G,r:Q,mt:P,mc:k,pc:$,pbc:R,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:bt(Z,te)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ct(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=rn(s[i]),t.el=e.el),n||Ct(e,t)),t.type===Nt&&(t.el=e.el)}}function At(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Dt=e=>e.__isTeleport;const kt=Symbol(void 0),Nt=Symbol(void 0),Rt=Symbol(void 0),Ot=Symbol(void 0),Ft=[];let Lt=null;function Mt(e=!1){Ft.push(Lt=e?null:[])}function Pt(){Ft.pop(),Lt=Ft[Ft.length-1]||null}let Vt=1;function Ut(e){Vt+=e}function Bt(e){return e.dynamicChildren=Vt>0?Lt||i.Z6:null,Pt(),Vt>0&&Lt&&Lt.push(e),e}function jt(e,t,n,r,i,s){return Bt(Qt(e,t,n,r,i,s,!0))}function qt(e,t,n,r,i){return Bt(Wt(e,t,n,r,i,!0))}function $t(e){return!!e&&!0===e.__v_isVNode}function zt(e,t){return e.type===t.type&&e.key===t.key}const Kt="__vInternal",Gt=({key:e})=>null!=e?e:null,Ht=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:R,r:e,k:t,f:!!n}:e:null;function Qt(e,t=null,n=null,r=0,s=null,o=(e===kt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gt(t),ref:t&&Ht(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:R};return c?(sn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Vt>0&&!a&&Lt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Lt.push(u),u}const Wt=Xt;function Xt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Fe||(e=Rt),$t(e)){const r=Yt(e,t,!0);return n&&sn(r,n),Vt>0&&!a&&Lt&&(6&r.shapeFlag?Lt[Lt.indexOf(e)]=r:Lt.push(r)),r.patchFlag|=-2,r}if(Cn(e)&&(e=e.__vccOpts),t){t=Jt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:q(e)?128:Dt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Qt(e,t,n,s,o,c,a,!0)}function Jt(e){return e?(0,r.X3)(e)||Kt in e?(0,i.l7)({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?on(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Ht(t)):[s,Ht(t)]:Ht(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==kt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function Zt(e=" ",t=0){return Wt(Nt,null,e,t)}function en(e,t){const n=Wt(Ot,null,e);return n.staticCount=t,n}function tn(e="",t=!1){return t?(Mt(),qt(Rt,null,e)):Wt(Rt,null,e)}function nn(e){return null==e||"boolean"===typeof e?Wt(Rt):(0,i.kJ)(e)?Wt(kt,null,e.slice()):"object"===typeof e?rn(e):Wt(Nt,null,String(e))}function rn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Yt(e)}function sn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),sn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Kt in t?3===r&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,i.mf)(t)?(t={default:t,_ctx:R},n=32):(t=String(t),64&r?(n=16,t=[Zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function on(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function an(e,t,n,r=null){o(e,t,7,[n,r])}const cn=vt();let un=0;function ln(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||cn,a={uid:un++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ot(s,o),emitsOptions:k(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=D.bind(null,a),e.ce&&e.ce(a),a}let hn=null;const dn=()=>hn||R,fn=e=>{hn=e,e.scope.on()},pn=()=>{hn&&hn.scope.off(),hn=null};function mn(e){return 4&e.vnode.shapeFlag}let gn,yn,vn=!1;function wn(e,t=!1){vn=t;const{props:n,children:r}=e.vnode,i=mn(e);nt(e,n,i,t),gt(e,r);const s=i?bn(e,t):void 0;return vn=!1,s}function bn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,je));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Sn(e):null;fn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),pn(),(0,i.tI)(c)){if(c.then(pn,pn),t)return c.then((n=>{_n(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else _n(e,c,t)}else En(e,t)}function _n(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),En(e,n)}function En(e,t,n){const s=e.type;if(!e.render){if(!t&&gn&&!s.render){const t=s.template||He(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=gn(t,c)}}e.render=s.render||i.dG,yn&&yn(e)}fn(e),(0,r.Jd)(),$e(e),(0,r.lk)(),pn()}function In(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Sn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=In(e))},slots:e.slots,emit:e.emit,expose:t}}function Tn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ue?Ue[n](e):void 0},has(e,t){return t in e||t in Ue}}))}function xn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Cn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const An=(e,t)=>(0,r.Fl)(e,t,vn);function Dn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?$t(t)?Wt(e,null,[t]):Wt(e,t):Wt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&$t(n)&&(n=[n]),Wt(e,t,n))}const kn=Symbol(""),Nn=()=>{{const e=K(kn);return e}};const Rn="3.2.47"},9242:function(e,t,n){"use strict";n.d(t,{bM:function(){return ue},iM:function(){return pe},nr:function(){return ce},ri:function(){return ve}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"");for(const e in n)f(i,e,n[e])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const y="http://www.w3.org/1999/xlink";function v(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(y,t.slice(6,t.length)):e.setAttributeNS(y,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function _(e,t,n,r){e.removeEventListener(t,n,r)}function E(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=S(t);if(r){const o=s[t]=A(r,i);b(e,n,o,a)}else o&&(_(e,n,o,a),s[t]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function S(e){let t;if(I.test(e)){let n;t={};while(n=e.match(I))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let T=0;const x=Promise.resolve(),C=()=>T||(x.then((()=>T=0)),T=Date.now());function A(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(D(e,n.value),t,5,[e])};return n.value=e,n.attached=C(),n}function D(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const k=/^on[a-z]/,N=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?l(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||E(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):R(e,t,i,s))?w(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,s))};function R(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&k.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!k.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const O="transition",F="animation",L=(e,{slots:t})=>(0,i.h)(i.P$,B(e),t);L.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},P=L.props=(0,r.l7)({},i.P$.props,M),V=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function B(e){const t={};for(const r in e)r in M||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=j(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:E,onBeforeAppear:I=v,onAppear:S=w,onAppearCancelled:T=b}=t,x=(e,t,n)=>{z(e,t?h:c),z(e,t?l:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,z(e,d),z(e,p),z(e,f),t&&t()},A=e=>(t,n)=>{const r=e?S:w,s=()=>x(t,e,n);V(r,[t,s]),K((()=>{z(t,e?u:o),$(t,e?h:c),U(r)||H(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){V(v,[e]),$(e,o),$(e,a)},onBeforeAppear(e){V(I,[e]),$(e,u),$(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);$(e,d),J(),$(e,f),K((()=>{e._isLeaving&&(z(e,d),$(e,p),U(_)||H(e,i,y,n))})),V(_,[e,n])},onEnterCancelled(e){x(e,!1),V(b,[e])},onAppearCancelled(e){x(e,!0),V(T,[e])},onLeaveCancelled(e){C(e),V(E,[e])}})}function j(e){if(null==e)return null;if((0,r.Kn)(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){const t=(0,r.He)(e);return t}function $(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function K(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let G=0;function H(e,t,n,r){const i=e._endId=++G,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Q(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${O}Delay`),s=r(`${O}Duration`),o=W(i,s),a=r(`${F}Delay`),c=r(`${F}Duration`),u=W(a,c);let l=null,h=0,d=0;t===O?o>0&&(l=O,h=o,d=s.length):t===F?u>0&&(l=F,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?O:F:null,d=l?l===O?s.length:c.length:0);const f=l===O&&/\b(transform|all)(,|$)/.test(r(`${O}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function W(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>X(t)+X(e[n]))))}function X(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}const Y=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},P,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(o[0].el,n.vnode.el,t))return;o.forEach(te),o.forEach(ne);const r=o.filter(re);J(),r.forEach((e=>{const n=e.el,r=n.style;$(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=B(c);let l=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),Y.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Z.set(e,e.el.getBoundingClientRect())}function re(e){const t=Y.get(e),n=Z.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=Q(r);return i.removeChild(r),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function oe(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=se(s);const o=i||s.props&&"number"===s.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),e._assign(i)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",oe),b(e,"compositionend",ae),b(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=se(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ue={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);b(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.h5)(he(e)):he(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=se(i)},mounted(e,{value:t}){le(e,t)},beforeUpdate(e,t,n){e._assign=se(n)},updated(e,{value:t}){le(e,t)}};function le(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=he(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(he(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function he(e){return"_value"in e?e._value:e.value}const de=["ctrl","shift","alt","meta"],fe={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>de.some((n=>e[`${n}Key`]&&!t.includes(n)))},pe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=fe[t[e]];if(r&&r(n,t))return}return e(n,...r)};const me=(0,r.l7)({patchProp:N},u);let ge;function ye(){return ge||(ge=(0,i.Us)(me))}const ve=(...e)=>{const t=ye().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=we(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function we(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return h},DM:function(){return O},E9:function(){return oe},F7:function(){return T},Gg:function(){return G},HD:function(){return P},He:function(){return ie},Kj:function(){return L},Kn:function(){return U},NO:function(){return I},Nj:function(){return ne},Od:function(){return A},PO:function(){return z},Pq:function(){return f},RI:function(){return k},S0:function(){return K},W7:function(){return $},WV:function(){return g},Z6:function(){return _},_A:function(){return W},_N:function(){return R},aU:function(){return ee},dG:function(){return E},e1:function(){return s},fY:function(){return r},h5:function(){return re},hR:function(){return Z},hq:function(){return y},ir:function(){return te},j5:function(){return o},kC:function(){return Y},kJ:function(){return N},kT:function(){return b},l7:function(){return C},mf:function(){return M},rs:function(){return J},tI:function(){return B},tR:function(){return x},yA:function(){return p},yk:function(){return V},zw:function(){return v}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=P(r)?l(r):o(r);if(i)for(const e in i)t[e]=i[e]}return t}return P(e)||U(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(P(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(d);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=F(e),r=F(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=V(e),r=V(t),n||r)return e===t;if(n=N(e),r=N(t),n||r)return!(!n||!r)&&m(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex((e=>g(e,t)))}const v=e=>P(e)?e:null==e?"":N(e)||U(e)&&(e.toString===j||!M(e.toString))?JSON.stringify(e,w,2):String(e),w=(e,t)=>t&&t.__v_isRef?w(e,t.value):R(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:O(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||N(t)||z(t)?t:String(t),b={},_=[],E=()=>{},I=()=>!1,S=/^on[^a-z]/,T=e=>S.test(e),x=e=>e.startsWith("onUpdate:"),C=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},D=Object.prototype.hasOwnProperty,k=(e,t)=>D.call(e,t),N=Array.isArray,R=e=>"[object Map]"===q(e),O=e=>"[object Set]"===q(e),F=e=>"[object Date]"===q(e),L=e=>"[object RegExp]"===q(e),M=e=>"function"===typeof e,P=e=>"string"===typeof e,V=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,B=e=>U(e)&&M(e.then)&&M(e.catch),j=Object.prototype.toString,q=e=>j.call(e),$=e=>q(e).slice(8,-1),z=e=>"[object Object]"===q(e),K=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Q=/-(\w)/g,W=H((e=>e.replace(Q,((e,t)=>t?t.toUpperCase():"")))),X=/\B([A-Z])/g,J=H((e=>e.replace(X,"-$1").toLowerCase())),Y=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=H((e=>e?`on${Y(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ie=e=>{const t=P(e)?Number(e):NaN;return isNaN(t)?e:t};let se;const oe=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(223),i=n(7142),s=n(1804),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.9";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},1804:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ee},getApp:function(){return be},getApps:function(){return _e},initializeApp:function(){return we},onLog:function(){return Se},registerVersion:function(){return Ie},setLogLevel:function(){return Te}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(I(this),t),E(h.get(this))}:function(...t){return E(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const I=e=>m.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}w((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(k(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function k(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",R="0.9.9",O=new i.Yd("@firebase/app"),F="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",P="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",G="@firebase/installations-compat",H="@firebase/messaging",Q="@firebase/messaging-compat",W="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.21.0",se="[DEFAULT]",oe={[N]:"fire-core",[F]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[P]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[G]:"fire-iid-compat",[H]:"fire-fcm",[Q]:"fire-fcm-compat",[W]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new ye(n,i,c);return ae.set(o,u),u}function be(e=se){const t=ae.get(e);if(!t&&e===se)return we();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ee(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ie(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Se(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Te(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="firebase-heartbeat-database",Ce=1,Ae="firebase-heartbeat-store";let De=null;function ke(){return De||(De=S(xe,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),De}async function Ne(e){try{const t=await ke();return t.transaction(Ae).objectStore(Ae).get(Oe(e))}catch(t){if(t instanceof s.ZR)O.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});O.warn(e.message)}}}async function Re(e,t){try{const n=await ke(),r=n.transaction(Ae,"readwrite"),i=r.objectStore(Ae);return await i.put(t,Oe(e)),r.done}catch(n){if(n instanceof s.ZR)O.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:t,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Fe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Be(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Be(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){he(new r.wA("platform-logger",(e=>new D(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Ie(N,R,e),Ie(N,R,"esm2017"),Ie("fire-js","")}je("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},1509:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(2661),i="firebase",s="9.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},476:function(e,t,n){"use strict";n(3767),n(8585),n(8696);var r,i=n(2661),s=(n(7658),n(2801),n(1804)),o=n(7142),a=n(5168),c=n(223),u=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),l={},h=h||{},d=u||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,y)&&e[y]||(e[y]=++v)}var y="closure_uid_"+(1e9*Math.random()>>>0),v=0;function w(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b,_.apply(null,arguments)}function E(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}var T=0;S.prototype.s=!1,S.prototype.ra=function(){this.s||(this.s=!0,this.N(),0==T)||g(this)},S.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function A(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(p(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}var R=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return e<t?-1:e>t?1:0}function F(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function L(e){return-1!=F().indexOf(e)}function M(e){return M[" "](e),e}function P(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}M[" "]=f;var V,U=L("Opera"),B=L("Trident")||L("MSIE"),j=L("Edge"),q=j||B,$=L("Gecko")&&!(-1!=F().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),z=-1!=F().toLowerCase().indexOf("webkit")&&!L("Edge");function K(){var e=d.document;return e?e.documentMode:void 0}e:{var G="",H=function(){var e=F();return $?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(H&&(G=H?H[1]:""),B){var Q=K();if(null!=Q&&Q>parseFloat(G)){V=String(Q);break e}}V=G}var W,X={};function J(){return P(X,9,(function(){let e=0;const t=R(String(V)).split("."),n=R("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=O(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==i[2].length,0==s[2].length)||O(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&B){var Y=K();W=Y||(parseInt(V,10)||void 0)}else W=void 0;var Z=W;function ee(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{M(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:te[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.$.h.call(this)}}I(ee,D);var te={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),re=0;function ie(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++re,this.fa=this.ia=!1}function se(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function oe(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ae(e){const t={};for(const n in e)t[n]=e[n];return t}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ce.length;t++)n=ce[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=x(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ie(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=Te(n),e&&e[ne]?e.O(t,n,m(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Ie(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ye(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)k||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(){function e(n){return t.call(e.src,e.listener,n)}const t=Ee;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=Te(n),e&&e[ne]?e.P(t,n,m(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function we(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)we(e,t[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=Te(n),e&&e[ne]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(se(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ie(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&be(n))}function be(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[ne])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ie(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):se(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ee(e,t){if(e.fa)e=!0;else{t=new ee(t,this);var n=e.listener,r=e.la||e.src;e.ia&&be(e),e=n.call(r,t)}return e}function Ie(e){return e=e[fe],e instanceof le?e:null}var Se="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(e){return"function"===typeof e?e:(e[Se]||(e[Se]=function(t){return e.handleEvent(t)}),e[Se])}function xe(){S.call(this),this.i=new le(this),this.S=this,this.J=null}function Ce(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;t=new D(r,e),ue(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ae(o,r,!0,t)&&i}if(o=t.g=e,i=Ae(o,r,!0,t)&&i,i=Ae(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ae(o,r,!1,t)&&i}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(xe,S),xe.prototype[ne]=!0,xe.prototype.removeEventListener=function(e,t,n,r){we(this,e,t,n,r)},xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)se(n[r]);delete t.g[e],t.h--}}this.J=null},xe.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},xe.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var De=d.JSON.stringify;function ke(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=Oe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,Oe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Fe),(e=>e.reset()));class Fe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(e){d.setTimeout((()=>{throw e}),0)}function Me(e,t){Re||Pe(),Ve||(Re(),Ve=!0),Ue.add(e,t)}function Pe(){var e=d.Promise.resolve(void 0);Re=function(){e.then(Be)}}var Ve=!1,Ue=new Ne;function Be(){for(var e;e=ke();){try{e.h.call(e.g)}catch(n){Le(n)}var t=Oe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ve=!1}function je(e,t){xe.call(this),this.h=e||1,this.g=t||d,this.j=_(this.qb,this),this.l=Date.now()}function qe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function $e(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function ze(e){e.g=$e((()=>{e.g=null,e.i&&(e.i=!1,ze(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(je,xe),r=je.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ce(this,"tick"),this.ga&&(qe(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){je.$.N.call(this),qe(this),delete this.g};class Ke extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(e){S.call(this),this.h=e,this.g={}}I(Ge,S);var He=[];function Qe(e,t,n,r){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function We(e){oe(e.g,(function(e,t){this.g.hasOwnProperty(t)&&be(e)}),e),e.g={}}function Xe(){this.g=!0}function Je(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Ye(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return De(n)}catch(a){return t}}Ge.prototype.N=function(){Ge.$.N.call(this),We(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xe.prototype.Ea=function(){this.g=!1},Xe.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new xe}function st(e){D.call(this,nt.Ta,e)}function ot(e){const t=it();Ce(t,new st(t))}function at(e,t){D.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Ce(t,new at(t,e))}function ut(e,t){D.call(this,nt.Ua,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}nt.Ta="serverreachability",I(st,D),nt.STAT_EVENT="statevent",I(at,D),nt.Ua="timingevent",I(ut,D);var ht={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},dt={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,yt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vt(){D.call(this,"d")}function wt(){D.call(this,"c")}function bt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ge(this),this.P=It,e=q?125:void 0,this.V=new je(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}I(vt,D),I(wt,D),I(bt,ft),bt.prototype.g=function(){return new XMLHttpRequest},bt.prototype.i=function(){return{}},gt=new bt;var It=45e3,St={},Tt={};function xt(e,t,n){e.L=1,e.v=Qt($t(t)),e.s=n,e.S=!0,Ct(e,null)}function Ct(e,t){e.G=Date.now(),Nt(e),e.A=$t(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),cn(n.i,"t",r),e.C=0,n=e.l.I,e.h=new Et,e.g=dr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ke(_(e.Pa,e,e.g),e.O)),Qe(e.U,e.g,"readystatechange",e.nb),t=e.I?ae(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ot(),Je(e.j,e.u,e.A,e.m,e.W,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Dt(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=kt(e,n),r==Tt){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==St){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Mt(e,r)}At(e)&&r!=Tt&&r!=St&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ir(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Ft(e))}function kt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Tt:(n=Number(t.substring(n,r)),isNaN(n)?St:(r+=1,r+n>t.length?Tt:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.Y=Date.now()+e.P,Rt(e,e.P)}function Rt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(_(e.lb,e),t)}function Ot(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ft(e){0==e.l.H||e.J||ar(e.l,e)}function Lt(e){Ot(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,qe(e.V),We(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Mt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||gn(n.h,e)))if(!e.K&&gn(n.h,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;or(n),Wn(n)}rr(n),ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=lt(_(n.ib,n),6e3));if(1>=mn(n.h)&&n.na){try{n.na()}catch(u){}n.na=void 0}}else ur(n,11)}else if((e.K||n.g==e)&&or(n),!N(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const t=u[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(yn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Ht(r.G,r.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=hr(r,r.I?r.oa:null,r.Y),o.K){vn(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ot(a),Nt(a)),r.g=o}else nr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||ur(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ur(n,7):Qn(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}ot(4)}catch(u){}}function Pt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Vt(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(p(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Vt(e),r=Pt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==qn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=qn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||q||this.g&&(this.h.h||this.g.ja()||$n(this.g)))){this.J||4!=l||7==t||ot(8==t||0>=h?3:2),Ot(this);var n=this.g.da();this.aa=n;t:if(At(this)){var r=$n(this.g);e="";var i=r.length,s=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Lt(this),Ft(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ye(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ct(12),Lt(this),Ft(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mt(this,n)}this.S?(Dt(this,l,o),q&&this.i&&3==l&&(Qe(this.U,this.V,"tick",this.mb),this.V.start())):(Ze(this.j,this.m,o,null),Mt(this,o)),4==l&&Lt(this),this.i&&!this.J&&(4==l?ar(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Lt(this),Ft(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=qn(this.g),t=this.g.ja();this.C<t.length&&(Ot(this),Dt(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.J=!0,Lt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.L&&(ot(),ct(17)),Lt(this),this.o=2,Ft(this)):Rt(this,this.Y-e)};var Bt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=void 0!==t?t:e.h,zt(this,e.j),this.s=e.s,this.g=e.g,Kt(this,e.m),this.l=e.l,t=e.i;var n=new rn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gt(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.h=!!t,zt(this,n[1]||"",!0),this.s=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),Kt(this,n[4]),this.l=Wt(n[5]||"",!0),Gt(this,n[6]||"",!0),this.o=Wt(n[7]||"")):(this.h=!!t,this.i=new rn(null,this.h))}function $t(e){return new qt(e)}function zt(e,t,n){e.j=n?Wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Kt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gt(e,t,n){t instanceof rn?(e.i=t,ln(e.i,e.h)):(n||(t=Xt(t,tn)),e.i=new rn(t,e.h))}function Ht(e,t,n){e.i.set(t,n)}function Qt(e){return Ht(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Xt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Xt(t,Yt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Xt(t,Yt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Xt(n,"/"==n.charAt(0)?en:Zt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Xt(n,nn)),e.join("")};var Yt=/[#\/\?@]/g,Zt=/[#\?:]/g,en=/[#\?]/g,tn=/[#\?@]/g,nn=/#/g;function rn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function sn(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function on(e,t){sn(e),t=un(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function an(e,t){return sn(e),t=un(e,t),e.g.has(t)}function cn(e,t,n){on(e,t),0<n.length&&(e.i=null,e.g.set(un(e,t),C(n)),e.h+=n.length)}function un(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ln(e,t){t&&!e.j&&(sn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(on(this,t),cn(this,n,e))}),e)),e.j=t}r=rn.prototype,r.add=function(e,t){sn(this),this.i=null,e=un(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){sn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.sa=function(){sn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){sn(this);let t=[];if("string"===typeof e)an(this,e)&&(t=t.concat(this.g.get(un(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return sn(this),this.i=null,e=un(this,e),an(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var hn=class{constructor(e,t){this.h=e,this.g=t}};function dn(e){this.l=e||fn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function mn(e){return e.h?1:e.g?e.g.size:0}function gn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function yn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function wn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return C(e.i)}function bn(){}function _n(){this.g=new bn}function En(e,t,n){const r=n||"";try{Ut(e,(function(e,n){let i=e;m(e)&&(i=De(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function In(e,t){const n=new Xe;if(d.Image){const r=new Image;r.onload=E(Sn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=E(Sn,n,r,"TestLoadImage: error",!1,t),r.onabort=E(Sn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=E(Sn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Sn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Tn(e){this.l=e.fc||null,this.j=e.ob||!1}function xn(e,t){xe.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},bn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},bn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},I(Tn,ft),Tn.prototype.g=function(){return new xn(this.l,this.j)},Tn.prototype.i=function(e){return function(){return e}}({}),I(xn,xe);var Cn=0;function An(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,kn(e)}function kn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=xn.prototype,r.open=function(e,t){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,kn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Cn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;An(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dn(this):kn(this),3==this.readyState&&An(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Dn(this))},r.Ya=function(e){this.g&&(this.response=e,Dn(this))},r.ka=function(){this.g&&Dn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Nn=d.JSON.parse;function Rn(e){xe.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=On,this.L=this.M=!1}I(Rn,xe);var On="",Fn=/^https?$/i,Ln=["POST","PUT"];function Mn(e){return B&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Pn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vn(e),Bn(e)}function Vn(e){e.F||(e.F=!0,Ce(e,"complete"),Ce(e,"error"))}function Un(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=qn(e)||2!=e.da()))if(e.v&&4==qn(e))$e(e.La,0,e);else if(Ce(e,"readystatechange"),4==qn(e)){e.h=!1;try{const c=e.da();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.I).match(Bt)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!Fn.test(i?i.toLowerCase():"")}n=r}if(n)Ce(e,"complete"),Ce(e,"success");else{e.m=6;try{var o=2<qn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.da()+"]",Vn(e)}}finally{Bn(e)}}}function Bn(e,t){if(e.g){jn(e);const r=e.g,i=e.C[0]?f:null;e.g=null,e.C=null,t||Ce(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function qn(e){return e.g?e.g.readyState:0}function $n(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Jr){return null}}function zn(e){let t="";return oe(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Kn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=zn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Ht(e,t,n))}function Gn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hn(e){this.Ga=0,this.i=[],this.j=new Xe,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Gn("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Gn("baseRetryDelayMs",5e3,e),this.hb=Gn("retryDelaySeedMs",1e4,e),this.eb=Gn("forwardChannelMaxRetries",2,e),this.xa=Gn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new dn(e&&e.concurrentRequestLimit),this.Ja=new _n,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Qn(e){if(Xn(e),3==e.H){var t=e.W++,n=$t(e.G);Ht(n,"SID",e.J),Ht(n,"RID",t),Ht(n,"TYPE","terminate"),er(e,n),t=new _t(e,e.j,t,void 0),t.L=2,t.v=Qt($t(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=dr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Nt(t)}lr(e)}function Wn(e){e.g&&(ir(e),e.g.cancel(),e.g=null)}function Xn(e){Wn(e),e.u&&(d.clearTimeout(e.u),e.u=null),or(e),e.h.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Jn(e){pn(e.h)||e.m||(e.m=!0,Me(e.Na,e),e.C=0)}function Yn(e,t){return!(mn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.F.concat(e.i),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=lt(_(e.Na,e,t),cr(e,e.C)),e.C++,!0))}function Zn(e,t){var n;n=t?t.m:e.W++;const r=$t(e.G);Ht(r,"SID",e.J),Ht(r,"RID",n),Ht(r,"AID",e.V),er(e,r),e.o&&e.s&&Kn(r,e.o,e.s),n=new _t(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=tr(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),yn(e.h,n),xt(n,r,t)}function er(e,t){e.ma&&oe(e.ma,(function(e,n){Ht(t,n,e)})),e.l&&Ut({},(function(e,n){Ht(t,n,e)}))}function tr(e,t,n){n=Math.min(e.i.length,n);var r=e.l?_(e.l.Va,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{En(a,e,"req"+n+"_")}catch(li){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function nr(e){e.g||e.u||(e.ba=1,Me(e.Ma,e),e.A=0)}function rr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=lt(_(e.Ma,e),cr(e,e.A)),e.A++,!0)}function ir(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function sr(e){e.g=new _t(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);Ht(t,"RID","rpc"),Ht(t,"SID",e.J),Ht(t,"CI",e.M?"0":"1"),Ht(t,"AID",e.V),Ht(t,"TYPE","xmlhttp"),er(e,t),e.o&&e.s&&Kn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Qt($t(t)),n.s=null,n.S=!0,Ct(n,e)}function or(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function ar(e,t){var n=null;if(e.g==t){or(e),ir(e),e.g=null;var r=2}else{if(!gn(e.h,t))return;n=t.F,vn(e.h,t),r=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=it(),Ce(r,new ut(r,n)),Jn(e)}else nr(e);else if(i=t.o,3==i||0==i&&0<e.ta||!(1==r&&Yn(e,t)||2==r&&rr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ur(e,5);break;case 4:ur(e,10);break;case 3:ur(e,6);break;default:ur(e,2)}}function cr(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function ur(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=_(e.pb,e);n||(n=new qt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||zt(n,"https"),Qt(n)),In(n.toString(),r)}else ct(2);e.H=0,e.l&&e.l.za(t),lr(e),Xn(e)}function lr(e){if(e.H=0,e.pa=[],e.l){const t=wn(e.h);0==t.length&&0==e.i.length||(A(e.pa,t),A(e.pa,e.i),e.h.i.length=0,C(e.i),e.i.length=0),e.l.ya()}}function hr(e,t,n){var r=n instanceof qt?$t(n):new qt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Kt(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new qt(null,void 0);r&&zt(s,r),t&&(s.g=t),i&&Kt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Ht(r,n,t),Ht(r,"VER",e.qa),er(e,r),r}function dr(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Rn(new Tn({ob:!0})):new Rn(e.va),t.Oa(e.I),t}function fr(){}function pr(){if(B&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function mr(e,t){xe.call(this),this.g=new Hn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}function gr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function yr(){wt.call(this),this.status=1}function vr(e){this.g=e}function wr(){this.blockSize=-1}function br(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function _r(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Er(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=Rn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Pn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=d.FormData&&e instanceof d.FormData,!(0<=x(Ln,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jn(this),0<this.B&&((this.L=Mn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=$e(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Pn(this,s)}},r.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ce(this,"complete"),Ce(this,"abort"),Bn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),Rn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Un(this):this.kb())},r.kb=function(){Un(this)},r.da=function(){try{return 2<qn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Nn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.qa=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new _t(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=ae(s),ue(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tr(this,i,t),n=$t(this.G),Ht(n,"RID",e),Ht(n,"CVER",22),this.F&&Ht(n,"X-HTTP-Session-Id",this.F),er(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(zn(s)))+"&"+t:this.o&&Kn(n,this.o,s)),yn(this.h,i),this.bb&&Ht(n,"TYPE","init"),this.P?(Ht(n,"$req",t),Ht(n,"SID","null"),i.ba=!0,xt(i,n,null)):xt(i,n,t),this.H=2}}else 3==this.H&&(e?Zn(this,e):0==this.i.length||pn(this.h)||Zn(this))},r.Ma=function(){if(this.u=null,sr(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=lt(_(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ct(10),Wn(this),sr(this))},r.ib=function(){null!=this.v&&(this.v=null,Wn(this),rr(this),ct(19))},r.pb=function(e){e?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))},r=fr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},pr.prototype.g=function(e,t){return new mr(e,t)},I(mr,xe),mr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;ct(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=hr(e,null,e.Y),Jn(e)},mr.prototype.close=function(){Qn(this.g)},mr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=De(e),e=n);t.i.push(new hn(t.fb++,e)),3==t.H&&Jn(t)},mr.prototype.N=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,mr.$.N.call(this)},I(gr,vt),I(yr,wt),I(vr,fr),vr.prototype.Ba=function(){Ce(this.g,"a")},vr.prototype.Aa=function(e){Ce(this.g,new gr(e))},vr.prototype.za=function(e){Ce(this.g,new yr)},vr.prototype.ya=function(){Ce(this.g,"b")},I(br,wr),br.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},br.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)_r(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){_r(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){_r(this,r),i=0;break}}this.h=i,this.i+=t},br.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Ir={};function Sr(e){return-128<=e&&128>e?P(Ir,e,(function(e){return new Er([0|e],0>e?-1:0)})):new Er([0|e],0>e?-1:0)}function Tr(e){if(isNaN(e)||!isFinite(e))return Ar;if(0>e)return Or(Tr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Cr;return new Er(t,0)}function xr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Or(xr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tr(Math.pow(t,8)),r=Ar,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Tr(Math.pow(t,s)),r=r.R(s).add(Tr(o))):(r=r.R(n),r=r.add(Tr(o)))}return r}var Cr=4294967296,Ar=Sr(0),Dr=Sr(1),kr=Sr(16777216);function Nr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Rr(e){return-1==e.h}function Or(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Er(n,~e.h).add(Dr)}function Fr(e,t){return e.add(Or(t))}function Lr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Mr(e,t){this.g=e,this.h=t}function Pr(e,t){if(Nr(t))throw Error("division by zero");if(Nr(e))return new Mr(Ar,Ar);if(Rr(e))return t=Pr(Or(e),t),new Mr(Or(t.g),Or(t.h));if(Rr(t))return t=Pr(e,Or(t)),new Mr(Or(t.g),t.h);if(30<e.g.length){if(Rr(e)||Rr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Dr,r=t;0>=r.X(e);)n=Vr(n),r=Vr(r);var i=Ur(n,1),s=Ur(r,1);for(r=Ur(r,2),n=Ur(n,2);!Nr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ur(r,1),n=Ur(n,1)}return t=Fr(e,i.R(t)),new Mr(i,t)}for(i=Ar;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Tr(n),o=s.R(t);Rr(o)||0<o.X(e);)n-=r,s=Tr(n),o=s.R(t);Nr(s)&&(s=Dr),i=i.add(s),e=Fr(e,o)}return new Mr(i,e)}function Vr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Er(n,e.h)}function Ur(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Er(i,e.h)}r=Er.prototype,r.ea=function(){if(Rr(this))return-Or(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Cr+r)*t,t*=Cr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Nr(this))return"0";if(Rr(this))return"-"+Or(this).toString(e);for(var t=Tr(Math.pow(e,6)),n=this,r="";;){var i=Pr(n,t).g;n=Fr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Nr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Fr(this,e),Rr(e)?-1:Nr(e)?0:1},r.abs=function(){return Rr(this)?Or(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Er(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Nr(this)||Nr(e))return Ar;if(Rr(this))return Rr(e)?Or(this).R(Or(e)):Or(Or(this).R(e));if(Rr(e))return Or(this.R(Or(e)));if(0>this.X(kr)&&0>e.X(kr))return Tr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Lr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Lr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Lr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Lr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Er(n,0)},r.gb=function(e){return Pr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Er(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Er(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Er(n,this.h^e.h)},pr.prototype.createWebChannel=pr.prototype.g,mr.prototype.send=mr.prototype.u,mr.prototype.open=mr.prototype.m,mr.prototype.close=mr.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=yt,yt.OPEN="a",yt.CLOSE="b",yt.ERROR="c",yt.MESSAGE="d",xe.prototype.listen=xe.prototype.O,Rn.prototype.listenOnce=Rn.prototype.P,Rn.prototype.getLastError=Rn.prototype.Sa,Rn.prototype.getLastErrorCode=Rn.prototype.Ia,Rn.prototype.getStatus=Rn.prototype.da,Rn.prototype.getResponseJson=Rn.prototype.Wa,Rn.prototype.getResponseText=Rn.prototype.ja,Rn.prototype.send=Rn.prototype.ha,Rn.prototype.setWithCredentials=Rn.prototype.Oa,br.prototype.digest=br.prototype.l,br.prototype.reset=br.prototype.reset,br.prototype.update=br.prototype.j,Er.prototype.add=Er.prototype.add,Er.prototype.multiply=Er.prototype.R,Er.prototype.modulo=Er.prototype.gb,Er.prototype.compare=Er.prototype.X,Er.prototype.toNumber=Er.prototype.ea,Er.prototype.toString=Er.prototype.toString,Er.prototype.getBits=Er.prototype.D,Er.fromNumber=Tr,Er.fromString=xr;var Br=l.createWebChannelTransport=function(){return new pr},jr=l.getStatEventTarget=function(){return it()},qr=l.ErrorCode=ht,$r=l.EventType=dt,zr=l.Event=nt,Kr=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Gr=l.FetchXmlHttpFactory=Tn,Hr=l.WebChannel=mt,Qr=l.XhrIo=Rn,Wr=l.Md5=br,Xr=l.Integer=Er;const Jr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yr.UNAUTHENTICATED=new Yr(null),Yr.GOOGLE_CREDENTIALS=new Yr("google-credentials-uid"),Yr.FIRST_PARTY=new Yr("first-party-uid"),Yr.MOCK_USER=new Yr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zr="9.21.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new a.Yd("@firebase/firestore");function ti(){return ei.logLevel}function ni(e){ei.setLogLevel(e)}function ri(e,...t){if(ei.logLevel<=a["in"].DEBUG){const n=t.map(oi);ei.debug(`Firestore (${Zr}): ${e}`,...n)}}function ii(e,...t){if(ei.logLevel<=a["in"].ERROR){const n=t.map(oi);ei.error(`Firestore (${Zr}): ${e}`,...n)}}function si(e,...t){if(ei.logLevel<=a["in"].WARN){const n=t.map(oi);ei.warn(`Firestore (${Zr}): ${e}`,...n)}}function oi(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e="Unexpected state"){const t=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+e;throw ii(t),new Error(t)}function ci(e,t){e||ai()}function ui(e,t){e||ai()}function li(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class di extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Yr.UNAUTHENTICATED)))}shutdown(){}}class gi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class yi{constructor(e){this.t=e,this.currentUser=Yr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new fi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fi,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ri("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ri("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fi)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ri("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ci("string"==typeof t.accessToken),new pi(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ci(null===e||"string"==typeof e),new Yr(e)}}class vi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Yr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class wi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new vi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Yr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _i{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ri("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ri("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ri("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):ri("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ci("string"==typeof e.token),this.T=e.token,new bi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ei(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Ei(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Si(e,t){return e<t?-1:e>t?1:0}function Ti(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function xi(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new di(hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new di(hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new di(hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new di(hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ci.fromMillis(Date.now())}static fromDate(e){return Ci.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ci(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Si(this.nanoseconds,e.nanoseconds):Si(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ai(e)}static min(){return new Ai(new Ci(0,0))}static max(){return new Ai(new Ci(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,n){void 0===t?t=0:t>e.length&&ai(),void 0===n?n=e.length-t:n>e.length-t&&ai(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Di.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ki extends Di{construct(e,t,n){return new ki(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new di(hi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ki(t)}static emptyPath(){return new ki([])}}const Ni=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ri extends Di{construct(e,t,n){return new Ri(e,t,n)}static isValidIdentifier(e){return Ni.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ri.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ri(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new di(hi.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new di(hi.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new di(hi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new di(hi.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ri(t)}static emptyPath(){return new Ri([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.path=e}static fromPath(e){return new Oi(ki.fromString(e))}static fromName(e){return new Oi(ki.fromString(e).popFirst(5))}static empty(){return new Oi(ki.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ki.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ki.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oi(new ki(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Li(e){return e.fields.find((e=>2===e.kind))}function Mi(e){return e.fields.filter((e=>2!==e.kind))}Fi.UNKNOWN_ID=-1;class Pi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Vi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Vi(0,ji.min())}}function Ui(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ai.fromTimestamp(1e9===r?new Ci(n+1,0):new Ci(n,r));return new ji(i,Oi.empty(),t)}function Bi(e){return new ji(e.readTime,e.key,-1)}class ji{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ji(Ai.min(),Oi.empty(),-1)}static max(){return new ji(Ai.max(),Oi.empty(),-1)}}function qi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Oi.comparator(e.documentKey,t.documentKey),0!==n?n:Si(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(e){if(e.code!==hi.FAILED_PRECONDITION||e.message!==$i)throw e;ri("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ai(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Gi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Gi?t:Gi.resolve(t)}catch(e){return Gi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Gi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Gi.reject(t)}static resolve(e){return new Gi(((t,n)=>{t(e)}))}static reject(e){return new Gi(((t,n)=>{n(e)}))}static waitFor(e){return new Gi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Gi.resolve(!1);for(const n of e)t=t.next((e=>e?Gi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Gi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Gi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new fi,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Xi(e,t.error)):this.R.resolve()},this.transaction.onerror=t=>{const n=ts(t.target.error);this.R.reject(new Xi(e,n))}}static open(e,t,n,r){try{return new Hi(t,e.transaction(r,n))}catch(e){throw new Xi(t,e)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(ri("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Yi(t)}}class Qi{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Qi.S((0,c.z$)())&&ii("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ri("SimpleDb","Removing database:",e),Zi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,c.hl)())return!1;if(Qi.C())return!0;const e=(0,c.z$)(),t=Qi.S(e),n=0<t&&t<10,r=Qi.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(ri("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Xi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new di(hi.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new di(hi.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Xi(e,r))},r.onupgradeneeded=e=>{ri("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.$(t,r.transaction,e.oldVersion,this.version).next((()=>{ri("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.O(e);const t=Hi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),Gi.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ri("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Wi{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Zi(this.L.delete())}}class Xi extends di{constructor(e,t){super(hi.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ji(e){return"IndexedDbTransactionError"===e.name}class Yi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ri("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ri("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Zi(n)}add(e){return ri("SimpleDb","ADD",this.store.name,e,e),Zi(this.store.add(e))}get(e){return Zi(this.store.get(e)).next((t=>(void 0===t&&(t=null),ri("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ri("SimpleDb","DELETE",this.store.name,e),Zi(this.store.delete(e))}count(){return ri("SimpleDb","COUNT",this.store.name),Zi(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Gi(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Gi(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){ri("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new Gi(((n,r)=>{t.onerror=e=>{const t=ts(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new Gi(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Wi(i),o=t(i.primaryKey,i.value,s);if(o instanceof Gi){const e=o.catch((e=>(s.done(),Gi.reject(e))));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}})).next((()=>Gi.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zi(e){return new Gi(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ts(e.target.error);n(t)}}))}let es=!1;function ts(e){const t=Qi.S((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new di("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return es||(es=!0,setTimeout((()=>{throw e}),0)),e}}return e}class ns{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){ri("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ri("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){Ji(e)?ri("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Ki(e)}await this.et(6e4)}))}}class rs{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let r=t,i=!0;return Gi.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return ri("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.rt(r,n))).next((n=>(ri("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Bi(t);qi(r,n)>0&&(n=r)})),new ji(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ss(e){return null==e}function os(e){return 0===e&&1/e==-1/0}function as(e){return"number"==typeof e&&Number.isInteger(e)&&!os(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ls(t)),t=us(e.get(n),t);return ls(t)}function us(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ls(e){return e+""}function hs(e){const t=e.length;if(ci(t>=2),2===t)return ci(""===e.charAt(0)&&""===e.charAt(1)),ki.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&ai(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:ai()}s=t+2}return new ki(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */is.ct=-1;const ds=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e,t){return[e,cs(t)]}function ps(e,t,n){return[e,cs(t),n]}const ms={},gs=["prefixPath","collectionGroup","readTime","documentId"],ys=["prefixPath","collectionGroup","documentId"],vs=["collectionGroup","readTime","prefixPath","documentId"],ws=["canonicalId","targetId"],bs=["targetId","path"],_s=["path","targetId"],Es=["collectionId","parent"],Is=["indexId","uid"],Ss=["uid","sequenceNumber"],Ts=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xs=["indexId","uid","orderedDocumentKey"],Cs=["userId","collectionPath","documentId"],As=["userId","collectionPath","largestBatchId"],Ds=["userId","collectionGroup","largestBatchId"],ks=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ns=[...ks,"documentOverlays"],Rs=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Os=Rs,Fs=[...Os,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends zi{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function Ms(e,t){const n=li(e);return Qi.M(n.at,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Vs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Us(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t){this.comparator=e,this.root=t||qs.EMPTY}insert(e,t){return new Bs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qs.BLACK,null,null))}remove(e){return new Bs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new js(this.root,e,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new js(this.root,e,this.comparator,!0)}}class js{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:qs.RED,this.left=null!=r?r:qs.EMPTY,this.right=null!=i?i:qs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new qs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return qs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ai();if(this.right.isRed())throw ai();const e=this.left.check();if(e!==this.right.check())throw ai();return e+(this.isRed()?0:1)}}qs.EMPTY=null,qs.RED=!0,qs.BLACK=!1,qs.EMPTY=new class{constructor(){this.size=0}get key(){throw ai()}get value(){throw ai()}get color(){throw ai()}get left(){throw ai()}get right(){throw ai()}copy(e,t,n,r,i){return this}insert(e,t,n){return new qs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(e){this.comparator=e,this.data=new Bs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zs(this.data.getIterator())}getIteratorFrom(e){return new zs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $s))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $s(this.comparator);return t.data=e,t}}class zs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ks(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.fields=e,e.sort(Ri.comparator)}static empty(){return new Gs([])}unionWith(e){let t=new $s(Ri.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Gs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Hs("Invalid base64 string: "+e):e}}(e);return new Ws(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ws(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Si(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ws.EMPTY_BYTE_STRING=new Ws("");const Xs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Js(e){if(ci(!!e),"string"==typeof e){let t=0;const n=Xs.exec(e);if(ci(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ys(e.seconds),nanos:Ys(e.nanos)}}function Ys(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Zs(e){return"string"==typeof e?Ws.fromBase64String(e):Ws.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function to(e){const t=e.mapValue.fields.__previous_value__;return eo(t)?to(t):t}function no(e){const t=Js(e.mapValue.fields.__local_write_time__.timestampValue);return new Ci(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class io{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},oo={nullValue:"NULL_VALUE"};function ao(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eo(e)?4:Eo(e)?9007199254740991:10:ai()}function co(e,t){if(e===t)return!0;const n=ao(e);if(n!==ao(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return no(e).isEqual(no(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Js(e.timestampValue),r=Js(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Zs(e.bytesValue).isEqual(Zs(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ys(e.geoPointValue.latitude)===Ys(t.geoPointValue.latitude)&&Ys(e.geoPointValue.longitude)===Ys(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ys(e.integerValue)===Ys(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ys(e.doubleValue),r=Ys(t.doubleValue);return n===r?os(n)===os(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ti(e.arrayValue.values||[],t.arrayValue.values||[],co);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ps(n)!==Ps(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!co(n[i],r[i])))return!1;return!0}(e,t);default:return ai()}}function uo(e,t){return void 0!==(e.values||[]).find((e=>co(e,t)))}function lo(e,t){if(e===t)return 0;const n=ao(e),r=ao(t);if(n!==r)return Si(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Si(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ys(e.integerValue||e.doubleValue),r=Ys(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ho(e.timestampValue,t.timestampValue);case 4:return ho(no(e),no(t));case 5:return Si(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Zs(e),r=Zs(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Si(n[i],r[i]);if(0!==e)return e}return Si(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Si(Ys(e.latitude),Ys(t.latitude));return 0!==n?n:Si(Ys(e.longitude),Ys(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=lo(n[i],r[i]);if(e)return e}return Si(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===so.mapValue&&t===so.mapValue)return 0;if(e===so.mapValue)return 1;if(t===so.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Si(r[o],s[o]);if(0!==e)return e;const t=lo(n[r[o]],i[s[o]]);if(0!==t)return t}return Si(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ai()}}function ho(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Si(e,t);const n=Js(e),r=Js(t),i=Si(n.seconds,r.seconds);return 0!==i?i:Si(n.nanos,r.nanos)}function fo(e){return po(e)}function po(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Js(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Zs(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Oi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=po(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${po(e.fields[i])}`;return n+"}"}(e.mapValue):ai();var t,n}function mo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function go(e){return!!e&&"integerValue"in e}function yo(e){return!!e&&"arrayValue"in e}function vo(e){return!!e&&"nullValue"in e}function wo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function bo(e){return!!e&&"mapValue"in e}function _o(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Vs(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_o(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_o(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Eo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Io(e){return"nullValue"in e?oo:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?mo(io.empty(),Oi.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:ai()}function So(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?mo(io.empty(),Oi.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?so:ai()}function To(e,t){const n=lo(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function xo(e,t){const n=lo(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.value=e}static empty(){return new Co({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!bo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(t)}setAll(e){let t=Ri.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_o(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());bo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return co(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];bo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Vs(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Co(_o(this.value))}}function Ao(e){const t=[];return Vs(e.fields,((e,n)=>{const r=new Ri([e]);if(bo(n)){const e=Ao(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Gs(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Do{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Do(e,0,Ai.min(),Ai.min(),Ai.min(),Co.empty(),0)}static newFoundDocument(e,t,n,r){return new Do(e,1,t,Ai.min(),n,r,0)}static newNoDocument(e,t){return new Do(e,2,t,Ai.min(),Ai.min(),Co.empty(),0)}static newUnknownDocument(e,t){return new Do(e,3,t,Ai.min(),Ai.min(),Co.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ai.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Co.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Co.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ai.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Do&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Do(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.position=e,this.inclusive=t}}function No(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Oi.comparator(Oi.fromName(o.referenceValue),n.key):lo(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ro(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!co(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fo(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{}class Mo extends Lo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Go(e,t,n):"array-contains"===t?new Xo(e,n):"in"===t?new Jo(e,n):"not-in"===t?new Yo(e,n):"array-contains-any"===t?new Zo(e,n):new Mo(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ho(e,n):new Qo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(lo(t,this.value)):null!==t&&ao(this.value)===ao(t)&&this.matchesComparison(lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ai()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Po extends Lo{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Po(e,t)}matches(e){return Vo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Vo(e){return"and"===e.op}function Uo(e){return"or"===e.op}function Bo(e){return jo(e)&&Vo(e)}function jo(e){for(const t of e.filters)if(t instanceof Po)return!1;return!0}function qo(e){if(e instanceof Mo)return e.field.canonicalString()+e.op.toString()+fo(e.value);if(Bo(e))return e.filters.map((e=>qo(e))).join(",");{const t=e.filters.map((e=>qo(e))).join(",");return`${e.op}(${t})`}}function $o(e,t){return e instanceof Mo?function(e,t){return t instanceof Mo&&e.op===t.op&&e.field.isEqual(t.field)&&co(e.value,t.value)}(e,t):e instanceof Po?function(e,t){return t instanceof Po&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&$o(n,t.filters[r])),!0)}(e,t):void ai()}function zo(e,t){const n=e.filters.concat(t);return Po.create(n,e.op)}function Ko(e){return e instanceof Mo?function(e){return`${e.field.canonicalString()} ${e.op} ${fo(e.value)}`}(e):e instanceof Po?function(e){return e.op.toString()+" {"+e.getFilters().map(Ko).join(" ,")+"}"}(e):"Filter"}class Go extends Mo{constructor(e,t,n){super(e,t,n),this.key=Oi.fromName(n.referenceValue)}matches(e){const t=Oi.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ho extends Mo{constructor(e,t){super(e,"in",t),this.keys=Wo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Qo extends Mo{constructor(e,t){super(e,"not-in",t),this.keys=Wo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Oi.fromName(e.referenceValue)))}class Xo extends Mo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yo(t)&&uo(t.arrayValue,this.value)}}class Jo extends Mo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&uo(this.value.arrayValue,t)}}class Yo extends Mo{constructor(e,t){super(e,"not-in",t)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!uo(this.value.arrayValue,t)}}class Zo extends Mo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>uo(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function ta(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ea(e,t,n,r,i,s,o)}function na(e){const t=li(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>qo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ss(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>fo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>fo(e))).join(",")),t.ft=e}return t.ft}function ra(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Fo(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$o(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ro(e.startAt,t.startAt)&&Ro(e.endAt,t.endAt)}function ia(e){return Oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function sa(e,t){return e.filters.filter((e=>e instanceof Mo&&e.field.isEqual(t)))}function oa(e,t,n){let r=oo,i=!0;for(const s of sa(e,t)){let e=oo,t=!0;switch(s.op){case"<":case"<=":e=Io(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=oo}To({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];To({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function aa(e,t,n){let r=so,i=!0;for(const s of sa(e,t)){let e=so,t=!0;switch(s.op){case">=":case">":e=So(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=so}xo({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];xo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ua(e,t,n,r,i,s,o,a){return new ca(e,t,n,r,i,s,o,a)}function la(e){return new ca(e)}function ha(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function da(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function fa(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function pa(e){return null!==e.collectionGroup}function ma(e){const t=li(e);if(null===t.dt){t.dt=[];const e=fa(t),n=da(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Oo(e)),t.dt.push(new Oo(Ri.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Oo(Ri.keyField(),e))}}}return t.dt}function ga(e){const t=li(e);if(!t._t)if("F"===t.limitType)t._t=ta(t.path,t.collectionGroup,ma(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of ma(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Oo(i.field,t))}const n=t.endAt?new ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ko(t.startAt.position,t.startAt.inclusive):null;t._t=ta(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ya(e,t){t.getFirstInequalityField(),fa(e);const n=e.filters.concat([t]);return new ca(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function va(e,t,n){return new ca(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function wa(e,t){return ra(ga(e),ga(t))&&e.limitType===t.limitType}function ba(e){return`${na(ga(e))}|lt:${e.limitType}`}function _a(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Ko(e))).join(", ")}]`),ss(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>fo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>fo(e))).join(",")),`Target(${t})`}(ga(e))}; limitType=${e.limitType})`}function Ea(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ma(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=No(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ma(e),t))&&!(e.endAt&&!function(e,t,n){const r=No(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ma(e),t))}(e,t)}function Ia(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Sa(e){return(t,n)=>{let r=!1;for(const i of ma(e)){const e=Ta(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ta(e,t,n){const r=e.field.isKeyField()?Oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?lo(r,i):ai()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ai()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Us(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Bs(Oi.comparator);function Aa(){return Ca}const Da=new Bs(Oi.comparator);function ka(...e){let t=Da;for(const n of e)t=t.insert(n.key,n);return t}function Na(e){let t=Da;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ra(){return Fa()}function Oa(){return Fa()}function Fa(){return new xa((e=>e.toString()),((e,t)=>e.isEqual(t)))}const La=new Bs(Oi.comparator),Ma=new $s(Oi.comparator);function Pa(...e){let t=Ma;for(const n of e)t=t.add(n);return t}const Va=new $s(Si);function Ua(){return Va}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:os(t)?"-0":t}}function ja(e){return{integerValue:""+e}}function qa(e,t){return as(t)?ja(t):Ba(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this._=void 0}}function za(e,t,n){return e instanceof Ha?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eo(t)&&(t=to(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Qa?Wa(e,t):e instanceof Xa?Ja(e,t):function(e,t){const n=Ga(e,t),r=Za(n)+Za(e.wt);return go(n)&&go(e.wt)?ja(r):Ba(e.serializer,r)}(e,t)}function Ka(e,t,n){return e instanceof Qa?Wa(e,t):e instanceof Xa?Ja(e,t):n}function Ga(e,t){return e instanceof Ya?go(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ha extends $a{}class Qa extends $a{constructor(e){super(),this.elements=e}}function Wa(e,t){const n=ec(t);for(const r of e.elements)n.some((e=>co(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Xa extends $a{constructor(e){super(),this.elements=e}}function Ja(e,t){let n=ec(t);for(const r of e.elements)n=n.filter((e=>!co(e,r)));return{arrayValue:{values:n}}}class Ya extends $a{constructor(e,t){super(),this.serializer=e,this.wt=t}}function Za(e){return Ys(e.integerValue||e.doubleValue)}function ec(e){return yo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.field=e,this.transform=t}}function nc(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Qa&&t instanceof Qa||e instanceof Xa&&t instanceof Xa?Ti(e.elements,t.elements,co):e instanceof Ya&&t instanceof Ya?co(e.wt,t.wt):e instanceof Ha&&t instanceof Ha}(e.transform,t.transform)}class rc{constructor(e,t){this.version=e,this.transformResults=t}}class ic{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ic}static exists(e){return new ic(void 0,e)}static updateTime(e){return new ic(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class oc{}function ac(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new yc(e.key,ic.none()):new dc(e.key,e.data,ic.none());{const n=e.data,r=Co.empty();let i=new $s(Ri.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new fc(e.key,r,new Gs(i.toArray()),ic.none())}}function cc(e,t,n){e instanceof dc?function(e,t,n){const r=e.value.clone(),i=mc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof fc?function(e,t,n){if(!sc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=mc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(pc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function uc(e,t,n,r){return e instanceof dc?function(e,t,n,r){if(!sc(e.precondition,t))return n;const i=e.value.clone(),s=gc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof fc?function(e,t,n,r){if(!sc(e.precondition,t))return n;const i=gc(e.fieldTransforms,r,t),s=t.data;return s.setAll(pc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return sc(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function lc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ga(r.transform,e||null);null!=i&&(null===n&&(n=Co.empty()),n.set(r.field,i))}return n||null}function hc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ti(e,t,((e,t)=>nc(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class dc extends oc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class fc extends oc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function mc(e,t,n){const r=new Map;ci(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ka(o,a,n[i]))}return r}function gc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,za(e,s,t))}return r}class yc extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vc extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&cc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=uc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=uc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Oa();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=ac(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ai.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pa())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,((e,t)=>hc(e,t)))&&Ti(this.baseMutations,e.baseMutations,((e,t)=>hc(e,t)))}}class bc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ci(e.mutations.length===n.length);let r=La;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new bc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ic,Sc;function Tc(e){switch(e){default:return ai();case hi.CANCELLED:case hi.UNKNOWN:case hi.DEADLINE_EXCEEDED:case hi.RESOURCE_EXHAUSTED:case hi.INTERNAL:case hi.UNAVAILABLE:case hi.UNAUTHENTICATED:return!1;case hi.INVALID_ARGUMENT:case hi.NOT_FOUND:case hi.ALREADY_EXISTS:case hi.PERMISSION_DENIED:case hi.FAILED_PRECONDITION:case hi.ABORTED:case hi.OUT_OF_RANGE:case hi.UNIMPLEMENTED:case hi.DATA_LOSS:return!0}}function xc(e){if(void 0===e)return ii("GRPC error has no .code"),hi.UNKNOWN;switch(e){case Ic.OK:return hi.OK;case Ic.CANCELLED:return hi.CANCELLED;case Ic.UNKNOWN:return hi.UNKNOWN;case Ic.DEADLINE_EXCEEDED:return hi.DEADLINE_EXCEEDED;case Ic.RESOURCE_EXHAUSTED:return hi.RESOURCE_EXHAUSTED;case Ic.INTERNAL:return hi.INTERNAL;case Ic.UNAVAILABLE:return hi.UNAVAILABLE;case Ic.UNAUTHENTICATED:return hi.UNAUTHENTICATED;case Ic.INVALID_ARGUMENT:return hi.INVALID_ARGUMENT;case Ic.NOT_FOUND:return hi.NOT_FOUND;case Ic.ALREADY_EXISTS:return hi.ALREADY_EXISTS;case Ic.PERMISSION_DENIED:return hi.PERMISSION_DENIED;case Ic.FAILED_PRECONDITION:return hi.FAILED_PRECONDITION;case Ic.ABORTED:return hi.ABORTED;case Ic.OUT_OF_RANGE:return hi.OUT_OF_RANGE;case Ic.UNIMPLEMENTED:return hi.UNIMPLEMENTED;case Ic.DATA_LOSS:return hi.DATA_LOSS;default:return ai()}}(Sc=Ic||(Ic={}))[Sc.OK=0]="OK",Sc[Sc.CANCELLED=1]="CANCELLED",Sc[Sc.UNKNOWN=2]="UNKNOWN",Sc[Sc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sc[Sc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sc[Sc.NOT_FOUND=5]="NOT_FOUND",Sc[Sc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sc[Sc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sc[Sc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sc[Sc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sc[Sc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sc[Sc.ABORTED=10]="ABORTED",Sc[Sc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sc[Sc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sc[Sc.INTERNAL=13]="INTERNAL",Sc[Sc.UNAVAILABLE=14]="UNAVAILABLE",Sc[Sc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ac}static getOrCreateInstance(){return null===Ac&&(Ac=new Cc),Ac}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Ac=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Xr([4294967295,4294967295],0);function Nc(e){const t=Dc().encode(e),n=new Wr;return n.update(t),new Uint8Array(n.digest())}function Rc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Xr([n,r],0),new Xr([i,s],0)]}class Oc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Fc(`Invalid padding: ${t}`);if(n<0)throw new Fc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Fc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Fc(`Invalid padding when bitmap length is 0: ${t}`);this.yt=8*e.length-t,this.It=Xr.fromNumber(this.yt)}Tt(e,t,n){let r=e.add(t.multiply(Xr.fromNumber(n)));return 1===r.compare(kc)&&(r=new Xr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}At(e){if(0===this.yt)return!1;const t=Nc(e),[n,r]=Rc(t);for(let i=0;i<this.hashCount;i++){const e=this.Tt(n,r,i);if(!this.Et(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Oc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.yt)return;const t=Nc(e),[n,r]=Rc(t);for(let i=0;i<this.hashCount;i++){const e=this.Tt(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Fc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Mc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Lc(Ai.min(),r,new Bs(Si),Aa(),Pa())}}class Mc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Mc(n,t,Pa(),Pa(),Pa())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,n,r){this.vt=e,this.removedTargetIds=t,this.key=n,this.Pt=r}}class Vc{constructor(e,t){this.targetId=e,this.bt=t}}class Uc{constructor(e,t,n=Ws.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Bc{constructor(){this.Vt=0,this.St=$c(),this.Dt=Ws.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Pa(),t=Pa(),n=Pa();return this.St.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ai()}})),new Mc(this.Dt,this.Ct,e,t,n)}$t(){this.xt=!1,this.St=$c()}Ft(e,t){this.xt=!0,this.St=this.St.insert(e,t)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class jc{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Aa(),this.jt=qc(),this.zt=new Bs(Si)}Wt(e){for(const t of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(t,e.Pt):this.Jt(t,e.key,e.Pt);for(const t of e.removedTargetIds)this.Jt(t,e.key,e.Pt)}Yt(e){this.forEachTarget(e,(t=>{const n=this.Xt(t);switch(e.state){case 0:this.Zt(t)&&n.Mt(e.resumeToken);break;case 1:n.qt(),n.Nt||n.$t(),n.Mt(e.resumeToken);break;case 2:n.qt(),n.Nt||this.removeTarget(t);break;case 3:this.Zt(t)&&(n.Ut(),n.Mt(e.resumeToken));break;case 4:this.Zt(t)&&(this.te(t),n.Mt(e.resumeToken));break;default:ai()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Gt.forEach(((e,n)=>{this.Zt(n)&&t(n)}))}ee(e){var t;const n=e.targetId,r=e.bt.count,i=this.ne(n);if(i){const s=i.target;if(ia(s))if(0===r){const e=new Oi(s.path);this.Jt(n,e,Do.newNoDocument(e,Ai.min()))}else ci(1===r);else{const i=this.se(n);if(i!==r){const r=this.ie(e,i);if(0!==r){this.te(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(n,e)}null===(t=Cc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,e.bt))}}}}ie(e,t){const{unchangedNames:n,count:r}=e.bt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Zs(i).toUint8Array()}catch(e){if(e instanceof Hs)return si("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Oc(a,s,o)}catch(e){return si(e instanceof Fc?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.yt?1:r!==t-this.re(e.targetId,c)?2:0}re(e,t){const n=this.Kt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Kt.oe(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.At(s)||(this.Jt(e,n,null),r++)})),r}ue(e){const t=new Map;this.Gt.forEach(((n,r)=>{const i=this.ne(r);if(i){if(n.current&&ia(i.target)){const t=new Oi(i.target.path);null!==this.Qt.get(t)||this.ce(r,t)||this.Jt(r,t,Do.newNoDocument(t,e))}n.kt&&(t.set(r,n.Ot()),n.$t())}}));let n=Pa();this.jt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.ne(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Qt.forEach(((t,n)=>n.setReadTime(e)));const r=new Lc(e,t,this.zt,this.Qt,n);return this.Qt=Aa(),this.jt=qc(),this.zt=new Bs(Si),r}Ht(e,t){if(!this.Zt(e))return;const n=this.ce(e,t.key)?2:0;this.Xt(e).Ft(t.key,n),this.Qt=this.Qt.insert(t.key,t),this.jt=this.jt.insert(t.key,this.ae(t.key).add(e))}Jt(e,t,n){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,t)?r.Ft(t,1):r.Bt(t),this.jt=this.jt.insert(t,this.ae(t).delete(e)),n&&(this.Qt=this.Qt.insert(t,n))}removeTarget(e){this.Gt.delete(e)}se(e){const t=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let t=this.Gt.get(e);return t||(t=new Bc,this.Gt.set(e,t)),t}ae(e){let t=this.jt.get(e);return t||(t=new $s(Si),this.jt=this.jt.insert(e,t)),t}Zt(e){const t=null!==this.ne(e);return t||ri("WatchChangeAggregator","Detected inactive target",e),t}ne(e){const t=this.Gt.get(e);return t&&t.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Bc),this.Kt.getRemoteKeysForTarget(e).forEach((t=>{this.Jt(e,t,null)}))}ce(e,t){return this.Kt.getRemoteKeysForTarget(e).has(t)}}function qc(){return new Bs(Oi.comparator)}function $c(){return new Bs(Oi.comparator)}const zc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Kc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Gc=(()=>{const e={and:"AND",or:"OR"};return e})();class Hc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qc(e,t){return e.useProto3Json||ss(t)?t:{value:t}}function Wc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Jc(e,t){return Wc(e,t.toTimestamp())}function Yc(e){return ci(!!e),Ai.fromTimestamp(function(e){const t=Js(e);return new Ci(t.seconds,t.nanos)}(e))}function Zc(e,t){return function(e){return new ki(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function eu(e){const t=ki.fromString(e);return ci(xu(t)),t}function tu(e,t){return Zc(e.databaseId,t.path)}function nu(e,t){const n=eu(t);if(n.get(1)!==e.databaseId.projectId)throw new di(hi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new di(hi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Oi(ou(n))}function ru(e,t){return Zc(e.databaseId,t)}function iu(e){const t=eu(e);return 4===t.length?ki.emptyPath():ou(t)}function su(e){return new ki(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ou(e){return ci(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function au(e,t,n){return{name:tu(e,t),fields:n.value.mapValue.fields}}function cu(e,t,n){const r=nu(e,t.name),i=Yc(t.updateTime),s=t.createTime?Yc(t.createTime):Ai.min(),o=new Co({mapValue:{fields:t.fields}}),a=Do.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function uu(e,t){return"found"in t?function(e,t){ci(!!t.found),t.found.name,t.found.updateTime;const n=nu(e,t.found.name),r=Yc(t.found.updateTime),i=t.found.createTime?Yc(t.found.createTime):Ai.min(),s=new Co({mapValue:{fields:t.found.fields}});return Do.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){ci(!!t.missing),ci(!!t.readTime);const n=nu(e,t.missing),r=Yc(t.readTime);return Do.newNoDocument(n,r)}(e,t):ai()}function lu(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ai()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ci(void 0===t||"string"==typeof t),Ws.fromBase64String(t||"")):(ci(void 0===t||t instanceof Uint8Array),Ws.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?hi.UNKNOWN:xc(e.code);return new di(t,e.message||"")}(o);n=new Uc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=nu(e,r.document.name),s=Yc(r.document.updateTime),o=r.document.createTime?Yc(r.document.createTime):Ai.min(),a=new Co({mapValue:{fields:r.document.fields}}),c=Do.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Pc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=nu(e,r.document),s=r.readTime?Yc(r.readTime):Ai.min(),o=Do.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=nu(e,r.document),s=r.removedTargetIds||[];n=new Pc([],s,i,null)}else{if(!("filter"in t))return ai();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Ec(r,i),o=e.targetId;n=new Vc(o,s)}}return n}function hu(e,t){let n;if(t instanceof dc)n={update:au(e,t.key,t.value)};else if(t instanceof yc)n={delete:tu(e,t.key)};else if(t instanceof fc)n={update:au(e,t.key,t.data),updateMask:Tu(t.fieldMask)};else{if(!(t instanceof vc))return ai();n={verify:tu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ha)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qa)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xa)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ya)return{fieldPath:t.field.canonicalString(),increment:n.wt};throw ai()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Jc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ai()}(e,t.precondition)),n}function du(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?ic.updateTime(Yc(e.updateTime)):void 0!==e.exists?ic.exists(e.exists):ic.none()}(t.currentDocument):ic.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)ci("REQUEST_TIME"===t.setToServerValue),n=new Ha;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Qa(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Xa(e)}else"increment"in t?n=new Ya(e,t.increment):ai();const r=Ri.fromServerFormat(t.fieldPath);return new tc(r,n)}(e,t))):[];if(t.update){t.update.name;const i=nu(e,t.update.name),s=new Co({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Gs(t.map((e=>Ri.fromServerFormat(e))))}(t.updateMask);return new fc(i,s,e,n,r)}return new dc(i,s,n,r)}if(t.delete){const r=nu(e,t.delete);return new yc(r,n)}if(t.verify){const r=nu(e,t.verify);return new vc(r,n)}return ai()}function fu(e,t){return e&&e.length>0?(ci(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Yc(e.updateTime):Yc(t);return n.isEqual(Ai.min())&&(n=Yc(t)),new rc(n,e.transformResults||[])}(e,t)))):[]}function pu(e,t){return{documents:[ru(e,t.path)]}}function mu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ru(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ru(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Su(Po.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Eu(e.field),direction:wu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Qc(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function gu(e){let t=iu(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ci(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=vu(e);return t instanceof Po&&Bo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Oo(Iu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ss(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ko(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ko(n,t)}(n.endAt)),ua(t,i,o,s,a,"F",c,u)}function yu(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ai()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function vu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Iu(e.unaryFilter.field);return Mo.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Iu(e.unaryFilter.field);return Mo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Iu(e.unaryFilter.field);return Mo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Iu(e.unaryFilter.field);return Mo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ai()}}(e):void 0!==e.fieldFilter?function(e){return Mo.create(Iu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ai()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Po.create(e.compositeFilter.filters.map((e=>vu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ai()}}(e.compositeFilter.op))}(e):ai()}function wu(e){return zc[e]}function bu(e){return Kc[e]}function _u(e){return Gc[e]}function Eu(e){return{fieldPath:e.canonicalString()}}function Iu(e){return Ri.fromServerFormat(e.fieldPath)}function Su(e){return e instanceof Mo?function(e){if("=="===e.op){if(wo(e.value))return{unaryFilter:{field:Eu(e.field),op:"IS_NAN"}};if(vo(e.value))return{unaryFilter:{field:Eu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(wo(e.value))return{unaryFilter:{field:Eu(e.field),op:"IS_NOT_NAN"}};if(vo(e.value))return{unaryFilter:{field:Eu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eu(e.field),op:bu(e.op),value:e.value}}}(e):e instanceof Po?function(e){const t=e.getFilters().map((e=>Su(e)));return 1===t.length?t[0]:{compositeFilter:{op:_u(e.op),filters:t}}}(e):ai()}function Tu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function xu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,n,r,i=Ai.min(),s=Ai.min(),o=Ws.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Cu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.le=e}}function Du(e,t){let n;if(t.document)n=cu(e.le,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Oi.fromSegments(t.noDocument.path),r=Ou(t.noDocument.readTime);n=Do.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return ai();{const e=Oi.fromSegments(t.unknownDocument.path),r=Ou(t.unknownDocument.version);n=Do.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Ci(e[0],e[1]);return Ai.fromTimestamp(t)}(t.readTime)),n}function ku(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Nu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:tu(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Wc(e,t.version.toTimestamp()),createTime:Wc(e,t.createTime.toTimestamp())}}(e.le,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ru(t.version)};else{if(!t.isUnknownDocument())return ai();r.unknownDocument={path:n.path.toArray(),version:Ru(t.version)}}return r}function Nu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ru(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ou(e){const t=new Ci(e.seconds,e.nanoseconds);return Ai.fromTimestamp(t)}function Fu(e,t){const n=(t.baseMutations||[]).map((t=>du(e.le,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>du(e.le,t))),i=Ci.fromMillis(t.localWriteTimeMs);return new wc(t.batchId,i,n,r)}function Lu(e){const t=Ou(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Ou(e.lastLimboFreeSnapshotVersion):Ai.min();let r;var i;return void 0!==e.query.documents?(ci(1===(i=e.query).documents.length),r=ga(la(iu(i.documents[0])))):r=function(e){return ga(gu(e))}(e.query),new Cu(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ws.fromBase64String(e.resumeToken))}function Mu(e,t){const n=Ru(t.snapshotVersion),r=Ru(t.lastLimboFreeSnapshotVersion);let i;i=ia(t.target)?pu(e.le,t.target):mu(e.le,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:na(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Pu(e){const t=gu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?va(t,t.limit,"L"):t}function Vu(e,t){return new _c(t.largestBatchId,du(e.le,t.overlayMutation))}function Uu(e,t){const n=t.path.lastSegment();return[e,cs(t.path.popLast()),n]}function Bu(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Ru(r.readTime),documentKey:cs(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{getBundleMetadata(e,t){return qu(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Ou(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return qu(e).put({bundleId:(n=t).id,createTime:Ru(Yc(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return $u(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Pu(t.bundledQuery),readTime:Ou(t.readTime)};var t}))}saveNamedQuery(e,t){return $u(e).put(function(e){return{name:e.name,readTime:Ru(Yc(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function qu(e){return Ms(e,"bundles")}function $u(e){return Ms(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.serializer=e,this.userId=t}static fe(e,t){const n=t.uid||"";return new zu(e,n)}getOverlay(e,t){return Ku(e).get(Uu(this.userId,t)).next((e=>e?Vu(this.serializer,e):null))}getOverlays(e,t){const n=Ra();return Gi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new _c(t,i);r.push(this.de(e,s))})),Gi.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(cs(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Ku(e).J("collectionPathOverlayIndex",r))})),Gi.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Ra(),i=cs(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ku(e).j("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Vu(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=Ra();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ku(e).X({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Vu(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}de(e,t){return Ku(e).put(function(e,t,n){const[r,i,s]=Uu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:hu(e.le,n.mutation)}}(this.serializer,this.userId,t))}}function Ku(e){return Ms(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){}_e(e,t){this.we(e,t),t.me()}we(e,t){if("nullValue"in e)this.ge(t,5);else if("booleanValue"in e)this.ge(t,10),t.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(t,15),t.ye(Ys(e.integerValue));else if("doubleValue"in e){const n=Ys(e.doubleValue);isNaN(n)?this.ge(t,13):(this.ge(t,15),os(n)?t.ye(0):t.ye(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ge(t,20),"string"==typeof n?t.pe(n):(t.pe(`${n.seconds||""}`),t.ye(n.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,t),this.Te(t);else if("bytesValue"in e)this.ge(t,30),t.Ee(Zs(e.bytesValue)),this.Te(t);else if("referenceValue"in e)this.Ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ge(t,45),t.ye(n.latitude||0),t.ye(n.longitude||0)}else"mapValue"in e?Eo(e)?this.ge(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Te(t)):"arrayValue"in e?(this.ve(e.arrayValue,t),this.Te(t)):ai()}Ie(e,t){this.ge(t,25),this.Pe(e,t)}Pe(e,t){t.pe(e)}Re(e,t){const n=e.fields||{};this.ge(t,55);for(const r of Object.keys(n))this.Ie(r,t),this.we(n[r],t)}ve(e,t){const n=e.values||[];this.ge(t,50);for(const r of n)this.we(r,t)}Ae(e,t){this.ge(t,37),Oi.fromName(e).path.forEach((e=>{this.ge(t,60),this.Pe(e,t)}))}ge(e,t){e.ye(t)}Te(e){e.ye(2)}}function Hu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Qu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Hu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Gu.be=new Gu;class Wu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Se(n.value),n=t.next();this.De()}Ce(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xe(n.value),n=t.next();this.Ne()}ke(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Se(e);else if(e<2048)this.Se(960|e>>>6),this.Se(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Se(480|e>>>12),this.Se(128|63&e>>>6),this.Se(128|63&e);else{const e=t.codePointAt(0);this.Se(240|e>>>18),this.Se(128|63&e>>>12),this.Se(128|63&e>>>6),this.Se(128|63&e)}}this.De()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.xe(e);else if(e<2048)this.xe(960|e>>>6),this.xe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.xe(480|e>>>12),this.xe(128|63&e>>>6),this.xe(128|63&e);else{const e=t.codePointAt(0);this.xe(240|e>>>18),this.xe(128|63&e>>>12),this.xe(128|63&e>>>6),this.xe(128|63&e)}}this.Ne()}Oe(e){const t=this.$e(e),n=Qu(t);this.Fe(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Be(e){const t=this.$e(e),n=Qu(t);this.Fe(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Se(e){const t=255&e;0===t?(this.qe(0),this.qe(255)):255===t?(this.qe(255),this.qe(0)):this.qe(t)}xe(e){const t=255&e;0===t?(this.Ke(0),this.Ke(255)):255===t?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Xu{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class Ju{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class Yu{constructor(){this.Qe=new Wu,this.je=new Xu(this.Qe),this.ze=new Ju(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return 0===e?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}He(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Zu(this.indexId,this.documentKey,this.arrayValue,n)}}function el(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=tl(e.arrayValue,t.arrayValue),0!==n?n:(n=tl(e.directionalValue,t.directionalValue),0!==n?n:Oi.comparator(e.documentKey,t.documentKey)))}function tl(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const t of e.filters){const e=t;e.isInequality()?this.Xe=e:this.Ye.push(e)}}Ze(e){ci(e.collectionGroup===this.collectionId);const t=Li(e);if(void 0!==t&&!this.tn(t))return!1;const n=Mi(e);let r=0,i=0;for(;r<n.length&&this.tn(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Xe){const e=n[r];if(!this.en(this.Xe,e)||!this.nn(this.Je[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Je.length||!this.nn(this.Je[i++],e))return!1}return!0}tn(e){for(const t of this.Ye)if(this.en(t,e))return!0;return!1}en(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}nn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){var t,n;if(ci(e instanceof Mo||e instanceof Po),e instanceof Mo){if(e instanceof Jo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Mo.create(e.field,"==",t))))||[];return Po.create(r,"or")}return e}const r=e.filters.map((e=>rl(e)));return Po.create(r,e.op)}function il(e){if(0===e.getFilters().length)return[];const t=cl(rl(e));return ci(al(t)),sl(t)||ol(t)?[t]:t.getFilters()}function sl(e){return e instanceof Mo}function ol(e){return e instanceof Po&&Bo(e)}function al(e){return sl(e)||ol(e)||function(e){if(e instanceof Po&&Uo(e)){for(const t of e.getFilters())if(!sl(t)&&!ol(t))return!1;return!0}return!1}(e)}function cl(e){if(ci(e instanceof Mo||e instanceof Po),e instanceof Mo)return e;if(1===e.filters.length)return cl(e.filters[0]);const t=e.filters.map((e=>cl(e)));let n=Po.create(t,e.op);return n=hl(n),al(n)?n:(ci(n instanceof Po),ci(Vo(n)),ci(n.filters.length>1),n.filters.reduce(((e,t)=>ul(e,t))))}function ul(e,t){let n;return ci(e instanceof Mo||e instanceof Po),ci(t instanceof Mo||t instanceof Po),n=e instanceof Mo?t instanceof Mo?function(e,t){return Po.create([e,t],"and")}(e,t):ll(e,t):t instanceof Mo?ll(t,e):function(e,t){if(ci(e.filters.length>0&&t.filters.length>0),Vo(e)&&Vo(t))return zo(e,t.getFilters());const n=Uo(e)?e:t,r=Uo(e)?t:e,i=n.filters.map((e=>ul(e,r)));return Po.create(i,"or")}(e,t),hl(n)}function ll(e,t){if(Vo(t))return zo(t,e.getFilters());{const n=t.filters.map((t=>ul(e,t)));return Po.create(n,"or")}}function hl(e){if(ci(e instanceof Mo||e instanceof Po),e instanceof Mo)return e;const t=e.getFilters();if(1===t.length)return hl(t[0]);if(jo(e))return e;const n=t.map((e=>hl(e))),r=[];return n.forEach((t=>{t instanceof Mo?r.push(t):t instanceof Po&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Po.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dl{constructor(){this.sn=new fl}addToCollectionParentIndex(e,t){return this.sn.add(t),Gi.resolve()}getCollectionParents(e,t){return Gi.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return Gi.resolve()}deleteFieldIndex(e,t){return Gi.resolve()}getDocumentsMatchingTarget(e,t){return Gi.resolve(null)}getIndexType(e,t){return Gi.resolve(0)}getFieldIndexes(e,t){return Gi.resolve([])}getNextCollectionGroupToUpdate(e){return Gi.resolve(null)}getMinOffset(e,t){return Gi.resolve(ji.min())}getMinOffsetFromCollectionGroup(e,t){return Gi.resolve(ji.min())}updateCollectionGroup(e,t,n){return Gi.resolve()}updateIndexEntries(e,t){return Gi.resolve()}}class fl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $s(ki.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $s(ki.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Uint8Array(0);class ml{constructor(e,t){this.user=e,this.databaseId=t,this.rn=new fl,this.on=new xa((e=>na(e)),((e,t)=>ra(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.rn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.rn.add(t)}));const i={collectionId:n,parent:cs(r)};return gl(e).put(i)}return Gi.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[xi(t),""],!1,!0);return gl(e).j(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(hs(r.parent))}return n}))}addFieldIndex(e,t){const n=vl(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=wl(e);return i.next((e=>{n.put(Bu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=vl(e),r=wl(e),i=yl(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=yl(e);let r=!0;const i=new Map;return Gi.forEach(this.un(t),(t=>this.cn(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Pa();const r=[];return Gi.forEach(i,((i,s)=>{var o;ri("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${na(t)}`);const a=function(e,t){const n=Li(t);if(void 0===n)return null;for(const r of sa(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Mi(t))for(const t of sa(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Mi(t)){const t=0===i.kind?oa(e,i.fieldPath,e.startAt):aa(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new ko(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Mi(t)){const t=0===i.kind?aa(e,i.fieldPath,e.endAt):oa(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new ko(n,r)}(s,i),h=this.an(i,s,u),d=this.an(i,s,l),f=this.hn(i,s,c),p=this.ln(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Gi.forEach(p,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=Oi.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Gi.resolve(null)}))}un(e){let t=this.on.get(e);return t||(t=0===e.filters.length?[e]:il(Po.create(e.filters,"and")).map((t=>ta(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.on.set(e,t),t)}ln(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.fn(t[l/c]):pl,h=this.dn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],s),f=o.map((t=>this.dn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}dn(e,t,n,r){const i=new Zu(e,Oi.empty(),t,n);return r?i:i.He()}_n(e,t,n,r){const i=new Zu(e,Oi.empty(),t,n);return r?i.He():i}cn(e,t){const n=new nl(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ze(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.un(t);return Gi.forEach(r,(t=>this.cn(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new $s(Ri.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}wn(e,t){const n=new Yu;for(const r of Mi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.We(r.kind);Gu.be._e(e,i)}return n.Ge()}fn(e){const t=new Yu;return Gu.be._e(e,t.We(0)),t.Ge()}mn(e,t){const n=new Yu;return Gu.be._e(mo(this.databaseId,t),n.We(function(e){const t=Mi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Ge()}hn(e,t,n){if(null===n)return[];let r=[];r.push(new Yu);let i=0;for(const s of Mi(e)){const e=n[i++];for(const n of r)if(this.gn(t,s.fieldPath)&&yo(e))r=this.yn(r,s,e);else{const t=n.We(s.kind);Gu.be._e(e,t)}}return this.pn(r)}an(e,t,n){return this.hn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ge();return t}yn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Yu;n.seed(e.Ge()),Gu.be._e(s,n.We(t.kind)),i.push(n)}return i}gn(e,t){return!!e.filters.find((e=>e instanceof Mo&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=vl(e),r=wl(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return Gi.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Vi(t.sequenceNumber,new ji(Ou(t.readTime),new Oi(hs(t.documentKey)),t.largestBatchId)):Vi.empty(),r=e.fields.map((([e,t])=>new Pi(Ri.fromServerFormat(e),t)));return new Fi(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Si(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=vl(e),i=wl(e);return this.In(e).next((e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Gi.forEach(t,(t=>i.put(Bu(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Gi.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Gi.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Gi.forEach(i,(n=>this.Tn(e,t,n).next((t=>{const i=this.En(r,n);return t.isEqual(i)?Gi.resolve():this.An(e,r,n,t,i)})))))))}))}Rn(e,t,n,r){return yl(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,r){return yl(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}Tn(e,t,n){const r=yl(e);let i=new $s(el);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},((e,r)=>{i=i.add(new Zu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}En(e,t){let n=new $s(el);const r=this.wn(t,e);if(null==r)return n;const i=Li(t);if(null!=i){const s=e.data.field(i.fieldPath);if(yo(s))for(const i of s.arrayValue.values||[])n=n.add(new Zu(t.indexId,e.key,this.fn(i),r))}else n=n.add(new Zu(t.indexId,e.key,pl,r));return n}An(e,t,n,r,i){ri("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Ks(s),c=Ks(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Ks(o)):t?(i(a),a=Ks(s)):(a=Ks(s),c=Ks(o))}}(r,i,el,(r=>{s.push(this.Rn(e,t,n,r))}),(r=>{s.push(this.vn(e,t,n,r))})),Gi.waitFor(s)}In(e){let t=1;return wl(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>el(e,t))).filter(((e,t,n)=>!t||0!==el(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=el(s,e),i=el(s,t);if(0===n)r[0]=e.He();else if(n>0&&i<0)r.push(s),r.push(s.He());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.Pn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,pl,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,pl,[]];i.push(IDBKeyRange.bound(e,t))}return i}Pn(e,t){return el(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(bl)}getMinOffset(e,t){return Gi.mapArray(this.un(t),(t=>this.cn(e,t).next((e=>e||ai())))).next(bl)}}function gl(e){return Ms(e,"collectionParents")}function yl(e){return Ms(e,"indexEntries")}function vl(e){return Ms(e,"indexConfiguration")}function wl(e){return Ms(e,"indexState")}function bl(e){ci(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;qi(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ji(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class El{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new El(e,El.DEFAULT_COLLECTION_PERCENTILE,El.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{ci(1===a)})));const u=[];for(const l of n.mutations){const e=ps(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Gi.waitFor(s).next((()=>u))}function Sl(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw ai();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */El.DEFAULT_COLLECTION_PERCENTILE=10,El.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,El.DEFAULT=new El(41943040,El.DEFAULT_COLLECTION_PERCENTILE,El.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),El.DISABLED=new El(-1,0,0);class Tl{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.bn={}}static fe(e,t,n,r){ci(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Tl(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Cl(e).X({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Al(e),s=Cl(e);return s.add({}).next((o=>{ci("number"==typeof o);const a=new wc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>hu(e.le,t))),i=n.mutations.map((t=>hu(e.le,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new $s(((e,t)=>Si(e.canonicalString(),t.canonicalString())));for(const e of r){const t=ps(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,ms))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.bn[o]=a.keys()})),Gi.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Cl(e).get(t).next((e=>e?(ci(e.userId===this.userId),Fu(this.serializer,e)):null))}Vn(e,t){return this.bn[t]?Gi.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.bn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Cl(e).X({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(ci(t.batchId>=n),i=Fu(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Cl(e).X({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Cl(e).j("userMutationsIndex",t).next((e=>e.map((e=>Fu(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=fs(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Al(e).X({range:r},((n,r,s)=>{const[o,a,c]=n,u=hs(a);if(o===this.userId&&t.path.isEqual(u))return Cl(e).get(c).next((e=>{if(!e)throw ai();ci(e.userId===this.userId),i.push(Fu(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $s(Si);const r=[];return t.forEach((t=>{const i=fs(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Al(e).X({range:s},((e,r,i)=>{const[s,o,a]=e,c=hs(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Gi.waitFor(r).next((()=>this.Sn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=fs(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new $s(Si);return Al(e).X({range:s},((e,t,i)=>{const[s,a,c]=e,u=hs(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Sn(e,o)))}Sn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Cl(e).get(t).next((e=>{if(null===e)throw ai();ci(e.userId===this.userId),n.push(Fu(this.serializer,e))})))})),Gi.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Il(e.at,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Dn(t.batchId)})),Gi.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Gi.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Al(e).X({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=hs(e[1]);r.push(t)}else n.done()})).next((()=>{ci(0===r.length)}))}))}containsKey(e,t){return xl(e,this.userId,t)}Cn(e){return Dl(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function xl(e,t,n){const r=fs(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Al(e).X({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Cl(e){return Ms(e,"mutations")}function Al(e){return Ms(e,"documentMutations")}function Dl(e){return Ms(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new kl(0)}static kn(){return new kl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Mn(e).next((t=>{const n=new kl(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Mn(e).next((e=>Ai.fromTimestamp(new Ci(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Mn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Mn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r))))}addTargetData(e,t){return this.$n(e,t).next((()=>this.Mn(e).next((n=>(n.targetCount+=1,this.Fn(t,n),this.On(e,n))))))}updateTargetData(e,t){return this.$n(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Rl(e).delete(t.targetId))).next((()=>this.Mn(e))).next((t=>(ci(t.targetCount>0),t.targetCount-=1,this.On(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Rl(e).X(((s,o)=>{const a=Lu(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Gi.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Rl(e).X(((e,n)=>{const r=Lu(n);t(r)}))}Mn(e){return Ol(e).get("targetGlobalKey").next((e=>(ci(null!==e),e)))}On(e,t){return Ol(e).put("targetGlobalKey",t)}$n(e,t){return Rl(e).put(Mu(this.serializer,t))}Fn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Mn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=na(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Rl(e).X({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Lu(n);ra(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Fl(e);return t.forEach((t=>{const s=cs(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Gi.waitFor(r)}removeMatchingKeys(e,t,n){const r=Fl(e);return Gi.forEach(t,(t=>{const i=cs(t.path);return Gi.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Fl(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Fl(e);let i=Pa();return r.X({range:n,Y:!0},((e,t,n)=>{const r=hs(e[1]),s=new Oi(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=cs(t.path),r=IDBKeyRange.bound([n],[xi(n)],!1,!0);let i=0;return Fl(e).X({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}he(e,t){return Rl(e).get(t).next((e=>e?Lu(e):null))}}function Rl(e){return Ms(e,"targets")}function Ol(e){return Ms(e,"targetGlobal")}function Fl(e){return Ms(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll([e,t],[n,r]){const i=Si(e,n);return 0===i?Si(t,r):i}class Ml{constructor(e){this.Bn=e,this.buffer=new $s(Ll),this.Ln=0}qn(){return++this.Ln}Un(e){const t=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ll(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pl{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Kn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return null!==this.Kn}Gn(e){ri("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ji(e)?ri("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ki(e)}await this.Gn(3e5)}))}}class Vl{constructor(e,t){this.Qn=e,this.params=t}calculateTargetCount(e,t){return this.Qn.jn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Gi.resolve(is.ct);const n=new Ml(t);return this.Qn.forEachTarget(e,(e=>n.Un(e.sequenceNumber))).next((()=>this.Qn.zn(e,(e=>n.Un(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Qn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Qn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ri("LruGarbageCollector","Garbage collection skipped; disabled"),Gi.resolve(_l)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(ri("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_l):this.Wn(e,t)))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(ri("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),ti()<=a["in"].DEBUG&&ri("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Gi.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Ul(e,t){return new Vl(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t){this.db=e,this.garbageCollector=Ul(this,t)}jn(e){const t=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Hn(e){let t=0;return this.zn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}zn(e,t){return this.Jn(e,((e,n)=>t(n)))}addReference(e,t,n){return jl(e,n)}removeReference(e,t,n){return jl(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return jl(e,t)}Yn(e,t){return function(e,t){let n=!1;return Dl(e).Z((r=>xl(e,r,t).next((e=>(e&&(n=!0),Gi.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Jn(e,((s,o)=>{if(o<=t){const t=this.Yn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,Ai.min()),Fl(e).delete([0,cs(s.path)]))))}));r.push(t)}})).next((()=>Gi.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return jl(e,t)}Jn(e,t){const n=Fl(e);let r,i=is.ct;return n.X({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==is.ct&&t(new Oi(hs(r)),i),i=o,r=s):i=is.ct})).next((()=>{i!==is.ct&&t(new Oi(hs(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function jl(e,t){return Fl(e).put(function(e,t){return{targetId:0,path:cs(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.changes=new xa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Do.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Gi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Hl(e).put(n)}removeEntry(e,t,n){return Hl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Nu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Xn(e,n))))}getEntry(e,t){let n=Do.newInvalidDocument(t);return Hl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Ql(t))},((e,r)=>{n=this.Zn(t,r)})).next((()=>n))}ts(e,t){let n={size:0,document:Do.newInvalidDocument(t)};return Hl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Ql(t))},((e,r)=>{n={document:this.Zn(t,r),size:Sl(r)}})).next((()=>n))}getEntries(e,t){let n=Aa();return this.es(e,t,((e,t)=>{const r=this.Zn(e,t);n=n.insert(e,r)})).next((()=>n))}ns(e,t){let n=Aa(),r=new Bs(Oi.comparator);return this.es(e,t,((e,t)=>{const i=this.Zn(e,t);n=n.insert(e,i),r=r.insert(e,Sl(t))})).next((()=>({documents:n,ss:r})))}es(e,t,n){if(t.isEmpty())return Gi.resolve();let r=new $s(Xl);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Ql(r.first()),Ql(r.last())),s=r.getIterator();let o=s.getNext();return Hl(e).X({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Oi.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Xl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(Ql(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),Nu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Hl(e).j(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=Aa();for(const i of e){const e=this.Zn(Oi.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(Ea(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Aa();const s=Wl(t,n),o=Wl(t,ji.max());return Hl(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Zn(Oi.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Kl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Gl(e).get("remoteDocumentGlobalKey").next((e=>(ci(!!e),e)))}Xn(e,t){return Gl(e).put("remoteDocumentGlobalKey",t)}Zn(e,t){if(t){const e=Du(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ai.min()))return e}return Do.newInvalidDocument(e)}}function zl(e){return new $l(e)}class Kl extends ql{constructor(e,t){super(),this.rs=e,this.trackRemovals=t,this.os=new xa((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new $s(((e,t)=>Si(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.os.get(i);if(t.push(this.rs.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=ku(this.rs.serializer,s);r=r.add(i.path.popLast());const c=Sl(a);n+=c-o.size,t.push(this.rs.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=ku(this.rs.serializer,s.convertToNoDocument(Ai.min()));t.push(this.rs.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.rs.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.rs.updateMetadata(e,n)),Gi.waitFor(t)}getFromCache(e,t){return this.rs.ts(e,t).next((e=>(this.os.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.rs.ns(e,t).next((({documents:e,ss:t})=>(t.forEach(((t,n)=>{this.os.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Gl(e){return Ms(e,"remoteDocumentGlobal")}function Hl(e){return Ms(e,"remoteDocumentsV14")}function Ql(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Wl(e,t){const n=t.documentKey.path.toArray();return[e,Nu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Xl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Si(n[s],r[s]),i)return i;return i=Si(n.length,r.length),i||(i=Si(n[n.length-2],r[r.length-2]),i||Si(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Jl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&uc(n.mutation,e,Gs.empty(),Ci.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Pa()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Pa()){const r=Ra();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ka();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ra();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Pa())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Aa();const s=Fa(),o=Fa();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof fc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),uc(o.mutation,t,o.mutation.getFieldMask(),Ci.now())):s.set(t.key,Gs.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Jl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Fa();let r=new Bs(((e,t)=>e-t)),i=Pa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Gs.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Pa()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Oa();c.forEach((e=>{if(!i.has(e)){const r=ac(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Gi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Gi.resolve(Ra());let o=-1,a=i;return s.next((t=>Gi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Gi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Pa()))).next((e=>({batchId:o,changes:Na(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Oi(t)).next((e=>{let t=ka();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=ka();return this.indexManager.getCollectionParents(e,r).next((s=>Gi.forEach(s,(s=>{const o=function(e,t){return new ca(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Do.newInvalidDocument(r)))}));let n=ka();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&uc(s.mutation,i,Gs.empty(),Ci.now()),Ea(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,t){return Gi.resolve(this.us.get(t))}saveBundleMetadata(e,t){var n;return this.us.set(t.id,{id:(n=t).id,version:n.version,createTime:Yc(n.createTime)}),Gi.resolve()}getNamedQuery(e,t){return Gi.resolve(this.cs.get(t))}saveNamedQuery(e,t){return this.cs.set(t.name,function(e){return{name:e.name,query:Pu(e.bundledQuery),readTime:Yc(e.readTime)}}(t)),Gi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.overlays=new Bs(Oi.comparator),this.hs=new Map}getOverlay(e,t){return Gi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ra();return Gi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.de(e,t,r)})),Gi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hs.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hs.delete(n)),Gi.resolve()}getOverlaysForCollection(e,t,n){const r=Ra(),i=t.length+1,s=new Oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Gi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Bs(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ra(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ra(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Gi.resolve(o)}de(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hs.get(r.largestBatchId).delete(n.key);this.hs.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new _c(t,n));let i=this.hs.get(t);void 0===i&&(i=Pa(),this.hs.set(t,i)),this.hs.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.ls=new $s(nh.fs),this.ds=new $s(nh._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,t){const n=new nh(e,t);this.ls=this.ls.add(n),this.ds=this.ds.add(n)}ws(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.gs(new nh(e,t))}ys(e,t){e.forEach((e=>this.removeReference(e,t)))}ps(e){const t=new Oi(new ki([])),n=new nh(t,e),r=new nh(t,e+1),i=[];return this.ds.forEachInRange([n,r],(e=>{this.gs(e),i.push(e.key)})),i}Is(){this.ls.forEach((e=>this.gs(e)))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const t=new Oi(new ki([])),n=new nh(t,e),r=new nh(t,e+1);let i=Pa();return this.ds.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new nh(e,0),n=this.ls.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nh{constructor(e,t){this.key=e,this.Es=t}static fs(e,t){return Oi.comparator(e.key,t.key)||Si(e.Es,t.Es)}static _s(e,t){return Si(e.Es,t.Es)||Oi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.As=1,this.Rs=new $s(nh.fs)}checkEmpty(e){return Gi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new wc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new nh(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Gi.resolve(s)}lookupMutationBatch(e,t){return Gi.resolve(this.vs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Ps(n),i=r<0?0:r;return Gi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Gi.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(e){return Gi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new nh(t,0),r=new nh(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.vs(e.Es);i.push(t)})),Gi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $s(Si);return t.forEach((e=>{const t=new nh(e,0),r=new nh(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.Es)}))})),Gi.resolve(this.bs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Oi.isDocumentKey(i)||(i=i.child(""));const s=new nh(new Oi(i),0);let o=new $s(Si);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Es)),!0)}),s),Gi.resolve(this.bs(o))}bs(e){const t=[];return e.forEach((e=>{const n=this.vs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ci(0===this.Vs(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Gi.forEach(t.mutations,(r=>{const i=new nh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Dn(e){}containsKey(e,t){const n=new nh(t,0),r=this.Rs.firstAfterOrEqual(n);return Gi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Gi.resolve()}Vs(e,t){return this.Ps(e)}Ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}vs(e){const t=this.Ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.Ss=e,this.docs=new Bs(Oi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ss(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Gi.resolve(n?n.document.mutableCopy():Do.newInvalidDocument(t))}getEntries(e,t){let n=Aa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Do.newInvalidDocument(e))})),Gi.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Aa();const s=t.path,o=new Oi(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||qi(Bi(o),n)<=0||(r.has(o.key)||Ea(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Gi.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ai()}Ds(e,t){return Gi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new sh(this)}getSize(e){return Gi.resolve(this.size)}}class sh extends ql{constructor(e){super(),this.rs=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.rs.addEntry(e,r)):this.rs.removeEntry(n)})),Gi.waitFor(t)}getFromCache(e,t){return this.rs.getEntry(e,t)}getAllFromCache(e,t){return this.rs.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.persistence=e,this.Cs=new xa((e=>na(e)),ra),this.lastRemoteSnapshotVersion=Ai.min(),this.highestTargetId=0,this.xs=0,this.Ns=new th,this.targetCount=0,this.ks=kl.Nn()}forEachTarget(e,t){return this.Cs.forEach(((e,n)=>t(n))),Gi.resolve()}getLastRemoteSnapshotVersion(e){return Gi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Gi.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),Gi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.xs&&(this.xs=t),Gi.resolve()}$n(e){this.Cs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ks=new kl(t),this.highestTargetId=t),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,t){return this.$n(t),this.targetCount+=1,Gi.resolve()}updateTargetData(e,t){return this.$n(t),Gi.resolve()}removeTargetData(e,t){return this.Cs.delete(t.target),this.Ns.ps(t.targetId),this.targetCount-=1,Gi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Cs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Cs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Gi.waitFor(i).next((()=>r))}getTargetCount(e){return Gi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Cs.get(t)||null;return Gi.resolve(n)}addMatchingKeys(e,t,n){return this.Ns.ws(t,n),Gi.resolve()}removeMatchingKeys(e,t,n){this.Ns.ys(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Gi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ns.ps(t),Gi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ns.Ts(t);return Gi.resolve(n)}containsKey(e,t){return Gi.resolve(this.Ns.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t){this.Ms={},this.overlays={},this.Os=new is(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new oh(this),this.indexManager=new dl,this.remoteDocumentCache=function(e){return new ih(e)}((e=>this.referenceDelegate.Bs(e))),this.serializer=new Au(t),this.Ls=new Zl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ms[e.toKey()];return n||(n=new rh(t,this.referenceDelegate),this.Ms[e.toKey()]=n),n}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,t,n){ri("MemoryPersistence","Starting transaction:",e);const r=new ch(this.Os.next());return this.referenceDelegate.qs(),n(r).next((e=>this.referenceDelegate.Us(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ks(e,t){return Gi.or(Object.values(this.Ms).map((n=>()=>n.containsKey(e,t))))}}class ch extends zi{constructor(e){super(),this.currentSequenceNumber=e}}class uh{constructor(e){this.persistence=e,this.Gs=new th,this.Qs=null}static js(e){return new uh(e)}get zs(){if(this.Qs)return this.Qs;throw ai()}addReference(e,t,n){return this.Gs.addReference(n,t),this.zs.delete(n.toString()),Gi.resolve()}removeReference(e,t,n){return this.Gs.removeReference(n,t),this.zs.add(n.toString()),Gi.resolve()}markPotentiallyOrphaned(e,t){return this.zs.add(t.toString()),Gi.resolve()}removeTarget(e,t){this.Gs.ps(t.targetId).forEach((e=>this.zs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.zs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}qs(){this.Qs=new Set}Us(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Gi.forEach(this.zs,(n=>{const r=Oi.fromPath(n);return this.Ws(e,r).next((e=>{e||t.removeEntry(r,Ai.min())}))})).next((()=>(this.Qs=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ws(e,t).next((e=>{e?this.zs.delete(t.toString()):this.zs.add(t.toString())}))}Bs(e){return 0}Ws(e,t){return Gi.or([()=>Gi.resolve(this.Gs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ks(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.serializer=e}$(e,t,n,r){const i=new Hi("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ds,{unique:!0}),e.createObjectStore("documentMutations")}(e),hh(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Gi.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),hh(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ai.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ds,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Gi.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Js(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(i))))),n<7&&r>=7&&(s=s.next((()=>this.Xs(i)))),n<8&&r>=8&&(s=s.next((()=>this.Zs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ti(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Cs});t.createIndex("collectionPathOverlayIndex",As,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Ds,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:gs});t.createIndex("documentKeyIndex",ys),t.createIndex("collectionGroupIndex",vs)}(e))).next((()=>this.ei(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.ni(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Is}).createIndex("sequenceNumberIndex",Ss,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Ts}).createIndex("documentKeyIndex",xs,{unique:!1})}(e)))),s}Ys(e){let t=0;return e.store("remoteDocuments").X(((e,n)=>{t+=Sl(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Js(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>Gi.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next((n=>Gi.forEach(n,(n=>{ci(n.userId===t.userId);const r=Fu(this.serializer,n);return Il(e,t.userId,r).next((()=>{}))}))))}))))}Xs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.X(((n,i)=>{const s=new ki(n),o=function(e){return[0,cs(e)]}(s);r.push(t.get(o).next((n=>n?Gi.resolve():(n=>t.put({targetId:0,path:cs(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Gi.waitFor(r)))}))}Zs(e,t){e.createObjectStore("collectionParents",{keyPath:Es});const n=t.store("collectionParents"),r=new fl,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:cs(r)})}};return t.store("remoteDocuments").X({Y:!0},((e,t)=>{const n=new ki(e);return i(n.popLast())})).next((()=>t.store("documentMutations").X({Y:!0},(([e,t,n],r)=>{const s=hs(t);return i(s.popLast())}))))}ti(e){const t=e.store("targets");return t.X(((e,n)=>{const r=Lu(n),i=Mu(this.serializer,r);return t.put(i)}))}ei(e,t){const n=t.store("remoteDocuments"),r=[];return n.X(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new Oi(ki.fromString(o.document.name).popFirst(5)):o.noDocument?Oi.fromSegments(o.noDocument.path):o.unknownDocument?Oi.fromSegments(o.unknownDocument.path):ai()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Gi.waitFor(r)))}ni(e,t){const n=t.store("mutations"),r=zl(this.serializer),i=new ah(uh.js,this.serializer.le);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Pa();Fu(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Gi.forEach(n,((e,n)=>{const s=new Yr(n),o=zu.fe(this.serializer,s),a=i.getIndexManager(s),c=Tl.fe(s,this.serializer,a,i.referenceDelegate);return new Yl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Ls(t,is.ct),e).next()}))}))}}function hh(e){e.createObjectStore("targetDocuments",{keyPath:bs}).createIndex("documentTargetsIndex",_s,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ws,{unique:!0}),e.createObjectStore("targetGlobal")}const dh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fh{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.si=i,this.window=s,this.document=o,this.ii=c,this.ri=u,this.oi=l,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=e=>Promise.resolve(),!fh.D())throw new di(hi.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Bl(this,r),this.fi=t+"main",this.serializer=new Au(a),this.di=new Qi(this.fi,this.oi,new lh(this.serializer)),this.Fs=new Nl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zl(this.serializer),this.Ls=new ju,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&ii("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new di(hi.FAILED_PRECONDITION,dh);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Fs.getHighestSequenceNumber(e)))})).then((e=>{this.Os=new is(e,this.ii)})).then((()=>{this.$s=!0})).catch((e=>(this.di&&this.di.close(),Promise.reject(e))))}pi(e){return this.li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget((async()=>{this.started&&await this.wi()})))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>mh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ii(e).next((e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable((()=>this.li(!1))))}))})).next((()=>this.Ti(e))).next((t=>this.isPrimary&&!t?this.Ei(e).next((()=>!1)):!!t&&this.Ai(e).next((()=>!0)))))).catch((e=>{if(Ji(e))return ri("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ri("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.si.enqueueRetryable((()=>this.li(e))),this.isPrimary=e}))}Ii(e){return ph(e).get("owner").next((e=>Gi.resolve(this.Ri(e))))}vi(e){return mh(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ms(e,"clientMetadata");return t.j().next((e=>{const n=this.Vi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Gi.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this._i)for(const t of e)this._i.removeItem(this.Si(t.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.wi().then((()=>this.Pi())).then((()=>this.yi()))))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?Gi.resolve(!0):ph(e).get("owner").next((t=>{if(null!==t&&this.bi(t.leaseTimestampMs,5e3)&&!this.Di(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new di(hi.FAILED_PRECONDITION,dh);return!1}}return!(!this.networkEnabled||!this.inForeground)||mh(e).j().next((e=>void 0===this.Vi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&ri("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Ls(e,is.ct);return this.Ei(t).next((()=>this.vi(t)))})),this.di.close(),this.ki()}Vi(e,t){return e.filter((e=>this.bi(e.updateTimeMs,t)&&!this.Di(e.clientId)))}Mi(){return this.runTransaction("getActiveClients","readonly",(e=>mh(e).j().next((e=>this.Vi(e,18e5).map((e=>e.clientId))))))}get started(){return this.$s}getMutationQueue(e,t){return Tl.fe(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ml(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return zu.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,t,n){ri("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.oi)?Fs:14===s?Os:13===s?Rs:12===s?Ns:11===s?ks:void ai();var s;let o;return this.di.runTransaction(e,r,i,(r=>(o=new Ls(r,this.Os?this.Os.next():is.ct),"readwrite-primary"===t?this.Ii(o).next((e=>!!e||this.Ti(o))).next((t=>{if(!t)throw ii(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable((()=>this.li(!1))),new di(hi.FAILED_PRECONDITION,$i);return n(o)})).next((e=>this.Ai(o).next((()=>e)))):this.Oi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Oi(e){return ph(e).get("owner").next((e=>{if(null!==e&&this.bi(e.leaseTimestampMs,5e3)&&!this.Di(e.ownerId)&&!this.Ri(e)&&!(this.ri||this.allowTabSynchronization&&e.allowTabSynchronization))throw new di(hi.FAILED_PRECONDITION,dh)}))}Ai(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ph(e).put("owner",t)}static D(){return Qi.D()}Ei(e){const t=ph(e);return t.get("owner").next((e=>this.Ri(e)?(ri("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Gi.resolve()))}bi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ii(`Detected an update time that is in the future: ${e} > ${n}`),!1))}mi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ci=()=>{this.si.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.wi())))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground="visible"===this.document.visibilityState)}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ui=()=>{this.Ci();const e=/(?:Version|Mobile)\/1[456]/;(0,c.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Si(e)));return ri("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ii("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){ii("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch(e){}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ph(e){return Ms(e,"owner")}function mh(e){return Ms(e,"clientMetadata")}function gh(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Fi=r}static Bi(e,t){let n=Pa(),r=Pa();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new yh(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.Li=!1}initialize(e,t){this.qi=e,this.indexManager=t,this.Li=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ui(e,t).next((i=>i||this.Ki(e,t,r,n))).next((n=>n||this.Gi(e,t)))}Ui(e,t){if(ha(t))return Gi.resolve(null);let n=ga(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=va(t,null,"F"),n=ga(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Pa(...r);return this.qi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Qi(t,r);return this.ji(t,s,i,n.readTime)?this.Ui(e,va(t,null,"F")):this.zi(e,s,t,n)}))))})))))}Ki(e,t,n,r){return ha(t)||r.isEqual(Ai.min())?this.Gi(e,t):this.qi.getDocuments(e,n).next((i=>{const s=this.Qi(t,i);return this.ji(t,s,n,r)?this.Gi(e,t):(ti()<=a["in"].DEBUG&&ri("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_a(t)),this.zi(e,s,t,Ui(r,-1)))}))}Qi(e,t){let n=new $s(Sa(e));return t.forEach(((t,r)=>{Ea(e,r)&&(n=n.add(r))})),n}ji(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,t){return ti()<=a["in"].DEBUG&&ri("QueryEngine","Using full collection scan to execute query:",_a(t)),this.qi.getDocumentsMatchingQuery(e,t,ji.min())}zi(e,t,n,r){return this.qi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t,n,r){this.persistence=e,this.Wi=t,this.serializer=r,this.Hi=new Bs(Si),this.Ji=new xa((e=>na(e)),ra),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(n)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yl(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Hi)))}}function bh(e,t,n,r){return new wh(e,t,n,r)}async function _h(e,t){const n=li(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Zi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Pa();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({tr:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Eh(e,t){const n=li(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Gi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ci(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Pa();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Ih(e){const t=li(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Fs.getLastRemoteSnapshotVersion(e)))}function Sh(e,t){const n=li(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Fs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Fs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Ws.EMPTY_BYTE_STRING,Ai.min()).withLastLimboFreeSnapshotVersion(Ai.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Fs.updateTargetData(e,u))}));let a=Aa(),c=Pa();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Th(e,s,t.documentUpdates).next((e=>{a=e.er,c=e.nr}))),!r.isEqual(Ai.min())){const t=n.Fs.getLastRemoteSnapshotVersion(e).next((t=>n.Fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Gi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Hi=i,e)))}function Th(e,t,n){let r=Pa(),i=Pa();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Aa();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ai.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ri("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{er:r,nr:i}}))}function xh(e,t){const n=li(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ch(e,t){const n=li(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Fs.getTargetData(e,t).next((i=>i?(r=i,Gi.resolve(r)):n.Fs.allocateTargetId(e).next((i=>(r=new Cu(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Hi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(e.targetId,e),n.Ji.set(t,e.targetId)),e}))}async function Ah(e,t,n){const r=li(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Ji(e))throw e;ri("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function Dh(e,t,n){const r=li(e);let i=Ai.min(),s=Pa();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=li(e),i=r.Ji.get(n);return void 0!==i?Gi.resolve(r.Hi.get(i)):r.Fs.getTargetData(t,n)}(r,e,ga(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Wi.getDocumentsMatchingQuery(e,t,n?i:Ai.min(),n?s:Pa()))).next((e=>(Rh(r,Ia(t),e),{documents:e,sr:s})))))}function kh(e,t){const n=li(e),r=li(n.Fs),i=n.Hi.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.he(e,t).next((e=>e?e.target:null))))}function Nh(e,t){const n=li(e),r=n.Yi.get(t)||Ai.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Xi.getAllFromCollectionGroup(e,t,Ui(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Rh(n,t,e),e)))}function Rh(e,t,n){let r=e.Yi.get(t)||Ai.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Yi.set(t,r)}async function Oh(e,t,n,r){const i=li(e);let s=Pa(),o=Aa();for(const u of n){const e=t.ir(u.metadata.name);u.document&&(s=s.add(e));const n=t.rr(u);n.setReadTime(t.ur(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await Ch(i,function(e){return ga(la(ki.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Th(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Fs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Fs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.er,t.nr))).next((()=>t.er))))))}async function Fh(e,t,n=Pa()){const r=await Ch(e,ga(Pu(t.bundledQuery))),i=li(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Yc(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ls.saveNamedQuery(e,t);const o=r.withResumeToken(Ws.EMPTY_BYTE_STRING,s);return i.Hi=i.Hi.insert(o.targetId,o),i.Fs.updateTargetData(e,o).next((()=>i.Fs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Fs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ls.saveNamedQuery(e,t)))}))}function Lh(e,t){return`firestore_clients_${e}_${t}`}function Mh(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Ph(e,t){return`firestore_targets_${e}_${t}`}class Vh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static cr(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new di(r.error.code,r.error.message))),s?new Vh(e,t,r.state,i):(ii("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Uh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static cr(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new di(n.error.code,n.error.message))),i?new Uh(e,n.state,r):(ii("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cr(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Ua();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=as(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Bh(e,i):(ii("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class jh{constructor(e,t){this.clientId=e,this.onlineState=t}static cr(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new jh(t.clientId,t.onlineState):(ii("SharedClientState",`Failed to parse online state: ${e}`),null)}}class qh{constructor(){this.activeTargetIds=Ua()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $h{constructor(e,t,n,r,i){this.window=e,this.si=t,this.persistenceKey=n,this.dr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new Bs(Si),this.started=!1,this.gr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.yr=Lh(this.persistenceKey,this.dr),this.pr=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.mr=this.mr.insert(this.dr,new qh),this.Ir=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Ar=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Rr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const n of e){if(n===this.dr)continue;const e=this.getItem(Lh(this.persistenceKey,n));if(e){const t=Bh.cr(n,e);t&&(this.mr=this.mr.insert(t.clientId,t))}}this.vr();const t=this.storage.getItem(this.Ar);if(t){const e=this.Pr(t);e&&this.br(e)}for(const n of this.gr)this.wr(n);this.gr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let t=!1;return this.mr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,t,n){this.Sr(e,t,n),this.Dr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Ph(this.persistenceKey,e));if(n){const r=Uh.cr(e,n);r&&(t=r.state)}}return this.Cr.hr(e),this.vr(),t}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ph(this.persistenceKey,e))}updateQueryState(e,t,n){this.Nr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Dr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ri("SharedClientState","READ",e,t),t}setItem(e,t){ri("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ri("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const t=e;if(t.storageArea===this.storage){if(ri("SharedClientState","EVENT",t.key,t.newValue),t.key===this.yr)return void ii("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ir.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.$r(e,null)}{const e=this.Fr(t.key,t.newValue);if(e)return this.$r(e.clientId,e)}}else if(this.Tr.test(t.key)){if(null!==t.newValue){const e=this.Br(t.key,t.newValue);if(e)return this.Lr(e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.qr(t.key,t.newValue);if(e)return this.Ur(e)}}else if(t.key===this.Ar){if(null!==t.newValue){const e=this.Pr(t.newValue);if(e)return this.br(e)}}else if(t.key===this.pr){const e=function(e){let t=is.ct;if(null!=e)try{const n=JSON.parse(e);ci("number"==typeof n),t=n}catch(e){ii("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==is.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Kr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Gr(e))))}}else this.gr.push(t)}))}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,t,n){const r=new Vh(this.currentUser,e,t,n),i=Mh(this.persistenceKey,this.currentUser,e);this.setItem(i,r.ar())}Dr(e){const t=Mh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}kr(e){const t={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(t))}Nr(e,t,n){const r=Ph(this.persistenceKey,e),i=new Uh(e,t,n);this.setItem(r,i.ar())}Mr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Ir.exec(e);return t?t[1]:null}Fr(e,t){const n=this.Or(e);return Bh.cr(n,t)}Br(e,t){const n=this.Tr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Vh.cr(new Yr(i),r,t)}qr(e,t){const n=this.Er.exec(e),r=Number(n[1]);return Uh.cr(r,t)}Pr(e){return jh.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);ri("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,t){const n=t?this.mr.insert(e,t):this.mr.remove(e),r=this.Vr(this.mr),i=this.Vr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.zr(s,o).then((()=>{this.mr=n}))}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let t=Ua();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class zh{constructor(){this.Wr=new qh,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,t,n){this.Hr[e]=t}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new qh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{Jr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ri("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){ri("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh=null;function Qh(){return null===Hh?Hh=268435456+Math.round(2147483648*Math.random()):Hh++,"0x"+Hh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Wh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="WebChannelConnection";class Yh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.wo=t+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,t,n,r,i){const s=Qh(),o=this.Io(e,t);ri("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.To(a,r,i),this.Eo(e,o,a,n).then((t=>(ri("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw si("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Ao(e,t,n,r,i,s){return this.po(e,t,n,r,i)}To(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Io(e,t){const n=Wh[e];return`${this.wo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,t,n,r){const i=Qh();return new Promise(((s,o)=>{const a=new Qr;a.setWithCredentials(!0),a.listenOnce($r.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case qr.NO_ERROR:const t=a.getResponseJson();ri(Jh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case qr.TIMEOUT:ri(Jh,`RPC '${e}' ${i} timed out`),o(new di(hi.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const n=a.getStatus();if(ri(Jh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(hi).indexOf(t)>=0?t:hi.UNKNOWN}(t.status);o(new di(e,t.message))}else o(new di(hi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new di(hi.UNAVAILABLE,"Connection failed."));break;default:ai()}}finally{ri(Jh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);ri(Jh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=Qh(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Br(),o=jr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Gr({})),this.To(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");ri(Jh,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new Xh({io:t=>{h?ri(Jh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(ri(Jh,`Opening RPC '${e}' stream ${r} transport.`),u.open(),l=!0),ri(Jh,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},ro:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Hr.EventType.OPEN,(()=>{h||ri(Jh,`RPC '${e}' stream ${r} transport opened.`)})),f(u,Hr.EventType.CLOSE,(()=>{h||(h=!0,ri(Jh,`RPC '${e}' stream ${r} transport closed`),d.fo())})),f(u,Hr.EventType.ERROR,(t=>{h||(h=!0,si(Jh,`RPC '${e}' stream ${r} transport errored:`,t),d.fo(new di(hi.UNAVAILABLE,"The operation could not be completed")))})),f(u,Hr.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];ci(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ri(Jh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Ic[e];if(void 0!==t)return xc(t)}(t),i=o.message;void 0===n&&(n=hi.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,d.fo(new di(n,i)),u.close()}else ri(Jh,`RPC '${e}' stream ${r} received:`,i),d._o(i)}})),f(o,zr.STAT_EVENT,(t=>{t.stat===Kr.PROXY?ri(Jh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Kr.NOPROXY&&ri(Jh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.lo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(){return"undefined"!=typeof window?window:null}function ed(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(e){return new Hc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.vo=n,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const t=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),r=Math.max(0,t-n);r>0&&ri("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Do=Date.now(),e()))),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,n,r,i,s,o,a){this.si=e,this.Mo=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new nd(e,t)}qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,(()=>this.jo())))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,t){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==e?this.Lo.reset():t&&t.code===hi.RESOURCE_EXHAUSTED?(ii(t.toString()),ii("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):t&&t.code===hi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),t=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.$o===t&&this.Xo(e,n)}),(t=>{e((()=>{const e=new di(hi.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Zo(e)}))}))}Xo(e,t){const n=this.Yo(this.$o);this.stream=this.tu(e,t),this.stream.oo((()=>{n((()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener.oo())))})),this.stream.co((e=>{n((()=>this.Zo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Ko(){this.state=5,this.Lo.xo((async()=>{this.state=0,this.start()}))}Zo(e){return ri("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return t=>{this.si.enqueueAndForget((()=>this.$o===e?t():(ri("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class id extends rd{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}tu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.Lo.reset();const t=lu(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ai.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ai.min():t.readTime?Yc(t.readTime):Ai.min()}(e);return this.listener.eu(t,n)}nu(e){const t={};t.database=su(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ia(r)?{documents:pu(e,r)}:{query:mu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Xc(e,t.resumeToken);const r=Qc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ai.min())>0){n.readTime=Wc(e,t.snapshotVersion.toTimestamp());const r=Qc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=yu(this.serializer,e);n&&(t.labels=n),this.zo(t)}su(e){const t={};t.database=su(this.serializer),t.removeTarget=e,this.zo(t)}}class sd extends rd{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ci(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const t=fu(e.writeResults,e.commitTime),n=Yc(e.commitTime);return this.listener.uu(n,t)}return ci(!e.writeResults||0===e.writeResults.length),this.iu=!0,this.listener.cu()}au(){const e={};e.database=su(this.serializer),this.zo(e)}ou(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>hu(this.serializer,e)))};this.zo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new di(hi.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,t,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.po(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new di(hi.UNKNOWN,e.toString())}))}Ao(e,t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Ao(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new di(hi.UNKNOWN,e.toString())}))}terminate(){this.hu=!0}}class ad{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve()))))}pu(e){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,"Online"===e&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(ii(t),this.wu=!1):ri("OnlineStateTracker",t)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr((e=>{n.enqueueAndForget((async()=>{yd(this)&&(ri("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=li(e);t.Au.add(4),await ld(t),t.Pu.set("Unknown"),t.Au.delete(4),await ud(t)}(this))}))})),this.Pu=new ad(n,r)}}async function ud(e){if(yd(e))for(const t of e.Ru)await t(!0)}async function ld(e){for(const t of e.Ru)await t(!1)}function hd(e,t){const n=li(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),gd(n)?md(n):Ld(n).Uo()&&fd(n,t))}function dd(e,t){const n=li(e),r=Ld(n);n.Eu.delete(t),r.Uo()&&pd(n,t),0===n.Eu.size&&(r.Uo()?r.Qo():yd(n)&&n.Pu.set("Unknown"))}function fd(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ai.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ld(e).nu(t)}function pd(e,t){e.bu.Lt(t),Ld(e).su(t)}function md(e){e.bu=new jc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Ld(e).start(),e.Pu.mu()}function gd(e){return yd(e)&&!Ld(e).qo()&&e.Eu.size>0}function yd(e){return 0===li(e).Au.size}function vd(e){e.bu=void 0}async function wd(e){e.Eu.forEach(((t,n)=>{fd(e,t)}))}async function bd(e,t){vd(e),gd(e)?(e.Pu.pu(t),md(e)):e.Pu.set("Unknown")}async function _d(e,t,n){if(e.Pu.set("Online"),t instanceof Uc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Eu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Eu.delete(r),e.bu.removeTarget(r))}(e,t)}catch(n){ri("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ed(e,n)}else if(t instanceof Pc?e.bu.Wt(t):t instanceof Vc?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Ai.min()))try{const t=await Ih(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.bu.ue(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Eu.get(r);i&&e.Eu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Eu.get(t);if(!r)return;e.Eu.set(t,r.withResumeToken(Ws.EMPTY_BYTE_STRING,r.snapshotVersion)),pd(e,t);const i=new Cu(r.target,t,n,r.sequenceNumber);fd(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ri("RemoteStore","Failed to raise snapshot:",t),await Ed(e,t)}}async function Ed(e,t,n){if(!Ji(t))throw t;e.Au.add(1),await ld(e),e.Pu.set("Offline"),n||(n=()=>Ih(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ri("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await ud(e)}))}function Id(e,t){return t().catch((n=>Ed(e,n,t)))}async function Sd(e){const t=li(e),n=Md(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;Td(t);)try{const e=await xh(t.localStore,r);if(null===e){0===t.Tu.length&&n.Qo();break}r=e.batchId,xd(t,e)}catch(e){await Ed(t,e)}Cd(t)&&Ad(t)}function Td(e){return yd(e)&&e.Tu.length<10}function xd(e,t){e.Tu.push(t);const n=Md(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function Cd(e){return yd(e)&&!Md(e).qo()&&e.Tu.length>0}function Ad(e){Md(e).start()}async function Dd(e){Md(e).au()}async function kd(e){const t=Md(e);for(const n of e.Tu)t.ou(n.mutations)}async function Nd(e,t,n){const r=e.Tu.shift(),i=bc.from(r,t,n);await Id(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Sd(e)}async function Rd(e,t){t&&Md(e).ru&&await async function(e,t){if(n=t.code,Tc(n)&&n!==hi.ABORTED){const n=e.Tu.shift();Md(e).Go(),await Id(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Sd(e)}var n}(e,t),Cd(e)&&Ad(e)}async function Od(e,t){const n=li(e);n.asyncQueue.verifyOperationInProgress(),ri("RemoteStore","RemoteStore received new credentials");const r=yd(n);n.Au.add(3),await ld(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await ud(n)}async function Fd(e,t){const n=li(e);t?(n.Au.delete(2),await ud(n)):t||(n.Au.add(2),await ld(n),n.Pu.set("Unknown"))}function Ld(e){return e.Vu||(e.Vu=function(e,t,n){const r=li(e);return r.lu(),new id(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{oo:wd.bind(null,e),co:bd.bind(null,e),eu:_d.bind(null,e)}),e.Ru.push((async t=>{t?(e.Vu.Go(),gd(e)?md(e):e.Pu.set("Unknown")):(await e.Vu.stop(),vd(e))}))),e.Vu}function Md(e){return e.Su||(e.Su=function(e,t,n){const r=li(e);return r.lu(),new sd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{oo:Dd.bind(null,e),co:Rd.bind(null,e),cu:kd.bind(null,e),uu:Nd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Go(),await Sd(e)):(await e.Su.stop(),e.Tu.length>0&&(ri("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))}))),e.Su
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Pd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Pd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new di(hi.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vd(e,t){if(ii("AsyncQueue",`${t}: ${e}`),Ji(e))return new di(hi.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Oi.comparator(t.key,n.key):(e,t)=>Oi.comparator(e.key,t.key),this.keyedMap=ka(),this.sortedSet=new Bs(this.comparator)}static emptySet(e){return new Ud(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ud))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ud;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.Du=new Bs(Oi.comparator)}track(e){const t=e.doc.key,n=this.Du.get(t);n?0!==e.type&&3===n.type?this.Du=this.Du.insert(t,e):3===e.type&&1!==n.type?this.Du=this.Du.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Du=this.Du.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Du=this.Du.remove(t):1===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):ai():this.Du=this.Du.insert(t,e)}Cu(){const e=[];return this.Du.inorderTraversal(((t,n)=>{e.push(n)})),e}}class jd{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new jd(e,t,Ud.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.xu=void 0,this.listeners=[]}}class $d{constructor(){this.queries=new xa((e=>ba(e)),wa),this.onlineState="Unknown",this.Nu=new Set}}async function zd(e,t){const n=li(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qd),i)try{s.xu=await n.onListen(r)}catch(e){const n=Vd(e,`Initialization of query '${_a(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&Qd(n)}async function Kd(e,t){const n=li(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Gd(e,t){const n=li(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Mu(i)&&(r=!0);t.xu=i}}r&&Qd(n)}function Hd(e,t,n){const r=li(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Qd(e){e.Nu.forEach((e=>{e.next()}))}class Wd{constructor(e,t,n){this.query=e,this.Ou=t,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=n||{}}Mu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new jd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.qu(e),t=!0),this.Fu=e,t}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let t=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),t=!0),t}Lu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Uu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Bu(e){if(e.docChanges.length>0)return!0;const t=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qu(e){e=jd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.Ku=e,this.byteLength=t}Gu(){return"metadata"in this.Ku}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.serializer=e}ir(e){return nu(this.serializer,e)}rr(e){return e.metadata.exists?cu(this.serializer,e.document,!1):Do.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return Yc(e)}}class Yd{constructor(e,t,n){this.Qu=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Zd(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++t;const n=ki.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}zu(e){const t=new Map,n=new Jd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.ir(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Pa()).add(e);t.set(n,r)}}return t}async complete(){const e=await Oh(this.localStore,new Jd(this.serializer),this.documents,this.Qu.id),t=this.zu(this.documents);for(const n of this.queries)await Fh(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function Zd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.key=e}}class tf{constructor(e){this.key=e}}class nf{constructor(e,t){this.query=e,this.Ju=t,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Pa(),this.mutatedKeys=Pa(),this.Zu=Sa(e),this.tc=new Ud(this.Zu)}get ec(){return this.Ju}nc(e,t){const n=t?t.sc:new Bd,r=t?t.tc:this.tc;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ea(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ic(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Zu(l,a)>0||c&&this.Zu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tc:s,sc:n,ji:o,mutatedKeys:i}}ic(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ai()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Zu(e.doc,t.doc))),this.rc(n);const s=t?this.oc():[],o=0===this.Xu.size&&this.current?1:0,a=o!==this.Yu;return this.Yu=o,0!==i.length||a?{snapshot:new jd(this.query,e.tc,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),uc:s}:{uc:s}}ku(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Bd,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach((e=>this.Ju=this.Ju.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ju=this.Ju.delete(e))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Pa(),this.tc.forEach((e=>{this.cc(e.key)&&(this.Xu=this.Xu.add(e.key))}));const t=[];return e.forEach((e=>{this.Xu.has(e)||t.push(new tf(e))})),this.Xu.forEach((n=>{e.has(n)||t.push(new ef(n))})),t}ac(e){this.Ju=e.sr,this.Xu=Pa();const t=this.nc(e.documents);return this.applyChanges(t,!0)}hc(){return jd.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}}class rf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class sf{constructor(e){this.key=e,this.lc=!1}}class of{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fc={},this.dc=new xa((e=>ba(e)),wa),this._c=new Map,this.wc=new Set,this.mc=new Bs(Oi.comparator),this.gc=new Map,this.yc=new th,this.Ic={},this.Tc=new Map,this.Ec=kl.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return!0===this.Ac}}async function af(e,t){const n=Mf(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const e=await Ch(n.localStore,ga(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await cf(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&hd(n.remoteStore,e)}return i}async function cf(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.nc(n);i.ji&&(i=await Dh(e.localStore,t.query,!1).then((({documents:e})=>t.view.nc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return _f(e,t.targetId,o.uc),o.snapshot}(e,t,n,r);const s=await Dh(e.localStore,t,!0),o=new nf(t,s.sr),a=o.nc(s.documents),c=Mc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);_f(e,n,u.uc);const l=new rf(t,n,o);return e.dc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function uf(e,t){const n=li(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!wa(e,t)))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ah(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),dd(n.remoteStore,r.targetId),wf(n,r.targetId)})).catch(Ki)):(wf(n,r.targetId),await Ah(n.localStore,r.targetId,!0))}async function lf(e,t,n){const r=Pf(e);try{const e=await function(e,t){const n=li(e),r=Ci.now(),i=t.reduce(((e,t)=>e.add(t.key)),Pa());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Aa(),c=Pa();return n.Xi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=lc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new fc(e.key,t,Ao(t.value.mapValue),ic.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Na(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ic[e.currentUser.toKey()];r||(r=new Bs(Si)),r=r.insert(t,n),e.Ic[e.currentUser.toKey()]=r}(r,e.batchId,n),await Sf(r,e.changes),await Sd(r.remoteStore)}catch(e){const t=Vd(e,"Failed to persist write");n.reject(t)}}async function hf(e,t){const n=li(e);try{const e=await Sh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.gc.get(t);r&&(ci(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.lc=!0:e.modifiedDocuments.size>0?ci(r.lc):e.removedDocuments.size>0&&(ci(r.lc),r.lc=!1))})),await Sf(n,e,t)}catch(e){await Ki(e)}}function df(e,t,n){const r=li(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.dc.forEach(((n,r)=>{const i=r.view.ku(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=li(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.ku(t)&&(r=!0)})),r&&Qd(n)}(r.eventManager,t),e.length&&r.fc.eu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ff(e,t,n){const r=li(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let e=new Bs(Oi.comparator);e=e.insert(s,Do.newNoDocument(s,Ai.min()));const n=Pa().add(s),i=new Lc(Ai.min(),new Map,new Bs(Si),e,n);await hf(r,i),r.mc=r.mc.remove(s),r.gc.delete(t),If(r)}else await Ah(r.localStore,t,!1).then((()=>wf(r,t,n))).catch(Ki)}async function pf(e,t){const n=li(e),r=t.batch.batchId;try{const e=await Eh(n.localStore,t);vf(n,r,null),yf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sf(n,e)}catch(e){await Ki(e)}}async function mf(e,t,n){const r=li(e);try{const e=await function(e,t){const n=li(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ci(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);vf(r,t,n),yf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Sf(r,e)}catch(n){await Ki(n)}}async function gf(e,t){const n=li(e);yd(n.remoteStore)||ri("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=li(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Tc.get(e)||[];r.push(t),n.Tc.set(e,r)}catch(e){const n=Vd(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function yf(e,t){(e.Tc.get(t)||[]).forEach((e=>{e.resolve()})),e.Tc.delete(t)}function vf(e,t,n){const r=li(e);let i=r.Ic[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function wf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach((t=>{e.yc.containsKey(t)||bf(e,t)}))}function bf(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);null!==n&&(dd(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),If(e))}function _f(e,t,n){for(const r of n)r instanceof ef?(e.yc.addReference(r.key,t),Ef(e,r)):r instanceof tf?(ri("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||bf(e,r.key)):ai()}function Ef(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ri("SyncEngine","New document in limbo: "+n),e.wc.add(r),If(e))}function If(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new Oi(ki.fromString(t)),r=e.Ec.next();e.gc.set(r,new sf(n)),e.mc=e.mc.insert(n,r),hd(e.remoteStore,new Cu(ga(la(n.path)),r,"TargetPurposeLimboResolution",is.ct))}}async function Sf(e,t,n){const r=li(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=yh.Bi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.fc.eu(i),await async function(e,t){const n=li(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Gi.forEach(t,(t=>Gi.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Gi.forEach(t.Fi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Ji(e))throw e;ri("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Hi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Hi=n.Hi.insert(e,i)}}}(r.localStore,s))}async function Tf(e,t){const n=li(e);if(!n.currentUser.isEqual(t)){ri("SyncEngine","User change. New user:",t.toKey());const e=await _h(n.localStore,t);n.currentUser=t,function(e,t){e.Tc.forEach((e=>{e.forEach((e=>{e.reject(new di(hi.CANCELLED,t))}))})),e.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Sf(n,e.tr)}}function xf(e,t){const n=li(e),r=n.gc.get(t);if(r&&r.lc)return Pa().add(r.key);{let e=Pa();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.dc.get(t);e=e.unionWith(r.view.ec)}return e}}async function Cf(e,t){const n=li(e),r=await Dh(n.localStore,t.query,!0),i=t.view.ac(r);return n.isPrimaryClient&&_f(n,t.targetId,i.uc),i}async function Af(e,t){const n=li(e);return Nh(n.localStore,t).then((e=>Sf(n,e)))}async function Df(e,t,n,r){const i=li(e),s=await function(e,t){const n=li(e),r=li(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Vn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Gi.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Sd(i.remoteStore):"acknowledged"===n||"rejected"===n?(vf(i,t,r||null),yf(i,t),function(e,t){li(li(e).mutationQueue).Dn(t)}(i.localStore,t)):ai(),await Sf(i,s)):ri("SyncEngine","Cannot apply mutation batch with id: "+t)}async function kf(e,t){const n=li(e);if(Mf(n),Pf(n),!0===t&&!0!==n.Ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Nf(n,e.toArray());n.Ac=!0,await Fd(n.remoteStore,!0);for(const r of t)hd(n.remoteStore,r)}else if(!1===t&&!1!==n.Ac){const e=[];let t=Promise.resolve();n._c.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(wf(n,i),Ah(n.localStore,i,!0)))),dd(n.remoteStore,i)})),await t,await Nf(n,e),function(e){const t=li(e);t.gc.forEach(((e,n)=>{dd(t.remoteStore,n)})),t.yc.Is(),t.gc=new Map,t.mc=new Bs(Oi.comparator)}(n),n.Ac=!1,await Fd(n.remoteStore,!1)}}async function Nf(e,t,n){const r=li(e),i=[],s=[];for(const o of t){let e;const t=r._c.get(o);if(t&&0!==t.length){e=await Ch(r.localStore,ga(t[0]));for(const e of t){const t=r.dc.get(e),n=await Cf(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await kh(r.localStore,o);e=await Ch(r.localStore,t),await cf(r,Rf(t),o,!1,e.resumeToken)}i.push(e)}return r.fc.eu(s),i}function Rf(e){return ua(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Of(e){const t=li(e);return li(li(t.localStore).persistence).Mi()}async function Ff(e,t,n,r){const i=li(e);if(i.Ac)return void ri("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Nh(i.localStore,Ia(s[0])),r=Lc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Ws.EMPTY_BYTE_STRING);await Sf(i,e,r);break}case"rejected":await Ah(i.localStore,t,!0),wf(i,t,r);break;default:ai()}}async function Lf(e,t,n){const r=Mf(e);if(r.Ac){for(const e of t){if(r._c.has(e)){ri("SyncEngine","Adding an already active target "+e);continue}const t=await kh(r.localStore,e),n=await Ch(r.localStore,t);await cf(r,Rf(t),n.targetId,!1,n.resumeToken),hd(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await Ah(r.localStore,e,!1).then((()=>{dd(r.remoteStore,e),wf(r,e)})).catch(Ki)}}function Mf(e){const t=li(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=hf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ff.bind(null,t),t.fc.eu=Gd.bind(null,t.eventManager),t.fc.vc=Hd.bind(null,t.eventManager),t}function Pf(e){const t=li(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mf.bind(null,t),t}function Vf(e,t,n){const r=li(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=li(e),r=Yc(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ls.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Zd(r));const i=new Yd(r,e.localStore,t.serializer);let s=await t.Pc();for(;s;){const e=await i.ju(s);e&&n._updateProgress(e),s=await t.Pc()}const o=await i.complete();return await Sf(e,o.Hu,void 0),await function(e,t){const n=li(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ls.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Wu)}catch(e){return si("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Uf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=td(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return bh(this.persistence,new vh,e.initialUser,this.serializer)}createPersistence(e){return new ah(uh.js,this.serializer)}createSharedClientState(e){return new zh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bf extends Uf{constructor(e,t,n){super(),this.bc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await Pf(this.bc.syncEngine),await Sd(this.bc.remoteStore),await this.persistence.pi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return bh(this.persistence,new vh,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Pl(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new rs(t,this.persistence);return new ns(e.asyncQueue,n)}createPersistence(e){const t=gh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?El.withCacheSize(this.cacheSizeBytes):El.DEFAULT;return new fh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Zh(),ed(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new zh}}class jf extends Bf{constructor(e,t){super(e,t,!1),this.bc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.bc.syncEngine;this.sharedClientState instanceof $h&&(this.sharedClientState.syncEngine={Qr:Df.bind(null,t),jr:Ff.bind(null,t),zr:Lf.bind(null,t),Mi:Of.bind(null,t),Gr:Af.bind(null,t)},await this.sharedClientState.start()),await this.persistence.pi((async e=>{await kf(this.bc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Zh();if(!$h.D(t))throw new di(hi.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=gh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new $h(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class qf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>df(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tf.bind(null,this.syncEngine),await Fd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $d}createDatastore(e){const t=td(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Yh(r));var r;return function(e,t,n,r){return new od(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>df(this.syncEngine,e,0),s=Gh.D()?new Gh:new Kh,new cd(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new of(e,t,n,r,i,s);return o&&(a.Ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=li(e);ri("RemoteStore","RemoteStore shutting down."),t.Au.add(5),await ld(t),t.vu.shutdown(),t.Pu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):ii("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t){this.Dc=e,this.serializer=t,this.metadata=new fi,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then((e=>{e&&e.Gu()?this.metadata.resolve(e.Ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Ku)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){const e=await this.Nc();if(null===e)return null;const t=this.Cc.decode(e),n=Number(t);isNaN(n)&&this.kc(`length string (${t}) is not valid number`);const r=await this.Mc(n);return new Xd(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Nc(){for(;this.Oc()<0;)if(await this.$c())break;if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");const t=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}kc(e){throw this.Dc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Dc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new di(hi.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=li(e),r=su(n.serializer)+"/documents",i={documents:t.map((e=>tu(n.serializer,e)))},s=await n.Ao("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=uu(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());ci(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new yc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Oi.fromPath(t);this.mutations.push(new vc(n,this.precondition(n)))})),await async function(e,t){const n=li(e),r=su(n.serializer)+"/documents",i={writes:t.map((e=>hu(n.serializer,e)))};await n.po("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ai();t=Ai.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new di(hi.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ai.min())?ic.exists(!1):ic.updateTime(t):ic.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ai.min()))throw new di(hi.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ic.updateTime(t)}return ic.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Fc=n.maxAttempts,this.Lo=new nd(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo((async()=>{const e=new Gf(this.datastore),t=this.Lc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.qc(e)}))))})).catch((e=>{this.qc(e)}))}))}Lc(e){try{const t=this.updateFunction(e);return!ss(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Bc(),Promise.resolve())))):this.deferred.reject(e)}Uc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Tc(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Yr.UNAUTHENTICATED,this.clientId=Ii.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ri("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ri("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new di(hi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Vd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress(),ri("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await _h(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Xf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Yf(e);ri("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Od(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Od(t.remoteStore,n))),e._onlineComponents=t}function Jf(e){return"FirebaseError"===e.name?e.code===hi.FAILED_PRECONDITION||e.code===hi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Yf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ri("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Jf(n))throw n;si("Error using user provided cache. Falling back to memory cache: "+n),await Wf(e,new Uf)}}else ri("FirestoreClient","Using default OfflineComponentProvider"),await Wf(e,new Uf);return e._offlineComponents}async function Zf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ri("FirestoreClient","Using user provided OnlineComponentProvider"),await Xf(e,e._uninitializedComponentsProvider._online)):(ri("FirestoreClient","Using default OnlineComponentProvider"),await Xf(e,new qf))),e._onlineComponents}function ep(e){return Yf(e).then((e=>e.persistence))}function tp(e){return Yf(e).then((e=>e.localStore))}function np(e){return Zf(e).then((e=>e.remoteStore))}function rp(e){return Zf(e).then((e=>e.syncEngine))}function ip(e){return Zf(e).then((e=>e.datastore))}async function sp(e){const t=await Zf(e),n=t.eventManager;return n.onListen=af.bind(null,t.syncEngine),n.onUnlisten=uf.bind(null,t.syncEngine),n}function op(e){return e.asyncQueue.enqueue((async()=>{const t=await ep(e),n=await np(e);return t.setNetworkEnabled(!0),function(e){const t=li(e);return t.Au.delete(0),ud(t)}(n)}))}function ap(e){return e.asyncQueue.enqueue((async()=>{const t=await ep(e),n=await np(e);return t.setNetworkEnabled(!1),async function(e){const t=li(e);t.Au.add(0),await ld(t),t.Pu.set("Offline")}(n)}))}function cp(e,t){const n=new fi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=li(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new di(hi.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Vd(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await tp(e),t,n))),n.promise}function up(e,t,n={}){const r=new fi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new zf({next:s=>{t.enqueueAndForget((()=>Kd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new di(hi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new di(hi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Wd(la(n.path),s,{includeMetadataChanges:!0,Uu:!0});return zd(e,o)}(await sp(e),e.asyncQueue,t,n,r))),r.promise}function lp(e,t){const n=new fi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Dh(e,t,!0),i=new nf(t,r.sr),s=i.nc(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Vd(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await tp(e),t,n))),n.promise}function hp(e,t,n={}){const r=new fi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new zf({next:n=>{t.enqueueAndForget((()=>Kd(e,o))),n.fromCache&&"server"===r.source?i.reject(new di(hi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Wd(n,s,{includeMetadataChanges:!0,Uu:!0});return zd(e,o)}(await sp(e),e.asyncQueue,t,n,r))),r.promise}function dp(e,t){const n=new zf(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){li(e).Nu.add(t),t.next()}(await sp(e),n))),()=>{n.Sc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){li(e).Nu.delete(t)}(await sp(e),n)))}}function fp(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?Dc().encode(e):e,function(e,t){return new Kf(e,t)}(function(e,t){if(e instanceof Uint8Array)return $f(e,t);if(e instanceof ArrayBuffer)return $f(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,td(t));e.asyncQueue.enqueueAndForget((async()=>{Vf(await rp(e),i,r)}))}function pp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=li(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ls.getNamedQuery(e,t)))}(await tp(e),t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e,t,n){if(!n)throw new di(hi.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function yp(e,t,n,r){if(!0===t&&!0===r)throw new di(hi.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function vp(e){if(!Oi.isDocumentKey(e))throw new di(hi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function wp(e){if(Oi.isDocumentKey(e))throw new di(hi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function bp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ai()}function _p(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new di(hi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bp(e);throw new di(hi.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Ep(e,t){if(t<=0)throw new di(hi.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new di(hi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new di(hi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling||void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new di(hi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new di(hi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ip(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new mi;switch(e.type){case"firstParty":return new wi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new di(hi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=mp.get(e);t&&(ri("ComponentProvider","Removing Datastore"),mp.delete(e),t.terminate())}(this),Promise.resolve()}}function Tp(e,t,n,r={}){var i;const s=(e=_p(e,Sp))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&si("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Yr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new di(hi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Yr(s)}e._authCredentials=new gi(new pi(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ap(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xp(this.firestore,e,this._key)}}class Cp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Cp(this.firestore,e,this._query)}}class Ap extends Cp{constructor(e,t,n){super(e,t,la(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xp(this.firestore,null,new Oi(e))}withConverter(e){return new Ap(this.firestore,e,this._path)}}function Dp(e,t,...n){if(e=(0,c.m9)(e),gp("collection","path",t),e instanceof Sp){const r=ki.fromString(t,...n);return wp(r),new Ap(e,null,r)}{if(!(e instanceof xp||e instanceof Ap))throw new di(hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ki.fromString(t,...n));return wp(r),new Ap(e.firestore,null,r)}}function kp(e,t){if(e=_p(e,Sp),gp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new di(hi.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cp(e,null,function(e){return new ca(ki.emptyPath(),e)}(t))}function Np(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=Ii.A()),gp("doc","path",t),e instanceof Sp){const r=ki.fromString(t,...n);return vp(r),new xp(e,null,new Oi(r))}{if(!(e instanceof xp||e instanceof Ap))throw new di(hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ki.fromString(t,...n));return vp(r),new xp(e.firestore,e instanceof Ap?e.converter:null,new Oi(r))}}function Rp(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof xp||e instanceof Ap)&&(t instanceof xp||t instanceof Ap)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Op(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Cp&&t instanceof Cp&&e.firestore===t.firestore&&wa(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Fp{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new nd(this,"async_queue_retry"),this.Yc=()=>{const e=ed();e&&ri("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Lo.ko()};const e=ed();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=ed();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise((()=>{}));const t=new fi;return this.Zc((()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Gc.push(e),this.ta())))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Ji(e))throw e;ri("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo((()=>this.ta()))}}Zc(e){const t=this.Kc.then((()=>(this.Wc=!0,e().catch((e=>{this.zc=e,this.Wc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ii("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Wc=!1,e))))));return this.Kc=t,t}enqueueAfterDelay(e,t,n){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const r=Pd.createAndSchedule(this,e,t,n,(e=>this.ea(e)));return this.jc.push(r),r}Xc(){this.zc&&ai()}verifyOperationInProgress(){}async na(){let e;do{e=this.Kc,await e}while(e!==this.Kc)}sa(e){for(const t of this.jc)if(t.timerId===e)return!0;return!1}ia(e){return this.na().then((()=>{this.jc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.jc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.na()}))}ra(e){this.Jc.push(e)}ea(e){const t=this.jc.indexOf(e);this.jc.splice(t,1)}}function Lp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Mp{constructor(){this._progressObserver={},this._taskCompletionResolver=new fi,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=-1;class Vp extends Sp{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Fp,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bp(this),this._firestoreClient.terminate()}}function Up(e){return e._firestoreClient||Bp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Bp(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new ro(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Qf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function jp(e,t){Xp(e=_p(e,Vp));const n=Up(e);if(n._uninitializedComponentsProvider)throw new di(hi.FAILED_PRECONDITION,"SDK cache is already specified.");si("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new qf;return $p(n,i,new Bf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function qp(e){Xp(e=_p(e,Vp));const t=Up(e);if(t._uninitializedComponentsProvider)throw new di(hi.FAILED_PRECONDITION,"SDK cache is already specified.");si("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new qf;return $p(t,r,new jf(r,n.cacheSizeBytes))}function $p(e,t,n){const r=new fi;return e.asyncQueue.enqueue((async()=>{try{await Wf(e,n),await Xf(e,t),r.resolve()}catch(e){const n=e;if(!Jf(n))throw n;si("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}})).then((()=>r.promise))}function zp(e){if(e._initialized&&!e._terminated)throw new di(hi.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new fi;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Qi.D())return Promise.resolve();const t=e+"main";await Qi.delete(t)}(gh(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Kp(e){return function(e){const t=new fi;return e.asyncQueue.enqueueAndForget((async()=>gf(await rp(e),t))),t.promise}(Up(e=_p(e,Vp)))}function Gp(e){return op(Up(e=_p(e,Vp)))}function Hp(e){return ap(Up(e=_p(e,Vp)))}function Qp(e,t){const n=Up(e=_p(e,Vp)),r=new Mp;return fp(n,e._databaseId,t,r),r}function Wp(e,t){return pp(Up(e=_p(e,Vp)),t).then((t=>t?new Cp(e,null,t.query):null))}function Xp(e){if(e._initialized||e._terminated)throw new di(hi.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jp(Ws.fromBase64String(e))}catch(e){throw new di(hi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Jp(Ws.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new di(hi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ri(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new di(hi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new di(hi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Si(this._lat,e._lat)||Si(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=/^__.*__$/;class nm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new fc(e,this.data,this.fieldMask,t,this.fieldTransforms):new dc(e,this.data,t,this.fieldTransforms)}}class rm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new fc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function im(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ai()}}class sm{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new sm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.la(e),r}fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Tm(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(0===e.length)throw this._a("Document fields must not be empty");if(im(this.ua)&&tm.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class om{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||td(e)}ga(e,t,n,r=!1){return new sm({ua:e,methodName:t,ma:n,path:Ri.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function am(e){const t=e._freezeSettings(),n=td(e._databaseId);return new om(e._databaseId,!!t.ignoreUndefinedProperties,n)}function cm(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);_m("Data must be an object, but it was:",o,r);const a=wm(r,o);let c,u;if(s.merge)c=new Gs(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Em(t,r,n);if(!o.contains(i))throw new di(hi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);xm(e,i)||e.push(i)}c=new Gs(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new nm(new Co(a),c,u)}class um extends Zp{_toFieldTransform(e){if(2!==e.ua)throw 1===e.ua?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof um}}function lm(e,t,n){return new sm({ua:3,ma:t.settings.ma,methodName:e._methodName,ha:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class hm extends Zp{_toFieldTransform(e){return new tc(e.path,new Ha)}isEqual(e){return e instanceof hm}}class dm extends Zp{constructor(e,t){super(e),this.ya=t}_toFieldTransform(e){const t=lm(this,e,!0),n=this.ya.map((e=>vm(e,t))),r=new Qa(n);return new tc(e.path,r)}isEqual(e){return this===e}}class fm extends Zp{constructor(e,t){super(e),this.ya=t}_toFieldTransform(e){const t=lm(this,e,!0),n=this.ya.map((e=>vm(e,t))),r=new Xa(n);return new tc(e.path,r)}isEqual(e){return this===e}}class pm extends Zp{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=new Ya(e.serializer,qa(e.serializer,this.pa));return new tc(e.path,t)}isEqual(e){return this===e}}function mm(e,t,n,r){const i=e.ga(1,t,n);_m("Data must be an object, but it was:",i,r);const s=[],o=Co.empty();Vs(r,((e,r)=>{const a=Sm(t,e,n);r=(0,c.m9)(r);const u=i.fa(a);if(r instanceof um)s.push(a);else{const e=vm(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Gs(s);return new rm(o,a,i.fieldTransforms)}function gm(e,t,n,r,i,s){const o=e.ga(1,t,n),a=[Em(t,r,n)],u=[i];if(s.length%2!=0)throw new di(hi.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Em(t,s[c])),u.push(s[c+1]);const l=[],h=Co.empty();for(let f=a.length-1;f>=0;--f)if(!xm(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.fa(e);if(t instanceof um)l.push(e);else{const r=vm(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new Gs(l);return new rm(h,d,o.fieldTransforms)}function ym(e,t,n,r=!1){return vm(n,e.ga(r?4:3,t))}function vm(e,t){if(bm(e=(0,c.m9)(e)))return _m("Unsupported field value:",t,e),wm(e,t);if(e instanceof Zp)return function(e,t){if(!im(t.ua))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&4!==t.ua)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=vm(i,t.da(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return qa(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ci.fromDate(e);return{timestampValue:Wc(t.serializer,n)}}if(e instanceof Ci){const n=new Ci(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wc(t.serializer,n)}}if(e instanceof em)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Jp)return{bytesValue:Xc(t.serializer,e._byteString)};if(e instanceof xp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Zc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${bp(e)}`)}(e,t)}function wm(e,t){const n={};return Us(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Vs(e,((e,r)=>{const i=vm(r,t.aa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function bm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ci||e instanceof em||e instanceof Jp||e instanceof xp||e instanceof Zp)}function _m(e,t,n){if(!bm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=bp(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function Em(e,t,n){if((t=(0,c.m9)(t))instanceof Yp)return t._internalPath;if("string"==typeof t)return Sm(e,t);throw Tm("Field path arguments must be of type string or ",e,!1,void 0,n)}const Im=new RegExp("[~\\*/\\[\\]]");function Sm(e,t,n){if(t.search(Im)>=0)throw Tm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Yp(...t.split("."))._internalPath}catch(r){throw Tm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Tm(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new di(hi.INVALID_ARGUMENT,a+e+c)}function xm(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Am(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Am extends Cm{data(){return super.data()}}function Dm(e,t){return"string"==typeof t?Sm(e,t):t instanceof Yp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new di(hi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nm{}class Rm extends Nm{}function Om(e,t,...n){let r=[];t instanceof Nm&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Mm)).length,n=e.filter((e=>e instanceof Fm)).length;if(t>1||t>0&&n>0)throw new di(hi.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Fm extends Rm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Fm(e,t,n)}_apply(e){const t=this._parse(e);return Jm(e._query,t),new Cp(e.firestore,e.converter,ya(e._query,t))}_parse(e){const t=am(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new di(hi.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Xm(o,s);const t=[];for(const n of o)t.push(Wm(r,e,n));a={arrayValue:{values:t}}}else a=Wm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Xm(o,s),a=ym(n,t,o,"in"===s||"not-in"===s);return Mo.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Lm(e,t,n){const r=t,i=Dm("where",e);return Fm._create(i,r,n)}class Mm extends Nm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Mm(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Po.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Jm(n,i),n=ya(n,i)}(e._query,t),new Cp(e.firestore,e.converter,ya(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Pm extends Rm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new di(hi.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new di(hi.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Oo(t,n);return function(e,t){if(null===da(e)){const n=fa(e);null!==n&&Ym(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Cp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ca(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Vm(e,t="asc"){const n=t,r=Dm("orderBy",e);return Pm._create(r,n)}class Um extends Rm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Um(e,t,n)}_apply(e){return new Cp(e.firestore,e.converter,va(e._query,this._limit,this._limitType))}}function Bm(e){return Ep("limit",e),Um._create("limit",e,"F")}function jm(e){return Ep("limitToLast",e),Um._create("limitToLast",e,"L")}class qm extends Rm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new qm(e,t,n)}_apply(e){const t=Qm(e,this.type,this._docOrFields,this._inclusive);return new Cp(e.firestore,e.converter,function(e,t){return new ca(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function $m(...e){return qm._create("startAt",e,!0)}function zm(...e){return qm._create("startAfter",e,!1)}class Km extends Rm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Km(e,t,n)}_apply(e){const t=Qm(e,this.type,this._docOrFields,this._inclusive);return new Cp(e.firestore,e.converter,function(e,t){return new ca(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Gm(...e){return Km._create("endBefore",e,!1)}function Hm(...e){return Km._create("endAt",e,!0)}function Qm(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Cm)return function(e,t,n,r,i){if(!r)throw new di(hi.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of ma(e))if(o.field.isKeyField())s.push(mo(t,r.key));else{const e=r.data.field(o.field);if(eo(e))throw new di(hi.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new di(hi.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new ko(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=am(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new di(hi.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new di(hi.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!pa(e)&&-1!==s.indexOf("/"))throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(ki.fromString(s));if(!Oi.isDocumentKey(n))throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Oi(n);a.push(mo(t,i))}else{const e=ym(n,r,s);a.push(e)}}return new ko(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Wm(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new di(hi.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pa(t)&&-1!==n.indexOf("/"))throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ki.fromString(n));if(!Oi.isDocumentKey(r))throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mo(e,new Oi(r))}if(n instanceof xp)return mo(e,n._key);throw new di(hi.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bp(n)}.`)}function Xm(e,t){if(!Array.isArray(e)||0===e.length)throw new di(hi.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Jm(e,t){if(t.isInequality()){const n=fa(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new di(hi.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=da(e);null!==i&&Ym(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new di(hi.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new di(hi.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Ym(e,t,n){if(!n.isEqual(t))throw new di(hi.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Zm{convertValue(e,t="none"){switch(ao(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ys(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ai()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Vs(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new em(Ys(e.latitude),Ys(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=to(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const t=Js(e);return new Ci(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ki.fromString(e);ci(xu(n));const r=new io(n.get(1),n.get(3)),i=new Oi(n.popFirst(5));return r.isEqual(t)||ii(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class tg extends Zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xp(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ng{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rg extends Cm{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ig(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Dm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ig extends rg{data(e={}){return super.data(e)}}class sg{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ng(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ig(this._firestore,this._userDataWriter,n.key,n,new ng(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new di(hi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new ig(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ng(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ig(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ng(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:og(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function og(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ai()}}function ag(e,t){return e instanceof rg&&t instanceof rg?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof sg&&t instanceof sg&&e._firestore===t._firestore&&Op(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(e){e=_p(e,xp);const t=_p(e.firestore,Vp);return up(Up(t),e._key).then((n=>Eg(t,e,n)))}class ug extends Zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xp(this.firestore,null,t)}}function lg(e){e=_p(e,xp);const t=_p(e.firestore,Vp),n=Up(t),r=new ug(t);return cp(n,e._key).then((n=>new rg(t,r,e._key,n,new ng(null!==n&&n.hasLocalMutations,!0),e.converter)))}function hg(e){e=_p(e,xp);const t=_p(e.firestore,Vp);return up(Up(t),e._key,{source:"server"}).then((n=>Eg(t,e,n)))}function dg(e){e=_p(e,Cp);const t=_p(e.firestore,Vp),n=Up(t),r=new ug(t);return km(e._query),hp(n,e._query).then((n=>new sg(t,r,e,n)))}function fg(e){e=_p(e,Cp);const t=_p(e.firestore,Vp),n=Up(t),r=new ug(t);return lp(n,e._query).then((n=>new sg(t,r,e,n)))}function pg(e){e=_p(e,Cp);const t=_p(e.firestore,Vp),n=Up(t),r=new ug(t);return hp(n,e._query,{source:"server"}).then((n=>new sg(t,r,e,n)))}function mg(e,t,n){e=_p(e,xp);const r=_p(e.firestore,Vp),i=eg(e.converter,t,n);return _g(r,[cm(am(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ic.none())])}function gg(e,t,n,...r){e=_p(e,xp);const i=_p(e.firestore,Vp),s=am(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?gm(s,"updateDoc",e._key,t,n,r):mm(s,"updateDoc",e._key,t),_g(i,[o.toMutation(e._key,ic.exists(!0))])}function yg(e){return _g(_p(e.firestore,Vp),[new yc(e._key,ic.none())])}function vg(e,t){const n=_p(e.firestore,Vp),r=Np(e),i=eg(e.converter,t);return _g(n,[cm(am(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ic.exists(!1))]).then((()=>r))}function wg(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Lp(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Lp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof xp)l=_p(e.firestore,Vp),h=la(e._key.path),u={next:n=>{t[o]&&t[o](Eg(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=_p(e,Cp);l=_p(n.firestore,Vp),h=n._query;const r=new ug(l);u={next:e=>{t[o]&&t[o](new sg(l,r,n,e))},error:t[o+1],complete:t[o+2]},km(e._query)}return function(e,t,n,r){const i=new zf(r),s=new Wd(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>zd(await sp(e),s))),()=>{i.Sc(),e.asyncQueue.enqueueAndForget((async()=>Kd(await sp(e),s)))}}(Up(l),h,a,u)}function bg(e,t){return dp(Up(e=_p(e,Vp)),Lp(t)?t:{next:t})}function _g(e,t){return function(e,t){const n=new fi;return e.asyncQueue.enqueueAndForget((async()=>lf(await rp(e),t,n))),n.promise}(Up(e),t)}function Eg(e,t,n){const r=n.docs.get(t._key),i=new ug(e);return new rg(e,i,t._key,r,new ng(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ig={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=am(e)}set(e,t,n){this._verifyNotCommitted();const r=Tg(e,this._firestore),i=eg(r.converter,t,n),s=cm(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ic.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Tg(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?gm(this._dataReader,"WriteBatch.update",i._key,t,n,r):mm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,ic.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Tg(e,this._firestore);return this._mutations=this._mutations.concat(new yc(t._key,ic.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new di(hi.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tg(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new di(hi.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=am(e)}get(e){const t=Tg(e,this._firestore),n=new tg(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return ai();const r=e[0];if(r.isFoundDocument())return new Cm(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Cm(this._firestore,n,t._key,null,t.converter);throw ai()}))}set(e,t,n){const r=Tg(e,this._firestore),i=eg(r.converter,t,n),s=cm(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Tg(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?gm(this._dataReader,"Transaction.update",i._key,t,n,r):mm(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Tg(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Tg(e,this._firestore),n=new ug(this._firestore);return super.get(e).then((e=>new rg(this._firestore,n,t._key,e._document,new ng(!1,!1),t.converter)))}}function Cg(e,t,n){e=_p(e,Vp);const r=Object.assign(Object.assign({},Ig),n);return function(e){if(e.maxAttempts<1)throw new di(hi.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new fi;return e.asyncQueue.enqueueAndForget((async()=>{const i=await ip(e);new Hf(e.asyncQueue,i,n,t,r).run()})),r.promise}(Up(e),(n=>t(new xg(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){return new um("deleteField")}function Dg(){return new hm("serverTimestamp")}function kg(...e){return new dm("arrayUnion",e)}function Ng(...e){return new fm("arrayRemove",e)}function Rg(e){return new pm("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Zr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Vp(new yi(e.getProvider("auth-internal")),new _i(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new di(hi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Jr,"3.11.0",e),(0,s.registerVersion)(Jr,"3.11.0","esm2017")}();const Og="@firebase/firestore-compat",Fg="0.3.8";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lg(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new di("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){if("undefined"===typeof Uint8Array)throw new di("unimplemented","Uint8Arrays are not available in this environment.")}function Pg(){if(!Qs())throw new di("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Vg{constructor(e){this._delegate=e}static fromBase64String(e){return Pg(),new Vg(Jp.fromBase64String(e))}static fromUint8Array(e){return Mg(),new Vg(Jp.fromUint8Array(e))}toBase64(){return Pg(),this._delegate.toBase64()}toUint8Array(){return Mg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(e){return Bg(e,["next","error","complete"])}function Bg(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{enableIndexedDbPersistence(e,t){return jp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return qp(e._delegate)}clearIndexedDbPersistence(e){return zp(e._delegate)}}class qg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof io||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||si("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Tp(this._delegate,e,t,n)}enableNetwork(){return Gp(this._delegate)}disableNetwork(){return Hp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,yp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Kp(this._delegate)}onSnapshotsInSync(e){return bg(this._delegate,e)}get app(){if(!this._appCompat)throw new di("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ry(this,Dp(this._delegate,e))}catch(t){throw Wg(t,"collection()","Firestore.collection()")}}doc(e){try{return new Qg(this,Np(this._delegate,e))}catch(t){throw Wg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ey(this,kp(this._delegate,e))}catch(t){throw Wg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Cg(this._delegate,(t=>e(new Kg(this,t))))}batch(){return Up(this._delegate),new Gg(new Sg(this._delegate,(e=>_g(this._delegate,e))))}loadBundle(e){return Qp(this._delegate,e)}namedQuery(e){return Wp(this._delegate,e).then((e=>e?new ey(this,e):null))}}class $g extends Zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vg(new Jp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Qg.forKey(t,this.firestore,null)}}function zg(e){ni(e)}class Kg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new $g(e)}get(e){const t=iy(e);return this._delegate.get(t).then((e=>new Yg(this._firestore,new rg(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=iy(e);return n?(Lg("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=iy(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=iy(e);return this._delegate.delete(t),this}}class Gg{constructor(e){this._delegate=e}set(e,t,n){const r=iy(e);return n?(Lg("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=iy(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=iy(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Hg{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new ig(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Zg(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Hg.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Hg(e,new $g(e),t),r.set(t,i)),i}}Hg.INSTANCES=new WeakMap;class Qg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new $g(e)}static forPath(e,t,n){if(e.length%2!==0)throw new di("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Qg(t,new xp(t._delegate,n,new Oi(e)))}static forKey(e,t,n){return new Qg(t,new xp(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ry(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ry(this.firestore,Dp(this._delegate,e))}catch(t){throw Wg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof xp&&Rp(this._delegate,e)}set(e,t){t=Lg("DocumentReference.set",t);try{return t?mg(this._delegate,e,t):mg(this._delegate,e)}catch(n){throw Wg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?gg(this._delegate,e):gg(this._delegate,e,t,...n)}catch(r){throw Wg(r,"updateDoc()","DocumentReference.update()")}}delete(){return yg(this._delegate)}onSnapshot(...e){const t=Xg(e),n=Jg(e,(e=>new Yg(this.firestore,new rg(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return wg(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?lg(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?hg(this._delegate):cg(this._delegate),t.then((e=>new Yg(this.firestore,new rg(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Qg(this.firestore,e?this._delegate.withConverter(Hg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Wg(e,t,n){return e.message=e.message.replace(t,n),e}function Xg(e){for(const t of e)if("object"===typeof t&&!Ug(t))return t;return{}}function Jg(e,t){var n,r;let i;return i=Ug(e[0])?e[0]:Ug(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Yg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Qg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return ag(this._delegate,e._delegate)}}class Zg extends Yg{data(e){const t=this._delegate.data(e);return ui(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class ey{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new $g(e)}where(e,t,n){try{return new ey(this.firestore,Om(this._delegate,Lm(e,t,n)))}catch(r){throw Wg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new ey(this.firestore,Om(this._delegate,Vm(e,t)))}catch(n){throw Wg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ey(this.firestore,Om(this._delegate,Bm(e)))}catch(t){throw Wg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new ey(this.firestore,Om(this._delegate,jm(e)))}catch(t){throw Wg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ey(this.firestore,Om(this._delegate,$m(...e)))}catch(t){throw Wg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ey(this.firestore,Om(this._delegate,zm(...e)))}catch(t){throw Wg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ey(this.firestore,Om(this._delegate,Gm(...e)))}catch(t){throw Wg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ey(this.firestore,Om(this._delegate,Hm(...e)))}catch(t){throw Wg(t,"endAt()","Query.endAt()")}}isEqual(e){return Op(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?fg(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?pg(this._delegate):dg(this._delegate),t.then((e=>new ny(this.firestore,new sg(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Xg(e),n=Jg(e,(e=>new ny(this.firestore,new sg(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return wg(this._delegate,t,n)}withConverter(e){return new ey(this.firestore,e?this._delegate.withConverter(Hg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ty{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Zg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ny{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new ey(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Zg(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new ty(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Zg(this._firestore,n))}))}isEqual(e){return ag(this._delegate,e._delegate)}}class ry extends ey{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Qg(this.firestore,e):null}doc(e){try{return new Qg(this.firestore,void 0===e?Np(this._delegate):Np(this._delegate,e))}catch(t){throw Wg(t,"doc()","CollectionReference.doc()")}}add(e){return vg(this._delegate,e).then((e=>new Qg(this.firestore,e)))}isEqual(e){return Rp(this._delegate,e._delegate)}withConverter(e){return new ry(this.firestore,e?this._delegate.withConverter(Hg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function iy(e){return _p(e,xp)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(...e){this._delegate=new Yp(...e)}static documentId(){return new sy(Ri.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Yp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this._delegate=e}static serverTimestamp(){const e=Dg();return e._methodName="FieldValue.serverTimestamp",new oy(e)}static delete(){const e=Ag();return e._methodName="FieldValue.delete",new oy(e)}static arrayUnion(...e){const t=kg(...e);return t._methodName="FieldValue.arrayUnion",new oy(t)}static arrayRemove(...e){const t=Ng(...e);return t._methodName="FieldValue.arrayRemove",new oy(t)}static increment(e){const t=Rg(e);return t._methodName="FieldValue.increment",new oy(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={Firestore:qg,GeoPoint:em,Timestamp:Ci,Blob:Vg,Transaction:Kg,WriteBatch:Gg,DocumentReference:Qg,DocumentSnapshot:Yg,Query:ey,QueryDocumentSnapshot:Zg,QuerySnapshot:ny,CollectionReference:ry,FieldPath:sy,FieldValue:oy,setLogLevel:zg,CACHE_SIZE_UNLIMITED:Pp};function cy(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},ay)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(e){cy(e,((e,t)=>new qg(e,t,new jg))),e.registerVersion(Og,Fg)}uy(i.Z)},2483:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return B}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,I;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(I||(I={}));function S(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const T=/^[^#]+#/;function x(e,t){return e.replace(T,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=C(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function k(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function R(e,t){N.set(e,t)}function O(e){const t=N.get(e);return N.delete(e),t}let F=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:E.pop,direction:l?l>0?I.forward:I.back:I.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function P(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function V(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,P(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:A()});s(o.current,o,!0);const c=a({},P(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function U(e){e=S(e);const t=V(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function B(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),U(e)}function j(e){return"string"===typeof e||e&&"object"===typeof e}function q(e){return"string"===typeof e||"symbol"===typeof e}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var K;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(K||(K={}));function G(e,t){return a(new Error,{type:e,[z]:!0},t)}function H(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function J(e,t){const n=a({},W,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(X,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||Q;if(l!==Q){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ie(e,t,n){const r=J(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=ae(e);c.aliasOf=r&&r.record;const h=he(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ue(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw G(1,{location:e});0,o=i.record.name,c=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw G(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:le(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ye=/\?/g,ve=/\+/g,we=/%5B/g,be=/%5D/g,_e=/%5E/g,Ee=/%60/g,Ie=/%7B/g,Se=/%7C/g,Te=/%7D/g,xe=/%20/g;function Ce(e){return encodeURI(""+e).replace(Se,"|").replace(we,"[").replace(be,"]")}function Ae(e){return Ce(e).replace(Ie,"{").replace(Te,"}").replace(_e,"^")}function De(e){return Ce(e).replace(ve,"%2B").replace(xe,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Ie,"{").replace(Te,"}").replace(_e,"^")}function ke(e){return De(e).replace(ge,"%3D")}function Ne(e){return Ce(e).replace(fe,"%23").replace(ye,"%3F")}function Re(e){return null==e?"":Ne(e).replace(me,"%2F")}function Oe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Fe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ve," "),n=e.indexOf("="),s=Oe(n<0?e:e.slice(0,n)),o=n<0?null:Oe(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=ke(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&De(e))):[r&&De(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Pe=Symbol(""),Ve=Symbol(""),Ue=Symbol(""),Be=Symbol(""),je=Symbol("");function qe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(G(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(G(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Ke(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push($e(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&$e(u,n,r,s,e)()}))))}}}return i}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Be),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Xe(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return We(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const He=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.qj)(Ge(e)),{options:s}=(0,r.f3)(Ue),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Qe=He;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(je),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Ve,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ve,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Pe,l),(0,r.JJ)(je,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return et(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Fe,o=e.stringifyQuery||Le,h=e.history;const d=qe(),m=qe(),y=qe(),v=(0,i.XI)($);let w=$;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),_=c.bind(null,Re),I=c.bind(null,Oe);function S(e,n){let r,i;return q(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function x(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function N(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:I(s.params),hash:Oe(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=b(I(s.params));const u=p(o,a({},e,{hash:Ae(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Le?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function F(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function L(e,t){if(w!==e)return G(8,{from:t,to:e})}function M(e){return U(e)}function P(e){return M(a(F(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=F(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=w=N(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,u=V(n);if(u)return U(a(F(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&g(o,r,n)&&(h=G(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):j(l,r)).catch((e=>H(e)?H(e,2)?e:te(e):Z(e,l,r))).then((e=>{if(e){if(H(e,2))return U(a({replace:c},F(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=K(l,r,!0,c,i);return z(l,r,e),e}))}function B(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function j(e,t){let n;const[r,i,s]=it(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push($e(r,e,t));return n.push(o),rt(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push($e(r,e,t));return n.push(o),rt(n)})).catch((e=>H(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of y.list())r(e,t,n)}function K(e,t,n,r,i){const o=L(e,t);if(o)return o;const c=t===$,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,ne(e,t,n,c),te()}let Q;function W(){Q||(Q=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=N(e),i=V(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);w=r;const o=v.value;s&&R(k(o.fullPath,n.delta),A()),j(r,o).catch((e=>H(e,12)?e:H(e,2)?(U(e.to,r).then((e=>{H(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||K(r,o,!1),e&&(n.delta&&!H(e,8)?h.go(-n.delta,!1):n.type===E.pop&&H(e,20)&&h.go(-1,!1)),z(r,o,e)})).catch(u)})))}let X,J=qe(),Y=qe();function Z(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return X&&v.value!==$?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))}function te(e){return X||(X=!e,W(),J.list().forEach((([t,n])=>e?n(e):t())),J.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&O(k(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&D(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:v,listening:!0,addRoute:S,removeRoute:T,hasRoute:C,getRoutes:x,resolve:N,options:e,push:M,replace:P,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Qe),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!ie&&v.value===$&&(ie=!0,M(h.location).catch((e=>{0})));const n={};for(const i in $)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(Ue,t),e.provide(Be,(0,i.qj)(n)),e.provide(je,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(w=$,Q&&Q(),Q=null,v.value=$,ie=!1,X=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>y(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.d19c7b78.js.map