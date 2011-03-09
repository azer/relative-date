var test = require('./test'),
    puts = require('sys').puts,
    startTS = (new Date).getTime();

test();

puts('OK - '+( (new Date).getTime() - startTS )/1000+'s');
