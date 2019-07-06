(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,n,r){e.exports=r(79)},52:function(e,n,r){},78:function(e,n,r){},79:function(e,n,r){"use strict";r.r(n);var a=r(0),t=r.n(a),o=r(42),i=r.n(o),s=(r(52),r(12)),c=r(13),u=r(15),d=r(14),p=r(16),l=r(43),m=r.n(l),f=r(22),y=r(5),v=function(e){function n(){var e,r;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).axisRef=t.a.createRef(),r}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.createAxis()}},{key:"componentDidUpdate",value:function(e){var n=this.props.scale;JSON.stringify(e.scale.domain())!==JSON.stringify(n.domain())&&this.createAxis()}},{key:"createAxis",value:function(){var e=this.props,n=e.orientation,r=e.scale;y.select(this.axisRef.current).call(y["axis".concat(n)](r))}},{key:"render",value:function(){var e=this.props,n=e.className,r=e.xTransform,a=e.yTransform,o=e.label;return t.a.createElement("g",{className:n,ref:this.axisRef,transform:"translate(".concat(r,", ").concat(a,")")},t.a.createElement("text",Object.assign({},this.labelPos,{className:"axisLabel"}),o))}},{key:"labelPos",get:function(){var e=this.props,n=e.orientation,r=e.scale;switch(n){case"Bottom":return{x:r.range()[1]-75,y:40};case"Left":return{x:5,y:4};default:return null}}}]),n}(a.Component),g=r(46),b=function(e){var n=e.x,r=e.y,a=e.width,o=e.height,i=e.fill,s=Object(g.a)(e,["x","y","width","height","fill"]);return t.a.createElement("rect",Object.assign({className:"rect",x:n,y:r,width:a,height:o,fill:i},s))},h=r(44),w=function(e){function n(){var e,r;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).legendRef=t.a.createRef(),r}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.createLegend()}},{key:"createLegend",value:function(){var e=this.props,n=e.shapeWidth,r=e.orientation,a=e.scale;y.select(this.legendRef.current).call(h.a.legendColor().shapeWidth(n).orient(r).scale(a))}},{key:"render",value:function(){var e=this.props,n=e.legendXTransform,r=e.legendYTransform;return t.a.createElement("g",{className:"legend",ref:this.legendRef,transform:"translate(".concat(n,", ").concat(r,")")})}}]),n}(a.Component),N=function(e){var n=e.hovered,r=e.xScale,a=e.yScale,o=e.marginLeft,i=e.marginTop,s=n.gameNumber,c=n.date,u=n.venue,d=n.opponent,p=n.score,l=n.win,m=n.difference,f=n.pointsMadeByCurry,y=r(s)+r.bandwidth()/2+o,v=a(m)+i,g={transform:"translate("+"calc( -50% + ".concat(y,"px),")+"calc(-100% + ".concat(v,"px)")+")"};return t.a.createElement("div",{className:"tooltip",style:g},t.a.createElement("div",{className:"tooltipGame"},"game"," ",s,":"," ",t.a.createElement("span",{className:l?"gameWon":"gameLost"},m)),t.a.createElement("div",null,c),t.a.createElement("div",null,u," ",d),t.a.createElement("div",null,p),0!==f?t.a.createElement("div",null,"Curry made"," ",f," ","points"):t.a.createElement("div",null," Curry did not play "))},M=10,C=30,B=90,x=30,k=1300-x-C,O=280-M-B,E=["#006bb6","#fdb927"],S=y.scaleOrdinal().domain(["win","loss"]).range(E),A=function(e){function n(){var e,r;Object(s.a)(this,n);for(var a=arguments.length,t=new Array(a),o=0;o<a;o++)t[o]=arguments[o];return(r=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(t)))).state={hovered:null,xScale:null,yScale:null},r.onBarHover=function(e){return function(){r.setState({hovered:e})}},r}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this,n=this.state,r=n.xScale,a=n.yScale,o=n.hovered,i=this.props,s=i.filtered,c=i.showAnnotations;return r&&a?t.a.createElement("div",{className:"barChart"},t.a.createElement("svg",{className:"chart",width:k+x+C,height:O+M+B},t.a.createElement("g",{transform:"translate(".concat(x,", ").concat(M,")")},s.map(function(n){return t.a.createElement(b,{key:n.gameNumber,x:r(n.gameNumber),y:a(n.difference),width:r.bandwidth(),height:O-a(n.difference),fill:n.win?E[0]:E[1],onMouseEnter:e.onBarHover(n),onMouseLeave:e.onBarHover(null)})}),t.a.createElement(v,{className:"xAxis",orientation:"Bottom",scale:r,xTransform:0,yTransform:O,label:"game number"}),t.a.createElement(v,{className:"yAxis",orientation:"Left",scale:a,xTransform:0,yTransform:0,label:"point difference"}),t.a.createElement(w,{orientation:"horizontal",scale:S,shapeWidth:25,legendXTransform:k/2-25,legendYTransform:O+50}),c?t.a.createElement(t.a.Fragment,null,t.a.createElement(f.AnnotationBracket,{x:r(13),y:O+20,note:{label:"Curry did not play",lineType:null,align:"middle",padding:5},connector:{type:"elbow",end:null},subject:{width:r(24)-r(13),type:"square"}}),t.a.createElement(f.AnnotationLabel,{x:r(72)+r.bandwidth()/2,y:O+20,dy:17,note:{label:"Curry did not play",lineType:null,align:"middle",padding:5,orientation:"topBottom"}}),t.a.createElement(f.AnnotationLabel,{x:r(82)+r.bandwidth()/2,y:a(15)-3,dy:-45,note:{label:"Curry did not play",lineType:null,align:"middle",padding:7,orientation:"topBottom"}})):null)),o?t.a.createElement(N,{hovered:o,xScale:r,yScale:a,marginLeft:x,marginTop:M}):null):null}}],[{key:"getDerivedStateFromProps",value:function(e){var n=e.data;return n.length?{xScale:y.scaleBand().domain(n.map(function(e){return e.gameNumber})).rangeRound([0,k]).padding(.05),yScale:y.scaleLinear().domain([0,y.max(n,function(e){return e.difference})]).rangeRound([O,0]).nice()}:{}}}]),n}(a.Component),T=r(45),D=10,j=30,L=45,z=30,P=500-z-j,R=170-D-L,J=function(e){function n(){var e,r;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).state={bars:[],xScale:null,yScale:null},r.brushRef=t.a.createRef(),r.brushEnd=function(){var e=null,n=r.state.xScale,a=r.props.updateFilter;if(y.event.selection){var t=Object(T.a)(y.event.selection,2),o=t[0],i=t[1];e=[n.invert(o),n.invert(i)]}a(e)},r}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.brush=y.brushX().extent([[0,0],[P,R]]).on("end",this.brushEnd),y.select(this.brushRef.current).call(this.brush)}},{key:"render",value:function(){var e=this.state,n=e.bars,r=e.xScale,a=e.yScale;return t.a.createElement("div",{className:"histogram"},t.a.createElement("svg",{className:"chart",width:P+z+j,height:R+D+L},t.a.createElement("g",{transform:"translate(".concat(z,", ").concat(D,")")},n.map(function(e){return t.a.createElement(b,{key:e.x,x:e.x,y:e.y,width:e.width,height:e.height,fill:"#be3a34"})}),t.a.createElement(v,{className:"histogramXAxis",orientation:"Bottom",scale:r,xTransform:0,yTransform:R,label:"points made by Curry"}),t.a.createElement(v,{className:"histogramYAxis",orientation:"Left",scale:a,xTransform:0,yTransform:0,label:"number of games"}),t.a.createElement("g",{ref:this.brushRef,className:"brush"}))))}}],[{key:"getDerivedStateFromProps",value:function(e){var n=e.data,r=e.filtered,a=y.scaleLinear().domain(y.extent(n,function(e){return e.pointsMadeByCurry})).range([0,P]).nice(9),t=y.histogram().domain(a.domain()).thresholds(a.ticks(9)).value(function(e){return e.pointsMadeByCurry}),o=t(n),i=y.scaleLinear().domain([0,y.max(o,function(e){return e.length})]).range([R,0]).nice();return{bars:(o=t(r)).map(function(e){return{x:a(e.x0),y:i(e.length),height:R-i(e.length),width:a(e.x1)-a(e.x0)}}),xScale:a,yScale:i}}}]),n}(a.Component),F=(r(78),[{gameNumber:1,date:"16 Oct 2018",venue:"vs",opponent:"Oklahoma City Thunder",score:"108-100",win:!0,difference:8,pointsMadeByCurry:32},{gameNumber:2,date:"19 Oct 2018",venue:"@",opponent:"Utah Jazz",score:"124-123",win:!0,difference:1,pointsMadeByCurry:31},{gameNumber:3,date:"21 Oct 2018",venue:"@",opponent:"Denver Nuggets",score:"98-100",win:!1,difference:2,pointsMadeByCurry:30},{gameNumber:4,date:"22 Oct 2018",venue:"vs",opponent:"Phoenix Suns",score:"123-103",win:!0,difference:20,pointsMadeByCurry:29},{gameNumber:5,date:"24 Oct 2018",venue:"vs",opponent:"Washington Wizards",score:"144-122",win:!0,difference:22,pointsMadeByCurry:51},{gameNumber:6,date:"26 Oct 2018",venue:"@",opponent:"New York Knicks",score:"128-100",win:!0,difference:28,pointsMadeByCurry:29},{gameNumber:7,date:"28 Oct 2018",venue:"@",opponent:"Brooklyn Nets",score:"120-114",win:!0,difference:6,pointsMadeByCurry:35},{gameNumber:8,date:"29 Oct 2018",venue:"@",opponent:"Chicago Bulls",score:"149-124",win:!0,difference:25,pointsMadeByCurry:23},{gameNumber:9,date:"31 Oct 2018",venue:"vs",opponent:"New Orleans Pelicans",score:"131-121",win:!0,difference:10,pointsMadeByCurry:37},{gameNumber:10,date:"02 Nov 2018",venue:"vs",opponent:"Minnesota Timberwolves",score:"116-99",win:!0,difference:17,pointsMadeByCurry:28},{gameNumber:11,date:"05 Nov 2018",venue:"vs",opponent:"Memphis Grizzlies",score:"117-101",win:!0,difference:16,pointsMadeByCurry:19},{gameNumber:12,date:"08 Nov 2018",venue:"vs",opponent:"Milwaukee Bucks",score:"111-134",win:!1,difference:23,pointsMadeByCurry:10},{gameNumber:13,date:"10 Nov 2018",venue:"vs",opponent:"Brooklyn Nets",score:"116-100",win:!0,difference:16,pointsMadeByCurry:0},{gameNumber:14,date:"12 Nov 2018",venue:"@",opponent:"LA Clippers",score:"116-121",win:!1,difference:5,pointsMadeByCurry:0},{gameNumber:15,date:"13 Nov 2018",venue:"vs",opponent:"Atlanta Hawks",score:"110-103",win:!0,difference:7,pointsMadeByCurry:0},{gameNumber:16,date:"15 Nov 2018",venue:"@",opponent:"Houston Rockets",score:"86-107",win:!1,difference:21,pointsMadeByCurry:0},{gameNumber:17,date:"17 Nov 2018",venue:"@",opponent:"Dallas Mavericks",score:"109-112",win:!1,difference:3,pointsMadeByCurry:0},{gameNumber:18,date:"18 Nov 2018",venue:"@",opponent:"San Antonio Spurs",score:"92-104",win:!1,difference:12,pointsMadeByCurry:0},{gameNumber:19,date:"21 Nov 2018",venue:"vs",opponent:"Oklahoma City Thunder",score:"95-123",win:!1,difference:28,pointsMadeByCurry:0},{gameNumber:20,date:"23 Nov 2018",venue:"vs",opponent:"Portland Trail Blazers",score:"125-97",win:!0,difference:28,pointsMadeByCurry:0},{gameNumber:21,date:"21 Nov 2018",venue:"vs",opponent:"Sacramento Kings",score:"117-116",win:!0,difference:1,pointsMadeByCurry:0},{gameNumber:22,date:"26 Nov 2018",venue:"vs",opponent:"Orlando Magic",score:"116-110",win:!0,difference:6,pointsMadeByCurry:0},{gameNumber:23,date:"29 Nov 2018",venue:"@",opponent:"Toronto Raptors",score:"128-131",win:!1,difference:3,pointsMadeByCurry:0},{gameNumber:24,date:"01 Dec 2018",venue:"@",opponent:"Detroit Pistons",score:"102-111",win:!1,difference:9,pointsMadeByCurry:27},{gameNumber:25,date:"03 Dec 2018",venue:"@",opponent:"Atlanta Hawks",score:"128-111",win:!0,difference:17,pointsMadeByCurry:30},{gameNumber:26,date:"05 Dec 2018",venue:"@",opponent:"Cleveland Cavaliers",score:"129-105",win:!0,difference:24,pointsMadeByCurry:42},{gameNumber:27,date:"07 Dec 2018",venue:"@",opponent:"Milwaukee Bucks",score:"105-95",win:!0,difference:10,pointsMadeByCurry:20},{gameNumber:28,date:"10 Dec 2018",venue:"vs",opponent:"Minnesota Timberwolves",score:"116-108",win:!0,difference:8,pointsMadeByCurry:38},{gameNumber:29,date:"12 Dec 2018",venue:"vs",opponent:"Toronto Raptors",score:"93-113",win:!1,difference:20,pointsMadeByCurry:10},{gameNumber:30,date:"14 Dec 2018",venue:"@",opponent:"Sacramento Kings",score:"130-125",win:!0,difference:5,pointsMadeByCurry:35},{gameNumber:31,date:"17 Dec 2018",venue:"vs",opponent:"Memphis Grizzlies",score:"110-93",win:!0,difference:17,pointsMadeByCurry:20},{gameNumber:32,date:"19 Dec 2018",venue:"@",opponent:"Utah Jazz",score:"103-108",win:!1,difference:5,pointsMadeByCurry:32},{gameNumber:33,date:"22 Dec 2018",venue:"vs",opponent:"Dallas Mavericks",score:"120-116",win:!0,difference:4,pointsMadeByCurry:22},{gameNumber:34,date:"23 Dec 2018",venue:"vs",opponent:"LA Clippers",score:"129-127",win:!0,difference:2,pointsMadeByCurry:42},{gameNumber:35,date:"25 Dec 2018",venue:"vs",opponent:"LA Lakers",score:"101-127",win:!1,difference:26,pointsMadeByCurry:15},{gameNumber:36,date:"27 Dec 2018",venue:"vs",opponent:"Portland Trail Blazers",score:"109-110",win:!1,difference:1,pointsMadeByCurry:29},{gameNumber:37,date:"29 Dec 2018",venue:"@",opponent:"Portland Trail Blazers",score:"115-105",win:!0,difference:10,pointsMadeByCurry:25},{gameNumber:38,date:"31 Dec 2018",venue:"@",opponent:"Phoenix Suns",score:"132-109",win:!0,difference:23,pointsMadeByCurry:34},{gameNumber:39,date:"03 Jan 2019",venue:"vs",opponent:"Houston Rockets",score:"134-135",win:!1,difference:1,pointsMadeByCurry:35},{gameNumber:40,date:"05 Jan 2019",venue:"@",opponent:"Sacramento Kings",score:"127-123",win:!0,difference:4,pointsMadeByCurry:42},{gameNumber:41,date:"08 Jan 2019",venue:"vs",opponent:"New York Knicks",score:"122-95",win:!0,difference:27,pointsMadeByCurry:14},{gameNumber:42,date:"11 Jan 2019",venue:"vs",opponent:"Chicago Bulls",score:"146-109",win:!0,difference:37,pointsMadeByCurry:28},{gameNumber:43,date:"13 Jan 2019",venue:"@",opponent:"Dallas Mavericks",score:"119-114",win:!0,difference:5,pointsMadeByCurry:48},{gameNumber:44,date:"15 Jan 2019",venue:"@",opponent:"Denver Nuggets",score:"142-111",win:!0,difference:31,pointsMadeByCurry:31},{gameNumber:45,date:"16 Jan 2019",venue:"vs",opponent:"New Orleans Pelicans",score:"147-140",win:!0,difference:7,pointsMadeByCurry:41},{gameNumber:46,date:"18 Jan 2019",venue:"@",opponent:"LA Clippers",score:"112-94",win:!0,difference:18,pointsMadeByCurry:28},{gameNumber:47,date:"21 Jan 2019",venue:"@",opponent:"LA Lakers",score:"130-111",win:!0,difference:19,pointsMadeByCurry:11},{gameNumber:48,date:"24 Jan 2019",venue:"@",opponent:"Washington Wizards",score:"126-118",win:!0,difference:8,pointsMadeByCurry:38},{gameNumber:49,date:"26 Jan 2019",venue:"@",opponent:"Boston Celtics",score:"115-111",win:!0,difference:4,pointsMadeByCurry:24},{gameNumber:50,date:"28 Jan 2019",venue:"@",opponent:"Indiana Pacers",score:"132-100",win:!0,difference:32,pointsMadeByCurry:26},{gameNumber:51,date:"31 Jan 2019",venue:"vs",opponent:"Philadelphia 76ers",score:"104-113",win:!1,difference:9,pointsMadeByCurry:41},{gameNumber:52,date:"02 Feb 2019",venue:"vs",opponent:"LA Lakers",score:"115-101",win:!0,difference:14,pointsMadeByCurry:14},{gameNumber:53,date:"06 Feb 2019",venue:"vs",opponent:"San Antonio Spurs",score:"141-102",win:!0,difference:39,pointsMadeByCurry:19},{gameNumber:54,date:"08 Feb 2019",venue:"@",opponent:"Phoenix Suns",score:"117-107",win:!0,difference:10,pointsMadeByCurry:20},{gameNumber:55,date:"10 Feb 2019",venue:"vs",opponent:"Miami Heat",score:"120-118",win:!0,difference:2,pointsMadeByCurry:25},{gameNumber:56,date:"12 Feb 2019",venue:"vs",opponent:"Utah Jazz",score:"115-108",win:!0,difference:7,pointsMadeByCurry:24},{gameNumber:57,date:"13 Feb 2019",venue:"@",opponent:"Portland Trail Blazers",score:"107-129",win:!1,difference:22,pointsMadeByCurry:32},{gameNumber:58,date:"21 Feb 2019",venue:"vs",opponent:"Sacramento Kings",score:"125-123",win:!0,difference:2,pointsMadeByCurry:36},{gameNumber:59,date:"23 Feb 2019",venue:"vs",opponent:"Houston Rockets",score:"112-118",win:!1,difference:6,pointsMadeByCurry:25},{gameNumber:60,date:"25 Feb 2019",venue:"@",opponent:"Charlotte Hornets",score:"121-110",win:!0,difference:11,pointsMadeByCurry:16},{gameNumber:61,date:"27 Feb 2019",venue:"@",opponent:"Miami Heat",score:"125-126",win:!1,difference:1,pointsMadeByCurry:24},{gameNumber:62,date:"28 Feb 2019",venue:"@",opponent:"Orlando Magic",score:"96-103",win:!1,difference:7,pointsMadeByCurry:33},{gameNumber:63,date:"02 Mar 2019",venue:"@",opponent:"Philadelphia 76ers",score:"120-117",win:!0,difference:3,pointsMadeByCurry:28},{gameNumber:64,date:"05 Mar 2019",venue:"vs",opponent:"Boston Celtics",score:"95-128",win:!1,difference:33,pointsMadeByCurry:23},{gameNumber:65,date:"08 Mar 2019",venue:"vs",opponent:"Denver Nuggets",score:"122-105",win:!0,difference:17,pointsMadeByCurry:17},{gameNumber:66,date:"10 Mar 2019",venue:"vs",opponent:"Phoenix Suns",score:"111-115",win:!1,difference:4,pointsMadeByCurry:18},{gameNumber:67,date:"13 Mar 2019",venue:"@",opponent:"Houston Rockets",score:"106-104",win:!0,difference:2,pointsMadeByCurry:24},{gameNumber:68,date:"16 Mar 2019",venue:"@",opponent:"Oklahoma City Thunder",score:"110-88",win:!0,difference:22,pointsMadeByCurry:33},{gameNumber:69,date:"18 Mar 2019",venue:"@",opponent:"San Antonio Spurs",score:"105-111",win:!1,difference:6,pointsMadeByCurry:25},{gameNumber:70,date:"19 Mar 2019",venue:"@",opponent:"Minnesota Timberwolves",score:"117-107",win:!0,difference:10,pointsMadeByCurry:36},{gameNumber:71,date:"21 Mar 2019",venue:"vs",opponent:"Indiana Pacers",score:"112-89",win:!0,difference:23,pointsMadeByCurry:15},{gameNumber:72,date:"23 Mar 2019",venue:"vs",opponent:"Dallas Mavericks",score:"91-126",win:!1,difference:35,pointsMadeByCurry:0},{gameNumber:73,date:"24 Mar 2019",venue:"vs",opponent:"Detroit Pistons",score:"121-114",win:!0,difference:7,pointsMadeByCurry:26},{gameNumber:74,date:"27 Mar 2019",venue:"@",opponent:"Memphis Grizzlies",score:"118-103",win:!0,difference:15,pointsMadeByCurry:28},{gameNumber:75,date:"29 Mar 2019",venue:"@",opponent:"Minnesota Timberwolves",score:"130-131",win:!1,difference:1,pointsMadeByCurry:37},{gameNumber:76,date:"31 Mar 2019",venue:"vs",opponent:"Charlotte Hornets",score:"137-90",win:!0,difference:47,pointsMadeByCurry:25},{gameNumber:77,date:"02 Apr 2019",venue:"vs",opponent:"Denver Nuggets",score:"106-102",win:!0,difference:4,pointsMadeByCurry:17},{gameNumber:78,date:"04 Apr 2019",venue:"@",opponent:"LA Lakers",score:"108-90",win:!0,difference:18,pointsMadeByCurry:7},{gameNumber:79,date:"05 Apr 2019",venue:"vs",opponent:"Cleveland Cavaliers",score:"120-114",win:!0,difference:6,pointsMadeByCurry:40},{gameNumber:80,date:"07 Apr 2019",venue:"vs",opponent:"LA Clippers",score:"131-104",win:!0,difference:27,pointsMadeByCurry:27},{gameNumber:81,date:"09 Apr 2019",venue:"@",opponent:"New Orleans Pelicans",score:"112-103",win:!0,difference:9,pointsMadeByCurry:5},{gameNumber:82,date:"10 Apr 2019",venue:"@",opponent:"Memphis Grizzlies",score:"117-132",win:!1,difference:15,pointsMadeByCurry:0}]),H=function(e){function n(){var e,r;Object(s.a)(this,n);for(var a=arguments.length,t=new Array(a),o=0;o<a;o++)t[o]=arguments[o];return(r=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(t)))).state={filtered:[],showAnnotations:!0},r.updateFilter=function(e){if(e){var n=m.a.filter(F,function(n){return n.pointsMadeByCurry>=e[0]&&n.pointsMadeByCurry<=e[1]});r.setState({filtered:n}),0===e[0]?r.setState({showAnnotations:!0}):r.setState({showAnnotations:!1})}else r.setState({filtered:F,showAnnotations:!0})},r}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({filtered:F})}},{key:"render",value:function(){return t.a.createElement("div",{className:"app"},t.a.createElement("div",{className:"intro"},t.a.createElement("h1",null,"With or without Curry?"),t.a.createElement("p",null,"The bar chart displays the point difference in each Golden State Warriors game of the 2018-19 regular season. Hover over bars for further information. The histogram shows the number of games in which Curry's performance was within each point range. Select any point interval in the histogram to make the bar chart display games in which the number of points made by Curry fell within that interval."),t.a.createElement("p",null,"Data source:"," ",t.a.createElement("a",{href:"https://www.basketball-reference.com",target:"_blank",rel:"noopener noreferrer"},"Basketball Reference"))),t.a.createElement(A,Object.assign({data:F},this.state)),t.a.createElement(J,Object.assign({data:F},this.state,{updateFilter:this.updateFilter})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.92ac5164.chunk.js.map