(this.webpackJsonptogether=this.webpackJsonptogether||[]).push([[9],{92:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(1)),a=r(15),i=r(41);function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v="twitch-player-",O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(y,e);var t,r,n,c=f(y);function y(){var e;l(this,y);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(d(e=c.call.apply(c,[this].concat(r))),"callPlayer",a.callPlayer),b(d(e),"playerID",e.props.config.playerId||"".concat(v).concat((0,a.randomString)())),b(d(e),"mute",(function(){e.callPlayer("setMuted",!0)})),b(d(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),e}return t=y,(r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var r=this,n=this.props,o=n.playsinline,c=n.onError,l=n.config,p=n.controls,s=i.MATCH_URL_TWITCH_CHANNEL.test(e),f=s?e.match(i.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(i.MATCH_URL_TWITCH_VIDEO)[1];t?s?this.player.setChannel(f):this.player.setVideo("v"+f):(0,a.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((function(t){r.player=new t.Player(r.playerID,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({video:s?"":f,channel:s?f:"",height:"100%",width:"100%",playsinline:o,autoplay:r.props.playing,muted:r.props.muted,controls:!!s||p,time:(0,a.parseStartTime)(e)},l.options));var n=t.Player,i=n.READY,c=n.PLAYING,y=n.PAUSE,d=n.ENDED,h=n.ONLINE,v=n.OFFLINE;r.player.addEventListener(i,r.props.onReady),r.player.addEventListener(c,r.props.onPlay),r.player.addEventListener(y,r.props.onPause),r.player.addEventListener(d,r.props.onEnded),r.player.addEventListener(h,r.props.onLoaded),r.player.addEventListener(v,r.props.onLoaded)}),c)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return o.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}])&&p(t.prototype,r),n&&p(t,n),y}(o.Component);t.default=O,b(O,"displayName","Twitch"),b(O,"canPlay",i.canPlay.twitch),b(O,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.bdb2f03f.chunk.js.map