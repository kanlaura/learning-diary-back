(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/diary.b5670962.webp"},47:function(e,t,a){e.exports=a(78)},52:function(e,t,a){},53:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),s=a.n(l),o=(a(52),a(53),a(41)),i=a.n(o),c=a(21),p=a(12),m=a(22),u=a(23),d=a(25),h=a(18),E=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"naviClass"},r.a.createElement(h.b,{to:"/"},"Home"),r.a.createElement(h.b,{to:"/posts"},"Posts"),r.a.createElement(h.b,{to:"/new"},"Add New"))}}]),t}(n.Component),g=a(8),b=a.n(g),f=a(15),v=a(26),y=a(16),w=a.n(y),C=a(6),j=a(9),O=a(14),Y=a.n(O),k=a(87),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.post.id,title:a.props.post.title,description:a.props.post.description,timetomaster:a.props.post.timetomaster,source:a.props.post.source,startlearningdate:Y()(a.props.post.startlearningdate).format("YYYY-MM-DD"),inprogress:a.props.post.inprogress,finishlearningdate:Y()(a.props.post.finishlearningdate).format("YYYY-MM-DD"),timespent:a.props.post.timespent,display:!1},a.editRow=function(){a.state.display?a.setState(Object(j.a)({},a.state,{display:!1})):a.setState(Object(j.a)({},a.state,{display:!0}))},a.deleteRow=function(){a.props.deletePost(a.props.post.id)},a.handleChanges=function(e){a.setState(Object(j.a)({},a.state,Object(C.a)({},e.target.name,e.target.value)))},a.edit=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.state),e.next=3,w.a.put("/api/".concat(a.state.id),a.state);case 3:a.state.display?a.setState(Object(j.a)({},a.state,{display:!1})):a.setState(Object(j.a)({},a.state,{display:!0}));case 4:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.display?r.a.createElement(k.a,{className:"editPost",elevation:3},r.a.createElement("form",null,r.a.createElement("h4",null,"Edit post"),r.a.createElement("input",{type:"text",placeholder:"Title",name:"title",value:this.state.title,onChange:this.handleChanges}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Description",name:"description",value:this.state.description,onChange:this.handleChanges}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",placeholder:"Startlearningdate",name:"startlearningdate",value:this.state.startlearningdate,onChange:this.handleChanges}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"timetomaster"},"Estimated working time"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"timetomaster",value:this.state.timetomaster,onChange:this.handleChanges}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Source",name:"source",value:this.state.source,onChange:this.handleChanges}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"inprogress"},"Inprogress"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"inprogressYes"},"yes"),r.a.createElement("input",{type:"radio",value:"1",name:"inprogress",onClick:this.handleRadio}),r.a.createElement("label",{htmlFor:"inprogressNo"},"no"),r.a.createElement("input",{type:"radio",value:"0",name:"inprogress",onClick:this.handleRadio}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",placeholder:"Finishlearningdate",name:"finishlearningdate",value:this.state.finishlearningdate,onChange:this.handleChanges}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:this.edit},"Edit post"))):null,t=this.props.post,a=t.id,n=t.title,l=t.description,s=t.timetomaster,o=t.timespent,i=t.source,c=t.startlearningdate,p=t.inprogress,m=t.finishlearningdate;return r.a.createElement("div",null,r.a.createElement("p",null,a," ",n," ",l," ",s," ",r.a.createElement("a",{href:"http://".concat(i)},i)," ",Y()(c).format("DD.MM.YYYY")," ",p," ",Y()(m).format("DD.MM.YYYY")," ",o," ",r.a.createElement("button",{onClick:this.deleteRow},"X"),r.a.createElement("button",{onClick:this.editRow},"edit")),e)}}]),t}(n.Component);function D(){var e=Object(n.useState)({posts:[]}),t=Object(v.a)(e,2),a=t[0],l=t[1];function s(){return o.apply(this,arguments)}function o(){return(o=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("/api/");case 2:t=e.sent,l({posts:t.data});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){s()}),[]);var i=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("/api/".concat(t));case 2:s();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(k.a,{elevation:3,className:"allPosts"},r.a.createElement("h2",null,"Posts"),r.a.createElement("div",null,a.posts.map((function(e,t){return r.a.createElement(x,{post:e,key:e.id,deletePost:i})}))))}var M=function(){var e=Object(n.useState)({title:"",description:"",timetomaster:0,source:"",startlearningdate:Y()(new Date).format("YYYY-MM-DD"),inprogress:0,finishlearningdate:Y()(new Date).format("YYYY-MM-DD"),timespent:0}),t=Object(v.a)(e,2),a=t[0],l=t[1],s=function(e){l(Object(j.a)({},a,Object(C.a)({},e.target.name,e.target.value)))},o=function(e){l(Object(j.a)({},a,{inprogress:e.target.value}))},i=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,w.a.post("/api/",a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(k.a,{elevation:3,className:"newPost"},r.a.createElement("h2",null,"Add new"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Title",name:"title",value:a.title,onChange:s}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Description",name:"description",value:a.description,onChange:s}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",placeholder:"Startlearningdate",name:"startlearningdate",value:a.startlearningdate,onChange:s}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"timetomaster"},"Estimated working time"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"timetomaster",value:a.timetomaster,onChange:s}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Source",name:"source",value:a.source,onChange:s}),r.a.createElement("br",null),"Inprogress",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"inprogressYes"},"yes"),r.a.createElement("input",{type:"radio",value:"1",name:"inprogress",onClick:o}),r.a.createElement("label",{htmlFor:"inprogressNo"},"no"),r.a.createElement("input",{type:"radio",value:"0",name:"inprogress",onClick:o}),r.a.createElement("br",null),r.a.createElement("input",{type:"date",placeholder:"Finishlearningdate",name:"finishlearningdate",value:a.finishlearningdate,onChange:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:i},"Add new")))},N=a(13);var S=function(){return r.a.createElement(k.a,{elevation:3,className:"Home"},r.a.createElement("h1",null,"Home page!!!"))},F=function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"My learning diary"),r.a.createElement(E,null)),r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/",exact:!0,component:S}),r.a.createElement(N.a,{path:"/posts",component:D}),r.a.createElement(N.a,{path:"/new",component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.7e6733c6.chunk.js.map