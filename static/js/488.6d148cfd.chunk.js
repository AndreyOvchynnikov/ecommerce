"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[488],{6010:function(e,r,a){var s=a(6156),i=a(1087),c=a(184);r.Z=function(e){var r=e.property,a=e.productDetails,t=(0,s.F)().addTrendingProduct;return(0,c.jsx)("div",{className:"category-product ".concat(r),children:(0,c.jsxs)(i.rU,{to:"/products/".concat(a.id),onClick:function(){return t(a)},children:[(0,c.jsxs)("div",{className:"category-product-header",children:[(0,c.jsx)("div",{className:"category-product-img-wrapper ".concat("wide"===r?"wide-img":"normal-img"),children:(0,c.jsx)("img",{src:a.img,alt:"a product",className:"category-product-img"})}),"wide"===r&&(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"wide-right-container",children:[(0,c.jsx)("div",{className:"wide-title",children:a.wideCardTitle}),(0,c.jsx)("button",{className:"actionBtn",children:"VIEW MORE"})]})})]}),"wide"!==r&&(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"category-product-details",children:[(0,c.jsx)("div",{className:"category-product-title",children:(0,c.jsx)("span",{children:a.description})}),(0,c.jsxs)("div",{className:"category-product-price",children:[a.price,"$"]})]})})]})})}},3444:function(e,r,a){a.d(r,{Z:function(){return N}});var s=a(9439),i=a(1087),c=a(2791),t=a(6156),n="Carousel_carousel__ePVOM",d="Carousel_carouselVp__Wxmhq",l="Carousel_link__hKONT",o="Carousel_cardsWrap__sUrmJ",m="Carousel_carouselCard__Dum70",u="Carousel_cardImg__B4drw",h="Carousel_cardPrice__x-Mzy",x="Carousel_cardTitle__Z9yxf",j="Carousel_navRight__0QAKa",f="Carousel_navLeft__l4EYV",g=a(184),p=function(e){var r=e.carouselProducts,a=(0,c.useRef)(),p=(0,c.useRef)(),N=(0,c.useRef)(),v=(0,c.useState)(0),_=(0,s.Z)(v,2),b=_[0],w=_[1],C=(0,t.F)().addTrendingProduct,y=function(e){var r=parseInt(getComputedStyle(a.current).width.replace("px","")),s=parseInt(getComputedStyle(p.current).width.replace("px","")),i=parseInt(getComputedStyle(N.current).width.replace("px",""));"rightArrow"===e&&-b<s-i?w(b-r-15):"leftArrow"===e&&b<0&&w(b+r+15)};return(0,g.jsxs)("div",{className:n,children:[(0,g.jsx)("div",{onClick:function(){y("leftArrow")},className:f,children:(0,g.jsx)("span",{children:"\u2190"})}),(0,g.jsx)("div",{onClick:function(){y("rightArrow")},className:j,children:(0,g.jsx)("span",{children:"\u2192"})}),(0,g.jsx)("div",{className:d,ref:N,children:(0,g.jsx)("div",{ref:p,className:o,style:{transform:"translateX(".concat(b,"px)")},children:r.map((function(e){return(0,g.jsx)(i.rU,{to:"/products/".concat(e.id),className:l,onClick:function(){return C(e)},children:(0,g.jsxs)("div",{ref:a,className:m,children:[(0,g.jsx)("img",{src:e.img,alt:e.name,className:u}),(0,g.jsx)("div",{className:x,children:e.description}),(0,g.jsxs)("div",{className:h,children:[e.price,"$"]})]})},e.id)}))})})]})},N=function(e){var r=e.title,a=e.products;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("section",{className:"trending",children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)("h2",{style:{marginBottom:"20px"},children:r}),(0,g.jsx)(p,{carouselProducts:a})]})})})}},3391:function(e,r,a){a.r(r),a.d(r,{default:function(){return _}});var s=a(2791),i=a(1087),c=a.p+"static/media/home-img-1.3de7da0f1e4634169c62.jpg",t=a.p+"static/media/home-img-2.4daa711cfda65062efd0.jpg",n=a.p+"static/media/home-img-3.60734311499ba1dbbc41.jpg",d=a.p+"static/media/home-img-4.672d1d0d7656e2a778f6.jpg",l=a(184),o=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"home-header",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{className:"visually-hidden",children:"The main title should be here..."}),(0,l.jsxs)("div",{className:"home-header-container",children:[(0,l.jsx)("div",{className:"featured header-one",children:(0,l.jsxs)(i.rU,{to:"/categories/furniture",children:[(0,l.jsx)("div",{className:"header-img-container",children:(0,l.jsx)("h2",{className:"featured-title",children:"Life Comfortably"})}),(0,l.jsx)("img",{className:"header-img",src:c,alt:"featured our best seller"})]})}),(0,l.jsx)("div",{className:"featured header-two",children:(0,l.jsxs)(i.rU,{to:"/categories/skin-care",children:[(0,l.jsx)("div",{className:"header-img-container",children:(0,l.jsx)("h2",{className:"featured-title",children:"HW Skincare"})}),(0,l.jsx)("img",{className:"header-img headerimg-two",src:t,alt:"featured our best seller"})]})}),(0,l.jsx)("div",{className:"featured header-four",children:(0,l.jsxs)(i.rU,{to:"/categories/kitchen",children:[(0,l.jsx)("div",{className:"header-img-container",children:(0,l.jsx)("h2",{className:"featured-title",children:"Kitchen & Dining"})}),(0,l.jsx)("img",{className:"header-img",src:n,alt:"featured our best seller"})]})}),(0,l.jsx)("div",{className:"featured header-four-low",children:(0,l.jsxs)(i.rU,{to:"/categories/electronic",children:[(0,l.jsx)("div",{className:"header-img-container",children:(0,l.jsx)("h2",{className:"featured-title",children:"Home Electronics"})}),(0,l.jsx)("img",{className:"header-img",src:d,alt:"featured our best seller"})]})})]})]})})})},m=a(6010),u=function(e){var r=e.products;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"category-products",children:r.map((function(e){return(0,l.jsx)(m.Z,{property:e.isWide?"wide":"normal",productDetails:e},e.id)}))})})})},h="ActionButton_actionBtn__k77Hq",x=function(e){var r=e.text,a=e.link;return(0,l.jsx)(i.rU,{to:"".concat(a),className:h,children:r})},j=a.p+"static/media/banner1.021adea5caa612e7dea0.jpg",f=function(){return(0,l.jsx)("section",{id:"banner",className:"featured-banner-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"featured-banner-container",children:[(0,l.jsxs)("div",{className:"featured-left",children:[(0,l.jsx)("h2",{className:"banner-title",children:"Creative harmonious living"}),(0,l.jsx)("p",{className:"featured-desc",children:"Products are all made to standard sizes so that you can mix and match them freely."}),(0,l.jsx)(x,{text:"SOPE NOW",link:"/categories/furniture"})]}),(0,l.jsx)("div",{className:"featured-right",children:(0,l.jsx)("img",{src:j,alt:"",className:"banner-img"})})]})})})},g=a(3444),p=a.p+"static/media/banner2.03a2ebf8d998e53d1019.jpg",N=function(){return(0,l.jsx)("section",{id:"banner",className:"featured-banner-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"featured-banner-container",children:[(0,l.jsx)("div",{className:"featured-right",children:(0,l.jsx)("img",{src:p,alt:"",className:"banner-img"})}),(0,l.jsxs)("div",{className:"featured-left",children:[(0,l.jsx)("h2",{className:"banner-title",children:"Comfortable & Elegante Living"}),(0,l.jsx)("p",{className:"featured-desc",children:"Products are all made to standard sizes so that you can mix and match them freely."}),(0,l.jsx)(x,{text:"SOPE NOW",link:"/categories/All"})]})]})})})},v=a(3339),_=function(){var e=v.R.filter((function(e){return e.isProud})),r=v.R.filter((function(e){return e.isTrending}));return(0,s.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("h2",{className:"section-title",children:"Products we are proud of"})}),(0,l.jsx)(u,{products:e}),(0,l.jsx)(f,{}),(0,l.jsx)(g.Z,{title:"Trending Now",products:r}),(0,l.jsx)(N,{})]})}}}]);
//# sourceMappingURL=488.6d148cfd.chunk.js.map