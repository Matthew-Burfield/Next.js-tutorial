
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([4],{211:function(e,t,a){e.exports=a(212)},212:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(26),l=n(s),r=a(32),u=n(r),o=a(213),c=n(o),d=a(2),f=n(d),i=a(70),m=n(i),p=a(101),h=n(p),x=a(108),j=n(x),w=function(e){return f.default.createElement("li",{className:"jsx-65420515"},f.default.createElement(h.default,{as:"/p/"+e.id,href:"/post?id="+e.id},f.default.createElement("a",{className:"jsx-65420515"},e.name)),f.default.createElement(c.default,{styleId:"65420515",css:["li.jsx-65420515{list-style:none;margin:5px 0;}","a.jsx-65420515{text-decoration:none;color:red;}","a.jsx-65420515:hover{opacity:0.6;}"]}))},E=function(e){return f.default.createElement(m.default,null,f.default.createElement("h1",{className:"jsx-1479636525"},"Batman TV Shows"),f.default.createElement("ul",{className:"jsx-1479636525"},e.shows.map(function(e){var t=e.show;return f.default.createElement(w,{key:t.id,id:t.id,name:t.name})})),f.default.createElement(c.default,{styleId:"1479636525",css:['h1.jsx-1479636525,a.jsx-1479636525{font-family:"Arial";color:green;}',"ul.jsx-1479636525{padding:0;}"]}))};E.getInitialProps=(0,u.default)(l.default.mark(function e(){var t;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.default.get("https://api.tvmaze.com/search/shows?q=batman").then(function(e){return e.data});case 2:return t=e.sent,console.log("Show data detched. Count: "+t.length),e.abrupt("return",{shows:t});case 5:case"end":return e.stop()}},e,this)})),t.default=E},213:function(e,t,a){e.exports=a(107)}},[211]);
            return { page: comp.default }
          })
        