# Example of the LDO bug reported in [issue 58](https://github.com/o-development/ldo/issues/58)

To run this example, run
* `npm run build:ldo`
* `npm start`

The expected (and current) result is a web page displaying:

* http://localhost:3000/data.ttl loaded.
* found the following bars:
  * http://localhost:3000/data.ttl#bar1 is linked to **foo 1**
  * http://localhost:3000/data.ttl#bar2 is linked to **foo 2**

But in the previous commit it showed

* http://localhost:3000/data.ttl loaded.
* found the following bars:
  * http://localhost:3000/data.ttl#bar1 is linked to **ERROR**
  * http://localhost:3000/data.ttl#bar2 is linked to **ERROR**

The `foo` property of `Bar` instances was not fetched as expected.
The error came from the fact that another shape (`Baz`) was using the same property `ex:foo` with a different cardinality.
This commit works around that by removing this duplicate property, but that's not satisfying in the long term.
