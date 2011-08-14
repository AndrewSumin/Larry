var BEMHTML = function (c){
l425: {
l415: {
l414: {
l413: {
l407: {
l404: {
l403: {
l361: {
/*339*/if((! (! this["elem"])) === false) {
/*340*/if(this["block"] === "page") {
/*341*/switch(this["_mode"]) {
case "tag":
/*342*/return "html";return;; break;
case "content":
/*343*/if((! (! this["_start"])) === false) {
break l404;} else {
break l407;}; break;
case "mix":
break l361;; break;
case "bem":
break l361;; break;
case "jsAttr":
break l361;; break;
case "js":
break l361;; break;
case "cls":
break l361;; break;
case "attrs":
break l361;; break;
case "default":
/*364*/if((! (! this["_start"])) === false) {
break l404;} else {
break l414;}; break;default: /*367*/if((! (! this["_start"])) === false) {
break l404;} else {
break l415;}}
} else {
break l403;}} else {
break l403;}}/*361*/if((! (! this["_start"])) === false) {
break l404;} else {
break l413;}}/*403*/if((! (! this["_start"])) === false) {
break l404;} else {
/*405*/switch(this["_mode"]) {
case "tag":
break l413;; break;
case "content":
break l407;; break;
case "mix":
break l413;; break;
case "bem":
break l413;; break;
case "jsAttr":
break l413;; break;
case "js":
break l413;; break;
case "cls":
break l413;; break;
case "attrs":
break l413;; break;
case "default":
break l414;; break;default: break l415;}
}}/*404*/{var BEM = ({}),toString = Object["prototype"]["toString"],SHORT_TAGS = ({"area": (1),"base": (1),"br": (1),"col": (1),"command": (1),"embed": (1),"hr": (1),"img": (1),"input": (1),"keygen": (1),"link": (1),"meta": (1),"param": (1),"source": (1),"wbr": (1)});(function (BEM,undefined){var MOD_DELIM = "_",ELEM_DELIM = "__",NAME_PATTERN = "[a-zA-Z0-9-]+";var buildModPostfix = (function (modName,modVal,buffer){buffer.push(MOD_DELIM,modName,MOD_DELIM,modVal)});var buildBlockClass = (function (name,modName,modVal,buffer){buffer.push(name);(modVal && buildModPostfix(modName,modVal,buffer))});var buildElemClass = (function (block,name,modName,modVal,buffer){buildBlockClass(block,undefined,undefined,buffer);buffer.push(ELEM_DELIM,name);(modVal && buildModPostfix(modName,modVal,buffer))});(BEM["INTERNAL"]=({"NAME_PATTERN": NAME_PATTERN,"MOD_DELIM": MOD_DELIM,"ELEM_DELIM": ELEM_DELIM,"buildModPostfix": (function (modName,modVal,buffer){var res = (buffer || []);buildModPostfix(modName,modVal,res);return (buffer?res:res.join(""))}),"buildClass": (function (block,elem,modName,modVal,buffer){var typeOf = (typeof modName);if((typeOf == "string")){if(((typeof modVal) != "string")){(buffer=modVal);(modVal=modName);(modName=elem);(elem=undefined)}else{undefined}}else{if((typeOf != "undefined")){(buffer=modName);(modName=undefined)}else{if((elem && ((typeof elem) != "string"))){(buffer=elem);(elem=undefined)}else{undefined}}};undefined;if((! ((elem || modName) || buffer))){return block}else{undefined};undefined;var res = (buffer || []);(elem?buildElemClass(block,elem,modName,modVal,res):buildBlockClass(block,modName,modVal,res));return (buffer?res:res.join(""))}),"buildModsClasses": (function (block,elem,mods,buffer){var res = (buffer || []);if(mods){var modName = undefined;for(modName in mods){if(mods.hasOwnProperty(modName)){var modVal = mods[modName];res.push(" ");(elem?buildElemClass(block,elem,modName,modVal,res):buildBlockClass(block,modName,modVal,res))}else{undefined}}}else{undefined};undefined;return (buffer?res:res.join(""))}),"buildClasses": (function (block,elem,mods,buffer){var res = (buffer || []);(elem?buildElemClass(block,elem,undefined,undefined,res):buildBlockClass(block,undefined,undefined,res));this.buildModsClasses(block,elem,mods,buffer);return (buffer?res:res.join(""))})}))})(BEM);var buildEscape = (function (){var ts = ({"\"": "&quot;","&": "&amp;","<": "&lt;",">": "&gt;"}),f = (function (t){return (ts[t] || t)});return (function (r){return (function (s){return ("" + s).replace(r,f)})})})(),ctx = ({"ctx": this,"_start": true,"apply": arguments["callee"],"_buf": [],"_": ({"isArray": (function (obj){return (toString.call(obj) === "[object Array]")}),"isSimple": (function (obj){var t = (typeof obj);return ((t === "string") || (t === "number"))}),"isShortTag": (function (t){return SHORT_TAGS.hasOwnProperty(t)}),"extend": (function (o1,o2){if(((! o1) || (! o2))){return (o1 || o2)}else{undefined};undefined;var res = ({}),n = undefined;for(n in o1){(o1.hasOwnProperty(n) && (res[n]=o1[n]))};undefined;for(n in o2){(o2.hasOwnProperty(n) && (res[n]=o2[n]))};undefined;return res}),"xmlEscape": buildEscape(/[&<>]/g),"attrEscape": buildEscape(/["&<>]/g)}),"BEM": BEM,"isFirst": (function (){return (this["position"] === (1))}),"isLast": (function (){return (this["position"] === this["_listLength"])})});ctx.apply(ctx);return ctx["_buf"].join("")};return;}/*407*/return this["ctx"]["content"];return;}/*413*/return undefined;return;}/*414*/{var _this = this,BEM = _this["BEM"],v = this["ctx"],buf = this["_buf"],tag = undefined;{var __o9 = this,__v9 = __o9["_mode"];(__o9["_mode"]="tag");(tag=this.apply());(__o9["_mode"]=__v9)}(tag || (tag=(v["tag"] || "div")));var jsParams = undefined,js = undefined;if((v["block"] && (v["js"] !== false))){{var __o11 = this,__v11 = __o11["_mode"];(__o11["_mode"]="js");(js=this.apply());(__o11["_mode"]=__v11)};undefined;(js=(js?this["_"].extend(v["js"],((js === true)?({}):js)):((v["js"] === true)?({}):v["js"])));(js && ((jsParams=({}))[v["block"]]=js))}else{undefined}buf.push("<",tag);var isBEM = undefined;{var __o13 = this,__v13 = __o13["_mode"];(__o13["_mode"]="bem");(isBEM=this.apply());(__o13["_mode"]=__v13)}(((typeof isBEM) != "undefined") || (isBEM=(((typeof v["bem"]) != "undefined")?v["bem"]:(v["block"] || v["elem"]))));var cls = undefined;{var __o15 = this,__v15 = __o15["_mode"];(__o15["_mode"]="cls");(cls=this.apply());(__o15["_mode"]=__v15)}(cls || (cls=v["cls"]));if((isBEM || cls)){buf.push(" class=\"");if(isBEM){BEM["INTERNAL"].buildClasses(this["block"],v["elem"],(v["elemMods"] || v["mods"]),buf);var mix = undefined;{var __o17 = this,__v17 = __o17["_mode"];(__o17["_mode"]="mix");(mix=this.apply());(__o17["_mode"]=__v17)};undefined;(v["mix"] && (mix=(mix?mix.concat(v["mix"]):v["mix"])));(mix && mix.forEach((function (mix){var hasItem = (mix["block"] || mix["elem"]),block = (mix["block"] || _this["block"]);(hasItem && buf.push(" "));BEM["INTERNAL"][(hasItem?"buildClasses":"buildModsClasses")](block,(mix["elem"] || (mix["block"]?undefined:_this["elem"])),(mix["elemMods"] || mix["mods"]),buf);(mix["js"] && ((jsParams || (jsParams=({})))[block]=((mix["js"] === true)?({}):mix["js"])))})))}else{undefined};undefined;(cls && buf.push((isBEM?" ":""),cls));(jsParams && buf.push(" i-bem"));buf.push("\"")}else{undefined}if(jsParams){var jsAttr = undefined;{var __o19 = this,__v19 = __o19["_mode"];(__o19["_mode"]="jsAttr");(jsAttr=this.apply());(__o19["_mode"]=__v19)};undefined;buf.push(" ",(jsAttr || "onclick"),"=\"return ",this["_"].attrEscape(JSON.stringify(jsParams)),"\"")}else{undefined}var attrs = undefined;{var __o21 = this,__v21 = __o21["_mode"];(__o21["_mode"]="attrs");(attrs=this.apply());(__o21["_mode"]=__v21)}(attrs=this["_"].extend(attrs,v["attrs"]));if(attrs){var name = undefined;for(name in attrs){buf.push(" ",name,"=\"",this["_"].attrEscape(attrs[name]),"\"")}}else{undefined}if(this["_"].isShortTag(tag)){buf.push("/>")}else{buf.push(">");var content = undefined;{var __o23 = this,__v23 = __o23["_mode"];(__o23["_mode"]="content");(content=this.apply());(__o23["_mode"]=__v23)};undefined;if((content || (content === (0)))){var isBEM = (this["block"] || this["elem"]);{var __o25 = this,__v25 = __o25["_notNewList"];(__o25["_notNewList"]=false);var __o26 = this,__v26 = __o26["position"];(__o26["position"]=(isBEM?(1):this["position"]));var __o27 = this,__v27 = __o27["_listLength"];(__o27["_listLength"]=(isBEM?(1):this["_listLength"]));var __o28 = this,__v28 = __o28["ctx"];(__o28["ctx"]=content);var __o29 = this,__v29 = __o29["_mode"];(__o29["_mode"]="");this.apply();(__o29["_mode"]=__v29);(__o28["ctx"]=__v28);(__o27["_listLength"]=__v27);(__o26["position"]=__v26);(__o25["_notNewList"]=__v25)}}else{undefined};undefined;buf.push("</",tag,">")}};return;}/*415*/if((! (! this["_mode"])) === false) {
/*416*/if((! this["_"].isSimple(this["ctx"])) === false) {
/*417*/{this["_listLength"]--;this["_buf"].push(this["ctx"])};return;} else {
/*418*/if((! (! this["ctx"])) === false) {
/*419*/this["_listLength"]--;return;} else {
/*420*/if((! this["_"].isArray(this["ctx"])) === false) {
/*421*/{var v = this["ctx"],l = v["length"],i = (0),prevPos = this["position"],prevNotNewList = this["_notNewList"];if(prevNotNewList){(this["_listLength"]+=(l - (1)))}else{(this["position"]=(0));(this["_listLength"]=l)}(this["_notNewList"]=true);while((i < l)){var __o7 = this,__v7 = __o7["ctx"];(__o7["ctx"]=v[i++]);this.apply();(__o7["ctx"]=__v7)}(prevNotNewList || (this["position"]=prevPos))};return;} else {
/*422*/if((! true) === false) {
/*423*/{var vBlock = this["ctx"]["block"],vElem = this["ctx"]["elem"],block = (this["_currBlock"] || this["block"]);{var __o0 = this,__v0 = __o0["_mode"];(__o0["_mode"]="default");var __o1 = this,__v1 = __o1["block"];(__o1["block"]=(vBlock || (vElem?block:undefined)));var __o2 = this,__v2 = __o2["_currBlock"];(__o2["_currBlock"]=((vBlock || vElem)?undefined:block));var __o3 = this,__v3 = __o3["elem"];(__o3["elem"]=this["ctx"]["elem"]);var __o4 = this,__v4 = __o4["mods"];(__o4["mods"]=((this["ctx"]["mods"] || this["mods"]) || ({})));var __o5 = this,__v5 = __o5["elemMods"];(__o5["elemMods"]=(this["ctx"]["elemMods"] || ({})));{((this["block"] || this["elem"])?(this["position"]=((this["position"] || (0)) + (1))):this["_listLength"]--);this.apply()}(__o5["elemMods"]=__v5);(__o4["mods"]=__v4);(__o3["elem"]=__v3);(__o2["_currBlock"]=__v2);(__o1["block"]=__v1);(__o0["_mode"]=__v0)}};return;} else {
break l425;}}}}} else {
break l425;}}/*425*/throw true;return;};