(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},39:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),s=a.n(c),o=(a(38),a(39),a(2)),i=a(3),r=a(5),m=a(4),u=a(6),h=a(11),b=a(12),E=a(30),d=a.n(E),p=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){window.open(this.props.obj.URL,"_blank")}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.obj.artist),l.a.createElement("td",null,this.props.obj.song_name),l.a.createElement("td",null,l.a.createElement("span",{className:"youtubelink"},l.a.createElement("span",{href:"#",onClick:this.handleClick.bind(this),className:"youtubeLink"},"Youtube"))),l.a.createElement("td",null,this.props.obj.length),l.a.createElement("td",null,this.props.obj.key),l.a.createElement("td",null,this.props.obj.max_key),l.a.createElement("td",null,this.props.obj.tj_number),l.a.createElement("td",null,this.props.obj.ky_number),l.a.createElement("td",null,this.props.obj.order))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){window.open(this.props.obj.URL,"_blank")}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",{className:"songname"},l.a.createElement("b",null,this.props.obj.song_name),l.a.createElement("br",null),this.props.obj.artist),l.a.createElement("td",null,this.props.obj.tj_number),l.a.createElement("td",null,this.props.obj.max_key),l.a.createElement("td",null,this.props.obj.order))}}]),t}(n.Component),f=(a(57),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"obj"}),l.a.createElement("div",{className:"obj"}),l.a.createElement("div",{className:"obj"}),l.a.createElement("div",{className:"obj"}),l.a.createElement("div",{className:"obj"}),l.a.createElement("div",{className:"obj"})),l.a.createElement("div",{className:"loading-text"},"Loading"))}}]),t}(n.Component)),v=(a(58),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("span",null,"\u2195")}}]),t}(n.Component)),g=(a(59),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={songList:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://calm-anchorage-40334.herokuapp.com/song").then(function(t){e.setState({songList:t.data})}).catch(function(e){console.log(e)})}},{key:"tabRow",value:function(){return this.state.songList.map(function(e,t){return l.a.createElement(p,{obj:e,key:t})})}},{key:"tabRow_s",value:function(){return this.state.songList.map(function(e,t){return l.a.createElement(k,{obj:e,key:t})})}},{key:"render",value:function(){var e="";return 0===this.state.songList.length&&(e=l.a.createElement(f,null)),l.a.createElement("div",{className:"tableContainer"},l.a.createElement("h2",null," \ub178\ub798\ubc29 \ub370\uc774\ud130"),l.a.createElement("table",{className:"mytable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uac00\uc218 ",l.a.createElement(v,null)),l.a.createElement("th",null,"\uc7ac\ubaa9 ",l.a.createElement(v,null)),l.a.createElement("th",null,"URL ",l.a.createElement(v,null)),l.a.createElement("th",null,"\uae38\uc774 ",l.a.createElement(v,null)),l.a.createElement("th",null,"\ud0a4 ",l.a.createElement(v,null)),l.a.createElement("th",null,"\ucd5c\uace0\uc74c ",l.a.createElement(v,null)),l.a.createElement("th",null,"TJ\ubc88\ud638 ",l.a.createElement(v,null)),l.a.createElement("th",null,"KY\ubc88\ud638 ",l.a.createElement(v,null)),l.a.createElement("th",null,"\uc21c ",l.a.createElement(v,null)))),l.a.createElement("tbody",null,this.tabRow())),l.a.createElement("table",{className:"mytable-s"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uc7ac\ubaa9/\uac00\uc218 ",l.a.createElement(v,null)),l.a.createElement("th",null,"TJ\ubc88\ud638 ",l.a.createElement(v,null)),l.a.createElement("th",null,"\ucd5c\uace0\uc74c ",l.a.createElement(v,null)),l.a.createElement("th",null,"\uc21c ",l.a.createElement(v,null)))),l.a.createElement("tbody",null,this.tabRow_s())),e)}}]),t}(n.Component)),j=(a(60),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,"What is this?"),l.a.createElement("div",{className:"aboutTextBody"},l.a.createElement("h3",null,"An easy to access, easy to read collection of data for all the music I like to destroy my throat with at the K"),l.a.createElement("h3",null,"The definition of simple, minimalistic."),l.a.createElement("h3",null)))}}]),t}(n.Component)),y=(a(61),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"clickFacebook",value:function(){console.log("Facebook Link clicked")}},{key:"clickLinkedin",value:function(){console.log("Linkedin Link clicked")}},{key:"clickGithub",value:function(){console.log("Github Link clicked")}},{key:"clickInstagram",value:function(){console.log("Instagram Link clicked")}},{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement("h1",null," Welcome to \ub178\ub798\ubc29DB "),l.a.createElement("div",{className:"homeTextBody"},l.a.createElement("h3",null," Made with "),l.a.createElement("span",{className:"mongo"}," MongoDB"),l.a.createElement("span",{className:"express"}," Express"),l.a.createElement("span",{className:"react"}," React"),l.a.createElement("span",{className:"node"}," Node"),l.a.createElement("h3",null," A Simple website created to display organise and manage music for TJ and KY")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"contactIcons"},l.a.createElement("ul",null,l.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.10/css/all.css",integrity:"sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg",crossOrigin:"anonymous"}),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-facebook",onClick:this.clickFacebook.bind(this)})),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-github-square",onClick:this.clickGithub.bind(this)})),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-linkedin",onClick:this.clickLinkedin.bind(this)})),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-instagram",onClick:this.clickInstagram.bind(this)})))))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={onHome:!0,onIndex:!1,onAbout:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleHome",value:function(){this.setState({onHome:!0,onIndex:!1,onAbout:!1})}},{key:"toggleIndex",value:function(){this.setState({onHome:!1,onIndex:!0,onAbout:!1})}},{key:"toggleAbout",value:function(){this.setState({onHome:!1,onIndex:!1,onAbout:!0})}},{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gaegu&display=swap",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gamja+Flower&display=swap",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gothic+A1&display=swap",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gaegu&display=swap",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gamja+Flower&display=swap",rel:"stylesheet"}),l.a.createElement("nav",{className:"navbar"},l.a.createElement("span",{className:"nav-padding-space-left"}," "),l.a.createElement("span",{className:"brandText"},"\ub178\ub798\ubc29DB"),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item "},l.a.createElement(h.b,{to:"/",className:"nav-link "+(this.state.onHome?"nav-selected ":""),onClick:this.toggleHome.bind(this)},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{to:"/index",className:"nav-link "+(this.state.onIndex?"nav-selected ":""),onClick:this.toggleIndex.bind(this)},"Data")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{to:"/about",className:"nav-link "+(this.state.onAbout?"nav-selected ":""),onClick:this.toggleAbout.bind(this)},"About")),l.a.createElement("li",{className:"nav-padding-space-right"}," ")),l.a.createElement("ul",{className:"navbar-nav-s"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{to:"/",className:"nav-link "+(this.state.onHome?"nav-selected ":""),onClick:this.toggleHome.bind(this)},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{to:"/index",className:"nav-link "+(this.state.onIndex?"nav-selected ":""),onClick:this.toggleIndex.bind(this)},"Data")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{to:"/about",className:"nav-link "+(this.state.onAbout?"nav-selected ":""),onClick:this.toggleAbout.bind(this)},"About"))))),l.a.createElement("div",{className:"switch-div"},l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",component:y}),l.a.createElement(b.a,{exact:!0,path:"/index",component:g}),l.a.createElement(b.a,{path:"/about",component:j})))))}}]),t}(n.Component);var O=function(){return l.a.createElement("div",null,l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(O,null)),l.a.createElement("footer",null," Created by Eunbal/Talmo Developments 2019 \xa9 ")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.7c7b9721.chunk.js.map