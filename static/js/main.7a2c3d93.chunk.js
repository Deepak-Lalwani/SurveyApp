(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(21)},16:function(e,a,t){},18:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},19:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),s=t.n(l),i=(t(16),t(3)),o=t(4),c=t(6),d=t(5),u=t(7),m=(t(18),t(19),t(2)),b=t(1),h=t.n(b),w=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={name:"",answers:{answer1:"",answer2:"",answer3:""},isSubmitted:!1},t.nameSubmitted=t.nameSubmitted.bind(Object(m.a)(Object(m.a)(t))),t.answered=t.answered.bind(Object(m.a)(Object(m.a)(t))),t.submitted=t.submitted.bind(Object(m.a)(Object(m.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"nameSubmitted",value:function(e){var a=this.refs.name.value;this.setState({name:a})}},{key:"answered",value:function(e){var a=this.state.answers;"answer1"===e.target.name?(a.answer1=e.target.value,document.getElementById("label1").style.textDecoration="line-through",h()(".card1").css("pointerEvents","none"),h()(".card1").fadeTo("1000","0.4"),h()("#reload1").css("display","block"),h()("#reload1").css("pointerEvents","auto")):"answer2"===e.target.name?(a.answer2=e.target.value,document.getElementById("label2").style.textDecoration="line-through",h()(".card2").css("pointerEvents","none"),h()(".card2").fadeTo("1000","0.4"),h()("#reload2").css("display","block"),h()("#reload2").css("pointerEvents","auto")):"answer3"===e.target.name&&(a.answer3=e.target.value,document.getElementById("label3").style.textDecoration="line-through",h()(".card3").css("pointerEvents","none"),h()(".card3").fadeTo("1000","0.4"),h()("#reload3").css("display","block"),h()("#reload3").css("pointerEvents","auto")),h()(".reload").css("opacity","1"),this.setState({answers:a})}},{key:"submitted",value:function(){this.setState({isSubmitted:!0})}},{key:"reload",value:function(e,a,t,n){h()("input:radio[name="+n+"]").prop("checked",!1);var r=this.state.answers;"answer1"===n?r.answer1="":"answer2"===n?r.answer2="":"answer3"===n&&(r.answer3=""),this.setState({answers:r}),console.log(this.state),h()("."+e).css("pointerEvents","auto"),h()("."+e).fadeTo("1000","1"),h()("#"+a).css("textDecoration","none"),h()("#"+t).css("display","none")}},{key:"render",value:function(){var e,a;return""===this.state.name?e=r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.nameSubmitted},r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:"name",placeholder:"Enter your name"})))):""!=this.state.name&&!1===this.state.isSubmitted?(e=r.a.createElement("div",null,r.a.createElement("h1",null,"Hello ",this.state.name,", welcome to Survey!!!!")),a=r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitted},r.a.createElement("div",{className:"card card1"},r.a.createElement("label",{id:"label1"},r.a.createElement("p",{onClick:this.reload.bind(this,"card1","label1","reload1","answer1"),className:"reload",id:"reload1"},"\u21bb"),"What is your fvr8 color"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"answer1",value:"red",onChange:this.answered}),"Red\xa0\xa0",r.a.createElement("input",{type:"radio",name:"answer1",value:"blue",onChange:this.answered}),"Blue\xa0\xa0",r.a.createElement("input",{type:"radio",name:"answer1",value:"Orange",onChange:this.answered}),"Orange\xa0\xa0"),r.a.createElement("div",{class:"card card2"},r.a.createElement("label",{id:"label2"},r.a.createElement("p",{onClick:this.reload.bind(this,"card2","label2","reload2","answer2"),className:"reload",id:"reload2"},"\u21bb"),"What is your fvr8 car"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"answer2",value:"Audi",onChange:this.answered}),"Audi\xa0\xa0",r.a.createElement("input",{type:"radio",name:"answer2",value:"Mercedes",onChange:this.answered}),"Mercedes\xa0\xa0",r.a.createElement("input",{type:"radio",name:"answer2",value:"Ferari",onChange:this.answered}),"Ferari\xa0\xa0"),r.a.createElement("div",{class:"card card3"},r.a.createElement("label",{id:"label3"},r.a.createElement("p",{onClick:this.reload.bind(this,"card3","label3","reload3","answer3"),className:"reload",id:"reload3"},"\u21bb"),"What is your fvr8 sports"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"answer3",value:"Cricket",onChange:this.answered}),"Cricket\xa0\xa0",r.a.createElement("input",{type:"radio",name:"answer3",value:"Football",onChange:this.answered}),"Football\xa0\xa0",r.a.createElement("input",{type:"radio",name:"answer3",value:"Baseball",onChange:this.answered}),"Baseball\xa0\xa0"),r.a.createElement("input",{type:"submit",value:"Submit"})))):!0===this.state.isSubmitted&&(e=r.a.createElement("div",null,r.a.createElement("h2",null,"Thank you ",this.state.name," for your valuable feedback. Please find your response below : "),r.a.createElement("div",{className:"card"},r.a.createElement("label",{id:"label1"},"What is your fvr8 color"),r.a.createElement("br",null),r.a.createElement("p",null,"\u2714  ",this.state.answers.answer1)),r.a.createElement("div",{className:"card"},r.a.createElement("label",{id:"label2"},"What is your fvr8 car"),r.a.createElement("br",null),r.a.createElement("p",null,"\u2714  ",this.state.answers.answer2)),r.a.createElement("div",{className:"card"},r.a.createElement("label",{id:"label3"},"What is your fvr8 sports"),r.a.createElement("br",null),r.a.createElement("p",null,"\u2714  ",this.state.answers.answer3))),a=r.a.createElement("div",null)),r.a.createElement("div",null,e,a)}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.7a2c3d93.chunk.js.map