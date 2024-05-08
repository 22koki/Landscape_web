(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1710:function(e,t,i){"use strict";i(638)},1711:function(e,t,i){var s=i(69)((function(e){return e[1]}));s.push([e.i,'.chevron-right[data-v-e58f5752]:after{--tw-rotate:45deg;--tw-border-opacity:1;border-width:.125em .125em 0 0;--tw-translate-x:-2px}.chevron-left[data-v-e58f5752]:after,.chevron-right[data-v-e58f5752]:after{display:block;height:.5rem;width:.5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-style:solid;border-color:rgb(0 0 0/var(--tw-border-opacity));content:""}.chevron-left[data-v-e58f5752]:after{--tw-rotate:45deg;--tw-border-opacity:1;border-width:0 0 .125em .125em}',""]),s.locals={},e.exports=s},1712:function(e,t,i){var s;
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */!function(r,a){"use strict";var o="model",n="name",l="type",w="vendor",u="version",d="mobile",c="tablet",b="smarttv",h={extend:function(e,t){var i={};for(var s in e)t[s]&&t[s].length%2==0?i[s]=t[s].concat(e[s]):i[s]=e[s];return i},has:function(e,t){return"string"==typeof e&&-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e,t){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),void 0===t?e:e.substring(0,255)}},m={rgx:function(e,t){for(var i,s,r,a,o,n,l=0;l<t.length&&!o;){var w=t[l],u=t[l+1];for(i=s=0;i<w.length&&!o;)if(o=w[i++].exec(e))for(r=0;r<u.length;r++)n=o[++s],"object"==typeof(a=u[r])&&a.length>0?2==a.length?"function"==typeof a[1]?this[a[0]]=a[1].call(this,n):this[a[0]]=a[1]:3==a.length?"function"!=typeof a[1]||a[1].exec&&a[1].test?this[a[0]]=n?n.replace(a[1],a[2]):void 0:this[a[0]]=n?a[1].call(this,n,a[2]):void 0:4==a.length&&(this[a[0]]=n?a[3].call(this,n.replace(a[1],a[2])):void 0):this[a]=n||void 0;l+=2}},str:function(e,t){for(var i in t)if("object"==typeof t[i]&&t[i].length>0){for(var s=0;s<t[i].length;s++)if(h.has(t[i][s],e))return"?"===i?void 0:i}else if(h.has(t[i],e))return"?"===i?void 0:i;return e}},p={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},f={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[u,[n,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[u,[n,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[n,u],[/opios[\/\s]+([\w\.]+)/i],[u,[n,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[u,[n,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[n,u],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[u,[n,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[u,[n,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[u,[n,"WeChat"]],[/konqueror\/([\w\.]+)/i],[u,[n,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[u,[n,"IE"]],[/yabrowser\/([\w\.]+)/i],[u,[n,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[n,/(.+)/,"$1 Secure Browser"],u],[/focus\/([\w\.]+)/i],[u,[n,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[u,[n,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[u,[n,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[u,[n,"Dolphin"]],[/coast\/([\w\.]+)/i],[u,[n,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[n,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[u,[n,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[n,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[n,/(.+)/,"$1 Browser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[n,/_/g," "],u],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[n,u],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[n],[/;fbav\/([\w\.]+);/i],[u,[n,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[n,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[n,u],[/\bgsa\/([\w\.]+)\s.*safari\//i],[u,[n,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[n,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[n,"Chrome WebView"],u],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[u,[n,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[n,u],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[u,[n,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[u,n],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[n,[u,m.str,p.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[n,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[n,"Netscape"],u],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[u,[n,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[n,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",h.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[["architecture","arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[["architecture","armhf"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",h.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[["architecture",h.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[o,[w,"Samsung"],[l,c]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[o,[w,"Samsung"],[l,d]],[/\((ip(?:hone|od)[\s\w]*);/i],[o,[w,"Apple"],[l,d]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[o,[w,"Apple"],[l,c]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[o,[w,"Huawei"],[l,c]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[o,[w,"Huawei"],[l,d]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[o,/_/g," "],[w,"Xiaomi"],[l,d]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[o,/_/g," "],[w,"Xiaomi"],[l,c]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[o,[w,"OPPO"],[l,d]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[o,[w,"Vivo"],[l,d]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[o,[w,"Realme"],[l,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[o,[w,"Motorola"],[l,d]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[o,[w,"Motorola"],[l,c]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[o,[w,"LG"],[l,c]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[o,[w,"LG"],[l,d]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[o,[w,"Lenovo"],[l,c]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[o,/_/g," "],[w,"Nokia"],[l,d]],[/droid.+;\s(pixel\sc)[\s)]/i],[o,[w,"Google"],[l,c]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[o,[w,"Google"],[l,d]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[w,"Sony"],[l,d]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[o,"Xperia Tablet"],[w,"Sony"],[l,c]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[o,[w,"OnePlus"],[l,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[o,[w,"Amazon"],[l,c]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[o,"Fire Phone"],[w,"Amazon"],[l,d]],[/\((playbook);[\w\s\),;-]+(rim)/i],[o,w,[l,c]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[o,[w,"BlackBerry"],[l,d]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[o,[w,"ASUS"],[l,c]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[o,[w,"ASUS"],[l,d]],[/(nexus\s9)/i],[o,[w,"HTC"],[l,c]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[w,[o,/_/g," "],[l,d]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[o,[w,"Acer"],[l,c]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[o,[w,"Meizu"],[l,d]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[w,o,[l,d]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[w,o,[l,c]],[/\s(surface\sduo)\s/i],[o,[w,"Microsoft"],[l,c]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[o,[w,"Fairphone"],[l,d]],[/\s(u304aa)\sbuild/i],[o,[w,"AT&T"],[l,d]],[/sie-(\w*)/i],[o,[w,"Siemens"],[l,d]],[/[;\/]\s?(rct\w+)\sbuild/i],[o,[w,"RCA"],[l,c]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[o,[w,"Dell"],[l,c]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[o,[w,"Verizon"],[l,c]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[o,[w,"Barnes & Noble"],[l,c]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[o,[w,"NuVision"],[l,c]],[/;\s(k88)\sbuild/i],[o,[w,"ZTE"],[l,c]],[/;\s(nx\d{3}j)\sbuild/i],[o,[w,"ZTE"],[l,d]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[o,[w,"Swiss"],[l,d]],[/[;\/]\s?(zur\d{3})\sbuild/i],[o,[w,"Swiss"],[l,c]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[o,[w,"Zeki"],[l,c]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[w,"Dragon Touch"],o,[l,c]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[o,[w,"Insignia"],[l,c]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[o,[w,"NextBook"],[l,c]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[w,"Voice"],o,[l,d]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[w,"LvTel"],o,[l,d]],[/;\s(ph-1)\s/i],[o,[w,"Essential"],[l,d]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[o,[w,"Envizen"],[l,c]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[o,[w,"MachSpeed"],[l,c]],[/[;\/]\s?tu_(1491)\sbuild/i],[o,[w,"Rotor"],[l,c]],[/(shield[\w\s]+)\sbuild/i],[o,[w,"Nvidia"],[l,c]],[/(sprint)\s(\w+)/i],[w,o,[l,d]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[w,"Microsoft"],[l,d]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[o,[w,"Zebra"],[l,c]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[o,[w,"Zebra"],[l,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[w,o,[l,"console"]],[/droid.+;\s(shield)\sbuild/i],[o,[w,"Nvidia"],[l,"console"]],[/(playstation\s[345portablevi]+)/i],[o,[w,"Sony"],[l,"console"]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[o,[w,"Microsoft"],[l,"console"]],[/smart-tv.+(samsung)/i],[w,[l,b]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[w,"Samsung"],[l,b]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[w,"LG"],[l,b]],[/(apple)\s?tv/i],[w,[o,"Apple TV"],[l,b]],[/crkey/i],[[o,"Chromecast"],[w,"Google"],[l,b]],[/droid.+aft([\w])(\sbuild\/|\))/i],[o,[w,"Amazon"],[l,b]],[/\(dtv[\);].+(aquos)/i],[o,[w,"Sharp"],[l,b]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[w,h.trim],[o,h.trim],[l,b]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[l,b]],[/((pebble))app\/[\d\.]+\s/i],[w,o,[l,"wearable"]],[/droid.+;\s(glass)\s\d/i],[o,[w,"Google"],[l,"wearable"]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[o,[w,"Zebra"],[l,"wearable"]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[w,[l,"embedded"]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[o,[l,d]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[o,[l,c]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,h.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[o,[w,"Generic"]],[/(phone)/i],[[l,d]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[n,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[n,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[n,u],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[u,n]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[n,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[n,[u,m.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[n,"Windows"],[u,m.str,p.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[u,/_/g,"."],[n,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[n,"Mac OS"],[u,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[n,u],[/\(bb(10);/i],[u,[n,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[u,[n,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[n,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[u,[n,"webOS"]],[/crkey\/([\d\.]+)/i],[u,[n,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[n,"Chromium OS"],u],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[n,u],[/(sunos)\s?([\w\.\d]*)/i],[[n,"Solaris"],u],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[n,u]]},v=function(e,t){if("object"==typeof e&&(t=e,e=void 0),!(this instanceof v))return new v(e,t).getResult();var i=e||(void 0!==r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),s=t?h.extend(f,t):f;return this.getBrowser=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,i,s.browser),e.major=h.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return m.rgx.call(e,i,s.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return m.rgx.call(e,i,s.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,i,s.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return m.rgx.call(e,i,s.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i="string"==typeof e&&e.length>255?h.trim(e,255):e,this},this.setUA(i),this};v.VERSION="0.7.28",v.BROWSER={NAME:n,MAJOR:"major",VERSION:u},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:o,VENDOR:w,TYPE:l,CONSOLE:"console",MOBILE:d,SMARTTV:b,TABLET:c,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:n,VERSION:u},v.OS={NAME:n,VERSION:u},void 0!==t?(void 0!==e&&e.exports&&(t=e.exports=v),t.UAParser=v):void 0===(s=function(){return v}.call(t,i,t,e))||(e.exports=s);var g=void 0!==r&&(r.jQuery||r.Zepto);if(g&&!g.ua){var x=new v;g.ua=x.getResult(),g.ua.get=function(){return x.getUA()},g.ua.set=function(e){x.setUA(e);var t=x.getResult();for(var i in t)g.ua[i]=t[i]}}}("object"==typeof window?window:this)},204:function(e,t,i){"use strict";i(196);var s=i(194),r=i(235),a={components:{Button:s.a},mixins:[r.a],props:{buttonIcon:{type:String,required:!1,default:"chevron-right-wide"},buttonVariant:{type:String,required:!1,default:"primary-with-icon"},hiddenInputName:{type:String,required:!1,default:void 0},hiddenInputValue:{type:String,required:!1,default:void 0},placeholder:{type:String,required:!0},alignTextLeft:{type:Boolean,required:!1,default:!1},searchInputName:{type:String,required:!0},title:{type:String,required:!1,default:void 0},description:{type:String,required:!1,default:void 0},searchUrl:{type:String,required:!0},searchButtonLabel:{type:String,required:!0},useAlternateLayout:{type:Boolean,required:!1,default:!1},useLargeLayout:{type:Boolean,required:!1,default:!1},isRootPage:{type:Boolean,required:!1,default:!1},isLogoHomePage:{type:Boolean,required:!1,default:!1},searchInputText:{type:String,required:!1,default:""},isHomePage:{type:Boolean,required:!1,default:!1},inlineSearchBar:{type:Boolean,default:!1},shouldUseTextArea:{type:Boolean,default:!1}},data(){return{inputText:this.searchInputText}},computed:{canResize(){var e;return!!this.userAgent&&"Safari"!==(null===(e=this.userAgent.browser)||void 0===e?void 0:e.name)},buttonClasses(){var e="tw-w-full md:tw-w-auto tw-whitespace-nowrap";return this.useLargeLayout&&(e="tw-w-full md:tw-w-64"),this.inlineSearchBar&&(e="tw-w-full md:tw-w-48 md:tw-rounded-l-none"),e},formatedSearchUrl(){var e=this.searchUrl;return(this.isRootPage||this.isHomePage)&&(e="".concat(e,"#show-onboarding-modal")),e},isWhatPage(){return this.isRootPage?"isFromRootPage":this.isHomePage?"isFromLogoHome":""}},watch:{searchInputText(e){this.inputText=e}}},o=i(28),n=Object(o.a)(a,(function(){var e=this,t=e._self._c;return t("div",{class:{"tw-container tw-max-w-300 tw-mx-auto tw-px-2.5 md:tw-px-8":!e.useAlternateLayout}},[t("div",{staticClass:"tw-text-center"},[e.title?t("h2",{staticClass:"tw-font-bold tw-text-3xl md:tw-text-4xl tw-mb-8 tw-mt-0",class:{"tw-text-left":e.alignTextLeft}},[e._v("\n      "+e._s(e.title)+"\n    ")]):e._e(),e._v(" "),e.description?t("p",{staticClass:"tw--mt-5 tw-mb-8 tw-text-grayscale-600",class:{"tw-text-left":e.alignTextLeft}},[e._v("\n      "+e._s(e.description)+"\n    ")]):e._e()]),e._v(" "),t("div",{class:{"tw-max-w-3xl tw-mx-auto":!e.useAlternateLayout}},[t("form",{staticClass:"gtm-UpdateLogo-Home",attrs:{action:e.formatedSearchUrl,method:"get"}},[t("div",{staticClass:"tw-flex",class:{"tw-flex-col md:tw-flex-row":!e.useAlternateLayout||e.inlineSearchBar,"tw-flex-col":e.useAlternateLayout&&!e.inlineSearchBar}},[t("label",{staticClass:"tw-w-full",class:{"tw-mb-3 md:tw-mb-0":e.inlineSearchBar,"tw-mb-3 md:tw-mb-0 md:tw-mr-3":!e.useAlternateLayout&&!e.inlineSearchBar,"tw-mb-3":e.useAlternateLayout&&!e.inlineSearchBar}},[t("span",{staticClass:"tw-sr-only"},[e._v("\n            "+e._s(e.placeholder)+"\n          ")]),e._v(" "),e.shouldUseTextArea?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputText,expression:"inputText"}],staticClass:"tw-rounded tw-placeholder-grayscale-600 tw-placeholder-opacity-50 tw-mb-0 tw-transition-colors tw-duration-300 tw-border tw-border-grayscale-500 tw-h-28 tw-w-full tw-p-4 tw-px-3 tw-shadow-inner focus:tw-border-secondary-500 focus:tw-outline-none focus:tw-shadow-sm md:tw-text-lg tw-max-h-64",class:{"tw-resize-none":!e.canResize},attrs:{type:"text",placeholder:e.placeholder,name:e.searchInputName,"data-test-business-name-text":""},domProps:{value:e.inputText},on:{input:function(t){t.target.composing||(e.inputText=t.target.value)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputText,expression:"inputText"}],staticClass:"tw-text-lg tw-rounded tw-placeholder-grayscale-600 tw-placeholder-opacity-50 tw-mb-0 tw-transition-colors tw-duration-300 tw-border tw-border-grayscale-500 tw-h-full tw-w-full tw-p-4 tw-px-3 tw-shadow-inner focus:tw-border-secondary-500 focus:tw-outline-none focus:tw-shadow-sm",class:{"md:tw-rounded-r-none md:tw-py-0":e.inlineSearchBar},attrs:{type:"text",placeholder:e.placeholder,name:e.searchInputName,"data-test-business-name-text":""},domProps:{value:e.inputText},on:{input:function(t){t.target.composing||(e.inputText=t.target.value)}}})]),e._v(" "),e.hiddenInputValue&&e.hiddenInputName?t("input",{attrs:{type:"hidden",name:e.hiddenInputName},domProps:{value:e.hiddenInputValue}}):e._e(),e._v(" "),e.inputText!==e.searchInputText?t("input",{attrs:{type:"hidden",value:"true",name:"text"===e.searchInputName?"textChanged":"keywordChanged"}}):e._e(),e._v(" "),e.isRootPage||e.isHomePage?t("input",{attrs:{type:"hidden",value:"true",name:e.isWhatPage}}):e._e(),e._v(" "),e.isRootPage&&e.inlineSearchBar?t("Button",{attrs:{label:"CREATE LOGOS",variant:"primary",size:"large","container-classes":"tw-flex-none tw-h-full tw-w-full md:tw-w-auto",classes:e.buttonClasses,"data-test-business-name-submit":""}}):!e.isRootPage&&e.inlineSearchBar?t("Button",{attrs:{label:e.searchButtonLabel,variant:"primary",size:"large","container-classes":"tw-flex-none tw-h-full tw-w-full md:tw-w-auto",classes:e.buttonClasses,"data-test-business-name-submit":""}}):e.useAlternateLayout?e.useAlternateLayout?t("Button",{attrs:{label:e.searchButtonLabel,icon:e.buttonIcon,variant:e.buttonVariant,size:"large","container-classes":"tw-flex-none tw-h-full tw-w-full",classes:"tw-w-full","data-test-business-name-submit":""}}):e._e():t("Button",{attrs:{label:e.searchButtonLabel,icon:e.buttonIcon,variant:e.buttonVariant,size:"large","container-classes":"tw-flex-none tw-h-full tw-w-full md:tw-w-auto",classes:e.buttonClasses,"data-test-business-name-submit":""}})],1)])])])}),[],!1,null,null,null);t.a=n.exports},232:function(e,t,i){"use strict";var s={props:{menuItems:{type:Array,required:!0,default:()=>[]}},data:()=>({currentChildGroup:[],currentChildGroupTitle:null,currentChildren:[],currentLevel:0,currentMenu:null,menuActive:!1}),mounted(){window.addEventListener("toggleMobileMenu",this.toggleMenu)},methods:{toggleMenu(){this.menuActive=!this.menuActive,this.menuActive?document.body.classList.add("tw-h-screen","tw-overflow-hidden"):document.body.classList.remove("tw-h-screen","tw-overflow-hidden")},goToLevel(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;this.currentMenu=t.label,this.currentLevel=e,this.currentChildGroupTitle=this.currentMenu,this.currentChildren=t.children?t.children:[]},back(){this.currentLevel-=1,this.currentLevel<=0&&(this.currentChildren=[],this.currentMenu="Menu"),this.currentLevel<=1&&(this.currentChildGroup=[])},goToChildGroup(e){this.currentMenu=e.label,this.currentLevel+=1,this.currentChildGroup=e.links}}},r=(i(1710),i(28)),a=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"tw-fixed tw-h-full tw-w-full tw-z-40 tw-transition-all tw-duration-200",class:{"tw-invisible":!e.menuActive}},[t("div",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-bg-black/70 tw-transition-opacity tw-duration-200",class:{"tw-opacity-0":!e.menuActive},on:{click:e.toggleMenu}}),e._v(" "),t("div",{staticClass:"tw-relative tw-z-40 tw-w-4/5 tw-h-full tw-overflow-auto tw-bg-white tw-transition-transform tw-duration-200 tw-ease-in-out",class:{"tw-transform tw--translate-x-full":!e.menuActive}},[t("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-relative tw-py-2 tw-border-b tw-border-black/10"},[e.currentLevel>0?t("button",{staticClass:"chevron-left tw-text-black tw-w-14 tw-h-full tw-flex tw-items-center tw-justify-center tw-absolute tw-top-0 tw-left-0",on:{click:e.back}},[t("span",{staticClass:"tw-sr-only"},[e._v("Back")])]):e._e(),e._v(" "),t("p",{staticClass:"tw-text-black tw-font-semibold"},[e._v("\n        "+e._s(1===e.currentLevel?e.currentChildGroupTitle:e.currentMenu||"Menu")+"\n      ")]),e._v(" "),t("button",{staticClass:"tw-text-black tw-w-14 tw-h-full tw-flex tw-items-center tw-justify-center tw-absolute tw-top-0 tw-right-0",on:{click:e.toggleMenu}},[t("span",{staticClass:"tw-sr-only"},[e._v("Close mobile menu")]),e._v(" "),t("svg",{staticClass:"tw-fill-current tw-w-3.5 tw-h-3.5",attrs:{viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M8.4 2L6 4.4 3.6 2 2 3.6 4.4 6 2 8.4 3.6 10 6 7.6 8.4 10 10 8.4 7.6 6 10 3.6z"}})])])]),e._v(" "),t("nav",{staticClass:"tw-flex tw-items-stretch tw-mb-16",attrs:{title:"Mobile Navigation"}},[t("ul",{staticClass:"tw-w-full tw-flex-none tw-ml-0 tw-transition-transform tw-duration-200",style:"transform: translateX(-".concat(100*e.currentLevel,"%)")},e._l(e.menuItems,(function(i,s){return t("li",{key:s,staticClass:"tw-border-b tw-border-black/10 tw-relative tw-mx-6"},[t("div",{staticClass:"tw-flex tw-items-stretch tw-justify-between"},[i.link?t("a",{staticClass:"tw-block tw-w-full",attrs:{href:i.link}},[t("span",{staticClass:"tw-inline-block tw-py-2.5"},[e._v("\n                "+e._s(i.label)+"\n              ")])]):e._e(),e._v(" "),!i.link&&i.children?t("button",{staticClass:"chevron-right tw-w-full tw-text-left tw-flex tw-justify-between tw-items-center",on:{click:function(t){return e.goToLevel(1,i)}}},[t("span",{staticClass:"tw-inline-block tw-py-2.5 tw-w-full"},[e._v("\n                "+e._s(i.label)+"\n              ")])]):e._e(),e._v(" "),i.link&&i.children?t("button",{staticClass:"chevron-right tw-pl-10 tw-flex-none",on:{click:function(t){return e.goToLevel(1,i)}}},[t("span",{staticClass:"tw-sr-only"},[e._v(" View child pages of "+e._s(i.label)+" ")])]):e._e()])])})),0),e._v(" "),t("ul",{staticClass:"tw-ml-0 tw-flex-none tw-w-full tw-h-full tw-transition-transform tw-duration-200",class:{"tw-opacity-100":e.currentChildren.length,"tw-opacity-0":!e.currentChildren.length,"tw-invisible":!e.currentChildren.length,"tw-visible":e.currentChildren.length},staticStyle:{transform:"translateX(100%)"},style:e.currentChildren.length?{transform:"translateX(-".concat(e.currentChildGroup.length?200:100,"%)")}:null},e._l(e.currentChildren,(function(i,s){return t("li",{key:s,staticClass:"tw-border-b tw-border-solid tw-border-black/10 tw-mx-6"},[t("div",{staticClass:"tw-flex tw-items-stretch tw-justify-between"},[i.label?t("button",{staticClass:"tw-flex tw-items-center tw-justify-between tw-text-left tw-w-full tw-flex-none tw-py-2.5",on:{click:function(t){return e.goToChildGroup(i)}}},[e._v("\n              "+e._s(i.label)+"\n              "),t("span",{staticClass:"chevron-right tw-pl-10"})]):e._e(),e._v(" "),i.label?e._e():t("ul",{staticClass:"tw-ml-0 tw-flex-none tw-w-full tw-h-full tw-transition-transform tw-duration-200"},e._l(e.currentChildren[0].links,(function(i,s){return t("li",{key:s,class:{"tw-border-b tw-border-solid tw-border-black/10":s+1<e.currentChildren[0].links.length}},[t("a",{staticClass:"tw-flex tw-items-stretch tw-justify-between tw-py-2.5 tw-text-sm",attrs:{href:i.link}},[e._v("\n                  "+e._s(i.label)+"\n                ")])])})),0)])])})),0),e._v(" "),t("ul",{staticClass:"tw-ml-0 tw-flex-none tw-w-full tw-h-full tw-transition-transform tw-duration-200",class:{"tw-opacity-100":e.currentChildGroup.length,"tw-opacity-0":!e.currentChildGroup.length,"tw-invisible":!e.currentChildGroup.length,"tw-visible":e.currentChildGroup.length},style:1===e.currentLevel?{transform:"translateX(-100%)"}:{transform:"translateX(-200%)"}},e._l(e.currentChildGroup,(function(i,s){return t("li",{key:s,staticClass:"tw-border-b tw-border-solid tw-border-black/10"},[t("a",{staticClass:"tw-flex tw-items-stretch tw-justify-between tw-py-2.5 tw-pl-4 tw-text-sm",attrs:{href:i.link}},[e._v("\n            "+e._s(i.label)+"\n          ")])])})),0)])])])}),[],!1,null,"e58f5752",null);t.a=a.exports},235:function(e,t,i){"use strict";var s=i(1712);t.a={data:()=>({userAgent:null}),mounted(){try{var e=new s.UAParser;this.userAgent=e.getResult()}catch(e){console.error("Unable to parse user agent",e)}}}},638:function(e,t,i){var s=i(1711);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(70).default)("4773dd5e",s,!0,{sourceMap:!1})}}]);