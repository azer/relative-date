Javascript module for outputting relative dates. Tested platforms: Node, Firefox 3.6, Chromium 8.0

Install
=======
npm install relative-date

Usage
=====
On browsers:
    
    <script src="relative-date.js"></script>
    <script>
      assert( relativeDate(new Date()), 'just now' );
      assert( relativeDate(1299627946000), '12 minutes ago');
      assert( relativeDate(0), '41 years ago');
    </script>

On a CommonJS compliant environment:

    > var relativeDate = require('relative-date');
    > relativeDate(new Date())
    'just now'
    > relativeDate(1299627946000)
    '12 minutes ago'
    > relativeDate(0)
    '41 years ago'

Testing
=======
node test/node.js || test/browser.html
