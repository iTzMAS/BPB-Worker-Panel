var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (_0x2f2d09, _0x3b39e8) => __defProp(_0x2f2d09, 'name', {
  'value': _0x3b39e8,
  'configurable': true
});
var __require = (_0x5a1bee => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(_0x5a1bee, {
  'get': (_0x333410, _0x37e21e) => (typeof require !== "undefined" ? require : _0x333410)[_0x37e21e]
}) : _0x5a1bee)(function (_0x4d2861) {
  if (typeof require !== "undefined") {
    return require.apply(this, arguments);
  }
  throw new Error("Dynamic require of \"" + _0x4d2861 + "\" is not supported");
});
var __commonJS = (_0x3f5933, _0x106150) => function _0x2a70a1() {
  if (!_0x106150) {
    0x0;
    _0x3f5933[__getOwnPropNames(_0x3f5933)[0x0]]((_0x106150 = {
      'exports': {}
    }).exports, _0x106150);
  }
  return _0x106150.exports;
};
var __copyProps = (_0x4880bc, _0xc1e883, _0x4f6dd6, _0x227160) => {
  if (_0xc1e883 && typeof _0xc1e883 === "object" || typeof _0xc1e883 === "function") {
    for (let _0xe54dd2 of __getOwnPropNames(_0xc1e883)) if (!__hasOwnProp.call(_0x4880bc, _0xe54dd2) && _0xe54dd2 !== _0x4f6dd6) {
      __defProp(_0x4880bc, _0xe54dd2, {
        'get': () => _0xc1e883[_0xe54dd2],
        'enumerable': !(_0x227160 = __getOwnPropDesc(_0xc1e883, _0xe54dd2)) || _0x227160.enumerable
      });
    }
  }
  return _0x4880bc;
};
var __toESM = (_0x4d4804, _0x2cb99d, _0x2e7419) => (_0x2e7419 = _0x4d4804 != null ? __create(__getProtoOf(_0x4d4804)) : {}, __copyProps(_0x2cb99d || !_0x4d4804 || !_0x4d4804.__esModule ? __defProp(_0x2e7419, "default", {
  'value': _0x4d4804,
  'enumerable': true
}) : _0x2e7419, _0x4d4804));
var require_crypto = __commonJS({
  '(disabled):crypto'() {}
});
var require_nacl_fast = __commonJS({
  'node_modules/tweetnacl/nacl-fast.js'(_0x394352, _0xe93622) {
    (function (_0x4a847d) {
      'use strict';

      var _0x4ae1f2 = __defProp(function (_0x7e7fe1) {
        var _0x1726f6;
        var _0x1c8532 = new Float64Array(0x10);
        if (_0x7e7fe1) {
          for (_0x1726f6 = 0x0; _0x1726f6 < _0x7e7fe1.length; _0x1726f6++) {
            _0x1c8532[_0x1726f6] = _0x7e7fe1[_0x1726f6];
          }
        }
        return _0x1c8532;
      }, 'name', {
        'value': 'gf',
        'configurable': true
      });
      var _0x1e1e66 = __defProp(function () {
        throw new Error("no PRNG");
      }, 'name', {
        'value': "randombytes",
        'configurable': true
      });
      var _0xac0696 = new Uint8Array(0x10);
      var _0x1f833d = new Uint8Array(0x20);
      _0x1f833d[0x0] = 0x9;
      var _0x331ca4 = _0x4ae1f2();
      var _0x5a3cb5 = _0x4ae1f2([0x1]);
      var _0x54efd4 = _0x4ae1f2([0xdb41, 0x1]);
      var _0x4d737f = _0x4ae1f2([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0xa4d, 0x70, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]);
      var _0x401af8 = _0x4ae1f2([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0xe0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]);
      var _0x4d6afa = _0x4ae1f2([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]);
      var _0x368ce2 = _0x4ae1f2([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]);
      var _0x4b5540 = _0x4ae1f2([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x99, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);
      function _0x2c219b(_0x18de51, _0x40a340, _0x5f456c, _0x4f82b0) {
        _0x18de51[_0x40a340] = _0x5f456c >> 0x18 & 0xff;
        _0x18de51[_0x40a340 + 0x1] = _0x5f456c >> 0x10 & 0xff;
        _0x18de51[_0x40a340 + 0x2] = _0x5f456c >> 0x8 & 0xff;
        _0x18de51[_0x40a340 + 0x3] = _0x5f456c & 0xff;
        _0x18de51[_0x40a340 + 0x4] = _0x4f82b0 >> 0x18 & 0xff;
        _0x18de51[_0x40a340 + 0x5] = _0x4f82b0 >> 0x10 & 0xff;
        _0x18de51[_0x40a340 + 0x6] = _0x4f82b0 >> 0x8 & 0xff;
        _0x18de51[_0x40a340 + 0x7] = _0x4f82b0 & 0xff;
      }
      __defProp(_0x2c219b, 'name', {
        'value': "ts64",
        'configurable': true
      });
      function _0x27a37b(_0xeb3e1, _0x2445fe, _0x160710, _0x4725cb, _0x50667c) {
        var _0x2d89ab;
        var _0x25624b = 0x0;
        for (_0x2d89ab = 0x0; _0x2d89ab < _0x50667c; _0x2d89ab++) {
          _0x25624b |= _0xeb3e1[_0x2445fe + _0x2d89ab] ^ _0x160710[_0x4725cb + _0x2d89ab];
        }
        return (0x1 & _0x25624b - 0x1 >>> 0x8) - 0x1;
      }
      __defProp(_0x27a37b, 'name', {
        'value': 'vn',
        'configurable': true
      });
      function _0x336255(_0x5638b5, _0x25024a, _0x50936d, _0x29d15f) {
        return _0x27a37b(_0x5638b5, _0x25024a, _0x50936d, _0x29d15f, 0x10);
      }
      __defProp(_0x336255, 'name', {
        'value': "crypto_verify_16",
        'configurable': true
      });
      function _0x307395(_0x3d14d6, _0x50b0cb, _0x246dbf, _0x209127) {
        return _0x27a37b(_0x3d14d6, _0x50b0cb, _0x246dbf, _0x209127, 0x20);
      }
      __defProp(_0x307395, 'name', {
        'value': "crypto_verify_32",
        'configurable': true
      });
      function _0x1ed537(_0x3236be, _0x3bbcef, _0x2ec9f0, _0xdf5a31) {
        var _0x26b2ac = _0xdf5a31[0x0] & 0xff | (_0xdf5a31[0x1] & 0xff) << 0x8 | (_0xdf5a31[0x2] & 0xff) << 0x10 | (_0xdf5a31[0x3] & 0xff) << 0x18;
        var _0x42d575 = _0x2ec9f0[0x0] & 0xff | (_0x2ec9f0[0x1] & 0xff) << 0x8 | (_0x2ec9f0[0x2] & 0xff) << 0x10 | (_0x2ec9f0[0x3] & 0xff) << 0x18;
        var _0x546ccb = _0x2ec9f0[0x4] & 0xff | (_0x2ec9f0[0x5] & 0xff) << 0x8 | (_0x2ec9f0[0x6] & 0xff) << 0x10 | (_0x2ec9f0[0x7] & 0xff) << 0x18;
        var _0x134c93 = _0x2ec9f0[0x8] & 0xff | (_0x2ec9f0[0x9] & 0xff) << 0x8 | (_0x2ec9f0[0xa] & 0xff) << 0x10 | (_0x2ec9f0[0xb] & 0xff) << 0x18;
        var _0x4ed5e5 = _0x2ec9f0[0xc] & 0xff | (_0x2ec9f0[0xd] & 0xff) << 0x8 | (_0x2ec9f0[0xe] & 0xff) << 0x10 | (_0x2ec9f0[0xf] & 0xff) << 0x18;
        var _0x5305d9 = _0xdf5a31[0x4] & 0xff | (_0xdf5a31[0x5] & 0xff) << 0x8 | (_0xdf5a31[0x6] & 0xff) << 0x10 | (_0xdf5a31[0x7] & 0xff) << 0x18;
        var _0x447401 = _0x3bbcef[0x0] & 0xff | (_0x3bbcef[0x1] & 0xff) << 0x8 | (_0x3bbcef[0x2] & 0xff) << 0x10 | (_0x3bbcef[0x3] & 0xff) << 0x18;
        var _0xbf1526 = _0x3bbcef[0x4] & 0xff | (_0x3bbcef[0x5] & 0xff) << 0x8 | (_0x3bbcef[0x6] & 0xff) << 0x10 | (_0x3bbcef[0x7] & 0xff) << 0x18;
        var _0x2f324e = _0x3bbcef[0x8] & 0xff | (_0x3bbcef[0x9] & 0xff) << 0x8 | (_0x3bbcef[0xa] & 0xff) << 0x10 | (_0x3bbcef[0xb] & 0xff) << 0x18;
        var _0x19c541 = _0x3bbcef[0xc] & 0xff | (_0x3bbcef[0xd] & 0xff) << 0x8 | (_0x3bbcef[0xe] & 0xff) << 0x10 | (_0x3bbcef[0xf] & 0xff) << 0x18;
        var _0x1a8db2 = _0xdf5a31[0x8] & 0xff | (_0xdf5a31[0x9] & 0xff) << 0x8 | (_0xdf5a31[0xa] & 0xff) << 0x10 | (_0xdf5a31[0xb] & 0xff) << 0x18;
        var _0x11fa65 = _0x2ec9f0[0x10] & 0xff | (_0x2ec9f0[0x11] & 0xff) << 0x8 | (_0x2ec9f0[0x12] & 0xff) << 0x10 | (_0x2ec9f0[0x13] & 0xff) << 0x18;
        var _0x92e9c5 = _0x2ec9f0[0x14] & 0xff | (_0x2ec9f0[0x15] & 0xff) << 0x8 | (_0x2ec9f0[0x16] & 0xff) << 0x10 | (_0x2ec9f0[0x17] & 0xff) << 0x18;
        var _0x410b8c = _0x2ec9f0[0x18] & 0xff | (_0x2ec9f0[0x19] & 0xff) << 0x8 | (_0x2ec9f0[0x1a] & 0xff) << 0x10 | (_0x2ec9f0[0x1b] & 0xff) << 0x18;
        var _0x2d4e65 = _0x2ec9f0[0x1c] & 0xff | (_0x2ec9f0[0x1d] & 0xff) << 0x8 | (_0x2ec9f0[0x1e] & 0xff) << 0x10 | (_0x2ec9f0[0x1f] & 0xff) << 0x18;
        var _0x173582 = _0xdf5a31[0xc] & 0xff | (_0xdf5a31[0xd] & 0xff) << 0x8 | (_0xdf5a31[0xe] & 0xff) << 0x10 | (_0xdf5a31[0xf] & 0xff) << 0x18;
        var _0x5667d0 = _0x26b2ac;
        var _0x10a527 = _0x42d575;
        var _0x58239a = _0x546ccb;
        var _0x2c787b = _0x134c93;
        var _0x3316f7 = _0x4ed5e5;
        var _0x432e36 = _0x5305d9;
        var _0x2af1ee = _0x447401;
        var _0x29f8f6 = _0xbf1526;
        var _0x1d38d8 = _0x2f324e;
        var _0x2a801c = _0x19c541;
        var _0x28c7b5 = _0x1a8db2;
        var _0x56ad3e = _0x11fa65;
        var _0x4fc729 = _0x92e9c5;
        var _0xf1f6d9 = _0x410b8c;
        var _0x51c56d = _0x2d4e65;
        var _0x42fbb0 = _0x173582;
        var _0x29c7a1;
        for (var _0xac36fb = 0x0; _0xac36fb < 0x14; _0xac36fb += 0x2) {
          _0x29c7a1 = _0x5667d0 + _0x4fc729 | 0x0;
          _0x3316f7 ^= _0x29c7a1 << 0x7 | _0x29c7a1 >>> 25;
          _0x29c7a1 = _0x3316f7 + _0x5667d0 | 0x0;
          _0x1d38d8 ^= _0x29c7a1 << 0x9 | _0x29c7a1 >>> 23;
          _0x29c7a1 = _0x1d38d8 + _0x3316f7 | 0x0;
          _0x4fc729 ^= _0x29c7a1 << 0xd | _0x29c7a1 >>> 19;
          _0x29c7a1 = _0x4fc729 + _0x1d38d8 | 0x0;
          _0x5667d0 ^= _0x29c7a1 << 0x12 | _0x29c7a1 >>> 14;
          _0x29c7a1 = _0x432e36 + _0x10a527 | 0x0;
          _0x2a801c ^= _0x29c7a1 << 0x7 | _0x29c7a1 >>> 25;
          _0x29c7a1 = _0x2a801c + _0x432e36 | 0x0;
          _0xf1f6d9 ^= _0x29c7a1 << 0x9 | _0x29c7a1 >>> 23;
          _0x29c7a1 = _0xf1f6d9 + _0x2a801c | 0x0;
          _0x10a527 ^= _0x29c7a1 << 0xd | _0x29c7a1 >>> 19;
          _0x29c7a1 = _0x10a527 + _0xf1f6d9 | 0x0;
          _0x432e36 ^= _0x29c7a1 << 0x12 | _0x29c7a1 >>> 14;
          _0x29c7a1 = _0x28c7b5 + _0x2af1ee | 0x0;
          _0x51c56d ^= _0x29c7a1 << 0x7 | _0x29c7a1 >>> 25;
          _0x29c7a1 = _0x51c56d + _0x28c7b5 | 0x0;
          _0x58239a ^= _0x29c7a1 << 0x9 | _0x29c7a1 >>> 23;
          _0x29c7a1 = _0x58239a + _0x51c56d | 0x0;
          _0x2af1ee ^= _0x29c7a1 << 0xd | _0x29c7a1 >>> 19;
          _0x29c7a1 = _0x2af1ee + _0x58239a | 0x0;
          _0x28c7b5 ^= _0x29c7a1 << 0x12 | _0x29c7a1 >>> 14;
          _0x29c7a1 = _0x42fbb0 + _0x56ad3e | 0x0;
          _0x2c787b ^= _0x29c7a1 << 0x7 | _0x29c7a1 >>> 25;
          _0x29c7a1 = _0x2c787b + _0x42fbb0 | 0x0;
          _0x29f8f6 ^= _0x29c7a1 << 0x9 | _0x29c7a1 >>> 23;
          _0x29c7a1 = _0x29f8f6 + _0x2c787b | 0x0;
          _0x56ad3e ^= _0x29c7a1 << 0xd | _0x29c7a1 >>> 19;
          _0x29c7a1 = _0x56ad3e + _0x29f8f6 | 0x0;
          _0x42fbb0 ^= _0x29c7a1 << 0x12 | _0x29c7a1 >>> 14;
          _0x29c7a1 = _0x5667d0 + _0x2c787b | 0x0;
          _0x10a527 ^= _0x29c7a1 << 0x7 | _0x29c7a1 >>> 25;
          _0x29c7a1 = _0x10a527 + _0x5667d0 | 0x0;
          _0x58239a ^= _0x29c7a1 << 0x9 | _0x29c7a1 >>> 23;
          _0x29c7a1 = _0x58239a + _0x10a527 | 0x0;
          _0x2c787b ^= _0x29c7a1 << 0xd | _0x29c7a1 >>> 19;
          _0x29c7a1 = _0x2c787b + _0x58239a | 0x0;
          _0x5667d0 ^= _0x29c7a1 << 0x12 | _0x29c7a1 >>> 14;
          _0x29c7a1 = _0x432e36 + _0x3316f7 | 0x0;
          _0x2af1ee ^= _0x29c7a1 << 0x7 | _0x29c7a1 >>> 25;
          _0x29c7a1 = _0x2af1ee + _0x432e36 | 0x0;
          _0x29f8f6 ^= _0x29c7a1 << 0x9 | _0x29c7a1 >>> 23;
          _0x29c7a1 = _0x29f8f6 + _0x2af1ee | 0x0;
          _0x3316f7 ^= _0x29c7a1 << 0xd | _0x29c7a1 >>> 19;
          _0x29c7a1 = _0x3316f7 + _0x29f8f6 | 0x0;
          _0x432e36 ^= _0x29c7a1 << 0x12 | _0x29c7a1 >>> 14;
          _0x29c7a1 = _0x28c7b5 + _0x2a801c | 0x0;
          _0x56ad3e ^= _0x29c7a1 << 0x7 | _0x29c7a1 >>> 25;
          _0x29c7a1 = _0x56ad3e + _0x28c7b5 | 0x0;
          _0x1d38d8 ^= _0x29c7a1 << 0x9 | _0x29c7a1 >>> 23;
          _0x29c7a1 = _0x1d38d8 + _0x56ad3e | 0x0;
          _0x2a801c ^= _0x29c7a1 << 0xd | _0x29c7a1 >>> 19;
          _0x29c7a1 = _0x2a801c + _0x1d38d8 | 0x0;
          _0x28c7b5 ^= _0x29c7a1 << 0x12 | _0x29c7a1 >>> 14;
          _0x29c7a1 = _0x42fbb0 + _0x51c56d | 0x0;
          _0x4fc729 ^= _0x29c7a1 << 0x7 | _0x29c7a1 >>> 25;
          _0x29c7a1 = _0x4fc729 + _0x42fbb0 | 0x0;
          _0xf1f6d9 ^= _0x29c7a1 << 0x9 | _0x29c7a1 >>> 23;
          _0x29c7a1 = _0xf1f6d9 + _0x4fc729 | 0x0;
          _0x51c56d ^= _0x29c7a1 << 0xd | _0x29c7a1 >>> 19;
          _0x29c7a1 = _0x51c56d + _0xf1f6d9 | 0x0;
          _0x42fbb0 ^= _0x29c7a1 << 0x12 | _0x29c7a1 >>> 14;
        }
        _0x5667d0 = _0x5667d0 + _0x26b2ac | 0x0;
        _0x10a527 = _0x10a527 + _0x42d575 | 0x0;
        _0x58239a = _0x58239a + _0x546ccb | 0x0;
        _0x2c787b = _0x2c787b + _0x134c93 | 0x0;
        _0x3316f7 = _0x3316f7 + _0x4ed5e5 | 0x0;
        _0x432e36 = _0x432e36 + _0x5305d9 | 0x0;
        _0x2af1ee = _0x2af1ee + _0x447401 | 0x0;
        _0x29f8f6 = _0x29f8f6 + _0xbf1526 | 0x0;
        _0x1d38d8 = _0x1d38d8 + _0x2f324e | 0x0;
        _0x2a801c = _0x2a801c + _0x19c541 | 0x0;
        _0x28c7b5 = _0x28c7b5 + _0x1a8db2 | 0x0;
        _0x56ad3e = _0x56ad3e + _0x11fa65 | 0x0;
        _0x4fc729 = _0x4fc729 + _0x92e9c5 | 0x0;
        _0xf1f6d9 = _0xf1f6d9 + _0x410b8c | 0x0;
        _0x51c56d = _0x51c56d + _0x2d4e65 | 0x0;
        _0x42fbb0 = _0x42fbb0 + _0x173582 | 0x0;
        _0x3236be[0x0] = _0x5667d0 >>> 0x0 & 0xff;
        _0x3236be[0x1] = _0x5667d0 >>> 0x8 & 0xff;
        _0x3236be[0x2] = _0x5667d0 >>> 0x10 & 0xff;
        _0x3236be[0x3] = _0x5667d0 >>> 0x18 & 0xff;
        _0x3236be[0x4] = _0x10a527 >>> 0x0 & 0xff;
        _0x3236be[0x5] = _0x10a527 >>> 0x8 & 0xff;
        _0x3236be[0x6] = _0x10a527 >>> 0x10 & 0xff;
        _0x3236be[0x7] = _0x10a527 >>> 0x18 & 0xff;
        _0x3236be[0x8] = _0x58239a >>> 0x0 & 0xff;
        _0x3236be[0x9] = _0x58239a >>> 0x8 & 0xff;
        _0x3236be[0xa] = _0x58239a >>> 0x10 & 0xff;
        _0x3236be[0xb] = _0x58239a >>> 0x18 & 0xff;
        _0x3236be[0xc] = _0x2c787b >>> 0x0 & 0xff;
        _0x3236be[0xd] = _0x2c787b >>> 0x8 & 0xff;
        _0x3236be[0xe] = _0x2c787b >>> 0x10 & 0xff;
        _0x3236be[0xf] = _0x2c787b >>> 0x18 & 0xff;
        _0x3236be[0x10] = _0x3316f7 >>> 0x0 & 0xff;
        _0x3236be[0x11] = _0x3316f7 >>> 0x8 & 0xff;
        _0x3236be[0x12] = _0x3316f7 >>> 0x10 & 0xff;
        _0x3236be[0x13] = _0x3316f7 >>> 0x18 & 0xff;
        _0x3236be[0x14] = _0x432e36 >>> 0x0 & 0xff;
        _0x3236be[0x15] = _0x432e36 >>> 0x8 & 0xff;
        _0x3236be[0x16] = _0x432e36 >>> 0x10 & 0xff;
        _0x3236be[0x17] = _0x432e36 >>> 0x18 & 0xff;
        _0x3236be[0x18] = _0x2af1ee >>> 0x0 & 0xff;
        _0x3236be[0x19] = _0x2af1ee >>> 0x8 & 0xff;
        _0x3236be[0x1a] = _0x2af1ee >>> 0x10 & 0xff;
        _0x3236be[0x1b] = _0x2af1ee >>> 0x18 & 0xff;
        _0x3236be[0x1c] = _0x29f8f6 >>> 0x0 & 0xff;
        _0x3236be[0x1d] = _0x29f8f6 >>> 0x8 & 0xff;
        _0x3236be[0x1e] = _0x29f8f6 >>> 0x10 & 0xff;
        _0x3236be[0x1f] = _0x29f8f6 >>> 0x18 & 0xff;
        _0x3236be[0x20] = _0x1d38d8 >>> 0x0 & 0xff;
        _0x3236be[0x21] = _0x1d38d8 >>> 0x8 & 0xff;
        _0x3236be[0x22] = _0x1d38d8 >>> 0x10 & 0xff;
        _0x3236be[0x23] = _0x1d38d8 >>> 0x18 & 0xff;
        _0x3236be[0x24] = _0x2a801c >>> 0x0 & 0xff;
        _0x3236be[0x25] = _0x2a801c >>> 0x8 & 0xff;
        _0x3236be[0x26] = _0x2a801c >>> 0x10 & 0xff;
        _0x3236be[0x27] = _0x2a801c >>> 0x18 & 0xff;
        _0x3236be[0x28] = _0x28c7b5 >>> 0x0 & 0xff;
        _0x3236be[0x29] = _0x28c7b5 >>> 0x8 & 0xff;
        _0x3236be[0x2a] = _0x28c7b5 >>> 0x10 & 0xff;
        _0x3236be[0x2b] = _0x28c7b5 >>> 0x18 & 0xff;
        _0x3236be[0x2c] = _0x56ad3e >>> 0x0 & 0xff;
        _0x3236be[0x2d] = _0x56ad3e >>> 0x8 & 0xff;
        _0x3236be[0x2e] = _0x56ad3e >>> 0x10 & 0xff;
        _0x3236be[0x2f] = _0x56ad3e >>> 0x18 & 0xff;
        _0x3236be[0x30] = _0x4fc729 >>> 0x0 & 0xff;
        _0x3236be[0x31] = _0x4fc729 >>> 0x8 & 0xff;
        _0x3236be[0x32] = _0x4fc729 >>> 0x10 & 0xff;
        _0x3236be[0x33] = _0x4fc729 >>> 0x18 & 0xff;
        _0x3236be[0x34] = _0xf1f6d9 >>> 0x0 & 0xff;
        _0x3236be[0x35] = _0xf1f6d9 >>> 0x8 & 0xff;
        _0x3236be[0x36] = _0xf1f6d9 >>> 0x10 & 0xff;
        _0x3236be[0x37] = _0xf1f6d9 >>> 0x18 & 0xff;
        _0x3236be[0x38] = _0x51c56d >>> 0x0 & 0xff;
        _0x3236be[0x39] = _0x51c56d >>> 0x8 & 0xff;
        _0x3236be[0x3a] = _0x51c56d >>> 0x10 & 0xff;
        _0x3236be[0x3b] = _0x51c56d >>> 0x18 & 0xff;
        _0x3236be[0x3c] = _0x42fbb0 >>> 0x0 & 0xff;
        _0x3236be[0x3d] = _0x42fbb0 >>> 0x8 & 0xff;
        _0x3236be[0x3e] = _0x42fbb0 >>> 0x10 & 0xff;
        _0x3236be[0x3f] = _0x42fbb0 >>> 0x18 & 0xff;
      }
      __defProp(_0x1ed537, 'name', {
        'value': "core_salsa20",
        'configurable': true
      });
      function _0x549e08(_0x10951a, _0x1a65af, _0x4e9874, _0x53052c) {
        var _0x108755 = _0x53052c[0x0] & 0xff | (_0x53052c[0x1] & 0xff) << 0x8 | (_0x53052c[0x2] & 0xff) << 0x10 | (_0x53052c[0x3] & 0xff) << 0x18;
        var _0x98a84e = _0x4e9874[0x0] & 0xff | (_0x4e9874[0x1] & 0xff) << 0x8 | (_0x4e9874[0x2] & 0xff) << 0x10 | (_0x4e9874[0x3] & 0xff) << 0x18;
        var _0x53a8c0 = _0x4e9874[0x4] & 0xff | (_0x4e9874[0x5] & 0xff) << 0x8 | (_0x4e9874[0x6] & 0xff) << 0x10 | (_0x4e9874[0x7] & 0xff) << 0x18;
        var _0x8c790b = _0x4e9874[0x8] & 0xff | (_0x4e9874[0x9] & 0xff) << 0x8 | (_0x4e9874[0xa] & 0xff) << 0x10 | (_0x4e9874[0xb] & 0xff) << 0x18;
        var _0x2be755 = _0x4e9874[0xc] & 0xff | (_0x4e9874[0xd] & 0xff) << 0x8 | (_0x4e9874[0xe] & 0xff) << 0x10 | (_0x4e9874[0xf] & 0xff) << 0x18;
        var _0x4121a9 = _0x53052c[0x4] & 0xff | (_0x53052c[0x5] & 0xff) << 0x8 | (_0x53052c[0x6] & 0xff) << 0x10 | (_0x53052c[0x7] & 0xff) << 0x18;
        var _0x39e483 = _0x1a65af[0x0] & 0xff | (_0x1a65af[0x1] & 0xff) << 0x8 | (_0x1a65af[0x2] & 0xff) << 0x10 | (_0x1a65af[0x3] & 0xff) << 0x18;
        var _0x4df71c = _0x1a65af[0x4] & 0xff | (_0x1a65af[0x5] & 0xff) << 0x8 | (_0x1a65af[0x6] & 0xff) << 0x10 | (_0x1a65af[0x7] & 0xff) << 0x18;
        var _0x32e5ed = _0x1a65af[0x8] & 0xff | (_0x1a65af[0x9] & 0xff) << 0x8 | (_0x1a65af[0xa] & 0xff) << 0x10 | (_0x1a65af[0xb] & 0xff) << 0x18;
        var _0x263e16 = _0x1a65af[0xc] & 0xff | (_0x1a65af[0xd] & 0xff) << 0x8 | (_0x1a65af[0xe] & 0xff) << 0x10 | (_0x1a65af[0xf] & 0xff) << 0x18;
        var _0x31cb84 = _0x53052c[0x8] & 0xff | (_0x53052c[0x9] & 0xff) << 0x8 | (_0x53052c[0xa] & 0xff) << 0x10 | (_0x53052c[0xb] & 0xff) << 0x18;
        var _0x12b19d = _0x4e9874[0x10] & 0xff | (_0x4e9874[0x11] & 0xff) << 0x8 | (_0x4e9874[0x12] & 0xff) << 0x10 | (_0x4e9874[0x13] & 0xff) << 0x18;
        var _0xd9eae9 = _0x4e9874[0x14] & 0xff | (_0x4e9874[0x15] & 0xff) << 0x8 | (_0x4e9874[0x16] & 0xff) << 0x10 | (_0x4e9874[0x17] & 0xff) << 0x18;
        var _0x4cacc0 = _0x4e9874[0x18] & 0xff | (_0x4e9874[0x19] & 0xff) << 0x8 | (_0x4e9874[0x1a] & 0xff) << 0x10 | (_0x4e9874[0x1b] & 0xff) << 0x18;
        var _0x3e3ae7 = _0x4e9874[0x1c] & 0xff | (_0x4e9874[0x1d] & 0xff) << 0x8 | (_0x4e9874[0x1e] & 0xff) << 0x10 | (_0x4e9874[0x1f] & 0xff) << 0x18;
        var _0x2d1bbc = _0x53052c[0xc] & 0xff | (_0x53052c[0xd] & 0xff) << 0x8 | (_0x53052c[0xe] & 0xff) << 0x10 | (_0x53052c[0xf] & 0xff) << 0x18;
        var _0x4ab598 = _0x108755;
        var _0x5d6b04 = _0x98a84e;
        var _0x5d4ad5 = _0x53a8c0;
        var _0x5759eb = _0x8c790b;
        var _0x31214d = _0x2be755;
        var _0x29802e = _0x4121a9;
        var _0x3db18b = _0x39e483;
        var _0x48de52 = _0x4df71c;
        var _0x89f181 = _0x32e5ed;
        var _0x2792a4 = _0x263e16;
        var _0x542fa6 = _0x31cb84;
        var _0x10862a = _0x12b19d;
        var _0x50f54c = _0xd9eae9;
        var _0x134431 = _0x4cacc0;
        var _0x472eed = _0x3e3ae7;
        var _0x4fdf0c = _0x2d1bbc;
        var _0x260933;
        for (var _0x5f09ed = 0x0; _0x5f09ed < 0x14; _0x5f09ed += 0x2) {
          _0x260933 = _0x4ab598 + _0x50f54c | 0x0;
          _0x31214d ^= _0x260933 << 0x7 | _0x260933 >>> 25;
          _0x260933 = _0x31214d + _0x4ab598 | 0x0;
          _0x89f181 ^= _0x260933 << 0x9 | _0x260933 >>> 23;
          _0x260933 = _0x89f181 + _0x31214d | 0x0;
          _0x50f54c ^= _0x260933 << 0xd | _0x260933 >>> 19;
          _0x260933 = _0x50f54c + _0x89f181 | 0x0;
          _0x4ab598 ^= _0x260933 << 0x12 | _0x260933 >>> 14;
          _0x260933 = _0x29802e + _0x5d6b04 | 0x0;
          _0x2792a4 ^= _0x260933 << 0x7 | _0x260933 >>> 25;
          _0x260933 = _0x2792a4 + _0x29802e | 0x0;
          _0x134431 ^= _0x260933 << 0x9 | _0x260933 >>> 23;
          _0x260933 = _0x134431 + _0x2792a4 | 0x0;
          _0x5d6b04 ^= _0x260933 << 0xd | _0x260933 >>> 19;
          _0x260933 = _0x5d6b04 + _0x134431 | 0x0;
          _0x29802e ^= _0x260933 << 0x12 | _0x260933 >>> 14;
          _0x260933 = _0x542fa6 + _0x3db18b | 0x0;
          _0x472eed ^= _0x260933 << 0x7 | _0x260933 >>> 25;
          _0x260933 = _0x472eed + _0x542fa6 | 0x0;
          _0x5d4ad5 ^= _0x260933 << 0x9 | _0x260933 >>> 23;
          _0x260933 = _0x5d4ad5 + _0x472eed | 0x0;
          _0x3db18b ^= _0x260933 << 0xd | _0x260933 >>> 19;
          _0x260933 = _0x3db18b + _0x5d4ad5 | 0x0;
          _0x542fa6 ^= _0x260933 << 0x12 | _0x260933 >>> 14;
          _0x260933 = _0x4fdf0c + _0x10862a | 0x0;
          _0x5759eb ^= _0x260933 << 0x7 | _0x260933 >>> 25;
          _0x260933 = _0x5759eb + _0x4fdf0c | 0x0;
          _0x48de52 ^= _0x260933 << 0x9 | _0x260933 >>> 23;
          _0x260933 = _0x48de52 + _0x5759eb | 0x0;
          _0x10862a ^= _0x260933 << 0xd | _0x260933 >>> 19;
          _0x260933 = _0x10862a + _0x48de52 | 0x0;
          _0x4fdf0c ^= _0x260933 << 0x12 | _0x260933 >>> 14;
          _0x260933 = _0x4ab598 + _0x5759eb | 0x0;
          _0x5d6b04 ^= _0x260933 << 0x7 | _0x260933 >>> 25;
          _0x260933 = _0x5d6b04 + _0x4ab598 | 0x0;
          _0x5d4ad5 ^= _0x260933 << 0x9 | _0x260933 >>> 23;
          _0x260933 = _0x5d4ad5 + _0x5d6b04 | 0x0;
          _0x5759eb ^= _0x260933 << 0xd | _0x260933 >>> 19;
          _0x260933 = _0x5759eb + _0x5d4ad5 | 0x0;
          _0x4ab598 ^= _0x260933 << 0x12 | _0x260933 >>> 14;
          _0x260933 = _0x29802e + _0x31214d | 0x0;
          _0x3db18b ^= _0x260933 << 0x7 | _0x260933 >>> 25;
          _0x260933 = _0x3db18b + _0x29802e | 0x0;
          _0x48de52 ^= _0x260933 << 0x9 | _0x260933 >>> 23;
          _0x260933 = _0x48de52 + _0x3db18b | 0x0;
          _0x31214d ^= _0x260933 << 0xd | _0x260933 >>> 19;
          _0x260933 = _0x31214d + _0x48de52 | 0x0;
          _0x29802e ^= _0x260933 << 0x12 | _0x260933 >>> 14;
          _0x260933 = _0x542fa6 + _0x2792a4 | 0x0;
          _0x10862a ^= _0x260933 << 0x7 | _0x260933 >>> 25;
          _0x260933 = _0x10862a + _0x542fa6 | 0x0;
          _0x89f181 ^= _0x260933 << 0x9 | _0x260933 >>> 23;
          _0x260933 = _0x89f181 + _0x10862a | 0x0;
          _0x2792a4 ^= _0x260933 << 0xd | _0x260933 >>> 19;
          _0x260933 = _0x2792a4 + _0x89f181 | 0x0;
          _0x542fa6 ^= _0x260933 << 0x12 | _0x260933 >>> 14;
          _0x260933 = _0x4fdf0c + _0x472eed | 0x0;
          _0x50f54c ^= _0x260933 << 0x7 | _0x260933 >>> 25;
          _0x260933 = _0x50f54c + _0x4fdf0c | 0x0;
          _0x134431 ^= _0x260933 << 0x9 | _0x260933 >>> 23;
          _0x260933 = _0x134431 + _0x50f54c | 0x0;
          _0x472eed ^= _0x260933 << 0xd | _0x260933 >>> 19;
          _0x260933 = _0x472eed + _0x134431 | 0x0;
          _0x4fdf0c ^= _0x260933 << 0x12 | _0x260933 >>> 14;
        }
        _0x10951a[0x0] = _0x4ab598 >>> 0x0 & 0xff;
        _0x10951a[0x1] = _0x4ab598 >>> 0x8 & 0xff;
        _0x10951a[0x2] = _0x4ab598 >>> 0x10 & 0xff;
        _0x10951a[0x3] = _0x4ab598 >>> 0x18 & 0xff;
        _0x10951a[0x4] = _0x29802e >>> 0x0 & 0xff;
        _0x10951a[0x5] = _0x29802e >>> 0x8 & 0xff;
        _0x10951a[0x6] = _0x29802e >>> 0x10 & 0xff;
        _0x10951a[0x7] = _0x29802e >>> 0x18 & 0xff;
        _0x10951a[0x8] = _0x542fa6 >>> 0x0 & 0xff;
        _0x10951a[0x9] = _0x542fa6 >>> 0x8 & 0xff;
        _0x10951a[0xa] = _0x542fa6 >>> 0x10 & 0xff;
        _0x10951a[0xb] = _0x542fa6 >>> 0x18 & 0xff;
        _0x10951a[0xc] = _0x4fdf0c >>> 0x0 & 0xff;
        _0x10951a[0xd] = _0x4fdf0c >>> 0x8 & 0xff;
        _0x10951a[0xe] = _0x4fdf0c >>> 0x10 & 0xff;
        _0x10951a[0xf] = _0x4fdf0c >>> 0x18 & 0xff;
        _0x10951a[0x10] = _0x3db18b >>> 0x0 & 0xff;
        _0x10951a[0x11] = _0x3db18b >>> 0x8 & 0xff;
        _0x10951a[0x12] = _0x3db18b >>> 0x10 & 0xff;
        _0x10951a[0x13] = _0x3db18b >>> 0x18 & 0xff;
        _0x10951a[0x14] = _0x48de52 >>> 0x0 & 0xff;
        _0x10951a[0x15] = _0x48de52 >>> 0x8 & 0xff;
        _0x10951a[0x16] = _0x48de52 >>> 0x10 & 0xff;
        _0x10951a[0x17] = _0x48de52 >>> 0x18 & 0xff;
        _0x10951a[0x18] = _0x89f181 >>> 0x0 & 0xff;
        _0x10951a[0x19] = _0x89f181 >>> 0x8 & 0xff;
        _0x10951a[0x1a] = _0x89f181 >>> 0x10 & 0xff;
        _0x10951a[0x1b] = _0x89f181 >>> 0x18 & 0xff;
        _0x10951a[0x1c] = _0x2792a4 >>> 0x0 & 0xff;
        _0x10951a[0x1d] = _0x2792a4 >>> 0x8 & 0xff;
        _0x10951a[0x1e] = _0x2792a4 >>> 0x10 & 0xff;
        _0x10951a[0x1f] = _0x2792a4 >>> 0x18 & 0xff;
      }
      __defProp(_0x549e08, 'name', {
        'value': "core_hsalsa20",
        'configurable': true
      });
      function _0x524829(_0x5b12c6, _0x71119a, _0xbf678, _0x322f90) {
        _0x1ed537(_0x5b12c6, _0x71119a, _0xbf678, _0x322f90);
      }
      __defProp(_0x524829, 'name', {
        'value': "crypto_core_salsa20",
        'configurable': true
      });
      function _0x1bc7f4(_0x1810b2, _0x5b51fd, _0x5d4f12, _0x4e129b) {
        _0x549e08(_0x1810b2, _0x5b51fd, _0x5d4f12, _0x4e129b);
      }
      __defProp(_0x1bc7f4, 'name', {
        'value': "crypto_core_hsalsa20",
        'configurable': true
      });
      var _0xffb49b = new Uint8Array([0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x20, 0x33, 0x32, 0x2d, 0x62, 0x79, 0x74, 0x65, 0x20, 0x6b]);
      function _0x1431be(_0x2c84b4, _0xb2a0be, _0x4a405e, _0x32b69d, _0x55f98a, _0x532aa8, _0x80f1f3) {
        var _0x38e988 = new Uint8Array(0x10);
        var _0xb69193 = new Uint8Array(0x40);
        var _0x3d0c65;
        var _0x1cce98;
        for (_0x1cce98 = 0x0; _0x1cce98 < 0x10; _0x1cce98++) {
          _0x38e988[_0x1cce98] = 0x0;
        }
        for (_0x1cce98 = 0x0; _0x1cce98 < 0x8; _0x1cce98++) {
          _0x38e988[_0x1cce98] = _0x532aa8[_0x1cce98];
        }
        while (_0x55f98a >= 0x40) {
          _0x524829(_0xb69193, _0x38e988, _0x80f1f3, _0xffb49b);
          for (_0x1cce98 = 0x0; _0x1cce98 < 0x40; _0x1cce98++) {
            _0x2c84b4[_0xb2a0be + _0x1cce98] = _0x4a405e[_0x32b69d + _0x1cce98] ^ _0xb69193[_0x1cce98];
          }
          _0x3d0c65 = 0x1;
          for (_0x1cce98 = 0x8; _0x1cce98 < 0x10; _0x1cce98++) {
            _0x3d0c65 = _0x3d0c65 + (_0x38e988[_0x1cce98] & 0xff) | 0x0;
            _0x38e988[_0x1cce98] = _0x3d0c65 & 0xff;
            _0x3d0c65 >>>= 0x8;
          }
          _0x55f98a -= 0x40;
          _0xb2a0be += 0x40;
          _0x32b69d += 0x40;
        }
        if (_0x55f98a > 0x0) {
          _0x524829(_0xb69193, _0x38e988, _0x80f1f3, _0xffb49b);
          for (_0x1cce98 = 0x0; _0x1cce98 < _0x55f98a; _0x1cce98++) {
            _0x2c84b4[_0xb2a0be + _0x1cce98] = _0x4a405e[_0x32b69d + _0x1cce98] ^ _0xb69193[_0x1cce98];
          }
        }
        return 0x0;
      }
      __defProp(_0x1431be, 'name', {
        'value': "crypto_stream_salsa20_xor",
        'configurable': true
      });
      function _0x43c9ba(_0x51b77f, _0x3c4c8a, _0x15f571, _0x3fe344, _0x166af9) {
        var _0x516507 = new Uint8Array(0x10);
        var _0x58f1ba = new Uint8Array(0x40);
        var _0x50965a;
        var _0x5a1ac5;
        for (_0x5a1ac5 = 0x0; _0x5a1ac5 < 0x10; _0x5a1ac5++) {
          _0x516507[_0x5a1ac5] = 0x0;
        }
        for (_0x5a1ac5 = 0x0; _0x5a1ac5 < 0x8; _0x5a1ac5++) {
          _0x516507[_0x5a1ac5] = _0x3fe344[_0x5a1ac5];
        }
        while (_0x15f571 >= 0x40) {
          _0x524829(_0x58f1ba, _0x516507, _0x166af9, _0xffb49b);
          for (_0x5a1ac5 = 0x0; _0x5a1ac5 < 0x40; _0x5a1ac5++) {
            _0x51b77f[_0x3c4c8a + _0x5a1ac5] = _0x58f1ba[_0x5a1ac5];
          }
          _0x50965a = 0x1;
          for (_0x5a1ac5 = 0x8; _0x5a1ac5 < 0x10; _0x5a1ac5++) {
            _0x50965a = _0x50965a + (_0x516507[_0x5a1ac5] & 0xff) | 0x0;
            _0x516507[_0x5a1ac5] = _0x50965a & 0xff;
            _0x50965a >>>= 0x8;
          }
          _0x15f571 -= 0x40;
          _0x3c4c8a += 0x40;
        }
        if (_0x15f571 > 0x0) {
          _0x524829(_0x58f1ba, _0x516507, _0x166af9, _0xffb49b);
          for (_0x5a1ac5 = 0x0; _0x5a1ac5 < _0x15f571; _0x5a1ac5++) {
            _0x51b77f[_0x3c4c8a + _0x5a1ac5] = _0x58f1ba[_0x5a1ac5];
          }
        }
        return 0x0;
      }
      __defProp(_0x43c9ba, 'name', {
        'value': "crypto_stream_salsa20",
        'configurable': true
      });
      function _0x684a5e(_0x5138cb, _0x252e8a, _0x2ce597, _0x5364f7, _0x4090dc) {
        var _0x6dd4e6 = new Uint8Array(0x20);
        _0x1bc7f4(_0x6dd4e6, _0x5364f7, _0x4090dc, _0xffb49b);
        var _0x689a30 = new Uint8Array(0x8);
        for (var _0x13e5b2 = 0x0; _0x13e5b2 < 0x8; _0x13e5b2++) {
          _0x689a30[_0x13e5b2] = _0x5364f7[_0x13e5b2 + 0x10];
        }
        return _0x43c9ba(_0x5138cb, _0x252e8a, _0x2ce597, _0x689a30, _0x6dd4e6);
      }
      __defProp(_0x684a5e, 'name', {
        'value': "crypto_stream",
        'configurable': true
      });
      function _0x4a38b7(_0xa642e6, _0x2eb010, _0x56d436, _0x34a469, _0x1a218c, _0x5545bb, _0x17adb8) {
        var _0x4bbc95 = new Uint8Array(0x20);
        _0x1bc7f4(_0x4bbc95, _0x5545bb, _0x17adb8, _0xffb49b);
        var _0x41b2d5 = new Uint8Array(0x8);
        for (var _0xc62b10 = 0x0; _0xc62b10 < 0x8; _0xc62b10++) {
          _0x41b2d5[_0xc62b10] = _0x5545bb[_0xc62b10 + 0x10];
        }
        return _0x1431be(_0xa642e6, _0x2eb010, _0x56d436, _0x34a469, _0x1a218c, _0x41b2d5, _0x4bbc95);
      }
      __defProp(_0x4a38b7, 'name', {
        'value': 'crypto_stream_xor',
        'configurable': true
      });
      var _0x3d85c3 = __defProp(function (_0x205d45) {
        this.buffer = new Uint8Array(0x10);
        this.r = new Uint16Array(0xa);
        this.h = new Uint16Array(0xa);
        this.pad = new Uint16Array(0x8);
        this.leftover = 0x0;
        this.fin = 0x0;
        var _0x2b88dc;
        var _0x161e39;
        var _0x2fd668;
        var _0x391beb;
        var _0x311ff9;
        var _0xe8e738;
        var _0x31e5f4;
        var _0x59b415;
        _0x2b88dc = _0x205d45[0x0] & 0xff | (_0x205d45[0x1] & 0xff) << 0x8;
        this.r[0x0] = _0x2b88dc & 0x1fff;
        _0x161e39 = _0x205d45[0x2] & 0xff | (_0x205d45[0x3] & 0xff) << 0x8;
        this.r[0x1] = (_0x2b88dc >>> 0xd | _0x161e39 << 0x3) & 0x1fff;
        _0x2fd668 = _0x205d45[0x4] & 0xff | (_0x205d45[0x5] & 0xff) << 0x8;
        this.r[0x2] = (_0x161e39 >>> 0xa | _0x2fd668 << 0x6) & 0x1f03;
        _0x391beb = _0x205d45[0x6] & 0xff | (_0x205d45[0x7] & 0xff) << 0x8;
        this.r[0x3] = (_0x2fd668 >>> 0x7 | _0x391beb << 0x9) & 0x1fff;
        _0x311ff9 = _0x205d45[0x8] & 0xff | (_0x205d45[0x9] & 0xff) << 0x8;
        this.r[0x4] = (_0x391beb >>> 0x4 | _0x311ff9 << 0xc) & 0xff;
        this.r[0x5] = _0x311ff9 >>> 0x1 & 0x1ffe;
        _0xe8e738 = _0x205d45[0xa] & 0xff | (_0x205d45[0xb] & 0xff) << 0x8;
        this.r[0x6] = (_0x311ff9 >>> 0xe | _0xe8e738 << 0x2) & 0x1fff;
        _0x31e5f4 = _0x205d45[0xc] & 0xff | (_0x205d45[0xd] & 0xff) << 0x8;
        this.r[0x7] = (_0xe8e738 >>> 0xb | _0x31e5f4 << 0x5) & 0x1f81;
        _0x59b415 = _0x205d45[0xe] & 0xff | (_0x205d45[0xf] & 0xff) << 0x8;
        this.r[0x8] = (_0x31e5f4 >>> 0x8 | _0x59b415 << 0x8) & 0x1fff;
        this.r[0x9] = _0x59b415 >>> 0x5 & 0x7f;
        this.pad[0x0] = _0x205d45[0x10] & 0xff | (_0x205d45[0x11] & 0xff) << 0x8;
        this.pad[0x1] = _0x205d45[0x12] & 0xff | (_0x205d45[0x13] & 0xff) << 0x8;
        this.pad[0x2] = _0x205d45[0x14] & 0xff | (_0x205d45[0x15] & 0xff) << 0x8;
        this.pad[0x3] = _0x205d45[0x16] & 0xff | (_0x205d45[0x17] & 0xff) << 0x8;
        this.pad[0x4] = _0x205d45[0x18] & 0xff | (_0x205d45[0x19] & 0xff) << 0x8;
        this.pad[0x5] = _0x205d45[0x1a] & 0xff | (_0x205d45[0x1b] & 0xff) << 0x8;
        this.pad[0x6] = _0x205d45[0x1c] & 0xff | (_0x205d45[0x1d] & 0xff) << 0x8;
        this.pad[0x7] = _0x205d45[0x1e] & 0xff | (_0x205d45[0x1f] & 0xff) << 0x8;
      }, 'name', {
        'value': 'poly1305',
        'configurable': true
      });
      _0x3d85c3.prototype.blocks = function (_0x160e15, _0x4084ad, _0x3f76c5) {
        var _0x285937 = this.fin ? 0x0 : 2048;
        var _0x434092;
        var _0xac0371;
        var _0x307b85;
        var _0x1561f7;
        var _0x1f9fe9;
        var _0x3b6b98;
        var _0x2b985d;
        var _0xc53f0e;
        var _0x4a4843;
        var _0x513176;
        var _0x29f7c;
        var _0x28652d;
        var _0x33e98e;
        var _0x102e05;
        var _0x32df21;
        var _0x58b4dd;
        var _0x4c2dfc;
        var _0x55996a;
        var _0x21fc83;
        var _0x3d08e7 = this.h[0x0];
        var _0x130bf2 = this.h[0x1];
        var _0x1fe7f1 = this.h[0x2];
        var _0x3a38d7 = this.h[0x3];
        var _0x30d208 = this.h[0x4];
        var _0x5ab2aa = this.h[0x5];
        var _0x4f4f85 = this.h[0x6];
        var _0x8f9d6b = this.h[0x7];
        var _0xdddf5c = this.h[0x8];
        var _0x104c8c = this.h[0x9];
        var _0x546b01 = this.r[0x0];
        var _0x1e33de = this.r[0x1];
        var _0x53d2df = this.r[0x2];
        var _0x1e345b = this.r[0x3];
        var _0x364c8b = this.r[0x4];
        var _0x59d750 = this.r[0x5];
        var _0x3988a7 = this.r[0x6];
        var _0x38954a = this.r[0x7];
        var _0x2ab32d = this.r[0x8];
        var _0x4251e6 = this.r[0x9];
        while (_0x3f76c5 >= 0x10) {
          _0x434092 = _0x160e15[_0x4084ad + 0x0] & 0xff | (_0x160e15[_0x4084ad + 0x1] & 0xff) << 0x8;
          _0x3d08e7 += _0x434092 & 0x1fff;
          _0xac0371 = _0x160e15[_0x4084ad + 0x2] & 0xff | (_0x160e15[_0x4084ad + 0x3] & 0xff) << 0x8;
          _0x130bf2 += (_0x434092 >>> 0xd | _0xac0371 << 0x3) & 0x1fff;
          _0x307b85 = _0x160e15[_0x4084ad + 0x4] & 0xff | (_0x160e15[_0x4084ad + 0x5] & 0xff) << 0x8;
          _0x1fe7f1 += (_0xac0371 >>> 0xa | _0x307b85 << 0x6) & 0x1fff;
          _0x1561f7 = _0x160e15[_0x4084ad + 0x6] & 0xff | (_0x160e15[_0x4084ad + 0x7] & 0xff) << 0x8;
          _0x3a38d7 += (_0x307b85 >>> 0x7 | _0x1561f7 << 0x9) & 0x1fff;
          _0x1f9fe9 = _0x160e15[_0x4084ad + 0x8] & 0xff | (_0x160e15[_0x4084ad + 0x9] & 0xff) << 0x8;
          _0x30d208 += (_0x1561f7 >>> 0x4 | _0x1f9fe9 << 0xc) & 0x1fff;
          _0x5ab2aa += _0x1f9fe9 >>> 0x1 & 0x1fff;
          _0x3b6b98 = _0x160e15[_0x4084ad + 0xa] & 0xff | (_0x160e15[_0x4084ad + 0xb] & 0xff) << 0x8;
          _0x4f4f85 += (_0x1f9fe9 >>> 0xe | _0x3b6b98 << 0x2) & 0x1fff;
          _0x2b985d = _0x160e15[_0x4084ad + 0xc] & 0xff | (_0x160e15[_0x4084ad + 0xd] & 0xff) << 0x8;
          _0x8f9d6b += (_0x3b6b98 >>> 0xb | _0x2b985d << 0x5) & 0x1fff;
          _0xc53f0e = _0x160e15[_0x4084ad + 0xe] & 0xff | (_0x160e15[_0x4084ad + 0xf] & 0xff) << 0x8;
          _0xdddf5c += (_0x2b985d >>> 0x8 | _0xc53f0e << 0x8) & 0x1fff;
          _0x104c8c += _0xc53f0e >>> 0x5 | _0x285937;
          _0x4a4843 = 0x0;
          _0x513176 = _0x4a4843;
          _0x513176 += _0x3d08e7 * _0x546b01;
          _0x513176 += _0x130bf2 * (0x5 * _0x4251e6);
          _0x513176 += _0x1fe7f1 * (0x5 * _0x2ab32d);
          _0x513176 += _0x3a38d7 * (0x5 * _0x38954a);
          _0x513176 += _0x30d208 * (0x5 * _0x3988a7);
          _0x4a4843 = _0x513176 >>> 0xd;
          _0x513176 &= 0x1fff;
          _0x513176 += _0x5ab2aa * (0x5 * _0x59d750);
          _0x513176 += _0x4f4f85 * (0x5 * _0x364c8b);
          _0x513176 += _0x8f9d6b * (0x5 * _0x1e345b);
          _0x513176 += _0xdddf5c * (0x5 * _0x53d2df);
          _0x513176 += _0x104c8c * (0x5 * _0x1e33de);
          _0x4a4843 += _0x513176 >>> 0xd;
          _0x513176 &= 0x1fff;
          _0x29f7c = _0x4a4843;
          _0x29f7c += _0x3d08e7 * _0x1e33de;
          _0x29f7c += _0x130bf2 * _0x546b01;
          _0x29f7c += _0x1fe7f1 * (0x5 * _0x4251e6);
          _0x29f7c += _0x3a38d7 * (0x5 * _0x2ab32d);
          _0x29f7c += _0x30d208 * (0x5 * _0x38954a);
          _0x4a4843 = _0x29f7c >>> 0xd;
          _0x29f7c &= 0x1fff;
          _0x29f7c += _0x5ab2aa * (0x5 * _0x3988a7);
          _0x29f7c += _0x4f4f85 * (0x5 * _0x59d750);
          _0x29f7c += _0x8f9d6b * (0x5 * _0x364c8b);
          _0x29f7c += _0xdddf5c * (0x5 * _0x1e345b);
          _0x29f7c += _0x104c8c * (0x5 * _0x53d2df);
          _0x4a4843 += _0x29f7c >>> 0xd;
          _0x29f7c &= 0x1fff;
          _0x28652d = _0x4a4843;
          _0x28652d += _0x3d08e7 * _0x53d2df;
          _0x28652d += _0x130bf2 * _0x1e33de;
          _0x28652d += _0x1fe7f1 * _0x546b01;
          _0x28652d += _0x3a38d7 * (0x5 * _0x4251e6);
          _0x28652d += _0x30d208 * (0x5 * _0x2ab32d);
          _0x4a4843 = _0x28652d >>> 0xd;
          _0x28652d &= 0x1fff;
          _0x28652d += _0x5ab2aa * (0x5 * _0x38954a);
          _0x28652d += _0x4f4f85 * (0x5 * _0x3988a7);
          _0x28652d += _0x8f9d6b * (0x5 * _0x59d750);
          _0x28652d += _0xdddf5c * (0x5 * _0x364c8b);
          _0x28652d += _0x104c8c * (0x5 * _0x1e345b);
          _0x4a4843 += _0x28652d >>> 0xd;
          _0x28652d &= 0x1fff;
          _0x33e98e = _0x4a4843;
          _0x33e98e += _0x3d08e7 * _0x1e345b;
          _0x33e98e += _0x130bf2 * _0x53d2df;
          _0x33e98e += _0x1fe7f1 * _0x1e33de;
          _0x33e98e += _0x3a38d7 * _0x546b01;
          _0x33e98e += _0x30d208 * (0x5 * _0x4251e6);
          _0x4a4843 = _0x33e98e >>> 0xd;
          _0x33e98e &= 0x1fff;
          _0x33e98e += _0x5ab2aa * (0x5 * _0x2ab32d);
          _0x33e98e += _0x4f4f85 * (0x5 * _0x38954a);
          _0x33e98e += _0x8f9d6b * (0x5 * _0x3988a7);
          _0x33e98e += _0xdddf5c * (0x5 * _0x59d750);
          _0x33e98e += _0x104c8c * (0x5 * _0x364c8b);
          _0x4a4843 += _0x33e98e >>> 0xd;
          _0x33e98e &= 0x1fff;
          _0x102e05 = _0x4a4843;
          _0x102e05 += _0x3d08e7 * _0x364c8b;
          _0x102e05 += _0x130bf2 * _0x1e345b;
          _0x102e05 += _0x1fe7f1 * _0x53d2df;
          _0x102e05 += _0x3a38d7 * _0x1e33de;
          _0x102e05 += _0x30d208 * _0x546b01;
          _0x4a4843 = _0x102e05 >>> 0xd;
          _0x102e05 &= 0x1fff;
          _0x102e05 += _0x5ab2aa * (0x5 * _0x4251e6);
          _0x102e05 += _0x4f4f85 * (0x5 * _0x2ab32d);
          _0x102e05 += _0x8f9d6b * (0x5 * _0x38954a);
          _0x102e05 += _0xdddf5c * (0x5 * _0x3988a7);
          _0x102e05 += _0x104c8c * (0x5 * _0x59d750);
          _0x4a4843 += _0x102e05 >>> 0xd;
          _0x102e05 &= 0x1fff;
          _0x32df21 = _0x4a4843;
          _0x32df21 += _0x3d08e7 * _0x59d750;
          _0x32df21 += _0x130bf2 * _0x364c8b;
          _0x32df21 += _0x1fe7f1 * _0x1e345b;
          _0x32df21 += _0x3a38d7 * _0x53d2df;
          _0x32df21 += _0x30d208 * _0x1e33de;
          _0x4a4843 = _0x32df21 >>> 0xd;
          _0x32df21 &= 0x1fff;
          _0x32df21 += _0x5ab2aa * _0x546b01;
          _0x32df21 += _0x4f4f85 * (0x5 * _0x4251e6);
          _0x32df21 += _0x8f9d6b * (0x5 * _0x2ab32d);
          _0x32df21 += _0xdddf5c * (0x5 * _0x38954a);
          _0x32df21 += _0x104c8c * (0x5 * _0x3988a7);
          _0x4a4843 += _0x32df21 >>> 0xd;
          _0x32df21 &= 0x1fff;
          _0x58b4dd = _0x4a4843;
          _0x58b4dd += _0x3d08e7 * _0x3988a7;
          _0x58b4dd += _0x130bf2 * _0x59d750;
          _0x58b4dd += _0x1fe7f1 * _0x364c8b;
          _0x58b4dd += _0x3a38d7 * _0x1e345b;
          _0x58b4dd += _0x30d208 * _0x53d2df;
          _0x4a4843 = _0x58b4dd >>> 0xd;
          _0x58b4dd &= 0x1fff;
          _0x58b4dd += _0x5ab2aa * _0x1e33de;
          _0x58b4dd += _0x4f4f85 * _0x546b01;
          _0x58b4dd += _0x8f9d6b * (0x5 * _0x4251e6);
          _0x58b4dd += _0xdddf5c * (0x5 * _0x2ab32d);
          _0x58b4dd += _0x104c8c * (0x5 * _0x38954a);
          _0x4a4843 += _0x58b4dd >>> 0xd;
          _0x58b4dd &= 0x1fff;
          _0x4c2dfc = _0x4a4843;
          _0x4c2dfc += _0x3d08e7 * _0x38954a;
          _0x4c2dfc += _0x130bf2 * _0x3988a7;
          _0x4c2dfc += _0x1fe7f1 * _0x59d750;
          _0x4c2dfc += _0x3a38d7 * _0x364c8b;
          _0x4c2dfc += _0x30d208 * _0x1e345b;
          _0x4a4843 = _0x4c2dfc >>> 0xd;
          _0x4c2dfc &= 0x1fff;
          _0x4c2dfc += _0x5ab2aa * _0x53d2df;
          _0x4c2dfc += _0x4f4f85 * _0x1e33de;
          _0x4c2dfc += _0x8f9d6b * _0x546b01;
          _0x4c2dfc += _0xdddf5c * (0x5 * _0x4251e6);
          _0x4c2dfc += _0x104c8c * (0x5 * _0x2ab32d);
          _0x4a4843 += _0x4c2dfc >>> 0xd;
          _0x4c2dfc &= 0x1fff;
          _0x55996a = _0x4a4843;
          _0x55996a += _0x3d08e7 * _0x2ab32d;
          _0x55996a += _0x130bf2 * _0x38954a;
          _0x55996a += _0x1fe7f1 * _0x3988a7;
          _0x55996a += _0x3a38d7 * _0x59d750;
          _0x55996a += _0x30d208 * _0x364c8b;
          _0x4a4843 = _0x55996a >>> 0xd;
          _0x55996a &= 0x1fff;
          _0x55996a += _0x5ab2aa * _0x1e345b;
          _0x55996a += _0x4f4f85 * _0x53d2df;
          _0x55996a += _0x8f9d6b * _0x1e33de;
          _0x55996a += _0xdddf5c * _0x546b01;
          _0x55996a += _0x104c8c * (0x5 * _0x4251e6);
          _0x4a4843 += _0x55996a >>> 0xd;
          _0x55996a &= 0x1fff;
          _0x21fc83 = _0x4a4843;
          _0x21fc83 += _0x3d08e7 * _0x4251e6;
          _0x21fc83 += _0x130bf2 * _0x2ab32d;
          _0x21fc83 += _0x1fe7f1 * _0x38954a;
          _0x21fc83 += _0x3a38d7 * _0x3988a7;
          _0x21fc83 += _0x30d208 * _0x59d750;
          _0x4a4843 = _0x21fc83 >>> 0xd;
          _0x21fc83 &= 0x1fff;
          _0x21fc83 += _0x5ab2aa * _0x364c8b;
          _0x21fc83 += _0x4f4f85 * _0x1e345b;
          _0x21fc83 += _0x8f9d6b * _0x53d2df;
          _0x21fc83 += _0xdddf5c * _0x1e33de;
          _0x21fc83 += _0x104c8c * _0x546b01;
          _0x4a4843 += _0x21fc83 >>> 0xd;
          _0x21fc83 &= 0x1fff;
          _0x4a4843 = (_0x4a4843 << 0x2) + _0x4a4843 | 0x0;
          _0x4a4843 = _0x4a4843 + _0x513176 | 0x0;
          _0x513176 = _0x4a4843 & 0x1fff;
          _0x4a4843 = _0x4a4843 >>> 0xd;
          _0x29f7c += _0x4a4843;
          _0x3d08e7 = _0x513176;
          _0x130bf2 = _0x29f7c;
          _0x1fe7f1 = _0x28652d;
          _0x3a38d7 = _0x33e98e;
          _0x30d208 = _0x102e05;
          _0x5ab2aa = _0x32df21;
          _0x4f4f85 = _0x58b4dd;
          _0x8f9d6b = _0x4c2dfc;
          _0xdddf5c = _0x55996a;
          _0x104c8c = _0x21fc83;
          _0x4084ad += 0x10;
          _0x3f76c5 -= 0x10;
        }
        this.h[0x0] = _0x3d08e7;
        this.h[0x1] = _0x130bf2;
        this.h[0x2] = _0x1fe7f1;
        this.h[0x3] = _0x3a38d7;
        this.h[0x4] = _0x30d208;
        this.h[0x5] = _0x5ab2aa;
        this.h[0x6] = _0x4f4f85;
        this.h[0x7] = _0x8f9d6b;
        this.h[0x8] = _0xdddf5c;
        this.h[0x9] = _0x104c8c;
      };
      _0x3d85c3.prototype.finish = function (_0x417300, _0xd25650) {
        var _0x1a7166 = new Uint16Array(0xa);
        var _0x408782;
        var _0x30a2a4;
        var _0x1091cb;
        var _0x1e101e;
        if (this.leftover) {
          _0x1e101e = this.leftover;
          this.buffer[_0x1e101e++] = 0x1;
          for (; _0x1e101e < 0x10; _0x1e101e++) {
            this.buffer[_0x1e101e] = 0x0;
          }
          this.fin = 0x1;
          this.blocks(this.buffer, 0x0, 0x10);
        }
        _0x408782 = this.h[0x1] >>> 0xd;
        this.h[0x1] &= 0x1fff;
        for (_0x1e101e = 0x2; _0x1e101e < 0xa; _0x1e101e++) {
          this.h[_0x1e101e] += _0x408782;
          _0x408782 = this.h[_0x1e101e] >>> 0xd;
          this.h[_0x1e101e] &= 0x1fff;
        }
        this.h[0x0] += _0x408782 * 0x5;
        _0x408782 = this.h[0x0] >>> 0xd;
        this.h[0x0] &= 0x1fff;
        this.h[0x1] += _0x408782;
        _0x408782 = this.h[0x1] >>> 0xd;
        this.h[0x1] &= 0x1fff;
        this.h[0x2] += _0x408782;
        _0x1a7166[0x0] = this.h[0x0] + 0x5;
        _0x408782 = _0x1a7166[0x0] >>> 0xd;
        _0x1a7166[0x0] &= 0x1fff;
        for (_0x1e101e = 0x1; _0x1e101e < 0xa; _0x1e101e++) {
          _0x1a7166[_0x1e101e] = this.h[_0x1e101e] + _0x408782;
          _0x408782 = _0x1a7166[_0x1e101e] >>> 0xd;
          _0x1a7166[_0x1e101e] &= 0x1fff;
        }
        _0x1a7166[0x9] -= 8192;
        _0x30a2a4 = (_0x408782 ^ 0x1) - 0x1;
        for (_0x1e101e = 0x0; _0x1e101e < 0xa; _0x1e101e++) {
          _0x1a7166[_0x1e101e] &= _0x30a2a4;
        }
        _0x30a2a4 = ~_0x30a2a4;
        for (_0x1e101e = 0x0; _0x1e101e < 0xa; _0x1e101e++) {
          this.h[_0x1e101e] = this.h[_0x1e101e] & _0x30a2a4 | _0x1a7166[_0x1e101e];
        }
        this.h[0x0] = (this.h[0x0] | this.h[0x1] << 0xd) & 0xffff;
        this.h[0x1] = (this.h[0x1] >>> 0x3 | this.h[0x2] << 0xa) & 0xffff;
        this.h[0x2] = (this.h[0x2] >>> 0x6 | this.h[0x3] << 0x7) & 0xffff;
        this.h[0x3] = (this.h[0x3] >>> 0x9 | this.h[0x4] << 0x4) & 0xffff;
        this.h[0x4] = (this.h[0x4] >>> 0xc | this.h[0x5] << 0x1 | this.h[0x6] << 0xe) & 0xffff;
        this.h[0x5] = (this.h[0x6] >>> 0x2 | this.h[0x7] << 0xb) & 0xffff;
        this.h[0x6] = (this.h[0x7] >>> 0x5 | this.h[0x8] << 0x8) & 0xffff;
        this.h[0x7] = (this.h[0x8] >>> 0x8 | this.h[0x9] << 0x5) & 0xffff;
        _0x1091cb = this.h[0x0] + this.pad[0x0];
        this.h[0x0] = _0x1091cb & 0xffff;
        for (_0x1e101e = 0x1; _0x1e101e < 0x8; _0x1e101e++) {
          _0x1091cb = (this.h[_0x1e101e] + this.pad[_0x1e101e] | 0x0) + (_0x1091cb >>> 0x10) | 0x0;
          this.h[_0x1e101e] = _0x1091cb & 0xffff;
        }
        _0x417300[_0xd25650 + 0x0] = this.h[0x0] >>> 0x0 & 0xff;
        _0x417300[_0xd25650 + 0x1] = this.h[0x0] >>> 0x8 & 0xff;
        _0x417300[_0xd25650 + 0x2] = this.h[0x1] >>> 0x0 & 0xff;
        _0x417300[_0xd25650 + 0x3] = this.h[0x1] >>> 0x8 & 0xff;
        _0x417300[_0xd25650 + 0x4] = this.h[0x2] >>> 0x0 & 0xff;
        _0x417300[_0xd25650 + 0x5] = this.h[0x2] >>> 0x8 & 0xff;
        _0x417300[_0xd25650 + 0x6] = this.h[0x3] >>> 0x0 & 0xff;
        _0x417300[_0xd25650 + 0x7] = this.h[0x3] >>> 0x8 & 0xff;
        _0x417300[_0xd25650 + 0x8] = this.h[0x4] >>> 0x0 & 0xff;
        _0x417300[_0xd25650 + 0x9] = this.h[0x4] >>> 0x8 & 0xff;
        _0x417300[_0xd25650 + 0xa] = this.h[0x5] >>> 0x0 & 0xff;
        _0x417300[_0xd25650 + 0xb] = this.h[0x5] >>> 0x8 & 0xff;
        _0x417300[_0xd25650 + 0xc] = this.h[0x6] >>> 0x0 & 0xff;
        _0x417300[_0xd25650 + 0xd] = this.h[0x6] >>> 0x8 & 0xff;
        _0x417300[_0xd25650 + 0xe] = this.h[0x7] >>> 0x0 & 0xff;
        _0x417300[_0xd25650 + 0xf] = this.h[0x7] >>> 0x8 & 0xff;
      };
      _0x3d85c3.prototype.update = function (_0x23108a, _0x313819, _0x502b5f) {
        var _0x42d4d9;
        var _0x257a99;
        if (this.leftover) {
          _0x257a99 = 0x10 - this.leftover;
          if (_0x257a99 > _0x502b5f) {
            _0x257a99 = _0x502b5f;
          }
          for (_0x42d4d9 = 0x0; _0x42d4d9 < _0x257a99; _0x42d4d9++) {
            this.buffer[this.leftover + _0x42d4d9] = _0x23108a[_0x313819 + _0x42d4d9];
          }
          _0x502b5f -= _0x257a99;
          _0x313819 += _0x257a99;
          this.leftover += _0x257a99;
          if (this.leftover < 0x10) {
            return;
          }
          this.blocks(this.buffer, 0x0, 0x10);
          this.leftover = 0x0;
        }
        if (_0x502b5f >= 0x10) {
          _0x257a99 = _0x502b5f - _0x502b5f % 0x10;
          this.blocks(_0x23108a, _0x313819, _0x257a99);
          _0x313819 += _0x257a99;
          _0x502b5f -= _0x257a99;
        }
        if (_0x502b5f) {
          for (_0x42d4d9 = 0x0; _0x42d4d9 < _0x502b5f; _0x42d4d9++) {
            this.buffer[this.leftover + _0x42d4d9] = _0x23108a[_0x313819 + _0x42d4d9];
          }
          this.leftover += _0x502b5f;
        }
      };
      function _0x205360(_0x524a82, _0x517198, _0x317526, _0x35a7a0, _0x19195f, _0x258204) {
        var _0x1137e8 = new _0x3d85c3(_0x258204);
        _0x1137e8.update(_0x317526, _0x35a7a0, _0x19195f);
        _0x1137e8.finish(_0x524a82, _0x517198);
        return 0x0;
      }
      __defProp(_0x205360, 'name', {
        'value': 'crypto_onetimeauth',
        'configurable': true
      });
      function _0x416b22(_0x30802f, _0x1584c9, _0x3cf732, _0x99ab61, _0x39e294, _0x2f26dd) {
        var _0x4fc63f = new Uint8Array(0x10);
        _0x205360(_0x4fc63f, 0x0, _0x3cf732, _0x99ab61, _0x39e294, _0x2f26dd);
        return _0x27a37b(_0x30802f, _0x1584c9, _0x4fc63f, 0x0, 0x10);
      }
      __defProp(_0x416b22, 'name', {
        'value': "crypto_onetimeauth_verify",
        'configurable': true
      });
      function _0x52721c(_0x1dc2eb, _0x134840, _0x15b464, _0xecbe05, _0x21a484) {
        var _0x3b3836;
        if (_0x15b464 < 0x20) {
          return -0x1;
        }
        _0x4a38b7(_0x1dc2eb, 0x0, _0x134840, 0x0, _0x15b464, _0xecbe05, _0x21a484);
        _0x205360(_0x1dc2eb, 0x10, _0x1dc2eb, 0x20, _0x15b464 - 0x20, _0x1dc2eb);
        for (_0x3b3836 = 0x0; _0x3b3836 < 0x10; _0x3b3836++) {
          _0x1dc2eb[_0x3b3836] = 0x0;
        }
        return 0x0;
      }
      __defProp(_0x52721c, 'name', {
        'value': "crypto_secretbox",
        'configurable': true
      });
      function _0x199844(_0x10dd4c, _0x55475d, _0x44d75e, _0x508158, _0x3b071e) {
        var _0x44777c;
        var _0x6427c5 = new Uint8Array(0x20);
        if (_0x44d75e < 0x20) {
          return -0x1;
        }
        _0x684a5e(_0x6427c5, 0x0, 0x20, _0x508158, _0x3b071e);
        if (_0x416b22(_0x55475d, 0x10, _0x55475d, 0x20, _0x44d75e - 0x20, _0x6427c5) !== 0x0) {
          return -0x1;
        }
        _0x4a38b7(_0x10dd4c, 0x0, _0x55475d, 0x0, _0x44d75e, _0x508158, _0x3b071e);
        for (_0x44777c = 0x0; _0x44777c < 0x20; _0x44777c++) {
          _0x10dd4c[_0x44777c] = 0x0;
        }
        return 0x0;
      }
      __defProp(_0x199844, 'name', {
        'value': "crypto_secretbox_open",
        'configurable': true
      });
      function _0x114d54(_0x5af2a4, _0x414b51) {
        var _0x418d70;
        for (_0x418d70 = 0x0; _0x418d70 < 0x10; _0x418d70++) {
          _0x5af2a4[_0x418d70] = _0x414b51[_0x418d70] | 0x0;
        }
      }
      __defProp(_0x114d54, 'name', {
        'value': "set25519",
        'configurable': true
      });
      function _0x99086f(_0x16ca9f) {
        var _0x269fa5;
        var _0x28d6f7;
        var _0x15d933 = 0x1;
        for (_0x269fa5 = 0x0; _0x269fa5 < 0x10; _0x269fa5++) {
          _0x28d6f7 = _0x16ca9f[_0x269fa5] + _0x15d933 + 0xffff;
          _0x15d933 = Math.floor(_0x28d6f7 / 0x10000);
          _0x16ca9f[_0x269fa5] = _0x28d6f7 - _0x15d933 * 0x10000;
        }
        _0x16ca9f[0x0] += _0x15d933 - 0x1 + 0x25 * (_0x15d933 - 0x1);
      }
      __defProp(_0x99086f, 'name', {
        'value': 'car25519',
        'configurable': true
      });
      function _0x41fb85(_0x22f140, _0x1f9444, _0x2f91fb) {
        var _0x1aa88c;
        var _0xf49693 = ~(_0x2f91fb - 0x1);
        for (var _0x5b06bf = 0x0; _0x5b06bf < 0x10; _0x5b06bf++) {
          _0x1aa88c = _0xf49693 & (_0x22f140[_0x5b06bf] ^ _0x1f9444[_0x5b06bf]);
          _0x22f140[_0x5b06bf] ^= _0x1aa88c;
          _0x1f9444[_0x5b06bf] ^= _0x1aa88c;
        }
      }
      __defProp(_0x41fb85, 'name', {
        'value': "sel25519",
        'configurable': true
      });
      function _0x3aa099(_0x2e3946, _0x481508) {
        var _0xceedd;
        var _0x47c18e;
        var _0x10de29;
        var _0x4b89b0 = _0x4ae1f2();
        var _0x3c06cb = _0x4ae1f2();
        for (_0xceedd = 0x0; _0xceedd < 0x10; _0xceedd++) {
          _0x3c06cb[_0xceedd] = _0x481508[_0xceedd];
        }
        _0x99086f(_0x3c06cb);
        _0x99086f(_0x3c06cb);
        _0x99086f(_0x3c06cb);
        for (_0x47c18e = 0x0; _0x47c18e < 0x2; _0x47c18e++) {
          _0x4b89b0[0x0] = _0x3c06cb[0x0] - 0xffed;
          for (_0xceedd = 0x1; _0xceedd < 0xf; _0xceedd++) {
            _0x4b89b0[_0xceedd] = _0x3c06cb[_0xceedd] - 0xffff - (_0x4b89b0[_0xceedd - 0x1] >> 0x10 & 0x1);
            _0x4b89b0[_0xceedd - 0x1] &= 0xffff;
          }
          _0x4b89b0[0xf] = _0x3c06cb[0xf] - 0x7fff - (_0x4b89b0[0xe] >> 0x10 & 0x1);
          _0x10de29 = _0x4b89b0[0xf] >> 0x10 & 0x1;
          _0x4b89b0[0xe] &= 0xffff;
          _0x41fb85(_0x3c06cb, _0x4b89b0, 0x1 - _0x10de29);
        }
        for (_0xceedd = 0x0; _0xceedd < 0x10; _0xceedd++) {
          _0x2e3946[0x2 * _0xceedd] = _0x3c06cb[_0xceedd] & 0xff;
          _0x2e3946[0x2 * _0xceedd + 0x1] = _0x3c06cb[_0xceedd] >> 0x8;
        }
      }
      __defProp(_0x3aa099, 'name', {
        'value': "pack25519",
        'configurable': true
      });
      function _0x3f1c73(_0x1d8b13, _0x5a2efe) {
        var _0x24c1d7 = new Uint8Array(0x20);
        var _0x4dfd16 = new Uint8Array(0x20);
        _0x3aa099(_0x24c1d7, _0x1d8b13);
        _0x3aa099(_0x4dfd16, _0x5a2efe);
        return _0x27a37b(_0x24c1d7, 0x0, _0x4dfd16, 0x0, 0x20);
      }
      __defProp(_0x3f1c73, 'name', {
        'value': "neq25519",
        'configurable': true
      });
      function _0x3882b9(_0x5437ff) {
        var _0x272420 = new Uint8Array(0x20);
        _0x3aa099(_0x272420, _0x5437ff);
        return _0x272420[0x0] & 0x1;
      }
      __defProp(_0x3882b9, 'name', {
        'value': "par25519",
        'configurable': true
      });
      function _0x1c927e(_0x56881b, _0x2c93b0) {
        var _0x18652d;
        for (_0x18652d = 0x0; _0x18652d < 0x10; _0x18652d++) {
          _0x56881b[_0x18652d] = _0x2c93b0[0x2 * _0x18652d] + (_0x2c93b0[0x2 * _0x18652d + 0x1] << 0x8);
        }
        _0x56881b[0xf] &= 0x7fff;
      }
      __defProp(_0x1c927e, 'name', {
        'value': "unpack25519",
        'configurable': true
      });
      function _0x5080f7(_0x5b8983, _0x1a9130, _0x20648f) {
        for (var _0x76487f = 0x0; _0x76487f < 0x10; _0x76487f++) {
          _0x5b8983[_0x76487f] = _0x1a9130[_0x76487f] + _0x20648f[_0x76487f];
        }
      }
      __defProp(_0x5080f7, 'name', {
        'value': 'A',
        'configurable': true
      });
      function _0x316440(_0x4d7eb9, _0x19376b, _0x54b8ee) {
        for (var _0x2d0bba = 0x0; _0x2d0bba < 0x10; _0x2d0bba++) {
          _0x4d7eb9[_0x2d0bba] = _0x19376b[_0x2d0bba] - _0x54b8ee[_0x2d0bba];
        }
      }
      __defProp(_0x316440, 'name', {
        'value': 'Z',
        'configurable': true
      });
      function _0xee6269(_0x270051, _0x262ee5, _0x2a2a47) {
        var _0xd8c396;
        var _0x3a3277;
        var _0x3281c9 = 0x0;
        var _0x2a4876 = 0x0;
        var _0x5157a6 = 0x0;
        var _0x5e88a8 = 0x0;
        var _0x1cb026 = 0x0;
        var _0x1632bc = 0x0;
        var _0x18b730 = 0x0;
        var _0x358738 = 0x0;
        var _0x3c3dcb = 0x0;
        var _0xa8dcdb = 0x0;
        var _0x5b74c4 = 0x0;
        var _0x2330a3 = 0x0;
        var _0x5a12cd = 0x0;
        var _0x30df19 = 0x0;
        var _0x151fdb = 0x0;
        var _0x3b0aef = 0x0;
        var _0x3b1044 = 0x0;
        var _0x29b135 = 0x0;
        var _0xee6b4a = 0x0;
        var _0x2b7b28 = 0x0;
        var _0x16056c = 0x0;
        var _0x346dbc = 0x0;
        var _0x1a921a = 0x0;
        var _0x211f54 = 0x0;
        var _0x4266a5 = 0x0;
        var _0x5738fd = 0x0;
        var _0x5136db = 0x0;
        var _0x167b2d = 0x0;
        var _0x4b4be6 = 0x0;
        var _0xa00596 = 0x0;
        var _0x4fdfc5 = 0x0;
        var _0x3525a0 = _0x2a2a47[0x0];
        var _0x268639 = _0x2a2a47[0x1];
        var _0x407194 = _0x2a2a47[0x2];
        var _0x75b2eb = _0x2a2a47[0x3];
        var _0x6a31c3 = _0x2a2a47[0x4];
        var _0x47d3e8 = _0x2a2a47[0x5];
        var _0x253ed8 = _0x2a2a47[0x6];
        var _0x1bc787 = _0x2a2a47[0x7];
        var _0x7a7e = _0x2a2a47[0x8];
        var _0x8e6cf8 = _0x2a2a47[0x9];
        var _0x24e531 = _0x2a2a47[0xa];
        var _0x40975b = _0x2a2a47[0xb];
        var _0x19f17c = _0x2a2a47[0xc];
        var _0x45cf78 = _0x2a2a47[0xd];
        var _0x366c1e = _0x2a2a47[0xe];
        var _0x11a6f4 = _0x2a2a47[0xf];
        _0xd8c396 = _0x262ee5[0x0];
        _0x3281c9 += _0xd8c396 * _0x3525a0;
        _0x2a4876 += _0xd8c396 * _0x268639;
        _0x5157a6 += _0xd8c396 * _0x407194;
        _0x5e88a8 += _0xd8c396 * _0x75b2eb;
        _0x1cb026 += _0xd8c396 * _0x6a31c3;
        _0x1632bc += _0xd8c396 * _0x47d3e8;
        _0x18b730 += _0xd8c396 * _0x253ed8;
        _0x358738 += _0xd8c396 * _0x1bc787;
        _0x3c3dcb += _0xd8c396 * _0x7a7e;
        _0xa8dcdb += _0xd8c396 * _0x8e6cf8;
        _0x5b74c4 += _0xd8c396 * _0x24e531;
        _0x2330a3 += _0xd8c396 * _0x40975b;
        _0x5a12cd += _0xd8c396 * _0x19f17c;
        _0x30df19 += _0xd8c396 * _0x45cf78;
        _0x151fdb += _0xd8c396 * _0x366c1e;
        _0x3b0aef += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x1];
        _0x2a4876 += _0xd8c396 * _0x3525a0;
        _0x5157a6 += _0xd8c396 * _0x268639;
        _0x5e88a8 += _0xd8c396 * _0x407194;
        _0x1cb026 += _0xd8c396 * _0x75b2eb;
        _0x1632bc += _0xd8c396 * _0x6a31c3;
        _0x18b730 += _0xd8c396 * _0x47d3e8;
        _0x358738 += _0xd8c396 * _0x253ed8;
        _0x3c3dcb += _0xd8c396 * _0x1bc787;
        _0xa8dcdb += _0xd8c396 * _0x7a7e;
        _0x5b74c4 += _0xd8c396 * _0x8e6cf8;
        _0x2330a3 += _0xd8c396 * _0x24e531;
        _0x5a12cd += _0xd8c396 * _0x40975b;
        _0x30df19 += _0xd8c396 * _0x19f17c;
        _0x151fdb += _0xd8c396 * _0x45cf78;
        _0x3b0aef += _0xd8c396 * _0x366c1e;
        _0x3b1044 += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x2];
        _0x5157a6 += _0xd8c396 * _0x3525a0;
        _0x5e88a8 += _0xd8c396 * _0x268639;
        _0x1cb026 += _0xd8c396 * _0x407194;
        _0x1632bc += _0xd8c396 * _0x75b2eb;
        _0x18b730 += _0xd8c396 * _0x6a31c3;
        _0x358738 += _0xd8c396 * _0x47d3e8;
        _0x3c3dcb += _0xd8c396 * _0x253ed8;
        _0xa8dcdb += _0xd8c396 * _0x1bc787;
        _0x5b74c4 += _0xd8c396 * _0x7a7e;
        _0x2330a3 += _0xd8c396 * _0x8e6cf8;
        _0x5a12cd += _0xd8c396 * _0x24e531;
        _0x30df19 += _0xd8c396 * _0x40975b;
        _0x151fdb += _0xd8c396 * _0x19f17c;
        _0x3b0aef += _0xd8c396 * _0x45cf78;
        _0x3b1044 += _0xd8c396 * _0x366c1e;
        _0x29b135 += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x3];
        _0x5e88a8 += _0xd8c396 * _0x3525a0;
        _0x1cb026 += _0xd8c396 * _0x268639;
        _0x1632bc += _0xd8c396 * _0x407194;
        _0x18b730 += _0xd8c396 * _0x75b2eb;
        _0x358738 += _0xd8c396 * _0x6a31c3;
        _0x3c3dcb += _0xd8c396 * _0x47d3e8;
        _0xa8dcdb += _0xd8c396 * _0x253ed8;
        _0x5b74c4 += _0xd8c396 * _0x1bc787;
        _0x2330a3 += _0xd8c396 * _0x7a7e;
        _0x5a12cd += _0xd8c396 * _0x8e6cf8;
        _0x30df19 += _0xd8c396 * _0x24e531;
        _0x151fdb += _0xd8c396 * _0x40975b;
        _0x3b0aef += _0xd8c396 * _0x19f17c;
        _0x3b1044 += _0xd8c396 * _0x45cf78;
        _0x29b135 += _0xd8c396 * _0x366c1e;
        _0xee6b4a += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x4];
        _0x1cb026 += _0xd8c396 * _0x3525a0;
        _0x1632bc += _0xd8c396 * _0x268639;
        _0x18b730 += _0xd8c396 * _0x407194;
        _0x358738 += _0xd8c396 * _0x75b2eb;
        _0x3c3dcb += _0xd8c396 * _0x6a31c3;
        _0xa8dcdb += _0xd8c396 * _0x47d3e8;
        _0x5b74c4 += _0xd8c396 * _0x253ed8;
        _0x2330a3 += _0xd8c396 * _0x1bc787;
        _0x5a12cd += _0xd8c396 * _0x7a7e;
        _0x30df19 += _0xd8c396 * _0x8e6cf8;
        _0x151fdb += _0xd8c396 * _0x24e531;
        _0x3b0aef += _0xd8c396 * _0x40975b;
        _0x3b1044 += _0xd8c396 * _0x19f17c;
        _0x29b135 += _0xd8c396 * _0x45cf78;
        _0xee6b4a += _0xd8c396 * _0x366c1e;
        _0x2b7b28 += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x5];
        _0x1632bc += _0xd8c396 * _0x3525a0;
        _0x18b730 += _0xd8c396 * _0x268639;
        _0x358738 += _0xd8c396 * _0x407194;
        _0x3c3dcb += _0xd8c396 * _0x75b2eb;
        _0xa8dcdb += _0xd8c396 * _0x6a31c3;
        _0x5b74c4 += _0xd8c396 * _0x47d3e8;
        _0x2330a3 += _0xd8c396 * _0x253ed8;
        _0x5a12cd += _0xd8c396 * _0x1bc787;
        _0x30df19 += _0xd8c396 * _0x7a7e;
        _0x151fdb += _0xd8c396 * _0x8e6cf8;
        _0x3b0aef += _0xd8c396 * _0x24e531;
        _0x3b1044 += _0xd8c396 * _0x40975b;
        _0x29b135 += _0xd8c396 * _0x19f17c;
        _0xee6b4a += _0xd8c396 * _0x45cf78;
        _0x2b7b28 += _0xd8c396 * _0x366c1e;
        _0x16056c += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x6];
        _0x18b730 += _0xd8c396 * _0x3525a0;
        _0x358738 += _0xd8c396 * _0x268639;
        _0x3c3dcb += _0xd8c396 * _0x407194;
        _0xa8dcdb += _0xd8c396 * _0x75b2eb;
        _0x5b74c4 += _0xd8c396 * _0x6a31c3;
        _0x2330a3 += _0xd8c396 * _0x47d3e8;
        _0x5a12cd += _0xd8c396 * _0x253ed8;
        _0x30df19 += _0xd8c396 * _0x1bc787;
        _0x151fdb += _0xd8c396 * _0x7a7e;
        _0x3b0aef += _0xd8c396 * _0x8e6cf8;
        _0x3b1044 += _0xd8c396 * _0x24e531;
        _0x29b135 += _0xd8c396 * _0x40975b;
        _0xee6b4a += _0xd8c396 * _0x19f17c;
        _0x2b7b28 += _0xd8c396 * _0x45cf78;
        _0x16056c += _0xd8c396 * _0x366c1e;
        _0x346dbc += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x7];
        _0x358738 += _0xd8c396 * _0x3525a0;
        _0x3c3dcb += _0xd8c396 * _0x268639;
        _0xa8dcdb += _0xd8c396 * _0x407194;
        _0x5b74c4 += _0xd8c396 * _0x75b2eb;
        _0x2330a3 += _0xd8c396 * _0x6a31c3;
        _0x5a12cd += _0xd8c396 * _0x47d3e8;
        _0x30df19 += _0xd8c396 * _0x253ed8;
        _0x151fdb += _0xd8c396 * _0x1bc787;
        _0x3b0aef += _0xd8c396 * _0x7a7e;
        _0x3b1044 += _0xd8c396 * _0x8e6cf8;
        _0x29b135 += _0xd8c396 * _0x24e531;
        _0xee6b4a += _0xd8c396 * _0x40975b;
        _0x2b7b28 += _0xd8c396 * _0x19f17c;
        _0x16056c += _0xd8c396 * _0x45cf78;
        _0x346dbc += _0xd8c396 * _0x366c1e;
        _0x1a921a += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x8];
        _0x3c3dcb += _0xd8c396 * _0x3525a0;
        _0xa8dcdb += _0xd8c396 * _0x268639;
        _0x5b74c4 += _0xd8c396 * _0x407194;
        _0x2330a3 += _0xd8c396 * _0x75b2eb;
        _0x5a12cd += _0xd8c396 * _0x6a31c3;
        _0x30df19 += _0xd8c396 * _0x47d3e8;
        _0x151fdb += _0xd8c396 * _0x253ed8;
        _0x3b0aef += _0xd8c396 * _0x1bc787;
        _0x3b1044 += _0xd8c396 * _0x7a7e;
        _0x29b135 += _0xd8c396 * _0x8e6cf8;
        _0xee6b4a += _0xd8c396 * _0x24e531;
        _0x2b7b28 += _0xd8c396 * _0x40975b;
        _0x16056c += _0xd8c396 * _0x19f17c;
        _0x346dbc += _0xd8c396 * _0x45cf78;
        _0x1a921a += _0xd8c396 * _0x366c1e;
        _0x211f54 += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0x9];
        _0xa8dcdb += _0xd8c396 * _0x3525a0;
        _0x5b74c4 += _0xd8c396 * _0x268639;
        _0x2330a3 += _0xd8c396 * _0x407194;
        _0x5a12cd += _0xd8c396 * _0x75b2eb;
        _0x30df19 += _0xd8c396 * _0x6a31c3;
        _0x151fdb += _0xd8c396 * _0x47d3e8;
        _0x3b0aef += _0xd8c396 * _0x253ed8;
        _0x3b1044 += _0xd8c396 * _0x1bc787;
        _0x29b135 += _0xd8c396 * _0x7a7e;
        _0xee6b4a += _0xd8c396 * _0x8e6cf8;
        _0x2b7b28 += _0xd8c396 * _0x24e531;
        _0x16056c += _0xd8c396 * _0x40975b;
        _0x346dbc += _0xd8c396 * _0x19f17c;
        _0x1a921a += _0xd8c396 * _0x45cf78;
        _0x211f54 += _0xd8c396 * _0x366c1e;
        _0x4266a5 += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0xa];
        _0x5b74c4 += _0xd8c396 * _0x3525a0;
        _0x2330a3 += _0xd8c396 * _0x268639;
        _0x5a12cd += _0xd8c396 * _0x407194;
        _0x30df19 += _0xd8c396 * _0x75b2eb;
        _0x151fdb += _0xd8c396 * _0x6a31c3;
        _0x3b0aef += _0xd8c396 * _0x47d3e8;
        _0x3b1044 += _0xd8c396 * _0x253ed8;
        _0x29b135 += _0xd8c396 * _0x1bc787;
        _0xee6b4a += _0xd8c396 * _0x7a7e;
        _0x2b7b28 += _0xd8c396 * _0x8e6cf8;
        _0x16056c += _0xd8c396 * _0x24e531;
        _0x346dbc += _0xd8c396 * _0x40975b;
        _0x1a921a += _0xd8c396 * _0x19f17c;
        _0x211f54 += _0xd8c396 * _0x45cf78;
        _0x4266a5 += _0xd8c396 * _0x366c1e;
        _0x5738fd += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0xb];
        _0x2330a3 += _0xd8c396 * _0x3525a0;
        _0x5a12cd += _0xd8c396 * _0x268639;
        _0x30df19 += _0xd8c396 * _0x407194;
        _0x151fdb += _0xd8c396 * _0x75b2eb;
        _0x3b0aef += _0xd8c396 * _0x6a31c3;
        _0x3b1044 += _0xd8c396 * _0x47d3e8;
        _0x29b135 += _0xd8c396 * _0x253ed8;
        _0xee6b4a += _0xd8c396 * _0x1bc787;
        _0x2b7b28 += _0xd8c396 * _0x7a7e;
        _0x16056c += _0xd8c396 * _0x8e6cf8;
        _0x346dbc += _0xd8c396 * _0x24e531;
        _0x1a921a += _0xd8c396 * _0x40975b;
        _0x211f54 += _0xd8c396 * _0x19f17c;
        _0x4266a5 += _0xd8c396 * _0x45cf78;
        _0x5738fd += _0xd8c396 * _0x366c1e;
        _0x5136db += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0xc];
        _0x5a12cd += _0xd8c396 * _0x3525a0;
        _0x30df19 += _0xd8c396 * _0x268639;
        _0x151fdb += _0xd8c396 * _0x407194;
        _0x3b0aef += _0xd8c396 * _0x75b2eb;
        _0x3b1044 += _0xd8c396 * _0x6a31c3;
        _0x29b135 += _0xd8c396 * _0x47d3e8;
        _0xee6b4a += _0xd8c396 * _0x253ed8;
        _0x2b7b28 += _0xd8c396 * _0x1bc787;
        _0x16056c += _0xd8c396 * _0x7a7e;
        _0x346dbc += _0xd8c396 * _0x8e6cf8;
        _0x1a921a += _0xd8c396 * _0x24e531;
        _0x211f54 += _0xd8c396 * _0x40975b;
        _0x4266a5 += _0xd8c396 * _0x19f17c;
        _0x5738fd += _0xd8c396 * _0x45cf78;
        _0x5136db += _0xd8c396 * _0x366c1e;
        _0x167b2d += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0xd];
        _0x30df19 += _0xd8c396 * _0x3525a0;
        _0x151fdb += _0xd8c396 * _0x268639;
        _0x3b0aef += _0xd8c396 * _0x407194;
        _0x3b1044 += _0xd8c396 * _0x75b2eb;
        _0x29b135 += _0xd8c396 * _0x6a31c3;
        _0xee6b4a += _0xd8c396 * _0x47d3e8;
        _0x2b7b28 += _0xd8c396 * _0x253ed8;
        _0x16056c += _0xd8c396 * _0x1bc787;
        _0x346dbc += _0xd8c396 * _0x7a7e;
        _0x1a921a += _0xd8c396 * _0x8e6cf8;
        _0x211f54 += _0xd8c396 * _0x24e531;
        _0x4266a5 += _0xd8c396 * _0x40975b;
        _0x5738fd += _0xd8c396 * _0x19f17c;
        _0x5136db += _0xd8c396 * _0x45cf78;
        _0x167b2d += _0xd8c396 * _0x366c1e;
        _0x4b4be6 += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0xe];
        _0x151fdb += _0xd8c396 * _0x3525a0;
        _0x3b0aef += _0xd8c396 * _0x268639;
        _0x3b1044 += _0xd8c396 * _0x407194;
        _0x29b135 += _0xd8c396 * _0x75b2eb;
        _0xee6b4a += _0xd8c396 * _0x6a31c3;
        _0x2b7b28 += _0xd8c396 * _0x47d3e8;
        _0x16056c += _0xd8c396 * _0x253ed8;
        _0x346dbc += _0xd8c396 * _0x1bc787;
        _0x1a921a += _0xd8c396 * _0x7a7e;
        _0x211f54 += _0xd8c396 * _0x8e6cf8;
        _0x4266a5 += _0xd8c396 * _0x24e531;
        _0x5738fd += _0xd8c396 * _0x40975b;
        _0x5136db += _0xd8c396 * _0x19f17c;
        _0x167b2d += _0xd8c396 * _0x45cf78;
        _0x4b4be6 += _0xd8c396 * _0x366c1e;
        _0xa00596 += _0xd8c396 * _0x11a6f4;
        _0xd8c396 = _0x262ee5[0xf];
        _0x3b0aef += _0xd8c396 * _0x3525a0;
        _0x3b1044 += _0xd8c396 * _0x268639;
        _0x29b135 += _0xd8c396 * _0x407194;
        _0xee6b4a += _0xd8c396 * _0x75b2eb;
        _0x2b7b28 += _0xd8c396 * _0x6a31c3;
        _0x16056c += _0xd8c396 * _0x47d3e8;
        _0x346dbc += _0xd8c396 * _0x253ed8;
        _0x1a921a += _0xd8c396 * _0x1bc787;
        _0x211f54 += _0xd8c396 * _0x7a7e;
        _0x4266a5 += _0xd8c396 * _0x8e6cf8;
        _0x5738fd += _0xd8c396 * _0x24e531;
        _0x5136db += _0xd8c396 * _0x40975b;
        _0x167b2d += _0xd8c396 * _0x19f17c;
        _0x4b4be6 += _0xd8c396 * _0x45cf78;
        _0xa00596 += _0xd8c396 * _0x366c1e;
        _0x4fdfc5 += _0xd8c396 * _0x11a6f4;
        _0x3281c9 += 0x26 * _0x3b1044;
        _0x2a4876 += 0x26 * _0x29b135;
        _0x5157a6 += 0x26 * _0xee6b4a;
        _0x5e88a8 += 0x26 * _0x2b7b28;
        _0x1cb026 += 0x26 * _0x16056c;
        _0x1632bc += 0x26 * _0x346dbc;
        _0x18b730 += 0x26 * _0x1a921a;
        _0x358738 += 0x26 * _0x211f54;
        _0x3c3dcb += 0x26 * _0x4266a5;
        _0xa8dcdb += 0x26 * _0x5738fd;
        _0x5b74c4 += 0x26 * _0x5136db;
        _0x2330a3 += 0x26 * _0x167b2d;
        _0x5a12cd += 0x26 * _0x4b4be6;
        _0x30df19 += 0x26 * _0xa00596;
        _0x151fdb += 0x26 * _0x4fdfc5;
        _0x3a3277 = 0x1;
        _0xd8c396 = _0x3281c9 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x3281c9 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x2a4876 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x2a4876 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x5157a6 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x5157a6 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x5e88a8 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x5e88a8 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x1cb026 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x1cb026 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x1632bc + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x1632bc = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x18b730 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x18b730 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x358738 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x358738 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x3c3dcb + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x3c3dcb = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0xa8dcdb + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0xa8dcdb = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x5b74c4 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x5b74c4 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x2330a3 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x2330a3 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x5a12cd + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x5a12cd = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x30df19 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x30df19 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x151fdb + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x151fdb = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x3b0aef + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x3b0aef = _0xd8c396 - _0x3a3277 * 0x10000;
        _0x3281c9 += _0x3a3277 - 0x1 + 0x25 * (_0x3a3277 - 0x1);
        _0x3a3277 = 0x1;
        _0xd8c396 = _0x3281c9 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x3281c9 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x2a4876 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x2a4876 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x5157a6 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x5157a6 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x5e88a8 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x5e88a8 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x1cb026 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x1cb026 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x1632bc + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x1632bc = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x18b730 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x18b730 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x358738 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x358738 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x3c3dcb + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x3c3dcb = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0xa8dcdb + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0xa8dcdb = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x5b74c4 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x5b74c4 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x2330a3 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x2330a3 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x5a12cd + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x5a12cd = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x30df19 + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x30df19 = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x151fdb + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x151fdb = _0xd8c396 - _0x3a3277 * 0x10000;
        _0xd8c396 = _0x3b0aef + _0x3a3277 + 0xffff;
        _0x3a3277 = Math.floor(_0xd8c396 / 0x10000);
        _0x3b0aef = _0xd8c396 - _0x3a3277 * 0x10000;
        _0x3281c9 += _0x3a3277 - 0x1 + 0x25 * (_0x3a3277 - 0x1);
        _0x270051[0x0] = _0x3281c9;
        _0x270051[0x1] = _0x2a4876;
        _0x270051[0x2] = _0x5157a6;
        _0x270051[0x3] = _0x5e88a8;
        _0x270051[0x4] = _0x1cb026;
        _0x270051[0x5] = _0x1632bc;
        _0x270051[0x6] = _0x18b730;
        _0x270051[0x7] = _0x358738;
        _0x270051[0x8] = _0x3c3dcb;
        _0x270051[0x9] = _0xa8dcdb;
        _0x270051[0xa] = _0x5b74c4;
        _0x270051[0xb] = _0x2330a3;
        _0x270051[0xc] = _0x5a12cd;
        _0x270051[0xd] = _0x30df19;
        _0x270051[0xe] = _0x151fdb;
        _0x270051[0xf] = _0x3b0aef;
      }
      __defProp(_0xee6269, 'name', {
        'value': 'M',
        'configurable': true
      });
      function _0x38971f(_0x476dcf, _0x293636) {
        _0xee6269(_0x476dcf, _0x293636, _0x293636);
      }
      __defProp(_0x38971f, 'name', {
        'value': 'S',
        'configurable': true
      });
      function _0xae98ec(_0x566c90, _0x3fabf4) {
        var _0x17954 = _0x4ae1f2();
        var _0x1c41bd;
        for (_0x1c41bd = 0x0; _0x1c41bd < 0x10; _0x1c41bd++) {
          _0x17954[_0x1c41bd] = _0x3fabf4[_0x1c41bd];
        }
        for (_0x1c41bd = 0xfd; _0x1c41bd >= 0x0; _0x1c41bd--) {
          _0x38971f(_0x17954, _0x17954);
          if (_0x1c41bd !== 0x2 && _0x1c41bd !== 0x4) {
            _0xee6269(_0x17954, _0x17954, _0x3fabf4);
          }
        }
        for (_0x1c41bd = 0x0; _0x1c41bd < 0x10; _0x1c41bd++) {
          _0x566c90[_0x1c41bd] = _0x17954[_0x1c41bd];
        }
      }
      __defProp(_0xae98ec, 'name', {
        'value': "inv25519",
        'configurable': true
      });
      function _0x2acd7c(_0x523560, _0x222d08) {
        var _0x2e50fa = _0x4ae1f2();
        var _0x486c76;
        for (_0x486c76 = 0x0; _0x486c76 < 0x10; _0x486c76++) {
          _0x2e50fa[_0x486c76] = _0x222d08[_0x486c76];
        }
        for (_0x486c76 = 0xfa; _0x486c76 >= 0x0; _0x486c76--) {
          _0x38971f(_0x2e50fa, _0x2e50fa);
          if (_0x486c76 !== 0x1) {
            _0xee6269(_0x2e50fa, _0x2e50fa, _0x222d08);
          }
        }
        for (_0x486c76 = 0x0; _0x486c76 < 0x10; _0x486c76++) {
          _0x523560[_0x486c76] = _0x2e50fa[_0x486c76];
        }
      }
      __defProp(_0x2acd7c, 'name', {
        'value': "pow2523",
        'configurable': true
      });
      function _0x2bf4b6(_0x385f3f, _0x56d504, _0x1672f2) {
        var _0x2e3131 = new Uint8Array(0x20);
        var _0x119546 = new Float64Array(0x50);
        var _0x1b1d1c;
        var _0x4ec204;
        var _0x578c71 = _0x4ae1f2();
        var _0x10ed92 = _0x4ae1f2();
        var _0x2db7d7 = _0x4ae1f2();
        var _0x10b093 = _0x4ae1f2();
        var _0x23f8da = _0x4ae1f2();
        var _0x426715 = _0x4ae1f2();
        for (_0x4ec204 = 0x0; _0x4ec204 < 0x1f; _0x4ec204++) {
          _0x2e3131[_0x4ec204] = _0x56d504[_0x4ec204];
        }
        _0x2e3131[0x1f] = _0x56d504[0x1f] & 0x7f | 0x40;
        _0x2e3131[0x0] &= 0xf8;
        _0x1c927e(_0x119546, _0x1672f2);
        for (_0x4ec204 = 0x0; _0x4ec204 < 0x10; _0x4ec204++) {
          _0x10ed92[_0x4ec204] = _0x119546[_0x4ec204];
          _0x10b093[_0x4ec204] = _0x578c71[_0x4ec204] = _0x2db7d7[_0x4ec204] = 0x0;
        }
        _0x578c71[0x0] = _0x10b093[0x0] = 0x1;
        for (_0x4ec204 = 0xfe; _0x4ec204 >= 0x0; --_0x4ec204) {
          _0x1b1d1c = _0x2e3131[_0x4ec204 >>> 0x3] >>> (_0x4ec204 & 0x7) & 0x1;
          _0x41fb85(_0x578c71, _0x10ed92, _0x1b1d1c);
          _0x41fb85(_0x2db7d7, _0x10b093, _0x1b1d1c);
          _0x5080f7(_0x23f8da, _0x578c71, _0x2db7d7);
          _0x316440(_0x578c71, _0x578c71, _0x2db7d7);
          _0x5080f7(_0x2db7d7, _0x10ed92, _0x10b093);
          _0x316440(_0x10ed92, _0x10ed92, _0x10b093);
          _0x38971f(_0x10b093, _0x23f8da);
          _0x38971f(_0x426715, _0x578c71);
          _0xee6269(_0x578c71, _0x2db7d7, _0x578c71);
          _0xee6269(_0x2db7d7, _0x10ed92, _0x23f8da);
          _0x5080f7(_0x23f8da, _0x578c71, _0x2db7d7);
          _0x316440(_0x578c71, _0x578c71, _0x2db7d7);
          _0x38971f(_0x10ed92, _0x578c71);
          _0x316440(_0x2db7d7, _0x10b093, _0x426715);
          _0xee6269(_0x578c71, _0x2db7d7, _0x54efd4);
          _0x5080f7(_0x578c71, _0x578c71, _0x10b093);
          _0xee6269(_0x2db7d7, _0x2db7d7, _0x578c71);
          _0xee6269(_0x578c71, _0x10b093, _0x426715);
          _0xee6269(_0x10b093, _0x10ed92, _0x119546);
          _0x38971f(_0x10ed92, _0x23f8da);
          _0x41fb85(_0x578c71, _0x10ed92, _0x1b1d1c);
          _0x41fb85(_0x2db7d7, _0x10b093, _0x1b1d1c);
        }
        for (_0x4ec204 = 0x0; _0x4ec204 < 0x10; _0x4ec204++) {
          _0x119546[_0x4ec204 + 0x10] = _0x578c71[_0x4ec204];
          _0x119546[_0x4ec204 + 0x20] = _0x2db7d7[_0x4ec204];
          _0x119546[_0x4ec204 + 0x30] = _0x10ed92[_0x4ec204];
          _0x119546[_0x4ec204 + 0x40] = _0x10b093[_0x4ec204];
        }
        var _0x21604a = _0x119546.subarray(0x20);
        var _0x4e5494 = _0x119546.subarray(0x10);
        _0xae98ec(_0x21604a, _0x21604a);
        _0xee6269(_0x4e5494, _0x4e5494, _0x21604a);
        _0x3aa099(_0x385f3f, _0x4e5494);
        return 0x0;
      }
      __defProp(_0x2bf4b6, 'name', {
        'value': "crypto_scalarmult",
        'configurable': true
      });
      function _0xebdc20(_0x9f5a5f, _0x2391ae) {
        return _0x2bf4b6(_0x9f5a5f, _0x2391ae, _0x1f833d);
      }
      __defProp(_0xebdc20, 'name', {
        'value': "crypto_scalarmult_base",
        'configurable': true
      });
      function _0x5466e8(_0x294d36, _0x6c9a57) {
        _0x1e1e66(_0x6c9a57, 0x20);
        return _0x2bf4b6(_0x294d36, _0x6c9a57, _0x1f833d);
      }
      __defProp(_0x5466e8, 'name', {
        'value': "crypto_box_keypair",
        'configurable': true
      });
      function _0x436c87(_0x341882, _0x3ea285, _0x5a397f) {
        var _0x472016 = new Uint8Array(0x20);
        _0x2bf4b6(_0x472016, _0x5a397f, _0x3ea285);
        return _0x1bc7f4(_0x341882, _0xac0696, _0x472016, _0xffb49b);
      }
      __defProp(_0x436c87, 'name', {
        'value': 'crypto_box_beforenm',
        'configurable': true
      });
      function _0x4d37b8(_0x22c518, _0xbbfb44, _0x4b0e6e, _0x3ac50b, _0x11bdc2, _0xe6132f) {
        var _0x2a16bb = new Uint8Array(0x20);
        _0x436c87(_0x2a16bb, _0x11bdc2, _0xe6132f);
        return _0x52721c(_0x22c518, _0xbbfb44, _0x4b0e6e, _0x3ac50b, _0x2a16bb);
      }
      __defProp(_0x4d37b8, 'name', {
        'value': 'crypto_box',
        'configurable': true
      });
      function _0x5080fa(_0x17a183, _0x53b869, _0x2ed5c0, _0x750701, _0x6e5292, _0x52f346) {
        var _0x5d5e69 = new Uint8Array(0x20);
        _0x436c87(_0x5d5e69, _0x6e5292, _0x52f346);
        return _0x199844(_0x17a183, _0x53b869, _0x2ed5c0, _0x750701, _0x5d5e69);
      }
      __defProp(_0x5080fa, 'name', {
        'value': "crypto_box_open",
        'configurable': true
      });
      var _0x33becf = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
      function _0x2b9d04(_0x596b9b, _0x1bc4d6, _0x5435a4, _0x3cff2f) {
        var _0x434220 = new Int32Array(0x10);
        var _0x5bf86a = new Int32Array(0x10);
        var _0x3e2c29;
        var _0x2dc570;
        var _0x2055b5;
        var _0x224159;
        var _0x42a919;
        var _0x5a170f;
        var _0x1d6fa3;
        var _0x35d3db;
        var _0x58a722;
        var _0x29ceb3;
        var _0x243014;
        var _0x1e73c3;
        var _0x4f0b2d;
        var _0x1717b4;
        var _0x6f6db5;
        var _0x464a83;
        var _0x4f249d;
        var _0x44d698;
        var _0x33bceb;
        var _0x5e91b3;
        var _0x2998a1;
        var _0x1897b3;
        var _0x5c626f;
        var _0x48489a;
        var _0x3a542d;
        var _0x41057b;
        var _0x5c2eb6 = _0x596b9b[0x0];
        var _0x1c8508 = _0x596b9b[0x1];
        var _0x4d5c30 = _0x596b9b[0x2];
        var _0x17e4e2 = _0x596b9b[0x3];
        var _0x547926 = _0x596b9b[0x4];
        var _0x3e5c7b = _0x596b9b[0x5];
        var _0x455642 = _0x596b9b[0x6];
        var _0x15109e = _0x596b9b[0x7];
        var _0x6877f6 = _0x1bc4d6[0x0];
        var _0x423405 = _0x1bc4d6[0x1];
        var _0x41e93b = _0x1bc4d6[0x2];
        var _0x3d06e1 = _0x1bc4d6[0x3];
        var _0x3019e9 = _0x1bc4d6[0x4];
        var _0x3ec700 = _0x1bc4d6[0x5];
        var _0x2bb6ac = _0x1bc4d6[0x6];
        var _0x139802 = _0x1bc4d6[0x7];
        var _0x4d5efb = 0x0;
        while (_0x3cff2f >= 0x80) {
          for (_0x33bceb = 0x0; _0x33bceb < 0x10; _0x33bceb++) {
            _0x5e91b3 = 0x8 * _0x33bceb + _0x4d5efb;
            _0x434220[_0x33bceb] = _0x5435a4[_0x5e91b3 + 0x0] << 0x18 | _0x5435a4[_0x5e91b3 + 0x1] << 0x10 | _0x5435a4[_0x5e91b3 + 0x2] << 0x8 | _0x5435a4[_0x5e91b3 + 0x3];
            _0x5bf86a[_0x33bceb] = _0x5435a4[_0x5e91b3 + 0x4] << 0x18 | _0x5435a4[_0x5e91b3 + 0x5] << 0x10 | _0x5435a4[_0x5e91b3 + 0x6] << 0x8 | _0x5435a4[_0x5e91b3 + 0x7];
          }
          for (_0x33bceb = 0x0; _0x33bceb < 0x50; _0x33bceb++) {
            _0x3e2c29 = _0x5c2eb6;
            _0x2dc570 = _0x1c8508;
            _0x2055b5 = _0x4d5c30;
            _0x224159 = _0x17e4e2;
            _0x42a919 = _0x547926;
            _0x5a170f = _0x3e5c7b;
            _0x1d6fa3 = _0x455642;
            _0x35d3db = _0x15109e;
            _0x58a722 = _0x6877f6;
            _0x29ceb3 = _0x423405;
            _0x243014 = _0x41e93b;
            _0x1e73c3 = _0x3d06e1;
            _0x4f0b2d = _0x3019e9;
            _0x1717b4 = _0x3ec700;
            _0x6f6db5 = _0x2bb6ac;
            _0x464a83 = _0x139802;
            _0x2998a1 = _0x15109e;
            _0x1897b3 = _0x139802;
            _0x5c626f = _0x1897b3 & 0xffff;
            _0x48489a = _0x1897b3 >>> 0x10;
            _0x3a542d = _0x2998a1 & 0xffff;
            _0x41057b = _0x2998a1 >>> 0x10;
            _0x2998a1 = (_0x547926 >>> 0xe | _0x3019e9 << 18) ^ (_0x547926 >>> 0x12 | _0x3019e9 << 14) ^ (_0x3019e9 >>> 9 | _0x547926 << 23);
            _0x1897b3 = (_0x3019e9 >>> 0xe | _0x547926 << 18) ^ (_0x3019e9 >>> 0x12 | _0x547926 << 14) ^ (_0x547926 >>> 9 | _0x3019e9 << 23);
            _0x5c626f += _0x1897b3 & 0xffff;
            _0x48489a += _0x1897b3 >>> 0x10;
            _0x3a542d += _0x2998a1 & 0xffff;
            _0x41057b += _0x2998a1 >>> 0x10;
            _0x2998a1 = _0x547926 & _0x3e5c7b ^ ~_0x547926 & _0x455642;
            _0x1897b3 = _0x3019e9 & _0x3ec700 ^ ~_0x3019e9 & _0x2bb6ac;
            _0x5c626f += _0x1897b3 & 0xffff;
            _0x48489a += _0x1897b3 >>> 0x10;
            _0x3a542d += _0x2998a1 & 0xffff;
            _0x41057b += _0x2998a1 >>> 0x10;
            _0x2998a1 = _0x33becf[_0x33bceb * 0x2];
            _0x1897b3 = _0x33becf[_0x33bceb * 0x2 + 0x1];
            _0x5c626f += _0x1897b3 & 0xffff;
            _0x48489a += _0x1897b3 >>> 0x10;
            _0x3a542d += _0x2998a1 & 0xffff;
            _0x41057b += _0x2998a1 >>> 0x10;
            _0x2998a1 = _0x434220[_0x33bceb % 0x10];
            _0x1897b3 = _0x5bf86a[_0x33bceb % 0x10];
            _0x5c626f += _0x1897b3 & 0xffff;
            _0x48489a += _0x1897b3 >>> 0x10;
            _0x3a542d += _0x2998a1 & 0xffff;
            _0x41057b += _0x2998a1 >>> 0x10;
            _0x48489a += _0x5c626f >>> 0x10;
            _0x3a542d += _0x48489a >>> 0x10;
            _0x41057b += _0x3a542d >>> 0x10;
            _0x4f249d = _0x3a542d & 0xffff | _0x41057b << 0x10;
            _0x44d698 = _0x5c626f & 0xffff | _0x48489a << 0x10;
            _0x2998a1 = _0x4f249d;
            _0x1897b3 = _0x44d698;
            _0x5c626f = _0x1897b3 & 0xffff;
            _0x48489a = _0x1897b3 >>> 0x10;
            _0x3a542d = _0x2998a1 & 0xffff;
            _0x41057b = _0x2998a1 >>> 0x10;
            _0x2998a1 = (_0x5c2eb6 >>> 0x1c | _0x6877f6 << 4) ^ (_0x6877f6 >>> 2 | _0x5c2eb6 << 30) ^ (_0x6877f6 >>> 7 | _0x5c2eb6 << 25);
            _0x1897b3 = (_0x6877f6 >>> 0x1c | _0x5c2eb6 << 4) ^ (_0x5c2eb6 >>> 2 | _0x6877f6 << 30) ^ (_0x5c2eb6 >>> 7 | _0x6877f6 << 25);
            _0x5c626f += _0x1897b3 & 0xffff;
            _0x48489a += _0x1897b3 >>> 0x10;
            _0x3a542d += _0x2998a1 & 0xffff;
            _0x41057b += _0x2998a1 >>> 0x10;
            _0x2998a1 = _0x5c2eb6 & _0x1c8508 ^ _0x5c2eb6 & _0x4d5c30 ^ _0x1c8508 & _0x4d5c30;
            _0x1897b3 = _0x6877f6 & _0x423405 ^ _0x6877f6 & _0x41e93b ^ _0x423405 & _0x41e93b;
            _0x5c626f += _0x1897b3 & 0xffff;
            _0x48489a += _0x1897b3 >>> 0x10;
            _0x3a542d += _0x2998a1 & 0xffff;
            _0x41057b += _0x2998a1 >>> 0x10;
            _0x48489a += _0x5c626f >>> 0x10;
            _0x3a542d += _0x48489a >>> 0x10;
            _0x41057b += _0x3a542d >>> 0x10;
            _0x35d3db = _0x3a542d & 0xffff | _0x41057b << 0x10;
            _0x464a83 = _0x5c626f & 0xffff | _0x48489a << 0x10;
            _0x2998a1 = _0x224159;
            _0x1897b3 = _0x1e73c3;
            _0x5c626f = _0x1897b3 & 0xffff;
            _0x48489a = _0x1897b3 >>> 0x10;
            _0x3a542d = _0x2998a1 & 0xffff;
            _0x41057b = _0x2998a1 >>> 0x10;
            _0x2998a1 = _0x4f249d;
            _0x1897b3 = _0x44d698;
            _0x5c626f += _0x1897b3 & 0xffff;
            _0x48489a += _0x1897b3 >>> 0x10;
            _0x3a542d += _0x2998a1 & 0xffff;
            _0x41057b += _0x2998a1 >>> 0x10;
            _0x48489a += _0x5c626f >>> 0x10;
            _0x3a542d += _0x48489a >>> 0x10;
            _0x41057b += _0x3a542d >>> 0x10;
            _0x224159 = _0x3a542d & 0xffff | _0x41057b << 0x10;
            _0x1e73c3 = _0x5c626f & 0xffff | _0x48489a << 0x10;
            _0x1c8508 = _0x3e2c29;
            _0x4d5c30 = _0x2dc570;
            _0x17e4e2 = _0x2055b5;
            _0x547926 = _0x224159;
            _0x3e5c7b = _0x42a919;
            _0x455642 = _0x5a170f;
            _0x15109e = _0x1d6fa3;
            _0x5c2eb6 = _0x35d3db;
            _0x423405 = _0x58a722;
            _0x41e93b = _0x29ceb3;
            _0x3d06e1 = _0x243014;
            _0x3019e9 = _0x1e73c3;
            _0x3ec700 = _0x4f0b2d;
            _0x2bb6ac = _0x1717b4;
            _0x139802 = _0x6f6db5;
            _0x6877f6 = _0x464a83;
            if (_0x33bceb % 0x10 === 0xf) {
              for (_0x5e91b3 = 0x0; _0x5e91b3 < 0x10; _0x5e91b3++) {
                _0x2998a1 = _0x434220[_0x5e91b3];
                _0x1897b3 = _0x5bf86a[_0x5e91b3];
                _0x5c626f = _0x1897b3 & 0xffff;
                _0x48489a = _0x1897b3 >>> 0x10;
                _0x3a542d = _0x2998a1 & 0xffff;
                _0x41057b = _0x2998a1 >>> 0x10;
                _0x2998a1 = _0x434220[(_0x5e91b3 + 0x9) % 0x10];
                _0x1897b3 = _0x5bf86a[(_0x5e91b3 + 0x9) % 0x10];
                _0x5c626f += _0x1897b3 & 0xffff;
                _0x48489a += _0x1897b3 >>> 0x10;
                _0x3a542d += _0x2998a1 & 0xffff;
                _0x41057b += _0x2998a1 >>> 0x10;
                _0x4f249d = _0x434220[(_0x5e91b3 + 0x1) % 0x10];
                _0x44d698 = _0x5bf86a[(_0x5e91b3 + 0x1) % 0x10];
                _0x2998a1 = (_0x4f249d >>> 0x1 | _0x44d698 << 31) ^ (_0x4f249d >>> 0x8 | _0x44d698 << 24) ^ _0x4f249d >>> 0x7;
                _0x1897b3 = (_0x44d698 >>> 0x1 | _0x4f249d << 31) ^ (_0x44d698 >>> 0x8 | _0x4f249d << 24) ^ (_0x44d698 >>> 0x7 | _0x4f249d << 25);
                _0x5c626f += _0x1897b3 & 0xffff;
                _0x48489a += _0x1897b3 >>> 0x10;
                _0x3a542d += _0x2998a1 & 0xffff;
                _0x41057b += _0x2998a1 >>> 0x10;
                _0x4f249d = _0x434220[(_0x5e91b3 + 0xe) % 0x10];
                _0x44d698 = _0x5bf86a[(_0x5e91b3 + 0xe) % 0x10];
                _0x2998a1 = (_0x4f249d >>> 0x13 | _0x44d698 << 13) ^ (_0x44d698 >>> 29 | _0x4f249d << 3) ^ _0x4f249d >>> 0x6;
                _0x1897b3 = (_0x44d698 >>> 0x13 | _0x4f249d << 13) ^ (_0x4f249d >>> 29 | _0x44d698 << 3) ^ (_0x44d698 >>> 0x6 | _0x4f249d << 26);
                _0x5c626f += _0x1897b3 & 0xffff;
                _0x48489a += _0x1897b3 >>> 0x10;
                _0x3a542d += _0x2998a1 & 0xffff;
                _0x41057b += _0x2998a1 >>> 0x10;
                _0x48489a += _0x5c626f >>> 0x10;
                _0x3a542d += _0x48489a >>> 0x10;
                _0x41057b += _0x3a542d >>> 0x10;
                _0x434220[_0x5e91b3] = _0x3a542d & 0xffff | _0x41057b << 0x10;
                _0x5bf86a[_0x5e91b3] = _0x5c626f & 0xffff | _0x48489a << 0x10;
              }
            }
          }
          _0x2998a1 = _0x5c2eb6;
          _0x1897b3 = _0x6877f6;
          _0x5c626f = _0x1897b3 & 0xffff;
          _0x48489a = _0x1897b3 >>> 0x10;
          _0x3a542d = _0x2998a1 & 0xffff;
          _0x41057b = _0x2998a1 >>> 0x10;
          _0x2998a1 = _0x596b9b[0x0];
          _0x1897b3 = _0x1bc4d6[0x0];
          _0x5c626f += _0x1897b3 & 0xffff;
          _0x48489a += _0x1897b3 >>> 0x10;
          _0x3a542d += _0x2998a1 & 0xffff;
          _0x41057b += _0x2998a1 >>> 0x10;
          _0x48489a += _0x5c626f >>> 0x10;
          _0x3a542d += _0x48489a >>> 0x10;
          _0x41057b += _0x3a542d >>> 0x10;
          _0x596b9b[0x0] = _0x5c2eb6 = _0x3a542d & 0xffff | _0x41057b << 0x10;
          _0x1bc4d6[0x0] = _0x6877f6 = _0x5c626f & 0xffff | _0x48489a << 0x10;
          _0x2998a1 = _0x1c8508;
          _0x1897b3 = _0x423405;
          _0x5c626f = _0x1897b3 & 0xffff;
          _0x48489a = _0x1897b3 >>> 0x10;
          _0x3a542d = _0x2998a1 & 0xffff;
          _0x41057b = _0x2998a1 >>> 0x10;
          _0x2998a1 = _0x596b9b[0x1];
          _0x1897b3 = _0x1bc4d6[0x1];
          _0x5c626f += _0x1897b3 & 0xffff;
          _0x48489a += _0x1897b3 >>> 0x10;
          _0x3a542d += _0x2998a1 & 0xffff;
          _0x41057b += _0x2998a1 >>> 0x10;
          _0x48489a += _0x5c626f >>> 0x10;
          _0x3a542d += _0x48489a >>> 0x10;
          _0x41057b += _0x3a542d >>> 0x10;
          _0x596b9b[0x1] = _0x1c8508 = _0x3a542d & 0xffff | _0x41057b << 0x10;
          _0x1bc4d6[0x1] = _0x423405 = _0x5c626f & 0xffff | _0x48489a << 0x10;
          _0x2998a1 = _0x4d5c30;
          _0x1897b3 = _0x41e93b;
          _0x5c626f = _0x1897b3 & 0xffff;
          _0x48489a = _0x1897b3 >>> 0x10;
          _0x3a542d = _0x2998a1 & 0xffff;
          _0x41057b = _0x2998a1 >>> 0x10;
          _0x2998a1 = _0x596b9b[0x2];
          _0x1897b3 = _0x1bc4d6[0x2];
          _0x5c626f += _0x1897b3 & 0xffff;
          _0x48489a += _0x1897b3 >>> 0x10;
          _0x3a542d += _0x2998a1 & 0xffff;
          _0x41057b += _0x2998a1 >>> 0x10;
          _0x48489a += _0x5c626f >>> 0x10;
          _0x3a542d += _0x48489a >>> 0x10;
          _0x41057b += _0x3a542d >>> 0x10;
          _0x596b9b[0x2] = _0x4d5c30 = _0x3a542d & 0xffff | _0x41057b << 0x10;
          _0x1bc4d6[0x2] = _0x41e93b = _0x5c626f & 0xffff | _0x48489a << 0x10;
          _0x2998a1 = _0x17e4e2;
          _0x1897b3 = _0x3d06e1;
          _0x5c626f = _0x1897b3 & 0xffff;
          _0x48489a = _0x1897b3 >>> 0x10;
          _0x3a542d = _0x2998a1 & 0xffff;
          _0x41057b = _0x2998a1 >>> 0x10;
          _0x2998a1 = _0x596b9b[0x3];
          _0x1897b3 = _0x1bc4d6[0x3];
          _0x5c626f += _0x1897b3 & 0xffff;
          _0x48489a += _0x1897b3 >>> 0x10;
          _0x3a542d += _0x2998a1 & 0xffff;
          _0x41057b += _0x2998a1 >>> 0x10;
          _0x48489a += _0x5c626f >>> 0x10;
          _0x3a542d += _0x48489a >>> 0x10;
          _0x41057b += _0x3a542d >>> 0x10;
          _0x596b9b[0x3] = _0x17e4e2 = _0x3a542d & 0xffff | _0x41057b << 0x10;
          _0x1bc4d6[0x3] = _0x3d06e1 = _0x5c626f & 0xffff | _0x48489a << 0x10;
          _0x2998a1 = _0x547926;
          _0x1897b3 = _0x3019e9;
          _0x5c626f = _0x1897b3 & 0xffff;
          _0x48489a = _0x1897b3 >>> 0x10;
          _0x3a542d = _0x2998a1 & 0xffff;
          _0x41057b = _0x2998a1 >>> 0x10;
          _0x2998a1 = _0x596b9b[0x4];
          _0x1897b3 = _0x1bc4d6[0x4];
          _0x5c626f += _0x1897b3 & 0xffff;
          _0x48489a += _0x1897b3 >>> 0x10;
          _0x3a542d += _0x2998a1 & 0xffff;
          _0x41057b += _0x2998a1 >>> 0x10;
          _0x48489a += _0x5c626f >>> 0x10;
          _0x3a542d += _0x48489a >>> 0x10;
          _0x41057b += _0x3a542d >>> 0x10;
          _0x596b9b[0x4] = _0x547926 = _0x3a542d & 0xffff | _0x41057b << 0x10;
          _0x1bc4d6[0x4] = _0x3019e9 = _0x5c626f & 0xffff | _0x48489a << 0x10;
          _0x2998a1 = _0x3e5c7b;
          _0x1897b3 = _0x3ec700;
          _0x5c626f = _0x1897b3 & 0xffff;
          _0x48489a = _0x1897b3 >>> 0x10;
          _0x3a542d = _0x2998a1 & 0xffff;
          _0x41057b = _0x2998a1 >>> 0x10;
          _0x2998a1 = _0x596b9b[0x5];
          _0x1897b3 = _0x1bc4d6[0x5];
          _0x5c626f += _0x1897b3 & 0xffff;
          _0x48489a += _0x1897b3 >>> 0x10;
          _0x3a542d += _0x2998a1 & 0xffff;
          _0x41057b += _0x2998a1 >>> 0x10;
          _0x48489a += _0x5c626f >>> 0x10;
          _0x3a542d += _0x48489a >>> 0x10;
          _0x41057b += _0x3a542d >>> 0x10;
          _0x596b9b[0x5] = _0x3e5c7b = _0x3a542d & 0xffff | _0x41057b << 0x10;
          _0x1bc4d6[0x5] = _0x3ec700 = _0x5c626f & 0xffff | _0x48489a << 0x10;
          _0x2998a1 = _0x455642;
          _0x1897b3 = _0x2bb6ac;
          _0x5c626f = _0x1897b3 & 0xffff;
          _0x48489a = _0x1897b3 >>> 0x10;
          _0x3a542d = _0x2998a1 & 0xffff;
          _0x41057b = _0x2998a1 >>> 0x10;
          _0x2998a1 = _0x596b9b[0x6];
          _0x1897b3 = _0x1bc4d6[0x6];
          _0x5c626f += _0x1897b3 & 0xffff;
          _0x48489a += _0x1897b3 >>> 0x10;
          _0x3a542d += _0x2998a1 & 0xffff;
          _0x41057b += _0x2998a1 >>> 0x10;
          _0x48489a += _0x5c626f >>> 0x10;
          _0x3a542d += _0x48489a >>> 0x10;
          _0x41057b += _0x3a542d >>> 0x10;
          _0x596b9b[0x6] = _0x455642 = _0x3a542d & 0xffff | _0x41057b << 0x10;
          _0x1bc4d6[0x6] = _0x2bb6ac = _0x5c626f & 0xffff | _0x48489a << 0x10;
          _0x2998a1 = _0x15109e;
          _0x1897b3 = _0x139802;
          _0x5c626f = _0x1897b3 & 0xffff;
          _0x48489a = _0x1897b3 >>> 0x10;
          _0x3a542d = _0x2998a1 & 0xffff;
          _0x41057b = _0x2998a1 >>> 0x10;
          _0x2998a1 = _0x596b9b[0x7];
          _0x1897b3 = _0x1bc4d6[0x7];
          _0x5c626f += _0x1897b3 & 0xffff;
          _0x48489a += _0x1897b3 >>> 0x10;
          _0x3a542d += _0x2998a1 & 0xffff;
          _0x41057b += _0x2998a1 >>> 0x10;
          _0x48489a += _0x5c626f >>> 0x10;
          _0x3a542d += _0x48489a >>> 0x10;
          _0x41057b += _0x3a542d >>> 0x10;
          _0x596b9b[0x7] = _0x15109e = _0x3a542d & 0xffff | _0x41057b << 0x10;
          _0x1bc4d6[0x7] = _0x139802 = _0x5c626f & 0xffff | _0x48489a << 0x10;
          _0x4d5efb += 0x80;
          _0x3cff2f -= 0x80;
        }
        return _0x3cff2f;
      }
      __defProp(_0x2b9d04, 'name', {
        'value': "crypto_hashblocks_hl",
        'configurable': true
      });
      function _0x4a07a4(_0x11bb62, _0x1997c0, _0x1c4415) {
        var _0xbc801d = new Int32Array(0x8);
        var _0x1baa8e = new Int32Array(0x8);
        var _0x157530 = new Uint8Array(0x100);
        var _0x552112;
        var _0x3a2ef8 = _0x1c4415;
        _0xbc801d[0x0] = 0x6a09e667;
        _0xbc801d[0x1] = 0xbb67ae85;
        _0xbc801d[0x2] = 0x3c6ef372;
        _0xbc801d[0x3] = 0xa54ff53a;
        _0xbc801d[0x4] = 0x510e527f;
        _0xbc801d[0x5] = 0x9b05688c;
        _0xbc801d[0x6] = 0x1f83d9ab;
        _0xbc801d[0x7] = 0x5be0cd19;
        _0x1baa8e[0x0] = 0xf3bcc908;
        _0x1baa8e[0x1] = 0x84caa73b;
        _0x1baa8e[0x2] = 0xfe94f82b;
        _0x1baa8e[0x3] = 0x5f1d36f1;
        _0x1baa8e[0x4] = 0xade682d1;
        _0x1baa8e[0x5] = 0x2b3e6c1f;
        _0x1baa8e[0x6] = 0xfb41bd6b;
        _0x1baa8e[0x7] = 0x137e2179;
        _0x2b9d04(_0xbc801d, _0x1baa8e, _0x1997c0, _0x1c4415);
        _0x1c4415 %= 0x80;
        for (_0x552112 = 0x0; _0x552112 < _0x1c4415; _0x552112++) {
          _0x157530[_0x552112] = _0x1997c0[_0x3a2ef8 - _0x1c4415 + _0x552112];
        }
        _0x157530[_0x1c4415] = 0x80;
        _0x1c4415 = 0x100 - 0x80 * (_0x1c4415 < 0x70 ? 0x1 : 0x0);
        _0x157530[_0x1c4415 - 0x9] = 0x0;
        _0x2c219b(_0x157530, _0x1c4415 - 0x8, _0x3a2ef8 / 0x20000000 | 0x0, _0x3a2ef8 << 0x3);
        _0x2b9d04(_0xbc801d, _0x1baa8e, _0x157530, _0x1c4415);
        for (_0x552112 = 0x0; _0x552112 < 0x8; _0x552112++) {
          _0x2c219b(_0x11bb62, 0x8 * _0x552112, _0xbc801d[_0x552112], _0x1baa8e[_0x552112]);
        }
        return 0x0;
      }
      __defProp(_0x4a07a4, 'name', {
        'value': 'crypto_hash',
        'configurable': true
      });
      function _0x2d1ac0(_0x5a846c, _0x4f306f) {
        var _0x3db21e = _0x4ae1f2();
        var _0x5cd7ab = _0x4ae1f2();
        var _0x223b5e = _0x4ae1f2();
        var _0x35e966 = _0x4ae1f2();
        var _0x18c8db = _0x4ae1f2();
        var _0x2e3db0 = _0x4ae1f2();
        var _0x55273b = _0x4ae1f2();
        var _0x70325b = _0x4ae1f2();
        var _0x427ed3 = _0x4ae1f2();
        _0x316440(_0x3db21e, _0x5a846c[0x1], _0x5a846c[0x0]);
        _0x316440(_0x427ed3, _0x4f306f[0x1], _0x4f306f[0x0]);
        _0xee6269(_0x3db21e, _0x3db21e, _0x427ed3);
        _0x5080f7(_0x5cd7ab, _0x5a846c[0x0], _0x5a846c[0x1]);
        _0x5080f7(_0x427ed3, _0x4f306f[0x0], _0x4f306f[0x1]);
        _0xee6269(_0x5cd7ab, _0x5cd7ab, _0x427ed3);
        _0xee6269(_0x223b5e, _0x5a846c[0x3], _0x4f306f[0x3]);
        _0xee6269(_0x223b5e, _0x223b5e, _0x401af8);
        _0xee6269(_0x35e966, _0x5a846c[0x2], _0x4f306f[0x2]);
        _0x5080f7(_0x35e966, _0x35e966, _0x35e966);
        _0x316440(_0x18c8db, _0x5cd7ab, _0x3db21e);
        _0x316440(_0x2e3db0, _0x35e966, _0x223b5e);
        _0x5080f7(_0x55273b, _0x35e966, _0x223b5e);
        _0x5080f7(_0x70325b, _0x5cd7ab, _0x3db21e);
        _0xee6269(_0x5a846c[0x0], _0x18c8db, _0x2e3db0);
        _0xee6269(_0x5a846c[0x1], _0x70325b, _0x55273b);
        _0xee6269(_0x5a846c[0x2], _0x55273b, _0x2e3db0);
        _0xee6269(_0x5a846c[0x3], _0x18c8db, _0x70325b);
      }
      __defProp(_0x2d1ac0, 'name', {
        'value': 'add',
        'configurable': true
      });
      function _0x1e9c95(_0x4fada1, _0x3f36dd, _0x1aa97d) {
        var _0x1a9e75;
        for (_0x1a9e75 = 0x0; _0x1a9e75 < 0x4; _0x1a9e75++) {
          _0x41fb85(_0x4fada1[_0x1a9e75], _0x3f36dd[_0x1a9e75], _0x1aa97d);
        }
      }
      __defProp(_0x1e9c95, 'name', {
        'value': "cswap",
        'configurable': true
      });
      function _0x1310f9(_0x399603, _0xc433c9) {
        var _0x6d7661 = _0x4ae1f2();
        var _0x2916e9 = _0x4ae1f2();
        var _0x2e166e = _0x4ae1f2();
        _0xae98ec(_0x2e166e, _0xc433c9[0x2]);
        _0xee6269(_0x6d7661, _0xc433c9[0x0], _0x2e166e);
        _0xee6269(_0x2916e9, _0xc433c9[0x1], _0x2e166e);
        _0x3aa099(_0x399603, _0x2916e9);
        _0x399603[0x1f] ^= _0x3882b9(_0x6d7661) << 0x7;
      }
      __defProp(_0x1310f9, 'name', {
        'value': "pack",
        'configurable': true
      });
      function _0x3b1c8f(_0x249d50, _0xa60c2c, _0x992c8) {
        var _0x3b68ba;
        var _0x17024c;
        _0x114d54(_0x249d50[0x0], _0x331ca4);
        _0x114d54(_0x249d50[0x1], _0x5a3cb5);
        _0x114d54(_0x249d50[0x2], _0x5a3cb5);
        _0x114d54(_0x249d50[0x3], _0x331ca4);
        for (_0x17024c = 0xff; _0x17024c >= 0x0; --_0x17024c) {
          _0x3b68ba = _0x992c8[_0x17024c / 0x8 | 0x0] >> (_0x17024c & 0x7) & 0x1;
          _0x1e9c95(_0x249d50, _0xa60c2c, _0x3b68ba);
          _0x2d1ac0(_0xa60c2c, _0x249d50);
          _0x2d1ac0(_0x249d50, _0x249d50);
          _0x1e9c95(_0x249d50, _0xa60c2c, _0x3b68ba);
        }
      }
      __defProp(_0x3b1c8f, 'name', {
        'value': "scalarmult",
        'configurable': true
      });
      function _0x30eb6e(_0x5db53b, _0x4e58c4) {
        var _0x389132 = [_0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2()];
        _0x114d54(_0x389132[0x0], _0x4d6afa);
        _0x114d54(_0x389132[0x1], _0x368ce2);
        _0x114d54(_0x389132[0x2], _0x5a3cb5);
        _0xee6269(_0x389132[0x3], _0x4d6afa, _0x368ce2);
        _0x3b1c8f(_0x5db53b, _0x389132, _0x4e58c4);
      }
      __defProp(_0x30eb6e, 'name', {
        'value': "scalarbase",
        'configurable': true
      });
      function _0x4c01d4(_0x236e31, _0x4c2e9e, _0x2d1ea8) {
        var _0x1490f4 = new Uint8Array(0x40);
        var _0x330d86 = [_0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2()];
        var _0x427f37;
        if (!_0x2d1ea8) {
          _0x1e1e66(_0x4c2e9e, 0x20);
        }
        _0x4a07a4(_0x1490f4, _0x4c2e9e, 0x20);
        _0x1490f4[0x0] &= 0xf8;
        _0x1490f4[0x1f] &= 0x7f;
        _0x1490f4[0x1f] |= 0x40;
        _0x30eb6e(_0x330d86, _0x1490f4);
        _0x1310f9(_0x236e31, _0x330d86);
        for (_0x427f37 = 0x0; _0x427f37 < 0x20; _0x427f37++) {
          _0x4c2e9e[_0x427f37 + 0x20] = _0x236e31[_0x427f37];
        }
        return 0x0;
      }
      __defProp(_0x4c01d4, 'name', {
        'value': 'crypto_sign_keypair',
        'configurable': true
      });
      var _0x3f3b7f = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x10]);
      function _0x4ebdb8(_0x5c5a00, _0x5339d2) {
        var _0x1d7694;
        var _0x4f71bf;
        var _0x2977d6;
        var _0x33af7a;
        for (_0x4f71bf = 0x3f; _0x4f71bf >= 0x20; --_0x4f71bf) {
          _0x1d7694 = 0x0;
          _0x2977d6 = _0x4f71bf - 0x20;
          for (_0x33af7a = _0x4f71bf - 0xc; _0x2977d6 < _0x33af7a; ++_0x2977d6) {
            _0x5339d2[_0x2977d6] += _0x1d7694 - 0x10 * _0x5339d2[_0x4f71bf] * _0x3f3b7f[_0x2977d6 - (_0x4f71bf - 0x20)];
            _0x1d7694 = Math.floor((_0x5339d2[_0x2977d6] + 0x80) / 0x100);
            _0x5339d2[_0x2977d6] -= _0x1d7694 * 0x100;
          }
          _0x5339d2[_0x2977d6] += _0x1d7694;
          _0x5339d2[_0x4f71bf] = 0x0;
        }
        _0x1d7694 = 0x0;
        for (_0x2977d6 = 0x0; _0x2977d6 < 0x20; _0x2977d6++) {
          _0x5339d2[_0x2977d6] += _0x1d7694 - (_0x5339d2[0x1f] >> 0x4) * _0x3f3b7f[_0x2977d6];
          _0x1d7694 = _0x5339d2[_0x2977d6] >> 0x8;
          _0x5339d2[_0x2977d6] &= 0xff;
        }
        for (_0x2977d6 = 0x0; _0x2977d6 < 0x20; _0x2977d6++) {
          _0x5339d2[_0x2977d6] -= _0x1d7694 * _0x3f3b7f[_0x2977d6];
        }
        for (_0x4f71bf = 0x0; _0x4f71bf < 0x20; _0x4f71bf++) {
          _0x5339d2[_0x4f71bf + 0x1] += _0x5339d2[_0x4f71bf] >> 0x8;
          _0x5c5a00[_0x4f71bf] = _0x5339d2[_0x4f71bf] & 0xff;
        }
      }
      __defProp(_0x4ebdb8, 'name', {
        'value': "modL",
        'configurable': true
      });
      function _0x5b1eca(_0x5689be) {
        var _0x554580 = new Float64Array(0x40);
        var _0x269925;
        for (_0x269925 = 0x0; _0x269925 < 0x40; _0x269925++) {
          _0x554580[_0x269925] = _0x5689be[_0x269925];
        }
        for (_0x269925 = 0x0; _0x269925 < 0x40; _0x269925++) {
          _0x5689be[_0x269925] = 0x0;
        }
        _0x4ebdb8(_0x5689be, _0x554580);
      }
      __defProp(_0x5b1eca, 'name', {
        'value': "reduce",
        'configurable': true
      });
      function _0x19a780(_0x976a05, _0xb3fdf3, _0x32d7b7, _0x2dbe3e) {
        var _0x114c7a = new Uint8Array(0x40);
        var _0x4d4404 = new Uint8Array(0x40);
        var _0x657232 = new Uint8Array(0x40);
        var _0x4cf786;
        var _0x105d6d;
        var _0x70bbab = new Float64Array(0x40);
        var _0x2b6b4a = [_0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2()];
        _0x4a07a4(_0x114c7a, _0x2dbe3e, 0x20);
        _0x114c7a[0x0] &= 0xf8;
        _0x114c7a[0x1f] &= 0x7f;
        _0x114c7a[0x1f] |= 0x40;
        var _0x68586d = _0x32d7b7 + 0x40;
        for (_0x4cf786 = 0x0; _0x4cf786 < _0x32d7b7; _0x4cf786++) {
          _0x976a05[0x40 + _0x4cf786] = _0xb3fdf3[_0x4cf786];
        }
        for (_0x4cf786 = 0x0; _0x4cf786 < 0x20; _0x4cf786++) {
          _0x976a05[0x20 + _0x4cf786] = _0x114c7a[0x20 + _0x4cf786];
        }
        _0x4a07a4(_0x657232, _0x976a05.subarray(0x20), _0x32d7b7 + 0x20);
        _0x5b1eca(_0x657232);
        _0x30eb6e(_0x2b6b4a, _0x657232);
        _0x1310f9(_0x976a05, _0x2b6b4a);
        for (_0x4cf786 = 0x20; _0x4cf786 < 0x40; _0x4cf786++) {
          _0x976a05[_0x4cf786] = _0x2dbe3e[_0x4cf786];
        }
        _0x4a07a4(_0x4d4404, _0x976a05, _0x32d7b7 + 0x40);
        _0x5b1eca(_0x4d4404);
        for (_0x4cf786 = 0x0; _0x4cf786 < 0x40; _0x4cf786++) {
          _0x70bbab[_0x4cf786] = 0x0;
        }
        for (_0x4cf786 = 0x0; _0x4cf786 < 0x20; _0x4cf786++) {
          _0x70bbab[_0x4cf786] = _0x657232[_0x4cf786];
        }
        for (_0x4cf786 = 0x0; _0x4cf786 < 0x20; _0x4cf786++) {
          for (_0x105d6d = 0x0; _0x105d6d < 0x20; _0x105d6d++) {
            _0x70bbab[_0x4cf786 + _0x105d6d] += _0x4d4404[_0x4cf786] * _0x114c7a[_0x105d6d];
          }
        }
        _0x4ebdb8(_0x976a05.subarray(0x20), _0x70bbab);
        return _0x68586d;
      }
      __defProp(_0x19a780, 'name', {
        'value': "crypto_sign",
        'configurable': true
      });
      function _0x45e7bf(_0x2da060, _0x53a6a6) {
        var _0x5489cd = _0x4ae1f2();
        var _0x36f1c0 = _0x4ae1f2();
        var _0x584c04 = _0x4ae1f2();
        var _0x508231 = _0x4ae1f2();
        var _0x5ce502 = _0x4ae1f2();
        var _0x4daf22 = _0x4ae1f2();
        var _0x429257 = _0x4ae1f2();
        _0x114d54(_0x2da060[0x2], _0x5a3cb5);
        _0x1c927e(_0x2da060[0x1], _0x53a6a6);
        _0x38971f(_0x584c04, _0x2da060[0x1]);
        _0xee6269(_0x508231, _0x584c04, _0x4d737f);
        _0x316440(_0x584c04, _0x584c04, _0x2da060[0x2]);
        _0x5080f7(_0x508231, _0x2da060[0x2], _0x508231);
        _0x38971f(_0x5ce502, _0x508231);
        _0x38971f(_0x4daf22, _0x5ce502);
        _0xee6269(_0x429257, _0x4daf22, _0x5ce502);
        _0xee6269(_0x5489cd, _0x429257, _0x584c04);
        _0xee6269(_0x5489cd, _0x5489cd, _0x508231);
        _0x2acd7c(_0x5489cd, _0x5489cd);
        _0xee6269(_0x5489cd, _0x5489cd, _0x584c04);
        _0xee6269(_0x5489cd, _0x5489cd, _0x508231);
        _0xee6269(_0x5489cd, _0x5489cd, _0x508231);
        _0xee6269(_0x2da060[0x0], _0x5489cd, _0x508231);
        _0x38971f(_0x36f1c0, _0x2da060[0x0]);
        _0xee6269(_0x36f1c0, _0x36f1c0, _0x508231);
        if (_0x3f1c73(_0x36f1c0, _0x584c04)) {
          _0xee6269(_0x2da060[0x0], _0x2da060[0x0], _0x4b5540);
        }
        _0x38971f(_0x36f1c0, _0x2da060[0x0]);
        _0xee6269(_0x36f1c0, _0x36f1c0, _0x508231);
        if (_0x3f1c73(_0x36f1c0, _0x584c04)) {
          return -0x1;
        }
        if (_0x3882b9(_0x2da060[0x0]) === _0x53a6a6[0x1f] >> 0x7) {
          _0x316440(_0x2da060[0x0], _0x331ca4, _0x2da060[0x0]);
        }
        _0xee6269(_0x2da060[0x3], _0x2da060[0x0], _0x2da060[0x1]);
        return 0x0;
      }
      __defProp(_0x45e7bf, 'name', {
        'value': "unpackneg",
        'configurable': true
      });
      function _0x5c87b3(_0x47ceee, _0x58783a, _0x58e2a9, _0x293420) {
        var _0x20942b;
        var _0x2348b5 = new Uint8Array(0x20);
        var _0x2570fe = new Uint8Array(0x40);
        var _0xd7260a = [_0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2()];
        var _0x1d1951 = [_0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2(), _0x4ae1f2()];
        if (_0x58e2a9 < 0x40) {
          return -0x1;
        }
        if (_0x45e7bf(_0x1d1951, _0x293420)) {
          return -0x1;
        }
        for (_0x20942b = 0x0; _0x20942b < _0x58e2a9; _0x20942b++) {
          _0x47ceee[_0x20942b] = _0x58783a[_0x20942b];
        }
        for (_0x20942b = 0x0; _0x20942b < 0x20; _0x20942b++) {
          _0x47ceee[_0x20942b + 0x20] = _0x293420[_0x20942b];
        }
        _0x4a07a4(_0x2570fe, _0x47ceee, _0x58e2a9);
        _0x5b1eca(_0x2570fe);
        _0x3b1c8f(_0xd7260a, _0x1d1951, _0x2570fe);
        _0x30eb6e(_0x1d1951, _0x58783a.subarray(0x20));
        _0x2d1ac0(_0xd7260a, _0x1d1951);
        _0x1310f9(_0x2348b5, _0xd7260a);
        _0x58e2a9 -= 0x40;
        if (_0x27a37b(_0x58783a, 0x0, _0x2348b5, 0x0, 0x20)) {
          for (_0x20942b = 0x0; _0x20942b < _0x58e2a9; _0x20942b++) {
            _0x47ceee[_0x20942b] = 0x0;
          }
          return -0x1;
        }
        for (_0x20942b = 0x0; _0x20942b < _0x58e2a9; _0x20942b++) {
          _0x47ceee[_0x20942b] = _0x58783a[_0x20942b + 0x40];
        }
        return _0x58e2a9;
      }
      __defProp(_0x5c87b3, 'name', {
        'value': "crypto_sign_open",
        'configurable': true
      });
      _0x4a847d.lowlevel = {
        'crypto_core_hsalsa20': _0x1bc7f4,
        'crypto_stream_xor': _0x4a38b7,
        'crypto_stream': _0x684a5e,
        'crypto_stream_salsa20_xor': _0x1431be,
        'crypto_stream_salsa20': _0x43c9ba,
        'crypto_onetimeauth': _0x205360,
        'crypto_onetimeauth_verify': _0x416b22,
        'crypto_verify_16': _0x336255,
        'crypto_verify_32': _0x307395,
        'crypto_secretbox': _0x52721c,
        'crypto_secretbox_open': _0x199844,
        'crypto_scalarmult': _0x2bf4b6,
        'crypto_scalarmult_base': _0xebdc20,
        'crypto_box_beforenm': _0x436c87,
        'crypto_box_afternm': _0x52721c,
        'crypto_box': _0x4d37b8,
        'crypto_box_open': _0x5080fa,
        'crypto_box_keypair': _0x5466e8,
        'crypto_hash': _0x4a07a4,
        'crypto_sign': _0x19a780,
        'crypto_sign_keypair': _0x4c01d4,
        'crypto_sign_open': _0x5c87b3,
        'crypto_secretbox_KEYBYTES': 0x20,
        'crypto_secretbox_NONCEBYTES': 0x18,
        'crypto_secretbox_ZEROBYTES': 0x20,
        'crypto_secretbox_BOXZEROBYTES': 0x10,
        'crypto_scalarmult_BYTES': 0x20,
        'crypto_scalarmult_SCALARBYTES': 0x20,
        'crypto_box_PUBLICKEYBYTES': 0x20,
        'crypto_box_SECRETKEYBYTES': 0x20,
        'crypto_box_BEFORENMBYTES': 0x20,
        'crypto_box_NONCEBYTES': 0x18,
        'crypto_box_ZEROBYTES': 0x20,
        'crypto_box_BOXZEROBYTES': 0x10,
        'crypto_sign_BYTES': 0x40,
        'crypto_sign_PUBLICKEYBYTES': 0x20,
        'crypto_sign_SECRETKEYBYTES': 0x40,
        'crypto_sign_SEEDBYTES': 0x20,
        'crypto_hash_BYTES': 0x40,
        'gf': _0x4ae1f2,
        'D': _0x4d737f,
        'L': _0x3f3b7f,
        'pack25519': _0x3aa099,
        'unpack25519': _0x1c927e,
        'M': _0xee6269,
        'A': _0x5080f7,
        'S': _0x38971f,
        'Z': _0x316440,
        'pow2523': _0x2acd7c,
        'add': _0x2d1ac0,
        'set25519': _0x114d54,
        'modL': _0x4ebdb8,
        'scalarmult': _0x3b1c8f,
        'scalarbase': _0x30eb6e
      };
      function _0x74f89b(_0x1f8f37, _0x141088) {
        if (_0x1f8f37.length !== 0x20) {
          throw new Error("bad key size");
        }
        if (_0x141088.length !== 0x18) {
          throw new Error("bad nonce size");
        }
      }
      __defProp(_0x74f89b, 'name', {
        'value': "checkLengths",
        'configurable': true
      });
      function _0x2dcbf7(_0x21e219, _0x85690f) {
        if (_0x21e219.length !== 0x20) {
          throw new Error("bad public key size");
        }
        if (_0x85690f.length !== 0x20) {
          throw new Error("bad secret key size");
        }
      }
      __defProp(_0x2dcbf7, 'name', {
        'value': "checkBoxLengths",
        'configurable': true
      });
      function _0x3b02ef() {
        for (var _0x200b55 = 0x0; _0x200b55 < arguments.length; _0x200b55++) {
          if (!(arguments[_0x200b55] instanceof Uint8Array)) {
            throw new TypeError("unexpected type, use Uint8Array");
          }
        }
      }
      __defProp(_0x3b02ef, 'name', {
        'value': "checkArrayTypes",
        'configurable': true
      });
      function _0x42d185(_0x4050fc) {
        for (var _0x2c47fd = 0x0; _0x2c47fd < _0x4050fc.length; _0x2c47fd++) {
          _0x4050fc[_0x2c47fd] = 0x0;
        }
      }
      __defProp(_0x42d185, 'name', {
        'value': "cleanup",
        'configurable': true
      });
      _0x4a847d.randomBytes = function (_0x41140b) {
        var _0x1082cf = new Uint8Array(_0x41140b);
        _0x1e1e66(_0x1082cf, _0x41140b);
        return _0x1082cf;
      };
      _0x4a847d.secretbox = function (_0x38d54e, _0x394354, _0xf4eaae) {
        _0x3b02ef(_0x38d54e, _0x394354, _0xf4eaae);
        _0x74f89b(_0xf4eaae, _0x394354);
        var _0x1c2bf5 = new Uint8Array(0x20 + _0x38d54e.length);
        var _0x5bee42 = new Uint8Array(_0x1c2bf5.length);
        for (var _0x561016 = 0x0; _0x561016 < _0x38d54e.length; _0x561016++) {
          _0x1c2bf5[_0x561016 + 0x20] = _0x38d54e[_0x561016];
        }
        _0x52721c(_0x5bee42, _0x1c2bf5, _0x1c2bf5.length, _0x394354, _0xf4eaae);
        return _0x5bee42.subarray(0x10);
      };
      _0x4a847d.secretbox.open = function (_0x13b818, _0x2e0cf3, _0x5ac75f) {
        _0x3b02ef(_0x13b818, _0x2e0cf3, _0x5ac75f);
        _0x74f89b(_0x5ac75f, _0x2e0cf3);
        var _0x5bc71d = new Uint8Array(0x10 + _0x13b818.length);
        var _0x6e086f = new Uint8Array(_0x5bc71d.length);
        for (var _0x1903dc = 0x0; _0x1903dc < _0x13b818.length; _0x1903dc++) {
          _0x5bc71d[_0x1903dc + 0x10] = _0x13b818[_0x1903dc];
        }
        if (_0x5bc71d.length < 0x20) {
          return null;
        }
        if (_0x199844(_0x6e086f, _0x5bc71d, _0x5bc71d.length, _0x2e0cf3, _0x5ac75f) !== 0x0) {
          return null;
        }
        return _0x6e086f.subarray(0x20);
      };
      _0x4a847d.secretbox.keyLength = 0x20;
      _0x4a847d.secretbox.nonceLength = 0x18;
      _0x4a847d.secretbox.overheadLength = 0x10;
      _0x4a847d.scalarMult = function (_0x2031fd, _0x5aba8f) {
        _0x3b02ef(_0x2031fd, _0x5aba8f);
        if (_0x2031fd.length !== 0x20) {
          throw new Error("bad n size");
        }
        if (_0x5aba8f.length !== 0x20) {
          throw new Error("bad p size");
        }
        var _0x2eed67 = new Uint8Array(0x20);
        _0x2bf4b6(_0x2eed67, _0x2031fd, _0x5aba8f);
        return _0x2eed67;
      };
      _0x4a847d.scalarMult.base = function (_0x2c54a7) {
        _0x3b02ef(_0x2c54a7);
        if (_0x2c54a7.length !== 0x20) {
          throw new Error("bad n size");
        }
        var _0x431186 = new Uint8Array(0x20);
        _0x2bf4b6(_0x431186, _0x2c54a7, _0x1f833d);
        return _0x431186;
      };
      _0x4a847d.scalarMult.scalarLength = 0x20;
      _0x4a847d.scalarMult.groupElementLength = 0x20;
      _0x4a847d.box = function (_0x89ce38, _0x566710, _0x5aa22b, _0x266e19) {
        var _0x1d0843 = _0x4a847d.box.before(_0x5aa22b, _0x266e19);
        return _0x4a847d.secretbox(_0x89ce38, _0x566710, _0x1d0843);
      };
      _0x4a847d.box.before = function (_0x530bdb, _0x19c512) {
        _0x3b02ef(_0x530bdb, _0x19c512);
        _0x2dcbf7(_0x530bdb, _0x19c512);
        var _0x739014 = new Uint8Array(0x20);
        _0x436c87(_0x739014, _0x530bdb, _0x19c512);
        return _0x739014;
      };
      _0x4a847d.box.after = _0x4a847d.secretbox;
      _0x4a847d.box.open = function (_0x18ee15, _0x45a076, _0x187a5c, _0x20c152) {
        var _0x2877a6 = _0x4a847d.box.before(_0x187a5c, _0x20c152);
        return _0x4a847d.secretbox.open(_0x18ee15, _0x45a076, _0x2877a6);
      };
      _0x4a847d.box.open.after = _0x4a847d.secretbox.open;
      _0x4a847d.box.keyPair = function () {
        var _0x15ce9d = new Uint8Array(0x20);
        var _0x3ba65e = new Uint8Array(0x20);
        _0x5466e8(_0x15ce9d, _0x3ba65e);
        return {
          'publicKey': _0x15ce9d,
          'secretKey': _0x3ba65e
        };
      };
      _0x4a847d.box.keyPair.fromSecretKey = function (_0x4099bb) {
        _0x3b02ef(_0x4099bb);
        if (_0x4099bb.length !== 0x20) {
          throw new Error("bad secret key size");
        }
        var _0x56e969 = new Uint8Array(0x20);
        _0x2bf4b6(_0x56e969, _0x4099bb, _0x1f833d);
        return {
          'publicKey': _0x56e969,
          'secretKey': new Uint8Array(_0x4099bb)
        };
      };
      _0x4a847d.box.publicKeyLength = 0x20;
      _0x4a847d.box.secretKeyLength = 0x20;
      _0x4a847d.box.sharedKeyLength = 0x20;
      _0x4a847d.box.nonceLength = 0x18;
      _0x4a847d.box.overheadLength = _0x4a847d.secretbox.overheadLength;
      _0x4a847d.sign = function (_0x333337, _0x3437fd) {
        _0x3b02ef(_0x333337, _0x3437fd);
        if (_0x3437fd.length !== 0x40) {
          throw new Error("bad secret key size");
        }
        var _0x4577a5 = new Uint8Array(0x40 + _0x333337.length);
        _0x19a780(_0x4577a5, _0x333337, _0x333337.length, _0x3437fd);
        return _0x4577a5;
      };
      _0x4a847d.sign.open = function (_0x4a7861, _0x46464a) {
        _0x3b02ef(_0x4a7861, _0x46464a);
        if (_0x46464a.length !== 0x20) {
          throw new Error("bad public key size");
        }
        var _0x4c43ba = new Uint8Array(_0x4a7861.length);
        var _0x2a8a54 = _0x5c87b3(_0x4c43ba, _0x4a7861, _0x4a7861.length, _0x46464a);
        if (_0x2a8a54 < 0x0) {
          return null;
        }
        var _0x32e86c = new Uint8Array(_0x2a8a54);
        for (var _0x3be0fa = 0x0; _0x3be0fa < _0x32e86c.length; _0x3be0fa++) {
          _0x32e86c[_0x3be0fa] = _0x4c43ba[_0x3be0fa];
        }
        return _0x32e86c;
      };
      _0x4a847d.sign.detached = function (_0x348b2b, _0x3fe5da) {
        var _0xce582f = _0x4a847d.sign(_0x348b2b, _0x3fe5da);
        var _0x30c854 = new Uint8Array(0x40);
        for (var _0x5503ae = 0x0; _0x5503ae < _0x30c854.length; _0x5503ae++) {
          _0x30c854[_0x5503ae] = _0xce582f[_0x5503ae];
        }
        return _0x30c854;
      };
      _0x4a847d.sign.detached.verify = function (_0x11c76a, _0x156907, _0x501f9a) {
        _0x3b02ef(_0x11c76a, _0x156907, _0x501f9a);
        if (_0x156907.length !== 0x40) {
          throw new Error("bad signature size");
        }
        if (_0x501f9a.length !== 0x20) {
          throw new Error("bad public key size");
        }
        var _0x1a2a04 = new Uint8Array(0x40 + _0x11c76a.length);
        var _0x59a982 = new Uint8Array(0x40 + _0x11c76a.length);
        var _0x380fc3;
        for (_0x380fc3 = 0x0; _0x380fc3 < 0x40; _0x380fc3++) {
          _0x1a2a04[_0x380fc3] = _0x156907[_0x380fc3];
        }
        for (_0x380fc3 = 0x0; _0x380fc3 < _0x11c76a.length; _0x380fc3++) {
          _0x1a2a04[_0x380fc3 + 0x40] = _0x11c76a[_0x380fc3];
        }
        return _0x5c87b3(_0x59a982, _0x1a2a04, _0x1a2a04.length, _0x501f9a) >= 0x0;
      };
      _0x4a847d.sign.keyPair = function () {
        var _0xe1cbc = new Uint8Array(0x20);
        var _0x49645f = new Uint8Array(0x40);
        _0x4c01d4(_0xe1cbc, _0x49645f);
        return {
          'publicKey': _0xe1cbc,
          'secretKey': _0x49645f
        };
      };
      _0x4a847d.sign.keyPair.fromSecretKey = function (_0x5f573e) {
        _0x3b02ef(_0x5f573e);
        if (_0x5f573e.length !== 0x40) {
          throw new Error("bad secret key size");
        }
        var _0x42785d = new Uint8Array(0x20);
        for (var _0x2e5f5c = 0x0; _0x2e5f5c < _0x42785d.length; _0x2e5f5c++) {
          _0x42785d[_0x2e5f5c] = _0x5f573e[0x20 + _0x2e5f5c];
        }
        return {
          'publicKey': _0x42785d,
          'secretKey': new Uint8Array(_0x5f573e)
        };
      };
      _0x4a847d.sign.keyPair.fromSeed = function (_0xc67f2a) {
        _0x3b02ef(_0xc67f2a);
        if (_0xc67f2a.length !== 0x20) {
          throw new Error("bad seed size");
        }
        var _0x23f6d0 = new Uint8Array(0x20);
        var _0x4dfff4 = new Uint8Array(0x40);
        for (var _0x41dd88 = 0x0; _0x41dd88 < 0x20; _0x41dd88++) {
          _0x4dfff4[_0x41dd88] = _0xc67f2a[_0x41dd88];
        }
        _0x4c01d4(_0x23f6d0, _0x4dfff4, true);
        return {
          'publicKey': _0x23f6d0,
          'secretKey': _0x4dfff4
        };
      };
      _0x4a847d.sign.publicKeyLength = 0x20;
      _0x4a847d.sign.secretKeyLength = 0x40;
      _0x4a847d.sign.seedLength = 0x20;
      _0x4a847d.sign.signatureLength = 0x40;
      _0x4a847d.hash = function (_0x5b9066) {
        _0x3b02ef(_0x5b9066);
        var _0x11214f = new Uint8Array(0x40);
        _0x4a07a4(_0x11214f, _0x5b9066, _0x5b9066.length);
        return _0x11214f;
      };
      _0x4a847d.hash.hashLength = 0x40;
      _0x4a847d.verify = function (_0x5cbfe2, _0x4ca24a) {
        _0x3b02ef(_0x5cbfe2, _0x4ca24a);
        if (_0x5cbfe2.length === 0x0 || _0x4ca24a.length === 0x0) {
          return false;
        }
        if (_0x5cbfe2.length !== _0x4ca24a.length) {
          return false;
        }
        return !!(_0x27a37b(_0x5cbfe2, 0x0, _0x4ca24a, 0x0, _0x5cbfe2.length) === 0x0);
      };
      _0x4a847d.setPRNG = function (_0x263c2d) {
        _0x1e1e66 = _0x263c2d;
      };
      (function () {
        var _0x9390f8 = typeof self !== 'undefined' ? self.crypto || self.msCrypto : null;
        if (_0x9390f8 && _0x9390f8.getRandomValues) {
          _0x4a847d.setPRNG(function (_0x234fdb, _0x224271) {
            var _0x5bd5cf;
            var _0x26d978 = new Uint8Array(_0x224271);
            for (_0x5bd5cf = 0x0; _0x5bd5cf < _0x224271; _0x5bd5cf += 0x10000) {
              _0x9390f8.getRandomValues(_0x26d978.subarray(_0x5bd5cf, _0x5bd5cf + Math.min(_0x224271 - _0x5bd5cf, 0x10000)));
            }
            for (_0x5bd5cf = 0x0; _0x5bd5cf < _0x224271; _0x5bd5cf++) {
              _0x234fdb[_0x5bd5cf] = _0x26d978[_0x5bd5cf];
            }
            _0x42d185(_0x26d978);
          });
        } else if (typeof __require !== 'undefined') {
          _0x9390f8 = require_crypto();
          if (_0x9390f8 && _0x9390f8.randomBytes) {
            _0x4a847d.setPRNG(function (_0x39ef0d, _0x45e6a9) {
              var _0x677db2;
              var _0x3c367e = _0x9390f8.randomBytes(_0x45e6a9);
              for (_0x677db2 = 0x0; _0x677db2 < _0x45e6a9; _0x677db2++) {
                _0x39ef0d[_0x677db2] = _0x3c367e[_0x677db2];
              }
              _0x42d185(_0x3c367e);
            });
          }
        }
      })();
    })(typeof _0xe93622 !== "undefined" && _0xe93622.exports ? _0xe93622.exports : self.nacl = self.nacl || {});
  }
});
var require_buffer = __commonJS({
  '(disabled):buffer'() {}
});
var require_sha256 = __commonJS({
  'node_modules/js-sha256/src/sha256.js'(_0x2f0a26, _0x148ca0) {
    (function () {
      'use strict';

      var _0x51200f = typeof window === 'object';
      var _0x4b8611 = _0x51200f ? window : {};
      if (_0x4b8611.JS_SHA256_NO_WINDOW) {
        _0x51200f = false;
      }
      var _0x36c2dd = !_0x51200f && typeof self === "object";
      var _0x355ea6 = !_0x4b8611.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (_0x355ea6) {
        _0x4b8611 = global;
      } else if (_0x36c2dd) {
        _0x4b8611 = self;
      }
      var _0x4a85af = !_0x4b8611.JS_SHA256_NO_COMMON_JS && typeof _0x148ca0 === "object" && _0x148ca0.exports;
      var _0x521b44 = typeof define === 'function' && define.amd;
      var _0x493819 = !_0x4b8611.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
      var _0x151ded = "0123456789abcdef".split('');
      var _0x39134a = [-0x80000000, 0x800000, 0x8000, 0x80];
      var _0x535fe1 = [0x18, 0x10, 0x8, 0x0];
      var _0x214be9 = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
      var _0x1d7d96 = ["hex", "array", "digest", "arrayBuffer"];
      var _0xb0edcb = [];
      if (_0x4b8611.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function (_0x2f2980) {
          return Object.prototype.toString.call(_0x2f2980) === "[object Array]";
        };
      }
      if (_0x493819 && (_0x4b8611.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function (_0x370aeb) {
          return typeof _0x370aeb === "object" && _0x370aeb.buffer && _0x370aeb.buffer.constructor === ArrayBuffer;
        };
      }
      var _0x42cad7 = __defProp(function (_0x2842e2, _0x696e1e) {
        return function (_0xc99a1a) {
          return new _0x12aa81(_0x696e1e, true).update(_0xc99a1a)[_0x2842e2]();
        };
      }, 'name', {
        'value': "createOutputMethod",
        'configurable': true
      });
      var _0x183109 = __defProp(function (_0x97e14) {
        var _0x2437d3 = _0x42cad7("hex", _0x97e14);
        if (_0x355ea6) {
          _0x2437d3 = _0x2225c4(_0x2437d3, _0x97e14);
        }
        _0x2437d3.create = function () {
          return new _0x12aa81(_0x97e14);
        };
        _0x2437d3.update = function (_0x91741b) {
          return _0x2437d3.create().update(_0x91741b);
        };
        for (var _0x47a6f1 = 0x0; _0x47a6f1 < _0x1d7d96.length; ++_0x47a6f1) {
          var _0x3cff96 = _0x1d7d96[_0x47a6f1];
          _0x2437d3[_0x3cff96] = _0x42cad7(_0x3cff96, _0x97e14);
        }
        return _0x2437d3;
      }, 'name', {
        'value': 'createMethod',
        'configurable': true
      });
      var _0x2225c4 = __defProp(function (_0x14d2de, _0x27fe48) {
        var _0x4ec641 = require_crypto();
        var _0x2d9ba9 = require_buffer().Buffer;
        var _0x5209b7 = _0x27fe48 ? "sha224" : "sha256";
        var _0x5388e5;
        if (_0x2d9ba9.from && !_0x4b8611.JS_SHA256_NO_BUFFER_FROM) {
          _0x5388e5 = _0x2d9ba9.from;
        } else {
          _0x5388e5 = __defProp(function (_0x3eae92) {
            return new _0x2d9ba9(_0x3eae92);
          }, 'name', {
            'value': "bufferFrom",
            'configurable': true
          });
        }
        var _0x5a77da = __defProp(function (_0x237aaf) {
          if (typeof _0x237aaf === 'string') {
            return _0x4ec641.createHash(_0x5209b7).update(_0x237aaf, "utf8").digest("hex");
          } else {
            if (_0x237aaf === null || _0x237aaf === undefined) {
              throw new Error("input is invalid type");
            } else if (_0x237aaf.constructor === ArrayBuffer) {
              _0x237aaf = new Uint8Array(_0x237aaf);
            }
          }
          return Array.isArray(_0x237aaf) || ArrayBuffer.isView(_0x237aaf) || _0x237aaf.constructor === _0x2d9ba9 ? _0x4ec641.createHash(_0x5209b7).update(_0x5388e5(_0x237aaf)).digest("hex") : _0x14d2de(_0x237aaf);
        }, 'name', {
          'value': "nodeMethod",
          'configurable': true
        });
        return _0x5a77da;
      }, 'name', {
        'value': "nodeWrap",
        'configurable': true
      });
      var _0x1267ca = __defProp(function (_0x3f53ac, _0x2f7dbd) {
        return function (_0x37768a, _0x2a1020) {
          return new _0x2e1a8a(_0x37768a, _0x2f7dbd, true).update(_0x2a1020)[_0x3f53ac]();
        };
      }, 'name', {
        'value': "createHmacOutputMethod",
        'configurable': true
      });
      var _0x4dc197 = __defProp(function (_0x32549d) {
        var _0x50592b = _0x1267ca("hex", _0x32549d);
        _0x50592b.create = function (_0x3452d0) {
          return new _0x2e1a8a(_0x3452d0, _0x32549d);
        };
        _0x50592b.update = function (_0x4ceb6d, _0x148f7f) {
          return _0x50592b.create(_0x4ceb6d).update(_0x148f7f);
        };
        for (var _0x1b1718 = 0x0; _0x1b1718 < _0x1d7d96.length; ++_0x1b1718) {
          var _0x3a13e3 = _0x1d7d96[_0x1b1718];
          _0x50592b[_0x3a13e3] = _0x1267ca(_0x3a13e3, _0x32549d);
        }
        return _0x50592b;
      }, 'name', {
        'value': 'createHmacMethod',
        'configurable': true
      });
      function _0x12aa81(_0x2dae7a, _0x3ff4c4) {
        if (_0x3ff4c4) {
          _0xb0edcb[0x0] = _0xb0edcb[0x10] = _0xb0edcb[0x1] = _0xb0edcb[0x2] = _0xb0edcb[0x3] = _0xb0edcb[0x4] = _0xb0edcb[0x5] = _0xb0edcb[0x6] = _0xb0edcb[0x7] = _0xb0edcb[0x8] = _0xb0edcb[0x9] = _0xb0edcb[0xa] = _0xb0edcb[0xb] = _0xb0edcb[0xc] = _0xb0edcb[0xd] = _0xb0edcb[0xe] = _0xb0edcb[0xf] = 0x0;
          this.blocks = _0xb0edcb;
        } else {
          this.blocks = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        }
        if (_0x2dae7a) {
          this.h0 = 0xc1059ed8;
          this.h1 = 0x367cd507;
          this.h2 = 0x3070dd17;
          this.h3 = 0xf70e5939;
          this.h4 = 0xffc00b31;
          this.h5 = 0x68581511;
          this.h6 = 0x64f98fa7;
          this.h7 = 0xbefa4fa4;
        } else {
          this.h0 = 0x6a09e667;
          this.h1 = 0xbb67ae85;
          this.h2 = 0x3c6ef372;
          this.h3 = 0xa54ff53a;
          this.h4 = 0x510e527f;
          this.h5 = 0x9b05688c;
          this.h6 = 0x1f83d9ab;
          this.h7 = 0x5be0cd19;
        }
        this.block = this.start = this.bytes = this.hBytes = 0x0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = _0x2dae7a;
      }
      __defProp(_0x12aa81, 'name', {
        'value': "Sha256",
        'configurable': true
      });
      _0x12aa81.prototype.update = function (_0xbb603) {
        if (this.finalized) {
          return;
        }
        var _0x120c61;
        var _0xbfe443 = typeof _0xbb603;
        if (_0xbfe443 !== "string") {
          if (_0xbfe443 === 'object') {
            if (_0xbb603 === null) {
              throw new Error("input is invalid type");
            } else {
              if (_0x493819 && _0xbb603.constructor === ArrayBuffer) {
                _0xbb603 = new Uint8Array(_0xbb603);
              } else {
                if (!Array.isArray(_0xbb603)) {
                  if (!_0x493819 || !ArrayBuffer.isView(_0xbb603)) {
                    throw new Error("input is invalid type");
                  }
                }
              }
            }
          } else {
            throw new Error("input is invalid type");
          }
          _0x120c61 = true;
        }
        var _0x1421f8;
        var _0x44798f = 0x0;
        var _0x2c790b;
        var _0x55f07b = _0xbb603.length;
        var _0x2723ef = this.blocks;
        while (_0x44798f < _0x55f07b) {
          if (this.hashed) {
            this.hashed = false;
            _0x2723ef[0x0] = this.block;
            this.block = _0x2723ef[0x10] = _0x2723ef[0x1] = _0x2723ef[0x2] = _0x2723ef[0x3] = _0x2723ef[0x4] = _0x2723ef[0x5] = _0x2723ef[0x6] = _0x2723ef[0x7] = _0x2723ef[0x8] = _0x2723ef[0x9] = _0x2723ef[0xa] = _0x2723ef[0xb] = _0x2723ef[0xc] = _0x2723ef[0xd] = _0x2723ef[0xe] = _0x2723ef[0xf] = 0x0;
          }
          if (_0x120c61) {
            for (_0x2c790b = this.start; _0x44798f < _0x55f07b && _0x2c790b < 0x40; ++_0x44798f) {
              _0x2723ef[_0x2c790b >>> 0x2] |= _0xbb603[_0x44798f] << _0x535fe1[_0x2c790b++ & 0x3];
            }
          } else {
            for (_0x2c790b = this.start; _0x44798f < _0x55f07b && _0x2c790b < 0x40; ++_0x44798f) {
              _0x1421f8 = _0xbb603.charCodeAt(_0x44798f);
              if (_0x1421f8 < 0x80) {
                _0x2723ef[_0x2c790b >>> 0x2] |= _0x1421f8 << _0x535fe1[_0x2c790b++ & 0x3];
              } else {
                if (_0x1421f8 < 0x800) {
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0xc0 | _0x1421f8 >>> 0x6) << _0x535fe1[_0x2c790b++ & 0x3];
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0x80 | _0x1421f8 & 0x3f) << _0x535fe1[_0x2c790b++ & 0x3];
                } else if (_0x1421f8 < 0xd800 || _0x1421f8 >= 0xe000) {
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0xe0 | _0x1421f8 >>> 0xc) << _0x535fe1[_0x2c790b++ & 0x3];
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0x80 | _0x1421f8 >>> 0x6 & 0x3f) << _0x535fe1[_0x2c790b++ & 0x3];
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0x80 | _0x1421f8 & 0x3f) << _0x535fe1[_0x2c790b++ & 0x3];
                } else {
                  _0x1421f8 = 0x10000 + ((_0x1421f8 & 0x3ff) << 0xa | _0xbb603.charCodeAt(++_0x44798f) & 0x3ff);
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0xf0 | _0x1421f8 >>> 0x12) << _0x535fe1[_0x2c790b++ & 0x3];
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0x80 | _0x1421f8 >>> 0xc & 0x3f) << _0x535fe1[_0x2c790b++ & 0x3];
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0x80 | _0x1421f8 >>> 0x6 & 0x3f) << _0x535fe1[_0x2c790b++ & 0x3];
                  _0x2723ef[_0x2c790b >>> 0x2] |= (0x80 | _0x1421f8 & 0x3f) << _0x535fe1[_0x2c790b++ & 0x3];
                }
              }
            }
          }
          this.lastByteIndex = _0x2c790b;
          this.bytes += _0x2c790b - this.start;
          if (_0x2c790b >= 0x40) {
            this.block = _0x2723ef[0x10];
            this.start = _0x2c790b - 0x40;
            this.hash();
            this.hashed = true;
          } else {
            this.start = _0x2c790b;
          }
        }
        if (this.bytes > 0xffffffff) {
          this.hBytes += this.bytes / 0x100000000 << 0x0;
          this.bytes = this.bytes % 0x100000000;
        }
        return this;
      };
      _0x12aa81.prototype.finalize = function () {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var _0x27c7ed = this.blocks;
        var _0x3e26bd = this.lastByteIndex;
        _0x27c7ed[0x10] = this.block;
        _0x27c7ed[_0x3e26bd >>> 0x2] |= _0x39134a[_0x3e26bd & 0x3];
        this.block = _0x27c7ed[0x10];
        if (_0x3e26bd >= 0x38) {
          if (!this.hashed) {
            this.hash();
          }
          _0x27c7ed[0x0] = this.block;
          _0x27c7ed[0x10] = _0x27c7ed[0x1] = _0x27c7ed[0x2] = _0x27c7ed[0x3] = _0x27c7ed[0x4] = _0x27c7ed[0x5] = _0x27c7ed[0x6] = _0x27c7ed[0x7] = _0x27c7ed[0x8] = _0x27c7ed[0x9] = _0x27c7ed[0xa] = _0x27c7ed[0xb] = _0x27c7ed[0xc] = _0x27c7ed[0xd] = _0x27c7ed[0xe] = _0x27c7ed[0xf] = 0x0;
        }
        _0x27c7ed[0xe] = this.hBytes << 0x3 | this.bytes >>> 0x1d;
        _0x27c7ed[0xf] = this.bytes << 0x3;
        this.hash();
      };
      _0x12aa81.prototype.hash = function () {
        var _0x3c62fa = this.h0;
        var _0x5df4e2 = this.h1;
        var _0x1cc013 = this.h2;
        var _0x3ef922 = this.h3;
        var _0x2ba40d = this.h4;
        var _0x1e85f3 = this.h5;
        var _0x36dc22 = this.h6;
        var _0x4d6ff4 = this.h7;
        var _0x494cb2 = this.blocks;
        var _0x12a2a1;
        var _0x20137d;
        var _0x39eefd;
        var _0xe15dc;
        var _0x4a5bd2;
        var _0x4789d9;
        var _0x240cba;
        var _0x40e016;
        var _0x445550;
        var _0xffe762;
        var _0x262aa5;
        for (_0x12a2a1 = 0x10; _0x12a2a1 < 0x40; ++_0x12a2a1) {
          _0x4a5bd2 = _0x494cb2[_0x12a2a1 - 0xf];
          _0x20137d = (_0x4a5bd2 >>> 0x7 | _0x4a5bd2 << 0x19) ^ (_0x4a5bd2 >>> 0x12 | _0x4a5bd2 << 0xe) ^ _0x4a5bd2 >>> 0x3;
          _0x4a5bd2 = _0x494cb2[_0x12a2a1 - 0x2];
          _0x39eefd = (_0x4a5bd2 >>> 0x11 | _0x4a5bd2 << 0xf) ^ (_0x4a5bd2 >>> 0x13 | _0x4a5bd2 << 0xd) ^ _0x4a5bd2 >>> 0xa;
          _0x494cb2[_0x12a2a1] = _0x494cb2[_0x12a2a1 - 0x10] + _0x20137d + _0x494cb2[_0x12a2a1 - 0x7] + _0x39eefd << 0x0;
        }
        _0x262aa5 = _0x5df4e2 & _0x1cc013;
        for (_0x12a2a1 = 0x0; _0x12a2a1 < 0x40; _0x12a2a1 += 0x4) {
          if (this.first) {
            if (this.is224) {
              _0x40e016 = 0x49400;
              _0x4a5bd2 = _0x494cb2[0x0] - 0x543c9a5b;
              _0x4d6ff4 = _0x4a5bd2 - 0x8f1a6c7 << 0x0;
              _0x3ef922 = _0x4a5bd2 + 0x170e9b5 << 0x0;
            } else {
              _0x40e016 = 0x2a01a605;
              _0x4a5bd2 = _0x494cb2[0x0] - 0xc881298;
              _0x4d6ff4 = _0x4a5bd2 - 0x5ab00ac6 << 0x0;
              _0x3ef922 = _0x4a5bd2 + 0x8909ae5 << 0x0;
            }
            this.first = false;
          } else {
            _0x20137d = (_0x3c62fa >>> 0x2 | _0x3c62fa << 0x1e) ^ (_0x3c62fa >>> 0xd | _0x3c62fa << 0x13) ^ (_0x3c62fa >>> 0x16 | _0x3c62fa << 0xa);
            _0x39eefd = (_0x2ba40d >>> 0x6 | _0x2ba40d << 0x1a) ^ (_0x2ba40d >>> 0xb | _0x2ba40d << 0x15) ^ (_0x2ba40d >>> 0x19 | _0x2ba40d << 0x7);
            _0x40e016 = _0x3c62fa & _0x5df4e2;
            _0xe15dc = _0x40e016 ^ _0x3c62fa & _0x1cc013 ^ _0x262aa5;
            _0x240cba = _0x2ba40d & _0x1e85f3 ^ ~_0x2ba40d & _0x36dc22;
            _0x4a5bd2 = _0x4d6ff4 + _0x39eefd + _0x240cba + _0x214be9[_0x12a2a1] + _0x494cb2[_0x12a2a1];
            _0x4789d9 = _0x20137d + _0xe15dc;
            _0x4d6ff4 = _0x3ef922 + _0x4a5bd2 << 0x0;
            _0x3ef922 = _0x4a5bd2 + _0x4789d9 << 0x0;
          }
          _0x20137d = (_0x3ef922 >>> 0x2 | _0x3ef922 << 0x1e) ^ (_0x3ef922 >>> 0xd | _0x3ef922 << 0x13) ^ (_0x3ef922 >>> 0x16 | _0x3ef922 << 0xa);
          _0x39eefd = (_0x4d6ff4 >>> 0x6 | _0x4d6ff4 << 0x1a) ^ (_0x4d6ff4 >>> 0xb | _0x4d6ff4 << 0x15) ^ (_0x4d6ff4 >>> 0x19 | _0x4d6ff4 << 0x7);
          _0x445550 = _0x3ef922 & _0x3c62fa;
          _0xe15dc = _0x445550 ^ _0x3ef922 & _0x5df4e2 ^ _0x40e016;
          _0x240cba = _0x4d6ff4 & _0x2ba40d ^ ~_0x4d6ff4 & _0x1e85f3;
          _0x4a5bd2 = _0x36dc22 + _0x39eefd + _0x240cba + _0x214be9[_0x12a2a1 + 0x1] + _0x494cb2[_0x12a2a1 + 0x1];
          _0x4789d9 = _0x20137d + _0xe15dc;
          _0x36dc22 = _0x1cc013 + _0x4a5bd2 << 0x0;
          _0x1cc013 = _0x4a5bd2 + _0x4789d9 << 0x0;
          _0x20137d = (_0x1cc013 >>> 0x2 | _0x1cc013 << 0x1e) ^ (_0x1cc013 >>> 0xd | _0x1cc013 << 0x13) ^ (_0x1cc013 >>> 0x16 | _0x1cc013 << 0xa);
          _0x39eefd = (_0x36dc22 >>> 0x6 | _0x36dc22 << 0x1a) ^ (_0x36dc22 >>> 0xb | _0x36dc22 << 0x15) ^ (_0x36dc22 >>> 0x19 | _0x36dc22 << 0x7);
          _0xffe762 = _0x1cc013 & _0x3ef922;
          _0xe15dc = _0xffe762 ^ _0x1cc013 & _0x3c62fa ^ _0x445550;
          _0x240cba = _0x36dc22 & _0x4d6ff4 ^ ~_0x36dc22 & _0x2ba40d;
          _0x4a5bd2 = _0x1e85f3 + _0x39eefd + _0x240cba + _0x214be9[_0x12a2a1 + 0x2] + _0x494cb2[_0x12a2a1 + 0x2];
          _0x4789d9 = _0x20137d + _0xe15dc;
          _0x1e85f3 = _0x5df4e2 + _0x4a5bd2 << 0x0;
          _0x5df4e2 = _0x4a5bd2 + _0x4789d9 << 0x0;
          _0x20137d = (_0x5df4e2 >>> 0x2 | _0x5df4e2 << 0x1e) ^ (_0x5df4e2 >>> 0xd | _0x5df4e2 << 0x13) ^ (_0x5df4e2 >>> 0x16 | _0x5df4e2 << 0xa);
          _0x39eefd = (_0x1e85f3 >>> 0x6 | _0x1e85f3 << 0x1a) ^ (_0x1e85f3 >>> 0xb | _0x1e85f3 << 0x15) ^ (_0x1e85f3 >>> 0x19 | _0x1e85f3 << 0x7);
          _0x262aa5 = _0x5df4e2 & _0x1cc013;
          _0xe15dc = _0x262aa5 ^ _0x5df4e2 & _0x3ef922 ^ _0xffe762;
          _0x240cba = _0x1e85f3 & _0x36dc22 ^ ~_0x1e85f3 & _0x4d6ff4;
          _0x4a5bd2 = _0x2ba40d + _0x39eefd + _0x240cba + _0x214be9[_0x12a2a1 + 0x3] + _0x494cb2[_0x12a2a1 + 0x3];
          _0x4789d9 = _0x20137d + _0xe15dc;
          _0x2ba40d = _0x3c62fa + _0x4a5bd2 << 0x0;
          _0x3c62fa = _0x4a5bd2 + _0x4789d9 << 0x0;
          this.chromeBugWorkAround = true;
        }
        this.h0 = this.h0 + _0x3c62fa << 0x0;
        this.h1 = this.h1 + _0x5df4e2 << 0x0;
        this.h2 = this.h2 + _0x1cc013 << 0x0;
        this.h3 = this.h3 + _0x3ef922 << 0x0;
        this.h4 = this.h4 + _0x2ba40d << 0x0;
        this.h5 = this.h5 + _0x1e85f3 << 0x0;
        this.h6 = this.h6 + _0x36dc22 << 0x0;
        this.h7 = this.h7 + _0x4d6ff4 << 0x0;
      };
      _0x12aa81.prototype.hex = function () {
        this.finalize();
        var _0x5a5eed = this.h0;
        var _0x4b04b6 = this.h1;
        var _0x29d094 = this.h2;
        var _0xa6e3ad = this.h3;
        var _0x1232fc = this.h4;
        var _0x177829 = this.h5;
        var _0x4d4d7d = this.h6;
        var _0x3e062f = this.h7;
        var _0x3c6fb2 = _0x151ded[_0x5a5eed >>> 0x1c & 0xf] + _0x151ded[_0x5a5eed >>> 0x18 & 0xf] + _0x151ded[_0x5a5eed >>> 0x14 & 0xf] + _0x151ded[_0x5a5eed >>> 0x10 & 0xf] + _0x151ded[_0x5a5eed >>> 0xc & 0xf] + _0x151ded[_0x5a5eed >>> 0x8 & 0xf] + _0x151ded[_0x5a5eed >>> 0x4 & 0xf] + _0x151ded[_0x5a5eed & 0xf] + _0x151ded[_0x4b04b6 >>> 0x1c & 0xf] + _0x151ded[_0x4b04b6 >>> 0x18 & 0xf] + _0x151ded[_0x4b04b6 >>> 0x14 & 0xf] + _0x151ded[_0x4b04b6 >>> 0x10 & 0xf] + _0x151ded[_0x4b04b6 >>> 0xc & 0xf] + _0x151ded[_0x4b04b6 >>> 0x8 & 0xf] + _0x151ded[_0x4b04b6 >>> 0x4 & 0xf] + _0x151ded[_0x4b04b6 & 0xf] + _0x151ded[_0x29d094 >>> 0x1c & 0xf] + _0x151ded[_0x29d094 >>> 0x18 & 0xf] + _0x151ded[_0x29d094 >>> 0x14 & 0xf] + _0x151ded[_0x29d094 >>> 0x10 & 0xf] + _0x151ded[_0x29d094 >>> 0xc & 0xf] + _0x151ded[_0x29d094 >>> 0x8 & 0xf] + _0x151ded[_0x29d094 >>> 0x4 & 0xf] + _0x151ded[_0x29d094 & 0xf] + _0x151ded[_0xa6e3ad >>> 0x1c & 0xf] + _0x151ded[_0xa6e3ad >>> 0x18 & 0xf] + _0x151ded[_0xa6e3ad >>> 0x14 & 0xf] + _0x151ded[_0xa6e3ad >>> 0x10 & 0xf] + _0x151ded[_0xa6e3ad >>> 0xc & 0xf] + _0x151ded[_0xa6e3ad >>> 0x8 & 0xf] + _0x151ded[_0xa6e3ad >>> 0x4 & 0xf] + _0x151ded[_0xa6e3ad & 0xf] + _0x151ded[_0x1232fc >>> 0x1c & 0xf] + _0x151ded[_0x1232fc >>> 0x18 & 0xf] + _0x151ded[_0x1232fc >>> 0x14 & 0xf] + _0x151ded[_0x1232fc >>> 0x10 & 0xf] + _0x151ded[_0x1232fc >>> 0xc & 0xf] + _0x151ded[_0x1232fc >>> 0x8 & 0xf] + _0x151ded[_0x1232fc >>> 0x4 & 0xf] + _0x151ded[_0x1232fc & 0xf] + _0x151ded[_0x177829 >>> 0x1c & 0xf] + _0x151ded[_0x177829 >>> 0x18 & 0xf] + _0x151ded[_0x177829 >>> 0x14 & 0xf] + _0x151ded[_0x177829 >>> 0x10 & 0xf] + _0x151ded[_0x177829 >>> 0xc & 0xf] + _0x151ded[_0x177829 >>> 0x8 & 0xf] + _0x151ded[_0x177829 >>> 0x4 & 0xf] + _0x151ded[_0x177829 & 0xf] + _0x151ded[_0x4d4d7d >>> 0x1c & 0xf] + _0x151ded[_0x4d4d7d >>> 0x18 & 0xf] + _0x151ded[_0x4d4d7d >>> 0x14 & 0xf] + _0x151ded[_0x4d4d7d >>> 0x10 & 0xf] + _0x151ded[_0x4d4d7d >>> 0xc & 0xf] + _0x151ded[_0x4d4d7d >>> 0x8 & 0xf] + _0x151ded[_0x4d4d7d >>> 0x4 & 0xf] + _0x151ded[_0x4d4d7d & 0xf];
        if (!this.is224) {
          _0x3c6fb2 += _0x151ded[_0x3e062f >>> 0x1c & 0xf] + _0x151ded[_0x3e062f >>> 0x18 & 0xf] + _0x151ded[_0x3e062f >>> 0x14 & 0xf] + _0x151ded[_0x3e062f >>> 0x10 & 0xf] + _0x151ded[_0x3e062f >>> 0xc & 0xf] + _0x151ded[_0x3e062f >>> 0x8 & 0xf] + _0x151ded[_0x3e062f >>> 0x4 & 0xf] + _0x151ded[_0x3e062f & 0xf];
        }
        return _0x3c6fb2;
      };
      _0x12aa81.prototype.toString = _0x12aa81.prototype.hex;
      _0x12aa81.prototype.digest = function () {
        this.finalize();
        var _0x5c5465 = this.h0;
        var _0x4741b2 = this.h1;
        var _0x573599 = this.h2;
        var _0x3fc876 = this.h3;
        var _0x5aff30 = this.h4;
        var _0x13cae5 = this.h5;
        var _0x1d999d = this.h6;
        var _0x356a65 = this.h7;
        var _0x4aa6b3 = [_0x5c5465 >>> 0x18 & 0xff, _0x5c5465 >>> 0x10 & 0xff, _0x5c5465 >>> 0x8 & 0xff, _0x5c5465 & 0xff, _0x4741b2 >>> 0x18 & 0xff, _0x4741b2 >>> 0x10 & 0xff, _0x4741b2 >>> 0x8 & 0xff, _0x4741b2 & 0xff, _0x573599 >>> 0x18 & 0xff, _0x573599 >>> 0x10 & 0xff, _0x573599 >>> 0x8 & 0xff, _0x573599 & 0xff, _0x3fc876 >>> 0x18 & 0xff, _0x3fc876 >>> 0x10 & 0xff, _0x3fc876 >>> 0x8 & 0xff, _0x3fc876 & 0xff, _0x5aff30 >>> 0x18 & 0xff, _0x5aff30 >>> 0x10 & 0xff, _0x5aff30 >>> 0x8 & 0xff, _0x5aff30 & 0xff, _0x13cae5 >>> 0x18 & 0xff, _0x13cae5 >>> 0x10 & 0xff, _0x13cae5 >>> 0x8 & 0xff, _0x13cae5 & 0xff, _0x1d999d >>> 0x18 & 0xff, _0x1d999d >>> 0x10 & 0xff, _0x1d999d >>> 0x8 & 0xff, _0x1d999d & 0xff];
        if (!this.is224) {
          _0x4aa6b3.push(_0x356a65 >>> 0x18 & 0xff, _0x356a65 >>> 0x10 & 0xff, _0x356a65 >>> 0x8 & 0xff, _0x356a65 & 0xff);
        }
        return _0x4aa6b3;
      };
      _0x12aa81.prototype.array = _0x12aa81.prototype.digest;
      _0x12aa81.prototype.arrayBuffer = function () {
        this.finalize();
        var _0x135ae5 = new ArrayBuffer(this.is224 ? 0x1c : 0x20);
        var _0xec47fd = new DataView(_0x135ae5);
        _0xec47fd.setUint32(0x0, this.h0);
        _0xec47fd.setUint32(0x4, this.h1);
        _0xec47fd.setUint32(0x8, this.h2);
        _0xec47fd.setUint32(0xc, this.h3);
        _0xec47fd.setUint32(0x10, this.h4);
        _0xec47fd.setUint32(0x14, this.h5);
        _0xec47fd.setUint32(0x18, this.h6);
        if (!this.is224) {
          _0xec47fd.setUint32(0x1c, this.h7);
        }
        return _0x135ae5;
      };
      function _0x2e1a8a(_0x40507b, _0x3989c5, _0x581f73) {
        var _0x2ff52b;
        var _0x1d948d = typeof _0x40507b;
        if (_0x1d948d === "string") {
          var _0x416a4c = [];
          var _0x3c5483 = _0x40507b.length;
          var _0x277884 = 0x0;
          var _0x35b67c;
          for (_0x2ff52b = 0x0; _0x2ff52b < _0x3c5483; ++_0x2ff52b) {
            _0x35b67c = _0x40507b.charCodeAt(_0x2ff52b);
            if (_0x35b67c < 0x80) {
              _0x416a4c[_0x277884++] = _0x35b67c;
            } else {
              if (_0x35b67c < 0x800) {
                _0x416a4c[_0x277884++] = 0xc0 | _0x35b67c >>> 0x6;
                _0x416a4c[_0x277884++] = 0x80 | _0x35b67c & 0x3f;
              } else if (_0x35b67c < 0xd800 || _0x35b67c >= 0xe000) {
                _0x416a4c[_0x277884++] = 0xe0 | _0x35b67c >>> 0xc;
                _0x416a4c[_0x277884++] = 0x80 | _0x35b67c >>> 0x6 & 0x3f;
                _0x416a4c[_0x277884++] = 0x80 | _0x35b67c & 0x3f;
              } else {
                _0x35b67c = 0x10000 + ((_0x35b67c & 0x3ff) << 0xa | _0x40507b.charCodeAt(++_0x2ff52b) & 0x3ff);
                _0x416a4c[_0x277884++] = 0xf0 | _0x35b67c >>> 0x12;
                _0x416a4c[_0x277884++] = 0x80 | _0x35b67c >>> 0xc & 0x3f;
                _0x416a4c[_0x277884++] = 0x80 | _0x35b67c >>> 0x6 & 0x3f;
                _0x416a4c[_0x277884++] = 0x80 | _0x35b67c & 0x3f;
              }
            }
          }
          _0x40507b = _0x416a4c;
        } else {
          if (_0x1d948d === "object") {
            if (_0x40507b === null) {
              throw new Error("input is invalid type");
            } else {
              if (_0x493819 && _0x40507b.constructor === ArrayBuffer) {
                _0x40507b = new Uint8Array(_0x40507b);
              } else {
                if (!Array.isArray(_0x40507b)) {
                  if (!_0x493819 || !ArrayBuffer.isView(_0x40507b)) {
                    throw new Error("input is invalid type");
                  }
                }
              }
            }
          } else {
            throw new Error("input is invalid type");
          }
        }
        if (_0x40507b.length > 0x40) {
          _0x40507b = new _0x12aa81(_0x3989c5, true).update(_0x40507b).array();
        }
        var _0x284fb6 = [];
        var _0x5a1e1b = [];
        for (_0x2ff52b = 0x0; _0x2ff52b < 0x40; ++_0x2ff52b) {
          var _0x15f737 = _0x40507b[_0x2ff52b] || 0x0;
          _0x284fb6[_0x2ff52b] = 0x5c ^ _0x15f737;
          _0x5a1e1b[_0x2ff52b] = 0x36 ^ _0x15f737;
        }
        _0x12aa81.call(this, _0x3989c5, _0x581f73);
        this.update(_0x5a1e1b);
        this.oKeyPad = _0x284fb6;
        this.inner = true;
        this.sharedMemory = _0x581f73;
      }
      __defProp(_0x2e1a8a, 'name', {
        'value': 'HmacSha256',
        'configurable': true
      });
      _0x2e1a8a.prototype = new _0x12aa81();
      _0x2e1a8a.prototype.finalize = function () {
        _0x12aa81.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var _0x4016ca = this.array();
          _0x12aa81.call(this, this.is224, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(_0x4016ca);
          _0x12aa81.prototype.finalize.call(this);
        }
      };
      var _0x4f246a = _0x183109();
      _0x4f246a.sha256 = _0x4f246a;
      _0x4f246a.sha224 = _0x183109(true);
      _0x4f246a.sha256.hmac = _0x4dc197();
      _0x4f246a.sha224.hmac = _0x4dc197(true);
      if (_0x4a85af) {
        _0x148ca0.exports = _0x4f246a;
      } else {
        _0x4b8611.sha256 = _0x4f246a.sha256;
        _0x4b8611.sha224 = _0x4f246a.sha224;
        if (_0x521b44) {
          define(function () {
            return _0x4f246a;
          });
        }
      }
    })();
  }
});
var isCryptoKey = __defProp(_0x44a97c => _0x44a97c instanceof CryptoKey, 'name', {
  'value': "isCryptoKey",
  'configurable': true
});
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function concat(..._0x2f07ca) {
  const _0x2897e2 = _0x2f07ca.reduce((_0x394766, {
    length: _0x39f28c
  }) => _0x394766 + _0x39f28c, 0x0);
  const _0x5a95eb = new Uint8Array(_0x2897e2);
  let _0x4ba684 = 0x0;
  for (const _0x12c1cb of _0x2f07ca) {
    _0x5a95eb.set(_0x12c1cb, _0x4ba684);
    _0x4ba684 += _0x12c1cb.length;
  }
  return _0x5a95eb;
}
__defProp(concat, 'name', {
  'value': "concat",
  'configurable': true
});
var encodeBase64 = __defProp(_0x58a2ce => {
  let _0x3dec59 = _0x58a2ce;
  if (typeof _0x3dec59 === "string") {
    _0x3dec59 = encoder.encode(_0x3dec59);
  }
  const _0x239b16 = [];
  for (let _0x357056 = 0x0; _0x357056 < _0x3dec59.length; _0x357056 += 0x8000) {
    _0x239b16.push(String.fromCharCode.apply(null, _0x3dec59.subarray(_0x357056, _0x357056 + 0x8000)));
  }
  return btoa(_0x239b16.join(''));
}, 'name', {
  'value': "encodeBase64",
  'configurable': true
});
var encode = __defProp(_0x53d31b => {
  return encodeBase64(_0x53d31b).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}, 'name', {
  'value': "encode",
  'configurable': true
});
var decodeBase64 = __defProp(_0x3a38a8 => {
  const _0x32909c = atob(_0x3a38a8);
  const _0x332d05 = new Uint8Array(_0x32909c.length);
  for (let _0x3611c2 = 0x0; _0x3611c2 < _0x32909c.length; _0x3611c2++) {
    _0x332d05[_0x3611c2] = _0x32909c.charCodeAt(_0x3611c2);
  }
  return _0x332d05;
}, 'name', {
  'value': 'decodeBase64',
  'configurable': true
});
var decode = __defProp(_0x2ce496 => {
  let _0x335f73 = _0x2ce496;
  if (_0x335f73 instanceof Uint8Array) {
    _0x335f73 = decoder.decode(_0x335f73);
  }
  _0x335f73 = _0x335f73.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
  try {
    return decodeBase64(_0x335f73);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}, 'name', {
  'value': "decode",
  'configurable': true
});
var JOSEError = class extends Error {
  constructor(_0x443677, _0x328a69) {
    super(_0x443677, _0x328a69);
    this.code = 'ERR_JOSE_GENERIC';
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
__defProp(JOSEError, 'name', {
  'value': 'JOSEError',
  'configurable': true
});
JOSEError.code = "ERR_JOSE_GENERIC";
var JWTClaimValidationFailed = class extends JOSEError {
  constructor(_0x2454c3, _0x18e3bd, _0x57e12b = "unspecified", _0x401509 = 'unspecified') {
    super(_0x2454c3, {
      'cause': {
        'claim': _0x57e12b,
        'reason': _0x401509,
        'payload': _0x18e3bd
      }
    });
    this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    this.claim = _0x57e12b;
    this.reason = _0x401509;
    this.payload = _0x18e3bd;
  }
};
__defProp(JWTClaimValidationFailed, 'name', {
  'value': 'JWTClaimValidationFailed',
  'configurable': true
});
JWTClaimValidationFailed.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
var JWTExpired = class extends JOSEError {
  constructor(_0x2d930a, _0x490e8a, _0x503229 = 'unspecified', _0x3c293e = "unspecified") {
    super(_0x2d930a, {
      'cause': {
        'claim': _0x503229,
        'reason': _0x3c293e,
        'payload': _0x490e8a
      }
    });
    this.code = "ERR_JWT_EXPIRED";
    this.claim = _0x503229;
    this.reason = _0x3c293e;
    this.payload = _0x490e8a;
  }
};
__defProp(JWTExpired, 'name', {
  'value': "JWTExpired",
  'configurable': true
});
JWTExpired.code = 'ERR_JWT_EXPIRED';
var JOSEAlgNotAllowed = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
  }
};
__defProp(JOSEAlgNotAllowed, 'name', {
  'value': "JOSEAlgNotAllowed",
  'configurable': true
});
JOSEAlgNotAllowed.code = "ERR_JOSE_ALG_NOT_ALLOWED";
var JOSENotSupported = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JOSE_NOT_SUPPORTED";
  }
};
__defProp(JOSENotSupported, 'name', {
  'value': "JOSENotSupported",
  'configurable': true
});
JOSENotSupported.code = 'ERR_JOSE_NOT_SUPPORTED';
var JWEDecryptionFailed = class extends JOSEError {
  constructor(_0x412b87 = "decryption operation failed", _0x4f7d0e) {
    super(_0x412b87, _0x4f7d0e);
    this.code = "ERR_JWE_DECRYPTION_FAILED";
  }
};
__defProp(JWEDecryptionFailed, 'name', {
  'value': "JWEDecryptionFailed",
  'configurable': true
});
JWEDecryptionFailed.code = "ERR_JWE_DECRYPTION_FAILED";
var JWEInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = 'ERR_JWE_INVALID';
  }
};
__defProp(JWEInvalid, 'name', {
  'value': "JWEInvalid",
  'configurable': true
});
JWEInvalid.code = "ERR_JWE_INVALID";
var JWSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWS_INVALID";
  }
};
__defProp(JWSInvalid, 'name', {
  'value': "JWSInvalid",
  'configurable': true
});
JWSInvalid.code = "ERR_JWS_INVALID";
var JWTInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWT_INVALID";
  }
};
__defProp(JWTInvalid, 'name', {
  'value': "JWTInvalid",
  'configurable': true
});
JWTInvalid.code = "ERR_JWT_INVALID";
var JWKInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWK_INVALID";
  }
};
__defProp(JWKInvalid, 'name', {
  'value': "JWKInvalid",
  'configurable': true
});
JWKInvalid.code = "ERR_JWK_INVALID";
var JWKSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_INVALID";
  }
};
__defProp(JWKSInvalid, 'name', {
  'value': 'JWKSInvalid',
  'configurable': true
});
JWKSInvalid.code = "ERR_JWKS_INVALID";
var JWKSNoMatchingKey = class extends JOSEError {
  constructor(_0x23ffa2 = "no applicable key found in the JSON Web Key Set", _0xb609f5) {
    super(_0x23ffa2, _0xb609f5);
    this.code = "ERR_JWKS_NO_MATCHING_KEY";
  }
};
__defProp(JWKSNoMatchingKey, 'name', {
  'value': "JWKSNoMatchingKey",
  'configurable': true
});
JWKSNoMatchingKey.code = "ERR_JWKS_NO_MATCHING_KEY";
var JWKSMultipleMatchingKeys = class extends JOSEError {
  constructor(_0x3ca1bf = "multiple matching keys found in the JSON Web Key Set", _0x2182aa) {
    super(_0x3ca1bf, _0x2182aa);
    this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
  }
};
__defProp(JWKSMultipleMatchingKeys, 'name', {
  'value': "JWKSMultipleMatchingKeys",
  'configurable': true
});
JWKSMultipleMatchingKeys.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
var JWKSTimeout = class extends JOSEError {
  constructor(_0x5d7a66 = "request timed out", _0x2e85ac) {
    super(_0x5d7a66, _0x2e85ac);
    this.code = "ERR_JWKS_TIMEOUT";
  }
};
__defProp(JWKSTimeout, 'name', {
  'value': "JWKSTimeout",
  'configurable': true
});
JWKSTimeout.code = "ERR_JWKS_TIMEOUT";
var JWSSignatureVerificationFailed = class extends JOSEError {
  constructor(_0x2061fe = "signature verification failed", _0x26766b) {
    super(_0x2061fe, _0x26766b);
    this.code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
  }
};
__defProp(JWSSignatureVerificationFailed, 'name', {
  'value': "JWSSignatureVerificationFailed",
  'configurable': true
});
JWSSignatureVerificationFailed.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
function unusable(_0xb0e9a9, _0x11a9a6 = 'algorithm.name') {
  return new TypeError("CryptoKey does not support this operation, its " + _0x11a9a6 + " must be " + _0xb0e9a9);
}
__defProp(unusable, 'name', {
  'value': 'unusable',
  'configurable': true
});
function isAlgorithm(_0x253442, _0x5a6885) {
  return _0x253442.name === _0x5a6885;
}
__defProp(isAlgorithm, 'name', {
  'value': "isAlgorithm",
  'configurable': true
});
function getHashLength(_0x5b478e) {
  return parseInt(_0x5b478e.name.slice(0x4), 0xa);
}
__defProp(getHashLength, 'name', {
  'value': "getHashLength",
  'configurable': true
});
function getNamedCurve(_0x142f0d) {
  switch (_0x142f0d) {
    case 'ES256':
      return "P-256";
    case 'ES384':
      return "P-384";
    case 'ES512':
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
__defProp(getNamedCurve, 'name', {
  'value': "getNamedCurve",
  'configurable': true
});
function checkUsage(_0x51ce8f, _0x23b414) {
  if (_0x23b414.length && !_0x23b414.some(_0x585b72 => _0x51ce8f.usages.includes(_0x585b72))) {
    let _0xc819ad = "CryptoKey does not support this operation, its usages must include ";
    if (_0x23b414.length > 0x2) {
      const _0x3fa62f = _0x23b414.pop();
      _0xc819ad += "one of " + _0x23b414.join(", ") + ", or " + _0x3fa62f + '.';
    } else if (_0x23b414.length === 0x2) {
      _0xc819ad += "one of " + _0x23b414[0x0] + " or " + _0x23b414[0x1] + '.';
    } else {
      _0xc819ad += _0x23b414[0x0] + '.';
    }
    throw new TypeError(_0xc819ad);
  }
}
__defProp(checkUsage, 'name', {
  'value': 'checkUsage',
  'configurable': true
});
function checkSigCryptoKey(_0x5db7a5, _0x40cc5e, ..._0x589880) {
  switch (_0x40cc5e) {
    case "HS256":
    case 'HS384':
    case "HS512":
      {
        if (!(_0x5db7a5.algorithm.name === "HMAC")) {
          throw unusable("HMAC");
        }
        const _0x495caf = parseInt(_0x40cc5e.slice(0x2), 0xa);
        const _0x5142a8 = parseInt(_0x5db7a5.algorithm.hash.name.slice(0x4), 0xa);
        if (_0x5142a8 !== _0x495caf) {
          throw unusable('SHA-' + _0x495caf, "algorithm.hash");
        }
        break;
      }
    case 'RS256':
    case "RS384":
    case 'RS512':
      {
        if (!(_0x5db7a5.algorithm.name === "RSASSA-PKCS1-v1_5")) {
          throw unusable('RSASSA-PKCS1-v1_5');
        }
        const _0x1c4690 = parseInt(_0x40cc5e.slice(0x2), 0xa);
        const _0x29e16c = parseInt(_0x5db7a5.algorithm.hash.name.slice(0x4), 0xa);
        if (_0x29e16c !== _0x1c4690) {
          throw unusable("SHA-" + _0x1c4690, "algorithm.hash");
        }
        break;
      }
    case 'PS256':
    case "PS384":
    case "PS512":
      {
        if (!(_0x5db7a5.algorithm.name === "RSA-PSS")) {
          throw unusable('RSA-PSS');
        }
        const _0x2e7789 = parseInt(_0x40cc5e.slice(0x2), 0xa);
        const _0x3c0037 = parseInt(_0x5db7a5.algorithm.hash.name.slice(0x4), 0xa);
        if (_0x3c0037 !== _0x2e7789) {
          throw unusable('SHA-' + _0x2e7789, "algorithm.hash");
        }
        break;
      }
    case "EdDSA":
      {
        if (_0x5db7a5.algorithm.name !== "Ed25519" && _0x5db7a5.algorithm.name !== "Ed448") {
          throw unusable("Ed25519 or Ed448");
        }
        break;
      }
    case "ES256":
    case "ES384":
    case 'ES512':
      {
        if (!(_0x5db7a5.algorithm.name === "ECDSA")) {
          throw unusable("ECDSA");
        }
        const _0x4cf1c3 = getNamedCurve(_0x40cc5e);
        const _0x36cfb0 = _0x5db7a5.algorithm.namedCurve;
        if (_0x36cfb0 !== _0x4cf1c3) {
          throw unusable(_0x4cf1c3, "algorithm.namedCurve");
        }
        break;
      }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(_0x5db7a5, _0x589880);
}
__defProp(checkSigCryptoKey, 'name', {
  'value': "checkSigCryptoKey",
  'configurable': true
});
function message(_0x5906e9, _0x3af373, ..._0x54ed56) {
  _0x54ed56 = _0x54ed56.filter(Boolean);
  if (_0x54ed56.length > 0x2) {
    const _0x38c876 = _0x54ed56.pop();
    _0x5906e9 += "one of type " + _0x54ed56.join(", ") + ", or " + _0x38c876 + '.';
  } else if (_0x54ed56.length === 0x2) {
    _0x5906e9 += "one of type " + _0x54ed56[0x0] + " or " + _0x54ed56[0x1] + '.';
  } else {
    _0x5906e9 += "of type " + _0x54ed56[0x0] + '.';
  }
  if (_0x3af373 == null) {
    _0x5906e9 += " Received " + _0x3af373;
  } else {
    if (typeof _0x3af373 === 'function' && _0x3af373.name) {
      _0x5906e9 += " Received function " + _0x3af373.name;
    } else if (typeof _0x3af373 === "object" && _0x3af373 != null) {
      if (_0x3af373.constructor?.['name']) {
        _0x5906e9 += " Received an instance of " + _0x3af373.constructor.name;
      }
    }
  }
  return _0x5906e9;
}
__defProp(message, 'name', {
  'value': "message",
  'configurable': true
});
var invalid_key_input_default = __defProp((_0x35e277, ..._0x14762f) => {
  return message("Key must be ", _0x35e277, ..._0x14762f);
}, 'name', {
  'value': 'default',
  'configurable': true
});
function withAlg(_0x465502, _0x315d99, ..._0x3c3a6c) {
  return message("Key for the " + _0x465502 + " algorithm must be ", _0x315d99, ..._0x3c3a6c);
}
__defProp(withAlg, 'name', {
  'value': "withAlg",
  'configurable': true
});
var is_key_like_default = __defProp(_0x43b095 => {
  if (isCryptoKey(_0x43b095)) {
    return true;
  }
  return _0x43b095?.[Symbol.toStringTag] === "KeyObject";
}, 'name', {
  'value': 'default',
  'configurable': true
});
var types = ["CryptoKey"];
var isDisjoint = __defProp((..._0x478357) => {
  const _0x4d416d = _0x478357.filter(Boolean);
  if (_0x4d416d.length === 0x0 || _0x4d416d.length === 0x1) {
    return true;
  }
  let _0x4bf97b;
  for (const _0x15abfe of _0x4d416d) {
    const _0x5bd3c0 = Object.keys(_0x15abfe);
    if (!_0x4bf97b || _0x4bf97b.size === 0x0) {
      _0x4bf97b = new Set(_0x5bd3c0);
      continue;
    }
    for (const _0x2f7897 of _0x5bd3c0) {
      if (_0x4bf97b.has(_0x2f7897)) {
        return false;
      }
      _0x4bf97b.add(_0x2f7897);
    }
  }
  return true;
}, 'name', {
  'value': 'isDisjoint',
  'configurable': true
});
function isObjectLike(_0x3cc118) {
  return typeof _0x3cc118 === "object" && _0x3cc118 !== null;
}
__defProp(isObjectLike, 'name', {
  'value': "isObjectLike",
  'configurable': true
});
function isObject(_0x17bc65) {
  if (!(typeof _0x17bc65 === "object" && _0x17bc65 !== null) || Object.prototype.toString.call(_0x17bc65) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(_0x17bc65) === null) {
    return true;
  }
  let _0x50675d = _0x17bc65;
  while (Object.getPrototypeOf(_0x50675d) !== null) {
    _0x50675d = Object.getPrototypeOf(_0x50675d);
  }
  return Object.getPrototypeOf(_0x17bc65) === _0x50675d;
}
__defProp(isObject, 'name', {
  'value': 'isObject',
  'configurable': true
});
var check_key_length_default = __defProp((_0x5b0af5, _0x5f0ac9) => {
  if (_0x5b0af5.startsWith('RS') || _0x5b0af5.startsWith('PS')) {
    const {
      modulusLength: _0x2367b0
    } = _0x5f0ac9.algorithm;
    if (typeof _0x2367b0 !== "number" || _0x2367b0 < 0x800) {
      throw new TypeError(_0x5b0af5 + " requires key modulusLength to be 2048 bits or larger");
    }
  }
}, 'name', {
  'value': 'default',
  'configurable': true
});
function isJWK(_0x1fce56) {
  return isObject(_0x1fce56) && typeof _0x1fce56.kty === "string";
}
__defProp(isJWK, 'name', {
  'value': "isJWK",
  'configurable': true
});
function isPrivateJWK(_0x1f1d33) {
  return _0x1f1d33.kty !== "oct" && typeof _0x1f1d33.d === "string";
}
__defProp(isPrivateJWK, 'name', {
  'value': "isPrivateJWK",
  'configurable': true
});
function isPublicJWK(_0x5a09d1) {
  return _0x5a09d1.kty !== "oct" && typeof _0x5a09d1.d === "undefined";
}
__defProp(isPublicJWK, 'name', {
  'value': 'isPublicJWK',
  'configurable': true
});
function isSecretJWK(_0x11895a) {
  return isObject(_0x11895a) && typeof _0x11895a.kty === "string" && _0x11895a.kty === 'oct' && typeof _0x11895a.k === "string";
}
__defProp(isSecretJWK, 'name', {
  'value': "isSecretJWK",
  'configurable': true
});
function subtleMapping(_0x4eeba7) {
  let _0xa35ed9;
  let _0x9ef9a4;
  switch (_0x4eeba7.kty) {
    case "RSA":
      {
        switch (_0x4eeba7.alg) {
          case "PS256":
          case 'PS384':
          case 'PS512':
            _0xa35ed9 = {
              'name': "RSA-PSS",
              'hash': "SHA-" + _0x4eeba7.alg.slice(-0x3)
            };
            _0x9ef9a4 = _0x4eeba7.d ? ["sign"] : ["verify"];
            break;
          case "RS256":
          case "RS384":
          case "RS512":
            _0xa35ed9 = {
              'name': "RSASSA-PKCS1-v1_5",
              'hash': 'SHA-' + _0x4eeba7.alg.slice(-0x3)
            };
            _0x9ef9a4 = _0x4eeba7.d ? ['sign'] : ['verify'];
            break;
          case 'RSA-OAEP':
          case "RSA-OAEP-256":
          case 'RSA-OAEP-384':
          case "RSA-OAEP-512":
            _0xa35ed9 = {
              'name': "RSA-OAEP",
              'hash': "SHA-" + (parseInt(_0x4eeba7.alg.slice(-0x3), 0xa) || 0x1)
            };
            _0x9ef9a4 = _0x4eeba7.d ? ['decrypt', "unwrapKey"] : ['encrypt', "wrapKey"];
            break;
          default:
            throw new JOSENotSupported("Invalid or unsupported JWK \"alg\" (Algorithm) Parameter value");
        }
        break;
      }
    case 'EC':
      {
        switch (_0x4eeba7.alg) {
          case "ES256":
            _0xa35ed9 = {
              'name': 'ECDSA',
              'namedCurve': "P-256"
            };
            _0x9ef9a4 = _0x4eeba7.d ? ["sign"] : ["verify"];
            break;
          case 'ES384':
            _0xa35ed9 = {
              'name': "ECDSA",
              'namedCurve': "P-384"
            };
            _0x9ef9a4 = _0x4eeba7.d ? ["sign"] : ["verify"];
            break;
          case "ES512":
            _0xa35ed9 = {
              'name': "ECDSA",
              'namedCurve': 'P-521'
            };
            _0x9ef9a4 = _0x4eeba7.d ? ["sign"] : ["verify"];
            break;
          case 'ECDH-ES':
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            _0xa35ed9 = {
              'name': "ECDH",
              'namedCurve': _0x4eeba7.crv
            };
            _0x9ef9a4 = _0x4eeba7.d ? ['deriveBits'] : [];
            break;
          default:
            throw new JOSENotSupported("Invalid or unsupported JWK \"alg\" (Algorithm) Parameter value");
        }
        break;
      }
    case "OKP":
      {
        switch (_0x4eeba7.alg) {
          case "EdDSA":
            _0xa35ed9 = {
              'name': _0x4eeba7.crv
            };
            _0x9ef9a4 = _0x4eeba7.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case 'ECDH-ES+A192KW':
          case "ECDH-ES+A256KW":
            _0xa35ed9 = {
              'name': _0x4eeba7.crv
            };
            _0x9ef9a4 = _0x4eeba7.d ? ["deriveBits"] : [];
            break;
          default:
            throw new JOSENotSupported("Invalid or unsupported JWK \"alg\" (Algorithm) Parameter value");
        }
        break;
      }
    default:
      throw new JOSENotSupported("Invalid or unsupported JWK \"kty\" (Key Type) Parameter value");
  }
  return {
    'algorithm': _0xa35ed9,
    'keyUsages': _0x9ef9a4
  };
}
__defProp(subtleMapping, 'name', {
  'value': "subtleMapping",
  'configurable': true
});
var parse = __defProp(async _0x4545c6 => {
  if (!_0x4545c6.alg) {
    throw new TypeError("\"alg\" argument is required when \"jwk.alg\" is not present");
  }
  const {
    algorithm: _0x5d8697,
    keyUsages: _0x2fea31
  } = subtleMapping(_0x4545c6);
  const _0x1106c9 = [_0x5d8697, _0x4545c6.ext ?? false, _0x4545c6.key_ops ?? _0x2fea31];
  const _0x4aae5e = {
    ..._0x4545c6
  };
  delete _0x4aae5e.alg;
  delete _0x4aae5e.use;
  return crypto.subtle.importKey("jwk", _0x4aae5e, ..._0x1106c9);
}, 'name', {
  'value': "parse",
  'configurable': true
});
var exportKeyValue = __defProp(_0x226463 => decode(_0x226463), 'name', {
  'value': "exportKeyValue",
  'configurable': true
});
var privCache;
var pubCache;
var isKeyObject = __defProp(_0x41fab2 => {
  return _0x41fab2?.[Symbol.toStringTag] === 'KeyObject';
}, 'name', {
  'value': "isKeyObject",
  'configurable': true
});
var importAndCache = __defProp(async (_0x35cb0b, _0x97858f, _0x1ae6fa, _0x5840a1, _0x4d6078 = false) => {
  let _0x351458 = _0x35cb0b.get(_0x97858f);
  if (_0x351458?.[_0x5840a1]) {
    return _0x351458[_0x5840a1];
  }
  const _0x4fe6d7 = await parse({
    ..._0x1ae6fa,
    'alg': _0x5840a1
  });
  if (_0x4d6078) {
    Object.freeze(_0x97858f);
  }
  if (!_0x351458) {
    _0x35cb0b.set(_0x97858f, {
      [_0x5840a1]: _0x4fe6d7
    });
  } else {
    _0x351458[_0x5840a1] = _0x4fe6d7;
  }
  return _0x4fe6d7;
}, 'name', {
  'value': "importAndCache",
  'configurable': true
});
var normalizePublicKey = __defProp((_0x4fd1db, _0x31962d) => {
  if (isKeyObject(_0x4fd1db)) {
    let _0x3fec55 = _0x4fd1db["export"]({
      'format': "jwk"
    });
    delete _0x3fec55.d;
    delete _0x3fec55.dp;
    delete _0x3fec55.dq;
    delete _0x3fec55.p;
    delete _0x3fec55.q;
    delete _0x3fec55.qi;
    if (_0x3fec55.k) {
      return exportKeyValue(_0x3fec55.k);
    }
    if (!pubCache) {
      pubCache = new WeakMap();
    }
    return importAndCache(pubCache, _0x4fd1db, _0x3fec55, _0x31962d);
  }
  if (isObject(_0x4fd1db) && typeof _0x4fd1db.kty === "string") {
    if (_0x4fd1db.k) {
      return decode(_0x4fd1db.k);
    }
    if (!pubCache) {
      pubCache = new WeakMap();
    }
    const _0x10415b = importAndCache(pubCache, _0x4fd1db, _0x4fd1db, _0x31962d, true);
    return _0x10415b;
  }
  return _0x4fd1db;
}, 'name', {
  'value': "normalizePublicKey",
  'configurable': true
});
var normalizePrivateKey = __defProp((_0x4142c5, _0x490dbb) => {
  if (isKeyObject(_0x4142c5)) {
    let _0x7ac8f3 = _0x4142c5['export']({
      'format': 'jwk'
    });
    if (_0x7ac8f3.k) {
      return exportKeyValue(_0x7ac8f3.k);
    }
    if (!privCache) {
      privCache = new WeakMap();
    }
    return importAndCache(privCache, _0x4142c5, _0x7ac8f3, _0x490dbb);
  }
  if (isObject(_0x4142c5) && typeof _0x4142c5.kty === "string") {
    if (_0x4142c5.k) {
      return decode(_0x4142c5.k);
    }
    if (!privCache) {
      privCache = new WeakMap();
    }
    const _0x48a5d4 = importAndCache(privCache, _0x4142c5, _0x4142c5, _0x490dbb, true);
    return _0x48a5d4;
  }
  return _0x4142c5;
}, 'name', {
  'value': "normalizePrivateKey",
  'configurable': true
});
var normalize_key_default = {
  'normalizePublicKey': normalizePublicKey,
  'normalizePrivateKey': normalizePrivateKey
};
async function importJWK(_0x49c700, _0x221e4a) {
  if (!isObject(_0x49c700)) {
    throw new TypeError("JWK must be an object");
  }
  if (!_0x221e4a) {
    _0x221e4a = _0x49c700.alg;
  }
  switch (_0x49c700.kty) {
    case 'oct':
      if (typeof _0x49c700.k !== "string" || !_0x49c700.k) {
        throw new TypeError("missing \"k\" (Key Value) Parameter value");
      }
      return decode(_0x49c700.k);
    case 'RSA':
      if (_0x49c700.oth !== undefined) {
        throw new JOSENotSupported("RSA JWK \"oth\" (Other Primes Info) Parameter value is not supported");
      }
    case 'EC':
    case 'OKP':
      return parse({
        ..._0x49c700,
        'alg': _0x221e4a
      });
    default:
      throw new JOSENotSupported("Unsupported \"kty\" (Key Type) Parameter value");
  }
}
__defProp(importJWK, 'name', {
  'value': "importJWK",
  'configurable': true
});
var tag = __defProp(_0x583d4f => _0x583d4f?.[Symbol.toStringTag], 'name', {
  'value': "tag",
  'configurable': true
});
var jwkMatchesOp = __defProp((_0x514ca2, _0x21567c, _0x561686) => {
  if (_0x21567c.use !== undefined && _0x21567c.use !== "sig") {
    throw new TypeError("Invalid key for this operation, when present its use must be sig");
  }
  if (_0x21567c.key_ops !== undefined && _0x21567c.key_ops.includes?.(_0x561686) !== true) {
    throw new TypeError("Invalid key for this operation, when present its key_ops must include " + _0x561686);
  }
  if (_0x21567c.alg !== undefined && _0x21567c.alg !== _0x514ca2) {
    throw new TypeError("Invalid key for this operation, when present its alg must be " + _0x514ca2);
  }
  return true;
}, 'name', {
  'value': "jwkMatchesOp",
  'configurable': true
});
var symmetricTypeCheck = __defProp((_0x5e0f4d, _0x3824c9, _0x3af9b1, _0x6b867c) => {
  if (_0x3824c9 instanceof Uint8Array) {
    return;
  }
  if (_0x6b867c && isObject(_0x3824c9) && typeof _0x3824c9.kty === "string") {
    if (isObject(_0x3824c9) && typeof _0x3824c9.kty === "string" && _0x3824c9.kty === 'oct' && typeof _0x3824c9.k === "string" && jwkMatchesOp(_0x5e0f4d, _0x3824c9, _0x3af9b1)) {
      return;
    }
    throw new TypeError("JSON Web Key for symmetric algorithms must have JWK \"kty\" (Key Type) equal to \"oct\" and the JWK \"k\" (Key Value) present");
  }
  if (!is_key_like_default(_0x3824c9)) {
    throw new TypeError(withAlg(_0x5e0f4d, _0x3824c9, ...types, 'Uint8Array', _0x6b867c ? "JSON Web Key" : null));
  }
  if (_0x3824c9.type !== "secret") {
    throw new TypeError(tag(_0x3824c9) + " instances for symmetric algorithms must be of type \"secret\"");
  }
}, 'name', {
  'value': "symmetricTypeCheck",
  'configurable': true
});
var asymmetricTypeCheck = __defProp((_0x38d2f0, _0x4f1805, _0x368fae, _0x1a7ada) => {
  if (_0x1a7ada && isObject(_0x4f1805) && typeof _0x4f1805.kty === "string") {
    switch (_0x368fae) {
      case 'sign':
        if (_0x4f1805.kty !== "oct" && typeof _0x4f1805.d === "string" && jwkMatchesOp(_0x38d2f0, _0x4f1805, _0x368fae)) {
          return;
        }
        throw new TypeError("JSON Web Key for this operation be a private JWK");
      case 'verify':
        if (_0x4f1805.kty !== "oct" && typeof _0x4f1805.d === "undefined" && jwkMatchesOp(_0x38d2f0, _0x4f1805, _0x368fae)) {
          return;
        }
        throw new TypeError("JSON Web Key for this operation be a public JWK");
    }
  }
  if (!is_key_like_default(_0x4f1805)) {
    throw new TypeError(withAlg(_0x38d2f0, _0x4f1805, ...types, _0x1a7ada ? "JSON Web Key" : null));
  }
  if (_0x4f1805.type === "secret") {
    throw new TypeError(tag(_0x4f1805) + " instances for asymmetric algorithms must not be of type \"secret\"");
  }
  if (_0x368fae === "sign" && _0x4f1805.type === 'public') {
    throw new TypeError(tag(_0x4f1805) + " instances for asymmetric algorithm signing must be of type \"private\"");
  }
  if (_0x368fae === "decrypt" && _0x4f1805.type === "public") {
    throw new TypeError(tag(_0x4f1805) + " instances for asymmetric algorithm decryption must be of type \"private\"");
  }
  if (_0x4f1805.algorithm && _0x368fae === "verify" && _0x4f1805.type === "private") {
    throw new TypeError(tag(_0x4f1805) + " instances for asymmetric algorithm verifying must be of type \"public\"");
  }
  if (_0x4f1805.algorithm && _0x368fae === "encrypt" && _0x4f1805.type === "private") {
    throw new TypeError(tag(_0x4f1805) + " instances for asymmetric algorithm encryption must be of type \"public\"");
  }
}, 'name', {
  'value': "asymmetricTypeCheck",
  'configurable': true
});
function checkKeyType(_0x3e2153, _0x48d81f, _0x5a2872, _0x4dc14e) {
  const _0x1b2215 = _0x48d81f.startsWith('HS') || _0x48d81f === 'dir' || _0x48d81f.startsWith('PBES2') || /^A\d{3}(?:GCM)?KW$/.test(_0x48d81f);
  if (_0x1b2215) {
    symmetricTypeCheck(_0x48d81f, _0x5a2872, _0x4dc14e, _0x3e2153);
  } else {
    asymmetricTypeCheck(_0x48d81f, _0x5a2872, _0x4dc14e, _0x3e2153);
  }
}
__defProp(checkKeyType, 'name', {
  'value': "checkKeyType",
  'configurable': true
});
var check_key_type_default = checkKeyType.bind(undefined, false);
var checkKeyTypeWithJwk = checkKeyType.bind(undefined, true);
function validateCrit(_0x3d926d, _0x2e71b1, _0x54f0a6, _0x91a4fe, _0x53a3e0) {
  if (_0x53a3e0.crit !== undefined && _0x91a4fe?.['crit'] === undefined) {
    throw new _0x3d926d("\"crit\" (Critical) Header Parameter MUST be integrity protected");
  }
  if (!_0x91a4fe || _0x91a4fe.crit === undefined) {
    return new Set();
  }
  if (!Array.isArray(_0x91a4fe.crit) || _0x91a4fe.crit.length === 0x0 || _0x91a4fe.crit.some(_0x176612 => typeof _0x176612 !== "string" || _0x176612.length === 0x0)) {
    throw new _0x3d926d("\"crit\" (Critical) Header Parameter MUST be an array of non-empty strings when present");
  }
  let _0x5fac4a;
  if (_0x54f0a6 !== undefined) {
    _0x5fac4a = new Map([...Object.entries(_0x54f0a6), ..._0x2e71b1.entries()]);
  } else {
    _0x5fac4a = _0x2e71b1;
  }
  for (const _0x4a13ba of _0x91a4fe.crit) {
    if (!_0x5fac4a.has(_0x4a13ba)) {
      throw new JOSENotSupported("Extension Header Parameter \"" + _0x4a13ba + "\" is not recognized");
    }
    if (_0x53a3e0[_0x4a13ba] === undefined) {
      throw new _0x3d926d("Extension Header Parameter \"" + _0x4a13ba + "\" is missing");
    }
    if (_0x5fac4a.get(_0x4a13ba) && _0x91a4fe[_0x4a13ba] === undefined) {
      throw new _0x3d926d("Extension Header Parameter \"" + _0x4a13ba + "\" MUST be integrity protected");
    }
  }
  return new Set(_0x91a4fe.crit);
}
__defProp(validateCrit, 'name', {
  'value': "validateCrit",
  'configurable': true
});
var validateAlgorithms = __defProp((_0x23d18f, _0x428a77) => {
  if (_0x428a77 !== undefined && (!Array.isArray(_0x428a77) || _0x428a77.some(_0x510fc6 => typeof _0x510fc6 !== "string"))) {
    throw new TypeError("\"" + _0x23d18f + "\" option must be an array of strings");
  }
  if (!_0x428a77) {
    return undefined;
  }
  return new Set(_0x428a77);
}, 'name', {
  'value': "validateAlgorithms",
  'configurable': true
});
function subtleDsa(_0x67cf5e, _0x29fbc9) {
  const _0x552980 = "SHA-" + _0x67cf5e.slice(-0x3);
  switch (_0x67cf5e) {
    case "HS256":
    case "HS384":
    case 'HS512':
      return {
        'hash': _0x552980,
        'name': 'HMAC'
      };
    case "PS256":
    case "PS384":
    case "PS512":
      return {
        'hash': _0x552980,
        'name': 'RSA-PSS',
        'saltLength': _0x67cf5e.slice(-0x3) >> 0x3
      };
    case "RS256":
    case "RS384":
    case 'RS512':
      return {
        'hash': _0x552980,
        'name': 'RSASSA-PKCS1-v1_5'
      };
    case 'ES256':
    case 'ES384':
    case 'ES512':
      return {
        'hash': _0x552980,
        'name': 'ECDSA',
        'namedCurve': _0x29fbc9.namedCurve
      };
    case "EdDSA":
      return {
        'name': _0x29fbc9.name
      };
    default:
      throw new JOSENotSupported("alg " + _0x67cf5e + " is not supported either by JOSE or your javascript runtime");
  }
}
__defProp(subtleDsa, 'name', {
  'value': "subtleDsa",
  'configurable': true
});
async function getCryptoKey(_0x50c26b, _0x2d50b4, _0x1c337a) {
  if (_0x1c337a === 'sign') {
    _0x2d50b4 = await normalize_key_default.normalizePrivateKey(_0x2d50b4, _0x50c26b);
  }
  if (_0x1c337a === 'verify') {
    _0x2d50b4 = await normalize_key_default.normalizePublicKey(_0x2d50b4, _0x50c26b);
  }
  if (isCryptoKey(_0x2d50b4)) {
    checkSigCryptoKey(_0x2d50b4, _0x50c26b, _0x1c337a);
    return _0x2d50b4;
  }
  if (_0x2d50b4 instanceof Uint8Array) {
    if (!_0x50c26b.startsWith('HS')) {
      throw new TypeError(invalid_key_input_default(_0x2d50b4, ...types));
    }
    return crypto.subtle.importKey('raw', _0x2d50b4, {
      'hash': "SHA-" + _0x50c26b.slice(-0x3),
      'name': 'HMAC'
    }, false, [_0x1c337a]);
  }
  throw new TypeError(invalid_key_input_default(_0x2d50b4, ...types, "Uint8Array", "JSON Web Key"));
}
__defProp(getCryptoKey, 'name', {
  'value': "getCryptoKey",
  'configurable': true
});
var verify = __defProp(async (_0x29e96b, _0x4a789e, _0x29f7b4, _0x200a85) => {
  const _0xc9ad4b = await getCryptoKey(_0x29e96b, _0x4a789e, "verify");
  check_key_length_default(_0x29e96b, _0xc9ad4b);
  const _0x3297fb = subtleDsa(_0x29e96b, _0xc9ad4b.algorithm);
  try {
    return await crypto.subtle.verify(_0x3297fb, _0xc9ad4b, _0x29f7b4, _0x200a85);
  } catch {
    return false;
  }
}, 'name', {
  'value': "verify",
  'configurable': true
});
async function flattenedVerify(_0x284e8f, _0xd936bf, _0x45a5fe) {
  if (!isObject(_0x284e8f)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (_0x284e8f["protected"] === undefined && _0x284e8f.header === undefined) {
    throw new JWSInvalid("Flattened JWS must have either of the \"protected\" or \"header\" members");
  }
  if (_0x284e8f["protected"] !== undefined && typeof _0x284e8f["protected"] !== 'string') {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (_0x284e8f.payload === undefined) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof _0x284e8f.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (_0x284e8f.header !== undefined && !isObject(_0x284e8f.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let _0xf6a646 = {};
  if (_0x284e8f['protected']) {
    try {
      const _0x5ab7ce = decode(_0x284e8f['protected']);
      _0xf6a646 = JSON.parse(decoder.decode(_0x5ab7ce));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!isDisjoint(_0xf6a646, _0x284e8f.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const _0x2543c6 = {
    ..._0xf6a646,
    ..._0x284e8f.header
  };
  const _0x596dd7 = validateCrit(JWSInvalid, new Map([["b64", true]]), _0x45a5fe?.['crit'], _0xf6a646, _0x2543c6);
  let _0x8203db = true;
  if (_0x596dd7.has('b64')) {
    _0x8203db = _0xf6a646.b64;
    if (typeof _0x8203db !== "boolean") {
      throw new JWSInvalid("The \"b64\" (base64url-encode payload) Header Parameter must be a boolean");
    }
  }
  const {
    alg: _0x374d10
  } = _0x2543c6;
  if (typeof _0x374d10 !== "string" || !_0x374d10) {
    throw new JWSInvalid("JWS \"alg\" (Algorithm) Header Parameter missing or invalid");
  }
  const _0x23785a = _0x45a5fe && validateAlgorithms("algorithms", _0x45a5fe.algorithms);
  if (_0x23785a && !_0x23785a.has(_0x374d10)) {
    throw new JOSEAlgNotAllowed("\"alg\" (Algorithm) Header Parameter value not allowed");
  }
  if (_0x8203db) {
    if (typeof _0x284e8f.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else {
    if (typeof _0x284e8f.payload !== "string" && !(_0x284e8f.payload instanceof Uint8Array)) {
      throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
    }
  }
  let _0x496bda = false;
  if (typeof _0xd936bf === "function") {
    _0xd936bf = await _0xd936bf(_0xf6a646, _0x284e8f);
    _0x496bda = true;
    checkKeyTypeWithJwk(_0x374d10, _0xd936bf, "verify");
    if (isObject(_0xd936bf) && typeof _0xd936bf.kty === "string") {
      _0xd936bf = await importJWK(_0xd936bf, _0x374d10);
    }
  } else {
    checkKeyTypeWithJwk(_0x374d10, _0xd936bf, "verify");
  }
  const _0xd5c338 = concat(encoder.encode(_0x284e8f["protected"] ?? ''), encoder.encode('.'), typeof _0x284e8f.payload === "string" ? encoder.encode(_0x284e8f.payload) : _0x284e8f.payload);
  let _0x4b79e5;
  try {
    _0x4b79e5 = decode(_0x284e8f.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const _0x317b8a = await verify(_0x374d10, _0xd936bf, _0x4b79e5, _0xd5c338);
  if (!_0x317b8a) {
    throw new JWSSignatureVerificationFailed();
  }
  let _0x23bbca;
  if (_0x8203db) {
    try {
      _0x23bbca = decode(_0x284e8f.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof _0x284e8f.payload === "string") {
    _0x23bbca = encoder.encode(_0x284e8f.payload);
  } else {
    _0x23bbca = _0x284e8f.payload;
  }
  const _0x22d032 = {
    'payload': _0x23bbca
  };
  if (_0x284e8f["protected"] !== undefined) {
    _0x22d032.protectedHeader = _0xf6a646;
  }
  if (_0x284e8f.header !== undefined) {
    _0x22d032.unprotectedHeader = _0x284e8f.header;
  }
  if (_0x496bda) {
    return {
      ..._0x22d032,
      'key': _0xd936bf
    };
  }
  return _0x22d032;
}
__defProp(flattenedVerify, 'name', {
  'value': 'flattenedVerify',
  'configurable': true
});
async function compactVerify(_0x5eb180, _0x149f81, _0x27f83b) {
  if (_0x5eb180 instanceof Uint8Array) {
    _0x5eb180 = decoder.decode(_0x5eb180);
  }
  if (typeof _0x5eb180 !== 'string') {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const {
    0x0: _0xb2af3e,
    0x1: _0x379ee6,
    0x2: _0x1d326b,
    length: _0x2fe484
  } = _0x5eb180.split('.');
  if (_0x2fe484 !== 0x3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const _0x214c72 = await flattenedVerify({
    'payload': _0x379ee6,
    'protected': _0xb2af3e,
    'signature': _0x1d326b
  }, _0x149f81, _0x27f83b);
  const _0x43e3e3 = {
    'payload': _0x214c72.payload,
    'protectedHeader': _0x214c72.protectedHeader
  };
  if (typeof _0x149f81 === "function") {
    return {
      ..._0x43e3e3,
      'key': _0x214c72.key
    };
  }
  return _0x43e3e3;
}
__defProp(compactVerify, 'name', {
  'value': "compactVerify",
  'configurable': true
});
var epoch_default = __defProp(_0x4c8f81 => Math.floor(_0x4c8f81.getTime() / 0x3e8), 'name', {
  'value': "default",
  'configurable': true
});
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var secs_default = __defProp(_0x40bd7f => {
  const _0x322c50 = REGEX.exec(_0x40bd7f);
  if (!_0x322c50 || _0x322c50[0x4] && _0x322c50[0x1]) {
    throw new TypeError("Invalid time period format");
  }
  const _0x193913 = parseFloat(_0x322c50[0x2]);
  const _0x14925e = _0x322c50[0x3].toLowerCase();
  let _0x6c6fbc;
  switch (_0x14925e) {
    case "sec":
    case "secs":
    case 'second':
    case "seconds":
    case 's':
      _0x6c6fbc = Math.round(_0x193913);
      break;
    case "minute":
    case 'minutes':
    case "min":
    case "mins":
    case 'm':
      _0x6c6fbc = Math.round(_0x193913 * 0x3c);
      break;
    case 'hour':
    case "hours":
    case 'hr':
    case 'hrs':
    case 'h':
      _0x6c6fbc = Math.round(_0x193913 * 3600);
      break;
    case 'day':
    case 'days':
    case 'd':
      _0x6c6fbc = Math.round(_0x193913 * 86400);
      break;
    case "week":
    case "weeks":
    case 'w':
      _0x6c6fbc = Math.round(_0x193913 * 604800);
      break;
    default:
      _0x6c6fbc = Math.round(_0x193913 * 31557600);
      break;
  }
  if (_0x322c50[0x1] === '-' || _0x322c50[0x4] === "ago") {
    return -_0x6c6fbc;
  }
  return _0x6c6fbc;
}, 'name', {
  'value': 'default',
  'configurable': true
});
var normalizeTyp = __defProp(_0x7ec4ff => _0x7ec4ff.toLowerCase().replace(/^application\//, ''), 'name', {
  'value': "normalizeTyp",
  'configurable': true
});
var checkAudiencePresence = __defProp((_0x580fab, _0x199741) => {
  if (typeof _0x580fab === "string") {
    return _0x199741.includes(_0x580fab);
  }
  if (Array.isArray(_0x580fab)) {
    return _0x199741.some(Set.prototype.has.bind(new Set(_0x580fab)));
  }
  return false;
}, 'name', {
  'value': "checkAudiencePresence",
  'configurable': true
});
var jwt_claims_set_default = __defProp((_0x5c2dec, _0x163929, _0x5d1060 = {}) => {
  let _0x12ab1a;
  try {
    _0x12ab1a = JSON.parse(decoder.decode(_0x163929));
  } catch {}
  if (!isObject(_0x12ab1a)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const {
    typ: _0x49e212
  } = _0x5d1060;
  if (_0x49e212 && (typeof _0x5c2dec.typ !== 'string' || normalizeTyp(_0x5c2dec.typ) !== normalizeTyp(_0x49e212))) {
    throw new JWTClaimValidationFailed("unexpected \"typ\" JWT header value", _0x12ab1a, "typ", "check_failed");
  }
  const {
    requiredClaims = [],
    issuer: _0x2e00d4,
    subject: _0x37bc5f,
    audience: _0x165712,
    maxTokenAge: _0x440800
  } = _0x5d1060;
  const _0x6da8e5 = [...requiredClaims];
  if (_0x440800 !== undefined) {
    _0x6da8e5.push('iat');
  }
  if (_0x165712 !== undefined) {
    _0x6da8e5.push("aud");
  }
  if (_0x37bc5f !== undefined) {
    _0x6da8e5.push("sub");
  }
  if (_0x2e00d4 !== undefined) {
    _0x6da8e5.push("iss");
  }
  for (const _0x4e0994 of new Set(_0x6da8e5.reverse())) {
    if (!(_0x4e0994 in _0x12ab1a)) {
      throw new JWTClaimValidationFailed("missing required \"" + _0x4e0994 + "\" claim", _0x12ab1a, _0x4e0994, "missing");
    }
  }
  if (_0x2e00d4 && !(Array.isArray(_0x2e00d4) ? _0x2e00d4 : [_0x2e00d4]).includes(_0x12ab1a.iss)) {
    throw new JWTClaimValidationFailed("unexpected \"iss\" claim value", _0x12ab1a, "iss", "check_failed");
  }
  if (_0x37bc5f && _0x12ab1a.sub !== _0x37bc5f) {
    throw new JWTClaimValidationFailed("unexpected \"sub\" claim value", _0x12ab1a, "sub", "check_failed");
  }
  if (_0x165712 && !checkAudiencePresence(_0x12ab1a.aud, typeof _0x165712 === "string" ? [_0x165712] : _0x165712)) {
    throw new JWTClaimValidationFailed("unexpected \"aud\" claim value", _0x12ab1a, "aud", "check_failed");
  }
  let _0x31c503;
  switch (typeof _0x5d1060.clockTolerance) {
    case "string":
      _0x31c503 = secs_default(_0x5d1060.clockTolerance);
      break;
    case "number":
      _0x31c503 = _0x5d1060.clockTolerance;
      break;
    case "undefined":
      _0x31c503 = 0x0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const {
    currentDate: _0x34f945
  } = _0x5d1060;
  const _0x273f67 = epoch_default(_0x34f945 || new Date());
  if ((_0x12ab1a.iat !== undefined || _0x440800) && typeof _0x12ab1a.iat !== 'number') {
    throw new JWTClaimValidationFailed("\"iat\" claim must be a number", _0x12ab1a, "iat", "invalid");
  }
  if (_0x12ab1a.nbf !== undefined) {
    if (typeof _0x12ab1a.nbf !== 'number') {
      throw new JWTClaimValidationFailed("\"nbf\" claim must be a number", _0x12ab1a, "nbf", "invalid");
    }
    if (_0x12ab1a.nbf > _0x273f67 + _0x31c503) {
      throw new JWTClaimValidationFailed("\"nbf\" claim timestamp check failed", _0x12ab1a, "nbf", "check_failed");
    }
  }
  if (_0x12ab1a.exp !== undefined) {
    if (typeof _0x12ab1a.exp !== "number") {
      throw new JWTClaimValidationFailed("\"exp\" claim must be a number", _0x12ab1a, 'exp', 'invalid');
    }
    if (_0x12ab1a.exp <= _0x273f67 - _0x31c503) {
      throw new JWTExpired("\"exp\" claim timestamp check failed", _0x12ab1a, "exp", 'check_failed');
    }
  }
  if (_0x440800) {
    const _0x3be983 = _0x273f67 - _0x12ab1a.iat;
    const _0x649fb7 = typeof _0x440800 === "number" ? _0x440800 : secs_default(_0x440800);
    if (_0x3be983 - _0x31c503 > _0x649fb7) {
      throw new JWTExpired("\"iat\" claim timestamp check failed (too far in the past)", _0x12ab1a, "iat", 'check_failed');
    }
    if (_0x3be983 < 0x0 - _0x31c503) {
      throw new JWTClaimValidationFailed("\"iat\" claim timestamp check failed (it should be in the past)", _0x12ab1a, 'iat', "check_failed");
    }
  }
  return _0x12ab1a;
}, 'name', {
  'value': "default",
  'configurable': true
});
async function jwtVerify(_0x5e27b5, _0x4fe824, _0x28955d) {
  const _0x89cc6d = await compactVerify(_0x5e27b5, _0x4fe824, _0x28955d);
  if (_0x89cc6d.protectedHeader.crit?.["includes"]("b64") && _0x89cc6d.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const _0x2e62a4 = jwt_claims_set_default(_0x89cc6d.protectedHeader, _0x89cc6d.payload, _0x28955d);
  const _0x2fd1d1 = {
    'payload': _0x2e62a4,
    'protectedHeader': _0x89cc6d.protectedHeader
  };
  if (typeof _0x4fe824 === "function") {
    return {
      ..._0x2fd1d1,
      'key': _0x89cc6d.key
    };
  }
  return _0x2fd1d1;
}
__defProp(jwtVerify, 'name', {
  'value': 'jwtVerify',
  'configurable': true
});
var sign = __defProp(async (_0x63bf4e, _0x5dc775, _0x489c5a) => {
  const _0x532de0 = await getCryptoKey(_0x63bf4e, _0x5dc775, "sign");
  check_key_length_default(_0x63bf4e, _0x532de0);
  const _0x1711f6 = await crypto.subtle.sign(subtleDsa(_0x63bf4e, _0x532de0.algorithm), _0x532de0, _0x489c5a);
  return new Uint8Array(_0x1711f6);
}, 'name', {
  'value': 'sign',
  'configurable': true
});
var FlattenedSign = class {
  constructor(_0x55705c) {
    if (!(_0x55705c instanceof Uint8Array)) {
      throw new TypeError("payload must be an instance of Uint8Array");
    }
    this._payload = _0x55705c;
  }
  ['setProtectedHeader'](_0x398b06) {
    if (this._protectedHeader) {
      throw new TypeError("setProtectedHeader can only be called once");
    }
    this._protectedHeader = _0x398b06;
    return this;
  }
  ['setUnprotectedHeader'](_0x64d80) {
    if (this._unprotectedHeader) {
      throw new TypeError("setUnprotectedHeader can only be called once");
    }
    this._unprotectedHeader = _0x64d80;
    return this;
  }
  async ['sign'](_0x50bbb6, _0x921cc8) {
    if (!this._protectedHeader && !this._unprotectedHeader) {
      throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    }
    if (!isDisjoint(this._protectedHeader, this._unprotectedHeader)) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const _0x5c1993 = {
      ...this._protectedHeader,
      ...this._unprotectedHeader
    };
    const _0x1c890e = validateCrit(JWSInvalid, new Map([["b64", true]]), _0x921cc8?.["crit"], this._protectedHeader, _0x5c1993);
    let _0x5e492c = true;
    if (_0x1c890e.has('b64')) {
      _0x5e492c = this._protectedHeader.b64;
      if (typeof _0x5e492c !== "boolean") {
        throw new JWSInvalid("The \"b64\" (base64url-encode payload) Header Parameter must be a boolean");
      }
    }
    const {
      alg: _0x481cbe
    } = _0x5c1993;
    if (typeof _0x481cbe !== "string" || !_0x481cbe) {
      throw new JWSInvalid("JWS \"alg\" (Algorithm) Header Parameter missing or invalid");
    }
    checkKeyTypeWithJwk(_0x481cbe, _0x50bbb6, "sign");
    let _0x25672c = this._payload;
    if (_0x5e492c) {
      _0x25672c = encoder.encode(encode(_0x25672c));
    }
    let _0x5b8f90;
    if (this._protectedHeader) {
      _0x5b8f90 = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
    } else {
      _0x5b8f90 = encoder.encode('');
    }
    const _0x4850bd = concat(_0x5b8f90, encoder.encode('.'), _0x25672c);
    const _0x53ea88 = await sign(_0x481cbe, _0x50bbb6, _0x4850bd);
    const _0x464ecb = {
      'signature': encode(_0x53ea88),
      'payload': ''
    };
    if (_0x5e492c) {
      _0x464ecb.payload = decoder.decode(_0x25672c);
    }
    if (this._unprotectedHeader) {
      _0x464ecb.header = this._unprotectedHeader;
    }
    if (this._protectedHeader) {
      _0x464ecb['protected'] = decoder.decode(_0x5b8f90);
    }
    return _0x464ecb;
  }
};
__defProp(FlattenedSign, 'name', {
  'value': "FlattenedSign",
  'configurable': true
});
var CompactSign = class {
  constructor(_0x574135) {
    this._flattened = new FlattenedSign(_0x574135);
  }
  ["setProtectedHeader"](_0x3eb016) {
    this._flattened.setProtectedHeader(_0x3eb016);
    return this;
  }
  async ["sign"](_0x1c04b4, _0x2242f6) {
    const _0x268244 = await this._flattened.sign(_0x1c04b4, _0x2242f6);
    if (_0x268244.payload === undefined) {
      throw new TypeError("use the flattened module for creating JWS with b64: false");
    }
    return _0x268244['protected'] + '.' + _0x268244.payload + '.' + _0x268244.signature;
  }
};
__defProp(CompactSign, 'name', {
  'value': "CompactSign",
  'configurable': true
});
function validateInput(_0x241745, _0x3eb1c2) {
  if (!Number.isFinite(_0x3eb1c2)) {
    throw new TypeError("Invalid " + _0x241745 + " input");
  }
  return _0x3eb1c2;
}
__defProp(validateInput, 'name', {
  'value': "validateInput",
  'configurable': true
});
var ProduceJWT = class {
  constructor(_0x29ac4d = {}) {
    if (!isObject(_0x29ac4d)) {
      throw new TypeError("JWT Claims Set MUST be an object");
    }
    this._payload = _0x29ac4d;
  }
  ["setIssuer"](_0x36c131) {
    this._payload = {
      ...this._payload,
      'iss': _0x36c131
    };
    return this;
  }
  ["setSubject"](_0x5ea10a) {
    this._payload = {
      ...this._payload,
      'sub': _0x5ea10a
    };
    return this;
  }
  ["setAudience"](_0x1265f7) {
    this._payload = {
      ...this._payload,
      'aud': _0x1265f7
    };
    return this;
  }
  ['setJti'](_0x6c874) {
    this._payload = {
      ...this._payload,
      'jti': _0x6c874
    };
    return this;
  }
  ["setNotBefore"](_0x3b36ab) {
    if (typeof _0x3b36ab === 'number') {
      this._payload = {
        ...this._payload,
        'nbf': validateInput("setNotBefore", _0x3b36ab)
      };
    } else if (_0x3b36ab instanceof Date) {
      this._payload = {
        ...this._payload,
        'nbf': validateInput("setNotBefore", epoch_default(_0x3b36ab))
      };
    } else {
      this._payload = {
        ...this._payload,
        'nbf': epoch_default(new Date()) + secs_default(_0x3b36ab)
      };
    }
    return this;
  }
  ['setExpirationTime'](_0x37fa15) {
    if (typeof _0x37fa15 === "number") {
      this._payload = {
        ...this._payload,
        'exp': validateInput('setExpirationTime', _0x37fa15)
      };
    } else if (_0x37fa15 instanceof Date) {
      this._payload = {
        ...this._payload,
        'exp': validateInput('setExpirationTime', epoch_default(_0x37fa15))
      };
    } else {
      this._payload = {
        ...this._payload,
        'exp': epoch_default(new Date()) + secs_default(_0x37fa15)
      };
    }
    return this;
  }
  ["setIssuedAt"](_0x47373b) {
    if (typeof _0x47373b === "undefined") {
      this._payload = {
        ...this._payload,
        'iat': epoch_default(new Date())
      };
    } else {
      if (_0x47373b instanceof Date) {
        this._payload = {
          ...this._payload,
          'iat': validateInput("setIssuedAt", epoch_default(_0x47373b))
        };
      } else if (typeof _0x47373b === "string") {
        this._payload = {
          ...this._payload,
          'iat': validateInput("setIssuedAt", epoch_default(new Date()) + secs_default(_0x47373b))
        };
      } else {
        this._payload = {
          ...this._payload,
          'iat': validateInput("setIssuedAt", _0x47373b)
        };
      }
    }
    return this;
  }
};
__defProp(ProduceJWT, 'name', {
  'value': 'ProduceJWT',
  'configurable': true
});
var SignJWT = class extends ProduceJWT {
  ["setProtectedHeader"](_0x33b281) {
    this._protectedHeader = _0x33b281;
    return this;
  }
  async ["sign"](_0x23f285, _0x9b258f) {
    const _0xf7f8f = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
    _0xf7f8f.setProtectedHeader(this._protectedHeader);
    if (Array.isArray(this._protectedHeader?.["crit"]) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    return _0xf7f8f.sign(_0x23f285, _0x9b258f);
  }
};
__defProp(SignJWT, 'name', {
  'value': "SignJWT",
  'configurable': true
});
var import_tweetnacl = __toESM(require_nacl_fast());
async function renderLoginPage() {
  const _0xfdf1d0 = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>User Login</title>\n    <style>\n        :root {\n            --color: black;\n            --primary-color: #09639f;\n            --header-color: #09639f; \n            --background-color: #fff;\n            --form-background-color: #f9f9f9;\n            --lable-text-color: #333;\n            --h2-color: #3b3b3b;\n            --border-color: #ddd;\n            --input-background-color: white;\n            --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        body {\n            font-family: system-ui;\n            background-color: var(--background-color);\n            position: relative;\n            overflow: hidden;\n        }\n        body.dark-mode {\n            --color: white;\n            --primary-color: #09639F;\n            --header-color: #3498DB; \n            --background-color: #121212;\n            --form-background-color: #121212;\n            --lable-text-color: #DFDFDF;\n            --h2-color: #D5D5D5;\n            --border-color: #353535;\n            --input-background-color: #252525;\n            --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        .container {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 90%;\n        }\n        h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); margin: 0 auto 30px; text-shadow: var(--header-shadow); }        \n        h2 { text-align: center; color: var(--h2-color) }\n        .form-container {\n            background: var(--form-background-color);\n            border: 1px solid var(--border-color);\n            border-radius: 10px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 20px;\n        }\n        .form-control { margin-bottom: 15px; display: flex; align-items: center; }\n        label {\n            display: block;\n            margin-bottom: 5px;\n            padding-right: 20px;\n            font-size: 110%;\n            font-weight: 600;\n            color: var(--lable-text-color);\n        }\n        input[type=\"text\"],\n        input[type=\"password\"] {\n            width: 100%;\n            padding: 10px;\n            border: 1px solid var(--border-color);\n            border-radius: 5px;\n            color: var(--lable-text-color);\n            background-color: var(--input-background-color);\n        }\n        button {\n            display: block;\n            width: 100%;\n            padding: 10px;\n            font-size: 16px;\n            font-weight: 600;\n            border: none;\n            border-radius: 5px;\n            color: white;\n            background-color: var(--primary-color);\n            cursor: pointer;\n            transition: background-color 0.3s ease;\n        }\n        .button:hover,\n        button:focus {\n            background-color: #2980b9;\n            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n            transform: translateY(-2px);\n        }\n        button.button:hover { color: white; }\n        .button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n        @media only screen and (min-width: 768px) {\n            .container { width: 30%; }\n        }\n    </style>\n    </head>\n    <body>\n        <div class=\"container\">\n            <h1>BPB Panel <span style=\"font-size: smaller;\">" + globalThis.panelVersion + "</span> 💦</h1>\n            <div class=\"form-container\">\n                <h2>User Login</h2>\n                <form id=\"loginForm\">\n                    <div class=\"form-control\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" id=\"password\" name=\"password\" required>\n                    </div>\n                    <div id=\"passwordError\" style=\"color: red; margin-bottom: 10px;\"></div>\n                    <button type=\"submit\" class=\"button\">Login</button>\n                </form>\n            </div>\n        </div>\n    <script>\n        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n        document.getElementById('loginForm').addEventListener('submit', async (event) => {\n            event.preventDefault();\n            const password = document.getElementById('password').value;\n\n            try {\n                const response = await fetch('/login', {\n                    method: 'POST',\n                    headers: {\n                        'Content-Type': 'text/plain'\n                    },\n                    body: password\n                });\n            \n                if (!response.ok) {\n                    passwordError.textContent = '⚠️ Wrong Password!';\n                    const errorMessage = await response.text();\n                    console.error('Login failed:', errorMessage);\n                    return;\n                }\n                window.location.href = '/panel';\n            } catch (error) {\n                console.error('Error during login:', error);\n            }\n        });\n    </script>\n    </body>\n    </html>";
  return new Response(_0xfdf1d0, {
    'status': 0xc8,
    'headers': {
      'Content-Type': 'text/html;charset=utf-8',
      'Access-Control-Allow-Origin': globalThis.urlOrigin,
      'Access-Control-Allow-Methods': "GET, POST",
      'Access-Control-Allow-Headers': "Content-Type, Authorization",
      'X-Content-Type-Options': "nosniff",
      'X-Frame-Options': "DENY",
      'Referrer-Policy': "strict-origin-when-cross-origin",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate, no-transform",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(renderLoginPage, 'name', {
  'value': 'renderLoginPage',
  'configurable': true
});
async function generateJWTToken(_0x377bfa, _0x41a90f) {
  const _0x525fce = await _0x377bfa.text();
  const _0x3a3674 = await _0x41a90f.bpb.get("pwd");
  if (_0x525fce !== _0x3a3674) {
    return new Response("Method Not Allowed", {
      'status': 0x195
    });
  }
  let _0x230c03 = await _0x41a90f.bpb.get("secretKey");
  if (!_0x230c03) {
    _0x230c03 = generateSecretKey();
    await _0x41a90f.bpb.put("secretKey", _0x230c03);
  }
  const _0x47bffd = new TextEncoder().encode(_0x230c03);
  const _0x50c56b = await new SignJWT({
    'userID': globalThis.userID
  }).setProtectedHeader({
    'alg': "HS256"
  }).setIssuedAt().setExpirationTime('24h').sign(_0x47bffd);
  return new Response('Success', {
    'status': 0xc8,
    'headers': {
      'Set-Cookie': "jwtToken=" + _0x50c56b + "; HttpOnly; Secure; Max-Age=" + 604800 + "; Path=/; SameSite=Strict",
      'Content-Type': "text/plain"
    }
  });
}
__defProp(generateJWTToken, 'name', {
  'value': "generateJWTToken",
  'configurable': true
});
function generateSecretKey() {
  const _0x4adb4e = import_tweetnacl["default"].randomBytes(0x20);
  return Array.from(_0x4adb4e, _0x5a31e3 => _0x5a31e3.toString(0x10).padStart(0x2, '0')).join('');
}
__defProp(generateSecretKey, 'name', {
  'value': "generateSecretKey",
  'configurable': true
});
async function Authenticate(_0x5db7f6, _0x370296) {
  try {
    const _0x4836fb = await _0x370296.bpb.get("secretKey");
    const _0x151c6a = new TextEncoder().encode(_0x4836fb);
    const _0x37a025 = _0x5db7f6.headers.get("Cookie")?.["match"](/(^|;\s*)jwtToken=([^;]*)/);
    const _0x3b9b1c = _0x37a025 ? _0x37a025[0x2] : null;
    if (!_0x3b9b1c) {
      console.log("Unauthorized: Token not available!");
      return false;
    }
    const {
      payload: _0x10b765
    } = await jwtVerify(_0x3b9b1c, _0x151c6a);
    console.log("Successfully authenticated, User ID: " + _0x10b765.userID);
    return true;
  } catch (_0x264e64) {
    console.log(_0x264e64);
    return false;
  }
}
__defProp(Authenticate, 'name', {
  'value': 'Authenticate',
  'configurable': true
});
function logout() {
  return new Response("Success", {
    'status': 0xc8,
    'headers': {
      'Set-Cookie': "jwtToken=; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      'Content-Type': "text/plain"
    }
  });
}
__defProp(logout, 'name', {
  'value': "logout",
  'configurable': true
});
async function resetPassword(_0x9695d1, _0x869107) {
  let _0x4b9cb5 = await Authenticate(_0x9695d1, _0x869107);
  const _0x1f7ab2 = await _0x869107.bpb.get("pwd");
  if (_0x1f7ab2 && !_0x4b9cb5) {
    return new Response("Unauthorized!", {
      'status': 0x191
    });
  }
  const _0x2948cb = await _0x9695d1.text();
  if (_0x2948cb === _0x1f7ab2) {
    return new Response("Please enter a new Password!", {
      'status': 0x190
    });
  }
  await _0x869107.bpb.put('pwd', _0x2948cb);
  return new Response('Success', {
    'status': 0xc8,
    'headers': {
      'Set-Cookie': "jwtToken=; Path=/; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      'Content-Type': "text/plain"
    }
  });
}
__defProp(resetPassword, 'name', {
  'value': "resetPassword",
  'configurable': true
});
async function login(_0x5334e9, _0x271a8e) {
  const _0x1ab6b2 = await Authenticate(_0x5334e9, _0x271a8e);
  if (_0x1ab6b2) {
    return Response.redirect(globalThis.urlOrigin + "/panel", 0x12e);
  }
  if (_0x5334e9.method === 'POST') {
    return await generateJWTToken(_0x5334e9, _0x271a8e);
  }
  return await renderLoginPage();
}
__defProp(login, 'name', {
  'value': 'login',
  'configurable': true
});
var import_tweetnacl2 = __toESM(require_nacl_fast());
async function fetchWarpConfigs(_0x59d9cd, _0x50bf78) {
  let _0x3257bd = [];
  const {
    warpPlusLicense: _0x157eef
  } = _0x50bf78;
  const _0x2726be = [generateKeyPair(), generateKeyPair()];
  const _0x4124e6 = {
    'install_id': '',
    'fcm_token': '',
    'tos': new Date().toISOString(),
    'type': "Android",
    'model': 'PC',
    'locale': "en_US",
    'warp_enabled': true
  };
  const _0x171283 = __defProp(async _0x434282 => {
    const _0x5236d5 = await fetch("https://api.cloudflareclient.com/v0a4005/reg", {
      'method': 'POST',
      'headers': {
        'User-Agent': "insomnia/8.6.1",
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        ..._0x4124e6,
        'key': _0x434282.publicKey
      })
    });
    return await _0x5236d5.json();
  }, 'name', {
    'value': "fetchAccount",
    'configurable': true
  });
  const _0x362404 = __defProp(async (_0x2f3391, _0x75adb7) => {
    const _0x351abb = await fetch("https://api.cloudflareclient.com/v0a4005/reg/" + _0x2f3391.id + "/account", {
      'method': 'PUT',
      'headers': {
        'User-Agent': "insomnia/8.6.1",
        'Content-Type': "application/json",
        'Authorization': "Bearer " + _0x2f3391.token
      },
      'body': JSON.stringify({
        ..._0x4124e6,
        'key': _0x75adb7.publicKey,
        'license': _0x157eef
      })
    });
    return {
      'status': _0x351abb.status,
      'data': await _0x351abb.json()
    };
  }, 'name', {
    'value': "updateAccount",
    'configurable': true
  });
  for (const _0x2057e1 of _0x2726be) {
    const _0x4f6dfc = await _0x171283(_0x2057e1);
    _0x3257bd.push({
      'privateKey': _0x2057e1.privateKey,
      'account': _0x4f6dfc
    });
    if (_0x157eef) {
      const {
        status: _0x5f0df4,
        data: _0x471570
      } = await _0x362404(_0x4f6dfc, _0x2057e1);
      if (_0x5f0df4 !== 0xc8 && !_0x471570.success) {
        return {
          'error': _0x471570.errors[0x0]?.["message"],
          'configs': null
        };
      }
    }
  }
  const _0x239de0 = JSON.stringify(_0x3257bd);
  await _0x59d9cd.bpb.put("warpConfigs", _0x239de0);
  return {
    'error': null,
    'configs': _0x239de0
  };
}
__defProp(fetchWarpConfigs, 'name', {
  'value': "fetchWarpConfigs",
  'configurable': true
});
var generateKeyPair = __defProp(() => {
  const _0x53f2de = __defProp(_0x15532f => btoa(String.fromCharCode.apply(null, _0x15532f)), 'name', {
    'value': "base64Encode",
    'configurable': true
  });
  let _0x456b47 = import_tweetnacl2["default"].randomBytes(0x20);
  _0x456b47[0x0] &= 0xf8;
  _0x456b47[0x1f] &= 0x7f;
  _0x456b47[0x1f] |= 0x40;
  let _0x513bf0 = import_tweetnacl2['default'].scalarMult.base(_0x456b47);
  const _0x1f2837 = _0x53f2de(_0x513bf0);
  const _0x5ee166 = _0x53f2de(_0x456b47);
  return {
    'publicKey': _0x1f2837,
    'privateKey': _0x5ee166
  };
}, 'name', {
  'value': 'generateKeyPair',
  'configurable': true
});
async function getDataset(_0x5c3c52, _0x43cf93) {
  let _0x450343;
  let _0x1bd535;
  try {
    _0x450343 = await _0x43cf93.bpb.get("proxySettings", {
      'type': "json"
    });
    _0x1bd535 = await _0x43cf93.bpb.get("warpConfigs", {
      'type': 'json'
    });
  } catch (_0x32b690) {
    console.log(_0x32b690);
    throw new Error("An error occurred while getting KV - " + _0x32b690);
  }
  if (!_0x450343) {
    _0x450343 = await updateDataset(_0x5c3c52, _0x43cf93);
    const {
      error: _0x4cb221,
      configs: _0x2e9543
    } = await fetchWarpConfigs(_0x43cf93, _0x450343);
    if (_0x4cb221) {
      throw new Error("An error occurred while getting Warp configs - " + _0x4cb221);
    }
    _0x1bd535 = _0x2e9543;
  }
  if (globalThis.panelVersion !== _0x450343.panelVersion) {
    _0x450343 = await updateDataset(_0x5c3c52, _0x43cf93);
  }
  return {
    'proxySettings': _0x450343,
    'warpConfigs': _0x1bd535
  };
}
__defProp(getDataset, 'name', {
  'value': 'getDataset',
  'configurable': true
});
async function updateDataset(_0x4f9edd, _0x19e861) {
  let _0x1948e6 = _0x4f9edd.method === 'POST' ? await _0x4f9edd.formData() : null;
  const _0x255e4f = _0x1948e6?.['get']('resetSettings') === 'true';
  let _0xcc81b6;
  if (!_0x255e4f) {
    try {
      _0xcc81b6 = await _0x19e861.bpb.get("proxySettings", {
        'type': "json"
      });
    } catch (_0x5a9e8f) {
      console.log(_0x5a9e8f);
      throw new Error("An error occurred while getting current KV settings - " + _0x5a9e8f);
    }
  } else {
    await _0x19e861.bpb["delete"]("warpConfigs");
    _0x1948e6 = null;
  }
  const _0x681067 = __defProp(_0x110fa5 => {
    const _0x39ec43 = _0x1948e6?.["get"](_0x110fa5);
    if (_0x39ec43 === undefined) {
      return null;
    }
    if (_0x39ec43 === 'true') {
      return true;
    }
    if (_0x39ec43 === "false") {
      return false;
    }
    return _0x39ec43;
  }, 'name', {
    'value': "validateField",
    'configurable': true
  });
  const _0x595bfd = _0x681067("remoteDNS") ?? _0xcc81b6?.["remoteDNS"] ?? "https://8.8.8.8/dns-query";
  const _0x2a4b61 = _0x681067("enableIPv6") ?? _0xcc81b6?.["enableIPv6"] ?? true;
  const _0x3e1bfc = new URL(_0x595bfd);
  const _0x16ab0d = _0x3e1bfc.hostname;
  const _0x1762eb = isDomain(_0x16ab0d);
  let _0x3ceff1 = {};
  if (_0x1762eb) {
    try {
      const _0x56530f = await resolveDNS(_0x16ab0d);
      _0x3ceff1 = {
        'server': _0x16ab0d,
        'staticIPs': _0x2a4b61 ? [..._0x56530f.ipv4, ..._0x56530f.ipv6] : _0x56530f.ipv4
      };
    } catch (_0x543dad) {
      console.log(_0x543dad);
      throw new Error("An error occurred while resolving remote DNS server, please try agian! - " + _0x543dad);
    }
  }
  const _0x14d05b = {
    'remoteDNS': _0x595bfd,
    'resolvedRemoteDNS': _0x3ceff1,
    'localDNS': _0x681067('localDNS') ?? _0xcc81b6?.['localDNS'] ?? "8.8.8.8",
    'vlessTrojanFakeDNS': _0x681067("vlessTrojanFakeDNS") ?? _0xcc81b6?.["vlessTrojanFakeDNS"] ?? false,
    'proxyIP': _0x681067('proxyIP')?.['replaceAll'](" ", '') ?? _0xcc81b6?.["proxyIP"] ?? '',
    'outProxy': _0x681067('outProxy') ?? _0xcc81b6?.["outProxy"] ?? '',
    'outProxyParams': extractChainProxyParams(_0x681067("outProxy")) ?? _0xcc81b6?.["outProxyParams"] ?? {},
    'cleanIPs': _0x681067("cleanIPs")?.["replaceAll"](" ", '') ?? _0xcc81b6?.["cleanIPs"] ?? '',
    'enableIPv6': _0x2a4b61,
    'customCdnAddrs': _0x681067('customCdnAddrs')?.["replaceAll"](" ", '') ?? _0xcc81b6?.["customCdnAddrs"] ?? '',
    'customCdnHost': _0x681067("customCdnHost")?.['trim']() ?? _0xcc81b6?.["customCdnHost"] ?? '',
    'customCdnSni': _0x681067("customCdnSni")?.['trim']() ?? _0xcc81b6?.["customCdnSni"] ?? '',
    'bestVLESSTrojanInterval': _0x681067("bestVLESSTrojanInterval") ?? _0xcc81b6?.["bestVLESSTrojanInterval"] ?? '30',
    'vlessConfigs': _0x681067("vlessConfigs") ?? _0xcc81b6?.['vlessConfigs'] ?? true,
    'trojanConfigs': _0x681067('trojanConfigs') ?? _0xcc81b6?.['trojanConfigs'] ?? false,
    'ports': _0x681067("ports")?.["split"](',') ?? _0xcc81b6?.["ports"] ?? ["443"],
    'lengthMin': _0x681067("fragmentLengthMin") ?? _0xcc81b6?.["lengthMin"] ?? "100",
    'lengthMax': _0x681067('fragmentLengthMax') ?? _0xcc81b6?.["lengthMax"] ?? '200',
    'intervalMin': _0x681067("fragmentIntervalMin") ?? _0xcc81b6?.['intervalMin'] ?? '1',
    'intervalMax': _0x681067("fragmentIntervalMax") ?? _0xcc81b6?.['intervalMax'] ?? '1',
    'fragmentPackets': _0x681067("fragmentPackets") ?? _0xcc81b6?.["fragmentPackets"] ?? "tlshello",
    'bypassLAN': _0x681067("bypass-lan") ?? _0xcc81b6?.["bypassLAN"] ?? false,
    'bypassIran': _0x681067("bypass-iran") ?? _0xcc81b6?.["bypassIran"] ?? false,
    'bypassChina': _0x681067("bypass-china") ?? _0xcc81b6?.["bypassChina"] ?? false,
    'bypassRussia': _0x681067("bypass-russia") ?? _0xcc81b6?.['bypassRussia'] ?? false,
    'blockAds': _0x681067("block-ads") ?? _0xcc81b6?.["blockAds"] ?? false,
    'blockPorn': _0x681067("block-porn") ?? _0xcc81b6?.["blockPorn"] ?? false,
    'blockUDP443': _0x681067('block-udp-443') ?? _0xcc81b6?.["blockUDP443"] ?? false,
    'customBypassRules': _0x681067('customBypassRules')?.["replaceAll"](" ", '') ?? _0xcc81b6?.["customBypassRules"] ?? '',
    'customBlockRules': _0x681067("customBlockRules")?.['replaceAll'](" ", '') ?? _0xcc81b6?.["customBlockRules"] ?? '',
    'warpEndpoints': _0x681067("warpEndpoints")?.['replaceAll'](" ", '') ?? _0xcc81b6?.["warpEndpoints"] ?? "engage.cloudflareclient.com:2408",
    'warpFakeDNS': _0x681067("warpFakeDNS") ?? _0xcc81b6?.["warpFakeDNS"] ?? false,
    'warpEnableIPv6': _0x681067("warpEnableIPv6") ?? _0xcc81b6?.["warpEnableIPv6"] ?? true,
    'warpPlusLicense': _0x681067("warpPlusLicense") ?? _0xcc81b6?.["warpPlusLicense"] ?? '',
    'bestWarpInterval': _0x681067("bestWarpInterval") ?? _0xcc81b6?.["bestWarpInterval"] ?? '30',
    'hiddifyNoiseMode': _0x681067("hiddifyNoiseMode") ?? _0xcc81b6?.["hiddifyNoiseMode"] ?? 'm4',
    'nikaNGNoiseMode': _0x681067('nikaNGNoiseMode') ?? _0xcc81b6?.['nikaNGNoiseMode'] ?? "quic",
    'noiseCountMin': _0x681067('noiseCountMin') ?? _0xcc81b6?.["noiseCountMin"] ?? '10',
    'noiseCountMax': _0x681067("noiseCountMax") ?? _0xcc81b6?.["noiseCountMax"] ?? '15',
    'noiseSizeMin': _0x681067("noiseSizeMin") ?? _0xcc81b6?.["noiseSizeMin"] ?? '5',
    'noiseSizeMax': _0x681067("noiseSizeMax") ?? _0xcc81b6?.["noiseSizeMax"] ?? '10',
    'noiseDelayMin': _0x681067("noiseDelayMin") ?? _0xcc81b6?.['noiseDelayMin'] ?? '1',
    'noiseDelayMax': _0x681067("noiseDelayMax") ?? _0xcc81b6?.["noiseDelayMax"] ?? '1',
    'panelVersion': globalThis.panelVersion
  };
  try {
    await _0x19e861.bpb.put("proxySettings", JSON.stringify(_0x14d05b));
  } catch (_0x147146) {
    console.log(_0x147146);
    throw new Error("An error occurred while updating KV - " + _0x147146);
  }
  return _0x14d05b;
}
__defProp(updateDataset, 'name', {
  'value': 'updateDataset',
  'configurable': true
});
function extractChainProxyParams(_0x16b5ff) {
  let _0x5b7dda = {};
  if (!_0x16b5ff) {
    return {};
  }
  const _0x45c531 = new URL(_0x16b5ff);
  const _0x23eb92 = _0x45c531.protocol.slice(0x0, -0x1);
  if (_0x23eb92 === 'vless') {
    const _0x1255ae = new URLSearchParams(_0x45c531.search);
    _0x5b7dda = {
      'protocol': _0x23eb92,
      'uuid': _0x45c531.username,
      'server': _0x45c531.hostname,
      'port': _0x45c531.port
    };
    _0x1255ae.forEach((_0x141542, _0x5c1ec6) => {
      _0x5b7dda[_0x5c1ec6] = _0x141542;
    });
  } else {
    _0x5b7dda = {
      'protocol': _0x23eb92,
      'user': _0x45c531.username,
      'pass': _0x45c531.password,
      'server': _0x45c531.host,
      'port': _0x45c531.port
    };
  }
  return JSON.stringify(_0x5b7dda);
}
__defProp(extractChainProxyParams, 'name', {
  'value': "extractChainProxyParams",
  'configurable': true
});
async function updateWarpConfigs(_0x4578e4, _0x338aa6) {
  const _0x418d8d = await Authenticate(_0x4578e4, _0x338aa6);
  if (!_0x418d8d) {
    return new Response('Unauthorized', {
      'status': 0x191
    });
  }
  if (_0x4578e4.method === "POST") {
    try {
      const {
        proxySettings: _0x2813c3
      } = await getDataset(_0x4578e4, _0x338aa6);
      const {
        error: _0x347ca4
      } = await fetchWarpConfigs(_0x338aa6, _0x2813c3);
      if (_0x347ca4) {
        return new Response(_0x347ca4, {
          'status': 0x190
        });
      }
      return new Response("Warp configs updated successfully", {
        'status': 0xc8
      });
    } catch (_0x5a316e) {
      console.log(_0x5a316e);
      return new Response("An error occurred while updating Warp configs! - " + _0x5a316e, {
        'status': 0x1f4
      });
    }
  } else {
    return new Response("Unsupported request", {
      'status': 0x195
    });
  }
}
__defProp(updateWarpConfigs, 'name', {
  'value': 'updateWarpConfigs',
  'configurable': true
});
async function renderHomePage(_0x2512a8, _0x353b75) {
  const {
    remoteDNS: _0x461fac,
    localDNS: _0x431c21,
    vlessTrojanFakeDNS: _0x9dd9e5,
    proxyIP: _0x39bd8a,
    outProxy: _0x167eb2,
    cleanIPs: _0x59003a,
    enableIPv6: _0x20fe9a,
    customCdnAddrs: _0x2c5f4a,
    customCdnHost: _0x33c6c8,
    customCdnSni: _0x26251a,
    bestVLESSTrojanInterval: _0x2951c7,
    vlessConfigs: _0xacadec,
    trojanConfigs: _0x57a07c,
    ports: _0x3a1f67,
    lengthMin: _0x3afae1,
    lengthMax: _0xedc88,
    intervalMin: _0xcd71dd,
    intervalMax: _0x13b29b,
    fragmentPackets: _0x59e0aa,
    warpEndpoints: _0x39e46d,
    warpFakeDNS: _0x40b84c,
    warpEnableIPv6: _0x52f917,
    warpPlusLicense: _0xaa3b4d,
    bestWarpInterval: _0xb8aad6,
    hiddifyNoiseMode: _0x3abda4,
    nikaNGNoiseMode: _0xa67883,
    noiseCountMin: _0x3b78c7,
    noiseCountMax: _0x54aa30,
    noiseSizeMin: _0x302bb6,
    noiseSizeMax: _0x56c880,
    noiseDelayMin: _0x83bbea,
    noiseDelayMax: _0x5b1fba,
    bypassLAN: _0xe3302e,
    bypassIran: _0x36a3d5,
    bypassChina: _0x1303f5,
    bypassRussia: _0x1358d5,
    blockAds: _0x44974e,
    blockPorn: _0x30a890,
    blockUDP443: _0x3faa2e,
    customBypassRules: _0x29ccae,
    customBlockRules: _0x2b016c
  } = _0x2512a8;
  const _0x165237 = !!_0xaa3b4d;
  const _0x1ad17d = (_0xacadec ? 0x1 : 0x0) + (_0x57a07c ? 0x1 : 0x0);
  let _0xdfa872 = '';
  let _0x457ace = '';
  const _0x47ad7a = [...(globalThis.hostName.includes("workers.dev") ? globalThis.defaultHttpPorts : []), ...globalThis.defaultHttpsPorts];
  _0x47ad7a.forEach(_0x4c6a99 => {
    const _0x1b4c9e = "port-" + _0x4c6a99;
    const _0x8dfe9e = _0x3a1f67.includes(_0x4c6a99) ? 'checked' : '';
    const _0x5de80b = "\n            <div class=\"routing\" style=\"grid-template-columns: 1fr 2fr; margin-right: 10px;\">\n                <input type=\"checkbox\" id=" + _0x1b4c9e + " name=" + _0x4c6a99 + " onchange=\"handlePortChange(event)\" value=\"true\" " + _0x8dfe9e + ">\n                <label style=\"margin-bottom: 3px;\" for=" + _0x1b4c9e + '>' + _0x4c6a99 + "</label>\n            </div>";
    if (globalThis.defaultHttpsPorts.includes(_0x4c6a99)) {
      _0x457ace += _0x5de80b;
    } else {
      _0xdfa872 += _0x5de80b;
    }
  });
  const _0x236ae4 = __defProp(_0x467f4e => _0x467f4e.map(_0x2a17f3 => "\n        <div>\n            <span class=\"material-symbols-outlined symbol\">verified</span>\n            <span>" + _0x2a17f3 + "</span>\n        </div>").join(''), 'name', {
    'value': 'supportedApps',
    'configurable': true
  });
  const _0x3dd0c8 = __defProp((_0x443559, _0x280d19, _0x158147, _0x306242, _0x3f2613) => {
    const _0x5187d8 = (_0x3f2613 ? 'sing-box://import-remote-profile?url=' : '') + "https://" + globalThis.hostName + '/' + _0x443559 + '/' + globalThis.userID + (_0x280d19 ? "?app=" + _0x280d19 : '') + '#' + _0x158147;
    return "\n            <button onclick=\"openQR('" + _0x5187d8 + "', '" + _0x306242 + "')\" style=\"margin-bottom: 8px;\">\n                QR Code&nbsp;<span class=\"material-symbols-outlined\">qr_code</span>\n            </button>";
  }, 'name', {
    'value': "subQR",
    'configurable': true
  });
  const _0x367b50 = __defProp((_0x5b472e, _0x448b5a, _0x48e8ba) => {
    const _0x12f7a0 = "https://" + globalThis.hostName + '/' + _0x5b472e + '/' + globalThis.userID + (_0x448b5a ? "?app=" + _0x448b5a : '') + '#' + _0x48e8ba;
    return "\n            <button onclick=\"copyToClipboard('" + _0x12f7a0 + "')\">\n                Copy Sub<span class=\"material-symbols-outlined\">format_list_bulleted</span>\n            </button>";
  }, 'name', {
    'value': "subURL",
    'configurable': true
  });
  const _0x5486ba = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta name=\"timestamp\" content=" + Date.now() + ">\n        <title>BPB Panel " + globalThis.panelVersion + "</title>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\" />\n        <title>Collapsible Sections</title>\n        <style>\n            :root {\n                --color: black;\n                --primary-color: #09639f;\n                --secondary-color: #3498db;\n                --header-color: #09639f; \n                --background-color: #fff;\n                --form-background-color: #f9f9f9;\n                --table-active-color: #f2f2f2;\n                --hr-text-color: #3b3b3b;\n                --lable-text-color: #333;\n                --border-color: #ddd;\n                --button-color: #09639f;\n                --input-background-color: white;\n                --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n            }\n            body { font-family: Twemoji Country Flags, system-ui; background-color: var(--background-color); color: var(--color) }\n            body.dark-mode {\n                --color: white;\n                --primary-color: #09639F;\n                --secondary-color: #3498DB;\n                --header-color: #3498DB; \n                --background-color: #121212;\n                --form-background-color: #121212;\n                --table-active-color: #252525;\n                --hr-text-color: #D5D5D5;\n                --lable-text-color: #DFDFDF;\n                --border-color: #353535;\n                --button-color: #3498DB;\n                --input-background-color: #252525;\n                --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n            }\n            .material-symbols-outlined {\n                margin-left: 5px;\n                font-variation-settings:\n                'FILL' 0,\n                'wght' 400,\n                'GRAD' 0,\n                'opsz' 24\n            }\n            details { border-bottom: 1px solid var(--border-color); }\n            summary {\n                font-weight: bold;\n                cursor: pointer;\n                text-align: center;\n                text-wrap: nowrap;\n            }\n            summary::marker { font-size: 1.5rem; color: var(--secondary-color); }\n            summary h2 { display: inline-flex; }\n            h1 { font-size: 2.5em; text-align: center; color: var(--header-color); text-shadow: var(--header-shadow); }\n            h2,h3 { margin: 30px 0; text-align: center; color: var(--hr-text-color); }\n            hr { border: 1px solid var(--border-color); margin: 20px 0; }\n            .footer {\n                display: flex;\n                font-weight: 600;\n                margin: 10px auto 0 auto;\n                justify-content: center;\n                align-items: center;\n            }\n            .footer button {margin: 0 20px; background: #212121; max-width: fit-content;}\n            .footer button:hover, .footer button:focus { background: #3b3b3b;}\n            .form-control a, a.link { text-decoration: none; }\n            .form-control {\n                margin-bottom: 20px;\n                font-family: Arial, sans-serif;\n                display: flex;\n                flex-direction: column;\n            }\n            .form-control button {\n                background-color: var(--form-background-color);\n                font-size: 1.1rem;\n                font-weight: 600;\n                color: var(--button-color);\n                border-color: var(--primary-color);\n                border: 1px solid;\n            }\n            #apply {display: block; margin-top: 20px;}\n            input.button {font-weight: 600; padding: 15px 0; font-size: 1.1rem;}\n            label {\n                display: block;\n                margin-bottom: 5px;\n                font-size: 110%;\n                font-weight: 600;\n                color: var(--lable-text-color);\n            }\n            input[type=\"text\"],\n            input[type=\"number\"],\n            input[type=\"url\"],\n            textarea,\n            select {\n                width: 100%;\n                text-align: center;\n                padding: 10px;\n                border: 1px solid var(--border-color);\n                border-radius: 5px;\n                font-size: 16px;\n                color: var(--lable-text-color);\n                background-color: var(--input-background-color);\n                box-sizing: border-box;\n                transition: border-color 0.3s ease;\n            }\t\n            input[type=\"text\"]:focus,\n            input[type=\"number\"]:focus,\n            input[type=\"url\"]:focus,\n            textarea:focus,\n            select:focus { border-color: var(--secondary-color); outline: none; }\n            .button,\n            table button {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                width: 100%;\n                white-space: nowrap;\n                padding: 10px 15px;\n                font-size: 16px;\n                font-weight: 600;\n                letter-spacing: 1px;\n                border: none;\n                border-radius: 5px;\n                color: white;\n                background-color: var(--primary-color);\n                cursor: pointer;\n                outline: none;\n                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n                transition: all 0.3s ease;\n            }\n            input[type=\"checkbox\"] { \n                background-color: var(--input-background-color);\n                style=\"margin: 0; \n                grid-column: 2;\"\n            }\n            table button { margin: auto; width: auto; }\n            .button.disabled {\n                background-color: #ccc;\n                cursor: not-allowed;\n                box-shadow: none;\n                pointer-events: none;\n            }\n            .button:hover,\n            table button:hover,\n            table button:focus {\n                background-color: #2980b9;\n                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n                transform: translateY(-2px);\n            }\n            .header-container button:hover {\n                transform: scale(1.1);\n            }\n            button.button:hover { color: white; }\n            .button:active,\n            table button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n            .form-container {\n                max-width: 90%;\n                margin: 0 auto;\n                padding: 20px;\n                background: var(--form-background-color);\n                border: 1px solid var(--border-color);\n                border-radius: 10px;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                margin-bottom: 100px;\n            }\n            .table-container { margin-top: 20px; overflow-x: auto; }\n            table { \n                width: 100%;\n                border: 1px solid var(--border-color);\n                border-collapse: separate;\n                border-spacing: 0; \n                border-radius: 10px;\n                margin-bottom: 20px;\n                overflow: hidden;\n            }\n            th, td { padding: 10px; border-bottom: 1px solid var(--border-color); }\n            td div { display: flex; align-items: center; }\n            th { background-color: var(--secondary-color); color: white; font-weight: bold; font-size: 1.1rem; width: 50%;}\n            td:last-child { background-color: var(--table-active-color); }               \n            tr:hover { background-color: var(--table-active-color); }\n            .modal {\n                display: none;\n                position: fixed;\n                z-index: 1;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                overflow: auto;\n                background-color: rgba(0, 0, 0, 0.4);\n            }\n            .modal-content {\n                background-color: var(--form-background-color);\n                margin: auto;\n                padding: 10px 20px 20px;\n                border: 1px solid var(--border-color);\n                border-radius: 10px;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                width: 80%;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n            }\n            .close { color: var(--color); float: right; font-size: 28px; font-weight: bold; }\n            .close:hover,\n            .close:focus { color: black; text-decoration: none; cursor: pointer; }\n            .form-control label {\n                display: block;\n                margin-bottom: 8px;\n                font-size: 110%;\n                font-weight: 600;\n                color: var(--lable-text-color);\n                line-height: 1.3em;\n            }\n            .form-control input[type=\"password\"] {\n                width: 100%;\n                padding: 10px;\n                border: 1px solid var(--border-color);\n                border-radius: 5px;\n                font-size: 16px;\n                color: var(--lable-text-color);\n                background-color: var(--input-background-color);\n                box-sizing: border-box;\n                margin-bottom: 15px;\n                transition: border-color 0.3s ease;\n            }\n            .routing { \n                display: grid;\n                justify-content: flex-start;\n                grid-template-columns: 1fr 1fr 10fr 1fr;\n                margin-bottom: 15px;\n            }\n            .form-control .routing input { grid-column: 2 / 3; }\n            #routing-rules.form-control { display: grid; grid-template-columns: 1fr 1fr; }\n            .routing label {\n                text-align: left;\n                margin: 0 0 0 10px;\n                font-weight: 400;\n                font-size: 100%;\n                text-wrap: nowrap;\n            }\n            .form-control input[type=\"password\"]:focus { border-color: var(--secondary-color); outline: none; }\n            #passwordError { color: red; margin-bottom: 10px; }\n            .symbol { margin-right: 8px; }\n            .modalQR {\n                display: none;\n                position: fixed;\n                z-index: 1;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                overflow: auto;\n                background-color: rgba(0, 0, 0, 0.4);\n            }\n            .floating-button {\n                position: fixed;\n                bottom: 20px;\n                left: 20px;\n                background-color: var(--color);\n                color: white;\n                border: none;\n                border-radius: 50%;\n                width: 60px;\n                height: 60px;\n                font-size: 24px;\n                cursor: pointer;\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                transition: background-color 0.3s, transform 0.3s;\n            }\n            .floating-button:hover { transform: scale(1.1); }\n            .min-max { display: grid; grid-template-columns: 1fr auto 1fr; align-items: baseline; width: 100%; }\n            .min-max span { text-align: center; white-space: pre; }\n            .input-with-select { width: 100%; }\n            body.dark-mode .floating-button { background-color: var(--color); }\n            body.dark-mode .floating-button:hover { transform: scale(1.1); }\n            #ips th { background-color: var(--hr-text-color); color: var(--background-color); width: unset; }\n            #ips td { background-color: unset; }\n            #ips td:first-child { background-color: var(--table-active-color); }\n            .header-container { display: flex; align-items: center; justify-content: center; }\n            @media only screen and (min-width: 768px) {\n                .form-container { max-width: 70%; }\n                .form-control { \n                    margin-bottom: 15px;\n                    display: grid;\n                    grid-template-columns: 1fr 1fr;\n                    align-items: baseline;\n                    justify-content: flex-end;\n                    font-family: Arial, sans-serif;\n                }\n                #apply { display: block; margin: 20px auto 0 auto; max-width: 50%; }\n                .modal-content { width: 30% }\n                .routing { display: grid; grid-template-columns: 4fr 1fr 3fr 4fr; }\n            }\n        </style>\n    </head>\n    <body>\n        <h1>BPB Panel <span style=\"font-size: smaller;\">" + globalThis.panelVersion + "</span> 💦</h1>\n        <div class=\"form-container\">\n            <form id=\"configForm\">\n                <details open>\n                    <summary><h2>VLESS - TROJAN ⚙️</h2></summary>\n                    <div class=\"form-control\">\n                        <label for=\"remoteDNS\">🌏 Remote DNS</label>\n                        <input type=\"url\" id=\"remoteDNS\" name=\"remoteDNS\" value=\"" + _0x461fac + "\" required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"localDNS\">🏚️ Local DNS</label>\n                        <input type=\"text\" id=\"localDNS\" name=\"localDNS\" value=\"" + _0x431c21 + "\"\n                            pattern=\"^(?:\\d{1,3}\\.){3}\\d{1,3}$\"\n                            title=\"Please enter a valid DNS IP Address!\"  required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"vlessTrojanFakeDNS\">🧢 Fake DNS</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"vlessTrojanFakeDNS\" name=\"vlessTrojanFakeDNS\">\n                                <option value=\"true\" " + (_0x9dd9e5 ? "selected" : '') + ">Enabled</option>\n                                <option value=\"false\" " + (!_0x9dd9e5 ? "selected" : '') + ">Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"proxyIP\">📍 Proxy IPs / Domains</label>\n                        <input type=\"text\" id=\"proxyIP\" name=\"proxyIP\" value=\"" + _0x39bd8a.replaceAll(',', " , ") + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"outProxy\">✈️ Chain Proxy</label>\n                        <input type=\"text\" id=\"outProxy\" name=\"outProxy\" value=\"" + _0x167eb2 + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"cleanIPs\">✨ Clean IPs / Domains</label>\n                        <input type=\"text\" id=\"cleanIPs\" name=\"cleanIPs\" value=\"" + _0x59003a.replaceAll(',', " , ") + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"scanner\">🔎 Clean IP Scanner</label>\n                        <a href=\"" + atob("aHR0cHM6Ly9naXRodWIuY29tL2JpYS1wYWluLWJhY2hl") + "/Cloudflare-Clean-IP-Scanner/releases/tag/v2.2.5\" name=\"scanner\" target=\"_blank\" style=\"width: 100%;\">\n                            <button type=\"button\" id=\"scanner\" class=\"button\">\n                                Download Scanner\n                                <span class=\"material-symbols-outlined\">open_in_new</span>\n                            </button>\n                        </a>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"enableIPv6\">🔛 IPv6</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"enableIPv6\" name=\"enableIPv6\">\n                                <option value=\"true\" " + (_0x20fe9a ? "selected" : '') + ">Enabled</option>\n                                <option value=\"false\" " + (!_0x20fe9a ? "selected" : '') + ">Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"customCdnAddrs\">💀 Custom CDN Addrs</label>\n                        <input type=\"text\" id=\"customCdnAddrs\" name=\"customCdnAddrs\" value=\"" + _0x2c5f4a.replaceAll(',', " , ") + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"customCdnHost\">💀 Custom CDN Host</label> \n                        <input type=\"text\" id=\"customCdnHost\" name=\"customCdnHost\" value=\"" + _0x33c6c8 + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"customCdnSni\">💀 Custom CDN SNI</label>\n                        <input type=\"text\" id=\"customCdnSni\" name=\"customCdnSni\" value=\"" + _0x26251a + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"bestVLESSTrojanInterval\">🔄 Best Interval</label>\n                        <input type=\"number\" id=\"bestVLESSTrojanInterval\" name=\"bestVLESSTrojanInterval\" min=\"10\" max=\"90\" value=\"" + _0x2951c7 + "\">\n                    </div>\n                    <div class=\"form-control\" style=\"padding-top: 10px;\">\n                        <label for=\"vlessConfigs\">⚙️ Protocols</label>\n                        <div style=\"width: 100%; display: grid; grid-template-columns: 1fr 1fr; align-items: baseline; margin-top: 10px;\">\n                            <div style = \"display: flex; justify-content: center; align-items: center;\">\n                                <input type=\"checkbox\" id=\"vlessConfigs\" name=\"vlessConfigs\" onchange=\"handleProtocolChange(event)\" value=\"true\" " + (_0xacadec ? "checked" : '') + ">\n                                <label for=\"vlessConfigs\" style=\"margin: 0 5px; font-weight: normal; font-size: unset;\">VLESS</label>\n                            </div>\n                            <div style = \"display: flex; justify-content: center; align-items: center;\">\n                                <input type=\"checkbox\" id=\"trojanConfigs\" name=\"trojanConfigs\" onchange=\"handleProtocolChange(event)\" value=\"true\" " + (_0x57a07c ? "checked" : '') + ">\n                                <label for=\"trojanConfigs\" style=\"margin: 0 5px; font-weight: normal; font-size: unset;\">Trojan</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"table-container\">\n                        <table id=\"ports-block\">\n                            <tr>\n                                <th style=\"text-wrap: nowrap; background-color: gray;\">Config type</th>\n                                <th style=\"text-wrap: nowrap; background-color: gray;\">Ports</th>\n                            </tr>\n                            <tr>\n                                <td style=\"text-align: center; font-size: larger;\"><b>TLS</b></td>\n                                <td>\n                                    <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;\">" + _0x457ace + "</div>\n                                </td>    \n                            </tr>\n                            " + (!_0xdfa872 ? '' : "<tr>\n                                <td style=\"text-align: center; font-size: larger;\"><b>Non TLS</b></td>\n                                <td>\n                                    <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;\">" + _0xdfa872 + "</div>\n                                </td>    \n                            </tr>") + "        \n                        </table>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>FRAGMENT ⚙️</h2></summary>\t\n                    <div class=\"form-control\">\n                        <label for=\"fragmentLengthMin\">📐 Length</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"fragmentLengthMin\" name=\"fragmentLengthMin\" value=\"" + _0x3afae1 + "\" min=\"10\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"fragmentLengthMax\" name=\"fragmentLengthMax\" value=\"" + _0xedc88 + "\" max=\"500\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"fragmentIntervalMin\">🕞 Interval</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"fragmentIntervalMin\" name=\"fragmentIntervalMin\"\n                                value=\"" + _0xcd71dd + "\" min=\"1\" max=\"30\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"fragmentIntervalMax\" name=\"fragmentIntervalMax\"\n                                value=\"" + _0x13b29b + "\" min=\"1\" max=\"30\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"fragmentPackets\">📦 Packets</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"fragmentPackets\" name=\"fragmentPackets\">\n                                <option value=\"tlshello\" " + (_0x59e0aa === "tlshello" ? "selected" : '') + ">tlshello</option>\n                                <option value=\"1-1\" " + (_0x59e0aa === "1-1" ? 'selected' : '') + ">1-1</option>\n                                <option value=\"1-2\" " + (_0x59e0aa === '1-2' ? "selected" : '') + ">1-2</option>\n                                <option value=\"1-3\" " + (_0x59e0aa === "1-3" ? 'selected' : '') + ">1-3</option>\n                                <option value=\"1-5\" " + (_0x59e0aa === "1-5" ? "selected" : '') + ">1-5</option>\n                            </select>\n                        </div>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>WARP GENERAL ⚙️</h2></summary>\n                    <div class=\"form-control\">\n                        <label for=\"warpEndpoints\">✨ Endpoints</label>\n                        <input type=\"text\" id=\"warpEndpoints\" name=\"warpEndpoints\" value=\"" + _0x39e46d.replaceAll(',', " , ") + "\" required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"endpointScanner\" style=\"line-height: 1.5;\">🔎 Scan Endpoint</label>\n                        <button type=\"button\" id=\"endpointScanner\" class=\"button\" style=\"padding: 10px 0;\" onclick=\"copyToClipboard('bash <(curl -fsSL " + atob("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2JpYS1wYWluLWJhY2hl") + "/warp-script/refs/heads/main/endip/install.sh)', false)\">\n                            Copy Script<span class=\"material-symbols-outlined\">terminal</span>\n                        </button>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"warpFakeDNS\">🧢 Fake DNS</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"warpFakeDNS\" name=\"warpFakeDNS\">\n                                <option value=\"true\" " + (_0x40b84c ? "selected" : '') + ">Enabled</option>\n                                <option value=\"false\" " + (!_0x40b84c ? "selected" : '') + ">Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"warpEnableIPv6\">🔛 IPv6</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"warpEnableIPv6\" name=\"warpEnableIPv6\">\n                                <option value=\"true\" " + (_0x52f917 ? "selected" : '') + ">Enabled</option>\n                                <option value=\"false\" " + (!_0x52f917 ? "selected" : '') + ">Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"warpPlusLicense\">➕ Warp+ License</label>\n                        <input type=\"text\" id=\"warpPlusLicense\" name=\"warpPlusLicense\" value=\"" + _0xaa3b4d + "\" \n                            pattern=\"^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{8}-[a-zA-Z0-9]{8}$\" \n                            title=\"Please enter a valid Warp Plus license in xxxxxxxx-xxxxxxxx-xxxxxxxx format\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"refreshBtn\">♻️ Warp Configs</label>\n                        <button id=\"refreshBtn\" type=\"button\" class=\"button\" style=\"padding: 10px 0;\" onclick=\"getWarpConfigs()\">\n                            Update<span class=\"material-symbols-outlined\">autorenew</span>\n                        </button>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"bestWarpInterval\">🔄 Best Interval</label>\n                        <input type=\"number\" id=\"bestWarpInterval\" name=\"bestWarpInterval\" min=\"10\" max=\"90\" value=\"" + _0xb8aad6 + "\">\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>WARP PRO ⚙️</h2></summary>\n                    <div class=\"form-control\">\n                        <label for=\"hiddifyNoiseMode\">😵‍💫 Hiddify Mode</label>\n                        <input type=\"text\" id=\"hiddifyNoiseMode\" name=\"hiddifyNoiseMode\" \n                            pattern=\"^(m[1-6]|h_[0-9A-Fa-f]{2}|g_([0-9A-Fa-f]{2}_){2}[0-9A-Fa-f]{2})$\" \n                            title=\"Enter 'm1-m6', 'h_HEX', 'g_HEX_HEX_HEX' which HEX can be between 00 to ff\"\n                            value=\"" + _0x3abda4 + "\" required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"nikaNGNoiseMode\">😵‍💫 NikaNG Mode</label>\n                        <input type=\"text\" id=\"nikaNGNoiseMode\" name=\"nikaNGNoiseMode\" \n                            pattern=\"^(none|quic|random|[0-9A-Fa-f]+)$\" \n                            title=\"Enter 'none', 'quic', 'random', or any HEX string like 'ee0000000108aaaa'\"\n                            value=\"" + _0xa67883 + "\" required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"noiseCountMin\">🎚️ Noise Count</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"noiseCountMin\" name=\"noiseCountMin\"\n                                value=\"" + _0x3b78c7 + "\" min=\"1\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"noiseCountMax\" name=\"noiseCountMax\"\n                                value=\"" + _0x54aa30 + "\" min=\"1\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"noiseSizeMin\">📏 Noise Size</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"noiseSizeMin\" name=\"noiseSizeMin\"\n                                value=\"" + _0x302bb6 + "\" min=\"1\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"noiseSizeMax\" name=\"noiseSizeMax\"\n                                value=\"" + _0x56c880 + "\" min=\"1\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"noiseDelayMin\">🕞 Noise Delay</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"noiseDelayMin\" name=\"noiseDelayMin\"\n                                value=\"" + _0x83bbea + "\" min=\"1\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"noiseDelayMax\" name=\"noiseDelayMax\"\n                                value=\"" + _0x5b1fba + "\" min=\"1\" required>\n                        </div>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>ROUTING RULES ⚙️</h2></summary>\n                    <div id=\"routing-rules\" class=\"form-control\" style=\"margin-bottom: 20px;\">\t\t\t\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"bypass-lan\" name=\"bypass-lan\" value=\"true\" " + (_0xe3302e ? "checked" : '') + ">\n                            <label for=\"bypass-lan\">Bypass LAN</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"block-ads\" name=\"block-ads\" value=\"true\" " + (_0x44974e ? 'checked' : '') + ">\n                            <label for=\"block-ads\">Block Ads.</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"bypass-iran\" name=\"bypass-iran\" value=\"true\" " + (_0x36a3d5 ? 'checked' : '') + ">\n                            <label for=\"bypass-iran\">Bypass Iran</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"block-porn\" name=\"block-porn\" value=\"true\" " + (_0x30a890 ? "checked" : '') + ">\n                            <label for=\"block-porn\">Block Porn</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"bypass-china\" name=\"bypass-china\" value=\"true\" " + (_0x1303f5 ? "checked" : '') + ">\n                            <label for=\"bypass-china\">Bypass China</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"block-udp-443\" name=\"block-udp-443\" value=\"true\" " + (_0x3faa2e ? "checked" : '') + ">\n                            <label for=\"block-udp-443\">Block QUIC</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"bypass-russia\" name=\"bypass-russia\" value=\"true\" " + (_0x1358d5 ? "checked" : '') + ">\n                            <label for=\"bypass-russia\">Bypass Russia</label>\n                        </div>\n                    </div>\n                    <h3>CUSTOM RULES 🔧</h3>\n                    <div class=\"form-control\">\n                        <label for=\"customBypassRules\">🟩 Bypass IPs / Domains</label>\n                        <input type=\"text\" id=\"customBypassRules\" name=\"customBypassRules\" value=\"" + _0x29ccae.replaceAll(',', " , ") + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"customBlockRules\">🟥 Block IPs / Domains</label>\n                        <input type=\"text\" id=\"customBlockRules\" name=\"customBlockRules\" value=\"" + _0x2b016c.replaceAll(',', " , ") + "\">\n                    </div>\n                </details>\n                <div id=\"apply\" class=\"form-control\">\n                    <div style=\"grid-column: 2; width: 100%; display: inline-flex;\">\n                        <input type=\"submit\" id=\"applyButton\" style=\"margin-right: 10px;\" class=\"button disabled\" value=\"APPLY SETTINGS 💥\" form=\"configForm\">\n                        <button type=\"button\" id=\"resetSettings\" style=\"background: none; margin: 0; border: none; cursor: pointer;\">\n                            <i class=\"fa fa-refresh fa-2x fa-border\" style=\"border-radius: .2em; border-color: var(--border-color);\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </div>\n            </form>\n            <hr>            \n            <h2>🔗 NORMAL SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"normal-configs-table\">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(['v2rayNG', "NikaNG", "MahsaNG", "v2rayN", "v2rayN-PRO", 'Shadowrocket', 'Streisand', "Hiddify", "Nekoray (Xray)"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8("sub", '', "BPB-Normal", "Normal Subscription") + "\n                            " + _0x367b50("sub", '', "BPB-Normal") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(['husi', "Nekobox", "Nekoray (sing-Box)", "Karing"]) + "\n                        </td>\n                        <td>\n                            " + _0x367b50("sub", 'singbox', "BPB-Normal") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 FULL NORMAL SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"full-normal-configs-table\">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(["v2rayNG", "NikaNG", "MahsaNG", "v2rayN", "v2rayN-PRO", 'Streisand']) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8("sub", "xray", "BPB-Full-Normal", "Full normal Subscription") + "\n                            " + _0x367b50("sub", 'xray', "BPB-Full-Normal") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(["sing-box", "v2rayN (sing-box)"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8("sub", 'sfa', "BPB-Full-Normal", "Full normal Subscription", true) + "\n                            " + _0x367b50("sub", 'sfa', "BPB-Full-Normal") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(["Clash Meta", "Clash Verge", "FlClash", 'Stash', "v2rayN (mihomo)"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8("sub", 'clash', 'BPB-Full-Normal', "Full normal Subscription") + "\n                            " + _0x367b50('sub', "clash", "BPB-Full-Normal") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 FRAGMENT SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"frag-sub-table\">\n                    <tr>\n                        <th style=\"text-wrap: nowrap;\">Application</th>\n                        <th style=\"text-wrap: nowrap;\">Subscription</th>\n                    </tr>\n                    <tr>\n                        <td style=\"text-wrap: nowrap;\">\n                            " + _0x236ae4(['v2rayNG', "NikaNG", "MahsaNG", "v2rayN", "v2rayN-PRO", "Streisand"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8('fragsub', '', 'BPB-Fragment', "Fragment Subscription") + "\n                            " + _0x367b50("fragsub", '', "BPB-Fragment") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-wrap: nowrap;\">\n                            " + _0x236ae4(["Hiddify"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8('fragsub', 'hiddify', "BPB-Fragment", "Fragment Subscription") + "\n                            " + _0x367b50("fragsub", 'hiddify', 'BPB-Fragment') + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 WARP SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"normal-configs-table\">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(["v2rayNG", "v2rayN", "Streisand"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8("warpsub", "xray", 'BPB-Warp', "Warp Subscription") + "\n                            " + _0x367b50('warpsub', "xray", "BPB-Warp") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(["Hiddify", "sing-box", "v2rayN (sing-box)"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8("sub", "singbox", "BPB-Warp", "Warp Subscription", true) + "\n                            " + _0x367b50("warpsub", "singbox", 'BPB-Warp') + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(["Clash Meta", "Clash Verge", "FlClash", "Stash", "v2rayN (mihomo)"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8('warpsub', 'clash', 'BPB-Warp', "Warp Subscription") + "\n                            " + _0x367b50("warpsub", 'clash', "BPB-Warp") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 WARP PRO SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"warp-pro-configs-table\">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(['NikaNG', "MahsaNG", 'v2rayN-PRO']) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8("warpsub", "nikang", "BPB-Warp-Pro", "Warp Pro Subscription") + "\n                            " + _0x367b50("warpsub", "nikang", "BPB-Warp-Pro") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x236ae4(["Hiddify"]) + "\n                        </td>\n                        <td>\n                            " + _0x3dd0c8("warpsub", "hiddify", "BPB-Warp-Pro", "Warp Pro Subscription", true) + "\n                            " + _0x367b50('warpsub', "hiddify", "BPB-Warp-Pro") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div id=\"myModal\" class=\"modal\">\n                <div class=\"modal-content\">\n                    <span class=\"close\">&times;</span>\n                    <form id=\"passwordChangeForm\">\n                        <h2>Change Password</h2>\n                        <div class=\"form-control\">\n                            <label for=\"newPassword\">New Password</label>\n                            <input type=\"password\" id=\"newPassword\" name=\"newPassword\" required>\n                            </div>\n                        <div class=\"form-control\">\n                            <label for=\"confirmPassword\">Confirm Password</label>\n                            <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" required>\n                        </div>\n                        <div id=\"passwordError\" style=\"color: red; margin-bottom: 10px;\"></div>\n                        <button id=\"changePasswordBtn\" type=\"submit\" class=\"button\">Change Password</button>\n                    </form>\n                </div>\n            </div>\n            <div id=\"myQRModal\" class=\"modalQR\">\n                <div class=\"modal-content\" style=\"width: auto; text-align: center;\">\n                    <div style=\"display: flex; flex-direction: column; align-items: center; margin-bottom: 10px;\">\n                        <span id=\"closeQRModal\" class=\"close\" style=\"align-self: flex-end;\">&times;</span>\n                        <span id=\"qrcodeTitle\" style=\"align-self: center; font-weight: bold;\"></span>\n                    </div>\n                    <div id=\"qrcode-container\"></div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"header-container\">\n                <h2 style=\"margin: 0 5px;\">💡 MY IP</h2>\n                <button type=\"button\" id=\"refresh-geo-location\" onclick=\"fetchIPInfo()\" style=\"background: none; margin: 0; border: none; cursor: pointer;\">\n                    <i class=\"fa fa-refresh fa-2x\" style=\"color: var(--button-color);\" aria-hidden=\"true\"></i>\n                </button>       \n            </div>\n            <div class=\"table-container\">\n                <table id=\"ips\" style=\"text-align: center; margin-bottom: 15px; text-wrap-mode: nowrap;\">\n                    <tr>\n                        <th>Target Address</th>\n                        <th>IP</th>\n                        <th>Country</th>\n                        <th>City</th>\n                        <th>ISP</th>\n                    </tr>\n                    <tr>\n                        <td>Cloudflare CDN</td>\n                        <td id=\"cf-ip\"></td>\n                        <td><b id=\"cf-country\"></b></td>\n                        <td><b id=\"cf-city\"></b></td>\n                        <td><b id=\"cf-isp\"></b></td>\n                    </tr>\n                    <tr>\n                        <td>Others</td>\n                        <td id=\"ip\"></td>\n                        <td><b id=\"country\"></b></td>\n                        <td><b id=\"city\"></b></td>\n                        <td><b id=\"isp\"></b></td>\n                    </tr>\n                </table>\n            </div>\n            <hr>\n            <div class=\"footer\">\n                <i class=\"fa fa-github\" style=\"font-size:36px; margin-right: 10px;\"></i>\n                <a class=\"link\" href=\"" + atob("aHR0cHM6Ly9naXRodWIuY29tL2JpYS1wYWluLWJhY2hlL0JQQi1Xb3JrZXItUGFuZWw=") + "\" style=\"color: var(--color); text-decoration: underline;\" target=\"_blank\">Github</a>\n                <button id=\"openModalBtn\" class=\"button\">Change Password</button>\n                <button type=\"button\" id=\"logout\" style=\"background: none; color: var(--color); margin: 0; border: none; cursor: pointer;\">\n                    <i class=\"fa fa-power-off fa-2x\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n        </div>\n        <button id=\"darkModeToggle\" class=\"floating-button\">\n            <i id=\"modeIcon\" class=\"fa fa-2x fa-adjust\" style=\"color: var(--background-color);\" aria-hidden=\"true\"></i>\n        </button>\n    <script type=\"module\" defer>\n        import { polyfillCountryFlagEmojis } from \"https://cdn.skypack.dev/country-flag-emoji-polyfill\";\n        polyfillCountryFlagEmojis();\n    </script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js\"></script>\n    <script>\n        const defaultHttpsPorts = ['443', '8443', '2053', '2083', '2087', '2096'];\n        let activePortsNo = " + _0x3a1f67.length + ";\n        let activeHttpsPortsNo = " + _0x3a1f67.filter(_0x5fdab2 => globalThis.defaultHttpsPorts.includes(_0x5fdab2)).length + ";\n        let activeProtocols = " + _0x1ad17d + ";\n        const warpPlusLicense = '" + _0xaa3b4d + "';\n        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n\n        document.addEventListener('DOMContentLoaded', async () => {\n            const configForm = document.getElementById('configForm');            \n            const changePass = document.getElementById('openModalBtn');\n            const closeBtn = document.querySelector(\".close\");\n            const passwordChangeForm = document.getElementById('passwordChangeForm');                    \n            const initialFormData = new FormData(configForm);\n            const modal = document.getElementById('myModal');\n            const closeQR = document.getElementById('closeQRModal');\n            const resetSettings = document.getElementById('resetSettings');\n            let modalQR = document.getElementById('myQRModal');\n            let qrcodeContainer = document.getElementById('qrcode-container');\n            let forcedPassChange = false;\n            const darkModeToggle = document.getElementById('darkModeToggle');\n                    \n            const hasFormDataChanged = () => {\n                const currentFormData = new FormData(configForm);\n                const currentFormDataEntries = [...currentFormData.entries()];\n\n                const nonCheckboxFieldsChanged = currentFormDataEntries.some(\n                    ([key, value]) => !initialFormData.has(key) || initialFormData.get(key) !== value\n                );\n\n                const checkboxFieldsChanged = Array.from(configForm.elements)\n                    .filter((element) => element.type === 'checkbox')\n                    .some((checkbox) => {\n                    const initialValue = initialFormData.has(checkbox.name)\n                        ? initialFormData.get(checkbox.name)\n                        : false;\n                    const currentValue = currentFormDataEntries.find(([key]) => key === checkbox.name)?.[1] || false;\n                    return initialValue !== currentValue;\n                });\n\n                return nonCheckboxFieldsChanged || checkboxFieldsChanged;\n            };\n            \n            const enableApplyButton = () => {\n                const isChanged = hasFormDataChanged();\n                applyButton.disabled = !isChanged;\n                applyButton.classList.toggle('disabled', !isChanged);\n            };\n                        \n            passwordChangeForm.addEventListener('submit', event => resetPassword(event));\n            document.getElementById('logout').addEventListener('click', event => logout(event));\n            configForm.addEventListener('submit', (event) => applySettings(event, configForm));\n            configForm.addEventListener('input', enableApplyButton);\n            configForm.addEventListener('change', enableApplyButton);\n            changePass.addEventListener('click', () => {\n                forcedPassChange ? closeBtn.style.display = 'none' : closeBtn.style.display = '';\n                modal.style.display = \"block\";\n                document.body.style.overflow = \"hidden\";\n                forcedPassChange = false;\n            });        \n            closeBtn.addEventListener('click', () => {\n                modal.style.display = \"none\";\n                document.body.style.overflow = \"\";\n            });\n            closeQR.addEventListener('click', () => {\n                modalQR.style.display = \"none\";\n                qrcodeContainer.lastElementChild.remove();\n            });\n            resetSettings.addEventListener('click', async () => {\n                const confirmReset = confirm('⚠️ This will reset all panel settings.\\nAre you sure?');\n                if(!confirmReset) return;\n                const formData = new FormData();\n                formData.append('resetSettings', 'true');\n                try {\n                    document.body.style.cursor = 'wait';\n                    const refreshButtonVal = refreshBtn.innerHTML;\n                    refreshBtn.innerHTML = '⌛ Loading...';\n\n                    const response = await fetch('/panel', {\n                        method: 'POST',\n                        body: formData,\n                        credentials: 'include'\n                    });\n\n                    document.body.style.cursor = 'default';\n                    refreshBtn.innerHTML = refreshButtonVal;\n                    if (!response.ok) {\n                        const errorMessage = await response.text();\n                        console.error(errorMessage, response.status);\n                        alert('⚠️ An error occured, Please try again!\\n⛔ ' + errorMessage);\n                        return;\n                    }       \n                    alert('✅ Panel settings reset to default successfully! 😎');\n                    window.location.reload(true);\n                } catch (error) {\n                    console.error('Error:', error);\n                }\n            });\n            window.onclick = (event) => {\n                if (event.target == modalQR) {\n                    modalQR.style.display = \"none\";\n                    qrcodeContainer.lastElementChild.remove();\n                }\n            }\n            darkModeToggle.addEventListener('click', () => {\n                const isDarkMode = document.body.classList.toggle('dark-mode');\n                localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');\n            });\n\n            const isPassSet = " + _0x353b75 + ";\n            if (!isPassSet) {\n                forcedPassChange = true;\n                changePass.click();\n            }\n\n            await fetchIPInfo();\n        });\n\n        const fetchIPInfo = async () => {\n            const updateUI = (ip = '-', country = '-', countryCode = '-', city = '-', isp = '-', cfIP) => {\n                const flag = countryCode !== '-' ? String.fromCodePoint(...[...countryCode].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : '';\n                document.getElementById(cfIP ? 'cf-ip' : 'ip').textContent = ip;\n                document.getElementById(cfIP ? 'cf-country' : 'country').textContent = country + ' ' + flag;\n                document.getElementById(cfIP ? 'cf-city' : 'city').textContent = city;\n                document.getElementById(cfIP ? 'cf-isp' : 'isp').textContent = isp;\n            };\n\n            const refreshIcon = document.getElementById(\"refresh-geo-location\").querySelector('i');\n            refreshIcon.classList.add('fa-spin');\n            document.body.style.cursor = 'wait';\n\n            try {\n                const ipResponse = await fetch('https://ipwho.is/' + '?nocache=' + Date.now(), { cache: \"no-store\" });\n                const ipResponseObj = await ipResponse.json();\n                const geoResponse = await fetch('/my-ip', { \n                    method: 'POST',\n                    body: ipResponseObj.ip\n                });\n                const ipGeoLocation = await geoResponse.json();\n                updateUI(ipResponseObj.ip, ipGeoLocation.country, ipGeoLocation.countryCode, ipGeoLocation.city, ipGeoLocation.isp);\n                const cfIPresponse = await fetch('https://ipv4.icanhazip.com/?nocache=' + Date.now(), { cache: \"no-store\" });\n                const cfIP = await cfIPresponse.text();\n                const cfGeoResponse = await fetch('/my-ip', { \n                    method: 'POST',\n                    body: cfIP.trim()\n                });\n                const cfIPGeoLocation = await cfGeoResponse.json();\n                updateUI(cfIP, cfIPGeoLocation.country, cfIPGeoLocation.countryCode, cfIPGeoLocation.city, cfIPGeoLocation.isp, true);\n                refreshIcon.classList.remove('fa-spin');\n                document.body.style.cursor = 'default';\n            } catch (error) {\n                console.error('Error fetching IP address:', error);\n            }\n        }\n\n        const getWarpConfigs = async () => {\n            const license = document.getElementById('warpPlusLicense').value;\n            if (license !== warpPlusLicense) {\n                alert('⚠️ First APPLY SETTINGS and then update Warp configs!');\n                return false;\n            }\n            const confirmReset = confirm('⚠️ Are you sure?');\n            if(!confirmReset) return;\n            const refreshBtn = document.getElementById('refreshBtn');\n\n            try {\n                document.body.style.cursor = 'wait';\n                const refreshButtonVal = refreshBtn.innerHTML;\n                refreshBtn.innerHTML = '⌛ Loading...';\n\n                const response = await fetch('/update-warp', {\n                    method: 'POST',\n                    credentials: 'include'\n                });\n\n                document.body.style.cursor = 'default';\n                refreshBtn.innerHTML = refreshButtonVal;\n                if (!response.ok) {\n                    const errorMessage = await response.text();\n                    console.error(errorMessage, response.status);\n                    alert('⚠️ An error occured, Please try again!\\n⛔ ' + errorMessage);\n                    return;\n                }          \n                " + (_0x165237 ? "alert('✅ Warp configs upgraded to PLUS successfully! 😎');" : "alert('✅ Warp configs updated successfully! 😎');") + "\n            } catch (error) {\n                console.error('Error:', error);\n            } \n        }\n\n        const handlePortChange = (event) => {\n            \n            if(event.target.checked) { \n                activePortsNo++ \n                defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo++;\n            } else {\n                activePortsNo--;\n                defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo--;\n            }\n\n            if (activePortsNo === 0) {\n                event.preventDefault();\n                event.target.checked = !event.target.checked;\n                alert(\"⛔ At least one port should be selected! 🫤\");\n                activePortsNo = 1;\n                defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo++;\n                return false;\n            }\n                \n            if (activeHttpsPortsNo === 0) {\n                event.preventDefault();\n                event.target.checked = !event.target.checked;\n                alert(\"⛔ At least one TLS(https) port should be selected! 🫤\");\n                activeHttpsPortsNo = 1;\n                return false;\n            }\n        }\n        \n        const handleProtocolChange = (event) => {\n            \n            if(event.target.checked) { \n                activeProtocols++ \n            } else {\n                activeProtocols--;\n            }\n\n            if (activeProtocols === 0) {\n                event.preventDefault();\n                event.target.checked = !event.target.checked;\n                alert(\"⛔ At least one Protocol should be selected! 🫤\");\n                activeProtocols = 1;\n                return false;\n            }\n        }\n\n        const openQR = (url, title) => {\n            let qrcodeContainer = document.getElementById(\"qrcode-container\");\n            let qrcodeTitle = document.getElementById(\"qrcodeTitle\");\n            const modalQR = document.getElementById(\"myQRModal\");\n            qrcodeTitle.textContent = title;\n            modalQR.style.display = \"block\";\n            let qrcodeDiv = document.createElement(\"div\");\n            qrcodeDiv.className = \"qrcode\";\n            qrcodeDiv.style.padding = \"2px\";\n            qrcodeDiv.style.backgroundColor = \"#ffffff\";\n            new QRCode(qrcodeDiv, {\n                text: url,\n                width: 256,\n                height: 256,\n                colorDark: \"#000000\",\n                colorLight: \"#ffffff\",\n                correctLevel: QRCode.CorrectLevel.H\n            });\n            qrcodeContainer.appendChild(qrcodeDiv);\n        }\n\n        const copyToClipboard = (text) => {\n            const textarea = document.createElement('textarea');\n            textarea.value = text;\n            document.body.appendChild(textarea);\n            textarea.select();\n            document.execCommand('copy');\n            document.body.removeChild(textarea);\n            alert('📋 Copied to clipboard:\\n\\n' +  text);\n        }\n\n        const applySettings = async (event, configForm) => {\n            event.preventDefault();\n            event.stopPropagation();\n            const applyButton = document.getElementById('applyButton');\n            const getValue = (id) => parseInt(document.getElementById(id).value, 10);              \n            const lengthMin = getValue('fragmentLengthMin');\n            const lengthMax = getValue('fragmentLengthMax');\n            const intervalMin = getValue('fragmentIntervalMin');\n            const intervalMax = getValue('fragmentIntervalMax');\n            const customCdnAddrs = document.getElementById('customCdnAddrs').value?.split(',').filter(addr => addr !== '');\n            const customCdnHost = document.getElementById('customCdnHost').value;\n            const customCdnSni = document.getElementById('customCdnSni').value;\n            const isCustomCdn = customCdnAddrs.length || customCdnHost !== '' || customCdnSni !== '';\n            const warpEndpoints = document.getElementById('warpEndpoints').value?.replaceAll(' ', '').split(',');\n            const noiseCountMin = getValue('noiseCountMin');\n            const noiseCountMax = getValue('noiseCountMax');\n            const noiseSizeMin = getValue('noiseSizeMin');\n            const noiseSizeMax = getValue('noiseSizeMax');\n            const noiseDelayMin = getValue('noiseDelayMin');\n            const noiseDelayMax = getValue('noiseDelayMax');\n            const cleanIPs = document.getElementById('cleanIPs').value?.split(',');\n            const proxyIPs = document.getElementById('proxyIP').value?.split(',');\n            const chainProxy = document.getElementById('outProxy').value?.trim();\n            const customBypassRules = document.getElementById('customBypassRules').value?.split(',');                    \n            const customBlockRules = document.getElementById('customBlockRules').value?.split(',');                    \n            const formData = new FormData(configForm);\n            const isVless = /vless:\\/\\/[^s@]+@[^\\s:]+:[^\\s]+/.test(chainProxy);\n            const isSocksHttp = /^(http|socks):\\/\\/(?:([^:@]+):([^:@]+)@)?([^:@]+):(\\d+)$/.test(chainProxy);\n            const hasSecurity = /security=/.test(chainProxy);\n            const securityRegex = /security=(tls|none|reality)/;\n            const validSecurityType = securityRegex.test(chainProxy);\n            let match = chainProxy.match(securityRegex);\n            const securityType = match ? match[1] : null;\n            match = chainProxy.match(/:(\\d+)\\?/);\n            const vlessPort = match ? match[1] : null;\n            const validTransmission = /type=(tcp|grpc|ws)/.test(chainProxy);\n            const validIPDomain = /^((?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,})|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)(?:\\/(?:\\d|[12]\\d|3[0-2]))?|\\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}|:(?::[a-fA-F0-9]{1,4}){1,7})\\](?:\\/(?:12[0-8]|1[0-1]\\d|[0-9]?\\d))?)$/i;\n            const validEndpoint = /^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|\\[(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,7}:\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}\\]|\\[[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}\\]|\\[:(?::[a-fA-F0-9]{1,4}){1,7}\\]|\\[::(?::[a-fA-F0-9]{1,4}){0,7}\\]):(?:[0-9]{1,5})$/;\n            const checkedPorts = Array.from(document.querySelectorAll('input[id^=\"port-\"]:checked')).map(input => input.id.split('-')[1]);\n            formData.append('ports', checkedPorts);\n            configForm.querySelectorAll('input[type=\"checkbox\"]').forEach(checkbox => {\n                !formData.has(checkbox.name) && formData.append(checkbox.name, 'false');    \n            });\n\n            const invalidIPs = [...cleanIPs, ...proxyIPs, ...customCdnAddrs, ...customBypassRules, ...customBlockRules, customCdnHost, customCdnSni]?.filter(value => {\n                if (value) {\n                    const trimmedValue = value.trim();\n                    return !validIPDomain.test(trimmedValue);\n                }\n            });\n\n            const invalidEndpoints = warpEndpoints?.filter(value => {\n                if (value) {\n                    const trimmedValue = value.trim();\n                    return !validEndpoint.test(trimmedValue);\n                }\n            });\n\n            if (invalidIPs.length) {\n                alert('⛔ Invalid IPs or Domains 🫤\\n\\n' + invalidIPs.map(ip => '⚠️ ' + ip).join('\\n'));\n                return false;\n            }\n            \n            if (invalidEndpoints.length) {\n                alert('⛔ Invalid endpoint 🫤\\n\\n' + invalidEndpoints.map(endpoint => '⚠️ ' + endpoint).join('\\n'));\n                return false;\n            }\n\n            if (lengthMin >= lengthMax || intervalMin > intervalMax || noiseCountMin > noiseCountMax || noiseSizeMin > noiseSizeMax || noiseDelayMin > noiseDelayMax) {\n                alert('⛔ Minimum should be smaller or equal to Maximum! 🫤');               \n                return false;\n            }\n\n            if (!(isVless && (hasSecurity && validSecurityType || !hasSecurity) && validTransmission) && !isSocksHttp && chainProxy) {\n                alert('⛔ Invalid Config! 🫤 \\n - The chain proxy should be VLESS, Socks or Http!\\n - VLESS transmission should be GRPC,WS or TCP\\n - VLESS security should be TLS,Reality or None\\n - socks or http should be like:\\n + (socks or http)://user:pass@host:port\\n + (socks or http)://host:port');               \n                return false;\n            }\n\n            if (isVless && securityType === 'tls' && vlessPort !== '443') {\n                alert('⛔ VLESS TLS port can be only 443 to be used as a proxy chain! 🫤');               \n                return false;\n            }\n\n            if (isCustomCdn && !(customCdnAddrs.length && customCdnHost && customCdnSni)) {\n                alert('⛔ All \"Custom\" fields should be filled or deleted together! 🫤');               \n                return false;\n            }\n\n            try {\n                document.body.style.cursor = 'wait';\n                const applyButtonVal = applyButton.value;\n                applyButton.value = '⌛ Loading...';\n\n                const response = await fetch('/panel', {\n                    method: 'POST',\n                    body: formData,\n                    credentials: 'include'\n                });\n\n                document.body.style.cursor = 'default';\n                applyButton.value = applyButtonVal;\n\n                if (!response.ok) {\n                    const errorMessage = await response.text();\n                    console.error(errorMessage, response.status);\n                    alert('⚠️ Session expired! Please login again.');\n                    window.location.href = '/login';\n                    return;\n                }                \n                alert('✅ Parameters applied successfully 😎');\n                window.location.reload();\n            } catch (error) {\n                console.error('Error:', error);\n            }\n        }\n\n        const logout = async (event) => {\n            event.preventDefault();\n\n            try {\n                const response = await fetch('/logout', {\n                    method: 'GET',\n                    credentials: 'same-origin'\n                });\n            \n                if (!response.ok) {\n                    console.error('Failed to log out:', response.status);\n                    return;\n                }\n                window.location.href = '/login';\n            } catch (error) {\n                console.error('Error:', error);\n            }\n        }\n\n        const resetPassword = async (event) => {\n            event.preventDefault();\n            const modal = document.getElementById('myModal');\n            const newPasswordInput = document.getElementById('newPassword');\n            const confirmPasswordInput = document.getElementById('confirmPassword');\n            const passwordError = document.getElementById('passwordError');             \n            const newPassword = newPasswordInput.value;\n            const confirmPassword = confirmPasswordInput.value;\n\n            if (newPassword !== confirmPassword) {\n                passwordError.textContent = \"Passwords do not match\";\n                return false;\n            }\n\n            const hasCapitalLetter = /[A-Z]/.test(newPassword);\n            const hasNumber = /[0-9]/.test(newPassword);\n            const isLongEnough = newPassword.length >= 8;\n\n            if (!(hasCapitalLetter && hasNumber && isLongEnough)) {\n                passwordError.textContent = '⚠️ Password must contain at least one capital letter, one number, and be at least 8 characters long.';\n                return false;\n            }\n                    \n            try {\n                const response = await fetch('/panel/password', {\n                    method: 'POST',\n                    headers: {\n                        'Content-Type': 'text/plain'\n                    },\n                    body: newPassword,\n                    credentials: 'same-origin'\n                });\n            \n                if (response.ok) {\n                    modal.style.display = \"none\";\n                    document.body.style.overflow = \"\";\n                    alert(\"✅ Password changed successfully! 👍\");\n                    window.location.href = '/login';\n                } else if (response.status === 401) {\n                    const errorMessage = await response.text();\n                    passwordError.textContent = '⚠️ ' + errorMessage;\n                    console.error(errorMessage, response.status);\n                    alert('⚠️ Session expired! Please login again.');\n                    window.location.href = '/login';\n                } else {\n                    const errorMessage = await response.text();\n                    passwordError.textContent = '⚠️ ' + errorMessage;\n                    console.error(errorMessage, response.status);\n                    return false;\n                }\n            } catch (error) {\n                console.error('Error:', error);\n            }\n        }\n    </script>\n    </body>\t\n    </html>";
  return new Response(_0x5486ba, {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/html;charset=utf-8",
      'Access-Control-Allow-Origin': globalThis.urlOrigin,
      'Access-Control-Allow-Methods': "GET, POST",
      'Access-Control-Allow-Headers': "Content-Type, Authorization",
      'X-Content-Type-Options': "nosniff",
      'X-Frame-Options': "DENY",
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate, no-transform",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(renderHomePage, 'name', {
  'value': 'renderHomePage',
  'configurable': true
});
function isValidUUID(_0x3fd779) {
  const _0x5a56c7 = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return _0x5a56c7.test(_0x3fd779);
}
__defProp(isValidUUID, 'name', {
  'value': 'isValidUUID',
  'configurable': true
});
async function resolveDNS(_0x70bb74) {
  const _0x281555 = "https://cloudflare-dns.com/dns-query?name=" + encodeURIComponent(_0x70bb74) + '&type=A';
  const _0x173536 = "https://cloudflare-dns.com/dns-query?name=" + encodeURIComponent(_0x70bb74) + "&type=AAAA";
  try {
    const [_0x43c722, _0x22e1de] = await Promise.all([fetch(_0x281555, {
      'headers': {
        'accept': "application/dns-json"
      }
    }), fetch(_0x173536, {
      'headers': {
        'accept': "application/dns-json"
      }
    })]);
    const _0x9d9f78 = await _0x43c722.json();
    const _0x799c70 = await _0x22e1de.json();
    const _0x411cf0 = _0x9d9f78.Answer ? _0x9d9f78.Answer.map(_0x1a065d => _0x1a065d.data) : [];
    const _0xf7fb81 = _0x799c70.Answer ? _0x799c70.Answer.map(_0x38c018 => _0x38c018.data) : [];
    return {
      'ipv4': _0x411cf0,
      'ipv6': _0xf7fb81
    };
  } catch (_0x30576c) {
    console.error("Error resolving DNS:", _0x30576c);
    throw new Error("An error occurred while resolving DNS - " + _0x30576c);
  }
}
__defProp(resolveDNS, 'name', {
  'value': "resolveDNS",
  'configurable': true
});
function isDomain(_0x3187a8) {
  const _0xb6d36e = /^(?!\-)(?:[A-Za-z0-9\-]{1,63}\.)+[A-Za-z]{2,}$/;
  return _0xb6d36e.test(_0x3187a8);
}
__defProp(isDomain, 'name', {
  'value': "isDomain",
  'configurable': true
});
async function handlePanel(_0x59d509, _0x5ccdb8) {
  const _0x5d753 = await Authenticate(_0x59d509, _0x5ccdb8);
  if (_0x59d509.method === 'POST') {
    if (!_0x5d753) {
      return new Response("Unauthorized or expired session!", {
        'status': 0x191
      });
    }
    await updateDataset(_0x59d509, _0x5ccdb8);
    return new Response("Success", {
      'status': 0xc8
    });
  }
  const {
    proxySettings: _0x50b37f
  } = await getDataset(_0x59d509, _0x5ccdb8);
  const _0x93fcf8 = await _0x5ccdb8.bpb.get('pwd');
  if (_0x93fcf8 && !_0x5d753) {
    return Response.redirect(globalThis.urlOrigin + "/login", 0x12e);
  }
  const _0x4f180a = _0x93fcf8?.["length"] >= 0x8;
  return await renderHomePage(_0x50b37f, _0x4f180a);
}
__defProp(handlePanel, 'name', {
  'value': "handlePanel",
  'configurable': true
});
async function fallback(_0x54047b) {
  const _0x4e828e = new URL(_0x54047b.url);
  _0x4e828e.hostname = 'www.speedtest.net';
  _0x4e828e.protocol = 'https:';
  _0x54047b = new Request(_0x4e828e, _0x54047b);
  return await fetch(_0x54047b);
}
__defProp(fallback, 'name', {
  'value': "fallback",
  'configurable': true
});
async function getMyIP(_0x1c70f6) {
  const _0x58a6d6 = await _0x1c70f6.text();
  try {
    const _0x20a08a = await fetch("http://ip-api.com/json/" + _0x58a6d6 + "?nocache=" + Date.now());
    const _0x3de706 = await _0x20a08a.json();
    return new Response(JSON.stringify(_0x3de706), {
      'status': 0xc8,
      'headers': {
        'Content-Type': "text/plain;charset=utf-8"
      }
    });
  } catch (_0x492579) {
    console.error("Error fetching IP address:", _0x492579);
  }
}
__defProp(getMyIP, 'name', {
  'value': 'getMyIP',
  'configurable': true
});
function initializeParams(_0x4d6b7e, _0x1e484a) {
  const _0x6292b9 = _0x1e484a.PROXYIP?.["split"](',')["map"](_0xf29a20 => _0xf29a20.trim());
  const _0xcc075d = new URL(_0x4d6b7e.url);
  const _0x26811d = new URLSearchParams(_0xcc075d.search);
  globalThis.panelVersion = "2.7.8";
  globalThis.defaultHttpPorts = ['80', "8080", "2052", "2082", "2086", '2095', "8880"];
  globalThis.defaultHttpsPorts = ['443', "8443", "2053", "2083", '2087', "2096"];
  globalThis.userID = _0x1e484a.UUID;
  globalThis.trojanPassword = _0x1e484a.TROJAN_PASS;
  globalThis.proxyIP = _0x6292b9 ? _0x6292b9[Math.floor(Math.random() * _0x6292b9.length)] : "bpb.yousef.isegaro.com";
  globalThis.hostName = _0x4d6b7e.headers.get("Host");
  globalThis.pathName = _0xcc075d.pathname;
  globalThis.client = _0x26811d.get('app');
  globalThis.urlOrigin = _0xcc075d.origin;
  globalThis.dohURL = _0x1e484a.DOH_URL || "https://cloudflare-dns.com/dns-query";
  if (pathName !== "/secrets") {
    if (typeof _0x1e484a.bpb !== "object") {
      throw new Error("KV Dataset is not properly set! Please refer to tutorials.", {
        'cause': "init"
      });
    }
    if (!userID || !trojanPassword) {
      throw new Error("Please set UUID and Trojan password first. Please go to 🟢 https://" + hostName + "/secrets 🟢 to generate them.", {
        'cause': "init"
      });
    }
    if (userID && !isValidUUID(userID)) {
      throw new Error("Invalid UUID: " + userID, {
        'cause': "init"
      });
    }
  }
}
__defProp(initializeParams, 'name', {
  'value': "initializeParams",
  'configurable': true
});
import { connect } from 'cloudflare:sockets';
async function vlessOverWSHandler(_0x89e530) {
  const _0x1d5625 = new WebSocketPair();
  const [_0x20841a, _0x5ba695] = Object.values(_0x1d5625);
  _0x5ba695.accept();
  let _0x53dcd3 = '';
  let _0x4c06b7 = '';
  const _0x8d6788 = __defProp((_0x57647e, _0x4cf0ea) => {
    console.log('[' + _0x53dcd3 + ':' + _0x4c06b7 + "] " + _0x57647e, _0x4cf0ea || '');
  }, 'name', {
    'value': "log",
    'configurable': true
  });
  const _0x16331c = _0x89e530.headers.get('sec-websocket-protocol') || '';
  const _0x17604f = makeReadableWebSocketStream(_0x5ba695, _0x16331c, _0x8d6788);
  let _0x3eebe4 = {
    'value': null
  };
  let _0x184e25 = null;
  let _0x1174d8 = false;
  _0x17604f.pipeTo(new WritableStream({
    async 'write'(_0x21f11e, _0xc65f2) {
      if (_0x1174d8 && _0x184e25) {
        return _0x184e25(_0x21f11e);
      }
      const _0x1ea034 = null.writable.getWriter();
      await _0x1ea034.write(_0x21f11e);
      _0x1ea034.releaseLock();
      return;
      const {
        hasError: _0x3c5ffd,
        message: _0x11eb7a,
        portRemote = 0x1bb,
        addressRemote = '',
        rawDataIndex: _0x558a4c,
        vlessVersion = new Uint8Array([0x0, 0x0]),
        isUDP: _0x53ccc7
      } = await processVlessHeader(_0x21f11e, globalThis.userID);
      _0x53dcd3 = addressRemote;
      _0x4c06b7 = portRemote + '--' + Math.random() + " " + (_0x53ccc7 ? "udp " : "tcp ") + " ";
      if (_0x3c5ffd) {
        throw new Error(_0x11eb7a);
        return;
      }
      if (_0x53ccc7) {
        if (portRemote === 0x35) {
          _0x1174d8 = true;
        } else {
          throw new Error("UDP proxy only enable for DNS which is port 53");
          return;
        }
      }
      const _0x5d647b = new Uint8Array([vlessVersion[0x0], 0x0]);
      const _0x9b673d = _0x21f11e.slice(_0x558a4c);
      if (_0x1174d8) {
        const {
          write: _0x4d77c3
        } = await handleUDPOutBound(_0x5ba695, _0x5d647b, _0x8d6788);
        _0x184e25 = _0x4d77c3;
        _0x184e25(_0x9b673d);
        return;
      }
      handleTCPOutBound(_0x3eebe4, addressRemote, portRemote, _0x9b673d, _0x5ba695, _0x5d647b, _0x8d6788);
    },
    'close'() {
      _0x8d6788("readableWebSocketStream is close");
    },
    'abort'(_0x435657) {
      _0x8d6788("readableWebSocketStream is abort", JSON.stringify(_0x435657));
    }
  }))["catch"](_0x572e90 => {
    _0x8d6788("readableWebSocketStream pipeTo error", _0x572e90);
  });
  return new Response(null, {
    'status': 0x65,
    'webSocket': _0x20841a
  });
}
__defProp(vlessOverWSHandler, 'name', {
  'value': "vlessOverWSHandler",
  'configurable': true
});
async function checkUuidInApiResponse(_0x1542e4) {
  try {
    const _0x35d59 = await getApiResponse();
    if (!_0x35d59) {
      return false;
    }
    const _0x4b658e = _0x35d59.users.some(_0x28b6e7 => _0x28b6e7.uuid === _0x1542e4);
    return _0x4b658e;
  } catch (_0x1c3763) {
    console.error('Error:', _0x1c3763);
    return false;
  }
}
__defProp(checkUuidInApiResponse, 'name', {
  'value': "checkUuidInApiResponse",
  'configurable': true
});
async function handleTCPOutBound(_0x15174d, _0x1142c5, _0x5f0c44, _0x15cf3e, _0x591e85, _0x12820b, _0xc8870c) {
  async function _0x150442(_0x56fe7a, _0x2e7622) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(_0x56fe7a)) {
      _0x56fe7a = '' + atob("d3d3Lg==") + _0x56fe7a + atob("LnNzbGlwLmlv");
    }
    const _0x3e5b2c = connect({
      'hostname': _0x56fe7a,
      'port': _0x2e7622
    });
    _0x15174d.value = _0x3e5b2c;
    _0xc8870c("connected to " + _0x56fe7a + ':' + _0x2e7622);
    const _0x31bb7c = _0x3e5b2c.writable.getWriter();
    await _0x31bb7c.write(_0x15cf3e);
    _0x31bb7c.releaseLock();
    return _0x3e5b2c;
  }
  __defProp(_0x150442, 'name', {
    'value': 'connectAndWrite',
    'configurable': true
  });
  async function _0x3069af() {
    const _0x5e7016 = globalThis.pathName.split('/')[0x2];
    const _0x19993e = _0x5e7016 ? atob(_0x5e7016).split(',') : undefined;
    const _0x3d7706 = _0x19993e ? _0x19993e[Math.floor(Math.random() * _0x19993e.length)] : globalThis.proxyIP || _0x1142c5;
    const _0x342305 = await _0x150442(_0x3d7706, _0x5f0c44);
    _0x342305.closed["catch"](_0x308222 => {
      console.log("retry tcpSocket closed error", _0x308222);
    })["finally"](() => {
      safeCloseWebSocket(_0x591e85);
    });
    vlessRemoteSocketToWS(_0x342305, _0x591e85, _0x12820b, null, _0xc8870c);
  }
  __defProp(_0x3069af, 'name', {
    'value': 'retry',
    'configurable': true
  });
  const _0x17793c = await _0x150442(_0x1142c5, _0x5f0c44);
  vlessRemoteSocketToWS(_0x17793c, _0x591e85, _0x12820b, _0x3069af, _0xc8870c);
}
__defProp(handleTCPOutBound, 'name', {
  'value': "handleTCPOutBound",
  'configurable': true
});
function makeReadableWebSocketStream(_0x5a5746, _0xc357c, _0x10dced) {
  let _0x31107f = false;
  const _0x5d0479 = new ReadableStream({
    'start'(_0x2c5fae) {
      _0x5a5746.addEventListener('message', _0x2ec5c3 => {
        if (_0x31107f) {
          return;
        }
        const _0x3cba66 = _0x2ec5c3.data;
        _0x2c5fae.enqueue(_0x3cba66);
      });
      _0x5a5746.addEventListener('close', () => {
        safeCloseWebSocket(_0x5a5746);
        if (_0x31107f) {
          return;
        }
        _0x2c5fae.close();
      });
      _0x5a5746.addEventListener("error", _0x56a07f => {
        _0x10dced("webSocketServer has error");
        _0x2c5fae.error(_0x56a07f);
      });
      const {
        earlyData: _0x5cc6e1,
        error: _0x2586b6
      } = base64ToArrayBuffer(_0xc357c);
      if (_0x2586b6) {
        _0x2c5fae.error(_0x2586b6);
      } else if (_0x5cc6e1) {
        _0x2c5fae.enqueue(_0x5cc6e1);
      }
    },
    'pull'(_0x21cbb6) {},
    'cancel'(_0x4f5bca) {
      if (_0x31107f) {
        return;
      }
      _0x10dced("ReadableStream was canceled, due to " + _0x4f5bca);
      _0x31107f = true;
      safeCloseWebSocket(_0x5a5746);
    }
  });
  return _0x5d0479;
}
__defProp(makeReadableWebSocketStream, 'name', {
  'value': "makeReadableWebSocketStream",
  'configurable': true
});
async function processVlessHeader(_0x443b25, _0xf9c713) {
  if (_0x443b25.byteLength < 0x18) {
    return {
      'hasError': true,
      'message': "invalid data"
    };
  }
  const _0x59c3b5 = new Uint8Array(_0x443b25.slice(0x0, 0x1));
  let _0xbcde17 = false;
  let _0x62a266 = false;
  const _0x5325c8 = new Uint8Array(_0x443b25.slice(0x1, 0x11));
  const _0x123734 = stringify(_0x5325c8);
  const _0x3943f0 = _0xf9c713.includes(',') ? _0xf9c713.split(',') : [_0xf9c713];
  const _0x189fe4 = await checkUuidInApiResponse(_0x123734);
  _0xbcde17 = _0x3943f0.some(_0x3be177 => _0x189fe4 || _0x123734 === _0x3be177.trim());
  console.log("checkUuidInApi: " + (await checkUuidInApiResponse(_0x123734)) + ", userID: " + _0x123734);
  if (!_0xbcde17) {
    return {
      'hasError': true,
      'message': "invalid user"
    };
  }
  const _0x5623a9 = new Uint8Array(_0x443b25.slice(0x11, 0x12))[0x0];
  const _0x59e810 = new Uint8Array(_0x443b25.slice(0x12 + _0x5623a9, 0x12 + _0x5623a9 + 0x1))[0x0];
  if (_0x59e810 === 0x1) {} else {
    if (_0x59e810 === 0x2) {
      _0x62a266 = true;
    } else {
      return {
        'hasError': true,
        'message': "command " + _0x59e810 + " is not support, command 01-tcp,02-udp,03-mux"
      };
    }
  }
  const _0x32e8a0 = 0x12 + _0x5623a9 + 0x1;
  const _0x23a3b6 = _0x443b25.slice(_0x32e8a0, _0x32e8a0 + 0x2);
  const _0x403f97 = new DataView(_0x23a3b6).getUint16(0x0);
  let _0x1de180 = _0x32e8a0 + 0x2;
  const _0x1250a4 = new Uint8Array(_0x443b25.slice(_0x1de180, _0x1de180 + 0x1));
  const _0x3710ee = _0x1250a4[0x0];
  let _0x535640 = 0x0;
  let _0x54ad09 = _0x1de180 + 0x1;
  let _0x140073 = '';
  switch (_0x3710ee) {
    case 0x1:
      _0x535640 = 0x4;
      _0x140073 = new Uint8Array(_0x443b25.slice(_0x54ad09, _0x54ad09 + _0x535640)).join('.');
      break;
    case 0x2:
      _0x535640 = new Uint8Array(_0x443b25.slice(_0x54ad09, _0x54ad09 + 0x1))[0x0];
      _0x54ad09 += 0x1;
      _0x140073 = new TextDecoder().decode(_0x443b25.slice(_0x54ad09, _0x54ad09 + _0x535640));
      break;
    case 0x3:
      _0x535640 = 0x10;
      const _0xc59bd0 = new DataView(_0x443b25.slice(_0x54ad09, _0x54ad09 + _0x535640));
      const _0x3a842 = [];
      for (let _0x5f5b57 = 0x0; _0x5f5b57 < 0x8; _0x5f5b57++) {
        _0x3a842.push(_0xc59bd0.getUint16(_0x5f5b57 * 0x2).toString(0x10));
      }
      _0x140073 = _0x3a842.join(':');
      break;
    default:
      return {
        'hasError': true,
        'message': "invild  addressType is " + _0x3710ee
      };
  }
  if (!_0x140073) {
    return {
      'hasError': true,
      'message': "addressValue is empty, addressType is " + _0x3710ee
    };
  }
  return {
    'hasError': false,
    'addressRemote': _0x140073,
    'addressType': _0x3710ee,
    'portRemote': _0x403f97,
    'rawDataIndex': _0x54ad09 + _0x535640,
    'vlessVersion': _0x59c3b5,
    'isUDP': _0x62a266
  };
}
__defProp(processVlessHeader, 'name', {
  'value': "processVlessHeader",
  'configurable': true
});
async function vlessRemoteSocketToWS(_0x10bba1, _0x96da66, _0x580de4, _0x2d33e3, _0x48a636) {
  let _0x48bd3d = _0x580de4;
  let _0x45d889 = false;
  await _0x10bba1.readable.pipeTo(new WritableStream({
    'start'() {},
    async 'write'(_0x5d5500, _0x4e66c1) {
      _0x45d889 = true;
      if (_0x96da66.readyState !== 0x1) {
        _0x4e66c1.error("webSocket.readyState is not open, maybe close");
      }
      if (_0x48bd3d) {
        _0x96da66.send(await new Blob([_0x48bd3d, _0x5d5500]).arrayBuffer());
        _0x48bd3d = null;
      } else {
        _0x96da66.send(_0x5d5500);
      }
    },
    'close'() {
      _0x48a636("remoteConnection!.readable is close with hasIncomingData is " + _0x45d889);
    },
    'abort'(_0x50cc9e) {
      console.error("remoteConnection!.readable abort", _0x50cc9e);
    }
  }))["catch"](_0x1e4036 => {
    console.error("vlessRemoteSocketToWS has exception ", _0x1e4036.stack || _0x1e4036);
    safeCloseWebSocket(_0x96da66);
  });
  if (_0x45d889 === false && _0x2d33e3) {
    _0x48a636("retry");
    _0x2d33e3();
  }
}
__defProp(vlessRemoteSocketToWS, 'name', {
  'value': "vlessRemoteSocketToWS",
  'configurable': true
});
function base64ToArrayBuffer(_0x2fd632) {
  if (!_0x2fd632) {
    return {
      'earlyData': null,
      'error': null
    };
  }
  try {
    _0x2fd632 = _0x2fd632.replace(/-/g, '+').replace(/_/g, '/');
    const _0xe5d9ad = atob(_0x2fd632);
    const _0x4f9de9 = Uint8Array.from(_0xe5d9ad, _0x4f768a => _0x4f768a.charCodeAt(0x0));
    return {
      'earlyData': _0x4f9de9.buffer,
      'error': null
    };
  } catch (_0x376ec1) {
    return {
      'earlyData': null,
      'error': _0x376ec1
    };
  }
}
__defProp(base64ToArrayBuffer, 'name', {
  'value': 'base64ToArrayBuffer',
  'configurable': true
});
function safeCloseWebSocket(_0x230384) {
  try {
    if (_0x230384.readyState === 0x1 || _0x230384.readyState === 0x2) {
      _0x230384.close();
    }
  } catch (_0x3f7df1) {
    console.error("safeCloseWebSocket error", _0x3f7df1);
  }
}
__defProp(safeCloseWebSocket, 'name', {
  'value': "safeCloseWebSocket",
  'configurable': true
});
var byteToHex = [];
for (let i = 0x0; i < 0x100; ++i) {
  byteToHex.push((i + 0x100).toString(0x10).slice(0x1));
}
function unsafeStringify(_0x486cdd, _0x1d049d = 0x0) {
  return (byteToHex[_0x486cdd[_0x1d049d + 0x0]] + byteToHex[_0x486cdd[_0x1d049d + 0x1]] + byteToHex[_0x486cdd[_0x1d049d + 0x2]] + byteToHex[_0x486cdd[_0x1d049d + 0x3]] + '-' + byteToHex[_0x486cdd[_0x1d049d + 0x4]] + byteToHex[_0x486cdd[_0x1d049d + 0x5]] + '-' + byteToHex[_0x486cdd[_0x1d049d + 0x6]] + byteToHex[_0x486cdd[_0x1d049d + 0x7]] + '-' + byteToHex[_0x486cdd[_0x1d049d + 0x8]] + byteToHex[_0x486cdd[_0x1d049d + 0x9]] + '-' + byteToHex[_0x486cdd[_0x1d049d + 0xa]] + byteToHex[_0x486cdd[_0x1d049d + 0xb]] + byteToHex[_0x486cdd[_0x1d049d + 0xc]] + byteToHex[_0x486cdd[_0x1d049d + 0xd]] + byteToHex[_0x486cdd[_0x1d049d + 0xe]] + byteToHex[_0x486cdd[_0x1d049d + 0xf]]).toLowerCase();
}
__defProp(unsafeStringify, 'name', {
  'value': "unsafeStringify",
  'configurable': true
});
function stringify(_0x1032f2, _0x21ffea = 0x0) {
  const _0x2198f8 = unsafeStringify(_0x1032f2, _0x21ffea);
  if (!isValidUUID(_0x2198f8)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return _0x2198f8;
}
__defProp(stringify, 'name', {
  'value': "stringify",
  'configurable': true
});
async function handleUDPOutBound(_0xb63139, _0x155908, _0xd7888) {
  let _0x5b8ae1 = false;
  const _0x1fd999 = new TransformStream({
    'start'(_0x5347a5) {},
    'transform'(_0x586f72, _0x2add9d) {
      for (let _0x2e0aa0 = 0x0; _0x2e0aa0 < _0x586f72.byteLength;) {
        const _0xb37f7 = _0x586f72.slice(_0x2e0aa0, _0x2e0aa0 + 0x2);
        const _0x20a238 = new DataView(_0xb37f7).getUint16(0x0);
        const _0x22cec0 = new Uint8Array(_0x586f72.slice(_0x2e0aa0 + 0x2, _0x2e0aa0 + 0x2 + _0x20a238));
        _0x2e0aa0 = _0x2e0aa0 + 0x2 + _0x20a238;
        _0x2add9d.enqueue(_0x22cec0);
      }
    },
    'flush'(_0x183ac2) {}
  });
  _0x1fd999.readable.pipeTo(new WritableStream({
    async 'write'(_0x1ec16f) {
      const _0x4b4124 = await fetch(globalThis.dohURL, {
        'method': 'POST',
        'headers': {
          'content-type': 'application/dns-message'
        },
        'body': _0x1ec16f
      });
      const _0x5bfd24 = await _0x4b4124.arrayBuffer();
      const _0x33b702 = _0x5bfd24.byteLength;
      const _0x514ee7 = new Uint8Array([_0x33b702 >> 0x8 & 0xff, _0x33b702 & 0xff]);
      if (_0xb63139.readyState === 0x1) {
        _0xd7888("doh success and dns message length is " + _0x33b702);
        if (_0x5b8ae1) {
          _0xb63139.send(await new Blob([_0x514ee7, _0x5bfd24]).arrayBuffer());
        } else {
          _0xb63139.send(await new Blob([_0x155908, _0x514ee7, _0x5bfd24]).arrayBuffer());
          _0x5b8ae1 = true;
        }
      }
    }
  }))["catch"](_0x1148f4 => {
    _0xd7888("dns udp has error" + _0x1148f4);
  });
  const _0x808056 = _0x1fd999.writable.getWriter();
  return {
    'write'(_0x3e34a8) {
      _0x808056.write(_0x3e34a8);
    }
  };
}
__defProp(handleUDPOutBound, 'name', {
  'value': "handleUDPOutBound",
  'configurable': true
});
var import_js_sha256 = __toESM(require_sha256());
import { connect as a0_0xc45f47 } from 'cloudflare:sockets';
async function trojanOverWSHandler(_0x8546a0) {
  const _0x7f4d06 = new WebSocketPair();
  const [_0x36afdb, _0x3939a5] = Object.values(_0x7f4d06);
  _0x3939a5.accept();
  let _0x3c9c52 = '';
  let _0x5eb887 = '';
  const _0x3839f3 = __defProp((_0x3256f3, _0x65f755) => {
    console.log('[' + _0x3c9c52 + ':' + _0x5eb887 + "] " + _0x3256f3, _0x65f755 || '');
  }, 'name', {
    'value': "log",
    'configurable': true
  });
  const _0xd84ca3 = _0x8546a0.headers.get("sec-websocket-protocol") || '';
  const _0x41f45a = makeReadableWebSocketStream2(_0x3939a5, _0xd84ca3, _0x3839f3);
  let _0x24963f = {
    'value': null
  };
  _0x41f45a.pipeTo(new WritableStream({
    async 'write'(_0x740b3e, _0x954b0f) {
      return null(_0x740b3e);
      const _0x4b418d = null.writable.getWriter();
      await _0x4b418d.write(_0x740b3e);
      _0x4b418d.releaseLock();
      return;
      const {
        hasError: _0x3e8e10,
        message: _0x56b576,
        portRemote = 0x1bb,
        addressRemote = '',
        rawClientData: _0x5c711b
      } = await parseTrojanHeader(_0x740b3e);
      _0x3c9c52 = addressRemote;
      _0x5eb887 = portRemote + '--' + Math.random() + " tcp";
      if (_0x3e8e10) {
        throw new Error(_0x56b576);
        return;
      }
      handleTCPOutBound2(_0x24963f, addressRemote, portRemote, _0x5c711b, _0x3939a5, _0x3839f3);
    },
    'close'() {
      _0x3839f3("readableWebSocketStream is closed");
    },
    'abort'(_0x263abd) {
      _0x3839f3("readableWebSocketStream is aborted", JSON.stringify(_0x263abd));
    }
  }))['catch'](_0x4fa78f => {
    _0x3839f3("readableWebSocketStream pipeTo error", _0x4fa78f);
  });
  return new Response(null, {
    'status': 0x65,
    'webSocket': _0x36afdb
  });
}
__defProp(trojanOverWSHandler, 'name', {
  'value': 'trojanOverWSHandler',
  'configurable': true
});
async function parseTrojanHeader(_0x483a4b) {
  if (_0x483a4b.byteLength < 0x38) {
    return {
      'hasError': true,
      'message': "invalid data"
    };
  }
  if (new Uint8Array(_0x483a4b.slice(0x38, 0x39))[0x0] !== 0xd || new Uint8Array(_0x483a4b.slice(0x39, 0x3a))[0x0] !== 0xa) {
    return {
      'hasError': true,
      'message': "invalid header format (missing CR LF)"
    };
  }
  const _0x2696a1 = new TextDecoder().decode(_0x483a4b.slice(0x0, 0x38));
  if (_0x2696a1 !== import_js_sha256['default'].sha224(globalThis.trojanPassword)) {
    return {
      'hasError': true,
      'message': "invalid password"
    };
  }
  const _0x4d0689 = _0x483a4b.slice(58);
  if (_0x4d0689.byteLength < 0x6) {
    return {
      'hasError': true,
      'message': "invalid SOCKS5 request data"
    };
  }
  const _0x4d2e78 = new DataView(_0x4d0689);
  const _0x55f450 = _0x4d2e78.getUint8(0x0);
  if (_0x55f450 !== 0x1) {
    return {
      'hasError': true,
      'message': "unsupported command, only TCP (CONNECT) is allowed"
    };
  }
  const _0x4a548d = _0x4d2e78.getUint8(0x1);
  let _0x5a2357 = 0x0;
  let _0x19828f = 0x2;
  let _0x34eda2 = '';
  switch (_0x4a548d) {
    case 0x1:
      _0x5a2357 = 0x4;
      _0x34eda2 = new Uint8Array(_0x4d0689.slice(_0x19828f, _0x19828f + _0x5a2357)).join('.');
      break;
    case 0x3:
      _0x5a2357 = new Uint8Array(_0x4d0689.slice(_0x19828f, _0x19828f + 0x1))[0x0];
      _0x19828f += 0x1;
      _0x34eda2 = new TextDecoder().decode(_0x4d0689.slice(_0x19828f, _0x19828f + _0x5a2357));
      break;
    case 0x4:
      _0x5a2357 = 0x10;
      const _0x4d409b = new DataView(_0x4d0689.slice(_0x19828f, _0x19828f + _0x5a2357));
      const _0x48952c = [];
      for (let _0x27f4dc = 0x0; _0x27f4dc < 0x8; _0x27f4dc++) {
        _0x48952c.push(_0x4d409b.getUint16(_0x27f4dc * 0x2).toString(0x10));
      }
      _0x34eda2 = _0x48952c.join(':');
      break;
    default:
      return {
        'hasError': true,
        'message': "invalid addressType is " + _0x4a548d
      };
  }
  if (!_0x34eda2) {
    return {
      'hasError': true,
      'message': "address is empty, addressType is " + _0x4a548d
    };
  }
  const _0x23e6be = _0x19828f + _0x5a2357;
  const _0x1afc8d = _0x4d0689.slice(_0x23e6be, _0x23e6be + 0x2);
  const _0x26047a = new DataView(_0x1afc8d).getUint16(0x0);
  return {
    'hasError': false,
    'addressRemote': _0x34eda2,
    'portRemote': _0x26047a,
    'rawClientData': _0x4d0689.slice(_0x23e6be + 0x4)
  };
}
__defProp(parseTrojanHeader, 'name', {
  'value': "parseTrojanHeader",
  'configurable': true
});
async function handleTCPOutBound2(_0x1923a7, _0x46c121, _0x12090c, _0x569d5e, _0x5158f6, _0x256c9c) {
  async function _0x5d1f92(_0x517f35, _0x41e342) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(_0x517f35)) {
      _0x517f35 = '' + atob('d3d3Lg==') + _0x517f35 + atob("LnNzbGlwLmlv");
    }
    const _0xa63906 = a0_0xc45f47({
      'hostname': _0x517f35,
      'port': _0x41e342
    });
    _0x1923a7.value = _0xa63906;
    _0x256c9c("connected to " + _0x517f35 + ':' + _0x41e342);
    const _0x57cc52 = _0xa63906.writable.getWriter();
    await _0x57cc52.write(_0x569d5e);
    _0x57cc52.releaseLock();
    return _0xa63906;
  }
  __defProp(_0x5d1f92, 'name', {
    'value': "connectAndWrite",
    'configurable': true
  });
  async function _0xd408f7() {
    const _0x5ba173 = globalThis.pathName.split('/')[0x2];
    const _0x290d3e = _0x5ba173 ? atob(_0x5ba173).split(',') : undefined;
    const _0x19e088 = _0x290d3e ? _0x290d3e[Math.floor(Math.random() * _0x290d3e.length)] : globalThis.proxyIP || _0x46c121;
    const _0x3e174e = await _0x5d1f92(_0x19e088, _0x12090c);
    _0x3e174e.closed["catch"](_0x8bf22d => {
      console.log("retry tcpSocket closed error", _0x8bf22d);
    })["finally"](() => {
      safeCloseWebSocket2(_0x5158f6);
    });
    trojanRemoteSocketToWS(_0x3e174e, _0x5158f6, null, _0x256c9c);
  }
  __defProp(_0xd408f7, 'name', {
    'value': 'retry',
    'configurable': true
  });
  const _0x26005b = await _0x5d1f92(_0x46c121, _0x12090c);
  trojanRemoteSocketToWS(_0x26005b, _0x5158f6, _0xd408f7, _0x256c9c);
}
__defProp(handleTCPOutBound2, 'name', {
  'value': "handleTCPOutBound",
  'configurable': true
});
function makeReadableWebSocketStream2(_0x4f17e7, _0x3b257f, _0x417804) {
  let _0x521123 = false;
  const _0x4bde15 = new ReadableStream({
    'start'(_0x20dc08) {
      _0x4f17e7.addEventListener("message", _0x30d85a => {
        if (_0x521123) {
          return;
        }
        const _0x262f65 = _0x30d85a.data;
        _0x20dc08.enqueue(_0x262f65);
      });
      _0x4f17e7.addEventListener('close', () => {
        safeCloseWebSocket2(_0x4f17e7);
        if (_0x521123) {
          return;
        }
        _0x20dc08.close();
      });
      _0x4f17e7.addEventListener("error", _0x293195 => {
        _0x417804("webSocketServer has error");
        _0x20dc08.error(_0x293195);
      });
      const {
        earlyData: _0x5e9e3e,
        error: _0x43f118
      } = base64ToArrayBuffer2(_0x3b257f);
      if (_0x43f118) {
        _0x20dc08.error(_0x43f118);
      } else if (_0x5e9e3e) {
        _0x20dc08.enqueue(_0x5e9e3e);
      }
    },
    'pull'(_0x558532) {},
    'cancel'(_0x548117) {
      if (_0x521123) {
        return;
      }
      _0x417804("ReadableStream was canceled, due to " + _0x548117);
      _0x521123 = true;
      safeCloseWebSocket2(_0x4f17e7);
    }
  });
  return _0x4bde15;
}
__defProp(makeReadableWebSocketStream2, 'name', {
  'value': "makeReadableWebSocketStream",
  'configurable': true
});
async function trojanRemoteSocketToWS(_0x2a2e2f, _0x460313, _0x264c87, _0x1ce923) {
  let _0x44ff55 = false;
  await _0x2a2e2f.readable.pipeTo(new WritableStream({
    'start'() {},
    async 'write'(_0x25c8b4, _0xd4645d) {
      _0x44ff55 = true;
      if (_0x460313.readyState !== 0x1) {
        _0xd4645d.error("webSocket connection is not open");
      }
      _0x460313.send(_0x25c8b4);
    },
    'close'() {
      _0x1ce923("remoteSocket.readable is closed, hasIncomingData: " + _0x44ff55);
    },
    'abort'(_0x56a267) {
      console.error("remoteSocket.readable abort", _0x56a267);
    }
  }))["catch"](_0xa38e58 => {
    console.error("trojanRemoteSocketToWS error:", _0xa38e58.stack || _0xa38e58);
    safeCloseWebSocket2(_0x460313);
  });
  if (_0x44ff55 === false && _0x264c87) {
    _0x1ce923('retry');
    _0x264c87();
  }
}
__defProp(trojanRemoteSocketToWS, 'name', {
  'value': "trojanRemoteSocketToWS",
  'configurable': true
});
function base64ToArrayBuffer2(_0x2fb2f3) {
  if (!_0x2fb2f3) {
    return {
      'earlyData': null,
      'error': null
    };
  }
  try {
    _0x2fb2f3 = _0x2fb2f3.replace(/-/g, '+').replace(/_/g, '/');
    const _0x124b06 = atob(_0x2fb2f3);
    const _0x4394cd = Uint8Array.from(_0x124b06, _0x25eb5c => _0x25eb5c.charCodeAt(0x0));
    return {
      'earlyData': _0x4394cd.buffer,
      'error': null
    };
  } catch (_0x54bfc) {
    return {
      'earlyData': null,
      'error': _0x54bfc
    };
  }
}
__defProp(base64ToArrayBuffer2, 'name', {
  'value': 'base64ToArrayBuffer',
  'configurable': true
});
function safeCloseWebSocket2(_0x45493b) {
  try {
    if (_0x45493b.readyState === 0x1 || _0x45493b.readyState === 0x2) {
      _0x45493b.close();
    }
  } catch (_0x2290be) {
    console.error("safeCloseWebSocket error", _0x2290be);
  }
}
__defProp(safeCloseWebSocket2, 'name', {
  'value': "safeCloseWebSocket",
  'configurable': true
});
async function renderErrorPage(_0x2156f1) {
  const _0x9a8b6a = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Error Page</title>\n        <style>\n            :root {\n                --color: black;\n                --header-color: #09639f; \n                --background-color: #fff;\n                --border-color: #ddd;\n                --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n            }\n            body, html {\n                height: 100%;\n                width: 100%;\n                margin: 0;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                font-family: system-ui;\n                color: var(--color);\n                background-color: var(--background-color);\n            }\n            body.dark-mode {\n                --color: white;\n                --header-color: #3498DB; \n                --background-color: #121212;\n                --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);          \n            }\n            h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); text-shadow: var(--header-shadow); }\n            #error-container { text-align: center; }\n        </style>\n    </head>\n    <body>\n        <div id=\"error-container\">\n            <h1>BPB Panel <span style=\"font-size: smaller;\">" + globalThis.panelVersion + "</span> 💦</h1>\n            <div id=\"error-message\">\n                <h2>❌ Something went wrong!</h2>\n                <p><b>" + (_0x2156f1 ? "⚠️ " + (_0x2156f1.cause ? _0x2156f1.message.toString() : _0x2156f1.stack.toString()) : '') + "</b></p>\n            </div>\n        </div>\n    <script>\n        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n    </script>\n    </body>\n    </html>";
  return new Response(_0x9a8b6a, {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/html"
    }
  });
}
__defProp(renderErrorPage, 'name', {
  'value': "renderErrorPage",
  'configurable': true
});
async function getConfigAddresses(_0x283c9d, _0x41d7f7) {
  const _0x29c619 = await resolveDNS(globalThis.hostName);
  const _0x23e789 = _0x41d7f7 ? _0x29c619.ipv6.map(_0x2d9d03 => '[' + _0x2d9d03 + ']') : [];
  return [globalThis.hostName, "www.speedtest.net", ..._0x29c619.ipv4, ..._0x23e789, ...(_0x283c9d ? _0x283c9d.split(',') : [])];
}
__defProp(getConfigAddresses, 'name', {
  'value': "getConfigAddresses",
  'configurable': true
});
function extractWireguardParams(_0x13f1be, _0x43e284) {
  const _0x824cc7 = _0x43e284 ? 0x1 : 0x0;
  const _0x276996 = _0x13f1be[_0x824cc7].account.config;
  return {
    'warpIPv6': _0x276996['interface'].addresses.v6 + '/128',
    'reserved': _0x276996.client_id,
    'publicKey': _0x276996.peers[0x0].public_key,
    'privateKey': _0x13f1be[_0x824cc7].privateKey
  };
}
__defProp(extractWireguardParams, 'name', {
  'value': 'extractWireguardParams',
  'configurable': true
});
function generateRemark(_0x1f72e4, _0x54bd46, _0x571b68, _0x13b4ea, _0x5162c4, _0x1546be) {
  let _0x2774c9;
  const _0x1515c0 = _0x1546be ? " " + _0x1546be : '';
  if (_0x13b4ea.includes(_0x571b68)) {
    _0x2774c9 = "Clean IP";
  } else {
    _0x2774c9 = isDomain(_0x571b68) ? "Domain" : isIPv4(_0x571b68) ? "IPv4" : isIPv6(_0x571b68) ? "IPv6" : '';
  }
  return "💦 " + _0x1f72e4 + " - " + _0x5162c4 + _0x1515c0 + " - " + _0x2774c9 + " : " + _0x54bd46;
}
__defProp(generateRemark, 'name', {
  'value': "generateRemark",
  'configurable': true
});
function randomUpperCase(_0x45b55c) {
  let _0x5a6be6 = '';
  for (let _0x160649 = 0x0; _0x160649 < _0x45b55c.length; _0x160649++) {
    _0x5a6be6 += Math.random() < 0.5 ? _0x45b55c[_0x160649].toUpperCase() : _0x45b55c[_0x160649];
  }
  return _0x5a6be6;
}
__defProp(randomUpperCase, 'name', {
  'value': "randomUpperCase",
  'configurable': true
});
function getRandomPath(_0x19a8ff) {
  let _0x4dce83 = '';
  const _0x212b30 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length;
  for (let _0xc840eb = 0x0; _0xc840eb < _0x19a8ff; _0xc840eb++) {
    _0x4dce83 += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * _0x212b30));
  }
  return _0x4dce83;
}
__defProp(getRandomPath, 'name', {
  'value': "getRandomPath",
  'configurable': true
});
function base64ToDecimal(_0x161b7d) {
  const _0x4d4ed2 = atob(_0x161b7d);
  const _0x5c5744 = Array.from(_0x4d4ed2).map(_0x1531bb => _0x1531bb.charCodeAt(0x0).toString(0x10).padStart(0x2, '0')).join('');
  const _0x50c38b = _0x5c5744.match(/.{2}/g).map(_0x5b5d96 => parseInt(_0x5b5d96, 0x10));
  return _0x50c38b;
}
__defProp(base64ToDecimal, 'name', {
  'value': "base64ToDecimal",
  'configurable': true
});
function isIPv4(_0x5dec37) {
  const _0x5369e6 = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
  return _0x5369e6.test(_0x5dec37);
}
__defProp(isIPv4, 'name', {
  'value': "isIPv4",
  'configurable': true
});
function isIPv6(_0x1e3190) {
  const _0x492626 = /^\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|::(?:[a-fA-F0-9]{1,4}:){0,7}|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6})\](?:\/(1[0-1][0-9]|12[0-8]|[0-9]?[0-9]))?$/;
  return _0x492626.test(_0x1e3190);
}
__defProp(isIPv6, 'name', {
  'value': 'isIPv6',
  'configurable': true
});
async function buildXrayDNS(_0x596a3c, _0x31de0a, _0x475a1d, _0x310dfa, _0x47509a) {
  const {
    remoteDNS: _0x4ac734,
    resolvedRemoteDNS: _0x775395,
    localDNS: _0x955b5,
    vlessTrojanFakeDNS: _0x257365,
    enableIPv6: _0x12f186,
    warpFakeDNS: _0x197f73,
    warpEnableIPv6: _0x353975,
    blockAds: _0x3cc78c,
    bypassIran: _0x1cf965,
    bypassChina: _0x146e6a,
    blockPorn: _0x2410ea,
    bypassRussia: _0x17bdd7,
    customBypassRules: _0x59dd9a,
    customBlockRules: _0x42ac0e
  } = _0x596a3c;
  const _0x5c40bb = [{
    'rule': _0x1cf965,
    'domain': "geosite:category-ir",
    'ip': "geoip:ir"
  }, {
    'rule': _0x146e6a,
    'domain': "geosite:cn",
    'ip': "geoip:cn"
  }, {
    'rule': _0x17bdd7,
    'domain': "geosite:category-ru",
    'ip': 'geoip:ru'
  }];
  const _0x2523ab = [{
    'rule': _0x3cc78c,
    'host': "geosite:category-ads-all"
  }, {
    'rule': _0x3cc78c,
    'host': 'geosite:category-ads-ir'
  }, {
    'rule': _0x2410ea,
    'host': "geosite:category-porn"
  }];
  const _0x50d2d2 = _0x257365 && !_0x47509a || _0x197f73 && _0x47509a;
  const _0x49b846 = _0x12f186 && !_0x47509a || _0x353975 && _0x47509a;
  const _0x17d4a3 = _0x31de0a.filter(_0x43f924 => isDomain(_0x43f924));
  const _0x3d501d = _0x59dd9a.split(',').filter(_0x38fd0d => isDomain(_0x38fd0d));
  const _0x248714 = _0x42ac0e.split(',').filter(_0x3bd08 => isDomain(_0x3bd08));
  const _0x231ca6 = [...new Set(_0x17d4a3)];
  const _0x472f65 = [..._0x231ca6, ..._0x3d501d].length > 0x0;
  const _0x1527b8 = _0x1cf965 || _0x146e6a || _0x17bdd7;
  const _0x342cd7 = _0x3cc78c || _0x2410ea || _0x248714.length > 0x0;
  const _0xabba16 = _0x310dfa ? ["https://cloudflare-dns.com/dns-query"] : _0x47509a ? _0x353975 ? ['1.1.1.1', '1.0.0.1', "2606:4700:4700::1111", "2606:4700:4700::1001"] : ["1.1.1.1", "1.0.0.1"] : [_0x4ac734];
  const _0x1546b9 = {};
  if (_0x342cd7) {
    _0x2523ab.forEach(({
      rule: _0x2b3535,
      host: _0x2c1d68
    }) => {
      if (_0x2b3535) {
        _0x1546b9[_0x2c1d68] = ["127.0.0.1"];
      }
    });
    _0x248714.forEach(_0x44d027 => {
      _0x1546b9["domain:" + _0x44d027] = ['127.0.0.1'];
    });
  }
  const _0x54af61 = _0x475a1d ? await resolveDNS(_0x475a1d) : undefined;
  if (_0x54af61) {
    _0x1546b9[_0x475a1d] = _0x12f186 ? [..._0x54af61.ipv4, ..._0x54af61.ipv6] : _0x54af61.ipv4;
  }
  if (_0x775395.server && !_0x310dfa && !_0x47509a) {
    _0x1546b9[_0x775395.server] = _0x775395.staticIPs;
  }
  if (_0x310dfa) {
    const _0x733d3e = ["cloudflare-dns.com", "cloudflare.com", "dash.cloudflare.com"];
    const _0x5c72b2 = await Promise.all(_0x733d3e.map(resolveDNS));
    const _0x133115 = _0x5c72b2.flatMap(_0x67d622 => _0x67d622.ipv4);
    const _0xb161c8 = _0x12f186 ? _0x5c72b2.flatMap(_0x252e0a => _0x252e0a.ipv6) : [];
    _0x1546b9["cloudflare-dns.com"] = [..._0x133115, ..._0xb161c8];
  }
  const _0x3d3ecf = Object.keys(_0x1546b9).length ? {
    'hosts': _0x1546b9
  } : {};
  const _0x5280b0 = {
    ..._0x3d3ecf,
    'servers': _0xabba16,
    'queryStrategy': _0x49b846 ? "UseIP" : "UseIPv4",
    'tag': "dns"
  };
  if (_0x472f65) {
    const _0x320ed0 = _0x231ca6.map(_0x2e9b47 => 'full:' + _0x2e9b47);
    const _0x5806eb = _0x3d501d.map(_0xeabad1 => "domain:" + _0xeabad1);
    _0x5280b0.servers.push({
      'address': _0x955b5,
      'domains': [..._0x320ed0, ..._0x5806eb],
      'skipFallback': true
    });
  }
  const _0xd14ab7 = {
    'address': _0x955b5,
    'domains': [],
    'expectIPs': [],
    'skipFallback': true
  };
  if (!_0x310dfa && _0x1527b8) {
    _0x5c40bb.forEach(({
      rule: _0x90ca6f,
      domain: _0x34bcb9,
      ip: _0x27a65c
    }) => {
      if (_0x90ca6f) {
        _0xd14ab7.domains.push(_0x34bcb9);
        _0xd14ab7.expectIPs.push(_0x27a65c);
      }
    });
    _0x5280b0.servers.push(_0xd14ab7);
  }
  if (_0x50d2d2) {
    const _0x15cdd7 = _0x1527b8 && !_0x310dfa ? {
      'address': "fakedns",
      'domains': _0xd14ab7.domains
    } : 'fakedns';
    _0x5280b0.servers.unshift(_0x15cdd7);
  }
  return _0x5280b0;
}
__defProp(buildXrayDNS, 'name', {
  'value': 'buildXrayDNS',
  'configurable': true
});
function buildXrayRoutingRules(_0x2f62be, _0x11ee90, _0x54dd6c, _0x45f0b6, _0xb0e513, _0x3120d3) {
  const {
    remoteDNS: _0x3c7de7,
    localDNS: _0x19a68d,
    bypassLAN: _0x8bb722,
    bypassIran: _0x2884af,
    bypassChina: _0x59e26f,
    bypassRussia: _0x5eb4c0,
    blockAds: _0x17c25b,
    blockPorn: _0xe00a60,
    blockUDP443: _0x2273bf,
    customBypassRules: _0x1d79d0,
    customBlockRules: _0xf87f6
  } = _0x2f62be;
  const _0x5f04e8 = [{
    'rule': _0x8bb722,
    'type': "direct",
    'domain': 'geosite:private',
    'ip': "geoip:private"
  }, {
    'rule': _0x2884af,
    'type': "direct",
    'domain': "geosite:category-ir",
    'ip': "geoip:ir"
  }, {
    'rule': _0x59e26f,
    'type': "direct",
    'domain': "geosite:cn",
    'ip': "geoip:cn"
  }, {
    'rule': _0x17c25b,
    'type': 'block',
    'domain': "geosite:category-ads-all"
  }, {
    'rule': _0x17c25b,
    'type': "block",
    'domain': "geosite:category-ads-ir"
  }, {
    'rule': _0xe00a60,
    'type': 'block',
    'domain': "geosite:category-porn"
  }];
  const _0x46c97f = _0x11ee90.filter(_0x5dd949 => isDomain(_0x5dd949));
  const _0x13176b = _0x1d79d0 ? _0x1d79d0.split(',') : [];
  const _0x43be11 = _0xf87f6 ? _0xf87f6.split(',') : [];
  const _0x394856 = _0x13176b.filter(_0x43b350 => isDomain(_0x43b350));
  const _0x476eaa = [..._0x46c97f, ..._0x394856].length > 0x0;
  const _0x49f98e = _0x17c25b || _0xe00a60 || _0x43be11.length > 0x0;
  const _0x4d6f8d = _0x2884af || _0x59e26f || _0x5eb4c0 || _0x13176b.length > 0x0;
  const _0x14876f = [{
    'inboundTag': ["dns-in"],
    'outboundTag': "dns-out",
    'type': "field"
  }, {
    'inboundTag': ["socks-in", 'http-in'],
    'port': '53',
    'outboundTag': "dns-out",
    'type': "field"
  }];
  if (!_0xb0e513 && (_0x476eaa || _0x4d6f8d)) {
    _0x14876f.push({
      'ip': [_0x19a68d],
      'port': '53',
      'network': 'udp',
      'outboundTag': "direct",
      'type': 'field'
    });
  }
  if (_0x4d6f8d || _0x49f98e) {
    const _0xa5ad4f = __defProp((_0x22be3c, _0x39e2ab) => ({
      [_0x22be3c]: [],
      'outboundTag': _0x39e2ab,
      'type': "field"
    }), 'name', {
      'value': 'createRule',
      'configurable': true
    });
    let _0x5c8dca;
    let _0x57261b;
    if (!_0xb0e513) {
      _0x5c8dca = _0xa5ad4f("domain", "direct");
      _0x57261b = _0xa5ad4f('ip', "direct");
    }
    let _0xc3c9ae = _0xa5ad4f("domain", "block");
    let _0x3c8236 = _0xa5ad4f('ip', "block");
    _0x5f04e8.forEach(({
      rule: _0x366e78,
      type: _0x2ddf61,
      domain: _0x27c9eb,
      ip: _0x566b75
    }) => {
      if (_0x366e78) {
        if (_0x2ddf61 === "direct") {
          _0x5c8dca?.['domain']["push"](_0x27c9eb);
          _0x57261b?.['ip']?.["push"](_0x566b75);
        } else {
          _0xc3c9ae.domain.push(_0x27c9eb);
        }
      }
    });
    _0x13176b.forEach(_0x3ab0cd => {
      if (isDomain(_0x3ab0cd)) {
        _0x5c8dca?.["domain"]["push"]("domain:" + _0x3ab0cd);
      } else {
        _0x57261b?.['ip']["push"](_0x3ab0cd);
      }
    });
    _0x43be11.forEach(_0x5d24ca => {
      if (isDomain(_0x5d24ca)) {
        _0xc3c9ae.domain.push("domain:" + _0x5d24ca);
      } else {
        _0x3c8236.ip.push(_0x5d24ca);
      }
    });
    if (!_0xb0e513) {
      if (_0x5c8dca.domain.length) {
        _0x14876f.push(_0x5c8dca);
      }
      if (_0x57261b.ip.length) {
        _0x14876f.push(_0x57261b);
      }
    }
    if (_0xc3c9ae.domain.length) {
      _0x14876f.push(_0xc3c9ae);
    }
    if (_0x3c8236.ip.length) {
      _0x14876f.push(_0x3c8236);
    }
  }
  if (_0x2273bf) {
    _0x14876f.push({
      'network': "udp",
      'port': "443",
      'outboundTag': "block",
      'type': 'field'
    });
  }
  if (_0x54dd6c) {
    const _0x4b13f8 = {
      [_0x45f0b6 ? "balancerTag" : "outboundTag"]: _0x45f0b6 ? "all-proxy" : "proxy",
      'type': "field"
    };
    if (!_0x3120d3) {
      const _0x35b29c = new URL(_0x3c7de7);
      const _0x13c693 = _0x35b29c.hostname;
      _0x14876f.push({
        [isDomain(_0x13c693) ? "domain" : 'ip']: [_0x13c693],
        'network': "tcp",
        ..._0x4b13f8
      });
    } else {
      _0x14876f.push({
        'network': "udp",
        'port': '53',
        ..._0x4b13f8
      });
    }
  }
  if (_0x45f0b6) {
    _0x14876f.push({
      'network': "tcp,udp",
      'balancerTag': "all",
      'type': "field"
    });
  } else {
    _0x14876f.push({
      'network': 'tcp,udp',
      'outboundTag': _0x54dd6c ? "chain" : _0xb0e513 ? 'fragment' : "proxy",
      'type': 'field'
    });
  }
  return _0x14876f;
}
__defProp(buildXrayRoutingRules, 'name', {
  'value': "buildXrayRoutingRules",
  'configurable': true
});
function buildXrayVLESSOutbound(_0x52618c, _0x5ad058, _0xfc57c6, _0x5b8a80, _0x2e955a, _0x5af566, _0x46e13f, _0x429cfd, _0x2df374) {
  const _0x1f4a16 = {
    'protocol': 'vless',
    'settings': {
      'vnext': [{
        'address': _0x5ad058,
        'port': +_0xfc57c6,
        'users': [{
          'id': globalThis.userID,
          'encryption': "none",
          'level': 0x8
        }]
      }]
    },
    'streamSettings': {
      'network': 'ws',
      'security': 'none',
      'sockopt': {},
      'wsSettings': {
        'headers': {
          'Host': _0x5b8a80,
          'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
        },
        'path': '/' + getRandomPath(0x10) + (_0x5af566 ? '/' + btoa(_0x5af566) : '') + "?ed=2560"
      }
    },
    'tag': _0x52618c
  };
  if (globalThis.defaultHttpsPorts.includes(_0xfc57c6)) {
    _0x1f4a16.streamSettings.security = "tls";
    _0x1f4a16.streamSettings.tlsSettings = {
      'allowInsecure': _0x429cfd,
      'fingerprint': "randomized",
      'alpn': ['h2', "http/1.1"],
      'serverName': _0x2e955a
    };
  }
  const _0x4202f5 = _0x1f4a16.streamSettings.sockopt;
  if (_0x46e13f) {
    _0x4202f5.dialerProxy = "fragment";
  } else {
    _0x4202f5.tcpKeepAliveIdle = 0x1e;
    _0x4202f5.tcpNoDelay = true;
    _0x4202f5.domainStrategy = _0x2df374 ? 'UseIPv4v6' : "UseIPv4";
  }
  return _0x1f4a16;
}
__defProp(buildXrayVLESSOutbound, 'name', {
  'value': 'buildXrayVLESSOutbound',
  'configurable': true
});
function buildXrayTrojanOutbound(_0x905005, _0x267b5b, _0x4c3a3a, _0x545e71, _0x5bfa53, _0x3a053c, _0x230f59, _0x17ddc0, _0x1df53b) {
  const _0x564819 = {
    'protocol': 'trojan',
    'settings': {
      'servers': [{
        'address': _0x267b5b,
        'port': +_0x4c3a3a,
        'password': globalThis.trojanPassword,
        'level': 0x8
      }]
    },
    'streamSettings': {
      'network': 'ws',
      'security': "none",
      'sockopt': {},
      'wsSettings': {
        'headers': {
          'Host': _0x545e71
        },
        'path': "/tr" + getRandomPath(0x10) + (_0x3a053c ? '/' + btoa(_0x3a053c) : '') + "?ed=2560"
      }
    },
    'tag': _0x905005
  };
  if (globalThis.defaultHttpsPorts.includes(_0x4c3a3a)) {
    _0x564819.streamSettings.security = "tls";
    _0x564819.streamSettings.tlsSettings = {
      'allowInsecure': _0x17ddc0,
      'fingerprint': "randomized",
      'alpn': ['h2', "http/1.1"],
      'serverName': _0x5bfa53
    };
  }
  const _0x29e5f7 = _0x564819.streamSettings.sockopt;
  if (_0x230f59) {
    _0x29e5f7.dialerProxy = 'fragment';
  } else {
    _0x29e5f7.tcpKeepAliveIdle = 0x1e;
    _0x29e5f7.tcpNoDelay = true;
    _0x29e5f7.domainStrategy = _0x1df53b ? "UseIPv4v6" : "UseIPv4";
  }
  return _0x564819;
}
__defProp(buildXrayTrojanOutbound, 'name', {
  'value': "buildXrayTrojanOutbound",
  'configurable': true
});
function buildXrayWarpOutbound(_0x8ad788, _0x290ddb, _0xc5134d, _0x3d2e53, _0xf25b1c) {
  const {
    warpEnableIPv6: _0x2d07be,
    nikaNGNoiseMode: _0x1b06cd,
    noiseCountMin: _0xc26be5,
    noiseCountMax: _0x5ba8f0,
    noiseSizeMin: _0x2d0ddb,
    noiseSizeMax: _0x44f3b1,
    noiseDelayMin: _0x5385fa,
    noiseDelayMax: _0x3b4e3d
  } = _0x8ad788;
  const {
    warpIPv6: _0x47ea26,
    reserved: _0x213219,
    publicKey: _0x107d68,
    privateKey: _0x19c8ac
  } = extractWireguardParams(_0x290ddb, _0x3d2e53);
  const _0x3909d6 = {
    'protocol': "wireguard",
    'settings': {
      'address': ["172.16.0.2/32", _0x47ea26],
      'mtu': 0x500,
      'peers': [{
        'endpoint': _0xc5134d,
        'publicKey': _0x107d68,
        'keepAlive': 0x5
      }],
      'reserved': base64ToDecimal(_0x213219),
      'secretKey': _0x19c8ac
    },
    'streamSettings': {
      'sockopt': {
        'dialerProxy': "proxy",
        'domainStrategy': _0x2d07be ? "UseIPv4v6" : "UseIPv4"
      }
    },
    'tag': _0x3d2e53 ? 'chain' : "proxy"
  };
  if (!_0x3d2e53) {
    delete _0x3909d6.streamSettings;
  }
  if (_0xf25b1c === "nikang" && !_0x3d2e53) {
    Object.assign(_0x3909d6.settings, {
      'wnoise': _0x1b06cd,
      'wnoisecount': _0xc26be5 === _0x5ba8f0 ? _0xc26be5 : _0xc26be5 + '-' + _0x5ba8f0,
      'wpayloadsize': _0x2d0ddb === _0x44f3b1 ? _0x2d0ddb : _0x2d0ddb + '-' + _0x44f3b1,
      'wnoisedelay': _0x5385fa === _0x3b4e3d ? _0x5385fa : _0x5385fa + '-' + _0x3b4e3d
    });
  }
  return _0x3909d6;
}
__defProp(buildXrayWarpOutbound, 'name', {
  'value': "buildXrayWarpOutbound",
  'configurable': true
});
function buildXrayChainOutbound(_0x4a7eae, _0x400913) {
  if (["socks", "http"].includes(_0x4a7eae.protocol)) {
    const {
      protocol: _0x47b4c4,
      server: _0x40277e,
      port: _0x4fa7bf,
      user: _0x28e5b3,
      pass: _0x2861b2
    } = _0x4a7eae;
    return {
      'protocol': _0x47b4c4,
      'settings': {
        'servers': [{
          'address': _0x40277e,
          'port': +_0x4fa7bf,
          'users': [{
            'user': _0x28e5b3,
            'pass': _0x2861b2,
            'level': 0x8
          }]
        }]
      },
      'streamSettings': {
        'network': 'tcp',
        'sockopt': {
          'dialerProxy': "proxy",
          'domainStrategy': _0x400913 ? "UseIPv4v6" : "UseIPv4",
          'tcpNoDelay': true
        }
      },
      'mux': {
        'enabled': true,
        'concurrency': 0x8,
        'xudpConcurrency': 0x10,
        'xudpProxyUDP443': "reject"
      },
      'tag': "chain"
    };
  }
  const {
    server: _0x148c52,
    port: _0x31d65a,
    uuid: _0x1094a6,
    flow: _0x43c201,
    security: _0x13c178,
    type: _0x3c41ba,
    sni: _0x506494,
    fp: _0x2c7459,
    alpn: _0x31ceed,
    pbk: _0x512194,
    sid: _0x5a55e4,
    spx: _0x590842,
    headerType: _0x34717d,
    host: _0x22d6b3,
    path: _0xddd4f2,
    authority: _0x197171,
    serviceName: _0x14ec72,
    mode: _0x488341
  } = _0x4a7eae;
  const _0x3c93d8 = {
    'mux': {
      'concurrency': 0x8,
      'enabled': true,
      'xudpConcurrency': 0x10,
      'xudpProxyUDP443': "reject"
    },
    'protocol': "vless",
    'settings': {
      'vnext': [{
        'address': _0x148c52,
        'port': +_0x31d65a,
        'users': [{
          'encryption': 'none',
          'flow': _0x43c201,
          'id': _0x1094a6,
          'level': 0x8,
          'security': "auto"
        }]
      }]
    },
    'streamSettings': {
      'network': _0x3c41ba,
      'security': _0x13c178,
      'sockopt': {
        'dialerProxy': "proxy",
        'domainStrategy': _0x400913 ? "UseIPv4v6" : "UseIPv4",
        'tcpNoDelay': true
      }
    },
    'tag': "chain"
  };
  if (_0x13c178 === "tls") {
    const _0x5a57e4 = _0x31ceed ? _0x31ceed?.["split"](',') : [];
    _0x3c93d8.streamSettings.tlsSettings = {
      'allowInsecure': false,
      'fingerprint': _0x2c7459,
      'alpn': _0x5a57e4,
      'serverName': _0x506494
    };
  }
  if (_0x13c178 === 'reality') {
    delete _0x3c93d8.mux;
    _0x3c93d8.streamSettings.realitySettings = {
      'fingerprint': _0x2c7459,
      'publicKey': _0x512194,
      'serverName': _0x506494,
      'shortId': _0x5a55e4,
      'spiderX': _0x590842
    };
  }
  if (_0x34717d === "http") {
    const _0x17b934 = _0xddd4f2?.['split'](',');
    const _0x2a45a5 = _0x22d6b3?.["split"](',');
    _0x3c93d8.streamSettings.tcpSettings = {
      'header': {
        'request': {
          'headers': {
            'Host': _0x2a45a5
          },
          'method': "GET",
          'path': _0x17b934,
          'version': "1.1"
        },
        'response': {
          'headers': {
            'Content-Type': ["application/octet-stream"]
          },
          'reason': 'OK',
          'status': "200",
          'version': "1.1"
        },
        'type': "http"
      }
    };
  }
  if (_0x3c41ba === "tcp" && _0x13c178 !== "reality" && !_0x34717d) {
    _0x3c93d8.streamSettings.tcpSettings = {
      'header': {
        'type': "none"
      }
    };
  }
  if (_0x3c41ba === 'ws') {
    _0x3c93d8.streamSettings.wsSettings = {
      'headers': {
        'Host': _0x22d6b3
      },
      'path': _0xddd4f2
    };
  }
  if (_0x3c41ba === "grpc") {
    delete _0x3c93d8.mux;
    _0x3c93d8.streamSettings.grpcSettings = {
      'authority': _0x197171,
      'multiMode': _0x488341 === 'multi',
      'serviceName': _0x14ec72
    };
  }
  return _0x3c93d8;
}
__defProp(buildXrayChainOutbound, 'name', {
  'value': "buildXrayChainOutbound",
  'configurable': true
});
function buildXrayConfig(_0x27f298, _0x58eb6d, _0x57cb11, _0xf4c2e8, _0x16bf60, _0x3e3128, _0x3fbbfe) {
  const {
    vlessTrojanFakeDNS: _0x250658,
    enableIPv6: _0x11711e,
    warpFakeDNS: _0x468aef,
    bestVLESSTrojanInterval: _0x438f63,
    bestWarpInterval: _0x41a306,
    lengthMin: _0x284e15,
    lengthMax: _0x2f4e9a,
    intervalMin: _0x49a4e4,
    intervalMax: _0x154811,
    fragmentPackets: _0x3c9128
  } = _0x27f298;
  const _0x55cf3c = _0x250658 && !_0x3fbbfe || _0x468aef && _0x3fbbfe;
  const _0x57fb0a = structuredClone(xrayConfigTemp);
  _0x57fb0a.remarks = _0x58eb6d;
  if (_0x55cf3c) {
    _0x57fb0a.inbounds[0x0].sniffing.destOverride.push('fakedns');
    _0x57fb0a.inbounds[0x1].sniffing.destOverride.push("fakedns");
  }
  if (_0x57cb11) {
    const _0x233316 = _0x57fb0a.outbounds[0x0].settings.fragment;
    _0x233316.length = _0x284e15 + '-' + _0x2f4e9a;
    _0x233316.interval = _0x49a4e4 + '-' + _0x154811;
    _0x233316.packets = _0x3c9128;
    _0x57fb0a.outbounds[0x0].settings.domainStrategy = _0x11711e ? "UseIPv4v6" : 'UseIPv4';
  } else {
    _0x57fb0a.outbounds.shift();
  }
  if (_0xf4c2e8) {
    const _0x43976b = _0x3fbbfe ? _0x41a306 : _0x438f63;
    _0x57fb0a.observatory.probeInterval = _0x43976b + 's';
    if (_0x3e3128) {
      _0x57fb0a.routing.balancers[0x0].fallbackTag = 'prox-2';
    }
    if (_0x16bf60) {
      _0x57fb0a.observatory.subjectSelector.push('chain');
      const _0x14abca = structuredClone(_0x57fb0a.routing.balancers[0x0]);
      if (_0x3e3128) {
        _0x14abca.fallbackTag = "chain-2";
      }
      _0x57fb0a.routing.balancers.push({
        ..._0x14abca,
        'selector': ['chain']
      });
      _0x57fb0a.routing.balancers[0x0].tag = 'all-proxy';
    }
  } else {
    delete _0x57fb0a.observatory;
    delete _0x57fb0a.routing.balancers;
  }
  return _0x57fb0a;
}
__defProp(buildXrayConfig, 'name', {
  'value': "buildXrayConfig",
  'configurable': true
});
async function buildXrayBestPingConfig(_0x52a847, _0x45ac2c, _0x337454, _0x3d8adf, _0xf19b1d) {
  const _0x577b98 = _0xf19b1d ? "💦 BPB F - Best Ping 💥" : "💦 BPB - Best Ping 💥";
  const _0x3884a8 = buildXrayConfig(_0x52a847, _0x577b98, _0xf19b1d, true, _0x337454, true);
  _0x3884a8.dns = await buildXrayDNS(_0x52a847, _0x45ac2c, undefined, false, false);
  _0x3884a8.routing.rules = buildXrayRoutingRules(_0x52a847, _0x45ac2c, _0x337454, true, false, false);
  _0x3884a8.outbounds.unshift(..._0x3d8adf);
  return _0x3884a8;
}
__defProp(buildXrayBestPingConfig, 'name', {
  'value': "buildXrayBestPingConfig",
  'configurable': true
});
async function buildXrayBestFragmentConfig(_0x25365c, _0x3b91f4, _0x8c8ba6, _0x525a4f) {
  const _0x26e8a3 = ["10-20", "20-30", "30-40", "40-50", '50-60', "60-70", "70-80", "80-90", '90-100', "10-30", "20-40", "30-50", '40-60', "50-70", '60-80', "70-90", '80-100', '100-200'];
  const _0x2c620a = buildXrayConfig(_0x25365c, "💦 BPB F - Best Fragment 😎", true, true, _0x8c8ba6, false, false);
  _0x2c620a.dns = await buildXrayDNS(_0x25365c, [], _0x3b91f4, false, false);
  _0x2c620a.routing.rules = buildXrayRoutingRules(_0x25365c, [], _0x8c8ba6, true, false, false);
  const _0x2737a7 = _0x2c620a.outbounds.shift();
  const _0x3af1b9 = [];
  _0x26e8a3.forEach((_0x32c4a7, _0x5da505) => {
    if (_0x8c8ba6) {
      const _0x2d8038 = structuredClone(_0x8c8ba6);
      _0x2d8038.tag = "chain-" + (_0x5da505 + 0x1);
      _0x2d8038.streamSettings.sockopt.dialerProxy = 'prox-' + (_0x5da505 + 0x1);
      _0x3af1b9.push(_0x2d8038);
    }
    const _0x18d331 = structuredClone(_0x525a4f[_0x8c8ba6 ? 0x1 : 0x0]);
    _0x18d331.tag = "prox-" + (_0x5da505 + 0x1);
    _0x18d331.streamSettings.sockopt.dialerProxy = "frag-" + (_0x5da505 + 0x1);
    const _0x340928 = structuredClone(_0x2737a7);
    _0x340928.tag = "frag-" + (_0x5da505 + 0x1);
    _0x340928.settings.fragment.length = _0x32c4a7;
    _0x340928.settings.fragment.interval = '1-1';
    _0x3af1b9.push(_0x18d331, _0x340928);
  });
  _0x2c620a.outbounds.unshift(..._0x3af1b9);
  return _0x2c620a;
}
__defProp(buildXrayBestFragmentConfig, 'name', {
  'value': "buildXrayBestFragmentConfig",
  'configurable': true
});
async function buildXrayWorkerLessConfig(_0x143cc5) {
  const _0x5e658a = buildXrayConfig(_0x143cc5, "💦 BPB F - WorkerLess ⭐", true, false, false, false, false);
  _0x5e658a.dns = await buildXrayDNS(_0x143cc5, [], undefined, true);
  _0x5e658a.routing.rules = buildXrayRoutingRules(_0x143cc5, [], false, false, true, false);
  const _0x5233a4 = buildXrayVLESSOutbound("fake-outbound", "google.com", "443", globalThis.userID, 'google.com', "google.com", '', true, false);
  delete _0x5233a4.streamSettings.sockopt;
  _0x5233a4.streamSettings.wsSettings.path = '/';
  _0x5e658a.outbounds.push(_0x5233a4);
  return _0x5e658a;
}
__defProp(buildXrayWorkerLessConfig, 'name', {
  'value': "buildXrayWorkerLessConfig",
  'configurable': true
});
async function getXrayCustomConfigs(_0x535461, _0x154b6b, _0x30ff1d) {
  const {
    proxySettings: _0x354ea8
  } = await getDataset(_0x535461, _0x154b6b);
  let _0x438166 = [];
  let _0x251d09 = [];
  let _0x515c3e = [];
  let _0x1816c2;
  const {
    proxyIP: _0x4838ac,
    outProxy: _0x3e4204,
    outProxyParams: _0x587563,
    cleanIPs: _0x3a9e09,
    enableIPv6: _0x396e49,
    customCdnAddrs: _0x506e32,
    customCdnHost: _0x5a653b,
    customCdnSni: _0x27b5b5,
    vlessConfigs: _0x58137d,
    trojanConfigs: _0x28b0f5,
    ports: _0x35f2f0
  } = _0x354ea8;
  if (_0x3e4204) {
    const _0x35ed3c = JSON.parse(_0x587563);
    try {
      _0x1816c2 = buildXrayChainOutbound(_0x35ed3c, _0x396e49);
    } catch (_0x56b00a) {
      console.log("An error occured while parsing chain proxy: ", _0x56b00a);
      _0x1816c2 = undefined;
      await _0x154b6b.bpb.put("proxySettings", JSON.stringify({
        ..._0x354ea8,
        'outProxy': '',
        'outProxyParams': {}
      }));
    }
  }
  const _0x575013 = await getConfigAddresses(_0x3a9e09, _0x396e49);
  const _0x35f78f = _0x506e32 ? _0x506e32.split(',') : [];
  const _0x536142 = _0x30ff1d ? [..._0x575013] : [..._0x575013, ..._0x35f78f];
  const _0x39b917 = _0x35f2f0.filter(_0xc0de44 => _0x30ff1d ? globalThis.defaultHttpsPorts.includes(_0xc0de44) : true);
  if (_0x58137d) {
    _0x515c3e.push("VLESS");
  }
  if (_0x28b0f5) {
    _0x515c3e.push('Trojan');
  }
  let _0x17f382 = 0x1;
  for (const _0x5d9899 of _0x515c3e) {
    let _0x3784a1 = 0x1;
    for (const _0x3737ee of _0x39b917) {
      for (const _0x61823e of _0x536142) {
        const _0x16a888 = _0x35f78f.includes(_0x61823e);
        const _0x723323 = _0x16a888 ? 'C' : _0x30ff1d ? 'F' : '';
        const _0x54efa7 = _0x16a888 ? _0x27b5b5 : randomUpperCase(globalThis.hostName);
        const _0x43a591 = _0x16a888 ? _0x5a653b : globalThis.hostName;
        const _0x4a7a9b = generateRemark(_0x3784a1, _0x3737ee, _0x61823e, _0x3a9e09, _0x5d9899, _0x723323);
        const _0x7c1281 = buildXrayConfig(_0x354ea8, _0x4a7a9b, _0x30ff1d, false, _0x1816c2, false, false);
        _0x7c1281.dns = await buildXrayDNS(_0x354ea8, [_0x61823e], undefined);
        _0x7c1281.routing.rules = buildXrayRoutingRules(_0x354ea8, [_0x61823e], _0x1816c2, false, false, false);
        const _0x2a9a43 = _0x5d9899 === "VLESS" ? buildXrayVLESSOutbound("proxy", _0x61823e, _0x3737ee, _0x43a591, _0x54efa7, _0x4838ac, _0x30ff1d, _0x16a888, _0x396e49) : buildXrayTrojanOutbound("proxy", _0x61823e, _0x3737ee, _0x43a591, _0x54efa7, _0x4838ac, _0x30ff1d, _0x16a888, _0x396e49);
        _0x7c1281.outbounds.unshift({
          ..._0x2a9a43
        });
        _0x2a9a43.tag = "prox-" + _0x17f382;
        if (_0x1816c2) {
          _0x7c1281.outbounds.unshift(_0x1816c2);
          const _0x50b09e = structuredClone(_0x1816c2);
          _0x50b09e.tag = "chain-" + _0x17f382;
          _0x50b09e.streamSettings.sockopt.dialerProxy = "prox-" + _0x17f382;
          _0x251d09.push(_0x50b09e);
        }
        _0x251d09.push(_0x2a9a43);
        _0x438166.push(_0x7c1281);
        _0x17f382++;
        _0x3784a1++;
      }
    }
  }
  const _0x28e5eb = await buildXrayBestPingConfig(_0x354ea8, _0x536142, _0x1816c2, _0x251d09, _0x30ff1d);
  const _0x33da1b = [..._0x438166, _0x28e5eb];
  if (_0x30ff1d) {
    const _0xfa30e = await buildXrayBestFragmentConfig(_0x354ea8, globalThis.hostName, _0x1816c2, _0x251d09);
    const _0x4797b7 = await buildXrayWorkerLessConfig(_0x354ea8);
    _0x33da1b.push(_0xfa30e, _0x4797b7);
  }
  return new Response(JSON.stringify(_0x33da1b, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getXrayCustomConfigs, 'name', {
  'value': "getXrayCustomConfigs",
  'configurable': true
});
async function getXrayWarpConfigs(_0x3d1b03, _0x3663f4, _0x374ebc) {
  const {
    proxySettings: _0x2fce41,
    warpConfigs: _0x75f8ae
  } = await getDataset(_0x3d1b03, _0x3663f4);
  const _0x47dbee = [];
  const _0x9aaa24 = [];
  const _0x5ccec9 = [];
  const _0x245d55 = [];
  const {
    warpEndpoints: _0x2e4354
  } = _0x2fce41;
  const _0x9c83f5 = _0x2e4354.split(',').map(_0x5645e2 => _0x5645e2.split(':')[0x0]).filter(_0x5b346d => isDomain(_0x5b346d));
  const _0xf27bc7 = _0x374ebc === "nikang" ? " Pro " : " ";
  for (const [_0x1c5377, _0x3c52b6] of _0x2e4354.split(',').entries()) {
    const _0x9f72a4 = _0x3c52b6.split(':')[0x0];
    const _0x45038c = buildXrayConfig(_0x2fce41, "💦 " + (_0x1c5377 + 0x1) + " - Warp" + _0xf27bc7 + '🇮🇷', false, false, false, false, true);
    const _0x4dc5a7 = buildXrayConfig(_0x2fce41, "💦 " + (_0x1c5377 + 0x1) + " - WoW" + _0xf27bc7 + '🌍', false, false, true, false, true);
    _0x45038c.dns = _0x4dc5a7.dns = await buildXrayDNS(_0x2fce41, [_0x9f72a4], undefined, false, true);
    _0x45038c.routing.rules = buildXrayRoutingRules(_0x2fce41, [_0x9f72a4], false, false, false, true);
    _0x4dc5a7.routing.rules = buildXrayRoutingRules(_0x2fce41, [_0x9f72a4], true, false, false, true);
    const _0x39efe9 = buildXrayWarpOutbound(_0x2fce41, _0x75f8ae, _0x3c52b6, false, _0x374ebc);
    const _0x4f39a4 = buildXrayWarpOutbound(_0x2fce41, _0x75f8ae, _0x3c52b6, true, _0x374ebc);
    _0x45038c.outbounds.unshift(_0x39efe9);
    _0x4dc5a7.outbounds.unshift(_0x4f39a4, _0x39efe9);
    _0x47dbee.push(_0x45038c);
    _0x9aaa24.push(_0x4dc5a7);
    const _0x6ef2b9 = structuredClone(_0x39efe9);
    _0x6ef2b9.tag = "prox-" + (_0x1c5377 + 0x1);
    const _0x2d7c55 = structuredClone(_0x4f39a4);
    _0x2d7c55.tag = "chain-" + (_0x1c5377 + 0x1);
    _0x2d7c55.streamSettings.sockopt.dialerProxy = "prox-" + (_0x1c5377 + 0x1);
    _0x5ccec9.push(_0x6ef2b9);
    _0x245d55.push(_0x2d7c55);
  }
  const _0x1be20f = await buildXrayDNS(_0x2fce41, _0x9c83f5, undefined, false, true);
  const _0xf8e888 = buildXrayConfig(_0x2fce41, "💦 Warp" + _0xf27bc7 + "- Best Ping 🚀", false, true, false, false, true);
  _0xf8e888.dns = _0x1be20f;
  _0xf8e888.routing.rules = buildXrayRoutingRules(_0x2fce41, _0x9c83f5, false, true, false, true);
  _0xf8e888.outbounds.unshift(..._0x5ccec9);
  const _0x65c92f = buildXrayConfig(_0x2fce41, "💦 WoW" + _0xf27bc7 + "- Best Ping 🚀", false, true, true, false, true);
  _0x65c92f.dns = _0x1be20f;
  _0x65c92f.routing.rules = buildXrayRoutingRules(_0x2fce41, _0x9c83f5, true, true, false, true);
  _0x65c92f.outbounds.unshift(..._0x245d55, ..._0x5ccec9);
  const _0x1b8064 = [..._0x47dbee, ..._0x9aaa24, _0xf8e888, _0x65c92f];
  return new Response(JSON.stringify(_0x1b8064, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': 'text/plain;charset=utf-8',
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getXrayWarpConfigs, 'name', {
  'value': 'getXrayWarpConfigs',
  'configurable': true
});
var xrayConfigTemp = {
  'remarks': '',
  'log': {
    'loglevel': "warning"
  },
  'dns': {},
  'inbounds': [{
    'port': 0x2a38,
    'protocol': "socks",
    'settings': {
      'auth': 'noauth',
      'udp': true,
      'userLevel': 0x8
    },
    'sniffing': {
      'destOverride': ["http", "tls"],
      'enabled': true,
      'routeOnly': true
    },
    'tag': "socks-in"
  }, {
    'port': 0x2a39,
    'protocol': "http",
    'settings': {
      'auth': "noauth",
      'udp': true,
      'userLevel': 0x8
    },
    'sniffing': {
      'destOverride': ['http', 'tls'],
      'enabled': true,
      'routeOnly': true
    },
    'tag': 'http-in'
  }, {
    'listen': "127.0.0.1",
    'port': 0x2a65,
    'protocol': "dokodemo-door",
    'settings': {
      'address': "1.1.1.1",
      'network': "tcp,udp",
      'port': 0x35
    },
    'tag': "dns-in"
  }],
  'outbounds': [{
    'tag': "fragment",
    'protocol': "freedom",
    'settings': {
      'fragment': {
        'packets': "tlshello",
        'length': '',
        'interval': ''
      },
      'domainStrategy': 'UseIP'
    },
    'streamSettings': {
      'sockopt': {
        'tcpKeepAliveIdle': 0x1e,
        'tcpNoDelay': true
      }
    }
  }, {
    'protocol': 'dns',
    'tag': 'dns-out'
  }, {
    'protocol': "freedom",
    'settings': {},
    'tag': "direct"
  }, {
    'protocol': "blackhole",
    'settings': {
      'response': {
        'type': "http"
      }
    },
    'tag': 'block'
  }],
  'policy': {
    'levels': {
      0x8: {
        'connIdle': 0x12c,
        'downlinkOnly': 0x1,
        'handshake': 0x4,
        'uplinkOnly': 0x1
      }
    },
    'system': {
      'statsOutboundUplink': true,
      'statsOutboundDownlink': true
    }
  },
  'routing': {
    'domainStrategy': 'IPIfNonMatch',
    'rules': [],
    'balancers': [{
      'tag': "all",
      'selector': ["prox"],
      'strategy': {
        'type': "leastPing"
      }
    }]
  },
  'observatory': {
    'probeInterval': "30s",
    'probeURL': 'https://www.gstatic.com/generate_204',
    'subjectSelector': ["prox"],
    'EnableConcurrency': true
  },
  'stats': {}
};
function buildSingBoxDNS(_0x2ea5bf, _0x7ee9a8, _0x4120b9, _0x5bf045) {
  const {
    remoteDNS: _0x3bf91e,
    localDNS: _0x58f0c5,
    vlessTrojanFakeDNS: _0x116bac,
    enableIPv6: _0x5aad56,
    warpFakeDNS: _0x1acd56,
    warpEnableIPv6: _0x271664,
    bypassIran: _0x4d1a86,
    bypassChina: _0x53c384,
    bypassRussia: _0x504696,
    blockAds: _0x3f7db0,
    blockPorn: _0x278e96,
    customBypassRules: _0x2e5aca,
    customBlockRules: _0x513147
  } = _0x2ea5bf;
  let _0x20ed15;
  const _0x33cc20 = _0x116bac && !_0x4120b9 || _0x1acd56 && _0x4120b9;
  const _0x30043d = _0x5aad56 && !_0x4120b9 || _0x271664 && _0x4120b9;
  const _0x470348 = _0x2e5aca.split(',').filter(_0x2360f2 => isDomain(_0x2360f2));
  const _0x218b6d = _0x513147.split(',').filter(_0x7f9df0 => isDomain(_0x7f9df0));
  const _0x433125 = [{
    'rule': _0x4d1a86,
    'type': 'direct',
    'geosite': "geosite-ir",
    'geoip': 'geoip-ir'
  }, {
    'rule': _0x53c384,
    'type': "direct",
    'geosite': "geosite-cn",
    'geoip': 'geoip-cn'
  }, {
    'rule': _0x504696,
    'type': "direct",
    'geosite': "geosite-category-ru",
    'geoip': 'geoip-ru'
  }, {
    'rule': true,
    'type': 'block',
    'geosite': 'geosite-malware'
  }, {
    'rule': true,
    'type': 'block',
    'geosite': "geosite-phishing"
  }, {
    'rule': true,
    'type': 'block',
    'geosite': 'geosite-cryptominers'
  }, {
    'rule': _0x3f7db0,
    'type': 'block',
    'geosite': "geosite-category-ads-all"
  }, {
    'rule': _0x278e96,
    'type': "block",
    'geosite': "geosite-nsfw"
  }];
  const _0x43547f = [{
    'address': _0x4120b9 ? "1.1.1.1" : _0x3bf91e,
    'address_resolver': "dns-direct",
    'strategy': _0x30043d ? "prefer_ipv4" : "ipv4_only",
    'detour': _0x5bf045,
    'tag': "dns-remote"
  }, {
    'address': _0x58f0c5,
    'strategy': _0x30043d ? "prefer_ipv4" : "ipv4_only",
    'detour': "direct",
    'tag': 'dns-direct'
  }, {
    'address': "rcode://success",
    'tag': "dns-block"
  }];
  let _0xca6c96;
  if (_0x4120b9) {
    _0xca6c96 = {
      'outbound': "any",
      'server': 'dns-direct'
    };
  } else {
    const _0x3f23a0 = _0x7ee9a8.filter(_0x4d9cf3 => isDomain(_0x4d9cf3));
    const _0x540041 = [...new Set(_0x3f23a0)];
    _0xca6c96 = {
      'domain': _0x540041,
      'server': "dns-direct"
    };
  }
  const _0x56f7fc = [_0xca6c96, {
    'clash_mode': "Direct",
    'server': 'dns-direct'
  }, {
    'clash_mode': "Global",
    'server': "dns-remote"
  }];
  let _0x376d03 = {
    'disable_cache': true,
    'rule_set': [],
    'server': "dns-block"
  };
  _0x433125.forEach(({
    rule: _0x22c0f1,
    type: _0x32135b,
    geosite: _0x7fbc9c,
    geoip: _0x2a5bcd
  }) => {
    if (_0x22c0f1 && _0x32135b === "direct") {
      _0x56f7fc.push({
        'type': 'logical',
        'mode': "and",
        'rules': [{
          'rule_set': _0x7fbc9c
        }, {
          'rule_set': _0x2a5bcd
        }],
        'server': "dns-direct"
      });
    }
    if (_0x22c0f1 && _0x32135b === "block") {
      _0x376d03.rule_set.push(_0x7fbc9c);
    }
  });
  _0x56f7fc.push(_0x376d03);
  const _0x2e4f80 = __defProp(_0x2d6e2a => ({
    'domain_suffix': [],
    'server': _0x2d6e2a
  }), 'name', {
    'value': "createRule",
    'configurable': true
  });
  let _0x196bd3;
  let _0x5776a0;
  if (_0x470348.length) {
    _0x196bd3 = _0x2e4f80("dns-direct");
    _0x470348.forEach(_0x53980d => {
      _0x196bd3.domain_suffix.push(_0x53980d);
    });
    _0x56f7fc.push(_0x196bd3);
  }
  if (_0x218b6d.length) {
    _0x5776a0 = _0x2e4f80("dns-block");
    _0x218b6d.forEach(_0x58234d => {
      _0x5776a0.domain_suffix.push(_0x58234d);
    });
    _0x56f7fc.push(_0x5776a0);
  }
  if (_0x33cc20) {
    _0x43547f.push({
      'address': 'fakeip',
      'tag': "dns-fake"
    });
    _0x56f7fc.push({
      'disable_cache': true,
      'inbound': 'tun-in',
      'query_type': ['A', "AAAA"],
      'server': "dns-fake"
    });
    _0x20ed15 = {
      'enabled': true,
      'inet4_range': '198.18.0.0/15'
    };
    if (_0x30043d) {
      _0x20ed15.inet6_range = "fc00::/18";
    }
  }
  return {
    'servers': _0x43547f,
    'rules': _0x56f7fc,
    'fakeip': _0x20ed15
  };
}
__defProp(buildSingBoxDNS, 'name', {
  'value': 'buildSingBoxDNS',
  'configurable': true
});
function buildSingBoxRoutingRules(_0x2dd6f1) {
  const {
    bypassLAN: _0x463e8,
    bypassIran: _0x4434bc,
    bypassChina: _0x2449c3,
    bypassRussia: _0x16c8a8,
    blockAds: _0x5963d0,
    blockPorn: _0x1bdf62,
    blockUDP443: _0x533eb9,
    customBypassRules: _0x1377a8,
    customBlockRules: _0x13fa8f
  } = _0x2dd6f1;
  const _0x43014d = _0x1377a8 ? _0x1377a8.split(',') : [];
  const _0x3c0dac = _0x13fa8f ? _0x13fa8f.split(',') : [];
  const _0x41ba0e = [{
    'type': "logical",
    'mode': 'or',
    'rules': [{
      'inbound': "dns-in"
    }, {
      'network': 'udp',
      'port': 0x35
    }],
    'outbound': "dns-out"
  }, {
    'clash_mode': "Direct",
    'outbound': 'direct'
  }, {
    'clash_mode': "Global",
    'outbound': "✅ Selector"
  }];
  const _0x5a0237 = [{
    'rule': _0x4434bc,
    'type': 'direct',
    'ruleSet': {
      'geosite': 'geosite-ir',
      'geoip': "geoip-ir",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-ir.srs",
      'geoipURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ir.srs'
    }
  }, {
    'rule': _0x2449c3,
    'type': "direct",
    'ruleSet': {
      'geosite': "geosite-cn",
      'geoip': 'geoip-cn',
      'geositeURL': "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-cn.srs",
      'geoipURL': "https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-cn.srs"
    }
  }, {
    'rule': _0x16c8a8,
    'type': "direct",
    'ruleSet': {
      'geosite': "geosite-category-ru",
      'geoip': 'geoip-ru',
      'geositeURL': 'https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-category-ru.srs',
      'geoipURL': 'https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-ru.srs'
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleSet': {
      'geosite': "geosite-malware",
      'geoip': 'geoip-malware',
      'geositeURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-malware.srs',
      'geoipURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-malware.srs"
    }
  }, {
    'rule': true,
    'type': 'block',
    'ruleSet': {
      'geosite': 'geosite-phishing',
      'geoip': 'geoip-phishing',
      'geositeURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-phishing.srs',
      'geoipURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-phishing.srs"
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleSet': {
      'geosite': "geosite-cryptominers",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cryptominers.srs"
    }
  }, {
    'rule': _0x5963d0,
    'type': "block",
    'ruleSet': {
      'geosite': "geosite-category-ads-all",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ads-all.srs"
    }
  }, {
    'rule': _0x1bdf62,
    'type': "block",
    'ruleSet': {
      'geosite': 'geosite-nsfw',
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-nsfw.srs"
    }
  }];
  const _0x2235c2 = [];
  const _0x224009 = [];
  const _0x2b6dbb = [];
  const _0x3253b5 = [];
  const _0x1dfc97 = [];
  if (_0x463e8) {
    _0x224009.push({
      'ip_is_private': true,
      'outbound': "direct"
    });
  }
  const _0x11495f = __defProp((_0x3abd20, _0x37d83d) => ({
    [_0x3abd20]: [],
    'outbound': _0x37d83d
  }), 'name', {
    'value': "createRule",
    'configurable': true
  });
  const _0x3f8e75 = {
    'type': "remote",
    'tag': '',
    'format': 'binary',
    'url': '',
    'download_detour': "direct"
  };
  const _0x2edb4f = _0x11495f("rule_set", "direct");
  ;
  const _0x3b07d9 = _0x11495f("rule_set", 'direct');
  ;
  const _0x56d8a2 = _0x11495f("rule_set", "block");
  const _0x532c96 = _0x11495f("rule_set", 'block');
  _0x5a0237.forEach(({
    rule: _0x197ca0,
    type: _0x51953a,
    ruleSet: _0x21b367
  }) => {
    if (!_0x197ca0) {
      return;
    }
    const {
      geosite: _0x246893,
      geoip: _0x231ef4,
      geositeURL: _0x40e3e6,
      geoipURL: _0x2ac14a
    } = _0x21b367;
    const _0x25c716 = _0x51953a === "direct";
    const _0x365af5 = _0x25c716 ? _0x2edb4f : _0x56d8a2;
    const _0x3143c8 = _0x25c716 ? _0x3b07d9 : _0x532c96;
    _0x365af5.rule_set.push(_0x246893);
    _0x1dfc97.push({
      ..._0x3f8e75,
      'tag': _0x246893,
      'url': _0x40e3e6
    });
    if (_0x231ef4) {
      _0x3143c8.rule_set.push(_0x231ef4);
      _0x1dfc97.push({
        ..._0x3f8e75,
        'tag': _0x231ef4,
        'url': _0x2ac14a
      });
    }
  });
  const _0x2746c7 = __defProp((_0x32e399, _0x4ba4fa) => {
    if (_0x32e399.rule_set?.["length"] || _0x32e399.domain_suffix?.["length"] || _0x32e399.ip_cidr?.["length"]) {
      _0x4ba4fa.push(_0x32e399);
    }
  }, 'name', {
    'value': "pushRuleIfNotEmpty",
    'configurable': true
  });
  _0x2746c7(_0x2edb4f, _0x2235c2);
  _0x2746c7(_0x3b07d9, _0x224009);
  _0x2746c7(_0x56d8a2, _0x2b6dbb);
  _0x2746c7(_0x532c96, _0x3253b5);
  const _0x3c5d4b = __defProp((_0x37f4f5, _0x3621fc) => {
    const _0x210e9e = _0x11495f('domain_suffix', _0x3621fc);
    const _0x552405 = _0x11495f("ip_cidr", _0x3621fc);
    _0x37f4f5.forEach(_0x3862bf => {
      if (isDomain(_0x3862bf)) {
        _0x210e9e.domain_suffix.push(_0x3862bf);
      } else {
        const _0x498848 = isIPv6(_0x3862bf) ? _0x3862bf.replace(/\[|\]/g, '') : _0x3862bf;
        _0x552405.ip_cidr.push(_0x498848);
      }
    });
    _0x2746c7(_0x210e9e, _0x3621fc === "direct" ? _0x2235c2 : _0x2b6dbb);
    _0x2746c7(_0x552405, _0x3621fc === 'direct' ? _0x224009 : _0x3253b5);
  }, 'name', {
    'value': "processRules",
    'configurable': true
  });
  if (_0x43014d.length) {
    _0x3c5d4b(_0x43014d, "direct");
  }
  if (_0x3c0dac.length) {
    _0x3c5d4b(_0x3c0dac, "block");
  }
  const _0x12985d = [..._0x41ba0e, ..._0x2235c2, ..._0x224009, ..._0x2b6dbb, ..._0x3253b5];
  if (_0x533eb9) {
    _0x12985d.push({
      'network': "udp",
      'port': 0x1bb,
      'protocol': "quic",
      'outbound': "block"
    });
  }
  return {
    'rules': _0x12985d,
    'rule_set': _0x1dfc97
  };
}
__defProp(buildSingBoxRoutingRules, 'name', {
  'value': "buildSingBoxRoutingRules",
  'configurable': true
});
function buildSingBoxVLESSOutbound(_0x41ecb5, _0x4fc3ae, _0x135f7d, _0x36e164, _0x373990, _0x4edc5f, _0x2f7c76, _0x148a71) {
  const {
    enableIPv6: _0x106174,
    lengthMin: _0x531c10,
    lengthMax: _0x3526ef,
    intervalMin: _0x35930b,
    intervalMax: _0x90ae11,
    proxyIP: _0x5edd78
  } = _0x41ecb5;
  const _0x5b7511 = '/' + getRandomPath(0x10) + (_0x5edd78 ? '/' + btoa(_0x5edd78) : '');
  const _0x4a1e85 = !!globalThis.defaultHttpsPorts.includes(_0x36e164);
  const _0x1557bf = {
    'type': "vless",
    'server': _0x135f7d,
    'server_port': +_0x36e164,
    'domain_strategy': _0x106174 ? "prefer_ipv4" : "ipv4_only",
    'uuid': globalThis.userID,
    'tls': {
      'alpn': "http/1.1",
      'enabled': true,
      'insecure': _0x2f7c76,
      'server_name': _0x4edc5f,
      'utls': {
        'enabled': true,
        'fingerprint': "randomized"
      }
    },
    'transport': {
      'early_data_header_name': 'Sec-WebSocket-Protocol',
      'max_early_data': 0xa00,
      'headers': {
        'Host': _0x373990
      },
      'path': _0x5b7511,
      'type': 'ws'
    },
    'tag': _0x4fc3ae
  };
  if (!_0x4a1e85) {
    delete _0x1557bf.tls;
  }
  if (_0x148a71) {
    _0x1557bf.tls_fragment = {
      'enabled': true,
      'size': _0x531c10 + '-' + _0x3526ef,
      'sleep': _0x35930b + '-' + _0x90ae11
    };
  }
  return _0x1557bf;
}
__defProp(buildSingBoxVLESSOutbound, 'name', {
  'value': "buildSingBoxVLESSOutbound",
  'configurable': true
});
function buildSingBoxTrojanOutbound(_0x19bebc, _0x456aaf, _0x4c68a5, _0x262d44, _0x5124bc, _0x422ba6, _0x116ee1, _0x25fd12) {
  const {
    enableIPv6: _0x31928d,
    lengthMin: _0x35f551,
    lengthMax: _0x44a63c,
    intervalMin: _0x2048a7,
    intervalMax: _0x437c71,
    proxyIP: _0x57aea5
  } = _0x19bebc;
  const _0x4516ba = "/tr" + getRandomPath(0x10) + (_0x57aea5 ? '/' + btoa(_0x57aea5) : '');
  const _0x48ece8 = !!globalThis.defaultHttpsPorts.includes(_0x262d44);
  const _0x58d3d7 = {
    'type': 'trojan',
    'password': globalThis.trojanPassword,
    'server': _0x4c68a5,
    'server_port': +_0x262d44,
    'domain_strategy': _0x31928d ? 'prefer_ipv4' : "ipv4_only",
    'tls': {
      'alpn': "http/1.1",
      'enabled': true,
      'insecure': _0x116ee1,
      'server_name': _0x422ba6,
      'utls': {
        'enabled': true,
        'fingerprint': "randomized"
      }
    },
    'transport': {
      'early_data_header_name': "Sec-WebSocket-Protocol",
      'max_early_data': 0xa00,
      'headers': {
        'Host': _0x5124bc
      },
      'path': _0x4516ba,
      'type': 'ws'
    },
    'tag': _0x456aaf
  };
  if (!_0x48ece8) {
    delete _0x58d3d7.tls;
  }
  if (_0x25fd12) {
    _0x58d3d7.tls_fragment = {
      'enabled': true,
      'size': _0x35f551 + '-' + _0x44a63c,
      'sleep': _0x2048a7 + '-' + _0x437c71
    };
  }
  return _0x58d3d7;
}
__defProp(buildSingBoxTrojanOutbound, 'name', {
  'value': 'buildSingBoxTrojanOutbound',
  'configurable': true
});
function buildSingBoxWarpOutbound(_0x15556f, _0xdcd5fd, _0x16e29f, _0x51831f, _0x359316, _0x3502e2) {
  const _0x2f338a = /\[(.*?)\]/;
  const _0x12c47f = /[^:]*$/;
  const _0x231589 = _0x51831f.includes('[') ? _0x51831f.match(_0x2f338a)[0x1] : _0x51831f.split(':')[0x0];
  const _0x47e2e1 = _0x51831f.includes('[') ? +_0x51831f.match(_0x12c47f)[0x0] : +_0x51831f.split(':')[0x1];
  const {
    warpEnableIPv6: _0x2e2c45,
    hiddifyNoiseMode: _0x5eb8b1,
    noiseCountMin: _0x1b6752,
    noiseCountMax: _0x10f6f6,
    noiseSizeMin: _0x4d0e20,
    noiseSizeMax: _0x52bf6f,
    noiseDelayMin: _0x1bc8e8,
    noiseDelayMax: _0x3fea48
  } = _0x15556f;
  const {
    warpIPv6: _0x2074b0,
    reserved: _0x4362d0,
    publicKey: _0x26a507,
    privateKey: _0x18caeb
  } = extractWireguardParams(_0xdcd5fd, _0x359316);
  const _0x52621f = {
    'local_address': ["172.16.0.2/32", _0x2074b0],
    'mtu': 0x500,
    'peer_public_key': _0x26a507,
    'private_key': _0x18caeb,
    'reserved': _0x4362d0,
    'server': _0x231589,
    'server_port': _0x47e2e1,
    'domain_strategy': _0x2e2c45 ? "prefer_ipv4" : "ipv4_only",
    'type': "wireguard",
    'detour': _0x359316,
    'tag': _0x16e29f
  };
  if (_0x3502e2 === "hiddify") {
    Object.assign(_0x52621f, {
      'fake_packets_mode': _0x5eb8b1,
      'fake_packets': _0x1b6752 === _0x10f6f6 ? _0x1b6752 : _0x1b6752 + '-' + _0x10f6f6,
      'fake_packets_size': _0x4d0e20 === _0x52bf6f ? _0x4d0e20 : _0x4d0e20 + '-' + _0x52bf6f,
      'fake_packets_delay': _0x1bc8e8 === _0x3fea48 ? _0x1bc8e8 : _0x1bc8e8 + '-' + _0x3fea48
    });
  }
  return _0x52621f;
}
__defProp(buildSingBoxWarpOutbound, 'name', {
  'value': "buildSingBoxWarpOutbound",
  'configurable': true
});
function buildSingBoxChainOutbound(_0x2a7ed9, _0x10c369) {
  if (["socks", 'http'].includes(_0x2a7ed9.protocol)) {
    const {
      protocol: _0x3b18b6,
      server: _0x2af9ab,
      port: _0x686524,
      user: _0x5a024b,
      pass: _0xdeb8a3
    } = _0x2a7ed9;
    const _0x265ea1 = {
      'type': _0x3b18b6,
      'tag': '',
      'server': _0x2af9ab,
      'server_port': +_0x686524,
      'username': _0x5a024b,
      'password': _0xdeb8a3,
      'detour': ''
    };
    if (_0x3b18b6 === "socks") {
      _0x265ea1.version = '5';
    }
    return _0x265ea1;
  }
  const {
    server: _0x4b3c9d,
    port: _0x2fc3d1,
    uuid: _0x56276b,
    flow: _0x538c0e,
    security: _0x1d754c,
    type: _0xf090de,
    sni: _0x26d6da,
    fp: _0x46226a,
    alpn: _0x1c36bd,
    pbk: _0x32a6b3,
    sid: _0x2cf361,
    headerType: _0x3bc831,
    host: _0x1c9d68,
    path: _0x5d9167,
    serviceName: _0x55e19e
  } = _0x2a7ed9;
  const _0x158df1 = {
    'type': "vless",
    'tag': '',
    'server': _0x4b3c9d,
    'server_port': +_0x2fc3d1,
    'domain_strategy': _0x10c369 ? "prefer_ipv4" : 'ipv4_only',
    'uuid': _0x56276b,
    'flow': _0x538c0e,
    'detour': ''
  };
  if (_0x1d754c === "tls" || _0x1d754c === "reality") {
    const _0x4624e1 = _0x1c36bd ? _0x1c36bd?.["split"](',')["filter"](_0x170d76 => _0x170d76 !== 'h2') : [];
    _0x158df1.tls = {
      'enabled': true,
      'server_name': _0x26d6da,
      'insecure': false,
      'alpn': _0x4624e1,
      'utls': {
        'enabled': true,
        'fingerprint': _0x46226a
      }
    };
    if (_0x1d754c === 'reality') {
      _0x158df1.tls.reality = {
        'enabled': true,
        'public_key': _0x32a6b3,
        'short_id': _0x2cf361
      };
      delete _0x158df1.tls.alpn;
    }
  }
  if (_0x3bc831 === "http") {
    const _0x6bc6ab = _0x1c9d68?.["split"](',');
    _0x158df1.transport = {
      'type': 'http',
      'host': _0x6bc6ab,
      'path': _0x5d9167,
      'method': 'GET',
      'headers': {
        'Connection': ["keep-alive"],
        'Content-Type': ["application/octet-stream"]
      }
    };
  }
  if (_0xf090de === 'ws') {
    const _0x27f068 = _0x5d9167?.["split"]('?ed=')[0x0];
    const _0x302076 = +_0x5d9167?.["split"]('?ed=')[0x1] || 0x0;
    _0x158df1.transport = {
      'type': 'ws',
      'path': _0x27f068,
      'headers': {
        'Host': _0x1c9d68
      },
      'max_early_data': _0x302076,
      'early_data_header_name': "Sec-WebSocket-Protocol"
    };
  }
  if (_0xf090de === "grpc") {
    _0x158df1.transport = {
      'type': "grpc",
      'service_name': _0x55e19e
    };
  }
  return _0x158df1;
}
__defProp(buildSingBoxChainOutbound, 'name', {
  'value': "buildSingBoxChainOutbound",
  'configurable': true
});
async function getSingBoxWarpConfig(_0x10c3bc, _0x2cf970, _0xc57c77) {
  const {
    proxySettings: _0x2823b3,
    warpConfigs: _0x1d0144
  } = await getDataset(_0x10c3bc, _0x2cf970);
  const {
    warpEndpoints: _0x260a8f
  } = _0x2823b3;
  const _0x1a91ac = structuredClone(singboxConfigTemp);
  const _0x9050e5 = _0xc57c77 === 'hiddify' ? " Pro " : " ";
  const _0x5c774e = buildSingBoxDNS(_0x2823b3, undefined, true, "💦 Warp" + _0x9050e5 + "- Best Ping 🚀");
  const {
    rules: _0x292da2,
    rule_set: _0x1ec171
  } = buildSingBoxRoutingRules(_0x2823b3);
  _0x1a91ac.dns.servers = _0x5c774e.servers;
  _0x1a91ac.dns.rules = _0x5c774e.rules;
  if (_0x5c774e.fakeip) {
    _0x1a91ac.dns.fakeip = _0x5c774e.fakeip;
  }
  _0x1a91ac.route.rules = _0x292da2;
  _0x1a91ac.route.rule_set = _0x1ec171;
  const _0x45e45e = _0x1a91ac.outbounds[0x0];
  const _0x45c173 = _0x1a91ac.outbounds[0x1];
  _0x45e45e.outbounds = ["💦 Warp" + _0x9050e5 + "- Best Ping 🚀", "💦 WoW" + _0x9050e5 + "- Best Ping 🚀"];
  _0x1a91ac.outbounds.splice(0x2, 0x0, structuredClone(_0x45c173));
  const _0x21eef4 = _0x1a91ac.outbounds[0x2];
  _0x45c173.tag = "💦 Warp" + _0x9050e5 + "- Best Ping 🚀";
  _0x45c173.interval = _0x2823b3.bestWarpInterval + 's';
  _0x21eef4.tag = "💦 WoW" + _0x9050e5 + "- Best Ping 🚀";
  _0x21eef4.interval = _0x2823b3.bestWarpInterval + 's';
  const _0x32dda6 = [];
  const _0x10f275 = [];
  _0x260a8f.split(',').forEach((_0x112ffa, _0x4c06a6) => {
    const _0x5093d2 = "💦 " + (_0x4c06a6 + 0x1) + " - Warp 🇮🇷";
    const _0x49adb0 = "💦 " + (_0x4c06a6 + 0x1) + " - WoW 🌍";
    const _0x4f1512 = buildSingBoxWarpOutbound(_0x2823b3, _0x1d0144, _0x5093d2, _0x112ffa, '', _0xc57c77);
    const _0x253d74 = buildSingBoxWarpOutbound(_0x2823b3, _0x1d0144, _0x49adb0, _0x112ffa, _0x5093d2, _0xc57c77);
    _0x1a91ac.outbounds.push(_0x253d74, _0x4f1512);
    _0x32dda6.push(_0x5093d2);
    _0x10f275.push(_0x49adb0);
    _0x45c173.outbounds.push(_0x5093d2);
    _0x21eef4.outbounds.push(_0x49adb0);
  });
  _0x45e45e.outbounds.push(..._0x32dda6, ..._0x10f275);
  return new Response(JSON.stringify(_0x1a91ac, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getSingBoxWarpConfig, 'name', {
  'value': 'getSingBoxWarpConfig',
  'configurable': true
});
async function getSingBoxCustomConfig(_0xe37d16, _0xa572e2, _0x27975e) {
  const {
    proxySettings: _0x1d9ad9
  } = await getDataset(_0xe37d16, _0xa572e2);
  let _0x44561c;
  const {
    cleanIPs: _0x364b90,
    ports: _0x218d88,
    vlessConfigs: _0x30abde,
    trojanConfigs: _0x561097,
    outProxy: _0x41bcd3,
    outProxyParams: _0x1f95ed,
    customCdnAddrs: _0x30eaaa,
    customCdnHost: _0x275e5c,
    customCdnSni: _0x5e2cf5,
    bestVLESSTrojanInterval: _0xd2fe2e,
    enableIPv6: _0x2715d7
  } = _0x1d9ad9;
  if (_0x41bcd3) {
    const _0x55acda = JSON.parse(_0x1f95ed);
    try {
      _0x44561c = buildSingBoxChainOutbound(_0x55acda, _0x2715d7);
    } catch (_0x18cbb6) {
      console.log("An error occured while parsing chain proxy: ", _0x18cbb6);
      _0x44561c = undefined;
      await _0xa572e2.bpb.put("proxySettings", JSON.stringify({
        ..._0x1d9ad9,
        'outProxy': '',
        'outProxyParams': {}
      }));
    }
  }
  const _0x363895 = await getConfigAddresses(_0x364b90, _0x2715d7);
  const _0x20f754 = _0x30eaaa ? _0x30eaaa.split(',') : [];
  const _0x2b090d = [..._0x363895, ..._0x20f754];
  const _0x1701f1 = structuredClone(singboxConfigTemp);
  const _0x2a5a8c = buildSingBoxDNS(_0x1d9ad9, _0x2b090d, false, _0x44561c ? "proxy-1" : "✅ Selector");
  const {
    rules: _0x683a9e,
    rule_set: _0xf1628
  } = buildSingBoxRoutingRules(_0x1d9ad9);
  _0x1701f1.dns.servers = _0x2a5a8c.servers;
  _0x1701f1.dns.rules = _0x2a5a8c.rules;
  if (_0x2a5a8c.fakeip) {
    _0x1701f1.dns.fakeip = _0x2a5a8c.fakeip;
  }
  _0x1701f1.route.rules = _0x683a9e;
  _0x1701f1.route.rule_set = _0xf1628;
  const _0x4cb69c = _0x1701f1.outbounds[0x0];
  const _0x173fa = _0x1701f1.outbounds[0x1];
  _0x4cb69c.outbounds = ["💦 Best Ping 💥"];
  _0x173fa.interval = _0xd2fe2e + 's';
  _0x173fa.tag = "💦 Best Ping 💥";
  const _0x33a705 = _0x218d88.filter(_0x3709e1 => _0x27975e ? globalThis.defaultHttpsPorts.includes(_0x3709e1) : true);
  let _0x4b0801 = 0x1;
  const _0x1476f2 = [...(_0x30abde ? ["VLESS"] : []), ...(_0x561097 ? ["Trojan"] : [])];
  _0x1476f2.forEach(_0x485c7f => {
    let _0x4e1a3c = 0x1;
    _0x33a705.forEach(_0x38c917 => {
      _0x2b090d.forEach(_0x13d7b2 => {
        let _0x379560;
        let _0x86e426;
        const _0x43c44d = _0x20f754.includes(_0x13d7b2);
        const _0x5af634 = _0x43c44d ? 'C' : _0x27975e ? 'F' : '';
        const _0x4eba55 = _0x43c44d ? _0x5e2cf5 : randomUpperCase(globalThis.hostName);
        const _0x4ac746 = _0x43c44d ? _0x275e5c : globalThis.hostName;
        const _0x1c513b = generateRemark(_0x4e1a3c, _0x38c917, _0x13d7b2, _0x364b90, _0x485c7f, _0x5af634);
        if (_0x485c7f === "VLESS") {
          _0x379560 = buildSingBoxVLESSOutbound(_0x1d9ad9, _0x44561c ? "proxy-" + _0x4b0801 : _0x1c513b, _0x13d7b2, _0x38c917, _0x4ac746, _0x4eba55, _0x43c44d, _0x27975e);
          _0x1701f1.outbounds.push(_0x379560);
        }
        if (_0x485c7f === "Trojan") {
          _0x86e426 = buildSingBoxTrojanOutbound(_0x1d9ad9, _0x44561c ? "proxy-" + _0x4b0801 : _0x1c513b, _0x13d7b2, _0x38c917, _0x4ac746, _0x4eba55, _0x43c44d, _0x27975e);
          _0x1701f1.outbounds.push(_0x86e426);
        }
        if (_0x44561c) {
          const _0x2a388c = structuredClone(_0x44561c);
          _0x2a388c.tag = _0x1c513b;
          _0x2a388c.detour = "proxy-" + _0x4b0801;
          _0x1701f1.outbounds.push(_0x2a388c);
        }
        _0x4cb69c.outbounds.push(_0x1c513b);
        _0x173fa.outbounds.push(_0x1c513b);
        _0x4b0801++;
        _0x4e1a3c++;
      });
    });
  });
  return new Response(JSON.stringify(_0x1701f1, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getSingBoxCustomConfig, 'name', {
  'value': 'getSingBoxCustomConfig',
  'configurable': true
});
var singboxConfigTemp = {
  'log': {
    'level': "warn",
    'timestamp': true
  },
  'dns': {
    'servers': [],
    'rules': [],
    'independent_cache': true
  },
  'inbounds': [{
    'type': "direct",
    'tag': "dns-in",
    'listen': "0.0.0.0",
    'listen_port': 0x1932,
    'override_address': "1.1.1.1",
    'override_port': 0x35
  }, {
    'type': "tun",
    'tag': 'tun-in',
    'address': ["172.18.0.1/28", "fdfe:dcba:9876::1/126"],
    'mtu': 0x2328,
    'auto_route': true,
    'strict_route': true,
    'stack': "mixed",
    'endpoint_independent_nat': true,
    'sniff': true,
    'sniff_override_destination': true
  }, {
    'type': "mixed",
    'tag': "mixed-in",
    'listen': "0.0.0.0",
    'listen_port': 0x820,
    'sniff': true,
    'sniff_override_destination': false
  }],
  'outbounds': [{
    'type': 'selector',
    'tag': "✅ Selector",
    'outbounds': []
  }, {
    'type': "urltest",
    'tag': '',
    'outbounds': [],
    'url': 'https://www.gstatic.com/generate_204',
    'interval': ''
  }, {
    'type': "direct",
    'tag': "direct"
  }, {
    'type': "block",
    'tag': "block"
  }, {
    'type': "dns",
    'tag': "dns-out"
  }],
  'route': {
    'rules': [],
    'rule_set': [],
    'auto_detect_interface': true,
    'override_android_vpn': true,
    'final': "✅ Selector"
  },
  'ntp': {
    'enabled': true,
    'server': "time.apple.com",
    'server_port': 0x7b,
    'detour': "direct",
    'interval': "30m"
  },
  'experimental': {
    'cache_file': {
      'enabled': true,
      'store_fakeip': true
    },
    'clash_api': {
      'external_controller': "127.0.0.1:9090",
      'external_ui': 'ui',
      'external_ui_download_url': "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
      'external_ui_download_detour': 'direct',
      'default_mode': "Rule"
    }
  }
};
async function buildClashDNS(_0x33b557, _0x1695de, _0x3eed52) {
  const {
    remoteDNS: _0x21b288,
    localDNS: _0x17cea9,
    vlessTrojanFakeDNS: _0x4a35c6,
    outProxyParams: _0x407712,
    enableIPv6: _0x5ba9da,
    warpFakeDNS: _0x399983,
    warpEnableIPv6: _0x1e3096,
    bypassIran: _0x2ab061,
    bypassChina: _0x4ce87b,
    bypassRussia: _0x4c315c,
    customBypassRules: _0x2a9001,
    customBlockRules: _0x419f53
  } = _0x33b557;
  const _0x349afc = _0x1e3096 ? ["1.1.1.1", '1.0.0.1', "[2606:4700:4700::1111]", "[2606:4700:4700::1001]"] : ["1.1.1.1", '1.0.0.1'];
  const _0xe13e1a = _0x4a35c6 && !_0x3eed52 || _0x399983 && _0x3eed52;
  const _0x356b93 = _0x5ba9da && !_0x3eed52 || _0x1e3096 && _0x3eed52;
  const _0x2f450f = _0x2a9001.split(',').filter(_0x412519 => isDomain(_0x412519));
  const _0x5006e3 = _0x2ab061 || _0x4ce87b || _0x4c315c;
  const _0x35d8dc = [{
    'rule': _0x2ab061,
    'geosite': 'ir'
  }, {
    'rule': _0x4ce87b,
    'geosite': 'cn'
  }, {
    'rule': _0x4c315c,
    'geosite': 'ru'
  }];
  const _0x48b73a = {
    'enable': true,
    'listen': "0.0.0.0:1053",
    'ipv6': _0x356b93,
    'respect-rules': true,
    'use-hosts': true,
    'use-system-hosts': false,
    'nameserver': _0x3eed52 ? _0x349afc.map(_0x16975e => _0x1695de ? _0x16975e + "#💦 Warp - Best Ping 🚀" : _0x16975e + "#✅ Selector") : [_0x1695de ? _0x21b288 + "#proxy-1" : _0x21b288 + "#✅ Selector"],
    'proxy-server-nameserver': [_0x17cea9 + "#DIRECT"]
  };
  if (_0x1695de && !_0x3eed52) {
    const _0x12506e = JSON.parse(_0x407712).server;
    if (isDomain(_0x12506e)) {
      _0x48b73a['nameserver-policy'] = {
        [_0x12506e]: _0x1695de ? _0x21b288 + '#proxy-1' : _0x21b288 + "#✅ Selector"
      };
    }
  }
  if (_0x5006e3) {
    const _0x1a9c4e = [];
    _0x35d8dc.forEach(({
      rule: _0x3dd58d,
      geosite: _0x4adda6
    }) => {
      if (_0x3dd58d) {
        _0x1a9c4e.push(_0x4adda6);
      }
    });
    _0x48b73a["nameserver-policy"] = {
      ..._0x48b73a["nameserver-policy"],
      ["rule-set:" + _0x1a9c4e.join(',')]: [_0x17cea9 + "#DIRECT"]
    };
  }
  _0x2f450f.forEach(_0x1b7dc3 => {
    _0x48b73a['nameserver-policy'] = {
      ..._0x48b73a['nameserver-policy'],
      ['+.' + _0x1b7dc3]: [_0x17cea9 + "#DIRECT"]
    };
  });
  if (_0xe13e1a) {
    Object.assign(_0x48b73a, {
      'enhanced-mode': "fake-ip",
      'fake-ip-range': "198.18.0.1/16",
      'fake-ip-filter': ['geosite:private']
    });
  }
  return _0x48b73a;
}
__defProp(buildClashDNS, 'name', {
  'value': 'buildClashDNS',
  'configurable': true
});
function buildClashRoutingRules(_0xd90204) {
  const {
    bypassLAN: _0xc4c1c8,
    bypassIran: _0xc61c72,
    bypassChina: _0x2f25bc,
    bypassRussia: _0x2b26da,
    blockAds: _0x3f13d9,
    blockPorn: _0x383a82,
    blockUDP443: _0x5463c4,
    customBypassRules: _0x1881d4,
    customBlockRules: _0x554d7b
  } = _0xd90204;
  const _0x556de4 = _0x1881d4 ? _0x1881d4.split(',') : [];
  const _0x33a788 = _0x554d7b ? _0x554d7b.split(',') : [];
  const _0x36f3d5 = [{
    'rule': _0xc4c1c8,
    'type': "direct",
    'noResolve': true,
    'ruleProvider': {
      'format': "yaml",
      'geosite': "private",
      'geoip': "private-cidr",
      'geositeURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.yaml",
      'geoipURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.yaml"
    }
  }, {
    'rule': _0xc61c72,
    'type': 'direct',
    'ruleProvider': {
      'format': 'text',
      'geosite': 'ir',
      'geoip': "ir-cidr",
      'geositeURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ir.txt',
      'geoipURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ircidr.txt"
    }
  }, {
    'rule': _0x2f25bc,
    'type': "direct",
    'ruleProvider': {
      'format': "yaml",
      'geosite': 'cn',
      'geoip': "cn-cidr",
      'geositeURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml",
      'geoipURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml"
    }
  }, {
    'rule': _0x2b26da,
    'type': "direct",
    'ruleProvider': {
      'format': 'yaml',
      'geosite': 'ru',
      'geoip': 'ru-cidr',
      'geositeURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ru.yaml",
      'geoipURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/ru.yaml"
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleProvider': {
      'format': 'text',
      'geosite': 'malware',
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware.txt"
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleProvider': {
      'format': "text",
      'geosite': "phishing",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing.txt"
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleProvider': {
      'format': "text",
      'geosite': "cryptominers",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/cryptominers.txt"
    }
  }, {
    'rule': _0x3f13d9,
    'type': "block",
    'ruleProvider': {
      'format': "text",
      'geosite': 'ads',
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ads.txt"
    }
  }, {
    'rule': _0x383a82,
    'type': "block",
    'ruleProvider': {
      'format': "text",
      'geosite': "nsfw",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/nsfw.txt"
    }
  }];
  function _0x50aca0(_0x2e715a, _0x2eeb31, _0x2a3253, _0x1bbda4) {
    const _0x4717c8 = _0x2eeb31 === "text" ? "txt" : _0x2eeb31;
    return {
      [_0x2e715a]: {
        'type': "http",
        'format': _0x2eeb31,
        'behavior': _0x2a3253,
        'url': _0x1bbda4,
        'path': "./ruleset/" + _0x2e715a + '.' + _0x4717c8,
        'interval': 0x15180
      }
    };
  }
  __defProp(_0x50aca0, 'name', {
    'value': "buildRuleProvider",
    'configurable': true
  });
  const _0x4f2586 = [];
  const _0x2b6215 = [];
  const _0x44df35 = [];
  const _0x292daa = [];
  const _0x170f0c = {};
  _0x36f3d5.forEach(({
    rule: _0x50ff28,
    type: _0x4e39fb,
    ruleProvider: _0x26a320,
    noResolve: _0x1fe920
  }) => {
    const {
      geosite: _0x14abdc,
      geoip: _0x273841,
      geositeURL: _0x3fffbb,
      geoipURL: _0x31d0ac,
      format: _0x5ee597
    } = _0x26a320;
    if (_0x50ff28) {
      if (_0x14abdc) {
        const _0x52784e = _0x4e39fb === "direct" ? _0x4f2586 : _0x44df35;
        _0x52784e.push("RULE-SET," + _0x14abdc + ',' + (_0x4e39fb === "direct" ? "DIRECT" : 'REJECT'));
        const _0xe63242 = _0x50aca0(_0x14abdc, _0x5ee597, 'domain', _0x3fffbb);
        Object.assign(_0x170f0c, _0xe63242);
      }
      if (_0x273841) {
        const _0xe54dcc = _0x4e39fb === "direct" ? _0x2b6215 : _0x292daa;
        _0xe54dcc.push("RULE-SET," + _0x273841 + ',' + (_0x4e39fb === "direct" ? "DIRECT" : "REJECT") + (_0x1fe920 ? ",no-resolve" : ''));
        const _0x10cc7a = _0x50aca0(_0x273841, _0x5ee597, "ipcidr", _0x31d0ac);
        Object.assign(_0x170f0c, _0x10cc7a);
      }
    }
  });
  const _0x132c1d = __defProp((_0x3f194b, _0xa51cdb) => {
    if (isDomain(_0x3f194b)) {
      return "DOMAIN-SUFFIX," + _0x3f194b + ',' + _0xa51cdb;
    } else {
      const _0x5b4691 = isIPv4(_0x3f194b) ? "IP-CIDR" : "IP-CIDR6";
      const _0x163c91 = isIPv6(_0x3f194b) ? _0x3f194b.replace(/\[|\]/g, '') : _0x3f194b;
      const _0x58ad4a = _0x3f194b.includes('/') ? '' : isIPv4(_0x3f194b) ? "/32" : '/128';
      return _0x5b4691 + ',' + _0x163c91 + _0x58ad4a + ',' + _0xa51cdb + ",no-resolve";
    }
  }, 'name', {
    'value': "generateRule",
    'configurable': true
  });
  [..._0x556de4, ..._0x33a788].forEach((_0x35b126, _0x2290b9) => {
    const _0x496198 = _0x2290b9 < _0x556de4.length;
    const _0x44b429 = _0x496198 ? "DIRECT" : "REJECT";
    const _0x210103 = _0x496198 ? isDomain(_0x35b126) ? _0x4f2586 : _0x2b6215 : isDomain(_0x35b126) ? _0x44df35 : _0x292daa;
    _0x210103.push(_0x132c1d(_0x35b126, _0x44b429));
  });
  const _0x441ddd = [..._0x4f2586, ..._0x2b6215, ..._0x44df35, ..._0x292daa];
  if (_0x5463c4) {
    _0x441ddd.push("AND,((NETWORK,udp),(DST-PORT,443)),REJECT");
  }
  _0x441ddd.push("MATCH,✅ Selector");
  return {
    'rules': _0x441ddd,
    'ruleProviders': _0x170f0c
  };
}
__defProp(buildClashRoutingRules, 'name', {
  'value': "buildClashRoutingRules",
  'configurable': true
});
function buildClashVLESSOutbound(_0x182850, _0x258e3a, _0x3e0039, _0x5ed849, _0xa53d09, _0x5af8e7, _0x3dc30b) {
  const _0x436945 = !!globalThis.defaultHttpsPorts.includes(_0x3e0039);
  const _0x2d6ca3 = isIPv6(_0x258e3a) ? _0x258e3a.replace(/\[|\]/g, '') : _0x258e3a;
  const _0x3bdeaf = {
    'name': _0x182850,
    'type': "vless",
    'server': _0x2d6ca3,
    'port': +_0x3e0039,
    'uuid': globalThis.userID,
    'tls': _0x436945,
    'network': 'ws',
    'udp': true,
    'ws-opts': {
      'path': _0x5af8e7,
      'headers': {
        'host': _0x5ed849
      },
      'max-early-data': 0xa00,
      'early-data-header-name': "Sec-WebSocket-Protocol"
    }
  };
  if (_0x436945) {
    Object.assign(_0x3bdeaf, {
      'servername': _0xa53d09,
      'alpn': ['h2', "http/1.1"],
      'client-fingerprint': "random",
      'skip-cert-verify': _0x3dc30b
    });
  }
  return _0x3bdeaf;
}
__defProp(buildClashVLESSOutbound, 'name', {
  'value': "buildClashVLESSOutbound",
  'configurable': true
});
function buildClashTrojanOutbound(_0x1b5676, _0x212fe8, _0x1093d4, _0x64339c, _0x27f205, _0x2ff8ba, _0x5355be) {
  const _0x386b27 = isIPv6(_0x212fe8) ? _0x212fe8.replace(/\[|\]/g, '') : _0x212fe8;
  return {
    'name': _0x1b5676,
    'type': "trojan",
    'server': _0x386b27,
    'port': +_0x1093d4,
    'password': globalThis.trojanPassword,
    'network': 'ws',
    'udp': true,
    'ws-opts': {
      'path': _0x2ff8ba,
      'headers': {
        'host': _0x64339c
      },
      'max-early-data': 0xa00,
      'early-data-header-name': "Sec-WebSocket-Protocol"
    },
    'sni': _0x27f205,
    'alpn': ['h2', "http/1.1"],
    'client-fingerprint': "random",
    'skip-cert-verify': _0x5355be
  };
}
__defProp(buildClashTrojanOutbound, 'name', {
  'value': "buildClashTrojanOutbound",
  'configurable': true
});
function buildClashWarpOutbound(_0x48d153, _0x22b24b, _0x7cf40f, _0x5e712d) {
  const _0x18017c = /\[(.*?)\]/;
  const _0x5a7090 = /[^:]*$/;
  const _0x5b870a = _0x7cf40f.includes('[') ? _0x7cf40f.match(_0x18017c)[0x1] : _0x7cf40f.split(':')[0x0];
  const _0x38d138 = _0x7cf40f.includes('[') ? +_0x7cf40f.match(_0x5a7090)[0x0] : +_0x7cf40f.split(':')[0x1];
  const {
    warpIPv6: _0x347352,
    reserved: _0x27088a,
    publicKey: _0x1c8e5b,
    privateKey: _0x15cde1
  } = extractWireguardParams(_0x48d153, _0x5e712d);
  return {
    'name': _0x22b24b,
    'type': "wireguard",
    'ip': '172.16.0.2/32',
    'ipv6': _0x347352,
    'private-key': _0x15cde1,
    'server': _0x5b870a,
    'port': _0x38d138,
    'public-key': _0x1c8e5b,
    'allowed-ips': ['0.0.0.0/0', "::/0"],
    'reserved': _0x27088a,
    'udp': true,
    'mtu': 0x500,
    'dialer-proxy': _0x5e712d
  };
}
__defProp(buildClashWarpOutbound, 'name', {
  'value': "buildClashWarpOutbound",
  'configurable': true
});
function buildClashChainOutbound(_0x4e9dfd) {
  if (['socks', "http"].includes(_0x4e9dfd.protocol)) {
    const {
      protocol: _0x28203c,
      server: _0x1b1faa,
      port: _0xcc0557,
      user: _0x474167,
      pass: _0x49e2bf
    } = _0x4e9dfd;
    const _0xe97f3c = _0x28203c === 'socks' ? "socks5" : _0x28203c;
    return {
      'name': '',
      'type': _0xe97f3c,
      'server': _0x1b1faa,
      'port': +_0xcc0557,
      'dialer-proxy': '',
      'username': _0x474167,
      'password': _0x49e2bf
    };
  }
  const {
    server: _0x25a7fb,
    port: _0x565192,
    uuid: _0x1dc010,
    flow: _0x4f4313,
    security: _0xa6ea9,
    type: _0x37c455,
    sni: _0x499de4,
    fp: _0x17091d,
    alpn: _0x3fc771,
    pbk: _0x317680,
    sid: _0x3fe151,
    headerType: _0x385411,
    host: _0x11100d,
    path: _0x4a76b6,
    serviceName: _0x2cbef6
  } = _0x4e9dfd;
  const _0x5eec11 = {
    'name': "💦 Chain Best Ping 💥",
    'type': "vless",
    'server': _0x25a7fb,
    'port': +_0x565192,
    'udp': true,
    'uuid': _0x1dc010,
    'flow': _0x4f4313,
    'network': _0x37c455,
    'dialer-proxy': "💦 Best Ping 💥"
  };
  if (_0xa6ea9 === "tls") {
    const _0x5589bb = _0x3fc771 ? _0x3fc771?.["split"](',') : [];
    Object.assign(_0x5eec11, {
      'tls': true,
      'servername': _0x499de4,
      'alpn': _0x5589bb,
      'client-fingerprint': _0x17091d
    });
  }
  if (_0xa6ea9 === "reality") {
    Object.assign(_0x5eec11, {
      'tls': true,
      'servername': _0x499de4,
      'client-fingerprint': _0x17091d,
      'reality-opts': {
        'public-key': _0x317680,
        'short-id': _0x3fe151
      }
    });
  }
  if (_0x385411 === "http") {
    const _0x5f1e6b = _0x4a76b6?.["split"](',');
    _0x5eec11["http-opts"] = {
      'method': 'GET',
      'path': _0x5f1e6b,
      'headers': {
        'Connection': ["keep-alive"],
        'Content-Type': ["application/octet-stream"]
      }
    };
  }
  if (_0x37c455 === 'ws') {
    const _0x47bdb0 = _0x4a76b6?.["split"]("?ed=")[0x0];
    const _0x395d72 = +_0x4a76b6?.["split"]("?ed=")[0x1];
    _0x5eec11["ws-opts"] = {
      'path': _0x47bdb0,
      'headers': {
        'Host': _0x11100d
      },
      'max-early-data': _0x395d72,
      'early-data-header-name': "Sec-WebSocket-Protocol"
    };
  }
  if (_0x37c455 === "grpc") {
    _0x5eec11['grpc-opts'] = {
      'grpc-service-name': _0x2cbef6
    };
  }
  return _0x5eec11;
}
__defProp(buildClashChainOutbound, 'name', {
  'value': "buildClashChainOutbound",
  'configurable': true
});
async function getClashWarpConfig(_0x52d7b5, _0x1c3710) {
  const {
    proxySettings: _0xebc048,
    warpConfigs: _0x74ce0f
  } = await getDataset(_0x52d7b5, _0x1c3710);
  const {
    warpEndpoints: _0x1f771b
  } = _0xebc048;
  const _0x2ece6c = structuredClone(clashConfigTemp);
  _0x2ece6c.dns = await buildClashDNS(_0xebc048, true, true);
  const {
    rules: _0x5c1c2f,
    ruleProviders: _0x3a5334
  } = buildClashRoutingRules(_0xebc048);
  _0x2ece6c.rules = _0x5c1c2f;
  _0x2ece6c["rule-providers"] = _0x3a5334;
  const _0x1dac83 = _0x2ece6c['proxy-groups'][0x0];
  const _0x8ab1e0 = _0x2ece6c["proxy-groups"][0x1];
  _0x1dac83.proxies = ["💦 Warp - Best Ping 🚀", "💦 WoW - Best Ping 🚀"];
  _0x8ab1e0.name = "💦 Warp - Best Ping 🚀";
  _0x8ab1e0.interval = +_0xebc048.bestWarpInterval;
  _0x2ece6c["proxy-groups"].push(structuredClone(_0x8ab1e0));
  const _0x321f1c = _0x2ece6c["proxy-groups"][0x2];
  _0x321f1c.name = "💦 WoW - Best Ping 🚀";
  let _0xa3f538 = [];
  let _0x5f3d0e = [];
  _0x1f771b.split(',').forEach((_0x54bc77, _0x16c427) => {
    const _0x2405cb = "💦 " + (_0x16c427 + 0x1) + " - Warp 🇮🇷";
    const _0x31ccc9 = "💦 " + (_0x16c427 + 0x1) + " - WoW 🌍";
    const _0x5c1655 = buildClashWarpOutbound(_0x74ce0f, _0x2405cb, _0x54bc77, '');
    const _0x4ff613 = buildClashWarpOutbound(_0x74ce0f, _0x31ccc9, _0x54bc77, _0x2405cb);
    _0x2ece6c.proxies.push(_0x4ff613, _0x5c1655);
    _0xa3f538.push(_0x2405cb);
    _0x5f3d0e.push(_0x31ccc9);
    _0x8ab1e0.proxies.push(_0x2405cb);
    _0x321f1c.proxies.push(_0x31ccc9);
  });
  _0x1dac83.proxies.push(..._0xa3f538, ..._0x5f3d0e);
  return new Response(JSON.stringify(_0x2ece6c, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': 'no-store'
    }
  });
}
__defProp(getClashWarpConfig, 'name', {
  'value': "getClashWarpConfig",
  'configurable': true
});
async function getClashNormalConfig(_0x19095a, _0x4d78b1) {
  const {
    proxySettings: _0x6b3c1a
  } = await getDataset(_0x19095a, _0x4d78b1);
  let _0x125e2b;
  const {
    resolvedRemoteDNS: _0x127af6,
    cleanIPs: _0x501524,
    proxyIP: _0x105ba3,
    ports: _0x30043f,
    vlessConfigs: _0x1f39f4,
    trojanConfigs: _0x5c77de,
    outProxy: _0x593846,
    outProxyParams: _0x419ea9,
    customCdnAddrs: _0x28a95b,
    customCdnHost: _0x5d384c,
    customCdnSni: _0x408268,
    bestVLESSTrojanInterval: _0x126b23,
    enableIPv6: _0x95b3d6
  } = _0x6b3c1a;
  if (_0x593846) {
    const _0x1b2ec3 = JSON.parse(_0x419ea9);
    try {
      _0x125e2b = buildClashChainOutbound(_0x1b2ec3);
    } catch (_0x56a393) {
      console.log("An error occured while parsing chain proxy: ", _0x56a393);
      _0x125e2b = undefined;
      await _0x4d78b1.bpb.put("proxySettings", JSON.stringify({
        ..._0x6b3c1a,
        'outProxy': '',
        'outProxyParams': {}
      }));
    }
  }
  const _0xecf904 = structuredClone(clashConfigTemp);
  if (_0x127af6.server) {
    _0xecf904.hosts = {
      [_0x127af6.server]: _0x127af6.staticIPs
    };
  } else {
    delete _0xecf904.hosts;
  }
  const {
    rules: _0x47e6d5,
    ruleProviders: _0x4e4d34
  } = buildClashRoutingRules(_0x6b3c1a);
  _0xecf904.dns = await buildClashDNS(_0x6b3c1a, _0x125e2b, false);
  _0xecf904.rules = _0x47e6d5;
  _0xecf904["rule-providers"] = _0x4e4d34;
  const _0x37148a = _0xecf904['proxy-groups'][0x0];
  const _0x12ae79 = _0xecf904["proxy-groups"][0x1];
  _0x37148a.proxies = ["💦 Best Ping 💥"];
  _0x12ae79.name = "💦 Best Ping 💥";
  _0x12ae79.interval = +_0x126b23;
  const _0x41ec04 = await getConfigAddresses(_0x501524, _0x95b3d6);
  const _0x3715ee = _0x28a95b ? _0x28a95b.split(',') : [];
  const _0x41a960 = [..._0x41ec04, ..._0x3715ee];
  let _0x178cb3 = 0x1;
  let _0x2c9050;
  const _0x158ac6 = [...(_0x1f39f4 ? ['VLESS'] : []), ...(_0x5c77de ? ["Trojan"] : [])];
  _0x158ac6.forEach(_0x411efe => {
    let _0x1026d7 = 0x1;
    _0x30043f.forEach(_0x444545 => {
      _0x41a960.forEach(_0x10a9e0 => {
        let _0x691e7a;
        let _0x3409a3;
        const _0x3a3479 = _0x3715ee.includes(_0x10a9e0);
        const _0x26a09f = _0x3a3479 ? 'C' : '';
        const _0x5bbbd8 = _0x3a3479 ? _0x408268 : randomUpperCase(globalThis.hostName);
        const _0x3634a8 = _0x3a3479 ? _0x5d384c : globalThis.hostName;
        const _0x2143f7 = generateRemark(_0x1026d7, _0x444545, _0x10a9e0, _0x501524, _0x411efe, _0x26a09f).replace(" : ", " - ");
        if (_0x411efe === "VLESS") {
          _0x2c9050 = '/' + getRandomPath(0x10) + (_0x105ba3 ? '/' + btoa(_0x105ba3) : '');
          _0x691e7a = buildClashVLESSOutbound(_0x125e2b ? "proxy-" + _0x178cb3 : _0x2143f7, _0x10a9e0, _0x444545, _0x3634a8, _0x5bbbd8, _0x2c9050, _0x3a3479);
          _0xecf904.proxies.push(_0x691e7a);
          _0x37148a.proxies.push(_0x2143f7);
          _0x12ae79.proxies.push(_0x2143f7);
        }
        if (_0x411efe === "Trojan" && globalThis.defaultHttpsPorts.includes(_0x444545)) {
          _0x2c9050 = '/tr' + getRandomPath(0x10) + (_0x105ba3 ? '/' + btoa(_0x105ba3) : '');
          _0x3409a3 = buildClashTrojanOutbound(_0x125e2b ? "proxy-" + _0x178cb3 : _0x2143f7, _0x10a9e0, _0x444545, _0x3634a8, _0x5bbbd8, _0x2c9050, _0x3a3479);
          _0xecf904.proxies.push(_0x3409a3);
          _0x37148a.proxies.push(_0x2143f7);
          _0x12ae79.proxies.push(_0x2143f7);
        }
        if (_0x125e2b) {
          let _0x168b81 = structuredClone(_0x125e2b);
          _0x168b81.name = _0x2143f7;
          _0x168b81["dialer-proxy"] = "proxy-" + _0x178cb3;
          _0xecf904.proxies.push(_0x168b81);
        }
        _0x178cb3++;
        _0x1026d7++;
      });
    });
  });
  return new Response(JSON.stringify(_0xecf904, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getClashNormalConfig, 'name', {
  'value': "getClashNormalConfig",
  'configurable': true
});
var clashConfigTemp = {
  'mixed-port': 0x1ed2,
  'ipv6': true,
  'allow-lan': true,
  'mode': "rule",
  'log-level': "warning",
  'disable-keep-alive': false,
  'keep-alive-idle': 0x1e,
  'keep-alive-interval': 0x1e,
  'unified-delay': false,
  'geo-auto-update': true,
  'geo-update-interval': 0xa8,
  'external-controller': "127.0.0.1:9090",
  'external-ui-url': "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
  'external-ui': 'ui',
  'external-controller-cors': {
    'allow-origins': ['*'],
    'allow-private-network': true
  },
  'profile': {
    'store-selected': true,
    'store-fake-ip': true
  },
  'hosts': {},
  'dns': {},
  'tun': {
    'enable': true,
    'stack': "mixed",
    'auto-route': true,
    'strict-route': true,
    'auto-detect-interface': true,
    'dns-hijack': ['any:53'],
    'mtu': 0x2328
  },
  'sniffer': {
    'enable': true,
    'force-dns-mapping': true,
    'parse-pure-ip': true,
    'override-destination': false,
    'sniff': {
      'HTTP': {
        'ports': [0x50, 0x1f90, 0x22b0, 0x804, 0x822, 0x826, 0x82f]
      },
      'TLS': {
        'ports': [0x1bb, 0x20fb, 0x805, 0x823, 0x827, 0x830]
      }
    }
  },
  'proxies': [],
  'proxy-groups': [{
    'name': "✅ Selector",
    'type': "select",
    'proxies': []
  }, {
    'name': '',
    'type': "url-test",
    'url': "https://www.gstatic.com/generate_204",
    'interval': 0x1e,
    'tolerance': 0x32,
    'proxies': []
  }],
  'rule-providers': {},
  'rules': [],
  'ntp': {
    'enable': true,
    'server': 'time.apple.com',
    'port': 0x7b,
    'interval': 0x1e
  }
};
async function getNormalConfigs(_0x3b7538, _0xb70810) {
  const {
    proxySettings: _0x56042f
  } = await getDataset(_0x3b7538, _0xb70810);
  const {
    cleanIPs: _0x2c4cd6,
    proxyIP: _0x254713,
    ports: _0xc73274,
    vlessConfigs: _0x372b59,
    trojanConfigs: _0xf46a0d,
    outProxy: _0xc7bd3c,
    customCdnAddrs: _0x4ad415,
    customCdnHost: _0x54f013,
    customCdnSni: _0x20fd29,
    enableIPv6: _0x44aaa5
  } = _0x56042f;
  let _0x4a0448 = '';
  let _0xc51880 = '';
  let _0x432b8b = '';
  let _0x49d846 = 0x1;
  const _0x11d82a = await getConfigAddresses(_0x2c4cd6, _0x44aaa5);
  const _0x341eb8 = _0x4ad415 ? _0x4ad415.split(',') : [];
  const _0x479345 = [..._0x11d82a, ..._0x341eb8];
  const _0x53dc39 = globalThis.client === "singbox" ? "http/1.1" : "h2,http/1.1";
  const _0x54396b = encodeURIComponent(globalThis.trojanPassword);
  const _0xdc5543 = globalThis.client === "singbox" ? "&eh=Sec-WebSocket-Protocol&ed=2560" : encodeURIComponent("?ed=2560");
  _0xc73274.forEach(_0x52ddb1 => {
    _0x479345.forEach((_0x10797c, _0x3a8b7a) => {
      const _0x354139 = _0x3a8b7a > _0x11d82a.length - 0x1;
      const _0x3da78a = _0x354139 ? 'C' : '';
      const _0x41e688 = _0x354139 ? _0x20fd29 : randomUpperCase(globalThis.hostName);
      const _0x459337 = _0x354139 ? _0x54f013 : globalThis.hostName;
      const _0x596bb8 = '' + getRandomPath(0x10) + (_0x254713 ? '/' + encodeURIComponent(btoa(_0x254713)) : '') + _0xdc5543;
      const _0x8c082d = encodeURIComponent(generateRemark(_0x49d846, _0x52ddb1, _0x10797c, _0x2c4cd6, "VLESS", _0x3da78a));
      const _0x316faf = encodeURIComponent(generateRemark(_0x49d846, _0x52ddb1, _0x10797c, _0x2c4cd6, "Trojan", _0x3da78a));
      const _0x7b5dc0 = globalThis.defaultHttpsPorts.includes(_0x52ddb1) ? "&security=tls&sni=" + _0x41e688 + '&fp=randomized&alpn=' + _0x53dc39 : '&security=none';
      if (_0x372b59) {
        _0x4a0448 += '' + atob("dmxlc3M6Ly8=") + globalThis.userID + '@' + _0x10797c + ':' + _0x52ddb1 + '?path=/' + _0x596bb8 + '&encryption=none&host=' + _0x459337 + "&type=ws" + _0x7b5dc0 + '#' + _0x8c082d + "\n";
      }
      if (_0xf46a0d) {
        _0xc51880 += '' + atob("dHJvamFuOi8v") + _0x54396b + '@' + _0x10797c + ':' + _0x52ddb1 + "?path=/tr" + _0x596bb8 + '&host=' + _0x459337 + '&type=ws' + _0x7b5dc0 + '#' + _0x316faf + "\n";
      }
      _0x49d846++;
    });
  });
  if (_0xc7bd3c) {
    let _0x541a0a = '#' + encodeURIComponent("💦 Chain proxy 🔗");
    if (_0xc7bd3c.startsWith('socks') || _0xc7bd3c.startsWith("http")) {
      const _0x2881a2 = /^(?:socks|http):\/\/([^@]+)@/;
      const _0x410d53 = _0xc7bd3c.match(_0x2881a2);
      const _0x4a1a81 = _0x410d53 ? _0x410d53[0x1] : false;
      _0x432b8b = _0x4a1a81 ? _0xc7bd3c.replace(_0x4a1a81, btoa(_0x4a1a81)) + _0x541a0a : _0xc7bd3c + _0x541a0a;
    } else {
      _0x432b8b = _0xc7bd3c.split('#')[0x0] + _0x541a0a;
    }
  }
  const _0x1ffd8a = btoa(_0x4a0448 + _0xc51880 + _0x432b8b);
  return new Response(_0x1ffd8a, {
    'status': 0xc8,
    'headers': {
      'Content-Type': 'text/plain;charset=utf-8',
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getNormalConfigs, 'name', {
  'value': "getNormalConfigs",
  'configurable': true
});
async function renderSecretsPage() {
  const _0x415b5e = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>User Login</title>\n    <style>\n        :root {\n            --color: black;\n            --primary-color: #09639f;\n            --header-color: #09639f; \n            --background-color: #fff;\n            --form-background-color: #f9f9f9;\n            --lable-text-color: #333;\n            --h2-color: #3b3b3b;\n            --border-color: #ddd;\n            --input-background-color: white;\n            --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        body {\n            font-family: system-ui;\n            background-color: var(--background-color);\n            position: relative;\n            overflow: hidden;\n            text-align: center;\n        }\n        body.dark-mode {\n            --color: white;\n            --primary-color: #09639F;\n            --header-color: #3498DB; \n            --background-color: #121212;\n            --form-background-color: #121212;\n            --lable-text-color: #DFDFDF;\n            --h2-color: #D5D5D5;\n            --border-color: #353535;\n            --input-background-color: #252525;\n            --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        .container {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 90%;\n        }\n        h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); margin: 0 auto 30px; text-shadow: var(--header-shadow); }        \n        h2 { text-align: center; color: var(--h2-color) }\n        strong { color: var(--lable-text-color); }\n        .output-container {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            margin: 15px 0;\n            padding: 10px;\n            background-color: var(--input-background-color);\n            color: var(--lable-text-color);\n            border: 1px solid var(--border-color);\n            border-radius: 5px;\n            font-family: monospace;\n            font-size: 1rem;\n            word-wrap: break-word;\n        }\n        .output { flex: 1; margin-right: 10px; overflow-wrap: break-word; }\n        .copy-icon {\n            cursor: pointer;\n            font-size: 1.2rem;\n            color: var(--primary-color);\n            transition: color 0.2s;\n        }\n        .copy-icon:hover { color: #2980b9; }\n        .form-container {\n            background: var(--form-background-color);\n            border: 1px solid var(--border-color);\n            border-radius: 10px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 20px;\n        }\n        .form-control { margin-bottom: 15px; display: flex; align-items: center; }\n        button {\n            display: block;\n            width: 100%;\n            padding: 10px;\n            font-size: 16px;\n            font-weight: 600;\n            border: none;\n            border-radius: 5px;\n            color: white;\n            background-color: var(--primary-color);\n            cursor: pointer;\n            transition: background-color 0.3s ease;\n        }\n        .button:hover,\n        button:focus {\n            background-color: #2980b9;\n            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n            transform: translateY(-2px);\n        }\n        button.button:hover { color: white; }\n        .button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n        @media only screen and (min-width: 768px) {\n            .container { width: 40%; }\n        }\n    </style>\n    </head>\n    <body>\n        <div class=\"container\">\n            <h1>BPB Panel <span style=\"font-size: smaller;\">" + globalThis.panelVersion + "</span> 💦</h1>\n            <div class=\"form-container\">\n                <h2>Secrets generator</h2>\n                <div>\n                    <strong>Random UUID</strong>\n                    <div class=\"output-container\">\n                        <span id=\"uuid\" class=\"output\"></span>\n                        <span class=\"copy-icon\" onclick=\"copyToClipboard('uuid')\">📋</span>\n                    </div>\n                </div>\n                <div>\n                    <strong>Random Trojan Password</strong>\n                    <div class=\"output-container\">\n                        <span id=\"trojan-password\" class=\"output\"></span>\n                        <span class=\"copy-icon\" onclick=\"copyToClipboard('trojan-password')\">📋</span>\n                    </div>\n                </div>\n                <button class=\"button\" onclick=\"generateCredentials()\">Generate Again ♻️</button>\n            </div>\n        </div>\n        <script>\n            localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n            function generateUUID() {\n                return crypto.randomUUID();\n            }\n    \n            function generateStrongPassword() {\n                const charset =\n                    \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?\";\n                let password = '';\n                const randomValues = new Uint8Array(16);\n                crypto.getRandomValues(randomValues);\n    \n                for (let i = 0; i < 16; i++) {\n                    password += charset[randomValues[i] % charset.length];\n                }\n                return password;\n            }\n    \n            function generateCredentials() {\n                const uuid = generateUUID();\n                const password = generateStrongPassword();\n    \n                document.getElementById('uuid').textContent = uuid;\n                document.getElementById('trojan-password').textContent = password;\n            }\n    \n            function copyToClipboard(elementId) {\n                const textToCopy = document.getElementById(elementId).textContent;\n                navigator.clipboard.writeText(textToCopy)\n                    .then(() => alert('✅ Copied to clipboard!'))\n                    .catch(err => console.error('Failed to copy text:', err));\n            }\n    \n            generateCredentials();\n        </script>\n    </body>\n    </html>";
  return new Response(_0x415b5e, {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/html"
    }
  });
}
__defProp(renderSecretsPage, 'name', {
  'value': 'renderSecretsPage',
  'configurable': true
});
var worker_default = {
  async 'fetch'(_0x3fd1ef, _0x2a94cd) {
    try {
      initializeParams(_0x3fd1ef, _0x2a94cd);
      const _0x23824e = _0x3fd1ef.headers.get("Upgrade");
      if (!_0x23824e || _0x23824e !== "websocket") {
        switch (globalThis.pathName) {
          case '/update-warp':
            return await updateWarpConfigs(_0x3fd1ef, _0x2a94cd);
          case "/sub/" + globalThis.userID:
            if (globalThis.client === "sfa") {
              return await getSingBoxCustomConfig(_0x3fd1ef, _0x2a94cd, false);
            }
            if (globalThis.client === "clash") {
              return await getClashNormalConfig(_0x3fd1ef, _0x2a94cd);
            }
            if (globalThis.client === "xray") {
              return await getXrayCustomConfigs(_0x3fd1ef, _0x2a94cd, false);
            }
            return await getNormalConfigs(_0x3fd1ef, _0x2a94cd);
          case "/fragsub/" + globalThis.userID:
            return globalThis.client === "hiddify" ? await getSingBoxCustomConfig(_0x3fd1ef, _0x2a94cd, true) : await getXrayCustomConfigs(_0x3fd1ef, _0x2a94cd, true);
          case '/warpsub/' + globalThis.userID:
            if (globalThis.client === "clash") {
              return await getClashWarpConfig(_0x3fd1ef, _0x2a94cd);
            }
            if (globalThis.client === "singbox" || globalThis.client === "hiddify") {
              return await getSingBoxWarpConfig(_0x3fd1ef, _0x2a94cd, globalThis.client);
            }
            return await getXrayWarpConfigs(_0x3fd1ef, _0x2a94cd, globalThis.client);
          case "/panel":
            return await handlePanel(_0x3fd1ef, _0x2a94cd);
          case '/login':
            return await login(_0x3fd1ef, _0x2a94cd);
          case '/logout':
            return new Response("Success", {
              'status': 0xc8,
              'headers': {
                'Set-Cookie': "jwtToken=; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
                'Content-Type': "text/plain"
              }
            });
          case "/panel/password":
            return await resetPassword(_0x3fd1ef, _0x2a94cd);
          case "/my-ip":
            return await getMyIP(_0x3fd1ef);
          case "/secrets":
            return await renderSecretsPage();
          default:
            return await fallback(_0x3fd1ef);
        }
      } else {
        return globalThis.pathName.startsWith('/tr') ? await trojanOverWSHandler(_0x3fd1ef) : await vlessOverWSHandler(_0x3fd1ef);
      }
    } catch (_0x269231) {
      return await renderErrorPage(_0x269231);
    }
  }
};
export { worker_default as default };
