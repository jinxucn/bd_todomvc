(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(8),c=a.n(l),r=a(2),d=a(9),i=a(15),s=a(5),u=a(19),p=a(1),m={ALL:"all",ACTIVE:"active",COMPLETED:"completed"},f="ADD_TODO",b="REMOVE_TODO",h="CHANGE_TODO",O="TOGGLE_TODO",g="TOGGLE_ALL",v="REMOVE_COMPLETED",j="SET_FILTER",E=function(){if(window.localStorage){var e=JSON.parse(localStorage.getItem("state"));return console.log(e),null===e?void console.log("null"):e}}()||{allIds:[],allTodos:{},filter:m.ALL};console.log("here");var T=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var a=t.payload,o=a.id,n=a.content;return Object(p.a)(Object(p.a)({},e),{},{allIds:[].concat(Object(u.a)(e.allIds),[o]),allTodos:Object(p.a)(Object(p.a)({},e.allTodos),{},Object(s.a)({},o,{content:n,completed:!1}))});case b:var l=t.payload.id,c=Object.assign({},e.allTodos);return delete c[l],Object(p.a)(Object(p.a)({},e),{},{allIds:e.allIds.filter((function(e){return e!==l})),allTodos:c});case h:var r=t.payload,d=r.id,m=r.content;return Object(p.a)(Object(p.a)({},e),{},{allTodos:Object(p.a)(Object(p.a)({},e.allTodos),{},Object(s.a)({},d,{content:m,completed:!1}))});case O:var T=t.payload.id;return Object(p.a)(Object(p.a)({},e),{},{allTodos:Object(p.a)(Object(p.a)({},e.allTodos),{},Object(s.a)({},T,Object(p.a)(Object(p.a)({},e.allTodos[T]),{},{completed:!e.allTodos[T].completed})))});case j:return Object(p.a)(Object(p.a)({},e),{},{filter:t.payload.filter});case g:var y,C=Object(p.a)({},e),k=C.allIds,I=C.allTodos,S=Object.assign({},I),w=!0,D=Object(i.a)(k);try{for(D.s();!(y=D.n()).done;){var L=y.value;if(!1===I[L].completed){w=!1;break}}}catch(G){D.e(G)}finally{D.f()}return k.forEach((function(e){return S[e].completed=!w})),Object(p.a)(Object(p.a)({},e),{},{allTodos:S});case v:var N=Object(p.a)({},e),R=N.allIds,A=N.allTodos,_={},P=R.filter((function(e){return!A[e].completed}));return P.forEach((function(e){return _[e]=A[e]})),Object(p.a)(Object(p.a)({},e),{},{allIds:P,allTodos:_});default:return e}})),y=a(20),C=0,k=function(){var e=Object(r.c)(),t=Object(o.useState)(""),a=Object(y.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",{className:"todo-add"},n.a.createElement("input",{placeholder:"add a todo",onChange:function(e){return c(e.target.value)},value:l,onKeyDown:function(t){13===t.keyCode&&t.target.value&&(c(""),e(function(e){return{type:f,payload:{id:++C,content:e}}}(t.target.value)))}}))},I=a(16),S=a(17),w=a(3),D=a(21),L=a(18),N=a(7),R=a.n(N),A=function(e){Object(D.a)(a,e);var t=Object(L.a)(a);function a(e){var o;return Object(I.a)(this,a),(o=t.call(this,e)).state={completed:o.props.todo.completed,content:o.props.todo.content,editing:!1},o.handleToggle=o.handleToggle.bind(Object(w.a)(o)),o.handleRemove=o.handleRemove.bind(Object(w.a)(o)),o.handleRename=o.handleRename.bind(Object(w.a)(o)),o.handleChange=o.handleChange.bind(Object(w.a)(o)),o}return Object(S.a)(a,[{key:"handleToggle",value:function(){this.setState({completed:!this.props.todo.completed}),this.props.toggleTodo(this.props.todo.id)}},{key:"handleRemove",value:function(){this.props.removeTodo(this.props.todo.id)}},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleRename",value:function(e){this.setState({editing:!1}),""!==e.target.value?this.props.renameTodo(this.props.todo.id,e.target.value):this.props.removeTodo(this.props.todo.id)}},{key:"render",value:function(){var e=this;return n.a.createElement("li",null,n.a.createElement("div",{className:R()("todo-item",this.props.todo.completed?"completed-todo":"active-todo")},this.props.todo.completed?n.a.createElement("input",{type:"checkbox",checked:"checked",onChange:this.handleToggle}):n.a.createElement("input",{type:"checkbox",onChange:this.handleToggle}),n.a.createElement("div",{className:R()("todo-content",this.state.editing?"edit-content":"view-content"),onDoubleClick:this.props.todo.completed?function(){return!1}:function(t){e.setState({editing:!0}),t.target.lastElementChild.focus()}},n.a.createElement("label",{onDoubleClick:this.props.todo.completed?function(){return!1}:function(t){e.setState({editing:!0}),t.target.nextElementSibling.focus(),t.stopPropagation()}},this.state.content),!this.props.todo.completed&&n.a.createElement("input",{value:this.state.content||"",onChange:this.handleChange,onKeyDown:function(e){13===e.keyCode&&e.target.blur()},onDoubleClick:function(e){return e.stopPropagation()},onBlur:this.handleRename})),n.a.createElement("button",{onClick:this.handleRemove},n.a.createElement("div",null))))}}]),a}(o.PureComponent),_=Object(r.b)(null,{toggleTodo:function(e){return{type:O,payload:{id:e}}},removeTodo:function(e){return{type:b,payload:{id:e}}},renameTodo:function(e,t){return{type:h,payload:{id:e,content:t}}}})(A);var P=function(){var e=Object(p.a)({},Object(r.d)((function(e){return e}))),t=function(e,t,a){var o=e.map((function(e){return Object(p.a)(Object(p.a)({},t[e]),{},{id:e})}));switch(a){case m.ACTIVE:return o.filter((function(e){return!e.completed}));case m.COMPLETED:return o.filter((function(e){return e.completed}));case m.ALL:default:return o}}(e.allIds,e.allTodos,e.filter);return n.a.createElement("ul",{className:"todo-list"},t&&t.length?t.map((function(e){return n.a.createElement(_,{key:"todo-".concat(e.id),todo:e})})):"No todos yet!")},G=function(){var e=Object(r.d)((function(e){return e.allIds.length})),t=Object(r.d)((function(e){return e.filter})),a=Object(r.c)();return e>0&&n.a.createElement("div",{className:"filters"},n.a.createElement("button",{className:"toggle-all",onClick:function(){return a({type:g})}},"All"),n.a.createElement("span",{className:"number-left"},e+" todos left"),Object.keys(m).map((function(e){var o=m[e];return n.a.createElement("span",{key:"filter-".concat(e),className:R()("filter",o===t&&"filter-active"),onClick:function(){return a({type:j,payload:{filter:o}})}},o)})),n.a.createElement("a",{className:"remove-completed",onClick:function(){return a({type:v})}},"remove completed"))};a(33);function M(){return n.a.createElement("div",{className:"todo-app"},n.a.createElement(k,null),n.a.createElement(P,null),n.a.createElement(G,null))}window.onbeforeunload=function(e){var t;console.log(T.getState()),t=T.getState(),window.localStorage&&window.localStorage.setItem("state",JSON.stringify(t))};var x=document.getElementById("root");c.a.render(n.a.createElement(r.a,{store:T},n.a.createElement(M,null)),x)}},[[22,1,2]]]);
//# sourceMappingURL=main.8038ff84.chunk.js.map