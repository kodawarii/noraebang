(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},39:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(30),c=a.n(l),o=(a(38),a(39),a(3)),i=a(4),r=a(6),h=a(5),m=a(7),u=a(12),d=a(13),b=a(2),g=a.n(b),E=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){window.open(this.props.obj.URL,"_blank")}},{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.obj.artist),s.a.createElement("td",null,this.props.obj.song_name),s.a.createElement("td",null,s.a.createElement("span",{className:"youtubelink"},s.a.createElement("span",{href:"#",onClick:this.handleClick.bind(this),className:"youtubeLink"},"Youtube"))),s.a.createElement("td",null,this.props.obj.length),s.a.createElement("td",null,this.props.obj.key),s.a.createElement("td",null,this.props.obj.max_key),s.a.createElement("td",null,this.props.obj.tj_number),s.a.createElement("td",null,this.props.obj.ky_number),s.a.createElement("td",null,this.props.obj.order))}}]),t}(n.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){window.open(this.props.obj.URL,"_blank")}},{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement("td",{className:"songname"},s.a.createElement("b",null,this.props.obj.song_name),s.a.createElement("br",null),this.props.obj.artist),s.a.createElement("td",null,this.props.obj.tj_number),s.a.createElement("td",null,this.props.obj.max_key),s.a.createElement("td",null,this.props.obj.order))}}]),t}(n.Component),f=(a(57),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"loading"},s.a.createElement("div",{className:"obj"}),s.a.createElement("div",{className:"obj"}),s.a.createElement("div",{className:"obj"}),s.a.createElement("div",{className:"obj"}),s.a.createElement("div",{className:"obj"}),s.a.createElement("div",{className:"obj"})),s.a.createElement("div",{className:"loading-text"},"Loading"))}}]),t}(n.Component)),k=(a(58),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={AscendingOrder:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleBtnClick",value:function(){this.state.AscendingOrder?(this.props.clickButton("asc"),this.setState({AscendingOrder:!1})):(this.props.clickButton("desc"),this.setState({AscendingOrder:!0}))}},{key:"render",value:function(){return s.a.createElement("span",{onClick:this.handleBtnClick.bind(this)},"\u2195")}}]),t}(n.Component)),v=(a(59),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={songList:[],baseURL:"https://calm-anchorage-40334.herokuapp.com/song"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get(this.state.baseURL+"/").then(function(t){e.setState({songList:t.data})}).catch(function(e){console.log(e)})}},{key:"handleSortArtist",value:function(e){var t=this;"asc"===e?g.a.get(this.state.baseURL+"/artist_sort_asc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):"desc"===e?g.a.get(this.state.baseURL+"/artist_sort_desc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):console.log("")}},{key:"handleSortTitle",value:function(e){var t=this;"asc"===e?g.a.get(this.state.baseURL+"/song_name_sort_asc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):"desc"===e?g.a.get(this.state.baseURL+"/song_name_sort_desc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):console.log("")}},{key:"handleSortLength",value:function(e){var t=this;"asc"===e?g.a.get(this.state.baseURL+"/length_sort_asc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):"desc"===e?g.a.get(this.state.baseURL+"/length_sort_desc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):console.log("")}},{key:"handleSortKey",value:function(e){var t=this;"asc"===e?g.a.get(this.state.baseURL+"/key_sort_asc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):"desc"===e?g.a.get(this.state.baseURL+"/key_sort_desc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):console.log("")}},{key:"handleSortHighestNote",value:function(e){var t=this;"asc"===e?g.a.get(this.state.baseURL+"/max_key_sort_asc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):"desc"===e?g.a.get(this.state.baseURL+"/max_key_sort_desc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):console.log("")}},{key:"handleSortTJ",value:function(e){var t=this;"asc"===e?g.a.get(this.state.baseURL+"/tj_number_sort_asc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):"desc"===e?g.a.get(this.state.baseURL+"/tj_number_sort_desc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):console.log("")}},{key:"handleSortKY",value:function(e){var t=this;"asc"===e?g.a.get(this.state.baseURL+"/ky_number_sort_asc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):"desc"===e?g.a.get(this.state.baseURL+"/ky_number_sort_desc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):console.log("")}},{key:"handleSortOrder",value:function(e){var t=this;"asc"===e?g.a.get(this.state.baseURL+"/order_sort_asc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):"desc"===e?g.a.get(this.state.baseURL+"/order_sort_desc/").then(function(e){t.setState({songList:e.data})}).catch(function(e){console.log(e)}):console.log("")}},{key:"tabRow",value:function(){return this.state.songList.map(function(e,t){return s.a.createElement(E,{obj:e,key:t})})}},{key:"tabRow_s",value:function(){return this.state.songList.map(function(e,t){return s.a.createElement(p,{obj:e,key:t})})}},{key:"render",value:function(){var e="";return 0===this.state.songList.length&&(e=s.a.createElement(f,null)),s.a.createElement("div",{className:"tableContainer"},s.a.createElement("h2",null," \ub178\ub798\ubc29 \ub370\uc774\ud130"),s.a.createElement("table",{className:"mytable"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," \uac00\uc218 ",s.a.createElement(k,{clickButton:this.handleSortArtist.bind(this)})),s.a.createElement("th",null," \uc7ac\ubaa9 ",s.a.createElement(k,{clickButton:this.handleSortTitle.bind(this)})),s.a.createElement("th",null," URL "),s.a.createElement("th",null," \uae38\uc774 ",s.a.createElement(k,{clickButton:this.handleSortLength.bind(this)})),s.a.createElement("th",null," \ud0a4 ",s.a.createElement(k,{clickButton:this.handleSortKey.bind(this)})),s.a.createElement("th",null," \ucd5c\uace0\uc74c ",s.a.createElement(k,{clickButton:this.handleSortHighestNote.bind(this)})),s.a.createElement("th",null," TJ\ubc88\ud638 ",s.a.createElement(k,{clickButton:this.handleSortTJ.bind(this)})),s.a.createElement("th",null," KY\ubc88\ud638 ",s.a.createElement(k,{clickButton:this.handleSortKY.bind(this)})),s.a.createElement("th",null," \uc21c ",s.a.createElement(k,{clickButton:this.handleSortOrder.bind(this)})))),s.a.createElement("tbody",null,this.tabRow())),s.a.createElement("table",{className:"mytable-s"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," \uc7ac\ubaa9/\uac00\uc218 ",s.a.createElement(k,{clickButton:this.handleSortTitle.bind(this)})),s.a.createElement("th",null," TJ\ubc88\ud638 ",s.a.createElement(k,{clickButton:this.handleSortTJ.bind(this)})),s.a.createElement("th",null," \ucd5c\uace0\uc74c ",s.a.createElement(k,{clickButton:this.handleSortHighestNote.bind(this)})),s.a.createElement("th",null," \uc21c ",s.a.createElement(k,{clickButton:this.handleSortOrder.bind(this)})))),s.a.createElement("tbody",null,this.tabRow_s())),e)}}]),t}(n.Component)),y=(a(60),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"blog"},s.a.createElement("h1",null,"Noraebang App Updates"))}}]),t}(n.Component)),j=(a(61),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"clickFacebook",value:function(){console.log("Facebook Link clicked")}},{key:"clickLinkedin",value:function(){console.log("Linkedin Link clicked")}},{key:"clickGithub",value:function(){console.log("Github Link clicked")}},{key:"clickInstagram",value:function(){console.log("Instagram Link clicked")}},{key:"render",value:function(){return s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"homeTextBody"},s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Raleway:100&display=swap",rel:"stylesheet"}),s.a.createElement("p",{className:"mainHeading"}," Welcome to NoraebangDB "),s.a.createElement("p",{className:"regularTextBlock"}," Developed with "),s.a.createElement("span",{className:"mongo tech"}," MongoDB"),s.a.createElement("span",{className:"express tech"}," Express"),s.a.createElement("span",{className:"react tech"}," React"),s.a.createElement("span",{className:"node tech"}," Node"),s.a.createElement("p",{className:"regularTextBlock"}," A website created to display organise and manage music data for TJ and KY")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"contactIcons"},s.a.createElement("ul",null,s.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.10/css/all.css",integrity:"sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg",crossOrigin:"anonymous"}),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-facebook",onClick:this.clickFacebook.bind(this)})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-github-square",onClick:this.clickGithub.bind(this)})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-linkedin",onClick:this.clickLinkedin.bind(this)})),s.a.createElement("li",null,s.a.createElement("i",{className:"fab fa-instagram",onClick:this.clickInstagram.bind(this)})))))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={onHome:!0,onIndex:!1,onBlog:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"toggleHome",value:function(){this.setState({onHome:!0,onIndex:!1,onBlog:!1})}},{key:"toggleIndex",value:function(){this.setState({onHome:!1,onIndex:!0,onBlog:!1})}},{key:"toggleBlog",value:function(){this.setState({onHome:!1,onIndex:!1,onBlog:!0})}},{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gaegu&display=swap",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gamja+Flower&display=swap",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gothic+A1&display=swap",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gaegu&display=swap",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gamja+Flower&display=swap",rel:"stylesheet"}),s.a.createElement("nav",{className:"navbar"},s.a.createElement("span",{className:"nav-padding-space-left"}," "),s.a.createElement("span",{className:"brandText"},"\ub178\ub798\ubc29DB"),s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item "},s.a.createElement(u.c,{to:"/",className:"nav-link "+(this.state.onHome?"nav-selected ":""),onClick:this.toggleHome.bind(this)},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.c,{to:"/index",className:"nav-link "+(this.state.onIndex?"nav-selected ":""),onClick:this.toggleIndex.bind(this)},"Data")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.c,{to:"/blog",className:"nav-link "+(this.state.onBlog?"nav-selected ":""),onClick:this.toggleBlog.bind(this)},"About")),s.a.createElement("li",{className:"nav-padding-space-right"}," ")),s.a.createElement("ul",{className:"navbar-nav-s"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.c,{to:"/",className:"nav-link "+(this.state.onHome?"nav-selected ":""),onClick:this.toggleHome.bind(this)},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.c,{to:"/index",className:"nav-link "+(this.state.onIndex?"nav-selected ":""),onClick:this.toggleIndex.bind(this)},"Data")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.c,{to:"/blog",className:"nav-link "+(this.state.onBlog?"nav-selected ":""),onClick:this.toggleBlog.bind(this)},"About"))))),s.a.createElement("div",{className:"switch-div"},s.a.createElement(d.c,null,s.a.createElement(d.a,{exact:!0,path:"/",component:j}),s.a.createElement(d.a,{exact:!0,path:"/index",component:v}),s.a.createElement(d.a,{path:"/blog",component:y})))))}}]),t}(n.Component);var L=function(){return s.a.createElement("div",{className:"app"},s.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement("div",null,s.a.createElement(u.b,{basename:"/home"},s.a.createElement(L,null)),s.a.createElement("footer",null," Created by Eunbal/Talmo Developments 2019 \xa9 ")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.f3628933.chunk.js.map