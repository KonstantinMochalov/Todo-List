(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{19:function(t,e,c){},22:function(t,e,c){},23:function(t,e,c){"use strict";c.r(e);var o=c(2),n=c.n(o),s=c(10),a=c.n(s),r=(c(19),c(3)),i=c(9),d=c.n(i),l=c(14),u=c(11),j=c(25),b=c(12),f=c(1);var O=function(t){var e=t.todos,c=t.setTodos,n=t.setFilterStatus,s=(t.filteredTodos,Object(o.useState)("")),a=Object(r.a)(s,2),i=a[0],O=a[1],p=Object(o.useRef)(null);Object(o.useEffect)((function(){p.current.focus()}),[]);var m=function(){var t=Object(u.a)(d.a.mark((function t(o){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o.preventDefault(),!/^\s*$/.test(i)){t.next=3;break}return t.abrupt("return");case 3:return n=[].concat(Object(l.a)(e),[{id:Object(j.a)(),task:i,copleted:!1,edit:!1}]),t.next=6,c(n);case 6:O("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"form-container",children:[Object(f.jsxs)("form",{className:"form",onSubmit:m,children:[Object(f.jsx)("input",{type:"text",className:"input",placeholder:"Add a task",value:i,onChange:function(t){O(t.target.value)},ref:p}),Object(f.jsx)("button",{className:"add",onClick:function(){p.current.focus()},children:Object(f.jsx)(b.a,{})})]}),Object(f.jsxs)("select",{className:"filter-select",onChange:function(t){n(t.target.value)},children:[Object(f.jsx)("option",{value:"all",children:"All"}),Object(f.jsx)("option",{value:"completed",children:"Completed"}),Object(f.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})]})},p=c(4),m=c(13);var x=function(t){var e=t.todo,c=t.todos,n=t.setTodos,s=Object(o.useState)(e.task),a=Object(r.a)(s,2),i=a[0],d=a[1],l=Object(o.useRef)(null);return Object(o.useEffect)((function(){l.current.focus()})),Object(f.jsx)("li",{className:"todo-item",children:Object(f.jsxs)("form",{className:"update-form",onSubmit:function(t){t.preventDefault(),n(c.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{task:i,edit:!t.edit}):t})))},children:[Object(f.jsx)("input",{type:"text",className:"update-input",ref:l,value:i,onChange:function(t){d(t.target.value)}}),Object(f.jsx)("button",{className:"update-btn",children:Object(f.jsx)(m.a,{})})]})})},h=c(7);var v=function(t){var e=t.todo,c=t.todos,o=t.setTodos;return e.edit?Object(f.jsx)(x,{todo:e,todos:c,setTodos:o}):Object(f.jsxs)("li",{className:"todo-item ".concat(e.completed?"completed":""),children:[Object(f.jsx)("span",{className:"todo-item-text",children:e.task}),Object(f.jsx)("button",{className:"complete-btn",onClick:function(){o(c.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{completed:!t.completed}):t})))},title:"Mark as completed",children:Object(f.jsx)(h.c,{})}),Object(f.jsx)("button",{className:"edit-btn",onClick:function(){o(c.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{edit:!t.edit}):t})))},title:"Edit the task",children:Object(f.jsx)(h.b,{})}),Object(f.jsx)("button",{className:"delete-btn",onClick:function(){o(c.filter((function(t){return t.id!==e.id})))},title:"Delete the task",children:Object(f.jsx)(h.a,{})})]})},k=function(t){var e=t.todos,c=t.setTodos,o=t.filteredTodos;return Object(f.jsx)("ul",{children:o.map((function(t){return Object(f.jsx)(v,{todo:t,todos:e,setTodos:c},t.id)}))})};c(22);var N=function(){var t=Object(o.useState)([{id:1,task:"Test this app",completed:!1,edit:!1}]),e=Object(r.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)(c),a=Object(r.a)(s,2),i=a[0],d=a[1],l=Object(o.useState)("all"),u=Object(r.a)(l,2),j=u[0],b=u[1];return Object(o.useEffect)((function(){null===localStorage.getItem("todos")?localStorage.setItem("todos",JSON.stringify(c)):n(JSON.parse(localStorage.getItem("todos")))}),[]),Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(o.useEffect)((function(){!function(){switch(j){case"completed":d(c.filter((function(t){return t.completed})));break;case"uncompleted":d(c.filter((function(t){return!t.completed})));break;default:d(c)}}()}),[c,j]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{children:"My todo list"}),Object(f.jsx)(O,{todos:c,setTodos:n,filteredTodos:i,setFilterStatus:b}),Object(f.jsx)(k,{todos:c,setTodos:n,filteredTodos:i})]})};a.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.aae52e16.chunk.js.map