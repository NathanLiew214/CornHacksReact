(this.webpackJsonpcornhacksreact=this.webpackJsonpcornhacksreact||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},111:function(e,t,a){var n={"./Chairs.png":112,"./Corndell.png":113,"./Gradiente.png":114};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=111},112:function(e,t,a){e.exports=a.p+"static/media/Chairs.2c9c26b7.png"},113:function(e,t,a){e.exports=a.p+"static/media/Corndell.bd1142cb.png"},114:function(e,t,a){e.exports=a.p+"static/media/Gradiente.6eac09b4.png"},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(92),l=a.n(o),s={YELLOW:"#fde700",GOLD:"#fdb716",GREEN:"#26b24b",DARK_GREEN:"#019848",BLUE:"#0d1f42",DARK_BLUE:"#081123",WHITE:"#ffffff"},c=a(93),i=a.n(c),m=(a(102),function(e){var t=e.size,a=e.bold,n=e.italics,o=e.underline,l=e.color,s=e.children,c=e.className,i=e.align,m=c?"".concat(c," ch-type"):"ch-type";switch(a&&(m+=" bold"),n&&(m+=" italics"),o&&(m+=" underline"),t){case"h1":return r.a.createElement("h1",{className:m,style:{color:l,textAlign:i}},s);case"h2":return r.a.createElement("h2",{className:m,style:{color:l,textAlign:i}},s);case"h3":return r.a.createElement("h3",{className:m,style:{color:l,textAlign:i}},s);case"h4":return r.a.createElement("h4",{className:m,style:{color:l,textAlign:i}},s);case"h5":var h=m.includes("ch-button")?{textAlign:i}:{color:l,textAlign:i};return r.a.createElement("h5",{className:m,style:h},s);case"h6":return r.a.createElement("h6",{className:m,style:{color:l}},s);default:return r.a.createElement("p",{className:m,style:{color:l,textAlign:i}},s)}});m.defaultProps={bold:!1,italics:!1,underline:!1,color:"#FFFFFF",align:"left"};var h=m,u=(a(103),function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("div",{className:"infinite-rotation-y bounce"},t),r.a.createElement("div",{className:"shadow"}))}),d={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",textAlign:"center",flexDirection:"column"},E={width:"300px",height:"300px"},g={width:"100%",height:"100%",background:"radial-gradient(".concat(s.BLUE,", ").concat(s.DARK_BLUE,")"),position:"fixed",display:"flex"},p={color:s.WHITE,fontSize:"25px"},f=function(){return r.a.createElement("div",{style:g},r.a.createElement("div",{style:d},r.a.createElement(u,null,r.a.createElement("img",{src:i.a,style:E,alt:"logo"})),r.a.createElement(h,{size:"h1",bold:!0,align:"center",className:"cornhacks-logo-text"},r.a.createElement("span",{style:{color:s.YELLOW}},"CORN"),r.a.createElement("span",{style:{color:s.GOLD}},"HACKS")," ",r.a.createElement("span",{style:{color:s.GREEN}},"2021")),r.a.createElement("p",{style:p},"This site is currently under construction.",r.a.createElement("br",null),"If you have any questions, please email us at",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:info@cornhacks.com",style:{color:s.YELLOW}},"info@cornhacks.com"))))},y=a(14),b=a(94),v=a.n(b),k=(a(104),function(e){var t=e.colors,a=e.className,n=e.children,o=e.justifyContent,l=void 0===o?"left":o,s=e.height,c=void 0===s?"100vh":s,i=e.header,m=e.boxShadow,u="",d=!0,E=!1,g=void 0;try{for(var p,f=t[Symbol.iterator]();!(d=(p=f.next()).done);d=!0){var y=p.value;u&&(u+=", "),u+=y}}catch(k){E=!0,g=k}finally{try{d||null==f.return||f.return()}finally{if(E)throw g}}var b=r.a.createElement("div",{className:"ch-header-gradient-hero"},r.a.createElement("img",{className:"ch-logo-gradient-hero",src:v.a,alt:"Cornhacks logo"}),r.a.createElement(h,{bold:!0,size:"h4",align:"left",className:"ch-header-text"},"CORNHACKS 2021"));return r.a.createElement("div",{className:a?"".concat(a," gradient-hero"):"gradient-hero",style:{backgroundImage:"linear-gradient(135deg, ".concat(u,")"),backgroundSize:"".concat(t.length,"00% ").concat(t.length,"00%"),justifyContent:l,height:c}},i&&b,r.a.createElement("div",{className:m?"gradient-hero-body gradient-hero-box-shadow":"gradient-hero-body"},n))}),w=(a(105),a(31)),N=(a(106),function(e){var t,a=e.children,n=e.className,o=e.to,l=e.internal;return t=r.a.createElement(h,{size:"h5",className:n?"".concat(n," ch-button"):"ch-button",align:"center"},a),l?r.a.createElement(w.b,{className:"ch-button-link",to:o},t):r.a.createElement("a",{className:"ch-button-link",href:o},t)}),C=function(){return r.a.createElement(k,{colors:[s.YELLOW,s.GREEN,s.BLUE],height:"70vh",header:!0,boxShadow:!0},r.a.createElement(h,{className:"ch-home-hero-text",size:"h1",bold:!0,align:"center"},"CORNHACKS 2021"),r.a.createElement(h,{size:"h4",align:"center"},"Nebraska's Student-Led Hackathon"),r.a.createElement("div",{className:"ch-button-container-center"},r.a.createElement(N,{internal:!0,to:"/register/"},"Register"),r.a.createElement(N,{internal:!0,to:"/sponsor/"},"Learn More")))},L={START_DATE:new Date(Date.UTC(2021,1,16,15,0,0))},x=(a(58),function(e){var t=e.backgroundColor,a=e.className,n=e.children;return r.a.createElement("div",{className:a?"".concat(a," text-section content-section"):"text-section content-section",style:{backgroundColor:t}},n)}),S=a(111),A=function(e){var t=e.image,a=e.backgroundColor,n=e.className,o=e.children,l=e.right,s=e.maxWidth,c=void 0===s?"100%":s;return r.a.createElement("div",{className:n?"".concat(n," image-section content-section"):"image-section content-section",style:{backgroundImage:"url(".concat(S("./".concat(t)),")"),justifyContent:l?"flex-end":"flex-start"}},r.a.createElement("div",{className:"image-overlay",style:{backgroundColor:a,maxWidth:c}},o))},H=a(32),z=a.n(H),D=function(e){var t=e.setSponsorData;return Object(n.useEffect)((function(){new z.a({apiKey:"keypAEcRMOygtbbvI"}).base("app6iupN2IozbTzN1")("Companies").select({filterByFormula:"IF(OR({Sponsor Level} = BLANK(), {Sponsor Logo} = BLANK()) , FALSE(), TRUE())",view:"All companies: by employees"}).firstPage((function(e,a){e?console.error(e):t({platinum:a.filter((function(e){return"Platinum"===e.fields["Sponsor Level"]})),gold:a.filter((function(e){return"Gold"===e.fields["Sponsor Level"]})),silver:a.filter((function(e){return"Silver"===e.fields["Sponsor Level"]})),bronze:a.filter((function(e){return"Bronze"===e.fields["Sponsor Level"]}))})}))}),[t]),!1},T=(a(244),a(245),function(e){var t=e.image,a=e.link,n=e.title,o=e.color,l=e.imageHeight,s=!!a&&r.a.createElement(h,{size:"h6",className:"ch-card-learn-more"},"Learn More >"),c=r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{size:"h5",align:"center",className:"ch-card-title"},n),r.a.createElement("div",{className:"ch-card-image",style:{backgroundImage:"url(".concat(t,")"),height:l}}),s);return a?r.a.createElement("a",{className:"ch-sponsor-card",as:"a",href:a,color:o},c):r.a.createElement("div",{className:"ch-sponsor-card",color:o},c)}),W=function(e){var t=e.title,a=e.titleColor,n=e.sponsorData,o=e.sectionHeight,l=e.grid,s=n.map((function(e){return r.a.createElement(T,{key:e.id,image:e.fields["Sponsor Logo"][0].url,link:e.fields["Sponsor Website"],title:e.fields.Company,imageHeight:o})}));return r.a.createElement("div",{className:"ch-sponsor-section"},r.a.createElement(h,{size:"h2",color:a,bold:!0},t),r.a.createElement("div",{className:"ch-sponsor-cards ch-card-grid-".concat(l)},s))},I=function(e){var t=e.date,a=e.afterText,o=setInterval((function(){E(t.getTime()-Date.now()),Date.now()>t.getTime()&&(i(!0),clearInterval(o))}),1e3),l=Object(n.useState)(!1),s=Object(y.a)(l,2),c=s[0],i=s[1],m=Object(n.useState)(t.getTime()-Date.now()),u=Object(y.a)(m,2),d=u[0],E=u[1];return c?r.a.createElement(h,{size:"h2",bold:!0,align:"center"},"The countdown has been finished!"):r.a.createElement(h,{size:"h2",bold:!0,align:"center"},Math.floor(d/864e5)," "," days, ",Math.floor(d%864e5/36e5)," hours, ",Math.floor(d%36e5/6e4)," minutes, and ",Math.floor(d%6e4/1e3)," seconds",a?" "+a+".":".")},R=(a(246),function(e){var t=e.question,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{size:"h4",bold:!0,className:"ch-question-title"},t),r.a.createElement(h,{size:"p"},a))}),B=function(){var e=Object(n.useState)({}),t=Object(y.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement(D,{setSponsorData:o}),r.a.createElement(C,null),r.a.createElement(A,{image:"Corndell.png",backgroundColor:s.DARK_BLUE,maxWidth:"500px"},r.a.createElement(h,{size:"h5",color:s.WHITE},"CornHacks aims to bring some of the most talented developers from around the Midwest to join in a weekend full of hacking. Hosted at the University of Nebraska-Lincoln, over 150 participants will code all day and night to be assessed by industry professionals and compete for several prizes.")),r.a.createElement(A,{image:"Gradiente.png",backgroundColor:s.DARK_BLUE},r.a.createElement(h,{size:"h2",bold:!0},"FAQ"),r.a.createElement(R,{question:"What is a Hackathon?"},"A hackathon is an invention marathon. Students come together to build innovative software and hardware over an extended period. It's"," ",r.a.createElement("a",{style:{color:s.WHITE},href:"https://medium.com/@tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl"},"very beginner friendly")," ","and is designed to be engaging to students at all levels of experience. We would love for you to come and experience a hackathon for yourself!"),r.a.createElement(R,{question:"Where and when will cornhacks take place?"},"Our original plan was to have the event n January 16th and 17th, 2021 @"," ",r.a.createElement("a",{style:{color:s.WHITE},href:"https://goo.gl/maps/o72MMWk4cHtgoFHF6"},"The Johnny Carson Center for Emerging Media Arts"),". However, we are currently re-evaluating our options due to the COVID-19 pandemic."),r.a.createElement(R,{question:"What is the cost to attend CornHacks?"},"Nothing. $0.00. Free. There is no cost to attend CornHacks. We only ask you bring your creativity and skill."),r.a.createElement(R,{question:"Do I need any prior experience to register for CornHacks? What if this is my first hackathon?"},"There is no prior experience required to participate in CornHacks. Any and all student participants are welcome! We are happy to help you form a team, get started with your project, and have an awesome first hackathon!"),r.a.createElement(R,{question:"Do I need to be a college student to attend?"},"Yes, attendees must be currently enrolled undergraduate students at a college/university. Additionally, attendees must be at or over 18 years of age."),r.a.createElement(R,{question:"Do I need to form a team before I register? What do I do if I do not have a team?"},"Participants are not required to find a team prior to the event, although you are certainly welcome to do so. At the beginning of the event, we will host a session for all still looking to form a team so you can find others with whom you can work. Teams may have a maximum of four members."),r.a.createElement(R,{question:"Will there be any swag or prizes?"},"SO much swag, SO many prizes. All CornHacks attendees will receive a t-shirt, stickers, and tons of other goodies. Teams that win tiered or track prizes will also receive additional prizes; while this year\u2019s prizes are still being determined, previous years have seen prizes such as flatscreen TVs, Nintendo Switches, and high-quality wireless headphones."),r.a.createElement(R,{question:"Are there rules for this event?"},"There are, in fact! Attendees will have to adhere to the"," ",r.a.createElement("a",{style:{color:s.WHITE},href:"https://studentconduct.unl.edu/student-code-conduct"},"UNL Student Code of Conduct"),". More specific rules may be prescribed by CornHacks organizers before or during the event."),r.a.createElement(R,{question:"Is there anything I need to do in advance?"},"There are a couple of things we would ask you do before the event begins: please fill out"," ",r.a.createElement("a",{style:{color:s.WHITE},href:"#/under-construction"},"this photo release waiver")," ","and"," ",r.a.createElement("a",{style:{color:s.WHITE},href:"#/under-construction"},"this CornHacks participant survey"),".")),r.a.createElement(x,{backgroundColor:s.DARK_BLUE},r.a.createElement(I,{date:L.START_DATE,afterText:"until Cornhacks"})),r.a.createElement(x,{backgroundColor:"#ffffff"},r.a.createElement(W,{title:"Platinum Sponsors",titleColor:s.DARK_BLUE,sponsorData:a.platinum?a.platinum:[],color:"blue",sectionHeight:"250px",grid:3}),r.a.createElement(W,{title:"Gold Sponsors",titleColor:s.DARK_BLUE,sponsorData:a.gold?a.gold:[],color:"yellow",sectionHeight:"200px",grid:4}),r.a.createElement(W,{title:"Silver Sponsors",titleColor:s.DARK_BLUE,sponsorData:a.silver?a.silver:[],color:"grey",sectionHeight:"100px",grid:5}),r.a.createElement(W,{title:"Bronze Sponsors",titleColor:s.DARK_BLUE,sponsorData:a.bronze?a.bronze:[],color:"brown",sectionHeight:"100px",grid:6})))},O=a(1),U=(a(247),a(248),function(e){var t=e.className,a=e.header,n=e.children,o=e.yes,l=e.no,c=t?"".concat(t," ch-table-cell"):"ch-table-cell";return console.log(o,l),o&&(c+=" ch-table-yes-styling"),l&&(c+=" ch-table-no-styling"),c+=a?" ch-table-header":" ch-table-normal",a?r.a.createElement("th",{className:c},r.a.createElement(h,{size:"h5",bold:!0,color:s.WHITE,align:"center"},n)):r.a.createElement("td",{className:c},r.a.createElement(h,{className:!!t&&"".concat(t,"-text"),size:"p",color:o||l?s.WHITE:s.DARK_BLUE,align:"center",bold:!0},n))}),K=(a(249),function(){return r.a.createElement(x,{backgroundColor:"#eee"},r.a.createElement(h,{size:"h2",color:s.DARK_BLUE,bold:!0},"Sponsorship Tiers"),r.a.createElement("table",{className:"ch-sponsor-tier-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(U,{header:!0}),r.a.createElement(U,{header:!0},"Platinum"),r.a.createElement(U,{header:!0},"Gold"),r.a.createElement(U,{header:!0},"Silver"),r.a.createElement(U,{header:!0},"Bronze"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Cost"),r.a.createElement(U,{yes:!0},"$8000"),r.a.createElement(U,{yes:!0},"$4000"),r.a.createElement(U,{yes:!0},"$2000"),r.a.createElement(U,{yes:!0},"$1000")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Logo Size"),r.a.createElement(U,{yes:!0},"XL Logo"),r.a.createElement(U,{yes:!0},"L Logo"),r.a.createElement(U,{yes:!0},"M Logo"),r.a.createElement(U,{yes:!0},"S Logo")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Logo on Website?"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Tech Talk"),r.a.createElement(U,{yes:!0},"60 mins"),r.a.createElement(U,{yes:!0},"30 mins"),r.a.createElement(U,{yes:!0},"15 mins"),r.a.createElement(U,{no:!0},"None")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Logo on Shirt?"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{no:!0},"No")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Booth?"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{no:!0},"No"),r.a.createElement(U,{no:!0},"No")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Swag in a Bag?"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{no:!0},"No"),r.a.createElement(U,{no:!0},"No")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Slack Channel in CornHacks Slack?"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{no:!0},"No"),r.a.createElement(U,{no:!0},"No")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},'"Sponsored by" in Emails?'),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{no:!0},"No"),r.a.createElement(U,{no:!0},"No")),r.a.createElement("tr",null,r.a.createElement(U,{header:!0},"Prizing Track?"),r.a.createElement(U,{yes:!0},"Yes"),r.a.createElement(U,{no:!0},"No"),r.a.createElement(U,{no:!0},"No"),r.a.createElement(U,{no:!0},"No")))))}),q=(a(250),a(96)),_=a.n(q),F=function(e){var t=e.backgroundColor,a=e.className,n=e.scrollTo;return r.a.createElement("div",{className:a?"".concat(a," continue-arrow-container"):"continue-arrow-container",style:{backgroundColor:t},onClick:function(){window.scrollTo(0,n)}},r.a.createElement("img",{className:"continue-arrow",src:_.a,style:{width:"50px",height:"50px",fill:"blue"},alt:"Continue to next page?"}))},j=(a(251),function(){return r.a.createElement(x,{backgroundColor:s.DARK_BLUE},r.a.createElement(h,{size:"h2",bold:!0},"Frequently Asked Questions"),r.a.createElement(R,{question:"What is Cornhacks?"},"CornHacks is a 24-hour long programming competition focused on the technology industry. The event will be held from 10:00 a.m. on 01/16/21 until 2:00 p.m. on 01/17/21. 150+ undergraduate students will come to explore, learn new things, and build cool projects for part of a weekend. The event is free and inclusive to students of all backgrounds and abilities. We will be working with Major League Hacking for this event."),r.a.createElement(R,{question:"Why does CornHacks need sponsors?"},"CornHacks is primarily funded by sponsors. Our sponsors help us provide meals for all of the students during the event, as well as buying prizes for the best hacks. Sponsors also allow us to provide monetary reimbursement for students traveling from other schools to attend our hackathon. Sponsors can help students by giving tech talks during the event, participating as mentors for hackers, or networking with participants."),r.a.createElement(R,{question:"Can sponsors give their own prizes?"},"Yes! If you choose to provide a custom prize, you get to be the judge and decide which hack receives it. Alternatively, we can also judge if you\u2019d prefer."),r.a.createElement(R,{question:"What do mentors do?"},"Mentors are the lifeline for hackers. Most people are working with topics or tools that they\u2019ve never touched before, so mentors can help with sticky situations, and keep teams moving to create amazing projects. Mentors are also your most direct interaction with event attendees. They\u2019re great opportunities to talk about your sponsor prize, event, or API. We\u2019ve heard countless stories of people getting help right as they\u2019re about to quit, and are then helped by a timely mentor who makes a real positive impression in the hacker\u2019s weekend. Those are the moments that stick around after CornHacks is over."),r.a.createElement(R,{question:"Do mentors need to stay the whole time?"},"Nope! Mentors can spend as much or as little time as they\u2019d like at the event, but prime time for mentors is Saturday from 11 AM through 5 PM as people are exploring their project ideas."),r.a.createElement(R,{question:"How long should sponsors be at their booth?"},"There\u2019s no set schedule for when recruiters or mentors have to be at their booth. We highly recommend having someone there when the event begins on Saturday morning. Having a presence on Saturday morning is important because that is when students are not busy hacking yet, so they will have time to talk with you about your company, any prizes you are offering, and ask you about job / internship opportunities. They are also starting to form their project ideas \u2013\u2013 they will want to talk with you about how to win your prize!"),r.a.createElement(R,{question:"What are the benefits of a sponsor booth?"},"Having a booth means hackers will see you there! Participants will know where you are if they want to ask you any questions during the hackathon. Your booth also serves as your home-base during the event for any recruiters or mentors you choose to send."),r.a.createElement(R,{question:"Can sponsors distribute recruiting materials without a booth?"},"We will have a general swag table where we will put any swag / recruiting materials you would like students to take at the event."))}),M=function(){var e=Object(n.useState)({}),t=Object(y.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement(D,{setSponsorData:o}),r.a.createElement(k,{colors:[s.BLUE,s.GREEN,s.YELLOW],header:!0},r.a.createElement(h,{size:"h1",bold:!0},"Welcome to your future."),r.a.createElement(h,{size:"h4"},"Establish connections with the best talent in Nebraska."),r.a.createElement("div",{className:"ch-button-container-left"},r.a.createElement(N,{to:"mailto:info@cornhacks.com"},"Reach Out Now")),r.a.createElement(F,{className:"right-arrow-positioning",backgroundColor:s.DARK_BLUE,scrollTo:window.innerHeight})),r.a.createElement(x,{backgroundColor:s.DARK_BLUE},r.a.createElement(h,{size:"h3",align:"center",bold:!0},"January 16th and 17th, 2021 @"),r.a.createElement("a",{style:{color:s.WHITE},href:"https://goo.gl/maps/o72MMWk4cHtgoFHF6"},r.a.createElement(h,{size:"h3",align:"center",bold:!0},"The Johnny Carson Center for Emerging Media Arts"))),r.a.createElement(K,null),r.a.createElement(j,null),r.a.createElement(x,{backgroundColor:s.WHITE},r.a.createElement(W,{title:"Platinum Sponsors",titleColor:s.DARK_BLUE,sponsorData:a.platinum?a.platinum:[],color:"blue",sectionHeight:"250px",grid:3}),r.a.createElement(W,{title:"Gold Sponsors",titleColor:s.DARK_BLUE,sponsorData:a.gold?a.gold:[],color:"yellow",sectionHeight:"200px",grid:4}),r.a.createElement(W,{title:"Silver Sponsors",titleColor:s.DARK_BLUE,sponsorData:a.silver?a.silver:[],color:"grey",sectionHeight:"100px",grid:5}),r.a.createElement(W,{title:"Bronze Sponsors",titleColor:s.DARK_BLUE,sponsorData:a.bronze?a.bronze:[],color:"brown",sectionHeight:"100px",grid:6})))},Y=function(e){var t=e.children,a=e.className,n=e.pushForm;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:a?"".concat(a," ch-form"):"ch-form",onSubmit:function(e){e.preventDefault();var a={},r=!0,o=!1,l=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var i=s.value,m=i.props.formId||i.props.children;a[m]=document.getElementById(m).value,document.getElementById(m).value=""}}catch(h){o=!0,l=h}finally{try{r||null==c.return||c.return()}finally{if(o)throw l}}n(a)}},t,r.a.createElement("input",{type:"submit"})))},G=function(e){var t=e.formId,a=e.children,n=e.className,o=e.required,l=e.placeholder,s=e.labelColor;return t=t||a,r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{size:"p",bold:!0,color:s},a),r.a.createElement("input",{id:t,className:n?"".concat(n," form-input"):"form-input",required:o,placeholder:l}))},P=function(){return r.a.createElement(A,{backgroundColor:s.WHITE,image:"Chairs.png"},r.a.createElement(h,{size:"h2",color:s.DARK_BLUE,bold:!0},"Register for CornHacks"),r.a.createElement(Y,{pushForm:function(e){new z.a({apiKey:"keypAEcRMOygtbbvI"}).base("appEPKx5Hr6kDPmHB")("Sponsors").create(e,(function(e,t){console.log(e,t)}))}},r.a.createElement(G,{labelColor:s.DARK_BLUE},"Field 1"),r.a.createElement(G,{labelColor:s.DARK_BLUE,required:!0},"Field 2"),r.a.createElement(G,{labelColor:s.DARK_BLUE,required:!0},"Field 3")))};l.a.render(r.a.createElement((function(){return r.a.createElement(w.a,null,r.a.createElement(O.d,null,r.a.createElement(O.b,{path:"/under-construction"},r.a.createElement(f,null)),r.a.createElement(O.b,{path:"/home/"},r.a.createElement(B,null)),r.a.createElement(O.b,{path:"/sponsor/"},r.a.createElement(M,null)),r.a.createElement(O.b,{path:"/register/"},r.a.createElement(P,null)),r.a.createElement(O.a,{to:"/under-construction"})))}),null),document.getElementById("root"))},58:function(e,t,a){},93:function(e,t,a){e.exports=a.p+"static/media/cornhacks.2ca6be0e.svg"},94:function(e,t,a){e.exports=a.p+"static/media/cornhacks-white.07a0cddb.svg"},96:function(e,t,a){e.exports=a.p+"static/media/down-arrow.3b47b0b7.svg"},97:function(e,t,a){e.exports=a(252)}},[[97,1,2]]]);
//# sourceMappingURL=main.819d4aab.chunk.js.map