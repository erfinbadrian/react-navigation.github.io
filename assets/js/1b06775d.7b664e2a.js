"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[660],{50253:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=i(85893),a=i(11151);const o={id:"animated-switch-navigator",title:"createAnimatedSwitchNavigator",sidebar_label:"createAnimatedSwitchNavigator"},r=void 0,c={id:"animated-switch-navigator",title:"createAnimatedSwitchNavigator",description:"A SwitchNavigator with animation support.",source:"@site/versioned_docs/version-4.x/animated-switch-navigator.md",sourceDirName:".",slug:"/animated-switch-navigator",permalink:"/docs/4.x/animated-switch-navigator",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/animated-switch-navigator.md",tags:[],version:"4.x",frontMatter:{id:"animated-switch-navigator",title:"createAnimatedSwitchNavigator",sidebar_label:"createAnimatedSwitchNavigator"},sidebar:"version-4.x-docs",previous:{title:"createSwitchNavigator",permalink:"/docs/4.x/switch-navigator"},next:{title:"createDrawerNavigator",permalink:"/docs/4.x/drawer-navigator"}},s={},d=[{value:"API Definition",id:"api-definition",level:2},{value:"RouteConfigs",id:"routeconfigs",level:2},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",level:2}];function h(t){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["A ",(0,n.jsx)(e.code,{children:"SwitchNavigator"})," with animation support."]}),"\n",(0,n.jsxs)(e.p,{children:["To use this navigator, you need to install ",(0,n.jsx)(e.code,{children:"react-native-reanimated >= 1.0.0"}),". If you have a managed Expo project, you need to use >= SDK 33 to have the correct version of Reanimated."]}),"\n",(0,n.jsx)(e.h2,{id:"api-definition",children:"API Definition"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-js",children:"import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';\n\ncreateAnimatedSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);\n"})}),"\n",(0,n.jsx)(e.h2,{id:"routeconfigs",children:"RouteConfigs"}),"\n",(0,n.jsxs)(e.p,{children:["The route configs are identical to ",(0,n.jsx)(e.a,{href:"/docs/4.x/switch-navigator",children:"createSwitchNavigator"})]}),"\n",(0,n.jsx)(e.h2,{id:"switchnavigatorconfig",children:"SwitchNavigatorConfig"}),"\n",(0,n.jsxs)(e.p,{children:["The switch navigator configs are identical to ",(0,n.jsx)(e.a,{href:"/docs/4.x/switch-navigator",children:"createSwitchNavigator"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["By default, the transition between screens is a cross-fade. You can customize the transition with an additional option ",(0,n.jsx)(e.code,{children:"transition"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:'import createAnimatedSwitchNavigator from \'react-navigation-animated-switch\';\nimport { Transition } from \'react-native-reanimated\';\n\nconst MySwitch = createAnimatedSwitchNavigator(\n  {\n    Home: HomeScreen,\n    Other: OtherScreen,\n  },\n  {\n    // The previous screen will slide to the bottom while the next screen will fade in\n    transition: (\n      <Transition.Together>\n        <Transition.Out\n          type="slide-bottom"\n          durationMs={400}\n          interpolation="easeIn"\n        />\n        <Transition.In type="fade" durationMs={500} />\n      </Transition.Together>\n    ),\n  }\n);\n'})}),"\n",(0,n.jsxs)(e.p,{children:["Since the transition are possible thanks to the ",(0,n.jsx)(e.code,{children:"Transition"})," API from ",(0,n.jsx)(e.code,{children:"react-native-reanimated"}),", you can learn more about it ",(0,n.jsx)(e.a,{href:"https://github.com/software-mansion/react-native-reanimated",children:"here"}),"."]})]})}function l(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},11151:(t,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var n=i(67294);const a={},o=n.createContext(a);function r(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);