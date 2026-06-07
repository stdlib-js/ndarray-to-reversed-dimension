"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(p,m){
var d=require('@stdlib/assert-has-own-property/dist'),o=require('@stdlib/assert-is-ndarray-like/dist'),v=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-is-integer/dist').isPrimitive,l=require('@stdlib/ndarray-base-normalize-index/dist'),g=require('@stdlib/ndarray-base-to-reversed-dimension/dist'),q=require('@stdlib/ndarray-ndims/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function w(e,r){var i,a,t;if(!o(e))throw new TypeError(n('2o34f',e));if(i={dim:-1},arguments.length>1){if(!v(r))throw new TypeError(n('2o32V',r));if(d(r,"dim")){if(!f(r.dim))throw new TypeError(n('2o38M',"dim",r.dim));i.dim=r.dim}}if(a=q(e),t=l(i.dim,a-1),t===-1)throw new RangeError(n('2o3KV',a,i.dim));return g(e,t)}m.exports=w
});var b=s();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
