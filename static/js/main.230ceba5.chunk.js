(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e){e.exports={a:"2.2.0"}},32:function(e,n,t){e.exports=t.p+"static/media/pokeball.57a0eb34.png"},35:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAB6ElEQVR42u2XvY3CQBBGV3IAESEp5DRgOnAJlOASKMElUIJLoAM34BxSQiIIkOayk846ifXs/Fn6XgHjXe/uzPtSAgAAAAAAAIAJdKVIXOdv4ECfMMv/0IFzBpcwG7jwLtGWniGW/6Qt9x2cQ2zgzH/IK7q5L/9Gq5JedHLfwKm0nQ6uyx/K50GtUDT/Z9USZXvxY829rr1M4R29JoXvtBZf/pruk6+8aCdVvBNsbfktu5MrvqGH2HDJHZoP2kh+oBUa7/na0soecEWjiGDliuNIlfQdbQQUN1/dG5uE0ET/NQYHrXs5DZ6adntQbnb6DVp53FiMyG8J4U17drU9vUXt31q5rDTxu/QeWXWOdqKukhCU7N/q6NXs3yYhqNq/RftTtX/9AaRu/9oKoG7/uhJmYv+aGmxk/1pLMbN/nctgav8az9HU/uUborn9S48kc/uXTQgu9i+pZU72L5UQ3OxfKiE42r9EQnC1//KE4G7/pQnB3f7LEkII+y9JCCHsn58Qwtg/NyEEsn9mQohj/8yEEMn+mQkhjv0zE0Ik+2cmhDj2z0wIkeyfmRAi2T8zIQxpSfyTEOq0LCYJoU9L409CiGf/MxNCl5bIb0KIaf8zEkKblgpVNAa2/8yE0CQAAAAAAAAAUOEHM7p7Uu4BUCwAAAAASUVORK5CYII="},39:function(e,n,t){e.exports=t(50)},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(28),l=t.n(o),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=t(2),s=t(3),p=t(1),m=t.n(p);function d(){var e=Object(u.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0.5em;\n  margin-bottom: 1em;\n"]);return d=function(){return e},e}function f(){var e=Object(u.a)(["\n  width: 100%;\n  text-align: left;\n"]);return f=function(){return e},e}function g(){var e=Object(u.a)(["\n  box-sizing: border-box;\n  width: 100%;\n"]);return g=function(){return e},e}function E(){var e=Object(u.a)(["\n  flex: ","%;\n"]);return E=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return b=function(){return e},e}function h(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: nowrap;\n"]);return h=function(){return e},e}function v(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  @media only screen and (max-width: 800px) {\n    flex-flow: column nowrap;\n  }\n"]);return v=function(){return e},e}function k(){var e=Object(u.a)(["\n  body {\n    margin: 0 auto;\n    width: 100%;\n    background-color: #111314;\n  }\n"]);return k=function(){return e},e}function w(){var e=Object(u.a)(["\n  font-family: sans-serif;\n  margin: 0 auto;\n  width: 80%;\n  max-width: 1280px;\n  min-width: 800px;\n  max-height: 1080px;\n  height: 800px;\n  @media only screen and (max-width: 800px) {\n    width: 100%;\n    min-width: auto;\n  }\n\n"]);return w=function(){return e},e}var x={},O=s.a.div(w());Object(s.b)(k());x.Row=s.a.div(v()),x.StaticRow=s.a.div(h()),x.Centered=s.a.div(b()),x.Col=s.a.div(E(),function(e){return 8.33*e.span}),x.propTypes={span:m.a.number.isRequired},x.Image=s.a.img(g()),x.Table=s.a.table(f()),x.Select=s.a.select(d());var y={darker:"#1d1f21",dark:"#2d2f31",light:"#d4d8db",accent:"crimson",accentLight:"#ff1645",stat:{hp:"#FF5959",atk:"#F5AC78",def:"#FAE078",spatk:"#9DB7F5",spdef:"#A7DB8D",speed:"#FA92B2"}},j=t(31);function A(){var e=Object(u.a)(["\n  box-sizing: border-box;\n  padding: 1px 1em;\n  background-color: ",";\n  color: ",";\n  & h1 {\n    display: inline-block;\n    margin-right: 8px;\n    & a:link, & a:visited {\n      color: ","\n      text-decoration: none;\n    }\n  }\n"]);return A=function(){return e},e}var C=s.a.header(A(),y.dark,y.light,y.light),R=function(){return r.a.createElement(C,null,r.a.createElement("h1",null,r.a.createElement("a",{href:"/dexplorer/"},"Dexplorer")),r.a.createElement("small",null,"v",j.a))};function G(){var e=Object(u.a)(["\n  &:link, &:visited {\n    color: ",";\n  }\n"]);return G=function(){return e},e}function S(){var e=Object(u.a)(["\n  box-sizing: border-box;\n  padding: 1px 1em;\n  background-color: ",";\n  color: ",";\n"]);return S=function(){return e},e}var I=s.a.footer(S(),y.dark,y.light),_=s.a.a(G(),y.light),L=function(){return r.a.createElement(I,null,r.a.createElement("p",null,"Developed by Brian Lindner. Made with ",r.a.createElement(_,{href:"https://reactjs.org"},"React")," and the ",r.a.createElement(_,{href:"https://pokeapi.co"},"PokeAPI.")))},T=t(53),U=t(51),Q=t(21),V=t(12),B=t(13),N=t(22),z=t(14),D=t(23),H=t(52),M=t(32),K=t.n(M);function X(){var e=Object(u.a)(["\n  height: 100px;\n  width: 100px;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: norepeat;\n  background-position: center;\n  animation: "," 1s ease-out infinite;\n  margin: 2em;\n"]);return X=function(){return e},e}function q(){var e=Object(u.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  40% {\n    transform: rotate(380deg);\n  }\n  60% {\n    transform: rotate(355deg);\n  }\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n"]);return q=function(){return e},e}var J=Object(s.c)(q()),P=s.a.div(X(),function(e){return e.url},J);P.propTypes={url:m.a.string.isRequired};var W=function(){return r.a.createElement(P,{url:K.a})};function F(){var e=Object(u.a)(["\n  padding: 1em 0 1em 1em;\n  display: block;\n  &:link, &:visited {\n    text-decoration: none;\n    color: ",";\n  }\n  &.activeLink {\n    background-color: ",";\n    &:hover {\n      background-color: ",";\n    }\n  }\n  &:hover {\n    background-color: ",";\n  }\n"]);return F=function(){return e},e}function Y(){var e=Object(u.a)(["\n  list-style-type: none;\n"]);return Y=function(){return e},e}function Z(){var e=Object(u.a)(["\n  width: 100%;\n  padding-left: 0;\n  margin: 0;\n  overflow-y: scroll;\n  height: 875px;\n  @media only screen and (max-width: 800px) {\n    max-height: 300px;\n  }\n  scrollbar-color: ","\n"]);return Z=function(){return e},e}function $(){var e=Object(u.a)(["\n  padding: 1em;\n  box-sizing: border-box;\n  width: 100%;\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-radius: 0;'\n"]);return $=function(){return e},e}function ee(){var e=Object(u.a)(["\n  background-color: ",";\n  width: 100%;\n  height: 100%;\n"]);return ee=function(){return e},e}var ne=s.a.aside(ee(),y.darker),te=s.a.input($(),y.dark,y.light),ae=s.a.ul(Z(),y.dark),re=s.a.li(Y()),oe=Object(s.a)(H.a)(F(),y.light,y.accent,y.accentLight,y.dark),le=function(e){function n(){return Object(V.a)(this,n),Object(N.a)(this,Object(z.a)(n).apply(this,arguments))}return Object(D.a)(n,e),Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.getList()}},{key:"render",value:function(){var e=this.props,n=e.status,t=e.filterList,a=e.getSpecies,o=e.list;switch(n){case"loading":default:return r.a.createElement(ne,null,r.a.createElement(x.Centered,null,r.a.createElement(W,null)));case"ready":return r.a.createElement(ne,null,r.a.createElement(te,{placeholder:"Search by name...",onChange:function(e){return t(e.target.value.trim())}}),r.a.createElement(ae,null,o.filter(function(e){return e.visible}).map(function(e,n){return r.a.createElement(oe,{to:e.name,key:n,activeClassName:"activeLink",onClick:function(){return a(e.name)}},r.a.createElement(re,null,e.prettyName))})));case"errored":return r.a.createElement(ne,null,r.a.createElement(x.Centered,null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Error!"},"\ud83d\ude22"))))}}}]),n}(a.Component),ce=t(9),ie=function(e){return function(n,t){if(e in n.versionGroups&&e in t.versionGroups){var a=n.versionGroups[e].level,r=t.versionGroups[e].level;return 0===a&&0===r?ue(n,t):0===a?1:0===r?-1:a===r?ue(n,t):a>r?1:-1}return e in n.versionGroups?e in t.versionGroups?void 0:1:-1}},ue=function(e,n){return e.name>n.name?1:-1};function se(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]||(e="https://pokeapi.co/api/v2/".concat(e)),window.fetch(e,{cors:"no-cors"}).then(function(e){if(e.ok)return e.json();throw e})}var pe="REQUEST_LIST",me=function(){return{type:pe}},de="RECEIVE_LIST",fe=function(e){return{type:de,list:e}},ge="FILTER_LIST",Ee="LIST_ERROR",be=function(){return{type:Ee}},he=function(e){return e.split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join("-")},ve=function(e){return function(n){n(we()),se("pokemon-species/".concat(e,"/")).then(function(e){n(Oe(e));var t=e.varieties.find(function(e){return e.is_default});n(Ae(t.pokemon.name))}).catch(function(){return n(je())})}},ke="REQUEST_SPECIES",we=function(){return{type:ke}},xe="RECEIVE_SPECIES",Oe=function(e){return{type:xe,data:e}},ye="INFO_REQUEST_ERROR",je=function(){return{type:ye}},Ae=function(e){return function(n){n(Re()),se("pokemon/".concat(e,"/")).then(function(e){return n(Se(e))}).catch(function(){return n(je())})}},Ce="REQUEST_VARIANT",Re=function(){return{type:Ce}},Ge="RECEIVE_VARIANT",Se=function(e){return{type:Ge,data:e}},Ie="SELECT_GROUP",_e=function(e,n){var t;return function(){clearInterval(t);var a=this,r=arguments;t=setTimeout(function(){t=null,e.apply(a,r)},n)}},Le=Object(ce.c)(function(e){return e.list},function(e){return{getList:function(){return e(function(e){e(me()),se("pokemon-species/").then(function(e){return e.results.map(function(e){return{name:e.name,prettyName:he(e.name),visible:!0}})}).then(function(e){return e.sort(ue)}).then(function(n){return e(fe(n))}).catch(function(){return e(be())})})},filterList:_e(function(n){return e(function(e){return{type:ge,term:e}}(n))},100),getSpecies:function(n){return e(ve(n))}}})(le),Te=t(5),Ue=t(35),Qe=t.n(Ue);function Ve(){var e=Object(u.a)(["\n  image-rendering: pixelated;\n"]);return Ve=function(){return e},e}function Be(){var e=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  appearance: none;\n  border-radius: 0;\n  border: 1px solid ",";\n  background-image: url(",");\n  background-size: 1em;\n  background-repeat: no-repeat;\n  background-position: 98% center;\n  padding: 0.5em;\n  box-sizing: border-box;\n"]);return Be=function(){return e},e}var Ne=Object(s.a)(x.Select)(Be(),y.darker,y.light,y.dark,Qe.a),ze=Object(s.a)(x.Image)(Ve());function De(){var e=Object(u.a)(["\n  font-size: 5em;\n"]);return De=function(){return e},e}function He(){var e=Object(u.a)(["\n  position:relative;\n  height: 100%;\n  color: ",";\n  text-align: right;\n  padding: 0 0.25em 0 0;\n  box-sizing: border-box;\n  width: ","%;\n  background-color: ",";\n"]);return He=function(){return e},e}function Me(){var e=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: 1.25em;\n  background-color: ",";\n"]);return Me=function(){return e},e}function Ke(){var e=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  margin: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n"]);return Ke=function(){return e},e}function Xe(){var e=Object(u.a)(["\n  overflow-y: scroll;\n  max-height: 200px;\n"]);return Xe=function(){return e},e}function qe(){var e=Object(u.a)(["\n  text-transform: capitalize;\n"]);return qe=function(){return e},e}function Je(){var e=Object(u.a)(["\n  padding: 1em;\n  @media only screen and (max-width: 800px) {\n    text-align: center;\n  }\n\n"]);return Je=function(){return e},e}function Pe(){var e=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n  height: 100%;\n  width: 100%;\n"]);return Pe=function(){return e},e}var We=s.a.div(Pe(),y.dark,y.light),Fe=s.a.div(Je()),Ye=s.a.span(qe()),Ze=s.a.div(Xe()),$e=s.a.div(Ke(),function(e){return e.color},y.darker);$e.propTypes={color:m.a.string},$e.defaultProps={color:y.light};var en=s.a.td(Me(),y.darker),nn=s.a.div(He(),y.darker,function(e){return e.percent},function(e){return e.color});nn.propTypes={percent:m.a.number.isRequired,color:m.a.string},nn.defaultProps={color:y.light};var tn=function(e){var n=e.percent,t=e.color,a=e.label;return r.a.createElement(en,null,r.a.createElement(nn,{percent:n,color:t},a))},an=s.a.div(De()),rn=function(e){var n=e.sprite,t=e.variants,a=e.getVariant,o=e.currentVariant;return r.a.createElement(Fe,null,r.a.createElement(x.Centered,null,n?r.a.createElement(ze,{src:n}):r.a.createElement(an,null,"?")),t.length>1&&r.a.createElement(Ne,{onChange:function(e){return a(e.target.value)},value:o},t.map(function(e,n){return r.a.createElement("option",{value:e.name,key:n},e.name)})))},on=function(e){return r.a.createElement(Fe,null,r.a.createElement(Ye,null,r.a.createElement("small",null,"#",null!==e.pokedexNumber?e.pokedexNumber:"???"),r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.genus),r.a.createElement("p",null,"Types:\xa0",e.types.length>1?e.types[0]+" / "+e.types[1]:e.types[0]),r.a.createElement("p",null,"Abilities:\xa0",e.abilities.length>1?e.abilities[0]+" / "+e.abilities[1]:e.abilities[0]),r.a.createElement("p",null,"Height: ",e.height,"m"),r.a.createElement("p",null,"Weight: ",e.weight,"kg")))},ln=function(e){return r.a.createElement(Fe,null,r.a.createElement("h2",null,"Stats"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"HP"),r.a.createElement(tn,{label:e.hp,percent:e.hp/255*100,color:y.stat.hp})),r.a.createElement("tr",null,r.a.createElement("td",null,"Attack"),r.a.createElement(tn,{label:e.atk,percent:e.atk/255*100,color:y.stat.atk})),r.a.createElement("tr",null,r.a.createElement("td",null,"Defense"),r.a.createElement(tn,{label:e.def,percent:e.def/255*100,color:y.stat.def})),r.a.createElement("tr",null,r.a.createElement("td",null,"Sp.Atk."),r.a.createElement(tn,{label:e.spatk,percent:e.spatk/255*100,color:y.stat.spatk})),r.a.createElement("tr",null,r.a.createElement("td",null,"Sp.Def."),r.a.createElement(tn,{label:e.spdef,percent:e.spdef/255*100,color:y.stat.spdef})),r.a.createElement("tr",null,r.a.createElement("td",null,"Speed"),r.a.createElement(tn,{label:e.speed,percent:e.speed/255*100,color:y.stat.speed})))))},cn=function(e){return r.a.createElement(Fe,null,r.a.createElement("h2",null,"Effort Values"),r.a.createElement(x.Row,null,r.a.createElement(x.Col,{span:"4"},r.a.createElement($e,{color:y.stat.hp},"HP",r.a.createElement("br",null),e.hp)),r.a.createElement(x.Col,{span:"4"},r.a.createElement($e,{color:y.stat.atk},"Atk",r.a.createElement("br",null),e.atk)),r.a.createElement(x.Col,{span:"4"},r.a.createElement($e,{color:y.stat.def},"Def",r.a.createElement("br",null),e.def))),r.a.createElement(x.Row,null,r.a.createElement(x.Col,{span:"4"},r.a.createElement($e,{color:y.stat.spatk},"Sp.Atk.",r.a.createElement("br",null),e.spatk)),r.a.createElement(x.Col,{span:"4"},r.a.createElement($e,{color:y.stat.spdef},"Sp.Def.",r.a.createElement("br",null),e.spdef)),r.a.createElement(x.Col,{span:"4"},r.a.createElement($e,{color:y.stat.speed},"Speed",r.a.createElement("br",null),e.speed))))},un=function(e){var n=e.currentGroup,t=e.selectGroup,a=e.groups,o=e.moves;return r.a.createElement(Fe,null,r.a.createElement("h2",null,"Moveset"),r.a.createElement(Ne,{onChange:function(e){return t(e.target.value)},selected:n},a.map(function(e,n){return r.a.createElement("option",{value:e,key:n},e)})),r.a.createElement(x.StaticRow,null,r.a.createElement(x.Col,{span:"2"},r.a.createElement("strong",null,"Lv.")),r.a.createElement(x.Col,{span:"5"},r.a.createElement("strong",null,"Move")),r.a.createElement(x.Col,{span:"5"},r.a.createElement("strong",null,"Learned By"))),r.a.createElement(Ze,null,o.filter(function(e){return n in e.versionGroups}).map(function(e,t){return r.a.createElement(x.StaticRow,{key:t},r.a.createElement(x.Col,{span:"2"},0===e.versionGroups[n].level?"-":e.versionGroups[n].level),r.a.createElement(x.Col,{span:"5"},r.a.createElement(Ye,null,e.name)),r.a.createElement(x.Col,{span:"5"},r.a.createElement(Ye,null,e.versionGroups[n].learnedBy)))})))},sn=function(e){return r.a.createElement(Fe,null,r.a.createElement("h2",null,"Other Info"),r.a.createElement("p",null,r.a.createElement(Ye,null,r.a.createElement("b",null,"Egg Group"),"\xa0",e.eggGroups.length>1?e.eggGroups[0]+" / "+e.eggGroups[1]:e.eggGroups[0])),r.a.createElement("p",null,r.a.createElement("b",null,"Catch Rate"),"\xa0",e.captureRate),r.a.createElement("p",null,r.a.createElement("b",null,"Growth Rate"),"\xa0",r.a.createElement(Ye,null,e.growthRate)),r.a.createElement("p",null,r.a.createElement("b",null,"Base Happiness"),"\xa0",e.baseHappiness),r.a.createElement("p",null,r.a.createElement("b",null,"Base Experience"),"\xa0",e.baseExp),r.a.createElement("p",null,r.a.createElement("b",null,"Gender Ratio")," ",e.genderRatio<0?"Genderless":100-e.genderRatio+"% male to "+e.genderRatio+"% female"))},pn=function(e){function n(){return Object(V.a)(this,n),Object(N.a)(this,Object(z.a)(n).apply(this,arguments))}return Object(D.a)(n,e),Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.pokemon&&this.props.getSpecies(this.props.pokemon)}},{key:"componentDidUpdate",value:function(){this.props.pokemon?document.title="Dexplorer - "+this.props.pokemon:document.title="Dexplorer"}},{key:"render",value:function(){var e=this.props,n=e.status,t=e.currentGroup,a=e.currentVariant,o=e.info,l=e.stats,c=e.effortValues,i=e.moves,u=e.groups,s=e.misc,p=e.getVariant,m=e.selectGroup;switch(n){case"loading":return r.a.createElement(fn,null);case"errored":return r.a.createElement(dn,null);case"ready":return r.a.createElement(We,null,r.a.createElement(x.Row,null,r.a.createElement(x.Col,{span:"4"},r.a.createElement(rn,Object.assign({},o,{currentVariant:a,getVariant:p}))),r.a.createElement(x.Col,{span:"8"},r.a.createElement(on,o))),r.a.createElement(x.Row,null,r.a.createElement(x.Col,{span:"6"},r.a.createElement(ln,l)),r.a.createElement(x.Col,{span:"6"},r.a.createElement(cn,c))),r.a.createElement(x.Row,null,r.a.createElement(x.Col,{span:"6"},r.a.createElement(un,{moves:i,groups:u,currentGroup:t,selectGroup:m})),r.a.createElement(x.Col,{span:"6"},r.a.createElement(sn,s))));default:return r.a.createElement(mn,null)}}}]),n}(a.Component),mn=function(){return r.a.createElement(We,null,r.a.createElement(x.Centered,null,r.a.createElement(Fe,null,r.a.createElement("h3",null,"Welcome! Select a Pokemon from the list to begin."))))},dn=function(){return r.a.createElement(We,null,r.a.createElement(x.Centered,null,r.a.createElement("h1",null,"Something went wrong, sorry!")))},fn=function(){return r.a.createElement(We,null,r.a.createElement(x.Centered,null,r.a.createElement(W,null)))},gn=Object(ce.c)(function(e,n){return Object(Te.a)({},e.info,{pokemon:n.match.params.pokemon})},function(e){return{getSpecies:function(n){return e(ve(n))},getVariant:function(n){return e(Ae(n))},selectGroup:function(n){return e({type:Ie,group:n})}}})(pn),En="en",bn={currentVariant:"",currentGroup:"",status:"",info:{pokedexNumber:0,name:"",genus:"",types:[],abilities:[],height:0,weight:0,sprite:"",variants:[]},stats:{hp:0,atk:0,def:0,spatk:0,spdef:0,spd:0},effortValues:{hp:0,atk:0,def:0,spatk:0,spdef:0,spd:0},moves:[],groups:[],misc:{eggGroups:[],captureRate:0,growthRate:"",baseHappiness:0,baseExp:0,genderRatio:0}};function hn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ye:return Object(Te.a)({},e,{status:"errored"});case ke:return Object(Te.a)({},e,{status:"loading"});case xe:var t=null,a=n.data.pokedex_numbers.find(function(e){return"national"===e.pokedex.name});void 0!==a&&(t=a.entry_number);var r=n.data.varieties.map(function(e){return{name:e.pokemon.name,isSelected:e.is_default}});return Object(Te.a)({},bn,{currentVariant:n.data.name,status:"loading",info:Object(Te.a)({},bn.info,{pokedexNumber:t,name:n.data.names.find(function(e){return e.language.name===En}).name,genus:n.data.genera.find(function(e){return e.language.name===En}).genus,variants:r}),misc:Object(Te.a)({},bn.misc,{eggGroups:n.data.egg_groups.map(function(e){return e.name}),captureRate:n.data.capture_rate,growthRate:n.data.growth_rate.name,baseHappiness:n.data.base_happiness,genderRatio:n.data.gender_rate/8*100})});case Ce:return Object(Te.a)({},e);case Ge:var o=n.data.stats.find(function(e){return"hp"===e.stat.name}),l=n.data.stats.find(function(e){return"attack"===e.stat.name}),c=n.data.stats.find(function(e){return"defense"===e.stat.name}),i=n.data.stats.find(function(e){return"special-attack"===e.stat.name}),u=n.data.stats.find(function(e){return"special-defense"===e.stat.name}),s=n.data.stats.find(function(e){return"speed"===e.stat.name}),p=[],m=n.data.moves.map(function(e){return{name:e.move.name,versionGroups:e.version_group_details.reduce(function(e,n){var t=n.version_group.name;return p.includes(t)||p.push(t),e[t]={level:n.level_learned_at,learnedBy:n.move_learn_method.name},e},{})}}).sort(ie(p[0]));return Object(Te.a)({},e,{currentVariant:n.data.name,currentGroup:p[0],status:"ready",info:Object(Te.a)({},e.info,{abilities:n.data.abilities.map(function(e){return e.ability.name}),types:n.data.types.map(function(e){return e.type.name}),height:n.data.height/10,weight:n.data.weight/10,sprite:n.data.sprites.front_default}),stats:{hp:o.base_stat,atk:l.base_stat,def:c.base_stat,spatk:i.base_stat,spdef:u.base_stat,speed:s.base_stat},effortValues:{hp:o.effort,atk:l.effort,def:c.effort,spatk:i.effort,spdef:u.effort,speed:s.effort},moves:m,groups:p,misc:Object(Te.a)({},e.misc,{baseExp:n.data.base_experience})});case Ie:return Object(Te.a)({},e,{currentGroup:n.group,moves:e.moves.sort(ie(n.group))});default:return e}}var vn={status:"loading",list:[]};function kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case pe:return Object(Te.a)({},e,{status:"loading"});case de:return Object(Te.a)({},e,{status:"ready",list:n.list});case Ee:return Object(Te.a)({},e,{status:"errored"});case ge:return Object(Te.a)({},e,{list:e.list.map(function(e){return Object(Te.a)({},e,{visible:e.name.includes(n.term)})})});default:return e}}var wn=t(20),xn=t(10),On=t(36),yn=t(19),jn=function(e){return Object(xn.c)({info:hn,list:kn,router:Object(Q.b)(e)})},An=Object(wn.a)(),Cn=function(){return Object(xn.a)(On.a,Object(yn.a)(An))};var Rn,Gn=function(){return r.a.createElement(Q.a,{history:An},r.a.createElement(O,null,r.a.createElement(x.Row,null,r.a.createElement(x.Col,{span:"12"},r.a.createElement(R,null))),r.a.createElement(x.Row,null,r.a.createElement(x.Col,{span:"4"},r.a.createElement(Le,null)),r.a.createElement(x.Col,{span:"8"},r.a.createElement(T.a,null,r.a.createElement(U.a,{path:"/:pokemon([a-z-]+)?",component:gn})))),r.a.createElement(x.Row,null,r.a.createElement(x.Col,{span:"12"},r.a.createElement(L,null)))))},Sn=Object(xn.d)(jn(An),Rn,Cn());l.a.render(r.a.createElement(ce.a,{store:Sn},r.a.createElement(Gn,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/dexplorer",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/dexplorer","/service-worker.js");c?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):i(e)})}}()}},[[39,2,1]]]);
//# sourceMappingURL=main.230ceba5.chunk.js.map