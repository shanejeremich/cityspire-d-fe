(this["webpackJsonpcityspire-d-fe"]=this["webpackJsonpcityspire-d-fe"]||[]).push([[0],{111:function(e,t,a){},135:function(e,t,a){e.exports=a(292)},248:function(e,t,a){},253:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),u=a(10),i=a(9),o=a(14),s={issuer:"https://dev-86711607.okta.com/oauth2/default",redirectUri:window.location.origin+"/implicit/callback",clientId:"0oaak0g2snT4S5XQ85d6",pkce:!0,scopes:["openid","email","profile"]},m="/cityspire-d-fe/login",f=a(15),p=a.n(f),v=a(29),E=a(49),d=a.n(E),h=function(e){return r.a.createElement("div",null,e.data.map((function(e){return r.a.createElement("figure",{key:e.id},r.a.createElement("img",{src:e.thumbnailUrl,alt:e.title}),r.a.createElement("figcaption",null,r.a.createElement("h3",null,e.title)))})))},b=a(7),g=function(e){var t=e.LoadingComponent,a=e.RenderItems,c=e.getItemsData,l=e.fetchResults,u=Object(n.useState)([]),i=Object(b.a)(u,2),o=i[0],s=i[1],m=Object(n.useState)(!0),f=Object(b.a)(m,2),p=f[0],v=f[1];return Object(n.useEffect)((function(){c().then((function(e){s(e)})).catch((function(e){console.error(e)})).finally((function(){v(!1)}))}),[c]),p?r.a.createElement(t,null):r.a.createElement(a,{data:o,fetchResults:l})};var O=function(e){var t=e.message;return r.a.createElement("div",null,t)},k=function(e){return r.a.createElement("button",{onClick:e.handleClick,disabled:e.isDisabled,className:e.classType||"primary"},e.buttonText)},j=function(){var e=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://jsonplaceholder.typicode.com/photos?albumId=1");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(g,{getItemsData:e,LoadingComponent:function(){return r.a.createElement("div",null,"Loading Items...")},RenderItems:h})};a(111);var y=function(e){var t=e.userLocations,a=e.locations,n=e.isShown,c=e.setIsShown;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"favorite"},t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",{className:"cities",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},e.city),n&&r.a.createElement("div",{className:"data"},a.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement("h4",null,"Crime"),r.a.createElement("p",null,e.crime_data)),r.a.createElement("div",null,r.a.createElement("h4",null,"Population"),r.a.createElement("p",null,e.population)),r.a.createElement("div",null,r.a.createElement("h4",null,"Cost of Living"),r.a.createElement("p",null,e.cost_of_living)),r.a.createElement("div",null,r.a.createElement("h4",null,"Rental Rates"),r.a.createElement("p",null,e.rental_rates)),r.a.createElement("div",null,r.a.createElement("h4",null,"Walk Rate"),r.a.createElement("p",null,e.walk_score)))}))))}))):r.a.createElement("div",null,"Fetching Info..."))},S=function(){var e=Object(v.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("No URL provided");case 2:return e.prev=2,e.next=5,A.get(t);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return","fetchData Error: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){if(!e.isAuthenticated)throw new Error("Not authenticated");return{Authorization:"Bearer ".concat(e.idToken)}},N=function(){var e=Object(v.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=w(a),t){e.next=3;break}throw new Error("No URL provided");case 3:return e.prev=3,e.next=6,A.get(t,{headers:n});case 6:return r=e.sent,e.abrupt("return",r.data);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return","fetchAuthData Error: ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}();function C(e,t,a,n){return L.apply(this,arguments)}function L(){return(L=Object(v.a)(p.a.mark((function e(t,a,n,r){var c,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isAuthenticated;case 2:if((c=e.sent)!==t.isAuthenticated){e.next=11;break}if(!c||n){e.next=9;break}return e.next=7,a.getUser();case 7:l=e.sent,r(l);case 9:e.next=12;break;case 11:return e.abrupt("return",r(null));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.get().then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=d.a.create({baseURL:"".concat("http://localhost:8005")}),A=d.a.create({baseURL:"https://cityspire-d-be.herokuapp.com"}),R=d.a.create({baseURL:"https://api.allorigins.win/raw?url=https://randomuser.me/api/"}),M=Object(n.createContext)(),P=function(e){var t=Object(n.useState)(null),a=Object(b.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){S("".concat("/cityspire-d-fe/locations")).then((function(e){return l(e)}))}),[]),r.a.createElement(M.Provider,{value:{locations:c}},e.children)},D=function(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),u=Object(b.a)(l,2),i=u[0],s=u[1],m=Object(n.useState)(!0),f=Object(b.a)(m,2),p=f[0],v=f[1],E=Object(n.useState)(!1),d=Object(b.a)(E,2),h=d[0],g=d[1],O=Object(o.useOktaAuth)(),k=O.authState,j=O.authService,S=Object(n.useContext)(M).locations,w=Object(n.useRef)(null);return Object(n.useEffect)((function(){a?null!==a&&a&&(w.current=a.sub,N("".concat("/cityspire-d-fe/userlocations/").concat(w.current),k).then((function(e){return s(e)})).finally((function(){return v(!p)}))):C(k,j,a,c)}),[k,j,a,c]),r.a.createElement(r.a.Fragment,null,!p&&r.a.createElement(y,{userLocations:i,locations:S,isShown:h,setIsShown:g}))};var T=function(e){var t=e.userInfo,a=e.authService;return r.a.createElement("div",null,r.a.createElement("h1",null,"Hi ",t.name," Welcome to Labs Basic SPA"),r.a.createElement("div",null,r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement(u.Link,{to:"/profile-list"},"Profiles Example")),r.a.createElement("p",null,r.a.createElement(u.Link,{to:"/example-list"},"Example List of Items")),r.a.createElement("p",null,r.a.createElement(u.Link,{to:"/datavis"},"Data Visualizations Example")),r.a.createElement("p",null,r.a.createElement(k,{handleClick:function(){return a.logout()},buttonText:"Logout"}))))};var U=function(e){var t=e.LoadingComponent,a=Object(n.useState)(null),c=Object(b.a)(a,2),l=c[0],u=c[1],i=Object(o.useOktaAuth)(),s=i.authState,m=i.authService;return Object(n.useEffect)((function(){C(s,m,l,u)}),[s,m,l,u]),r.a.createElement(r.a.Fragment,null,s.isAuthenticated&&!l&&r.a.createElement(t,{message:"Fetching user profile..."}),s.isAuthenticated&&l&&r.a.createElement(T,{userInfo:l,authService:m}))},F=(a(112),a(38)),z=a(39);a(248);var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero-img"},r.a.createElement("div",{className:"search-city-bg"},r.a.createElement("h1",null,"Welcome To CitySpire"),r.a.createElement(u.Link,{to:"/map"},r.a.createElement("div",{className:"search-city-btn-container"},r.a.createElement("span",{className:"fa-icon-container"},r.a.createElement(F.a,{className:"fa-icon",icon:z.b})),r.a.createElement("button",{className:"search-city-btn"},"Search for City"))))),r.a.createElement("section",{className:"hero-container"}))};var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null))},B=a(118),J=a(68),H=a.n(J),V=(a(253),a(254),function(){return Object(n.useEffect)((function(){var e=s.pkce,t=s.issuer,a=s.clientId,n=s.redirectUri,r=s.scopes,c=new B({baseUrl:t?t.split("/oauth2")[0]:"",clientId:a,redirectUri:n,registration:{},features:{registration:!1},logo:H.a,i18n:{en:{"primaryauth.title":"Welcome to CitySpire, Please sign in"}},authParams:{pkce:e,issuer:t,display:"page",scopes:r}});return c.renderEl({el:"#sign-in-widget"},(function(){}),(function(e){throw e})),function(){return c.remove()}}),[]),r.a.createElement("div",{id:"sign-in-widget",className:"sign-in-widget"})}),Y=a(51),K=a.n(Y),Z=a(119),G=a.n(Z);var Q=function(e){var t=e.mapContainerRef;return r.a.createElement("div",null,r.a.createElement("div",{id:"geocoder",className:"geocoder"}),r.a.createElement("div",{className:"map-container",ref:t}))},X=a(134);var q=function(e){var t=e.locations,a=e.input;return r.a.createElement("div",null,void 0===t?"":r.a.createElement("div",{className:"livability-container"},r.a.createElement("div",{className:"main-score"},r.a.createElement("h1",null,a),r.a.createElement("button",null,r.a.createElement(X.a,{size:"30px",color:"red"}))),r.a.createElement("div",{className:"sub-scores"},t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement("h4",null,"Crime"),r.a.createElement("p",null,e.crime_data)),r.a.createElement("div",null,r.a.createElement("h4",null,"Population"),r.a.createElement("p",null,e.population)),r.a.createElement("div",null,r.a.createElement("h4",null,"Cost of Living"),r.a.createElement("p",null,e.cost_of_living)),r.a.createElement("div",null,r.a.createElement("h4",null,"Rental Rates"),r.a.createElement("p",null,e.rental_rates)),r.a.createElement("div",null,r.a.createElement("h4",null,"Walk Rate"),r.a.createElement("p",null,e.walk_score)))})))))};a(284);var $=function(e){var t=e.input,a=e.locations;return r.a.createElement(r.a.Fragment,null,null!==a&&t?r.a.createElement(q,{locations:a,input:t}):null)};a(285);K.a.accessToken="pk.eyJ1Ijoic2plcmVtaWNoMjMiLCJhIjoiY2trZGh4dndqMDJ4cDJwcXNhM2J2bzQzdCJ9.GZHp89RM-nZzB99Udl-cMQ";var ee=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(M).locations,u=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new K.a.Map({container:u.current,style:"mapbox://styles/mapbox/streets-v11",center:[-99,40],zoom:3.3});e.addControl(new K.a.NavigationControl,"bottom-right");var t=new G.a({accessToken:K.a.accessToken,countries:"us",mapboxgl:K.a});return t.on("result",(function(e){c(e.result.text)})),document.getElementById("geocoder").appendChild(t.onAdd(e)),e.resize(),function(){return e.remove()}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{mapContainerRef:u}),r.a.createElement($,{input:a,locations:l}))},te=a(120),ae=a.n(te),ne={data:[],layout:{},frames:[],config:{displaylogo:!1,displayModeBar:!1}};var re=function(e){var t=Object(n.useState)(ne),a=Object(b.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(null),i=Object(b.a)(u,2),o=(i[0],i[1]);return Object(n.useEffect)((function(){N(e.url,e.authState).then((function(e){l(e)})).catch((function(e){l({data:null,err:e})}))}),[e.url,e.authState]),r.a.createElement(ae.a,{className:"DataViz",data:c.data,layout:c.layout,frames:c.frames,config:c.config,onInitialized:function(e){return o(e)},onUpdate:function(e){return o(e)}})},ce=a(295),le=[{value:"AL"},{value:"AK"},{value:"AR"},{value:"AZ"},{value:"CA"},{value:"CO"},{value:"CT"},{value:"DC"},{value:"DE"},{value:"FL"},{value:"GA"},{value:"HI"},{value:"IA"},{value:"ID"},{value:"IL"},{value:"IN"},{value:"KS"},{value:"KY"},{value:"LA"},{value:"MA"},{value:"MD"},{value:"ME"},{value:"MI"},{value:"MN"},{value:"MO"},{value:"MS"},{value:"MT"},{value:"NC"},{value:"NE"},{value:"NH"},{value:"NJ"},{value:"NM"},{value:"NV"},{value:"NY"},{value:"ND"},{value:"OH"},{value:"OK"},{value:"OR"},{value:"PA"},{value:"RI"},{value:"SC"},{value:"SD"},{value:"TN"},{value:"TX"},{value:"UT"},{value:"VT"},{value:"VA"},{value:"WA"},{value:"WI"},{value:"WV"},{value:"WY"}],ue=ce.a.Option;var ie=function(){var e=Object(n.useState)("AL"),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(o.useOktaAuth)().authState;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement(ce.a,{type:"select",onChange:function(e){c(e)},placeholder:"Select Your State"},le.map((function(e){return r.a.createElement(ue,{value:e.value,id:e.value},e.value)})))),r.a.createElement(re,{authState:l,url:"http://localhost:8005/data/viz/"+a}))},oe=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(u.Link,{to:"/"},"Home")),e.data.map((function(e){return r.a.createElement("figure",{key:e.id},r.a.createElement("img",{src:e.avatarUrl,alt:e.name}),r.a.createElement("figcaption",null,r.a.createElement("h3",null,e.name)))})))},se=function(){var e=Object(o.useOktaAuth)().authState,t=function(e){if(!e.isAuthenticated)throw new Error("Not authenticated");return{Authorization:"Bearer ".concat(e.idToken)}},a=function(){var e=Object(v.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r=t(a),I.get("/cityspire-d-fe/profiles",{headers:r});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",new Promise((function(){return console.log(e.t0),[]})));case 10:case"end":return e.stop()}var r}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(g,{getItemsData:function(){return a(e)},LoadingComponent:function(){return r.a.createElement("div",null,"Loading Profiles...")},RenderItems:oe})};var me=function(e){var t=e.authState,a=e.userInfo,n=e.userPic,c=e.logout;return r.a.createElement("nav",null,r.a.createElement(u.Link,{to:"/"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:H.a,alt:"CitySpire"}))),r.a.createElement("div",{className:"button-container"},!t.isPending&&!t.isAuthenticated&&r.a.createElement(u.Link,{to:"/login"},r.a.createElement("button",null,"login")),!t.isPending&&!t.isAuthenticated&&r.a.createElement(u.Link,{to:"#"},r.a.createElement("button",null,"Sign Up")),r.a.createElement(Ee,{authState:t,userInfo:a,userPic:n,logout:c})))};a(289);function fe(){var e=Object(o.useOktaAuth)(),t=e.authState,a=e.authService,c=Object(n.useState)(null),l=Object(b.a)(c,2),u=l[0],i=l[1],s=Object(n.useState)(""),m=Object(b.a)(s,2),f=m[0],E=m[1],d=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.logout());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){C(t,a,u,i),x().then((function(e){var t=e.results[0].picture.thumbnail;E(t)}))}),[t,a,u,i]),r.a.createElement("div",null,r.a.createElement(me,{userInfo:u,authState:t,userPic:f,logout:d}))}var pe=function(e){var t=e.userInfo,a=e.userPic,n=e.logout,c=e.activeClick,l=e.isActive,i=e.dropdownRef;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"menu-container"},r.a.createElement("button",{onClick:c,className:"menu-trigger"},r.a.createElement("span",null,t.name),r.a.createElement("img",{src:a,alt:"user pic",className:"user-pic"})),r.a.createElement("div",{ref:i,className:"menu ".concat(l?"active":"inactive")},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/map",className:"menu-item",onClick:c},r.a.createElement(F.a,{icon:z.b}),"\xa0\xa0 Search City")),r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/home",className:"menu-item",onClick:c},r.a.createElement(F.a,{icon:z.d}),"\xa0\xa0 Profile")),r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/favorites",className:"menu-item",onClick:c},r.a.createElement(F.a,{icon:z.a}),"\xa0\xa0 Favorites")),r.a.createElement("li",null,r.a.createElement("div",{className:"menu-item",onClick:n},r.a.createElement(F.a,{icon:z.c}),"\xa0\xa0 Logout"))))):"")},ve=function(e,t){var a=Object(n.useState)(t),r=Object(b.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=function(t){null===e.current||e.current.contains(t.target)||l(!c)};return c&&window.addEventListener("click",t),function(){window.removeEventListener("click",t)}}),[c,e]),[c,l]};a(290);function Ee(e){var t=e.authState,a=e.userInfo,c=e.userPic,l=e.logout,u=Object(n.useRef)(null),i=ve(u,!1),o=Object(b.a)(i,2),s=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{authState:t,userInfo:a,userPic:c,logout:l,activeClick:function(){return m(!s)},dropdownRef:u,isActive:s}))}var de=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement(u.Link,{to:"/"},r.a.createElement("button",null,"Back To Home")))};a(291);function he(){var e=Object(i.k)();return r.a.createElement(o.Security,Object.assign({},s,{onAuthRequired:function(){e.push(m)}}),r.a.createElement(fe,null),r.a.createElement(i.g,null,r.a.createElement(i.d,{path:"/cityspire-d-fe",exact:!0,component:_}),r.a.createElement(i.d,{path:m,component:V}),r.a.createElement(i.d,{path:"/cityspire-d-fe/map",component:ee}),r.a.createElement(o.SecureRoute,{path:"/cityspire-d-fe/home",component:function(){return r.a.createElement(U,{LoadingComponent:O})}}),r.a.createElement(o.SecureRoute,{path:"/cityspire-d-fe/example-list",component:j}),r.a.createElement(o.SecureRoute,{path:"/cityspire-d-fe/favorites",component:D}),r.a.createElement(o.SecureRoute,{path:"/cityspire-d-fe/profile-list",component:se}),r.a.createElement(o.SecureRoute,{path:"/cityspire-d-fe/datavis",component:ie}),r.a.createElement(i.d,{path:"/cityspire-d-fe/implicit/callback",component:o.LoginCallback}),r.a.createElement(i.d,{component:de})))}l.a.render(r.a.createElement(n.StrictMode,null,r.a.createElement(u.BrowserRouter,{basename:"/cityspire-d-fe"},r.a.createElement(P,null,r.a.createElement(he,null)))),document.getElementById("root"))},68:function(e,t,a){e.exports=a.p+"static/media/cityspire.dc09b532.svg"}},[[135,1,2]]]);
//# sourceMappingURL=main.2a540081.chunk.js.map