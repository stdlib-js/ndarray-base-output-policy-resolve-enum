/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var resolve = require( './../lib' );

var v = resolve( 'same' );
console.log( v );
// => <number>

v = resolve( 'promoted' );
console.log( v );
// => <number>

v = resolve( 'integral' );
console.log( v );
// => <number>

v = resolve( 'floating_point' );
console.log( v );
// => <number>

v = resolve( 'signed_integer' );
console.log( v );
// => <number>

v = resolve( 'unsigned_integer' );
console.log( v );
// => <number>

v = resolve( 'real_floating_point' );
console.log( v );
// => <number>

v = resolve( 'complex_floating_point' );
console.log( v );
// => <number>
