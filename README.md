<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# resolve

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the enumeration constant associated with a supported ndarray [data type policy][@stdlib/ndarray/output-dtype-policies] value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import resolve from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-output-policy-resolve-enum@deno/mod.js';
```

#### resolve( policy )

Returns the enumeration constant associated with an ndarray [data type policy][@stdlib/ndarray/output-dtype-policies] value.

```javascript
import str2enum from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-output-policy-str2enum@deno/mod.js';

var v = resolve( 'same' );
// returns <number>

v = resolve( str2enum( 'same' ) );
// returns <number>
```

If unable to resolve an enumeration constant, the function returns `null`.

```javascript
var v = resolve( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Downstream consumers of this function should **not** rely on specific integer values (e.g., `SAME == 0`). Instead, the function should be used in an opaque manner.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import resolve from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-output-policy-resolve-enum@deno/mod.js';

var v = resolve( 'same' );
// returns <number>

v = resolve( 'promoted' );
// returns <number>

v = resolve( 'integer' );
// returns <number>

v = resolve( 'floating_point' );
// returns <number>

v = resolve( 'signed_integer' );
// returns <number>

v = resolve( 'unsigned_integer' );
// returns <number>

v = resolve( 'real_floating_point' );
// returns <number>

v = resolve( 'complex_floating_point' );
// returns <number>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-output-policy-resolve-enum.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-output-policy-resolve-enum

[test-image]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-output-policy-resolve-enum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-output-policy-resolve-enum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-output-policy-resolve-enum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-output-policy-resolve-enum/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-output-policy-resolve-enum/blob/main/branches.md

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/deno

</section>

<!-- /.links -->
