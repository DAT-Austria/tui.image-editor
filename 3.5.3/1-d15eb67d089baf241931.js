(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,n){var a=n(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(18)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},147:function(e,t,n){"use strict";n(34);var a=n(35),i=n.n(a),r=n(7),o=n.n(r),d=n(151),s=n(0),c=n.n(s),m=n(4),p=n.n(m),l=n(33),u=n.n(l),g=(n(148),c.a.createContext({})),E=function(e){return c.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};E.propTypes={data:p.a.object,query:p.a.string.isRequired,render:p.a.func,children:p.a.func};var h=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.logo,n=e.title,a=e.version;return c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"logo"},c.a.createElement(u.a,{to:t.linkUrl},c.a.createElement("img",{src:t.src,alt:"logo"}))),n&&n.text?c.a.createElement("span",{className:"info-wrapper"},c.a.createElement("span",{className:"project-name"},"/"),c.a.createElement("span",{className:"project-name"},c.a.createElement("a",{href:n.linkUrl,target:"_blank",rel:"noreferrer noopener"},n.text))):null,a?c.a.createElement("span",{className:"info-wrapper"+(n&&n.text?" has-title":"")},c.a.createElement("span",{className:"splitter"},"|"),c.a.createElement("span",{className:"version"},"v",a)):null)},t}(c.a.Component);h.propTypes={data:p.a.object};var I=h,f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return c.a.createElement("footer",{className:"footer"},this.props.infoList.map(function(e,t){var n=e.linkUrl,a=e.title;return c.a.createElement("span",{className:"info",key:"footer-info-"+t},c.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a))}))},t}(c.a.Component);f.propTypes={infoList:p.a.array};var v=f,b=(n(145),n(75),n(153)),y=(n(154),n(36),{class:"CLASSES",namespace:"NAMESAPCES",module:"MODULES",external:"EXTERNALS",mixin:"MIXINS",global:"GLOBALS",example:"Examples"}),S=/[-[\]\/{}()*+?.\\^$|]/g,k=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.hightliging=function(e){var t=this.props.value.replace(S,"\\$&"),n=new RegExp(t,"ig"),a=e.replace(n,function(e){return"<strong>"+e+"</strong>"});return c.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}})},n.getListItemComponent=function(e,t){var n=this.props.movedIndex,a=e.node,i=a.pid,r=a.name,o=a.parentPid;return c.a.createElement("li",{className:"item"+(n===t?" selected":""),key:"search-item-"+t},c.a.createElement(u.a,{to:"/"+i,className:"ellipsis"},this.hightliging(r),c.a.createElement("span",{className:"nav-group-title"},y[o]||o)))},n.getResultComponent=function(){var e=this,t=this.props.result;return t.length?c.a.createElement("ul",null,t.map(function(t,n){return e.getListItemComponent(t,n)})):c.a.createElement("p",{className:"no-result"},"No Result")},n.render=function(){return this.props.searching?c.a.createElement("div",{className:"search-list"},this.getResultComponent()):null},t}(c.a.Component);k.propTypes={searching:p.a.bool,value:p.a.string,result:p.a.array,movedIndex:p.a.number};var P=k,C=function(e,t){return(e&&e.getAttribute&&(e.getAttribute("class")||e.getAttribute("className")||"")).indexOf(t)>-1},N=function(e){return e.toLowerCase()},x={searching:!1,value:null,movedIndex:-1,result:[]},j=function(e){function t(){var t;return(t=e.call(this)||this).state=x,t.handleKeyDown=t.handleKeyDown.bind(i()(t)),t.handleKeyUp=t.handleKeyUp.bind(i()(t)),t.handleFocus=t.handleFocus.bind(i()(t)),t.handleClick=t.handleClick.bind(i()(t)),t}o()(t,e);var n=t.prototype;return n.attachEvent=function(){document.addEventListener("click",this.handleClick)},n.detachEvent=function(){document.removeEventListener("click",this.handleClick)},n.handleKeyDown=function(e){var t=this,n=e.keyCode;this.setState(function(e){var a=e.movedIndex;return 38===n&&a>0?a-=1:40===n&&a<t.state.result.length-1&&(a+=1),{movedIndex:a}})},n.handleKeyUp=function(e){var t=e.keyCode,n=e.target,a=this.state,i=a.result,r=a.movedIndex;if(38!==t&&40!==t)if(13===t&&i.length&&r>-1){var o="/"+i[r].node.pid;this.moveToPage(o)}else this.search(n.value)},n.handleFocus=function(e){var t=e.target.value;this.attachEvent(),t.length&&this.search(t)},n.handleClick=function(e){for(var t=e.target;t&&!C(t,"search-container");)t=t.parentElement;t||this.resetState()},n.search=function(e){this.setState({searching:!0,value:e,result:this.findMatchingValues(e)})},n.findMatchingValues=function(e){return this.props.data.filter(function(t){var n=N(t.node.name);return""!==e&&n.indexOf(N(e))>-1})},n.moveToPage=function(e){e&&Object(l.navigate)(e),this.resetState()},n.resetState=function(){this.detachEvent(),this.setState({searching:!1,value:null,result:[],movedIndex:-1})},n.render=function(){var e=this.state,t=e.searching,n=e.value,a=e.result,i=e.movedIndex;return c.a.createElement("div",{className:"search-container"+(t?" searching":"")},c.a.createElement("div",{className:"search-box"},c.a.createElement("span",{className:"btn-search"+(t?" searching":"")},c.a.createElement("span",{className:"icon"},c.a.createElement("span",{className:"oval"}),c.a.createElement("span",{className:"stick"}))),c.a.createElement("input",{type:"text",placeholder:"Search",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onFocus:this.handleFocus})),c.a.createElement("hr",{className:"line "+(t?"show":"hide")}),c.a.createElement(P,{searching:t,value:n,result:a,movedIndex:i}))},t}(c.a.Component);j.propTypes={data:p.a.array};var O=function(){return c.a.createElement(E,{query:"3941510517",render:function(e){return c.a.createElement(j,{data:e.allSearchKeywordsJson.edges})},data:b})},M=n(149),w=n(150),T=n(159),R=(n(74),function(e){var t=e.opened,n=e.handleClick;return c.a.createElement("button",{className:"btn-toggle"+(t?" opened":""),onClick:n},c.a.createElement("span",{className:"icon"}))});R.propTypes={opened:p.a.bool,handleClick:p.a.func};var L=R,D=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.filter=function(e){return this.props.items.filter(function(t){return t.kind===e})},n.getSubListGroupComponent=function(e,t){var n=this.props.selectedId;return t&&t.length?c.a.createElement("div",{className:"subnav-group"},c.a.createElement("h3",{className:"title"},e),c.a.createElement("ul",null,t.map(function(e,t){var a=e.pid,i=e.name;return c.a.createElement("li",{key:"nav-item-"+t},c.a.createElement("p",{className:"nav-item"+(n===a?" selected":"")},c.a.createElement(u.a,{to:"/"+a,className:"ellipsis"},c.a.createElement("span",null,i))))}))):null},n.render=function(){var e=this.props.opened;return c.a.createElement("div",{className:e?"show":"hide"},this.getSubListGroupComponent("EXTENDS",this.filter("augment")),this.getSubListGroupComponent("MIXES",this.filter("mix")),this.getSubListGroupComponent("STATIC PROPERTIES",this.filter("static-property")),this.getSubListGroupComponent("STATIC METHODS",this.filter("static-function")),this.getSubListGroupComponent("INSTANCE METHODS",this.filter("instance-function")),this.getSubListGroupComponent("EVENTS",this.filter("event")))},t}(c.a.Component);D.propTypes={selectedId:p.a.string,name:p.a.string,opened:p.a.bool,items:p.a.array};var F=D,U=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={opened:n.isSelected()},n.toggleItemState=n.toggleItemState.bind(i()(n)),n.handleClick=n.handleClick.bind(i()(n)),n}o()(t,e);var n=t.prototype;return n.handleClick=function(e){e.preventDefault(),this.isSelected()?this.toggleItemState():Object(l.navigate)("/"+this.props.pid)},n.toggleItemState=function(){this.setState(function(e){return{opened:!e.opened}})},n.isSelected=function(){var e=this.props,t=e.selectedId,n=e.pid;return!!t&&t.split("#").shift()===n},n.render=function(){var e=this.props,t=e.selectedId,n=e.pid,a=e.name,i=e.childNodes,r=this.state.opened,o=!(!i||!i.length),d=this.isSelected();return c.a.createElement("li",null,c.a.createElement("p",{className:"nav-item"+(d?" selected":"")},c.a.createElement("a",{href:"/tui.image-editor/3.5.3/"+n,className:"ellipsis",onClick:this.handleClick},c.a.createElement("span",null,a)),o&&c.a.createElement(L,{hasChildNodes:o,opened:r,handleClick:this.toggleItemState})),o&&c.a.createElement(F,{selectedId:t,hasChildNodes:o,opened:r,items:i}))},t}(c.a.Component);U.propTypes={selectedId:p.a.string,pid:p.a.string,name:p.a.string,childNodes:p.a.array};var A=U,z=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.selectedId,n=e.title,a=e.items;return a.length?c.a.createElement("div",{className:"nav-group"},n&&c.a.createElement("h2",{className:"title"},n),c.a.createElement("ul",null,a.map(function(e,n){var a=e.node,i=a.pid,r=a.name,o=a.childNodes;return c.a.createElement(A,{key:"nav-item-"+n,selectedId:t,pid:i,name:r,childNodes:o})}))):null},t}(c.a.Component);z.propTypes={selectedId:p.a.string,title:p.a.string,items:p.a.array};var _=z,q=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.filterItems=function(e){return this.props.items.filter(function(t){return t.node.parentPid===e})},n.render=function(){var e=this.props.selectedId;return c.a.createElement("div",{className:"nav"},c.a.createElement(_,{selectedId:e,title:"MODULES",items:this.filterItems("module")}),c.a.createElement(_,{selectedId:e,title:"EXTERNALS",items:this.filterItems("external")}),c.a.createElement(_,{selectedId:e,title:"CLASSES",items:this.filterItems("class")}),c.a.createElement(_,{selectedId:e,title:"NAMESPACES",items:this.filterItems("namespace")}),c.a.createElement(_,{selectedId:e,title:"MIXINS",items:this.filterItems("mixin")}),c.a.createElement(_,{selectedId:e,title:"TYPEDEF",items:this.filterItems("typedef")}),c.a.createElement(_,{selectedId:e,title:"GLOBAL",items:this.filterItems("global")}))},t}(c.a.Component);q.propTypes={selectedId:p.a.string,items:p.a.array};var K=function(e){return c.a.createElement(E,{query:"2438170150",render:function(t){return c.a.createElement(q,Object.assign({items:t.allNavigationJson.edges},e))},data:T})},X=n(160),J=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.selectedId,n=e.items;return c.a.createElement("div",{className:"nav nav-example"},c.a.createElement(_,{selectedId:t,items:n}))},t}(c.a.Component);J.propTypes={selectedId:p.a.string,items:p.a.array};var G=function(e){return c.a.createElement(E,{query:"647896407",render:function(t){return c.a.createElement(J,Object.assign({items:t.allNavigationJson.edges},e))},data:X})},B=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.useExample,n=e.tabIndex,a=e.selectedNavItemId,i=e.width;return c.a.createElement("aside",{className:"lnb",style:{width:i}},c.a.createElement(O,null),t?c.a.createElement(M.a,{tabIndex:n},c.a.createElement(w.a,{name:"API"},c.a.createElement(K,{selectedId:a})),c.a.createElement(w.a,{name:"Examples"},c.a.createElement(G,{selectedId:a}))):c.a.createElement(K,{selectedId:a}))},t}(c.a.Component);B.propTypes={useExample:p.a.bool,tabIndex:p.a.number,selectedNavItemId:p.a.string,width:p.a.number};var Q=B,Y=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMouseMove=t.handleMouseMove,n.handleMouseDown=n.handleMouseDown.bind(i()(n)),n.handleMouseUp=n.handleMouseUp.bind(i()(n)),n}o()(t,e);var n=t.prototype;return n.handleMouseDown=function(){document.addEventListener("mousemove",this.handleMouseMove,!1),document.addEventListener("mouseup",this.handleMouseUp,!1)},n.handleMouseUp=function(){document.removeEventListener("mousemove",this.handleMouseMove,!1),document.removeEventListener("mouseup",this.handleMouseUp,!1)},n.render=function(){return c.a.createElement("div",{className:"resize-handle",onMouseDown:this.handleMouseDown,style:{left:this.props.left}},"Resizable")},t}(c.a.Component);Y.propTypes={handleMouseMove:p.a.func,left:p.a.number};var H=Y,V=260,W=function(e){function t(){var t;return(t=e.call(this)||this).state={width:V},t.handleMouseMove=t.changeWidth.bind(i()(t)),t}o()(t,e);var n=t.prototype;return n.changeWidth=function(e){e.preventDefault(),this.setState({width:Math.max(e.pageX,212)})},n.render=function(){var e=this.props,t=e.data,n=e.tabIndex,a=e.selectedNavItemId,i=e.children,r=t.header,o=t.footer,d=t.useExample,s=this.state.width;return c.a.createElement("div",{className:"wrapper"},c.a.createElement(I,{data:r}),c.a.createElement("main",{className:"body",style:{paddingLeft:s}},c.a.createElement(Q,{useExample:d,tabIndex:n,selectedNavItemId:a,width:s}),c.a.createElement("section",{className:"content"},i),c.a.createElement(H,{left:s,handleMouseMove:this.handleMouseMove})),c.a.createElement(v,{infoList:o}))},t}(c.a.Component);W.propTypes={data:p.a.object,tabIndex:p.a.number,selectedNavItemId:p.a.string,children:p.a.oneOfType([p.a.object,p.a.array])};t.a=function(e){return c.a.createElement(E,{query:"610389658",render:function(t){return c.a.createElement(W,Object.assign({data:t.allLayoutJson.edges[0].node},e))},data:d})}},148:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},149:function(e,t,n){"use strict";n(145);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),d=n(4),s=n.n(d),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={selected:t.tabIndex||0},n}i()(t,e);var n=t.prototype;return n.selectTab=function(e){this.setState({selected:e})},n.render=function(){var e=this,t=this.props.children;return o.a.createElement("div",{className:"tabs"},o.a.createElement("div",{className:"tab-buttons"},t.map(function(t,n){return t?o.a.createElement("button",{key:"tab-"+n,className:"tab"+(e.state.selected===n?" selected":""),onClick:function(){return e.selectTab(n)}},t.props.name):null})),t[this.state.selected])},t}(o.a.Component);c.propTypes={tabIndex:s.a.number,children:s.a.array.isRequired},t.a=c},150:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),d=n(4),s=n.n(d),c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.hasIframe,n=e.children;return o.a.createElement("div",{className:"tab-content"+(t?" iframe":"")},n)},t}(o.a.Component);c.propTypes={hasIframe:s.a.bool,children:s.a.object.isRequired},t.a=c},151:function(e){e.exports={data:{allLayoutJson:{edges:[{node:{header:{logo:{src:"https://uicdn.toast.com/toastui/img/tui-image-editor-bi-white.png",linkUrl:"/"},title:{text:"repo",linkUrl:"https://github.com/nhn/tui.image-editor"},version:"3.5.3"},footer:[{title:"NHN",linkUrl:"https://github.com/nhn"},{title:"FE Development Lab",linkUrl:"https://github.com/nhn/fe.javascript"}],useExample:!0}}]}}}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),d=n(69),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(d.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},153:function(e){e.exports={data:{allSearchKeywordsJson:{edges:[{node:{pid:"ErrorMsg",parentPid:"typedef",name:"ErrorMsg"}},{node:{pid:"FilterResult",parentPid:"typedef",name:"FilterResult"}},{node:{pid:"FlipStatus",parentPid:"typedef",name:"FlipStatus"}},{node:{pid:"ImageEditor#addIcon",parentPid:"ImageEditor",name:"addIcon"}},{node:{pid:"ImageEditor#addImageObject",parentPid:"ImageEditor",name:"addImageObject"}},{node:{pid:"ImageEditor#addShape",parentPid:"ImageEditor",name:"addShape"}},{node:{pid:"ImageEditor#addText",parentPid:"ImageEditor",name:"addText"}},{node:{pid:"ImageEditor#event-addText",parentPid:"ImageEditor",name:"addText"}},{node:{pid:"ImageEditor#applyFilter",parentPid:"ImageEditor",name:"applyFilter"}},{node:{pid:"ImageEditor#changeCursor",parentPid:"ImageEditor",name:"changeCursor"}},{node:{pid:"ImageEditor#changeIconColor",parentPid:"ImageEditor",name:"changeIconColor"}},{node:{pid:"ImageEditor#changeSelectableAll",parentPid:"ImageEditor",name:"changeSelectableAll"}},{node:{pid:"ImageEditor#changeShape",parentPid:"ImageEditor",name:"changeShape"}},{node:{pid:"ImageEditor#changeText",parentPid:"ImageEditor",name:"changeText"}},{node:{pid:"ImageEditor#changeTextStyle",parentPid:"ImageEditor",name:"changeTextStyle"}},{node:{pid:"ImageEditor#clearObjects",parentPid:"ImageEditor",name:"clearObjects"}},{node:{pid:"ImageEditor#clearRedoStack",parentPid:"ImageEditor",name:"clearRedoStack"}},{node:{pid:"ImageEditor#clearUndoStack",parentPid:"ImageEditor",name:"clearUndoStack"}},{node:{pid:"ImageEditor#crop",parentPid:"ImageEditor",name:"crop"}},{node:{pid:"ImageEditor#deactivateAll",parentPid:"ImageEditor",name:"deactivateAll"}},{node:{pid:"ImageEditor#destroy",parentPid:"ImageEditor",name:"destroy"}},{node:{pid:"ImageEditor#discardSelection",parentPid:"ImageEditor",name:"discardSelection"}},{node:{pid:"ImageEditor#flipX",parentPid:"ImageEditor",name:"flipX"}},{node:{pid:"ImageEditor#flipY",parentPid:"ImageEditor",name:"flipY"}},{node:{pid:"ImageEditor#getCanvasSize",parentPid:"ImageEditor",name:"getCanvasSize"}},{node:{pid:"ImageEditor#getCropzoneRect",parentPid:"ImageEditor",name:"getCropzoneRect"}},{node:{pid:"ImageEditor#getDrawingMode",parentPid:"ImageEditor",name:"getDrawingMode"}},{node:{pid:"ImageEditor#getImageName",parentPid:"ImageEditor",name:"getImageName"}},{node:{pid:"ImageEditor#getObjectPosition",parentPid:"ImageEditor",name:"getObjectPosition"}},{node:{pid:"ImageEditor#getObjectProperties",parentPid:"ImageEditor",name:"getObjectProperties"}},{node:{pid:"ImageEditor#hasFilter",parentPid:"ImageEditor",name:"hasFilter"}},{node:{pid:"ImageEditor#isEmptyRedoStack",parentPid:"ImageEditor",name:"isEmptyRedoStack"}},{node:{pid:"ImageEditor#isEmptyUndoStack",parentPid:"ImageEditor",name:"isEmptyUndoStack"}},{node:{pid:"ImageEditor#loadImageFromFile",parentPid:"ImageEditor",name:"loadImageFromFile"}},{node:{pid:"ImageEditor#loadImageFromURL",parentPid:"ImageEditor",name:"loadImageFromURL"}},{node:{pid:"ImageEditor#event-mousedown",parentPid:"ImageEditor",name:"mousedown"}},{node:{pid:"ImageEditor#event-objectActivated",parentPid:"ImageEditor",name:"objectActivated"}},{node:{pid:"ImageEditor#event-objectMoved",parentPid:"ImageEditor",name:"objectMoved"}},{node:{pid:"ImageEditor#event-objectScaled",parentPid:"ImageEditor",name:"objectScaled"}},{node:{pid:"ImageEditor#redo",parentPid:"ImageEditor",name:"redo"}},{node:{pid:"ImageEditor#event-redoStackChanged",parentPid:"ImageEditor",name:"redoStackChanged"}},{node:{pid:"ImageEditor#registerIcons",parentPid:"ImageEditor",name:"registerIcons"}},{node:{pid:"ImageEditor#removeActiveObject",parentPid:"ImageEditor",name:"removeActiveObject"}},{node:{pid:"ImageEditor#removeFilter",parentPid:"ImageEditor",name:"removeFilter"}},{node:{pid:"ImageEditor#removeObject",parentPid:"ImageEditor",name:"removeObject"}},{node:{pid:"ImageEditor#resetFlip",parentPid:"ImageEditor",name:"resetFlip"}},{node:{pid:"ImageEditor#resizeCanvasDimension",parentPid:"ImageEditor",name:"resizeCanvasDimension"}},{node:{pid:"ImageEditor#rotate",parentPid:"ImageEditor",name:"rotate"}},{node:{pid:"ImageEditor#setAngle",parentPid:"ImageEditor",name:"setAngle"}},{node:{pid:"ImageEditor#setBrush",parentPid:"ImageEditor",name:"setBrush"}},{node:{pid:"ImageEditor#setCropzoneRect",parentPid:"ImageEditor",name:"setCropzoneRect"}},{node:{pid:"ImageEditor#setDrawingShape",parentPid:"ImageEditor",name:"setDrawingShape"}},{node:{pid:"ImageEditor#setObjectPosition",parentPid:"ImageEditor",name:"setObjectPosition"}},{node:{pid:"ImageEditor#setObjectProperties",parentPid:"ImageEditor",name:"setObjectProperties"}},{node:{pid:"ImageEditor#setObjectPropertiesQuietly",parentPid:"ImageEditor",name:"setObjectPropertiesQuietly"}},{node:{pid:"ImageEditor#startDrawingMode",parentPid:"ImageEditor",name:"startDrawingMode"}},{node:{pid:"ImageEditor#stopDrawingMode",parentPid:"ImageEditor",name:"stopDrawingMode"}},{node:{pid:"ImageEditor#event-textEditing",parentPid:"ImageEditor",name:"textEditing"}},{node:{pid:"ImageEditor#toDataURL",parentPid:"ImageEditor",name:"toDataURL"}},{node:{pid:"ImageEditor#undo",parentPid:"ImageEditor",name:"undo"}},{node:{pid:"ImageEditor#event-undoStackChanged",parentPid:"ImageEditor",name:"undoStackChanged"}},{node:{pid:"ImageEditor",parentPid:"class",name:"ImageEditor"}},{node:{pid:"Locale#localize",parentPid:"Locale",name:"localize"}},{node:{pid:"Locale",parentPid:"class",name:"Locale"}},{node:{pid:"ObjectProps",parentPid:"typedef",name:"ObjectProps"}},{node:{pid:"RotateStatus",parentPid:"typedef",name:"RotateStatus"}},{node:{pid:"SizeChange",parentPid:"typedef",name:"SizeChange"}},{node:{pid:"themeConfig",parentPid:"typedef",name:"themeConfig"}},{node:{pid:"Ui#resizeEditor",parentPid:"Ui",name:"resizeEditor"}},{node:{pid:"Ui",parentPid:"class",name:"Ui"}},{node:{pid:"tutorial-example01-includeUi",parentPid:"example",name:"1. Include ui"}},{node:{pid:"tutorial-example02-useApiDirect",parentPid:"example",name:"2. Use api direct (basic)"}},{node:{pid:"tutorial-example03-mobile",parentPid:"example",name:"3. Mobile"}}]}}}},154:function(e,t,n){var a=n(6),i=n(155),r=n(25).f,o=n(158).f,d=n(57),s=n(76),c=a.RegExp,m=c,p=c.prototype,l=/a/g,u=/a/g,g=new c(l)!==l;if(n(18)&&(!g||n(19)(function(){return u[n(3)("match")]=!1,c(l)!=l||c(u)==u||"/a/i"!=c(l,"i")}))){c=function(e,t){var n=this instanceof c,a=d(e),r=void 0===t;return!n&&a&&e.constructor===c&&r?e:i(g?new m(a&&!r?e.source:e,t):m((a=e instanceof c)?e.source:e,a&&r?s.call(e):t),n?this:p,c)};for(var E=function(e){e in c||r(c,e,{configurable:!0,get:function(){return m[e]},set:function(t){m[e]=t}})},h=o(m),I=0;h.length>I;)E(h[I++]);p.constructor=c,c.prototype=p,n(14)(a,"RegExp",c)}n(81)("RegExp")},155:function(e,t,n){var a=n(11),i=n(156).set;e.exports=function(e,t,n){var r,o=t.constructor;return o!==n&&"function"==typeof o&&(r=o.prototype)!==n.prototype&&a(r)&&i&&i(e,r),e}},156:function(e,t,n){var a=n(11),i=n(5),r=function(e,t){if(i(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(20)(Function.call,n(157).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:r}},157:function(e,t,n){var a=n(80),i=n(55),r=n(37),o=n(78),d=n(26),s=n(77),c=Object.getOwnPropertyDescriptor;t.f=n(18)?c:function(e,t){if(e=r(e),t=o(t,!0),s)try{return c(e,t)}catch(n){}if(d(e,t))return i(!a.f.call(e,t),e[t])}},158:function(e,t,n){var a=n(79),i=n(56).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,i)}},159:function(e){e.exports={data:{allNavigationJson:{edges:[{node:{pid:"ErrorMsg",parentPid:"typedef",name:"ErrorMsg",opened:!1,childNodes:[]}},{node:{pid:"FilterResult",parentPid:"typedef",name:"FilterResult",opened:!1,childNodes:[]}},{node:{pid:"FlipStatus",parentPid:"typedef",name:"FlipStatus",opened:!1,childNodes:[]}},{node:{pid:"ImageEditor",parentPid:"class",name:"ImageEditor",opened:!1,childNodes:[{pid:"ImageEditor#addIcon",name:"addIcon",kind:"instance-function"},{pid:"ImageEditor#addImageObject",name:"addImageObject",kind:"instance-function"},{pid:"ImageEditor#addShape",name:"addShape",kind:"instance-function"},{pid:"ImageEditor#addText",name:"addText",kind:"instance-function"},{pid:"ImageEditor#event-addText",name:"addText",kind:"event"},{pid:"ImageEditor#applyFilter",name:"applyFilter",kind:"instance-function"},{pid:"ImageEditor#changeCursor",name:"changeCursor",kind:"instance-function"},{pid:"ImageEditor#changeIconColor",name:"changeIconColor",kind:"instance-function"},{pid:"ImageEditor#changeSelectableAll",name:"changeSelectableAll",kind:"instance-function"},{pid:"ImageEditor#changeShape",name:"changeShape",kind:"instance-function"},{pid:"ImageEditor#changeText",name:"changeText",kind:"instance-function"},{pid:"ImageEditor#changeTextStyle",name:"changeTextStyle",kind:"instance-function"},{pid:"ImageEditor#clearObjects",name:"clearObjects",kind:"instance-function"},{pid:"ImageEditor#clearRedoStack",name:"clearRedoStack",kind:"instance-function"},{pid:"ImageEditor#clearUndoStack",name:"clearUndoStack",kind:"instance-function"},{pid:"ImageEditor#crop",name:"crop",kind:"instance-function"},{pid:"ImageEditor#deactivateAll",name:"deactivateAll",kind:"instance-function"},{pid:"ImageEditor#destroy",name:"destroy",kind:"instance-function"},{pid:"ImageEditor#discardSelection",name:"discardSelection",kind:"instance-function"},{pid:"ImageEditor#flipX",name:"flipX",kind:"instance-function"},{pid:"ImageEditor#flipY",name:"flipY",kind:"instance-function"},{pid:"ImageEditor#getCanvasSize",name:"getCanvasSize",kind:"instance-function"},{pid:"ImageEditor#getCropzoneRect",name:"getCropzoneRect",kind:"instance-function"},{pid:"ImageEditor#getDrawingMode",name:"getDrawingMode",kind:"instance-function"},{pid:"ImageEditor#getImageName",name:"getImageName",kind:"instance-function"},{pid:"ImageEditor#getObjectPosition",name:"getObjectPosition",kind:"instance-function"},{pid:"ImageEditor#getObjectProperties",name:"getObjectProperties",kind:"instance-function"},{pid:"ImageEditor#hasFilter",name:"hasFilter",kind:"instance-function"},{pid:"ImageEditor#isEmptyRedoStack",name:"isEmptyRedoStack",kind:"instance-function"},{pid:"ImageEditor#isEmptyUndoStack",name:"isEmptyUndoStack",kind:"instance-function"},{pid:"ImageEditor#loadImageFromFile",name:"loadImageFromFile",kind:"instance-function"},{pid:"ImageEditor#loadImageFromURL",name:"loadImageFromURL",kind:"instance-function"},{pid:"ImageEditor#event-mousedown",name:"mousedown",kind:"event"},{pid:"ImageEditor#event-objectActivated",name:"objectActivated",kind:"event"},{pid:"ImageEditor#event-objectMoved",name:"objectMoved",kind:"event"},{pid:"ImageEditor#event-objectScaled",name:"objectScaled",kind:"event"},{pid:"ImageEditor#redo",name:"redo",kind:"instance-function"},{pid:"ImageEditor#event-redoStackChanged",name:"redoStackChanged",kind:"event"},{pid:"ImageEditor#registerIcons",name:"registerIcons",kind:"instance-function"},{pid:"ImageEditor#removeActiveObject",name:"removeActiveObject",kind:"instance-function"},{pid:"ImageEditor#removeFilter",name:"removeFilter",kind:"instance-function"},{pid:"ImageEditor#removeObject",name:"removeObject",kind:"instance-function"},{pid:"ImageEditor#resetFlip",name:"resetFlip",kind:"instance-function"},{pid:"ImageEditor#resizeCanvasDimension",name:"resizeCanvasDimension",kind:"instance-function"},{pid:"ImageEditor#rotate",name:"rotate",kind:"instance-function"},{pid:"ImageEditor#setAngle",name:"setAngle",kind:"instance-function"},{pid:"ImageEditor#setBrush",name:"setBrush",kind:"instance-function"},{pid:"ImageEditor#setCropzoneRect",name:"setCropzoneRect",kind:"instance-function"},{pid:"ImageEditor#setDrawingShape",name:"setDrawingShape",kind:"instance-function"},{pid:"ImageEditor#setObjectPosition",name:"setObjectPosition",kind:"instance-function"},{pid:"ImageEditor#setObjectProperties",name:"setObjectProperties",kind:"instance-function"},{pid:"ImageEditor#setObjectPropertiesQuietly",name:"setObjectPropertiesQuietly",kind:"instance-function"},{pid:"ImageEditor#startDrawingMode",name:"startDrawingMode",kind:"instance-function"},{pid:"ImageEditor#stopDrawingMode",name:"stopDrawingMode",kind:"instance-function"},{pid:"ImageEditor#event-textEditing",name:"textEditing",kind:"event"},{pid:"ImageEditor#toDataURL",name:"toDataURL",kind:"instance-function"},{pid:"ImageEditor#undo",name:"undo",kind:"instance-function"},{pid:"ImageEditor#event-undoStackChanged",name:"undoStackChanged",kind:"event"}]}},{node:{pid:"Locale",parentPid:"class",name:"Locale",opened:!1,childNodes:[{pid:"Locale#localize",name:"localize",kind:"instance-function"}]}},{node:{pid:"ObjectProps",parentPid:"typedef",name:"ObjectProps",opened:!1,childNodes:[]}},{node:{pid:"RotateStatus",parentPid:"typedef",name:"RotateStatus",opened:!1,childNodes:[]}},{node:{pid:"SizeChange",parentPid:"typedef",name:"SizeChange",opened:!1,childNodes:[]}},{node:{pid:"themeConfig",parentPid:"typedef",name:"themeConfig",opened:!1,childNodes:[]}},{node:{pid:"Ui",parentPid:"class",name:"Ui",opened:!1,childNodes:[{pid:"Ui#resizeEditor",name:"resizeEditor",kind:"instance-function"}]}}]}}}},160:function(e){e.exports={data:{allNavigationJson:{edges:[{node:{pid:"tutorial-example01-includeUi",name:"1. Include ui"}},{node:{pid:"tutorial-example02-useApiDirect",name:"2. Use api direct (basic)"}},{node:{pid:"tutorial-example03-mobile",name:"3. Mobile"}}]}}}}}]);
//# sourceMappingURL=1-d15eb67d089baf241931.js.map