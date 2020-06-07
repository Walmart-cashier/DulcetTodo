!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var c,d={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof r[t]?r[t]:1===e?r[t].one:r[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:function(t,e,n,r){return o[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(c={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(c.matchPattern);if(!a)return null;var i=a[0],o=n.match(c.parsePattern);if(!o)return null;var u=c.valueCallback?c.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function h(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function m(t,e){f(2,arguments);var n=h(t).getTime(),r=l(e);return new Date(n+r)}function w(t,e){f(2,arguments);var n=l(e);return m(t,-n)}function g(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function y(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function b(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var p={p:b,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return y(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",y(a,e)).replace("{{time}}",b(i,e))}};function v(t){return t.getTime()%6e4}function T(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+v(e))%6e4:v(e))}var C=["D","DD"],k=["YY","YYYY"];function D(t){return-1!==C.indexOf(t)}function M(t){return-1!==k.indexOf(t)}function U(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}function P(t,e){f(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:l(a),o=null==n.weekStartsOn?i:l(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=h(t),s=u.getUTCDay(),c=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function Y(t,e){f(1,arguments);var n=h(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:l(o),s=null==a.firstWeekContainsDate?u:l(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=P(c,e),m=new Date(0);m.setUTCFullYear(r,0,s),m.setUTCHours(0,0,0,0);var w=P(m,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=w.getTime()?r:r-1}function S(t,e,n){f(2,arguments);var r=n||{},a=r.locale,i=a&&a.options&&a.options.weekStartsOn,o=null==i?0:l(i),u=null==r.weekStartsOn?o:l(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=h(t),c=l(e),d=s.getUTCDay(),m=c%7,w=(m+7)%7,g=(w<u?7:0)+c-d;return s.setUTCDate(s.getUTCDate()+g),s}function q(t){f(1,arguments);var e=1,n=h(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function W(t){f(1,arguments);var e=h(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=q(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=q(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function E(t){f(1,arguments);var e=W(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=q(n);return r}function H(t){f(1,arguments);var e=h(t),n=q(e).getTime()-E(e).getTime();return Math.round(n/6048e5)+1}function N(t,e){f(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:l(a),o=null==n.firstWeekContainsDate?i:l(n.firstWeekContainsDate),u=Y(t,e),s=new Date(0);s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0);var c=P(s,e);return c}function O(t,e){f(1,arguments);var n=h(t),r=P(n,e).getTime()-N(n,e).getTime();return Math.round(r/6048e5)+1}var Q=/^(1[0-2]|0?\d)/,L=/^(3[0-1]|[0-2]?\d)/,R=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,F=/^(5[0-3]|[0-4]?\d)/,j=/^(2[0-3]|[0-1]?\d)/,I=/^(2[0-4]|[0-1]?\d)/,X=/^(1[0-1]|0?\d)/,B=/^(1[0-2]|0?\d)/,A=/^[0-5]?\d/,G=/^[0-5]?\d/,J=/^\d/,K=/^\d{1,2}/,z=/^\d{1,3}/,Z=/^\d{1,4}/,_=/^-?\d+/,V=/^-?\d/,$=/^-?\d{1,2}/,tt=/^-?\d{1,3}/,et=/^-?\d{1,4}/,nt=/^([+-])(\d{2})(\d{2})?|Z/,rt=/^([+-])(\d{2})(\d{2})|Z/,at=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,it=/^([+-])(\d{2}):(\d{2})|Z/,ot=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function ut(t,e,n){var r=e.match(t);if(!r)return null;var a=parseInt(r[0],10);return{value:n?n(a):a,rest:e.slice(r[0].length)}}function st(t,e){var n=e.match(t);return n?"Z"===n[0]?{value:0,rest:e.slice(1)}:{value:("+"===n[1]?1:-1)*(36e5*(n[2]?parseInt(n[2],10):0)+6e4*(n[3]?parseInt(n[3],10):0)+1e3*(n[5]?parseInt(n[5],10):0)),rest:e.slice(n[0].length)}:null}function ct(t,e){return ut(_,t,e)}function dt(t,e,n){switch(t){case 1:return ut(J,e,n);case 2:return ut(K,e,n);case 3:return ut(z,e,n);case 4:return ut(Z,e,n);default:return ut(new RegExp("^\\d{1,"+t+"}"),e,n)}}function lt(t,e,n){switch(t){case 1:return ut(V,e,n);case 2:return ut($,e,n);case 3:return ut(tt,e,n);case 4:return ut(et,e,n);default:return ut(new RegExp("^-?\\d{1,"+t+"}"),e,n)}}function ft(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ht(t,e){var n,r=e>0,a=r?e:1-e;if(a<=50)n=t||100;else{var i=a+50;n=t+100*Math.floor(i/100)-(t>=i%100?100:0)}return r?n:1-n}var mt=[31,28,31,30,31,30,31,31,30,31,30,31],wt=[31,29,31,30,31,30,31,31,30,31,30,31];function gt(t){return t%400==0||t%4==0&&t%100!=0}var yt={G:{priority:140,parse:function(t,e,n,r){switch(e){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})||n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"})}},set:function(t,e,n,r){return e.era=n,t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(t,e,n,r){var a=function(t){return{year:t,isTwoDigitYear:"yy"===e}};switch(e){case"y":return dt(4,t,a);case"yo":return n.ordinalNumber(t,{unit:"year",valueCallback:a});default:return dt(e.length,t,a)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var a=t.getUTCFullYear();if(n.isTwoDigitYear){var i=ht(n.year,a);return t.setUTCFullYear(i,0,1),t.setUTCHours(0,0,0,0),t}var o="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(o,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(t,e,n,r){var a=function(t){return{year:t,isTwoDigitYear:"YY"===e}};switch(e){case"Y":return dt(4,t,a);case"Yo":return n.ordinalNumber(t,{unit:"year",valueCallback:a});default:return dt(e.length,t,a)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var a=Y(t,r);if(n.isTwoDigitYear){var i=ht(n.year,a);return t.setUTCFullYear(i,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),P(t,r)}var o="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(o,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),P(t,r)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(t,e,n,r){return lt("R"===e?4:e.length,t)},set:function(t,e,n,r){var a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),q(a)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(t,e,n,r){return lt("u"===e?4:e.length,t)},set:function(t,e,n,r){return t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(t,e,n,r){switch(e){case"Q":case"QQ":return dt(e.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(t,e,n,r){switch(e){case"q":case"qq":return dt(e.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(t,e,n,r){var a=function(t){return t-1};switch(e){case"M":return ut(Q,t,a);case"MM":return dt(2,t,a);case"Mo":return n.ordinalNumber(t,{unit:"month",valueCallback:a});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(t,e,n,r){var a=function(t){return t-1};switch(e){case"L":return ut(Q,t,a);case"LL":return dt(2,t,a);case"Lo":return n.ordinalNumber(t,{unit:"month",valueCallback:a});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(t,e,n,r){switch(e){case"w":return ut(F,t);case"wo":return n.ordinalNumber(t,{unit:"week"});default:return dt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,r){return P(function(t,e,n){f(2,arguments);var r=h(t),a=l(e),i=O(r,n)-a;return r.setUTCDate(r.getUTCDate()-7*i),r}(t,n,r),r)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(t,e,n,r){switch(e){case"I":return ut(F,t);case"Io":return n.ordinalNumber(t,{unit:"week"});default:return dt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,r){return q(function(t,e){f(2,arguments);var n=h(t),r=l(e),a=H(n)-r;return n.setUTCDate(n.getUTCDate()-7*a),n}(t,n,r),r)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,parse:function(t,e,n,r){switch(e){case"d":return ut(L,t);case"do":return n.ordinalNumber(t,{unit:"date"});default:return dt(e.length,t)}},validate:function(t,e,n){var r=gt(t.getUTCFullYear()),a=t.getUTCMonth();return r?e>=1&&e<=wt[a]:e>=1&&e<=mt[a]},set:function(t,e,n,r){return t.setUTCDate(n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,parse:function(t,e,n,r){switch(e){case"D":case"DD":return ut(R,t);case"Do":return n.ordinalNumber(t,{unit:"date"});default:return dt(e.length,t)}},validate:function(t,e,n){return gt(t.getUTCFullYear())?e>=1&&e<=366:e>=1&&e<=365},set:function(t,e,n,r){return t.setUTCMonth(0,n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(t,e,n,r){switch(e){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=S(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(t,e,n,r){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"e":case"ee":return dt(e.length,t,a);case"eo":return n.ordinalNumber(t,{unit:"day",valueCallback:a});case"eee":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=S(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(t,e,n,r){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"c":case"cc":return dt(e.length,t,a);case"co":return n.ordinalNumber(t,{unit:"day",valueCallback:a});case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=S(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(t,e,n,r){var a=function(t){return 0===t?7:t};switch(e){case"i":case"ii":return dt(e.length,t);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiii":return n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiiii":return n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiii":default:return n.day(t,{width:"wide",context:"formatting",valueCallback:a})||n.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a})}},validate:function(t,e,n){return e>=1&&e<=7},set:function(t,e,n,r){return(t=function(t,e){f(2,arguments);var n=l(e);n%7==0&&(n-=7);var r=1,a=h(t),i=a.getUTCDay(),o=n%7,u=(o+7)%7,s=(u<r?7:0)+n-i;return a.setUTCDate(a.getUTCDate()+s),a}(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(t,e,n,r){switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(ft(n),0,0,0),t},incompatibleTokens:["b","B","H","K","k","t","T"]},b:{priority:80,parse:function(t,e,n,r){switch(e){case"b":case"bb":case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(ft(n),0,0,0),t},incompatibleTokens:["a","B","H","K","k","t","T"]},B:{priority:80,parse:function(t,e,n,r){switch(e){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(ft(n),0,0,0),t},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(t,e,n,r){switch(e){case"h":return ut(B,t);case"ho":return n.ordinalNumber(t,{unit:"hour"});default:return dt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=12},set:function(t,e,n,r){var a=t.getUTCHours()>=12;return a&&n<12?t.setUTCHours(n+12,0,0,0):a||12!==n?t.setUTCHours(n,0,0,0):t.setUTCHours(0,0,0,0),t},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(t,e,n,r){switch(e){case"H":return ut(j,t);case"Ho":return n.ordinalNumber(t,{unit:"hour"});default:return dt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=23},set:function(t,e,n,r){return t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(t,e,n,r){switch(e){case"K":return ut(X,t);case"Ko":return n.ordinalNumber(t,{unit:"hour"});default:return dt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.getUTCHours()>=12&&n<12?t.setUTCHours(n+12,0,0,0):t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","H","k","t","T"]},k:{priority:70,parse:function(t,e,n,r){switch(e){case"k":return ut(I,t);case"ko":return n.ordinalNumber(t,{unit:"hour"});default:return dt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=24},set:function(t,e,n,r){var a=n<=24?n%24:n;return t.setUTCHours(a,0,0,0),t},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(t,e,n,r){switch(e){case"m":return ut(A,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return dt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCMinutes(n,0,0),t},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(t,e,n,r){switch(e){case"s":return ut(G,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return dt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCSeconds(n,0),t},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(t,e,n,r){return dt(e.length,t,(function(t){return Math.floor(t*Math.pow(10,3-e.length))}))},set:function(t,e,n,r){return t.setUTCMilliseconds(n),t},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(t,e,n,r){switch(e){case"X":return st(nt,t);case"XX":return st(rt,t);case"XXXX":return st(at,t);case"XXXXX":return st(ot,t);case"XXX":default:return st(it,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(t,e,n,r){switch(e){case"x":return st(nt,t);case"xx":return st(rt,t);case"xxxx":return st(at,t);case"xxxxx":return st(ot,t);case"xxx":default:return st(it,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(t,e,n,r){return ct(t)},set:function(t,e,n,r){return[new Date(1e3*n),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(t,e,n,r){return ct(t)},set:function(t,e,n,r){return[new Date(n),{timestampIsSet:!0}]},incompatibleTokens:"*"}},bt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,pt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,vt=/^'([^]*?)'?$/,Tt=/''/g,Ct=/\S/,xt=/[a-zA-Z]/;function kt(t,e){if(e.timestampIsSet)return t;var n=new Date(0);return n.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),n.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n}function Dt(t){return t.match(vt)[1].replace(Tt,"'")}((t,e,n)=>{const r=document.querySelector("#duedate");r.addEventListener("input",r=>{t(r,e,n)}),r.addEventListener("keyup",r=>{t(r,e,n)})})((t,e,n)=>{const r=document.querySelector("#duedate");var a;document.querySelector("#errorSpan").textContent="",n(e(r.value,"yyyy-MM-dd",new Date))?(t.preventDefault(),a="Due date already passed ,set new date",document.querySelector("#errorSpan").textContent=a):x},(function(t,e,n,r){f(3,arguments);var a=String(t),i=String(e),o=r||{},u=o.locale||d;if(!u.match)throw new RangeError("locale must contain match property");var s=u.options&&u.options.firstWeekContainsDate,c=null==s?1:l(s),m=null==o.firstWeekContainsDate?c:l(o.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=u.options&&u.options.weekStartsOn,b=null==y?0:l(y),v=null==o.weekStartsOn?b:l(o.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===i)return""===a?h(n):new Date(NaN);var C,x={firstWeekContainsDate:m,weekStartsOn:v,locale:u},k=[{priority:10,set:kt,index:0}],P=i.match(pt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,p[e])(t,u.formatLong,x):t})).join("").match(bt),Y=[];for(C=0;C<P.length;C++){var S=P[C];!o.useAdditionalWeekYearTokens&&M(S)&&U(S),!o.useAdditionalDayOfYearTokens&&D(S)&&U(S);var q=S[0],W=yt[q];if(W){var E=W.incompatibleTokens;if(Array.isArray(E)){for(var H=void 0,N=0;N<Y.length;N++){var O=Y[N].token;if(-1!==E.indexOf(O)||O===q){H=Y[N];break}}if(H)throw new RangeError("The format string mustn't contain `".concat(H.fullToken,"` and `").concat(S,"` at the same time"))}else if("*"===W.incompatibleTokens&&Y.length)throw new RangeError("The format string mustn't contain `".concat(S,"` and any other token at the same time"));Y.push({token:q,fullToken:S});var Q=W.parse(a,S,u.match,x);if(!Q)return new Date(NaN);k.push({priority:W.priority,set:W.set,validate:W.validate,value:Q.value,index:k.length}),a=Q.rest}else{if(q.match(xt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+q+"`");if("''"===S?S="'":"'"===q&&(S=Dt(S)),0!==a.indexOf(S))return new Date(NaN);a=a.slice(S.length)}}if(a.length>0&&Ct.test(a))return new Date(NaN);var L=k.map((function(t){return t.priority})).sort((function(t,e){return e-t})).filter((function(t,e,n){return n.indexOf(t)===e})).map((function(t){return k.filter((function(e){return e.priority===t})).reverse()})).map((function(t){return t[0]})),R=h(n);if(isNaN(R))return new Date(NaN);var F=w(R,T(R)),j={};for(C=0;C<L.length;C++){var I=L[C];if(I.validate&&!I.validate(F,I.value,x))return new Date(NaN);var X=I.set(F,j,I.value,x);X[0]?(F=X[0],g(j,X[1])):F=X}return F}),(function(t){return f(1,arguments),h(t).getTime()<Date.now()}))}]);