(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(3678)}])},3678:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return i}});var s=e(5893),u=e(7294),a=e(1043),r=e(1131);function i(){var n=(0,a.I0)(),t=(0,u.useState)(""),e=t[0],i=t[1],c=(0,u.useState)(""),o=c[0],d=c[1],f=(0,a.v9)((function(n){return n.socket.socket})),l=(0,a.v9)((function(n){return n.messages})),h=(0,a.v9)((function(n){return n.user})).nickname;(0,u.useEffect)((function(){f.on("message",(function(t){return n((0,r.newMessage)(t))}))}),[f]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Chat"}),(0,s.jsxs)("h2",{children:["User: ",(0,s.jsx)("span",{"data-testid":"online-user",children:h})]}),(0,s.jsx)("ul",{children:l&&l.map((function(n){return(0,s.jsx)("li",{"data-testid":"message",children:n})}))}),(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n((0,r.changeNickname)(o))},children:[(0,s.jsx)("input",{"data-testid":"nickname-box",onChange:function(n){var t=n.target;return d(t.value)},type:"text",value:o}),(0,s.jsx)("button",{"data-testid":"nickname-button",type:"submit",children:"Salvar"})]}),(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault(),f.emit("message",{chatMessage:e,nickname:h})},children:[(0,s.jsx)("input",{"data-testid":"message-box",type:"text",onChange:function(n){var t=n.target;return i(t.value)},value:e}),(0,s.jsx)("button",{"data-testid":"send-button",type:"submit",children:"Enviar"})]})]})}}},function(n){n.O(0,[774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);