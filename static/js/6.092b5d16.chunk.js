(this["webpackJsonpquotes-app"]=this["webpackJsonpquotes-app"]||[]).push([[6],{48:function(e,t,c){e.exports={card:"Card_card__3Z0tL"}},49:function(e,t,c){e.exports={form:"QuoteForm_form__MNbMQ",loading:"QuoteForm_loading___ux8s",control:"QuoteForm_control__3bJ6m",actions:"QuoteForm_actions__cm6bt"}},58:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(0),s=c(40),a=c(48),r=c.n(a),u=c(1),i=function(e){return Object(u.jsx)("div",{className:r.a.card,children:e.children})},l=c(14),d=c(49),j=c.n(d),b=function(e){var t=Object(o.useState)(!1),c=Object(s.a)(t,2),a=c[0],r=c[1],d=Object(o.useRef)(),b=Object(o.useRef)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(n.a,{when:a,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){r(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){r(!1)},className:"btn",children:"Add Quote"})})]})})]})},x=c(38),f=c(39);t.default=function(){var e=Object(n.h)(),t=Object(x.a)(f.b),c=t.sendRequest,s=t.status;return Object(o.useEffect)((function(){"completed"===s&&e.push("/quotes-app/quotes")}),[s,e]),Object(u.jsx)(b,{isLoading:"pending"===s,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=6.092b5d16.chunk.js.map