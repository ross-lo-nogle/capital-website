webpackJsonp([0x67ef26645b2a,60335399758886],{121:function(e,t){e.exports={data:{site:{siteMetadata:{navbar:{navs:["nav1","nav2","nav3","nav4"],nav1:"investments",nav2:"our approach",nav3:"team",nav4:"contact us",href1:"/investments/",href2:"/approach/",href3:"/team/",href4:"/contact/"},footer:{link1:"INVESTMENTS",link5:"PRIVACY",link2:"OUR APPROACH",link3:"TEAM",link4:"CONTACT US",title1:"LINK",link6:"NOGLE LIMITED",title2:"NOGLE CAPITAL MANAGEMENT",address:"7F, No.105, Songren Rd., Xinyi Dist., Taipei 11073, Taiwan",phone:"+886 2 2345 9399",copyright:"Copyright © 2017 Nogle Limited. All rights reserved."}}}},layoutContext:{}}},210:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(4),i=n(r),l=a(215),s=n(l),c=a(121),u=n(c);t.default=function(e){return i.default.createElement(s.default,o({},e,u.default))},e.exports=t.default},214:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(4),r=n(o);t.default=function(e){var t=e.data;return r.default.createElement("div",{className:"footer"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"site-map"},r.default.createElement("h4",{className:"title"},t.site.siteMetadata.footer.title1),r.default.createElement("ul",{className:"list left-list"},t.site.siteMetadata.navbar.navs.map(function(e,a){var n=t.site.siteMetadata.navbar;return r.default.createElement("li",{className:"item",key:a},r.default.createElement("a",{className:"link",href:""+n["href"+a]},n[e]))})),r.default.createElement("ul",{className:"list right-list"},r.default.createElement("li",{className:"item"},r.default.createElement("a",{className:"link"},t.site.siteMetadata.footer.link5)),r.default.createElement("li",{className:"item"},r.default.createElement("a",{className:"link",href:"http://www.nogle.com/",target:"_blank"},t.site.siteMetadata.footer.link6)))),r.default.createElement("div",{className:"contact-info"},r.default.createElement("h4",{className:"title"},t.site.siteMetadata.footer.title2),r.default.createElement("ul",{className:"list"},r.default.createElement("li",{className:"item"},t.site.siteMetadata.footer.address),r.default.createElement("li",{className:"item"},t.site.siteMetadata.footer.phone))),r.default.createElement("span",{className:"copyright"},t.site.siteMetadata.footer.copyright)))},e.exports=t.default},215:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var l=a(4),s=n(l);a(295);var c=a(214),u=n(c),f=function(e){function t(){return o(this,t),r(this,e.call(this))}return i(t,e),t.prototype.componentDidMount=function(){var e=location,t=e.pathname;return console.log("pathname",t),t.indexOf("contact")!==-1?(this.setFooterBottom(),window.addEventListener("resize",this.setFooterBottom)):"/"!==t?(this.setSectionMarginTop(),window.addEventListener("resize",this.setSectionMarginTop)):void 0},t.prototype.componentWillUnmount=function(){var e=location,t=e.pathname;return t.indexOf("contact")!==-1?window.removeEventListener("resize",this.setFooterBottom):"/"!==t?window.removeEventListener("resize",this.setSectionMarginTop):void 0},t.prototype.setSectionMarginTop=function(){var e=document.getElementsByClassName("navbar")[0].offsetHeight,t=document.getElementsByClassName("jumbotron")[0].offsetHeight+e;document.getElementsByClassName("section")[0].style.marginTop=t+"px"},t.prototype.setFooterBottom=function(){var e=document.getElementsByTagName("html")[0].offsetHeight,t=window.innerHeight,a=document.getElementsByClassName("footer")[0];console.log("windowH",t,"bottom",e),t>e?(console.log("footer",a),a.style.top=t-e+"px"):(console.log("else footer",a),a.style.top=0)},t.prototype.render=function(){var e=this.props,t=e.children,a=e.data;return s.default.createElement("div",null,t(),s.default.createElement(u.default,{data:a}))},t}(s.default.Component);t.default=f;t.query="** extracted graphql fragment **"},295:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-aeb260ee7638a0f345ad.js.map