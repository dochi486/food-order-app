(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"CheckOut_form__3Pf4C",control:"CheckOut_control__1Z-Nz",actions:"CheckOut_actions__14kSA",submit:"CheckOut_submit__TyEz9",invalid:"CheckOut_invalid__HxFn5"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__CshwK",total:"Cart_total__262oI",actions:"Cart_actions__1IQlk","button--alt":"Cart_button--alt__2NLOA",button:"Cart_button__1usDT"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__dKvbQ",summary:"CartItem_summary__-YlNg",price:"CartItem_price__36Tgg",amount:"CartItem_amount__1EULi",actions:"CartItem_actions___8Mfe"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__38qgE",icon:"HeaderCartButton_icon__1dMqe",badge:"HeaderCartButton_badge__2hbxt",bump:"HeaderCartButton_bump__11a-S"}},,,,function(e,t,n){e.exports={meal:"MealItem_meal__3Q33a",description:"MealItem_description__3Jypu",price:"MealItem_price__3Gndv"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3NYCw",modal:"Modal_modal__2ctoY","slide-down":"Modal_slide-down__2bWHz"}},function(e,t,n){e.exports={header:"Header_header__1KPoY","main-image":"Header_main-image__BKU5j"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__3bxqH"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3EWO5","meals-appear":"AvailableMeals_meals-appear__t5xum"}},function(e,t,n){e.exports={card:"Card_card__3ij8r","cart-items":"Card_cart-items__yvBNt",total:"Card_total__vUc77",actions:"Card_actions__pM01p","button--alt":"Card_button--alt__6jlgh",button:"Card_button__38RcW"}},function(e,t,n){e.exports={form:"MealItemForm_form__2jbr5"}},function(e,t,n){e.exports={input:"Input_input__1Dh-y"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(18),a=n.n(c),r=(n(31),n(2)),s=n(1),i=n.n(s),o=n.p+"static/media/meals.2971f633.jpg",l=n(15),u=n.n(l),j=n(9),d=n.n(j),m=n(0),b=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),x=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useContext)(O),o=i.items,l=i.items.reduce((function(e,t){return e+t.amount}),0),u="".concat(d.a.button," ").concat(c?d.a.bump:"");return Object(s.useEffect)((function(){if(0!==o.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(m.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(m.jsx)("span",{className:d.a.icon,children:Object(m.jsx)(b,{})}),Object(m.jsx)("span",{children:"\uc7a5\ubc14\uad6c\ub2c8"}),Object(m.jsx)("span",{className:d.a.badge,children:l})]})},p=function(e){return Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsxs)("header",{className:u.a.header,children:[Object(m.jsx)("h1",{children:"\ub9ac\uc561\ud2b8 \uc2dd\ub2f9"}),Object(m.jsx)(x,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:u.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"\uc74c\uc2dd\uc774 \uac00\ub4dd\ucc2c \ud14c\uc774\ube14"})})]})},h=n(19),f=n.n(h),_=function(){return Object(m.jsxs)("section",{className:f.a.summary,children:[Object(m.jsx)("h2",{children:"\ubc30\ub2ec \uac00\ub2a5\ud55c \ub9db\uc788\ub294 \uc694\ub9ac\ub4e4"}),Object(m.jsx)("p",{children:"\ubaa8\ub4e0 \uc74c\uc2dd\uc740 \uc88b\uc740 \uc7ac\ub8cc\uc640 \uc815\uc131\uc744 \ub4e4\uc5ec \ub9cc\ub4ed\ub2c8\ub2e4!"})]})},v=n(6),C=n(12),N=n(20),g=n.n(N),y=n(21),k=n.n(y),I=function(e){return Object(m.jsx)("div",{className:k.a.card,children:e.children})},w=n(13),A=n.n(w),S=n(22),M=n.n(S),E=n(3),H=n(23),R=n.n(H),F=i.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:R.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(E.a)({ref:t},e.input))]})})),B=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)();return Object(m.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(m.jsx)(F,{ref:i,label:"\uc218\ub7c9",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ \ucd94\uac00"}),!c&&Object(m.jsx)("p",{children:"\uc62c\ubc14\ub978 \uc218\ub7c9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})},D=function(e){var t=Object(s.useContext)(O),n="".concat(e.price,"\uc6d0");return Object(m.jsxs)("li",{className:A.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:A.a.description,children:e.description}),Object(m.jsx)("div",{className:A.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(B,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(r.a)(a,2),o=i[0],l=i[1],u=Object(s.useState)(null),j=Object(r.a)(u,2),d=j[0],b=j[1];Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,a,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(null),l(!0),e.prev=2,e.next=5,fetch("https://react-http-45232-default-rtdb.firebaseio.com/meals.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),b(e.t0.message);case 19:l(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var O=Object(m.jsx)("p",{children:"\ubc30\ub2ec \uac00\ub2a5\ud55c \uc74c\uc2dd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."});o&&(O=Object(m.jsx)("p",{children:"\ub85c\ub529 \uc911..."})),d&&(O=Object(m.jsx)("p",{children:d}));var x=n.map((function(e){return Object(m.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:g.a.meals,children:Object(m.jsxs)(I,{children:[o&&O,Object(m.jsx)("ul",{children:x})]})})},z=function(){return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)(_,{}),Object(m.jsx)(T,{})]})},P=n(5),J=n.n(P),K=n(10),Y=n.n(K),q=n(14),L=n.n(q),Q=function(e){return Object(m.jsx)("div",{className:L.a.backdrop,onClick:e.onClose})},U=function(e){return Object(m.jsx)("div",{className:L.a.modal,children:Object(m.jsx)("div",{className:L.a.content,children:e.children})})},V=document.getElementById("overlays"),W=function(e){return Object(m.jsxs)(s.Fragment,{children:[Y.a.createPortal(Object(m.jsx)(Q,{onClose:e.onClose}),V),Y.a.createPortal(Object(m.jsx)(U,{children:e.children}),V)]})},G=n(7),Z=n.n(G),X=function(e){var t="".concat(e.price,"\uc6d0");return Object(m.jsxs)("li",{className:Z.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:Z.a.summary,children:[Object(m.jsx)("span",{className:Z.a.price,children:t}),Object(m.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:Z.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(4),ee=n.n($),te=function(e){return""===e.trim()},ne=function(e){var t=Object(s.useState)({name:!0,address:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u="".concat(ee.a.control," ").concat(c.name?"":ee.a.invalid),j="".concat(ee.a.control," ").concat(c.address?"":ee.a.invalid),d="".concat(ee.a.control," ").concat(c.postalCode?"":ee.a.invalid);return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=i.current.value,c=o.current.value,r=l.current.value,s=!te(n),u=!te(c),j=5===r.trim().length;a({name:s,address:u,postalCode:j}),s&&u&&j&&e.onConfirm({name:n,address:c,postalCode:r})},children:[Object(m.jsxs)("div",{className:u,children:[Object(m.jsx)("label",{htmlFor:"name",children:"\ubc1b\ub294 \ubd84 \uc131\ud568"}),Object(m.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(m.jsx)("p",{children:"\uc815\ud655\ud55c \uc131\ud568\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),Object(m.jsxs)("div",{className:j,children:[Object(m.jsx)("label",{htmlFor:"address",children:"\uc8fc\uc18c"}),Object(m.jsx)("input",{type:"text",id:"address",ref:o}),!c.address&&Object(m.jsx)("p",{children:"\uc815\ud655\ud55c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),Object(m.jsxs)("div",{className:d,children:[Object(m.jsx)("label",{htmlFor:"postal",children:"\uc6b0\ud3b8\ubc88\ud638"}),Object(m.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postalCode&&Object(m.jsx)("p",{children:"5\uc790\ub9ac\uc758 \uc6b0\ud3b8\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),Object(m.jsxs)("div",{className:ee.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"\ucde8\uc18c"}),Object(m.jsx)("button",{className:ee.a.submit,children:"\ud655\uc778"})]})]})},ce=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(!1),o=Object(r.a)(i,2),l=o[0],u=o[1],j=Object(s.useState)(!1),d=Object(r.a)(j,2),b=d[0],x=d[1],p=Object(s.useContext)(O),h="".concat(p.totalAmount,"\uc6d0"),f=p.items.length>0,_=function(e){p.removeItem(e)},N=function(e){p.addItem(Object(E.a)(Object(E.a)({},e),{},{amount:1}))},g=function(){var e=Object(C.a)(Object(v.a)().mark((function e(t){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://react-http-45232-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items})});case 3:u(!1),x(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(m.jsx)("ul",{className:J.a["cart-items"],children:p.items.map((function(e){return Object(m.jsx)(X,{name:e.name,amount:e.amount,price:e.price,onRemove:_.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),k=Object(m.jsxs)("div",{className:J.a.actions,children:[Object(m.jsx)("button",{className:J.a["button--alt"],onClick:e.onClose,children:"\ub2eb\uae30"}),f&&Object(m.jsx)("button",{className:J.a.button,onClick:function(){a(!0)},children:"\uc8fc\ubb38"})]}),I=Object(m.jsxs)(m.Fragment,{children:[" ",y,Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"\ucd1d \ud569\uacc4"}),Object(m.jsx)("span",{children:h})]}),c&&Object(m.jsx)(ne,{onComfirm:g,onCancel:e.onClose}),!c&&k]}),w=Object(m.jsx)("p",{children:"\uc8fc\ubb38\uc744 \uc804\uc1a1 \uc911\uc785\ub2c8\ub2e4..."}),A=Object(m.jsxs)(m.Fragment,{children:[" ",Object(m.jsx)("p",{children:"\uc8fc\ubb38\uc774 \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Object(m.jsx)("div",{className:J.a.actions,children:Object(m.jsx)("button",{className:J.a.button,onClick:e.onClose,children:"\ub2eb\uae30"})})]});return Object(m.jsxs)(W,{onClose:e.onClose,children:[!l&&!b&&I,l&&w,!l&&b&&A]})},ae=n(16),re={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var s=Object(E.a)(Object(E.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[a]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(E.a)(Object(E.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=j}return{items:i,totalAmount:u}}return t.type,re},ie=function(e){var t=Object(s.useReducer)(se,re),n=Object(r.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(m.jsx)(O.Provider,{value:i,children:e.children})};var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(ie,{children:[n&&Object(m.jsx)(ce,{onClose:function(){c(!1)}}),Object(m.jsx)(p,{onShowCart:function(){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(z,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(oe,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.21834cdb.chunk.js.map