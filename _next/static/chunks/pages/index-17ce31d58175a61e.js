(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(931)}])},6131:function(e,t,n){"use strict";n.d(t,{w:function(){return s}});var i=n(5944),r=(n(7294),n(8338)),o=n(917),a=n(9008),l=n.n(a),c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},s=function(e){var t=e.children,n=e.title,a="".concat(n," - Shingo OKAWA");return(0,i.tZ)(r.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,i.BX)(i.HY,{children:[n&&(0,i.BX)(l(),{children:[(0,i.tZ)("title",{children:a}),(0,i.tZ)("meta",{name:"twitter:title",content:a}),(0,i.tZ)("meta",{property:"og:title",content:a})]}),t,(0,i.tZ)(o.xB,{styles:"\n            .grid-item-thumbnail {\n              border-radius: 12px;\n            }\n          "})]})})}},7437:function(e,t,n){"use strict";n.d(t,{w:function(){return s}});var i=n(5944),r=(n(7294),n(6052)),o=n(8338);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.m$(o.E.div,{shouldForwardProp:function(e){return r.x9(e)||"transition"===e}}),s=function(e){var t=e.children,n=l(e,["children"]);return(0,i.tZ)(c,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},mb:10},n,{children:t}))}},931:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var i=n(5944),r=(n(7294),n(6052)),o=n(8527),a=n(949),l=n(5193),c=n(9876),s=n(155),d=n(5675),h=n.n(d),u=n(1664),g=n.n(u),f=n(6131),p=n(7437),m=n(6829);function y(){var e,t,n=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return y=function(){return n},n}var b=m.Z.p(y()),v=function(e){var t=e.children;return(0,i.tZ)(b,{children:t})},w=function(e){var t=e.organization,n=e.title,r=e.year,a=e.description;return(0,i.BX)(o.xu,{my:3,children:[(0,i.BX)(o.xu,{display:{md:"flex"},children:[(0,i.tZ)(o.xu,{fontWeight:"bold",children:t}),(0,i.tZ)(o.xu,{fontWeight:"bold",_before:{md:{content:'"\\00A0\u2500\\00A0"'}},children:n})]}),(0,i.tZ)(o.xu,{children:(0,i.tZ)(o.xv,{as:"i",children:r})}),(0,i.tZ)(o.xu,{px:[3,6],py:[1,3],children:(0,i.tZ)(o.xv,{as:"i",children:a})})]})},Z=function(e){var t=e.heading,n=e.items;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(o.X6,{as:"h3",variant:"section-title",children:t}),n.map((function(e,t){var n=e.organization,r=e.title,o=e.year,a=e.description;return(0,i.tZ)(w,{organization:n,title:r,year:o,description:a},t)}))]})};function x(){var e,t,n=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return x=function(){return n},n}var O=m.Z.p(x()),k=function(e){var t=e.items;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(o.X6,{as:"h3",variant:"section-title",children:"I \u2665"}),(0,i.tZ)(O,{children:t.join(", ")})]})},S=function(e){var t=e.href,n=e.icon,r=e.title;return(0,i.tZ)(o.HC,{children:(0,i.tZ)(o.rU,{href:t,target:"_blank",children:(0,i.tZ)(l.zx,{variant:"ghost",colorScheme:"teal",leftIcon:n,children:r})})})},A=function(e){var t=e.items;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(o.X6,{as:"h3",variant:"section-title",children:"Activities \u263b"}),(0,i.tZ)(o.aV,{children:t.map((function(e,t){var n=e.href,r=e.icon,o=e.title;return(0,i.tZ)(S,{href:n,icon:r,title:o},t)}))})]})},j=n(9294),X=[{organization:"Delta Lake, International",title:"Committer",year:"July 2023 - Present",description:"Contributing to the delta-rs and working on several incubated projects, such as, delta-sharing-rs."},{organization:"Stay at Home, Tokyo",title:"Chief Housework Officer",year:"August 2020 - Present",description:"Living with my partner and cat buddies. Conducting all of the housework and having a life-long passion for cooking."},{organization:"Megagon Labs, Recruit Co., Ltd, Tokyo",title:"Research Engineer",year:"June 2018 - August 2020",description:"Worked alongside international teams. Researched data engineering to unify software engineering and ML systems."},{organization:"FOLIO Inc., Tokyo",title:"VP of Engineering, ML Engineer",year:"December 2016 - April 2018",description:"Designed and built financial data microservices and portfolio optimization engine. Researched topological data analysis for market regime analysis."},{organization:"SOINN inc., Yokohama",title:"Data Scientist",year:"February 2016 - December 2016",description:"Participated in \u201cFuture AI Research and Development Project\u201d of NEDO. Designed and built image recognition engine for UAVs as part of the NEDO project."},{organization:"Supership Inc., Tokyo",title:"Search Engineer",year:"November 2014 - January 2016",description:"Worked across teams to implement robust search engines. Developed search engine modules such as query parser and large scale LSH library."},{organization:"MARSFLAG Inc., Tokyo",title:"Server Side Engineer, R&D Engineer",year:"May 2011 - October 2014",description:"Designed and built internal management system of search engines. Researched next generation search/recommendation system."}],z=[{organization:"GRS of Energy Science, Kyoto University",title:"Withdrawal",year:"April 2005 - September 2008",description:"GPA: 3.80/4.00 in major, 3.80/4.00 overall"},{organization:"FAC of Engineering, Hokkaido University",title:"B.E., Nuclear Engineering",year:"April 2000 - March 2005",description:"GPA: 3.83/4.00 in major, 3.59/4.00 overall"}],E=["Cooking","Music","Programming","Machine Learning","Cats"],P=[{href:"https://github.com/ognis1205",icon:(0,i.tZ)(s.JOq,{}),title:"GitHub"},{href:"https://twitter.com/ognis1205",icon:(0,i.tZ)(s.JUd,{}),title:"Twitter"},{href:"https://www.instagram.com/ognis1205",icon:(0,i.tZ)(s.oVe,{}),title:"Instagram"}],B=r.m$(h(),{shouldForwardProp:function(e){return["width","height","src","alt","loader","unoptimized"].includes(e)}}),H=function(){return(0,i.tZ)(f.w,{title:"Home",children:(0,i.BX)(o.W2,{maxW:["100%","80%","80%"],children:[(0,i.BX)(o.xu,{borderRadius:"lg",mb:6,p:3,textAlign:"center",bg:a.ff("whiteAlpha.500","whiteAlpha.200"),css:{backdropFilter:"blur(10px)"},children:["Hello, I'm a developer based in Tokyo!",(0,i.tZ)("br",{}),"The above \u201cMNIST Dice\u201d is a neural network running entirely in a WebGL GLSL shader that hallucinates new hand-written digits in real-time."]}),(0,i.BX)(o.xu,{display:{md:"flex"},children:[(0,i.BX)(o.xu,{flexGrow:1,children:[(0,i.tZ)(o.X6,{as:"h2",variant:"page-title",children:"Shingo OKAWA"}),(0,i.tZ)("p",{children:"Data Misfit ( Developer )"})]}),(0,i.tZ)(o.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},textAlign:"center",children:(0,i.tZ)(o.xu,{borderColor:"whiteAlpha.800",borderWidth:2,borderStyle:"solid",w:"100px",h:"100px",display:"inline-block",borderRadius:"full",overflow:"hidden",children:(0,i.tZ)(B,{src:"/images/profile/shingo.jpg",alt:"Profile image",borderRadius:"full",width:"100%",height:"100%",loader:j.x,unoptimized:!0})})})]}),(0,i.BX)(p.w,{delay:.1,children:[(0,i.tZ)(o.X6,{as:"h3",variant:"section-title",children:"Work"}),(0,i.BX)(v,{children:["Shingo is a software developer based in Tokyo with a passion for building digital services/stuff he wants. He has a knack for all things prototyping products, from planning and designing all the way to solving real-life problems with code. When not online, he loves cooking, playing with his cat buddies and contributing to OSS projects such as"," ",(0,i.tZ)(g(),{href:"https://github.com/mlflow",passHref:!0,scroll:!1,children:(0,i.tZ)(o.rU,{children:"MLflow"})}),", ",(0,i.tZ)(g(),{href:"https://github.com/delta-io",passHref:!0,scroll:!1,children:(0,i.tZ)(o.rU,{children:"Delta Lake"})}),", ","and"," ",(0,i.tZ)(g(),{href:"https://github.com/gfx-rs",passHref:!0,scroll:!1,children:(0,i.tZ)(o.rU,{children:"wgpu"})}),"."]}),(0,i.tZ)(o.xu,{textAlign:"center",my:4,children:(0,i.tZ)(g(),{href:"/portfolio",passHref:!0,scroll:!1,children:(0,i.tZ)(l.zx,{rightIcon:(0,i.tZ)(c.XC,{}),colorScheme:"teal",children:"My portfolio"})})})]}),(0,i.BX)(p.w,{delay:.2,children:[(0,i.tZ)(Z,{heading:"Bio",items:X}),(0,i.tZ)(Z,{heading:"Education",items:z})]}),(0,i.BX)(p.w,{delay:.3,children:[(0,i.tZ)(k,{items:E}),(0,i.tZ)(o.xu,{textAlign:"center",my:4,children:(0,i.tZ)(g(),{href:"/timeline",passHref:!0,scroll:!1,children:(0,i.tZ)(l.zx,{rightIcon:(0,i.tZ)(c.XC,{}),colorScheme:"teal",children:"My timeline"})})})]}),(0,i.tZ)(p.w,{delay:.3,children:(0,i.tZ)(A,{items:P})})]})})}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);