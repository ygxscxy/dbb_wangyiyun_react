"use strict";(self.webpackChunkreact18_ts_music=self.webpackChunkreact18_ts_music||[]).push([[319],{319:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(152),s=n(791);console.log({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"http://codercba.prod:9002"});var u=n(683),i=n(671),c=n(144),o=n(44),a=new(function(){function e(t){var n,r,s,u;(0,i.Z)(this,e),this.instance=void 0,this.instance=o.ZP.create(t),this.instance.interceptors.request.use((function(e){return e}),(function(e){return e})),this.instance.interceptors.response.use((function(e){return e.data}),(function(e){return e})),this.instance.interceptors.request.use(null===(n=t.interceptors)||void 0===n?void 0:n.requestSuccessFn,null===(r=t.interceptors)||void 0===r?void 0:r.requestFailureFn),this.instance.interceptors.response.use(null===(s=t.interceptors)||void 0===s?void 0:s.responseSuccessFn,null===(u=t.interceptors)||void 0===u?void 0:u.responseFailureFn)}return(0,c.Z)(e,[{key:"request",value:function(e){var t,n=this;return null!==(t=e.interceptors)&&void 0!==t&&t.requestSuccessFn&&(e=e.interceptors.requestSuccessFn(e)),new Promise((function(t,r){n.instance.request(e).then((function(n){var r;null!==(r=e.interceptors)&&void 0!==r&&r.responseSuccessFn&&(n=e.interceptors.responseSuccessFn(n)),t(n)})).catch((function(e){r(e)}))}))}},{key:"get",value:function(e){return this.request((0,u.Z)((0,u.Z)({},e),{},{method:"GET"}))}},{key:"post",value:function(e){return this.request((0,u.Z)((0,u.Z)({},e),{},{method:"POST"}))}},{key:"delete",value:function(e){return this.request((0,u.Z)((0,u.Z)({},e),{},{method:"DELETE"}))}},{key:"patch",value:function(e){return this.request((0,u.Z)((0,u.Z)({},e),{},{method:"PATCH"}))}}]),e}())({baseURL:"http://codercba.com:9002",timeout:1e4,interceptors:{requestSuccessFn:function(e){return e}}}),d=n(184),l=function(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),n=t[0],u=t[1];return(0,s.useEffect)((function(){a.get({url:"/banner"}).then((function(e){u(e.banners)}))}),[]),(0,d.jsx)("div",{children:n.map((function(e,t){return(0,d.jsx)("div",{children:e.imageUrl},t)}))})},p=(0,s.memo)(l)}}]);
//# sourceMappingURL=319.6b1aae7c.chunk.js.map