(this.webpackJsonptestyes=this.webpackJsonptestyes||[]).push([[0],{199:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(25),r=a.n(c),l=(a(84),a(85),a(2)),i=a(70),s=a.n(i),u=a(27),m=a.n(u),p=(a(86),a(87),a(13)),d=a(17),b=a(75),g=a(40),f=a.n(g),h=a(71),E=a(72),v=(a(182),a(74));var O=function(e,t){var a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),m=(u[0],u[1]),p=Object(n.useState)(e.dong),d=Object(l.a)(p,2),b=(d[0],d[1],Object(n.useState)({labels:[],datasets:[{label:[],backgroundColor:[],borderColor:[],borderWidth:2,data:[]}]})),g=Object(l.a)(b,2),O=g[0],j=g[1],S=[],k=[];function y(){return(y=Object(h.a)(f.a.mark((function t(){var a,n,o,c,l,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={dong:e.dong},t.next=3,fetch("/api/graph",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log(e),m(e),S.push(e)}));case 3:if("\uc0c1\uad8c\uc9c0\ud45c"===r?k.push(S[0].sang):"\uc9d1\uac1d\ub825"===r?k.push(S[0].people):"\uad6c\ub9e4\ub825"===r?k.push(S[0].Pur):"\uc131\uc7a5\uc131"===r&&k.push(S[0].sung),n=[],o=[],c=[],0!==k.length){for(l=0;l<k[0].length;l++)n.push(k[0][l].gil),o.push(k[0][l].totalscore);for(i=0;i<o.length;i++)c.push(w[i])}j(Object(v.a)((function(e){return e.labels=n,e.datasets[0].data=o,e.datasets[0].borderColor=c,e.datasets[0].backgroundColor=c,e})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var w=["rgb(255,155,255)","rgb(255,55,255)","rgb(55,155,255)","rgb(55,0,255)","rgb(0,0,155)","rgb(0,0,55)","rgb(0,0,0)","rgb(0,255,0)","rgb(55,255,0)","rgb(255,0,155)","rgb(255,55,55)","rgb(255,55,155)","rgb(255,155,255)","rgb(255,255,255)"];return Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[r,e.dong]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"graphlist"},o.a.createElement("select",{onClick:function(e){i(e.target.value)}},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"\uc0c1\uad8c\uc9c0\ud45c"},"\uc0c1\uad8c\uc9c0\ud45c"),o.a.createElement("option",{value:"\uc9d1\uac1d\ub825"},"\uc9d1\uac1d\ub825"),o.a.createElement("option",{value:"\uad6c\ub9e4\ub825"},"\uad6c\ub9e4\ub825"),o.a.createElement("option",{value:"\uc131\uc7a5\uc131"},"\uc131\uc7a5\uc131"))),o.a.createElement("div",{className:"graph"},o.a.createElement(E.a,{width:300,height:300,data:O,options:{title:{display:!0,text:e.dong+" "+r,fontSize:20},scales:{yAxes:[{ticks:{min:0,stepSize:10}}]},legend:{display:!1,position:"right"}}})))},j=function(e,t){var a=Object(n.useState)(e.dong),c=Object(l.a)(a,2),r=(c[0],c[1],Object(n.useState)(!1)),i=Object(l.a)(r,2),s=i[0],u=i[1];return o.a.createElement("div",{className:"Action"},o.a.createElement("div",{className:"sel"},""===e.dong?o.a.createElement("p",null,"\ub3d9\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"):o.a.createElement("p",null,e.dong),o.a.createElement("div",{className:"icons"},o.a.createElement(p.a,{onClick:function(){u(!s)}}),o.a.createElement(p.b,null),o.a.createElement(d.a,null),o.a.createElement(b.a,null),o.a.createElement(p.d,null))),s?o.a.createElement("div",{className:"option"},o.a.createElement(O,{dong:e.dong,fa:t.fa})):o.a.createElement("p",null))};var S=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),c=Object(l.a)(a,2),r=(c[0],c[1],Object(n.useState)("")),i=Object(l.a)(r,2),u=(i[0],i[1],Object(n.useState)("")),p=Object(l.a)(u,2),d=p[0],b=p[1],g=Object(n.useState)(""),f=Object(l.a)(g,2),h=f[0],E=f[1],v=Object(n.useState)(),O=Object(l.a)(v,2),S=O[0],k=(O[1],Object(n.useState)(Object)),y=Object(l.a)(k,2),w=y[0],C=y[1],N=["rgb(255,155,255)","rgb(255,55,255)","rgb(55,155,255)","rgb(55,0,255)","rgb(0,0,155)","rgb(0,0,55)","rgb(0,0,0)","rgb(0,255,0)","rgb(55,255,0)","rgb(255,0,155)","rgb(255,55,55)","rgb(255,55,155)","rgb(255,155,255)","rgb(255,255,255)"];return Object(n.useEffect)((function(){var e=document.createElement("script");e.async=!0,e.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=5f5809befc934f9413253553bc2551f6&autoload=false",document.head.appendChild(e),e.onload=function(){kakao.maps.load((function(){var e=document.getElementById("map"),t={center:new kakao.maps.LatLng(37.536,127),level:8},a=new kakao.maps.Map(e,t),n=new kakao.maps.CustomOverlay;m.a.getJSON(s.a,(function(e){var t=e.features,c=[],r="";m.a.each(t,(function(e,t){c=t.geometry.coordinates,t.properties.SIG_CD,r=t.properties.EMD_KOR_NM,function(e,t,c,r){var l=[],i=[],s=0;if(m.a.each(e[0][0],(function(e,t){var a=new Object;a.x=t[1],a.y=t[0],i.push(a),l.push(new kakao.maps.LatLng(t[1],t[0]))})),""===h);else{var u=0;for(u=0;u<r.length;u++)r[u].dong===t&&s++}var p="#fff";s>=0&&s<20&&(p=N[2]);s>=20&&s<50&&(p=N[1]);s>=50&&s<70&&(p=N[0]);s>=70&&s<100&&(p=N[3]);s>=100&&(p=N[4]);var d=new kakao.maps.Polygon({map:a,path:l,strokeWeight:2,strokeColor:"#004c80",strokeOpacity:.8,fillColor:p,fillOpacity:.7});o.push(d),kakao.maps.event.addListener(d,"click",(function(){b(t)})),kakao.maps.event.addListener(d,"mouseover",(function(e){d.setOptions({fillColor:"#09f"}),n.setContent("<p>"+t+" "+s+"\uac1c\uc785\ub2c8\ub2e4</p>"),n.setPosition(e.latLng),n.setMap(a)})),kakao.maps.event.addListener(d,"mouseout",(function(){d.setOptions({fillColor:p}),n.setMap(null)}))}(c,r,0,w)}))}));var o=[]}))}}),[h]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"map",id:"map"}),o.a.createElement(j,{dong:d,fa:S}),o.a.createElement("div",{className:"list"},o.a.createElement("select",{onClick:function(e){E(e.target.value);var t={classes:e.target.value};fetch("/api/upjong",{method:"POST",headers:{"content-type":"application/json",charset:"utf-8"},body:JSON.stringify(t)}).then((function(e){return e.text()})).then((function(e){C(JSON.parse(e))}))}},o.a.createElement("option",null),o.a.createElement("option",{value:"\ucee4\ud53c\uc804\ubb38\uc810/\uce74\ud398/\ub2e4\ubc29"},"\ucee4\ud53c\uc804\ubb38\uc810/\uce74\ud398/\ub2e4\ubc29"),o.a.createElement("option",{value:"\ud6c4\ub77c\uc774\ub4dc/\uc591\ub150\uce58\ud0a8"},"\uce58\ud0a8\uc9d1"),o.a.createElement("option",{value:"\ud55c\uc2dd/\ubc31\ubc18/\ud55c\uc815\uc2dd"},"\ud55c\uc2dd"),o.a.createElement("option",{value:"\uc871\ubc1c/\ubcf4\uc308\uc804\ubb38"},"\uc871\ubc1c"),o.a.createElement("option",{value:"\uc74c\uc2dd\uc810-\uc77c\uc2dd"},"\uc77c\uc2dd"),o.a.createElement("option",{value:"\uc911\uad6d\uc74c\uc2dd/\uc911\uad6d\uc9d1"},"\uc911\uad6d\uc74c\uc2dd/\uc911\uad6d\uc9d1"))))},k=a(76),y=a(77),w=a(10),C=(a(199),a(69),function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)("login"),d=Object(l.a)(p,2);d[0],d[1];return o.a.createElement("div",{className:"Back"},o.a.createElement("div",{className:"onLogin"},o.a.createElement("form",{onSubmit:function(e){var t={id:c,pw:u};fetch("/api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.text()})).then((function(e){console.log(e),"re"===e?alert("\ub2e4\uc2dc \uc2dc\ub3c4"):(window.sessionStorage.setItem("id",c),console.log("sus"),window.location.replace("/"))}))},method:"post"},o.a.createElement("input",{type:"text",name:"id",onChange:function(e){return r(e.target.value)},placeholder:"id"}),o.a.createElement("input",{type:"password",name:"pw",onChange:function(e){return m(e.target.value)},placeholder:"password"}),o.a.createElement("input",{type:"submit",value:"Login"}),o.a.createElement(w.b,{to:"/join"},o.a.createElement("button",{className:"joinbutton"},"join")))))});var N=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],u=i[1],m=Object(n.useState)(""),p=Object(l.a)(m,2),d=p[0],b=p[1],g=Object(n.useState)(""),f=Object(l.a)(g,2),h=f[0],E=f[1],v=Object(n.useState)(""),O=Object(l.a)(v,2),j=O[0],S=O[1],k=Object(n.useState)(""),y=Object(l.a)(k,2),w=y[0],C=y[1],N=Object(n.useState)(""),x=Object(l.a)(N,2),J=x[0],L=x[1],P=Object(n.useState)(""),I=Object(l.a)(P,2);return I[0],I[1],o.a.createElement("div",{className:"Back"},o.a.createElement("div",{className:"Join"},o.a.createElement("form",{onSubmit:function(e){if(d===h){var t={id:s,pw:d,name:j,age:w};fetch("/api/insert",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.text()})).then((function(e){console.log(e)})),alert("\uac00\uc785\uc644\ub8cc"),window.location.replace("/")}else alert("\ube44\ubc00\ubc88\ud638\uac00 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")}},o.a.createElement("input",{type:"text",name:"Id",onChange:function(e){return u(e.target.value)},placeholder:"id"}),o.a.createElement("input",{type:"button",onClick:function(){var e={id:s};fetch("/api/checkId",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){console.log(e),L(e),c(!0)}))},value:"\uc544\uc774\ub514 \uc911\ubcf5 \uac80\uc0ac"}),!0===a?o.a.createElement("p",null,J):o.a.createElement("p",null),o.a.createElement("input",{type:"password",name:"Pw",onChange:function(e){return b(e.target.value)},placeholder:"password"}),o.a.createElement("input",{type:"password",name:"rePw",onChange:function(e){return E(e.target.value)},placeholder:"REpassword"}),o.a.createElement("input",{type:"text",name:"name",onChange:function(e){return S(e.target.value)},placeholder:"name"}),o.a.createElement("input",{type:"text",name:"age",onChange:function(e){return C(e.target.value)},placeholder:"age"}),o.a.createElement("input",{type:"submit",value:"Join"}))))};var x=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),s=i[0],u=i[1],m=Object(n.useState)("Header"),b=Object(l.a)(m,2),g=b[0],f=b[1];return o.a.createElement("div",{className:g},o.a.createElement("div",{className:"homebutton"},o.a.createElement(w.b,{to:"/"},o.a.createElement(k.a,null))),o.a.createElement("div",{className:"actionbutton"},null===window.sessionStorage.getItem("id")?o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{onClick:function(){s&&u(!1),a?(c(!1),f("Header")):(c(!0),f("onHeader"))}}),o.a.createElement(p.c,{onClick:function(){a&&c(!1),s?(u(!1),f("Header")):(u(!0),f("onHeader"))}})):o.a.createElement(d.b,{onClick:function(){window.sessionStorage.setItem("id",null),window.location.replace("/")}})),a?o.a.createElement(C,null):o.a.createElement("p",null),s?o.a.createElement(N,null):o.a.createElement("p",null))};var J=function(){return o.a.createElement("div",{className:"Front"},o.a.createElement(x,null),o.a.createElement(S,null))};var L=function(e){return o.a.createElement("div",{className:"Main"},o.a.createElement(J,null))};a(203);var P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w.a,null,o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/dong1.81986e43.geojson"},79:function(e,t,a){e.exports=a(204)},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.bd5fa0df.chunk.js.map