(this.webpackJsonpcornhacksreact=this.webpackJsonpcornhacksreact||[]).push([[0],{100:function(e,t,n){},230:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(88),c=n.n(r),o={YELLOW:"#fde700",GOLD:"#fdb716",GREEN:"#26b24b",DARK_GREEN:"#019848",BLUE:"#0d1f42",DARK_BLUE:"#081123",WHITE:"#ffffff"},i=n(89),s=n.n(i),u=(n(100),function(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement("div",{className:"infinite-rotation-y bounce"},t),a.a.createElement("div",{className:"shadow"}))}),m={},E={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",textAlign:"center",flexDirection:"column"},f={width:"300px",height:"300px"},p={width:"100%",height:"100%",background:"radial-gradient(".concat(o.BLUE,", ").concat(o.DARK_BLUE,")"),position:"fixed",display:"flex"},d={color:o.WHITE,fontSize:"25px"},b=function(){return a.a.createElement("div",{style:p},a.a.createElement("div",{style:E},a.a.createElement(u,null,a.a.createElement("img",{src:s.a,style:f,alt:"logo"})),a.a.createElement("h1",{className:"cornhacks-logo-text",style:m},a.a.createElement("span",{style:{color:o.YELLOW}},"CORN"),a.a.createElement("span",{style:{color:o.GOLD}},"HACKS")," ",a.a.createElement("span",{style:{color:o.GREEN}},"2021")),a.a.createElement("p",{style:d},"This site is currently under construction.",a.a.createElement("br",null),"If you have any questions, please email us at",a.a.createElement("br",null),a.a.createElement("a",{href:"mailto:info@cornhacks.com",style:{color:o.YELLOW}},"info@cornhacks.com"))))},y=n(94),h=n(90),g=n.n(h),v={width:"100%",height:"100%",background:"radial-gradient(".concat(o.BLUE,", ").concat(o.DARK_BLUE,")"),position:"fixed",display:"flex"},L={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",textAlign:"center",flexDirection:"column"},x={color:o.WHITE,fontSize:"25px"},S=function(){var e=Object(l.useState)({platinum:[],gold:[],silver:[],bronze:[]}),t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(l.useEffect)((function(){new g.a({apiKey:"keypAEcRMOygtbbvI"}).base("app6iupN2IozbTzN1")("Companies").select({filterByFormula:"IF({Sponsor Level} = BLANK(), FALSE(), TRUE())",view:"All companies: by employees"}).firstPage((function(e,t){e?console.error(e):(console.log(t),r({platinum:t.filter((function(e){return"Platinum"===e.fields["Sponsor Level"]})),gold:t.filter((function(e){return"Gold"===e.fields["Sponsor Level"]})),silver:t.filter((function(e){return"Silver"===e.fields["Sponsor Level"]})),bronze:t.filter((function(e){return"Bronze"===e.fields["Sponsor Level"]}))}))}))}),[]),console.log(n),n?a.a.createElement("div",{style:v},a.a.createElement("div",{style:L},a.a.createElement("p",{style:x},a.a.createElement("b",null,"Platinum Sponsors:"),a.a.createElement("br",null),n.platinum.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,e.fields.Company),a.a.createElement("br",null))})),a.a.createElement("br",null),a.a.createElement("b",null,"Gold Sponsors:"),a.a.createElement("br",null),n.gold.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,e.fields.Company),a.a.createElement("br",null))})),a.a.createElement("br",null),a.a.createElement("b",null,"Silver Sponsors:"),a.a.createElement("br",null),n.silver.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,e.fields.Company),a.a.createElement("br",null))})),a.a.createElement("br",null),a.a.createElement("b",null,"Bronze Sponsors:"),a.a.createElement("br",null),a.a.createElement("ul",null,n.bronze.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,e.fields.Company),a.a.createElement("br",null))}))),a.a.createElement("br",null)))):a.a.createElement("div",{style:v},a.a.createElement("div",{style:L},a.a.createElement("p",{style:x},"Loading...")))},k=n(91),A=n(11);n(230);c.a.render(a.a.createElement((function(){return a.a.createElement(k.a,null,a.a.createElement(A.d,null,a.a.createElement(A.b,{path:"/under-construction"},a.a.createElement(b,null)),a.a.createElement(A.b,{path:"/sandbox/"},a.a.createElement(S,null)),a.a.createElement(A.a,{to:"/under-construction"})))}),null),document.getElementById("root"))},89:function(e,t,n){e.exports=n.p+"static/media/cornhacks.2ca6be0e.svg"},95:function(e,t,n){e.exports=n(235)}},[[95,1,2]]]);
//# sourceMappingURL=main.ce6a1eeb.chunk.js.map