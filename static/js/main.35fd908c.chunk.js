(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(193)},109:function(e,t,a){},111:function(e,t,a){},174:function(e,t){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(99),o=a.n(c),l=(a(109),a(100)),i=a(7),s=(a(111),a(31)),u=a.n(s),m=a(5),d=a(74),f=(a(148),a(21)),h=a.n(f),p=a(37),g=a(197);var E=function(e){var t=e.page,a=e.pages,n=e.maxPageDisplay,c=void 0===n?5:n,o=e.category,l=void 0===o?null:o,i=l?"".concat("","/category/").concat(l.toLowerCase(),"/"):"".concat("","/");return a>1&&r.a.createElement(g.a,null,1!==a&&1!==t?r.a.createElement(g.a.First,{href:"".concat(i,"1/"),title:"Trang \u0111\u1ea7u",alt:"Trang \u0111\u1ea7u"},r.a.createElement("i",{className:"fas fa-angle-double-left"})):r.a.createElement(g.a.First,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-double-left"})),t>1?r.a.createElement(g.a.Prev,{href:"".concat(i).concat(t-1,"/"),title:"Trang tr\u01b0\u1edbc",alt:"Trang tr\u01b0\u1edbc"},r.a.createElement("i",{className:"fas fa-angle-left"})):r.a.createElement(g.a.Prev,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-left"})),Object(p.a)(Array(a).keys()).map(function(e){return t===e+1?r.a.createElement(g.a.Item,{key:e+1,active:!0,href:"".concat(i).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1):e+1>t&&e+1<=t+c?r.a.createElement(r.a.Fragment,{key:e+1},r.a.createElement(g.a.Item,{href:"".concat(i).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1),e+1===t+c&&e+1<a&&r.a.createElement(g.a.Ellipsis,{href:"".concat(i).concat(t+(c+1),"/"),title:"Trang ".concat(t+(c+1)),alt:"Trang ".concat(t+(c+1))})):e+1<t&&e+1>=t-c&&r.a.createElement(r.a.Fragment,{key:e+1},e+1===t-c&&e+1>1&&r.a.createElement(g.a.Ellipsis,{href:"".concat(i).concat(t-(c+1),"/"),title:"Trang ".concat(t-(c+1)),alt:"Trang ".concat(t-(c+1))}),r.a.createElement(g.a.Item,{href:"".concat(i).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1))}),t<a?r.a.createElement(g.a.Next,{href:"".concat(i).concat(t+1,"/"),title:"Trang sau",alt:"Trang sau"},r.a.createElement("i",{className:"fas fa-angle-right"})):r.a.createElement(g.a.Next,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-right"})),a!==t?r.a.createElement(g.a.Last,{href:"".concat(i).concat(a,"/"),title:"Trang cu\u1ed1i",alt:"Trang cu\u1ed1i"},r.a.createElement("i",{className:"fas fa-angle-double-right"})):r.a.createElement(g.a.Last,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-double-right"})))},v=function(e){var t=e.image,a=e.thumb,n=e.title,c=e.group;return r.a.createElement(d.LightgalleryItem,{group:c,src:t,thumb:a},r.a.createElement("img",{src:a,style:{width:"100%"},loading:"lazy",alt:n,title:n}))};var y=function(e){var t=e.data,a=e.showContactForm,c=e.handleProductReadMore,o=e.callbackActivedMenuItem,l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],f=s[1],p=Object(m.g)(),g=p.categoryName,y=p.page,b=void 0===y?1:y;function w(e){return e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function O(e,t,a){return w(null!==t&&void 0!==t?e+t/100*e:null!==a&&void 0!==a?e+a/100*e:e)}Object(n.useEffect)(function(){if(!u){var e={};t.paginateConfig&&(e.itemsPerPage=t.paginateConfig.itemsPerPage,e.maxPageDisplay=t.paginateConfig.maxPageDisplay);var a=t.products;g&&(a=a.filter(function(e){return e.category.toLowerCase()===g.toLowerCase()}),o(g));var n=a.slice((parseInt(b)-1)*e.itemsPerPage,parseInt(b)*e.itemsPerPage);e.productList=n,e.totalPages=Math.ceil(a.length/e.itemsPerPage),e.siteInfo=t.siteInfo,f(e)}},[g,b]);var x=function(e,t){return null!==e&&void 0!==e&&e.length>t},N=function(e,t){var a=e.description;if(null!==a&&void 0!==a){var n=a.match(/\d+(?:\.\d+)?/g);n&&n.forEach(function(n){if(n>1e4){var r=O(Number(n),e.priceInfo.percentagePriceIncrease,t);a=a.replace(n,r),e.DescByOtherPriceInPercentage=a}})}return a};return u&&r.a.createElement(r.a.Fragment,null,u.productList.map(function(e){return r.a.createElement("section",{key:e.id},r.a.createElement("header",null,r.a.createElement("h1",{className:"home-product-title",onClick:function(t){return c(t,e)}},e.title)),r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h2",null,"Gi\xe1: ",r.a.createElement("span",{className:"price"},O(e.priceInfo.price,e.priceInfo.percentagePriceIncrease,u.siteInfo.percentagePriceIncreaseAppliesToAllProducts)),r.a.createElement("input",{type:"hidden",id:"price",value:w(e.priceInfo.price)}),r.a.createElement("input",{type:"hidden",id:"percentagePriceIncrease",value:e.priceInfo.percentagePriceIncrease}),r.a.createElement("input",{type:"hidden",id:"percentagePriceIncreaseAppliesToAllProducts",value:u.siteInfo.percentagePriceIncreaseAppliesToAllProducts})),r.a.createElement("h3",null,r.a.createElement("i",null,"M\xe3: ",r.a.createElement("strong",null,e.id)),r.a.createElement("br",null),r.a.createElement("i",null,"Nh\xf3m: ",r.a.createElement("a",{href:""+"/category/".concat(e.category.toLowerCase(),"/")},e.category)),r.a.createElement("br",null),r.a.createElement("br",null)),e.description&&r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-quote-left fa-2x fa-pull-left"}),r.a.createElement("p",{className:"excerpt",onClick:function(t){return c(t,e)}},function(e,t,a,n){var r=N(e,n);if(x(r,t)){var c=(r=r.substring(0,t)).lastIndexOf(" ");r=r.substr(0,c)+a}return h()(r)}(e,100," ...",u.siteInfo.percentagePriceIncreaseAppliesToAllProducts),x(e.description,100)&&r.a.createElement("i",{className:"read-more"},"Xem th\xeam"))),r.a.createElement("h2",{className:"h2buy"},r.a.createElement("a",{href:"/#",className:"buy",onClick:function(n){return a(n,e,t.contactFormConfig)}},u.siteInfo.buyBtnText))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"gallery"},r.a.createElement(d.LightgalleryProvider,null,e.images.map(function(t,a){return r.a.createElement(v,{key:a,image:""+"/assets/images/product/".concat(t),thumb:""+"/assets/images/product/thumbnail/".concat(t),title:e.title,group:e.id.toString()})})))))))}),r.a.createElement("div",{className:"pagination-box1"},r.a.createElement(E,{page:parseInt(b),pages:u.totalPages,maxPageDisplay:u.maxPageDisplay,category:g})),r.a.createElement("section",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"pagination-box2"},r.a.createElement(E,{page:parseInt(b),pages:u.totalPages,maxPageDisplay:u.maxPageDisplay,category:g})))))},b=a(47),w=a(75);var O=function(e){var t=e.categoryList,a=e.handleClose,n=e.isShow,c=e.activedItem;return t&&r.a.createElement(b.a,{show:n,onHide:a},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,"NH\xd3M S\u1ea2N PH\u1ea8M")),r.a.createElement(b.a.Body,null,r.a.createElement(w.a,{className:"flex-column"},t.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(w.a.Link,{href:""+"/category/".concat(e.name.toLowerCase(),"/"),className:c.toLowerCase()===e.name.toLowerCase()?"actived":""},r.a.createElement("i",{className:"fas fa-angle-right"})," ",e.name," (",e.count,")"))}))))},x=a(73),N=a(19),j=a.n(N),C=a(44),T=a(18),P=a(9),I=a(61),L=a(28);a(51);var S=function(){return r.a.createElement("img",{id:"imgloading",src:"/assets/images/loading.gif",title:"loading",alt:"loading"})};var k=function(e){var t=e.siteInfo,a=e.handleClose,c=e.isShow,o=e.product,l=e.contactFormConfig,s=Object(n.useState)(!1),m=Object(i.a)(s,2),d=m[0],f=m[1],h=Object(n.useState)(""),p=Object(i.a)(h,2),g=p[0],E=p[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),b=y[0],w=y[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),N=x[0],j=x[1],k=Object(n.useState)(!1),F=Object(i.a)(k,2),D=F[0],B=F[1],A=Object(n.useState)(!1),M=Object(i.a)(A,2),H=M[0],_=M[1],G=Object(n.useState)(!1),z=Object(i.a)(G,2),V=z[0],q=z[1];return Object(n.useEffect)(function(){_(!1),f(!1)},[c]),t&&o&&l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{size:"lg",show:c,onHide:a,backdrop:"static",keyboard:!1},r.a.createElement(T.a,{noValidate:!0,validated:d,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault();var t={title:'[xtcbanhang.com] - Li\xean h\u1ec7 mua "'.concat(o.title," (").concat(o.id,')"'),name:g,email:b,content:N,contactFormConfig:{receiverEmail:l.receiverEmail,receiverName:l.receiverName,cc:l.cc,bcc:l.bcc}};B(!0),u()({url:"https://script.google.com/macros/s/AKfycbws3IRyhVC5QjuWWkDYzN4zy3-K3U4udXB3rvckZwJb8ZomgXMtJJD_plSUYqVdZZx8tw/exec",method:"post",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"},data:t}).then(function(e){B(!1),e.data.result&&"error"===e.data.result?q(!0):(_(!0),E(""),w(""),j("")),f(!1)}).catch(function(e){console.log(e)})}f(!0)}.bind(this)},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,null,'Li\xean h\u1ec7 mua "',o.title," (",o.id,')"'),D&&r.a.createElement(S,null),H&&r.a.createElement("p",{id:"ploading"},r.a.createElement("span",{role:"img","aria-label":"success"},"\u2714")," \u0110\xe3 g\u1eedi."),V&&r.a.createElement("p",{id:"ploading-error"},r.a.createElement("span",{role:"img","aria-label":"error"},"\u274c")," L\u1ed7i.")),r.a.createElement(P.a.Body,null,r.a.createElement(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(I.a,null,r.a.createElement(L.a,{xs:6,md:6},r.a.createElement(T.a.Control,{type:"text",placeholder:"T\xean",required:!0,value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(L.a,{xs:6,md:6},r.a.createElement(T.a.Control,{type:"email",placeholder:"Email",required:!0,value:b,onChange:function(e){return w(e.target.value)}})))),r.a.createElement(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(T.a.Control,{as:"textarea",rows:6,placeholder:"Th\xf4ng tin li\xean h\u1ec7",required:!0,value:N,onChange:function(e){return j(e.target.value)}}))),r.a.createElement(P.a.Footer,null,r.a.createElement(C.a,{variant:"secondary",onClick:a},"\u0110\xf3ng"),r.a.createElement(C.a,{variant:"primary",type:"submit"},"G\u1eedi")))))},F=a(22);var D=function(e){var t=e.handleClose,a=e.isShowPagesTab,c=e.pagesTab,o=e.contactFormConfig,l=Object(n.useState)(!1),s=Object(i.a)(l,2),m=s[0],d=s[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),g=p[0],E=p[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),b=y[0],w=y[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),N=x[0],j=x[1],S=Object(n.useState)(!1),k=Object(i.a)(S,2),D=k[0],B=k[1],A=Object(n.useState)(!1),M=Object(i.a)(A,2),H=M[0],_=M[1],G=Object(n.useState)(!1),z=Object(i.a)(G,2),V=z[0],q=z[1];return Object(n.useEffect)(function(){_(!1),d(!1)},[a]),c&&r.a.createElement(P.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,className:"pagesTab",scrollable:!0},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,null,"Th\xf4ng tin")),r.a.createElement(P.a.Body,null,r.a.createElement(F.a,{alwaysOpen:!0},c.aboutUs&&r.a.createElement(F.a.Item,{eventKey:"0"},r.a.createElement(F.a.Header,null,c.aboutUs.title),r.a.createElement(F.a.Body,null,h()(c.aboutUs.content))),c.servicesAndOthers&&r.a.createElement(F.a.Item,{eventKey:"1"},r.a.createElement(F.a.Header,null,c.servicesAndOthers.title),r.a.createElement(F.a.Body,null,h()(c.servicesAndOthers.content))),c.contact&&r.a.createElement(F.a.Item,{eventKey:"2"},r.a.createElement(F.a.Header,null,c.contact.title),r.a.createElement(F.a.Body,null,h()(c.contact.content),r.a.createElement(T.a,{noValidate:!0,validated:m,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault();var t={title:"Contact from [xtcbanhang.com]",name:g,email:b,content:N,contactFormConfig:{receiverEmail:o.receiverEmail,receiverName:o.receiverName,cc:o.cc,bcc:o.bcc}};B(!0),u()({url:"https://script.google.com/macros/s/AKfycbws3IRyhVC5QjuWWkDYzN4zy3-K3U4udXB3rvckZwJb8ZomgXMtJJD_plSUYqVdZZx8tw/exec",method:"post",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"},data:t}).then(function(e){B(!1),e.data.result&&"error"===e.data.result?q(!0):(_(!0),E(""),w(""),j("")),d(!1)}).catch(function(e){console.log(e)})}d(!0)}.bind(this),style:{marginBottom:"0px"}},r.a.createElement(P.a.Header,null,r.a.createElement(P.a.Title,null,"G\u1eedi li\xean h\u1ec7"),D&&r.a.createElement("img",{id:"imgloading",src:"/assets/images/loading.gif",title:"loading",alt:"loading"}),H&&r.a.createElement("p",{id:"ploading"},r.a.createElement("span",{role:"img","aria-label":"success"},"\u2714")," \u0110\xe3 g\u1eedi."),V&&r.a.createElement("p",{id:"ploading-error"},r.a.createElement("span",{role:"img","aria-label":"error"},"\u274c")," L\u1ed7i.")),r.a.createElement(P.a.Body,null,r.a.createElement(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(I.a,null,r.a.createElement(L.a,{xs:6,md:6},r.a.createElement(T.a.Control,{type:"text",placeholder:"T\xean",required:!0,value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(L.a,{xs:6,md:6},r.a.createElement(T.a.Control,{type:"email",placeholder:"Email",required:!0,value:b,onChange:function(e){return w(e.target.value)}})))),r.a.createElement(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(T.a.Control,{as:"textarea",rows:6,placeholder:"Th\xf4ng tin li\xean h\u1ec7",required:!0,value:N,onChange:function(e){return j(e.target.value)}}))),r.a.createElement(P.a.Footer,null,r.a.createElement(C.a,{variant:"primary",type:"submit"},"G\u1eedi"))))))))};var B=function(e){var t=e.showCopyright;return Object(n.useEffect)(function(){return console.log("PageNotFound useEffect"),t(!1),function(e){console.log("PageNotFound unmounts")}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,":("),r.a.createElement("h1",null,"There's nothing here!")))};var A=function(e){var t=e.handleClose,a=e.isShow,c=e.product;return Object(n.useEffect)(function(){},[a]),c&&r.a.createElement(P.a,{size:"lg",show:a,onHide:function(){return t(!1)},"aria-labelledby":"example-modal-sizes-title-lg",className:"productReadMore",scrollable:!0},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,{id:"example-modal-sizes-title-lg"},'M\xf4 t\u1ea3 "',c.title," (",c.id,')"')),r.a.createElement(P.a.Body,null,c.DescByOtherPriceInPercentage?r.a.createElement("div",{className:"product-read-more-desc"},h()(c.DescByOtherPriceInPercentage)):c.description&&r.a.createElement("div",{className:"product-read-more-desc"},h()(c.description)),r.a.createElement("p",{className:"galleryTitle"},r.a.createElement("strong",null,"H\xecnh \u1ea3nh s\u1ea3n ph\u1ea9m")),c.images&&c.images.map(function(e,t){return r.a.createElement("img",{key:t,src:""+"/assets/images/product/".concat(e),style:{width:"100%"},loading:"lazy",alt:c.title,title:c.title})})))};var M=function(e){var t=e.customersTalkList,a=e.handleClose,n=e.isShow;return t&&r.a.createElement(P.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"example-modal-sizes-title-lg",scrollable:!0},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,{id:"example-modal-sizes-title-lg"},"Kh\xe1ch h\xe0ng \u0111\xe3 mua")),r.a.createElement(P.a.Body,null,t.map(function(e,t){return r.a.createElement("div",{key:t,className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4 col-xs-6"},r.a.createElement("div",{"data-content":"3 \u1ea3nh",className:"customer-photo"},r.a.createElement("img",{src:""+"/assets/images/customers/thumbnail/".concat(e.images[0]),title:e.title,alt:e.title}))),r.a.createElement("div",{className:"col-md-8 col-xs-6"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title customer-title"},e.title),r.a.createElement("div",{className:"customer-content"},h()(e.content)),r.a.createElement("p",{className:"card-text customer-author"},r.a.createElement("small",{className:"text-muted"},e.author))))))})))};function H(){H=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,c=Object.create(r.prototype),o=new x(n||[]);return c._invoke=function(e,t,a){var n="suspendedStart";return function(r,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw c;return j()}for(a.method=r,a.arg=c;;){var o=a.delegate;if(o){var l=b(o,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=s(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,o),c}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=i;var u={};function m(){}function d(){}function f(){}var h={};l(h,r,function(){return this});var p=Object.getPrototypeOf,g=p&&p(p(N([])));g&&g!==t&&a.call(g,r)&&(h=g);var E=f.prototype=m.prototype=Object.create(h);function v(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function y(e,t){var n;this._invoke=function(r,c){function o(){return new t(function(n,o){!function n(r,c,o,l){var i=s(e[r],e,c);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,o,l)},function(e){n("throw",e,o,l)}):t.resolve(m).then(function(e){u.value=e,o(u)},function(e){return n("throw",e,o,l)})}l(i.arg)}(r,c,n,o)})}return n=n?n.then(o,o):o()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,c=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=f,l(E,"constructor",f),l(f,"constructor",d),d.displayName=l(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,o,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},v(y.prototype),l(y.prototype,c,function(){return this}),e.AsyncIterator=y,e.async=function(t,a,n,r,c){void 0===c&&(c=Promise);var o=new y(i(t,a,n,r),c);return e.isGeneratorFunction(a)?o:o.next().then(function(e){return e.done?e.value:o.next()})},v(E),l(E,o,"Generator"),l(E,r,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],o=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var l=a.call(c,"catchLoc"),i=a.call(c,"finallyLoc");if(l&&i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:N(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var _=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),d=s[0],f=s[1];function h(){return(h=Object(l.a)(H().mark(function e(){var t,a,n,r;return H().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/data.json");case 2:t=e.sent,a=t.data,document.title=a.siteInfo.pageTitle,c(a),a.products&&(n=Array.from(new Set(a.products.map(function(e){return e.category}))))&&(r=[],n.forEach(function(e){r.push({name:e,count:a.products.filter(function(t){return t.category===e}).length})}),f(r));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){!function(){h.apply(this,arguments)}()},[]),j()(window).on("scroll",function(){j()(this).scrollTop()>100?j()("#toTop").fadeIn():j()("#toTop").fadeOut(),j()(window).scrollTop()+j()(window).height()===j()(document).height()?j()("#toBottom").fadeOut():j()("#toBottom").fadeIn()});var p=Object(n.useState)(!1),g=Object(i.a)(p,2),E=g[0],v=g[1],b=Object(n.useState)({}),w=Object(i.a)(b,2),N=w[0],C=w[1],T=Object(n.useState)({}),P=Object(i.a)(T,2),I=P[0],L=P[1],S=function(e,t,a){e.preventDefault(),v(!0),C(t),L(a)},F=Object(n.useState)(!1),_=Object(i.a)(F,2),G=_[0],z=_[1],V=Object(n.useState)(""),q=Object(i.a)(V,2),R=q[0],J=q[1],K=function(e){J(e)},Z=Object(n.useState)(!0),U=Object(i.a)(Z,2),Y=U[0],X=U[1],W=Object(n.useState)(!1),Q=Object(i.a)(W,2),$=Q[0],ee=Q[1],te=Object(n.useState)(!1),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useState)(!1),oe=Object(i.a)(ce,2),le=oe[0],ie=oe[1],se=function(e,t){e.preventDefault(),ie(!0),C(t)};return a&&r.a.createElement(x.a,{basename:""},r.a.createElement("div",{id:"wrapper"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",element:r.a.createElement(y,{data:a,showContactForm:S,handleProductReadMore:se,callbackActivedMenuItem:K}),exact:!0},r.a.createElement(m.a,{path:"/:page/",element:r.a.createElement(y,{data:a,showContactForm:S,handleProductReadMore:se,callbackActivedMenuItem:K})})),r.a.createElement(m.a,{path:"/category/:categoryName/",element:r.a.createElement(y,{data:a,showContactForm:S,handleProductReadMore:se,callbackActivedMenuItem:K,exact:!0})},r.a.createElement(m.a,{path:"/category/:categoryName/:page/",element:r.a.createElement(y,{data:a,showContactForm:S,handleProductReadMore:se,callbackActivedMenuItem:K})})),r.a.createElement(m.a,{path:"*",element:r.a.createElement(B,{showCopyright:function(e){X(e)}})})),r.a.createElement(O,{categoryList:d,handleClose:function(){z(!1)},isShow:G,activedItem:R}),r.a.createElement(k,{siteInfo:a.siteInfo,handleClose:function(){v(!1)},isShow:E,product:N,contactFormConfig:I}),r.a.createElement(D,{handleClose:function(){ee(!1)},isShowPagesTab:$,pagesTab:a.pagesTab,contactFormConfig:a.contactFormConfig}),r.a.createElement(M,{customersTalkList:a.customersTalk,handleClose:function(){re(!1)},isShow:ne}),r.a.createElement(A,{handleClose:function(){ie(!1)},isShow:le,product:N}),r.a.createElement("a",{href:"".concat("","/"),id:"home-ontop",title:"Trang ch\u1ee7",alt:"Trang ch\u1ee7"},r.a.createElement("i",{className:"fa fa-home"})),r.a.createElement("i",{className:"fas fa-bars",id:"menu-ontop",onClick:function(e){return function(e){e.preventDefault(),z(!0)}(e)},title:"Nh\xf3m s\u1ea3n ph\u1ea9m",alt:"Nh\xf3m s\u1ea3n ph\u1ea9m"}),r.a.createElement("i",{className:"far fa-window-restore",id:"pages-ontop",onClick:function(e){return function(e){e.preventDefault(),ee(!0)}(e)},title:"V\u1ec1 ch\xfang t\xf4i/ D\u1ecbch v\u1ee5/ Li\xean h\u1ec7/...",alt:"V\u1ec1 ch\xfang t\xf4i/ D\u1ecbch v\u1ee5/ Li\xean h\u1ec7/..."}),r.a.createElement("i",{className:"far fa-comment-dots",id:"customers-talk-ontop",onClick:function(e){return function(e){e.preventDefault(),re(!0)}(e)},title:"Danh s\xe1ch kh\xe1ch h\xe0ng \u0111\xe3 mua",alt:"Danh s\xe1ch kh\xe1ch h\xe0ng \u0111\xe3 mua"}),r.a.createElement("i",{className:"fa fa-arrow-up",id:"toTop",onClick:function(){return j()("html, body").animate({scrollTop:0},200),!1}}),r.a.createElement("i",{className:"fa fa-arrow-down",id:"toBottom",onClick:function(){return j()("html, body").animate({scrollTop:j()(document).height()},200),!1}}),Y&&r.a.createElement("div",{className:"copyright"},"\xa9 All rights reserved.")))},G=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,196)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),G()}},[[102,3,2]]]);
//# sourceMappingURL=main.35fd908c.chunk.js.map