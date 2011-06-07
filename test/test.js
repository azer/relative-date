if(typeof require!='undefined'){
  relativeDate = require('../lib/relative-date'),
  assert = require('assert');
}

var SECOND = 1000,
    MINUTE = 60 * SECOND,
    HOUR = 60 * MINUTE,
    DAY = 24 * HOUR,
    WEEK = 7 * DAY,
    YEAR = DAY * 365,
    MONTH = YEAR / 12;

var reference = 157765000000, // 01.01.1975 00:00
    spans = [
      ['just now',reference*SECOND],
      ['just now',reference-41*SECOND],
      ['a minute ago',reference-42*SECOND],
      ['a minute ago',reference-MINUTE],
      ['2 minutes ago',reference-MINUTE*1.5],
      ['59 minutes ago',reference-MINUTE*59],
      ['an hour ago',reference-HOUR],
      ['2 hours ago',reference-HOUR*1.5],
      ['16 hours ago',reference-HOUR*16],
      ['23 hours ago',reference-HOUR*23],
      ['yesterday',reference-DAY*1.8],
      ['3 days ago',reference-DAY*3],
      ['6 days ago',reference-DAY*6],
      ['a week ago',reference-WEEK],
      ['2 weeks ago',reference-WEEK*2],
      ['4 weeks ago',reference-WEEK*4],
      ['a month ago',reference-MONTH*1.2],
      ['12 months ago',reference-YEAR+HOUR],
      ['a year ago',reference-YEAR],
      ['2 years ago',reference-YEAR*2],
      ['5 years ago', 0]
    ];

function test(){
  var now = (new Date).getTime();
  assert.equal(relativeDate(0), Math.round(now/YEAR) + ' years ago' );

  var el;
  for(var i = -1, len=spans.length; ++i < len; ){
    el = spans[i];
    assert.equal(relativeDate(el[1], reference), el[0]);
  };

}

typeof module != 'undefined' && ( module.exports = test );
