# Example of the LDO bug reported in [issue 58](https://github.com/o-development/ldo/issues/58)

To run this example, run
* `npm run build:ldo`
* `npm start`

The expected result is a web page displaying:

* http://localhost:3000/data.ttl loaded.
* found the following bars:
  * http://localhost:3000/data.ttl#bar1 is linked to **foo 1**
  * http://localhost:3000/data.ttl#bar2 is linked to **foo 2**

But currently it shows

* http://localhost:3000/data.ttl loaded.
* found the following bars:
  * http://localhost:3000/data.ttl#bar1 is linked to **ERROR**
  * http://localhost:3000/data.ttl#bar2 is linked to **ERROR**

The `foo` property of `Bar` instances is not fetched as expected.
