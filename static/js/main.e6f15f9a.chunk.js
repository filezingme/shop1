(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(88),l=a.n(c),o=(a(99),a(89)),i=a(7),s=(a(101),a(36)),u=a.n(s),m=a(5),d=a(74),h=(a(139),a(27)),f=a(42),p=a(162);var g=function(e){var t=e.page,a=e.pages,n=e.maxPageDisplay,c=void 0===n?5:n,l=e.category,o=void 0===l?null:l,i=e.handleConvertToUrlFriendly,s=o?"".concat("","/").concat(i(o),"/"):"".concat("","/");return!isNaN(t)&&a&&r.a.createElement(p.a,null,1!==a&&1!==t?r.a.createElement(p.a.First,{href:"".concat(s,"1/"),title:"Trang \u0111\u1ea7u",alt:"Trang \u0111\u1ea7u"},r.a.createElement("i",{className:"fas fa-angle-double-left"})):r.a.createElement(p.a.First,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-double-left"})),t>1?r.a.createElement(p.a.Prev,{href:"".concat(s).concat(t-1,"/"),title:"Trang tr\u01b0\u1edbc",alt:"Trang tr\u01b0\u1edbc"},r.a.createElement("i",{className:"fas fa-angle-left"})):r.a.createElement(p.a.Prev,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-left"})),Object(f.a)(Array(a).keys()).map(function(e){return t===e+1?r.a.createElement(p.a.Item,{key:e+1,active:!0,href:"".concat(s).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1):e+1>t&&e+1<=t+c?r.a.createElement(r.a.Fragment,{key:e+1},r.a.createElement(p.a.Item,{href:"".concat(s).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1),e+1===t+c&&e+1<a&&r.a.createElement(p.a.Ellipsis,{href:"".concat(s).concat(t+(c+1),"/"),title:"Trang ".concat(t+(c+1)),alt:"Trang ".concat(t+(c+1))})):e+1<t&&e+1>=t-c&&r.a.createElement(r.a.Fragment,{key:e+1},e+1===t-c&&e+1>1&&r.a.createElement(p.a.Ellipsis,{href:"".concat(s).concat(t-(c+1),"/"),title:"Trang ".concat(t-(c+1)),alt:"Trang ".concat(t-(c+1))}),r.a.createElement(p.a.Item,{href:"".concat(s).concat(e+1,"/"),title:"Trang ".concat(e+1),alt:"Trang ".concat(e+1)},e+1))}),t<a?r.a.createElement(p.a.Next,{href:"".concat(s).concat(t+1,"/"),title:"Trang sau",alt:"Trang sau"},r.a.createElement("i",{className:"fas fa-angle-right"})):r.a.createElement(p.a.Next,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-right"})),a!==t?r.a.createElement(p.a.Last,{href:"".concat(s).concat(a,"/"),title:"Trang cu\u1ed1i",alt:"Trang cu\u1ed1i"},r.a.createElement("i",{className:"fas fa-angle-double-right"})):r.a.createElement(p.a.Last,{disabled:!0},r.a.createElement("i",{className:"fas fa-angle-double-right"})))},E=function(e){var t=e.image,a=e.thumb,n=e.title,c=e.group;return r.a.createElement(d.LightgalleryItem,{group:c,src:t,thumb:a},r.a.createElement("img",{src:a,style:{width:"100%"},loading:"lazy",alt:n,title:n}))};var v=function(e){var t=e.data,a=e.handleShowOrderForm,c=e.handleShowProductReadMore,l=e.handleActivedMenuItem,o=e.handleConvertToUrlFriendly,s=Object(n.useState)(null),u=Object(i.a)(s,2),f=u[0],p=u[1],v=Object(m.g)(),y=v.categoryName,b=v.productName,w=v.productId,O=v.page,T=void 0===O?1:O;function N(e){return e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function j(e,t,a){return N(null!==t&&void 0!==t?e+t/100*e:null!==a&&void 0!==a?e+a/100*e:e)}console.log("Product component",{categoryName:y,productName:b,productId:w,page:T}),Object(n.useEffect)(function(){if(!f){var e={};t.paginateConfig&&(e.itemsPerPage=t.paginateConfig.itemsPerPage,e.maxPageDisplay=t.paginateConfig.maxPageDisplay);var a=t.products;if(y&&(a=a.filter(function(e){return o(e.category)===o(y)}),l(y)),b&&w){var n=t.products.filter(function(e){return o(e.title)===o(b)&&e.id===parseInt(w)});c(null,n[0],!1)}var r=a.slice((parseInt(T)-1)*e.itemsPerPage,parseInt(T)*e.itemsPerPage);e.productList=r,e.totalPages=Math.ceil(a.length/e.itemsPerPage),e.siteInfo=t.siteInfo,p(e)}},[y,T]);var x=function(e,t){return null!==e&&void 0!==e&&e.length>t},C=function(e,t){var a=e.description;if(null!==a&&void 0!==a){var n=a.match(/\d+(?:\.\d+)?/g);n&&n.forEach(function(n){if(n>1e4){var r=j(Number(n),e.priceInfo.percentagePriceIncrease,t);a=a.replace(n,r),e.DescByOtherPriceInPercentage=a}})}return a};return f&&r.a.createElement(r.a.Fragment,null,f.productList.map(function(e){return e.priceToUser=j(e.priceInfo.price,e.priceInfo.percentagePriceIncrease,f.siteInfo.percentagePriceIncreaseAppliesToAllProducts),e.productFirstThumbnailUrl=""+"/assets/images/product/thumbnail/".concat(e.images[0]),r.a.createElement("section",{key:e.id},r.a.createElement("header",null,r.a.createElement("h1",{className:"home-product-title",onClick:function(t){c(t,e)}},e.title)),r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h2",null,"Gi\xe1: ",r.a.createElement("span",{className:"price"},e.priceToUser),r.a.createElement("input",{type:"hidden",id:"price",value:N(e.priceInfo.price)}),r.a.createElement("input",{type:"hidden",id:"percentagePriceIncrease",value:e.priceInfo.percentagePriceIncrease}),r.a.createElement("input",{type:"hidden",id:"percentagePriceIncreaseAppliesToAllProducts",value:f.siteInfo.percentagePriceIncreaseAppliesToAllProducts})),r.a.createElement("h3",null,r.a.createElement("i",null,"M\xe3: ",r.a.createElement("strong",null,e.id)),r.a.createElement("br",null),r.a.createElement("i",null,"Nh\xf3m: ",r.a.createElement("a",{href:""+"/".concat(o(e.category),"/1/")},e.category)),r.a.createElement("br",null),r.a.createElement("br",null)),e.description&&r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-quote-left fa-2x fa-pull-left"}),r.a.createElement("p",{className:"excerpt",onClick:function(t){return c(t,e)}},function(e,t,a,n){var r=C(e,n);if(x(r,t)){var c=(r=r.substring(0,t)).lastIndexOf(" ");r=r.substr(0,c)+a}return Object(h.a)(r)}(e,100," ...",f.siteInfo.percentagePriceIncreaseAppliesToAllProducts),x(e.description,100)&&r.a.createElement("i",{className:"read-more"},"Xem th\xeam"))),r.a.createElement("h2",{className:"h2buy"},r.a.createElement("a",{href:"/#",className:"buy",onClick:function(t){return a(t,e)}},f.siteInfo.buyBtnText))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"gallery"},r.a.createElement(d.LightgalleryProvider,null,e.images.map(function(t,a){return r.a.createElement(E,{key:a,image:""+"/assets/images/product/".concat(t),thumb:""+"/assets/images/product/thumbnail/".concat(t),title:e.title,group:e.id.toString()})})))))))}),r.a.createElement("div",{className:"pagination-box1"},r.a.createElement(g,{page:parseInt(T),pages:f.totalPages,maxPageDisplay:f.maxPageDisplay,category:y,handleConvertToUrlFriendly:o})),r.a.createElement("section",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"pagination-box2"},r.a.createElement(g,{page:parseInt(T),pages:f.totalPages,maxPageDisplay:f.maxPageDisplay,category:y,handleConvertToUrlFriendly:o})))))},y=a(52),b=a(75);var w=function(e){var t=e.categoryList,a=e.handleClose,n=e.isShow,c=e.activedItem,l=e.handleConvertToUrlFriendly;return t&&r.a.createElement(y.a,{show:n,onHide:a},r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,null,"NH\xd3M S\u1ea2N PH\u1ea8M")),r.a.createElement(y.a.Body,null,r.a.createElement(b.a,{className:"flex-column"},t.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(b.a.Link,{href:""+"/".concat(l(e.name),"/1/"),className:l(c)===l(e.name)?"actived":""},r.a.createElement("i",{className:"fas fa-angle-right"})," ",e.name," (",e.count,")"))}))))},O=a(73),T=a(25),N=a.n(T),j=a(49),x=a(21),C=a(13),S=a(63),I=a(34);a(55);var P=function(){return r.a.createElement("img",{id:"imgloading",src:"/assets/images/loading.gif",title:"loading",alt:"loading"})};var F=function(e){var t=e.siteInfo,a=e.handleClose,c=e.isShow,l=e.product,o=e.mailConfig,s=Object(n.useState)(!1),m=Object(i.a)(s,2),d=m[0],h=m[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),g=p[0],E=p[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),b=y[0],w=y[1],O=Object(n.useState)(""),T=Object(i.a)(O,2),N=T[0],F=T[1],L=Object(n.useState)(function(){return Date.now()}),k=Object(i.a)(L,2),D=k[0],A=k[1],U=Object(n.useState)(!1),B=Object(i.a)(U,2),M=B[0],G=B[1],H=Object(n.useState)(!1),_=Object(i.a)(H,2),z=_[0],q=_[1],R=Object(n.useState)(!1),V=Object(i.a)(R,2),K=V[0],X=V[1];return Object(n.useEffect)(function(){q(!1),h(!1)},[c]),t&&l&&o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{size:"lg",show:c,onHide:a,backdrop:"static",keyboard:!1},r.a.createElement(x.a,{noValidate:!0,validated:d,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault();var t={mailType:"Order",productTitle:l.title,productId:l.id,priceToUser:l.priceToUser,name:g,email:b,content:N,orderId:D,productFirstThumbnailUrl:l.productFirstThumbnailUrl,mailConfig:{toEmailAddress:o.toEmailAddress,cc:o.cc,bcc:o.bcc}};G(!0),u()({url:o.mailServiceUrl,method:"post",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"},data:t}).then(function(e){G(!1),e.data.result&&"error"===e.data.result?(console.log(e),X(!0)):(A(Date.now()),q(!0),E(""),w(""),F("")),h(!1)}).catch(function(e){console.log(e)})}h(!0)}.bind(this)},r.a.createElement(C.a.Header,{closeButton:!0},r.a.createElement(C.a.Title,null,'\u0110\u1eb7t mua "',l.title," (",l.id,')"'),M&&r.a.createElement(P,null),z&&r.a.createElement("p",{id:"ploading"},r.a.createElement("span",{role:"img","aria-label":"success"},"\u2714")," \u0110\xe3 g\u1eedi."),K&&r.a.createElement("p",{id:"ploading-error"},r.a.createElement("span",{role:"img","aria-label":"error"},"\u274c")," L\u1ed7i.")),r.a.createElement(C.a.Body,null,r.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(S.a,null,r.a.createElement(I.a,{xs:6,md:6},r.a.createElement(x.a.Control,{type:"text",placeholder:"T\xean",required:!0,value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(I.a,{xs:6,md:6},r.a.createElement(x.a.Control,{type:"email",placeholder:"Email",required:!0,value:b,onChange:function(e){return w(e.target.value)}})))),r.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a.Control,{as:"textarea",rows:6,placeholder:"Th\xf4ng tin li\xean h\u1ec7",required:!0,value:N,onChange:function(e){return F(e.target.value)}}),r.a.createElement(x.a.Control,{type:"hidden",value:D}))),r.a.createElement(C.a.Footer,null,r.a.createElement(j.a,{variant:"secondary",onClick:a},"\u0110\xf3ng"),r.a.createElement(j.a,{variant:"primary",type:"submit"},"G\u1eedi")))))},L=a(28);var k=function(e){var t=e.handleClose,a=e.isShow,c=e.pagesTab,l=e.mailConfig,o=Object(n.useState)(!1),s=Object(i.a)(o,2),m=s[0],d=s[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),g=p[0],E=p[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),b=y[0],w=y[1],O=Object(n.useState)(""),T=Object(i.a)(O,2),N=T[0],P=T[1],F=Object(n.useState)(!1),k=Object(i.a)(F,2),D=k[0],A=k[1],U=Object(n.useState)(!1),B=Object(i.a)(U,2),M=B[0],G=B[1],H=Object(n.useState)(!1),_=Object(i.a)(H,2),z=_[0],q=_[1];return Object(n.useEffect)(function(){G(!1),d(!1)},[a]),c&&r.a.createElement(C.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,className:"pagesTab",scrollable:!0},r.a.createElement(C.a.Header,{closeButton:!0},r.a.createElement(C.a.Title,null,"Th\xf4ng tin")),r.a.createElement(C.a.Body,null,r.a.createElement(L.a,{alwaysOpen:!0},c.aboutUs&&r.a.createElement(L.a.Item,{eventKey:"0"},r.a.createElement(L.a.Header,null,c.aboutUs.title),r.a.createElement(L.a.Body,null,Object(h.a)(c.aboutUs.content))),c.servicesAndOthers&&r.a.createElement(L.a.Item,{eventKey:"1"},r.a.createElement(L.a.Header,null,c.servicesAndOthers.title),r.a.createElement(L.a.Body,null,Object(h.a)(c.servicesAndOthers.content))),c.contact&&r.a.createElement(L.a.Item,{eventKey:"2"},r.a.createElement(L.a.Header,null,c.contact.title),r.a.createElement(L.a.Body,null,Object(h.a)(c.contact.content),r.a.createElement(x.a,{noValidate:!0,validated:m,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault();var t={mailType:"Contact",name:g,email:b,content:N,mailConfig:{toEmailAddress:l.toEmailAddress,cc:l.cc,bcc:l.bcc}};A(!0),u()({url:l.mailServiceUrl,method:"post",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"},data:t}).then(function(e){A(!1),e.data.result&&"error"===e.data.result?q(!0):(G(!0),E(""),w(""),P("")),d(!1)}).catch(function(e){console.log(e)})}d(!0)}.bind(this),style:{marginBottom:"0px"}},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Title,null,"G\u1eedi li\xean h\u1ec7"),D&&r.a.createElement("img",{id:"imgloading",src:"/assets/images/loading.gif",title:"loading",alt:"loading"}),M&&r.a.createElement("p",{id:"ploading"},r.a.createElement("span",{role:"img","aria-label":"success"},"\u2714")," \u0110\xe3 g\u1eedi."),z&&r.a.createElement("p",{id:"ploading-error"},r.a.createElement("span",{role:"img","aria-label":"error"},"\u274c")," L\u1ed7i.")),r.a.createElement(C.a.Body,null,r.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(S.a,null,r.a.createElement(I.a,{xs:6,md:6},r.a.createElement(x.a.Control,{type:"text",placeholder:"T\xean",required:!0,value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(I.a,{xs:6,md:6},r.a.createElement(x.a.Control,{type:"email",placeholder:"Email",required:!0,value:b,onChange:function(e){return w(e.target.value)}})))),r.a.createElement(x.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a.Control,{as:"textarea",rows:6,placeholder:"Th\xf4ng tin li\xean h\u1ec7",required:!0,value:N,onChange:function(e){return P(e.target.value)}}))),r.a.createElement(C.a.Footer,null,r.a.createElement(j.a,{variant:"primary",type:"submit"},"G\u1eedi"))))))))};var D=function(e){var t=e.handleShowCopyright;return console.log("PageNotFound component"),Object(n.useEffect)(function(){return console.log("PageNotFound useEffect"),t(!1),function(e){console.log("PageNotFound unmounts")}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"PageNotFound"},r.a.createElement("h1",null,"Page Not Found"),r.a.createElement("h5",null,"There's nothing here :(")))};var A=function(e){var t=e.handleClose,a=e.isShow,c=e.product,l=e.handleConvertToUrlFriendly;return console.log(c.category),Object(n.useEffect)(function(){},[a]),c&&c.category&&r.a.createElement(C.a,{size:"lg",show:a,onHide:function(){return t(!1)},"aria-labelledby":"example-modal-sizes-title-lg",className:"productReadMore",scrollable:!0},r.a.createElement(C.a.Header,{closeButton:!0},r.a.createElement(C.a.Title,{id:"example-modal-sizes-title-lg"},'M\xf4 t\u1ea3 "',c.title," (",c.id,')"')),r.a.createElement(C.a.Body,null,r.a.createElement("h2",null,"Gi\xe1: ",r.a.createElement("span",{className:"price"},c.priceToUser)),r.a.createElement("h3",null,r.a.createElement("i",null,"M\xe3: ",r.a.createElement("strong",null,c.id)),r.a.createElement("br",null),c.category&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",null,"Nh\xf3m: ",r.a.createElement("a",{href:""+"/".concat(l(c.category),"/1/")},c.category)),r.a.createElement("br",null),r.a.createElement("br",null))),c.DescByOtherPriceInPercentage?r.a.createElement("div",{className:"product-read-more-desc"},Object(h.a)(c.DescByOtherPriceInPercentage)):c.description&&r.a.createElement("div",{className:"product-read-more-desc"},Object(h.a)(c.description)),r.a.createElement("p",{className:"galleryTitle"},r.a.createElement("strong",null,"H\xecnh \u1ea3nh s\u1ea3n ph\u1ea9m")),c.images&&c.images.map(function(e,t){return r.a.createElement("img",{key:t,src:""+"/assets/images/product/".concat(e),style:{width:"100%"},loading:"lazy",alt:c.title,title:c.title})})))};var U=function(e){var t=e.customersTalkList,a=e.handleClose,n=e.isShow;return t&&r.a.createElement(C.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"example-modal-sizes-title-lg",scrollable:!0},r.a.createElement(C.a.Header,{closeButton:!0},r.a.createElement(C.a.Title,{id:"example-modal-sizes-title-lg"},"Kh\xe1ch h\xe0ng \u0111\xe3 mua")),r.a.createElement(C.a.Body,null,t.map(function(e,t){return r.a.createElement("div",{key:t,className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4 col-xs-6"},r.a.createElement("div",{"data-content":"3 \u1ea3nh",className:"customer-photo"},r.a.createElement("img",{src:""+"/assets/images/customers/thumbnail/".concat(e.images[0]),title:e.title,alt:e.title}))),r.a.createElement("div",{className:"col-md-8 col-xs-6"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title customer-title"},e.title),r.a.createElement("div",{className:"customer-content"},Object(h.a)(e.content)),r.a.createElement("p",{className:"card-text customer-author"},r.a.createElement("small",{className:"text-muted"},e.author))))))})))};function B(){B=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(x){o=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,c=Object.create(r.prototype),l=new T(n||[]);return c._invoke=function(e,t,a){var n="suspendedStart";return function(r,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw c;return j()}for(a.method=r,a.arg=c;;){var l=a.delegate;if(l){var o=b(l,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=s(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,l),c}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(x){return{type:"throw",arg:x}}}e.wrap=i;var u={};function m(){}function d(){}function h(){}var f={};o(f,r,function(){return this});var p=Object.getPrototypeOf,g=p&&p(p(N([])));g&&g!==t&&a.call(g,r)&&(f=g);var E=h.prototype=m.prototype=Object.create(f);function v(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function y(e,t){var n;this._invoke=function(r,c){function l(){return new t(function(n,l){!function n(r,c,l,o){var i=s(e[r],e,c);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,l,o)},function(e){n("throw",e,l,o)}):t.resolve(m).then(function(e){u.value=e,l(u)},function(e){return n("throw",e,l,o)})}o(i.arg)}(r,c,n,l)})}return n=n?n.then(l,l):l()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,c=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=h,o(E,"constructor",h),o(h,"constructor",d),d.displayName=o(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,o(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},v(y.prototype),o(y.prototype,c,function(){return this}),e.AsyncIterator=y,e.async=function(t,a,n,r,c){void 0===c&&(c=Promise);var l=new y(i(t,a,n,r),c);return e.isGeneratorFunction(a)?l:l.next().then(function(e){return e.done?e.value:l.next()})},v(E),o(E,l,"Generator"),o(E,r,function(){return this}),o(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],l=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var o=a.call(c,"catchLoc"),i=a.call(c,"finallyLoc");if(o&&i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(o){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var l=c?c.completion:{};return l.type=e,l.arg=t,c?(this.method="next",this.next=c.finallyLoc,u):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:N(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var M=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),d=s[0],h=s[1];function f(){return(f=Object(o.a)(B().mark(function e(){var t,a,n,r;return B().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/data.json");case 2:t=e.sent,a=t.data,document.title=a.siteInfo.pageTitle,c(a),a.products&&(n=Array.from(new Set(a.products.map(function(e){return e.category}))))&&(r=[],n.forEach(function(e){r.push({name:e,count:a.products.filter(function(t){return t.category===e}).length})}),h(r));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){!function(){f.apply(this,arguments)}()},[]),N()(window).on("scroll",function(){N()(this).scrollTop()>100?N()("#toTop").fadeIn():N()("#toTop").fadeOut(),N()(window).scrollTop()+N()(window).height()===N()(document).height()?N()("#toBottom").fadeOut():N()("#toBottom").fadeIn()});var p=Object(n.useState)(!1),g=Object(i.a)(p,2),E=g[0],y=g[1],b=Object(n.useState)({}),T=Object(i.a)(b,2),j=T[0],x=T[1],C=function(e,t){e.preventDefault(),y(!0),x(t)},S=Object(n.useState)(!1),I=Object(i.a)(S,2),P=I[0],L=I[1],M=Object(n.useState)(""),G=Object(i.a)(M,2),H=G[0],_=G[1],z=function(e){_(e)},q=Object(n.useState)(!0),R=Object(i.a)(q,2),V=R[0],K=R[1],X=Object(n.useState)(!1),J=Object(i.a)(X,2),Y=J[0],$=J[1],Q=Object(n.useState)(!1),W=Object(i.a)(Q,2),Z=W[0],ee=W[1],te=Object(n.useState)(!1),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1],ce=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(re(!0),x(t),console.log(t,a),a&&window.history.replaceState){var n="/product/".concat(le(t.title),"-").concat(t.id,"/");window.history.replaceState(null,t.title,n)}},le=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\u0111/g,"d").replace(/\u0110/g,"D").replace(/[^a-z0-9_]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()};return a&&r.a.createElement(O.a,{basename:""},r.a.createElement("div",{id:"wrapper"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",element:r.a.createElement(v,{data:a,handleShowOrderForm:C,handleShowProductReadMore:ce,handleActivedMenuItem:z,handleConvertToUrlFriendly:le}),exact:!0},r.a.createElement(m.a,{path:":page/",element:r.a.createElement(v,{data:a,handleShowOrderForm:C,handleShowProductReadMore:ce,handleActivedMenuItem:z,handleConvertToUrlFriendly:le}),exact:!0})),r.a.createElement(m.a,{path:"/:categoryName/:page/",element:r.a.createElement(v,{data:a,handleShowOrderForm:C,handleShowProductReadMore:ce,handleActivedMenuItem:z,handleConvertToUrlFriendly:le}),exact:!0}),r.a.createElement(m.a,{path:"/product/:productName-:productId/",element:r.a.createElement(v,{data:a,handleShowOrderForm:C,handleShowProductReadMore:ce,handleActivedMenuItem:z,handleConvertToUrlFriendly:le,exact:!0}),exact:!0}),r.a.createElement(m.a,{path:"*",element:r.a.createElement(D,{handleShowCopyright:function(e){K(e)}})})),r.a.createElement(w,{categoryList:d,handleClose:function(){L(!1)},isShow:P,activedItem:H,handleConvertToUrlFriendly:le}),r.a.createElement(F,{siteInfo:a.siteInfo,handleClose:function(){y(!1)},isShow:E,product:j,mailConfig:a.mailConfig}),r.a.createElement(k,{handleClose:function(){$(!1)},isShow:Y,pagesTab:a.pagesTab,mailConfig:a.mailConfig}),r.a.createElement(U,{customersTalkList:a.customersTalk,handleClose:function(){ee(!1)},isShow:Z}),r.a.createElement(A,{handleClose:function(){re(!1)},isShow:ne,product:j,handleConvertToUrlFriendly:le}),r.a.createElement("a",{href:"".concat("","/"),id:"home-ontop",title:"Trang ch\u1ee7",alt:"Trang ch\u1ee7"},r.a.createElement("i",{className:"fa fa-home"})),r.a.createElement("i",{className:"fas fa-bars",id:"menu-ontop",onClick:function(e){return function(e){e.preventDefault(),L(!0)}(e)},title:"Nh\xf3m s\u1ea3n ph\u1ea9m",alt:"Nh\xf3m s\u1ea3n ph\u1ea9m"}),r.a.createElement("i",{className:"far fa-window-restore",id:"pages-ontop",onClick:function(e){return function(e){e.preventDefault(),$(!0)}(e)},title:"V\u1ec1 ch\xfang t\xf4i/ D\u1ecbch v\u1ee5/ Li\xean h\u1ec7/...",alt:"V\u1ec1 ch\xfang t\xf4i/ D\u1ecbch v\u1ee5/ Li\xean h\u1ec7/..."}),r.a.createElement("i",{className:"far fa-comment-dots",id:"customers-talk-ontop",onClick:function(e){return function(e){e.preventDefault(),ee(!0)}(e)},title:"Danh s\xe1ch kh\xe1ch h\xe0ng \u0111\xe3 mua",alt:"Danh s\xe1ch kh\xe1ch h\xe0ng \u0111\xe3 mua"}),r.a.createElement("i",{className:"fa fa-arrow-up",id:"toTop",onClick:function(){return N()("html, body").animate({scrollTop:0},50),!1},title:"L\xean \u0111\u1ea7u trang",alt:"L\xean \u0111\u1ea7u trang"}),r.a.createElement("i",{className:"fa fa-arrow-down",id:"toBottom",title:"Xu\u1ed1ng cu\u1ed1i trang",alt:"Xu\u1ed1ng cu\u1ed1i trang",onClick:function(){return N()("html, body").animate({scrollTop:N()(document).height()},50),!1}})),V&&r.a.createElement("div",{className:"copyright"},"\xa9 All rights reserved."))},G=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,161)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null))),G()},92:function(e,t,a){e.exports=a(156)},99:function(e,t,a){}},[[92,3,2]]]);
//# sourceMappingURL=main.e6f15f9a.chunk.js.map