(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14,12,13],{"3c48":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.componentKey}},[n("q-tabs",{attrs:{"inline-label":""},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.myTabs,(function(t){return n("q-tab",{key:t.name,attrs:{name:t.name,label:t.iconOnly?"":t.name,icon:t.labelOnly?"":t.icon},on:{click:function(n){n.preventDefault(),e.selectedTab=t.name}}},[t.menu?n("q-menu",[n(t.menu,{tag:"component"})],1):e._e()],1)})),1),n("q-tab-panels",{model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.myTabs,(function(t){return n("q-tab-panel",{key:t.name,staticClass:"q-ma-none q-pa-sm",attrs:{name:t.name}},[n(t.cmp,e._b({tag:"component"},"component",t.props,!1))],1)})),1)],1)},s=[],o=(n("4e82"),{name:"DynamicTabs",data:()=>({componentKey:0,selectedTab:null,myTabs:[]}),props:{tabList:{type:Array,default:()=>[]}},mounted(){this.myTabs=this.sortedTabs(this.tabList)},watch:{tabList:{handler:function(e,t){this.getFirst(),this.componentKey++},deep:!0}},methods:{sortedTabs(e){const t=["Segments","Chapters","Loops","Favorites","Comments"];return e.sort((function(e,n){return t.indexOf(e.name)-t.indexOf(n.name)})),this.getFirst(),e},getFirst(){var e,t;const n=this.$options.propsData.tabList;if(!n||0===n.length)return;const a=JSON.parse(JSON.stringify(n)),s=(null===(e=a[0])||void 0===e?void 0:e.name)||0;this.selectedTab="undefined"===typeof(null===(t=a[0])||void 0===t?void 0:t.name)?"":s,console.log(`Selected Sidebar Tab: ${this.selectedTab}`)}}}),i=o,l=(n("974f"),n("42e1")),c=n("429bb"),b=n("7460"),r=n("4e73"),m=n("adad"),d=n("823b"),u=n("66e5"),p=n("eebe"),f=n.n(p),T=Object(l["a"])(i,a,s,!1,null,"796020bf",null);t["default"]=T.exports;f()(T,"components",{QTabs:c["a"],QTab:b["a"],QMenu:r["a"],QTabPanels:m["a"],QTabPanel:d["a"],QItem:u["a"]})},"974f":function(e,t,n){"use strict";n("a2a5")},a2a5:function(e,t,n){}}]);