(this["webpackJsonpcityspire-d-fe"]=this["webpackJsonpcityspire-d-fe"]||[]).push([[0],{111:function(e,t,a){},135:function(e,t,a){e.exports=a(292)},248:function(e,t,a){},253:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),u=a(10),i=a(9),o=a(14),s={issuer:"https://dev-86711607.okta.com/oauth2/default",redirectUri:"".concat(window.location.origin).concat("/implicit/callback"),clientId:"0oaak0g2snT4S5XQ85d6",pkce:!0,disableHttpsCheck:Object({NODE_ENV:"production",PUBLIC_URL:"/cityspire-d-fe",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CLIENT_ID:"0oaak0g2snT4S5XQ85d6",REACT_APP_OKTA_ISSUER_URI:"https://dev-86711607.okta.com/oauth2/default",REACT_APP_API_URI:"http://localhost:8005",REACT_APP_MAPBOX_ACCESS_TOKEN:"pk.eyJ1Ijoic2plcmVtaWNoMjMiLCJhIjoiY2trZGh4dndqMDJ4cDJwcXNhM2J2bzQzdCJ9.GZHp89RM-nZzB99Udl-cMQ"}).OKTA_TESTING_DISABLEHTTPSCHECK||!1,scopes:["openid","email","profile"]},m=a(15),v=a.n(m),E=a(29),f=a(49),p=a.n(f),d=function(e){return r.a.createElement("div",null,e.data.map((function(e){return r.a.createElement("figure",{key:e.id},r.a.createElement("img",{src:e.thumbnailUrl,alt:e.title}),r.a.createElement("figcaption",null,r.a.createElement("h3",null,e.title)))})))},h=a(7),b=function(e){var t=e.LoadingComponent,a=e.RenderItems,c=e.getItemsData,l=e.fetchResults,u=Object(n.useState)([]),i=Object(h.a)(u,2),o=i[0],s=i[1],m=Object(n.useState)(!0),v=Object(h.a)(m,2),E=v[0],f=v[1];return Object(n.useEffect)((function(){c().then((function(e){s(e)})).catch((function(e){console.error(e)})).finally((function(){f(!1)}))}),[c]),E?r.a.createElement(t,null):r.a.createElement(a,{data:o,fetchResults:l})};var g=function(e){var t=e.message;return r.a.createElement("div",null,t)},O=function(e){return r.a.createElement("button",{onClick:e.handleClick,disabled:e.isDisabled,className:e.classType||"primary"},e.buttonText)},S=function(){var e=function(){var e=Object(E.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://jsonplaceholder.typicode.com/photos?albumId=1");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(b,{getItemsData:e,LoadingComponent:function(){return r.a.createElement("div",null,"Loading Items...")},RenderItems:d})};a(111);var k=function(e){var t=e.userLocations,a=e.locations,n=e.isShown,c=e.setIsShown;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"favorite"},t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",{className:"cities",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},e.city),n&&r.a.createElement("div",{className:"data"},a.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement("h4",null,"Crime"),r.a.createElement("p",null,e.crime_data)),r.a.createElement("div",null,r.a.createElement("h4",null,"Population"),r.a.createElement("p",null,e.population)),r.a.createElement("div",null,r.a.createElement("h4",null,"Cost of Living"),r.a.createElement("p",null,e.cost_of_living)),r.a.createElement("div",null,r.a.createElement("h4",null,"Rental Rates"),r.a.createElement("p",null,e.rental_rates)),r.a.createElement("div",null,r.a.createElement("h4",null,"Walk Rate"),r.a.createElement("p",null,e.walk_score)))}))))}))):r.a.createElement("div",null,"Fetching Info..."))},j=function(){var e=Object(E.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("No URL provided");case 2:return e.prev=2,e.next=5,L.get(t);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return","fetchData Error: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){if(!e.isAuthenticated)throw new Error("Not authenticated");return{Authorization:"Bearer ".concat(e.idToken)}},N=function(){var e=Object(E.a)(v.a.mark((function e(t,a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=C(a),t){e.next=3;break}throw new Error("No URL provided");case 3:return e.prev=3,e.next=6,L.get(t,{headers:n});case 6:return r=e.sent,e.abrupt("return",r.data);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return","fetchAuthData Error: ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}();function w(e,t,a,n){return A.apply(this,arguments)}function A(){return(A=Object(E.a)(v.a.mark((function e(t,a,n,r){var c,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isAuthenticated;case 2:if((c=e.sent)!==t.isAuthenticated){e.next=11;break}if(!c||n){e.next=9;break}return e.next=7,a.getUser();case 7:l=e.sent,r(l);case 9:e.next=12;break;case 11:return e.abrupt("return",r(null));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.get().then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=p.a.create({baseURL:"".concat("http://localhost:8005")}),L=p.a.create({baseURL:"https://cityspire-d-be.herokuapp.com"}),R=p.a.create({baseURL:"https://api.allorigins.win/raw?url=https://randomuser.me/api/"}),x=Object(n.createContext)(),T=function(e){var t=Object(n.useState)(null),a=Object(h.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){j("".concat("/locations")).then((function(e){return l(e)}))}),[]),r.a.createElement(x.Provider,{value:{locations:c}},e.children)},P=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),u=Object(h.a)(l,2),i=u[0],s=u[1],m=Object(n.useState)(!0),v=Object(h.a)(m,2),E=v[0],f=v[1],p=Object(n.useState)(!1),d=Object(h.a)(p,2),b=d[0],g=d[1],O=Object(o.useOktaAuth)(),S=O.authState,j=O.authService,C=Object(n.useContext)(x).locations,A=Object(n.useRef)(null);return Object(n.useEffect)((function(){a?null!==a&&a&&(A.current=a.sub,N("".concat("/userlocations/").concat(A.current),S).then((function(e){return s(e)})).finally((function(){return f(!E)}))):w(S,j,a,c)}),[S,j,a,c]),r.a.createElement(r.a.Fragment,null,!E&&r.a.createElement(k,{userLocations:i,locations:C,isShown:b,setIsShown:g}))};var _=function(e){var t=e.userInfo,a=e.authService;return r.a.createElement("div",null,r.a.createElement("h1",null,"Hi ",t.name," Welcome to Labs Basic SPA"),r.a.createElement("div",null,r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement(u.Link,{to:"/profile-list"},"Profiles Example")),r.a.createElement("p",null,r.a.createElement(u.Link,{to:"/example-list"},"Example List of Items")),r.a.createElement("p",null,r.a.createElement(u.Link,{to:"/datavis"},"Data Visualizations Example")),r.a.createElement("p",null,r.a.createElement(O,{handleClick:function(){return a.logout()},buttonText:"Logout"}))))};var M=function(e){var t=e.LoadingComponent,a=Object(n.useState)(null),c=Object(h.a)(a,2),l=c[0],u=c[1],i=Object(o.useOktaAuth)(),s=i.authState,m=i.authService;return Object(n.useEffect)((function(){w(s,m,l,u)}),[s,m,l,u]),r.a.createElement(r.a.Fragment,null,s.isAuthenticated&&!l&&r.a.createElement(t,{message:"Fetching user profile..."}),s.isAuthenticated&&l&&r.a.createElement(_,{userInfo:l,authService:m}))},D=(a(112),a(38)),U=a(39);a(248);var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero-img"},r.a.createElement("div",{className:"search-city-bg"},r.a.createElement("h1",null,"Welcome To CitySpire"),r.a.createElement(u.Link,{to:"/map"},r.a.createElement("div",{className:"search-city-btn-container"},r.a.createElement("span",{className:"fa-icon-container"},r.a.createElement(D.a,{className:"fa-icon",icon:U.b})),r.a.createElement("button",{className:"search-city-btn"},"Search for City"))))),r.a.createElement("section",{className:"hero-container"}))};var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null))},J=a(118),W=a(68),B=a.n(W),H=(a(253),a(254),function(){return Object(n.useEffect)((function(){var e=s.pkce,t=s.issuer,a=s.clientId,n=s.redirectUri,r=s.scopes,c=new J({baseUrl:t?t.split("/oauth2")[0]:"",clientId:a,redirectUri:n,registration:{},features:{registration:!1},logo:B.a,i18n:{en:{"primaryauth.title":"Welcome to CitySpire, Please sign in"}},authParams:{pkce:e,issuer:t,display:"page",scopes:r}});return c.renderEl({el:"#sign-in-widget"},(function(){}),(function(e){throw e})),function(){return c.remove()}}),[]),r.a.createElement("div",{id:"sign-in-widget",className:"sign-in-widget"})}),K=a(51),V=a.n(K),Z=a(119),G=a.n(Z);var Q=function(e){var t=e.mapContainerRef;return r.a.createElement("div",null,r.a.createElement("div",{id:"geocoder",className:"geocoder"}),r.a.createElement("div",{className:"map-container",ref:t}))},X=a(134);var Y=function(e){var t=e.locations,a=e.input;return r.a.createElement("div",null,void 0===t?"":r.a.createElement("div",{className:"livability-container"},r.a.createElement("div",{className:"main-score"},r.a.createElement("h1",null,a),r.a.createElement("button",null,r.a.createElement(X.a,{size:"30px",color:"red"}))),r.a.createElement("div",{className:"sub-scores"},t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement("h4",null,"Crime"),r.a.createElement("p",null,e.crime_data)),r.a.createElement("div",null,r.a.createElement("h4",null,"Population"),r.a.createElement("p",null,e.population)),r.a.createElement("div",null,r.a.createElement("h4",null,"Cost of Living"),r.a.createElement("p",null,e.cost_of_living)),r.a.createElement("div",null,r.a.createElement("h4",null,"Rental Rates"),r.a.createElement("p",null,e.rental_rates)),r.a.createElement("div",null,r.a.createElement("h4",null,"Walk Rate"),r.a.createElement("p",null,e.walk_score)))})))))};a(284);var q=function(e){var t=e.input,a=e.locations;return r.a.createElement(r.a.Fragment,null,null!==a&&t?r.a.createElement(Y,{locations:a,input:t}):null)};a(285);V.a.accessToken="pk.eyJ1Ijoic2plcmVtaWNoMjMiLCJhIjoiY2trZGh4dndqMDJ4cDJwcXNhM2J2bzQzdCJ9.GZHp89RM-nZzB99Udl-cMQ";var $=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(x).locations,u=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new V.a.Map({container:u.current,style:"mapbox://styles/mapbox/streets-v11",center:[-99,40],zoom:3.3});e.addControl(new V.a.NavigationControl,"bottom-right");var t=new G.a({accessToken:V.a.accessToken,countries:"us",mapboxgl:V.a});return t.on("result",(function(e){c(e.result.text)})),document.getElementById("geocoder").appendChild(t.onAdd(e)),e.resize(),function(){return e.remove()}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{mapContainerRef:u}),r.a.createElement(q,{input:a,locations:l}))},ee=a(120),te=a.n(ee),ae={data:[],layout:{},frames:[],config:{displaylogo:!1,displayModeBar:!1}};var ne=function(e){var t=Object(n.useState)(ae),a=Object(h.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(null),i=Object(h.a)(u,2),o=(i[0],i[1]);return Object(n.useEffect)((function(){N(e.url,e.authState).then((function(e){l(e)})).catch((function(e){l({data:null,err:e})}))}),[e.url,e.authState]),r.a.createElement(te.a,{className:"DataViz",data:c.data,layout:c.layout,frames:c.frames,config:c.config,onInitialized:function(e){return o(e)},onUpdate:function(e){return o(e)}})},re=a(295),ce=[{value:"AL"},{value:"AK"},{value:"AR"},{value:"AZ"},{value:"CA"},{value:"CO"},{value:"CT"},{value:"DC"},{value:"DE"},{value:"FL"},{value:"GA"},{value:"HI"},{value:"IA"},{value:"ID"},{value:"IL"},{value:"IN"},{value:"KS"},{value:"KY"},{value:"LA"},{value:"MA"},{value:"MD"},{value:"ME"},{value:"MI"},{value:"MN"},{value:"MO"},{value:"MS"},{value:"MT"},{value:"NC"},{value:"NE"},{value:"NH"},{value:"NJ"},{value:"NM"},{value:"NV"},{value:"NY"},{value:"ND"},{value:"OH"},{value:"OK"},{value:"OR"},{value:"PA"},{value:"RI"},{value:"SC"},{value:"SD"},{value:"TN"},{value:"TX"},{value:"UT"},{value:"VT"},{value:"VA"},{value:"WA"},{value:"WI"},{value:"WV"},{value:"WY"}],le=re.a.Option;var ue=function(){var e=Object(n.useState)("AL"),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(o.useOktaAuth)().authState;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement(re.a,{type:"select",onChange:function(e){c(e)},placeholder:"Select Your State"},ce.map((function(e){return r.a.createElement(le,{value:e.value,id:e.value},e.value)})))),r.a.createElement(ne,{authState:l,url:"http://localhost:8005/data/viz/"+a}))},ie=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(u.Link,{to:"/"},"Home")),e.data.map((function(e){return r.a.createElement("figure",{key:e.id},r.a.createElement("img",{src:e.avatarUrl,alt:e.name}),r.a.createElement("figcaption",null,r.a.createElement("h3",null,e.name)))})))},oe=function(){var e=Object(o.useOktaAuth)().authState,t=function(e){if(!e.isAuthenticated)throw new Error("Not authenticated");return{Authorization:"Bearer ".concat(e.idToken)}},a=function(){var e=Object(E.a)(v.a.mark((function e(a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r=t(a),I.get("/profiles",{headers:r});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",new Promise((function(){return console.log(e.t0),[]})));case 10:case"end":return e.stop()}var r}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(b,{getItemsData:function(){return a(e)},LoadingComponent:function(){return r.a.createElement("div",null,"Loading Profiles...")},RenderItems:ie})};var se=function(e){var t=e.authState,a=e.userInfo,n=e.userPic,c=e.logout;return r.a.createElement("nav",null,r.a.createElement(u.Link,{to:"/"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:B.a,alt:"CitySpire"}))),r.a.createElement("div",{className:"button-container"},!t.isPending&&!t.isAuthenticated&&r.a.createElement(u.Link,{to:"/login"},r.a.createElement("button",null,"login")),!t.isPending&&!t.isAuthenticated&&r.a.createElement(u.Link,{to:"#"},r.a.createElement("button",null,"Sign Up")),r.a.createElement(fe,{authState:t,userInfo:a,userPic:n,logout:c})))};a(289);function me(){var e=Object(o.useOktaAuth)(),t=e.authState,a=e.authService,c=Object(n.useState)(null),l=Object(h.a)(c,2),u=l[0],i=l[1],s=Object(n.useState)(""),m=Object(h.a)(s,2),f=m[0],p=m[1],d=function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.logout());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w(t,a,u,i),y().then((function(e){var t=e.results[0].picture.thumbnail;p(t)}))}),[t,a,u,i]),r.a.createElement("div",null,r.a.createElement(se,{userInfo:u,authState:t,userPic:f,logout:d}))}var ve=function(e){var t=e.userInfo,a=e.userPic,n=e.logout,c=e.activeClick,l=e.isActive,i=e.dropdownRef;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"menu-container"},r.a.createElement("button",{onClick:c,className:"menu-trigger"},r.a.createElement("span",null,t.name),r.a.createElement("img",{src:a,alt:"user pic",className:"user-pic"})),r.a.createElement("div",{ref:i,className:"menu ".concat(l?"active":"inactive")},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/map",className:"menu-item",onClick:c},r.a.createElement(D.a,{icon:U.b}),"\xa0\xa0 Search City")),r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/home",className:"menu-item",onClick:c},r.a.createElement(D.a,{icon:U.d}),"\xa0\xa0 Profile")),r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/favorites",className:"menu-item",onClick:c},r.a.createElement(D.a,{icon:U.a}),"\xa0\xa0 Favorites")),r.a.createElement("li",null,r.a.createElement("div",{className:"menu-item",onClick:n},r.a.createElement(D.a,{icon:U.c}),"\xa0\xa0 Logout"))))):"")},Ee=function(e,t){var a=Object(n.useState)(t),r=Object(h.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=function(t){null===e.current||e.current.contains(t.target)||l(!c)};return c&&window.addEventListener("click",t),function(){window.removeEventListener("click",t)}}),[c,e]),[c,l]};a(290);function fe(e){var t=e.authState,a=e.userInfo,c=e.userPic,l=e.logout,u=Object(n.useRef)(null),i=Ee(u,!1),o=Object(h.a)(i,2),s=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{authState:t,userInfo:a,userPic:c,logout:l,activeClick:function(){return m(!s)},dropdownRef:u,isActive:s}))}var pe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement(u.Link,{to:"/"},r.a.createElement("button",null,"Back To Home")))};a(291);function de(){var e=Object(i.k)();return r.a.createElement(o.Security,Object.assign({},s,{onAuthRequired:function(){e.push("/login")}}),r.a.createElement(me,null),r.a.createElement(i.g,null,r.a.createElement(i.d,{path:"/",exact:!0,component:F}),r.a.createElement(i.d,{path:"/login",component:H}),r.a.createElement(i.d,{path:"/map",component:$}),r.a.createElement(o.SecureRoute,{path:"/home",component:function(){return r.a.createElement(M,{LoadingComponent:g})}}),r.a.createElement(o.SecureRoute,{path:"/example-list",component:S}),r.a.createElement(o.SecureRoute,{path:"/favorites",component:P}),r.a.createElement(o.SecureRoute,{path:"/profile-list",component:oe}),r.a.createElement(o.SecureRoute,{path:"/datavis",component:ue}),r.a.createElement(i.d,{path:"/implicit/callback",component:o.LoginCallback}),r.a.createElement(i.d,{component:pe})))}l.a.render(r.a.createElement(n.StrictMode,null,r.a.createElement(u.BrowserRouter,null,r.a.createElement(T,null,r.a.createElement(de,null)))),document.getElementById("root"))},68:function(e,t,a){e.exports=a.p+"static/media/cityspire.dc09b532.svg"}},[[135,1,2]]]);
//# sourceMappingURL=main.4d63ef87.chunk.js.map