webpackJsonp([4],{144:function(t,e,i){var n=i(0)(null,i(426),null,null);t.exports=n.exports},145:function(t,e,i){var n=i(0)(null,i(458),null,null);t.exports=n.exports},146:function(t,e,i){i(386);var n=i(0)(i(248),i(476),null,null);t.exports=n.exports},147:function(t,e,i){var n=i(0)(null,i(441),null,null);t.exports=n.exports},195:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(28),o=i.n(s),r=i(22),a=i(146),u=i.n(a),c=i(144),l=i.n(c),h=i(145),d=i.n(h),f=i(147),v=i.n(f),p=[{path:"/course",component:o.a},{path:"/recommend",component:u.a},{path:"/boutique",component:l.a},{path:"/lecture",component:d.a},{path:"/talk",component:v.a},{path:"/",redirect:"/recommend"}];n.a.use(r.a);var _=new r.a({routes:p});new n.a({router:_,render:function(t){return t(o.a)}}).$mount("#app")},248:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(48),s=i.n(n),o=i(47),r=i.n(o),a=[{url:"http://baidu.com",img:"https://static.vux.li/demo/1.jpg",title:"送你一朵fua"},{url:"http://lihua1108.com",img:"https://static.vux.li/demo/2.jpg",title:"送你一辆车"},{url:"http://86ym.cn",img:"https://static.vux.li/demo/1.jpg",title:"送你一次旅行",fallbackImg:"https://static.vux.li/demo/3.jpg"}];a.map(function(t,e){return{url:"http://m.baidu.com",img:t.img,fallbackImg:t.fallbackImg,title:"(可点击)"+t.title}});e.default={components:{Swiper:s.a,SwiperItem:r.a},ready:function(){},methods:{onSwiperItemIndexChange:function(t){console.log("demo item change",t)}},data:function(){return{list:a}}}},28:function(t,e,i){i(90);var n=i(0)(i(71),i(93),"data-v-27cd6014",null);t.exports=n.exports},34:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}}},35:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),s=i.n(n),o=i(36),r=i(16);e.default={name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){i.i(r.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(s()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new o.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}},36:function(t,e,i){"use strict";var n=i(37),s=i.n(n),o=i(38),r=i.n(o),a=i(20),u=i.n(a),c=function(t){return Array.prototype.slice.call(t)},l=function(){function t(e){if(s()(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=u()(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return r()(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth(),t._setOffset(),t._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.realcount;t++)this._position.push(t)}},{key:"_moveposition",value:function(t){var e="this;if(t">0){var i=e._position.splice(0,1);e._position.push(i[0])}else if(t<0){var n="e._position.pop();e._position.unshift(n)}}},{key:"_setOffset",value:function(){var" t="this,e=t._position.indexOf(t._current);t._offset=[],c(t.$items).forEach(function(i,n){t._offset.push((n-e)*t._distance)})}},{key:"_setTransition",value:function(t){t=t||this._options.duration||"none";var" e="none" =="=t?"none":t+"ms";c(this.$items).forEach(function(t,i){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransform",value:function(t){var" s="e._offset[n]+t,o="translate3d("+s+"px," 0,="" 0)";"vertical"="==e._options.direction&&(o="translate3d(0," "+s+"px,="" 0)"),i.style.webkittransform="o,i.style.transform=o})}},{key:"_bind",value:function(){var">Math.abs(s);"horizontal"===e._options.direction&&r&&(o=n),t._options.loop||t._current!==t.count-1&&0!==t._current||(o/=3),(e._options.minMovingDistance&&Math.abs(o)>=e._options.minMovingDistance||!e._options.minMovingDistance)&&r&&e._setTransform(o),r&&i.preventDefault()},e.touchendHandler=function(t){e._end.x=t.changedTouches[0].pageX,e._end.y=t.changedTouches[0].pageY;var i=e._end.y-e._start.y;"horizontal"===e._options.direction&&(i=e._end.x-e._start.x),0!==(i=e.getDistance(i))&&e._options.minMovingDistance&&Math.abs(i)<e._options.minmovingdistance||(i>e._options.threshold?e.move(-1):i<-e._options.threshold?e.move(1):e.move(0),e._looprender())},e.transitionendhandler=function(t){e._activate(e._current);var i="e._eventHandlers.swiped;i&&i.apply(e,[e._prev%e.count,e._current%e.count]),e._auto(),e._loopRender(),t.preventDefault()},e.$container.addEventListener("touchstart",e.touchstartHandler,!1),e.$container.addEventListener("touchmove",e.touchmoveHandler,!1),e.$container.addEventListener("touchend",e.touchendHandler,!1),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var" t="this;t._loop()&&(0===t._offset[t._offset.length-1]?(t.$container.appendChild(t.$items[0]),t._loopEvent(1)):0===t._offset[0]&&(t.$container.insertBefore(t.$items[t.$items.length-1],t.$container.firstChild),t._loopEvent(-1)))}},{key:"_loopEvent",value:function(t){var" e="this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._setOffset(),e._setTransform()}},{key:"getDistance",value:function(t){return" this._loop()?t:t="">0&&0===this._current?0:t<0&&this._current===this.realcount-1?0:t}},{key:"_moveindex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realcount,this._current+=t,this._current%=this.realcount)}},{key:"_activate",value:function(t){var e="this._options.activeClass;Array.prototype.forEach.call(this.$items,function(i,n){i.classList.remove(e),t===Number(i.dataset.index)&&i.classList.add(e)})}},{key:"go",value:function(t){var" e.stop(),t="t||0,t+=this.realCount,t%=this.realCount,t=this._position.indexOf(t)-this._position.indexOf(this._current),e._moveIndex(t),e._setOffset(),e._setTransition(),e._setTransform(),e._auto(),this}},{key:"next",value:function(){return" this.move(1),this}},{key:"move",value:function(t){return="" this.go(this._current+t),this}},{key:"on",value:function(t,e){return="" this._eventhandlers[t]&&console.error("[swiper]="" event="" "+t+"="" is="" already="" register"),"function"!="typeof" e&&console.error("[swiper]="" parameter="" callback="" must="" be="" a="" function"),this._eventhandlers[t]="e,this}},{key:"_itemDestoy",value:function(){var" t="this;this.$items.length&&c(this.$items).forEach(function(e){e.removeEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var" strict";e.__esmodule="!0,e.default=function(t,e){if(!(t" instanceof="" e))throw="" new="" typeerror("cannot="" call="" class="" as="" function")}},38:function(t,e,i){"use="" n="i(54),s=function(t){return" t&&t.__esmodule?t:{default:t}}(n);e.default="function(){function" t(t,e){for(var="" i="0;i<e.length;i++){var" n&&(n.writable="!0),(0,s.default)(t,n.key,n)}}return" function(e,i,n){return="" i&&t(e.prototype,i),n&&t(e,n),e}}()},386:function(t,e){},42:function(t,e){},426:function(t,e){t.exports="{render:function(){var" t._m(0,!1,!1)},staticrenderfns:[function(){var="" i("div",[i("h1",[t._v("精品课程")])])}]}},44:function(t,e){t.exports="{render:function(){var" i("div",{staticclass:"vux-slider"},[i("div",{staticclass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v("="" "),t._l(t.list,function(e,n){return="" i("div",{staticclass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){t.clicklistitem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticclass:"vux-img",style:{backgroundimage:t.buildbackgroundurl(e)}}),t._v("="" "),t.showdescmask?i("p",{staticclass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v("="" "),t._l(t.listtwoloopitem,function(e,n){return="" t.listtwoloopitem.length="">0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]}},441:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("老田说医美")])])}]}},45:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},staticRenderFns:[]}},458:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("医美大讲堂")])])}]}},47:function(t,e,i){var n=i(0)(i(34),i(45),null,null);t.exports=n.exports},476:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"banner"},[i("swiper",{attrs:{"aspect-ratio":.375,loop:!0}},t._l(t.list,function(t,e){return i("swiper-item",{key:e,staticClass:"swiper-demo-img"},[i("a",{attrs:{href:t.url}},[i("img",{attrs:{src:t.img}})])])}))],1)])},staticRenderFns:[]}},48:function(t,e,i){i(42);var n=i(0)(i(35),i(44),null,null);t.exports=n.exports},71:function(t,e,i){"use strict";function n(t){for(var e=[],i=0;i</0&&this._current===this.realcount-1?0:t}},{key:"_moveindex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realcount,this._current+=t,this._current%=this.realcount)}},{key:"_activate",value:function(t){var></-e._options.threshold?e.move(1):e.move(0),e._looprender())},e.transitionendhandler=function(t){e._activate(e._current);var></e._options.minmovingdistance||(i></0){var></this.realcount;t++)this._position.push(t)}},{key:"_moveposition",value:function(t){var>