(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{35:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),c=a.n(l),r=(a(40),a(41),a(42),a(22)),i=a(33),u=a(10),m=a(25),s=a(26),d=a.n(s),f=function e(t){var a=t.text,n=t.id,o=void 0===n?d()():n,l=t.isCompleted,c=void 0!==l&&l;Object(m.a)(this,e),this.id=o,this.text=a,this.isCompleted=c},p=a(50),E=a(51),h=a(54),v=a(31),b=(a(43),a(44),a(53)),C=a(34),O=function(e){var t=e.todo,a=e.updateTodoStatus,l=e.deleteItem,c=Object(n.useState)(""),r=Object(u.a)(c,2),i=r[0],m=r[1],s=Object(n.useState)(t.isCompleted),d=Object(u.a)(s,2),f=d[0],h=d[1],v=Object(n.useState)(!1),O=Object(u.a)(v,2),j=O[0],k=O[1],g=function(e){m(e?"show-del-button":"")},w=function(){return k(!1)};return o.a.createElement("div",{className:"todo-comp",onMouseOver:function(){return g(!0)},onMouseLeave:function(){return g(!1)}},o.a.createElement(p.a,null,o.a.createElement(E.a,{className:"todo"},o.a.createElement("div",null,o.a.createElement("input",{type:"checkbox",id:"todo-item",checked:f,onChange:function(e){return function(e){h(e.target.checked),a(t.id,e.target.checked)}(e)}}),o.a.createElement("span",{className:f?"todo-text completed-todo":"todo-text"},t.text)),o.a.createElement("span",{className:"delete-todo "+i,onClick:function(){t.isCompleted?l(t.id):k(!0)}},"x"))),o.a.createElement(b.a,{show:j,onHide:w},o.a.createElement(b.a.Header,{closeButton:!0},o.a.createElement(b.a.Title,null,"Deleting an Item!")),o.a.createElement(b.a.Body,null,"Are you sure you want to delete this item?"),o.a.createElement(b.a.Footer,null,o.a.createElement(C.a,{variant:"secondary",onClick:w},"Cancel"),o.a.createElement(C.a,{variant:"primary",onClick:function(){l(t.id),w()}},"Delete"))))},j=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),m=Object(u.a)(c,2),s=m[0],d=m[1],b=Object(n.useState)(1),C=Object(u.a)(b,2),j=C[0],k=C[1],g=function(e,t){d(s.map((function(a){return e===a.id?new f(Object(r.a)(Object(r.a)({},a),{},{isCompleted:t})):a})))},w=function(e){d(s.filter((function(t){return t.id!==e})))},y=s.filter((function(e){return 1===j||(2===j?!e.isCompleted:e.isCompleted)})).map((function(e){return o.a.createElement(O,{key:e.id,todo:e,updateTodoStatus:g,deleteItem:w})})),x=s.filter((function(e){return!e.isCompleted})).length;return o.a.createElement("div",{className:"todos-comp"},o.a.createElement("h1",null,"Todos"),o.a.createElement(p.a,null,o.a.createElement(E.a,null,o.a.createElement("input",{type:"text",value:a,placeholder:"What's next?",onChange:function(e){return l(e.target.value)},onKeyUp:function(e){13===e.keyCode&&(d([].concat(Object(i.a)(s),[new f({text:a})])),l(""))}}))),o.a.createElement(p.a,null,o.a.createElement(E.a,{className:"todo-list",md:5},y)),o.a.createElement(p.a,{className:0===s.length?"footer hide-footer":"footer"},o.a.createElement(E.a,{md:3},o.a.createElement("p",null,x," items left")),o.a.createElement(E.a,{md:4},o.a.createElement(h.a,{type:"radio",name:"options",className:"filters-area",value:j,defaultValue:j,onChange:function(e){k(e)}},o.a.createElement(v.a,{variant:"outline-dark",value:1,className:"temp"},"All"),o.a.createElement(v.a,{variant:"outline-dark",value:2},"Active"),o.a.createElement(v.a,{variant:"outline-dark",value:3},"Completed")))))},k=a(52);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k.a,null,o.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.577efe10.chunk.js.map