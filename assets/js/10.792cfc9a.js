(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{392:function(t,e,s){},433:function(t,e,s){"use strict";s(392)},449:function(t,e,s){"use strict";s.r(e);var i=s(42),a=s(90),n={name:"SupeScrollText",props:{autoPlay:{type:Boolean,default:!1},hoverAction:{type:String,default:"play"},active:{type:Boolean,default:!1}},data:function(){return{isPlaying:!1,isTmpTextVisible:!1,translateX:0,isMouseHover:!1}},computed:{scrollStyle:function(){return{transform:"translateX(".concat(this.translateX,"px)")}},contentClass:function(){return!this.isTmpTextVisible||this.isPlaying||this.autoPlay?"":"tooltip"}},watch:{active:function(){this.active||"play"===this.hoverAction&&this.isMouseHover?this.play():this.stop()}},methods:{checkTmpVisible:function(){var t=this;return Object(a.a)(Object(i.a)().mark((function e(){var s,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(s=t.$refs.scroll.offsetWidth,a=t.$refs.content.scrollWidth,t.isTmpTextVisible=s<a,!t.autoPlay){e.next=9;break}return e.next=8,t.$nextTick();case 8:t.play(!0);case 9:case"end":return e.stop()}}),e)})))()},play:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isTmpTextVisible&&(e&&this.isPlaying&&this.stop(),!this.isPlaying)){this.isPlaying=!0,this.$emit("update:active",!0);var s=this.$refs.content.scrollWidth;this.playInter=setInterval((function(){t.translateX-=1,Math.abs(t.translateX)>=s/2&&(t.translateX=0)}),20)}},stop:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isPlaying=!1,this.$emit("update:active",!1),t&&(this.translateX=0),clearInterval(this.playInter)},pause:function(){this.stop(!1)},resume:function(){this.play()},mouseEnterHandler:function(){this.isMouseHover=!0,"pause"===this.hoverAction&&this.pause(),"play"===this.hoverAction&&this.play()},mouseLeaveHandler:function(){this.isMouseHover=!1,"pause"===this.hoverAction&&(this.autoPlay||this.active)&&this.resume(),"play"!==this.hoverAction||this.autoPlay||!1!==this.active||this.stop()}},mounted:function(){this.checkTmpVisible()},beforeDestroy:function(){clearInterval(this.playInter)}},l=(s(433),s(30)),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"scroll",staticClass:"s-scroll-text",on:{mouseenter:t.mouseEnterHandler,mouseleave:t.mouseLeaveHandler}},[s("div",{ref:"content",staticClass:"s-scroll-text-content",class:t.contentClass,style:t.scrollStyle},[s("span",{staticClass:"s-scroll-text-label"},[t._t("default")],2),t._v(" "),t.isTmpTextVisible?s("span",{staticClass:"s-scroll-text-label"},[t._t("default")],2):t._e()])])}),[],!1,null,null,null);e.default=o.exports}}]);