var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (_0xb0c746, _0x45ded6) => __defProp(_0xb0c746, "name", {
  'value': _0x45ded6,
  'configurable': true
});
var __require = (_0xcfbaf5 => typeof require !== 'undefined' ? require : typeof Proxy !== "undefined" ? new Proxy(_0xcfbaf5, {
  'get': (_0x15cd28, _0x2315b0) => (typeof require !== "undefined" ? require : _0x15cd28)[_0x2315b0]
}) : _0xcfbaf5)(function (_0x429fcf) {
  if (typeof require !== "undefined") {
    return require.apply(this, arguments);
  }
  throw new Error("Dynamic require of \"" + _0x429fcf + "\" is not supported");
});
var __commonJS = (_0xfcf02e, _0x174cc7) => function _0x1b1387() {
  if (!_0x174cc7) {
    0x0;
    _0xfcf02e[__getOwnPropNames(_0xfcf02e)[0x0]]((_0x174cc7 = {
      'exports': {}
    }).exports, _0x174cc7);
  }
  return _0x174cc7.exports;
};
var __copyProps = (_0x3eb868, _0x4888b3, _0x3d58da, _0x2e62ae) => {
  if (_0x4888b3 && typeof _0x4888b3 === "object" || typeof _0x4888b3 === "function") {
    for (let _0x595708 of __getOwnPropNames(_0x4888b3)) if (!__hasOwnProp.call(_0x3eb868, _0x595708) && _0x595708 !== _0x3d58da) {
      __defProp(_0x3eb868, _0x595708, {
        'get': () => _0x4888b3[_0x595708],
        'enumerable': !(_0x2e62ae = __getOwnPropDesc(_0x4888b3, _0x595708)) || _0x2e62ae.enumerable
      });
    }
  }
  return _0x3eb868;
};
var __toESM = (_0x47ab41, _0x4e1ee4, _0x46c00c) => (_0x46c00c = _0x47ab41 != null ? __create(__getProtoOf(_0x47ab41)) : {}, __copyProps(_0x4e1ee4 || !_0x47ab41 || !_0x47ab41.__esModule ? __defProp(_0x46c00c, "default", {
  'value': _0x47ab41,
  'enumerable': true
}) : _0x46c00c, _0x47ab41));
var require_crypto = __commonJS({
  '(disabled):crypto'() {}
});
var require_nacl_fast = __commonJS({
  'node_modules/tweetnacl/nacl-fast.js'(_0x2a99f9, _0x24ac8d) {
    (function (_0x435478) {
      'use strict';

      var _0xa7b002 = __defProp(function (_0x4454e8) {
        var _0x40605b;
        var _0x580cc4 = new Float64Array(0x10);
        if (_0x4454e8) {
          for (_0x40605b = 0x0; _0x40605b < _0x4454e8.length; _0x40605b++) {
            _0x580cc4[_0x40605b] = _0x4454e8[_0x40605b];
          }
        }
        return _0x580cc4;
      }, "name", {
        'value': 'gf',
        'configurable': true
      });
      var _0x19202a = __defProp(function () {
        throw new Error("no PRNG");
      }, "name", {
        'value': 'randombytes',
        'configurable': true
      });
      var _0x36ad7e = new Uint8Array(0x10);
      var _0x27d00d = new Uint8Array(0x20);
      _0x27d00d[0x0] = 0x9;
      var _0x14b3e9 = _0xa7b002();
      var _0x35bf8b = _0xa7b002([0x1]);
      var _0x88af0b = _0xa7b002([0xdb41, 0x1]);
      var _0x5984fa = _0xa7b002([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0xa4d, 0x70, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]);
      var _0x554702 = _0xa7b002([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0xe0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]);
      var _0x4044c = _0xa7b002([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]);
      var _0x38f9b0 = _0xa7b002([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]);
      var _0x2f44f6 = _0xa7b002([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x99, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);
      function _0x46c6a9(_0x50a660, _0x302904, _0x103279, _0x5eaa47) {
        _0x50a660[_0x302904] = _0x103279 >> 0x18 & 0xff;
        _0x50a660[_0x302904 + 0x1] = _0x103279 >> 0x10 & 0xff;
        _0x50a660[_0x302904 + 0x2] = _0x103279 >> 0x8 & 0xff;
        _0x50a660[_0x302904 + 0x3] = _0x103279 & 0xff;
        _0x50a660[_0x302904 + 0x4] = _0x5eaa47 >> 0x18 & 0xff;
        _0x50a660[_0x302904 + 0x5] = _0x5eaa47 >> 0x10 & 0xff;
        _0x50a660[_0x302904 + 0x6] = _0x5eaa47 >> 0x8 & 0xff;
        _0x50a660[_0x302904 + 0x7] = _0x5eaa47 & 0xff;
      }
      __defProp(_0x46c6a9, "name", {
        'value': "ts64",
        'configurable': true
      });
      function _0x17aafa(_0x595ba7, _0x5ae788, _0x3485e0, _0x39773a, _0x22c183) {
        var _0x5c550f;
        var _0x300de4 = 0x0;
        for (_0x5c550f = 0x0; _0x5c550f < _0x22c183; _0x5c550f++) {
          _0x300de4 |= _0x595ba7[_0x5ae788 + _0x5c550f] ^ _0x3485e0[_0x39773a + _0x5c550f];
        }
        return (0x1 & _0x300de4 - 0x1 >>> 0x8) - 0x1;
      }
      __defProp(_0x17aafa, "name", {
        'value': 'vn',
        'configurable': true
      });
      function _0x4abc44(_0x4720a6, _0x3d0106, _0x349ead, _0x21d670) {
        return _0x17aafa(_0x4720a6, _0x3d0106, _0x349ead, _0x21d670, 0x10);
      }
      __defProp(_0x4abc44, "name", {
        'value': "crypto_verify_16",
        'configurable': true
      });
      function _0x383e43(_0x206b9d, _0x4d9231, _0x4fd217, _0x32eb39) {
        return _0x17aafa(_0x206b9d, _0x4d9231, _0x4fd217, _0x32eb39, 0x20);
      }
      __defProp(_0x383e43, "name", {
        'value': 'crypto_verify_32',
        'configurable': true
      });
      function _0x187a59(_0x4eed0d, _0x366145, _0x13419a, _0x3c08e3) {
        var _0x15a6ff = _0x3c08e3[0x0] & 0xff | (_0x3c08e3[0x1] & 0xff) << 0x8 | (_0x3c08e3[0x2] & 0xff) << 0x10 | (_0x3c08e3[0x3] & 0xff) << 0x18;
        var _0x38af03 = _0x13419a[0x0] & 0xff | (_0x13419a[0x1] & 0xff) << 0x8 | (_0x13419a[0x2] & 0xff) << 0x10 | (_0x13419a[0x3] & 0xff) << 0x18;
        var _0x12664a = _0x13419a[0x4] & 0xff | (_0x13419a[0x5] & 0xff) << 0x8 | (_0x13419a[0x6] & 0xff) << 0x10 | (_0x13419a[0x7] & 0xff) << 0x18;
        var _0x2af025 = _0x13419a[0x8] & 0xff | (_0x13419a[0x9] & 0xff) << 0x8 | (_0x13419a[0xa] & 0xff) << 0x10 | (_0x13419a[0xb] & 0xff) << 0x18;
        var _0x54680f = _0x13419a[0xc] & 0xff | (_0x13419a[0xd] & 0xff) << 0x8 | (_0x13419a[0xe] & 0xff) << 0x10 | (_0x13419a[0xf] & 0xff) << 0x18;
        var _0x324114 = _0x3c08e3[0x4] & 0xff | (_0x3c08e3[0x5] & 0xff) << 0x8 | (_0x3c08e3[0x6] & 0xff) << 0x10 | (_0x3c08e3[0x7] & 0xff) << 0x18;
        var _0x2ae601 = _0x366145[0x0] & 0xff | (_0x366145[0x1] & 0xff) << 0x8 | (_0x366145[0x2] & 0xff) << 0x10 | (_0x366145[0x3] & 0xff) << 0x18;
        var _0x534440 = _0x366145[0x4] & 0xff | (_0x366145[0x5] & 0xff) << 0x8 | (_0x366145[0x6] & 0xff) << 0x10 | (_0x366145[0x7] & 0xff) << 0x18;
        var _0x1cf1b1 = _0x366145[0x8] & 0xff | (_0x366145[0x9] & 0xff) << 0x8 | (_0x366145[0xa] & 0xff) << 0x10 | (_0x366145[0xb] & 0xff) << 0x18;
        var _0x3582d2 = _0x366145[0xc] & 0xff | (_0x366145[0xd] & 0xff) << 0x8 | (_0x366145[0xe] & 0xff) << 0x10 | (_0x366145[0xf] & 0xff) << 0x18;
        var _0x1a68e1 = _0x3c08e3[0x8] & 0xff | (_0x3c08e3[0x9] & 0xff) << 0x8 | (_0x3c08e3[0xa] & 0xff) << 0x10 | (_0x3c08e3[0xb] & 0xff) << 0x18;
        var _0x377554 = _0x13419a[0x10] & 0xff | (_0x13419a[0x11] & 0xff) << 0x8 | (_0x13419a[0x12] & 0xff) << 0x10 | (_0x13419a[0x13] & 0xff) << 0x18;
        var _0x142e29 = _0x13419a[0x14] & 0xff | (_0x13419a[0x15] & 0xff) << 0x8 | (_0x13419a[0x16] & 0xff) << 0x10 | (_0x13419a[0x17] & 0xff) << 0x18;
        var _0x438f27 = _0x13419a[0x18] & 0xff | (_0x13419a[0x19] & 0xff) << 0x8 | (_0x13419a[0x1a] & 0xff) << 0x10 | (_0x13419a[0x1b] & 0xff) << 0x18;
        var _0xc09e44 = _0x13419a[0x1c] & 0xff | (_0x13419a[0x1d] & 0xff) << 0x8 | (_0x13419a[0x1e] & 0xff) << 0x10 | (_0x13419a[0x1f] & 0xff) << 0x18;
        var _0x1d5943 = _0x3c08e3[0xc] & 0xff | (_0x3c08e3[0xd] & 0xff) << 0x8 | (_0x3c08e3[0xe] & 0xff) << 0x10 | (_0x3c08e3[0xf] & 0xff) << 0x18;
        var _0x3e34bb = _0x15a6ff;
        var _0x2da0bd = _0x38af03;
        var _0x415c51 = _0x12664a;
        var _0x337c20 = _0x2af025;
        var _0x5ea5d1 = _0x54680f;
        var _0x4de82f = _0x324114;
        var _0x5aecd1 = _0x2ae601;
        var _0x313d64 = _0x534440;
        var _0x32145e = _0x1cf1b1;
        var _0x5763da = _0x3582d2;
        var _0x50a023 = _0x1a68e1;
        var _0x4cc892 = _0x377554;
        var _0x48b43b = _0x142e29;
        var _0x4fd15c = _0x438f27;
        var _0x2a8714 = _0xc09e44;
        var _0x5b3a5b = _0x1d5943;
        var _0x2f4d84;
        for (var _0x28d65c = 0x0; _0x28d65c < 0x14; _0x28d65c += 0x2) {
          _0x2f4d84 = _0x3e34bb + _0x48b43b | 0x0;
          _0x5ea5d1 ^= _0x2f4d84 << 0x7 | _0x2f4d84 >>> 25;
          _0x2f4d84 = _0x5ea5d1 + _0x3e34bb | 0x0;
          _0x32145e ^= _0x2f4d84 << 0x9 | _0x2f4d84 >>> 23;
          _0x2f4d84 = _0x32145e + _0x5ea5d1 | 0x0;
          _0x48b43b ^= _0x2f4d84 << 0xd | _0x2f4d84 >>> 19;
          _0x2f4d84 = _0x48b43b + _0x32145e | 0x0;
          _0x3e34bb ^= _0x2f4d84 << 0x12 | _0x2f4d84 >>> 14;
          _0x2f4d84 = _0x4de82f + _0x2da0bd | 0x0;
          _0x5763da ^= _0x2f4d84 << 0x7 | _0x2f4d84 >>> 25;
          _0x2f4d84 = _0x5763da + _0x4de82f | 0x0;
          _0x4fd15c ^= _0x2f4d84 << 0x9 | _0x2f4d84 >>> 23;
          _0x2f4d84 = _0x4fd15c + _0x5763da | 0x0;
          _0x2da0bd ^= _0x2f4d84 << 0xd | _0x2f4d84 >>> 19;
          _0x2f4d84 = _0x2da0bd + _0x4fd15c | 0x0;
          _0x4de82f ^= _0x2f4d84 << 0x12 | _0x2f4d84 >>> 14;
          _0x2f4d84 = _0x50a023 + _0x5aecd1 | 0x0;
          _0x2a8714 ^= _0x2f4d84 << 0x7 | _0x2f4d84 >>> 25;
          _0x2f4d84 = _0x2a8714 + _0x50a023 | 0x0;
          _0x415c51 ^= _0x2f4d84 << 0x9 | _0x2f4d84 >>> 23;
          _0x2f4d84 = _0x415c51 + _0x2a8714 | 0x0;
          _0x5aecd1 ^= _0x2f4d84 << 0xd | _0x2f4d84 >>> 19;
          _0x2f4d84 = _0x5aecd1 + _0x415c51 | 0x0;
          _0x50a023 ^= _0x2f4d84 << 0x12 | _0x2f4d84 >>> 14;
          _0x2f4d84 = _0x5b3a5b + _0x4cc892 | 0x0;
          _0x337c20 ^= _0x2f4d84 << 0x7 | _0x2f4d84 >>> 25;
          _0x2f4d84 = _0x337c20 + _0x5b3a5b | 0x0;
          _0x313d64 ^= _0x2f4d84 << 0x9 | _0x2f4d84 >>> 23;
          _0x2f4d84 = _0x313d64 + _0x337c20 | 0x0;
          _0x4cc892 ^= _0x2f4d84 << 0xd | _0x2f4d84 >>> 19;
          _0x2f4d84 = _0x4cc892 + _0x313d64 | 0x0;
          _0x5b3a5b ^= _0x2f4d84 << 0x12 | _0x2f4d84 >>> 14;
          _0x2f4d84 = _0x3e34bb + _0x337c20 | 0x0;
          _0x2da0bd ^= _0x2f4d84 << 0x7 | _0x2f4d84 >>> 25;
          _0x2f4d84 = _0x2da0bd + _0x3e34bb | 0x0;
          _0x415c51 ^= _0x2f4d84 << 0x9 | _0x2f4d84 >>> 23;
          _0x2f4d84 = _0x415c51 + _0x2da0bd | 0x0;
          _0x337c20 ^= _0x2f4d84 << 0xd | _0x2f4d84 >>> 19;
          _0x2f4d84 = _0x337c20 + _0x415c51 | 0x0;
          _0x3e34bb ^= _0x2f4d84 << 0x12 | _0x2f4d84 >>> 14;
          _0x2f4d84 = _0x4de82f + _0x5ea5d1 | 0x0;
          _0x5aecd1 ^= _0x2f4d84 << 0x7 | _0x2f4d84 >>> 25;
          _0x2f4d84 = _0x5aecd1 + _0x4de82f | 0x0;
          _0x313d64 ^= _0x2f4d84 << 0x9 | _0x2f4d84 >>> 23;
          _0x2f4d84 = _0x313d64 + _0x5aecd1 | 0x0;
          _0x5ea5d1 ^= _0x2f4d84 << 0xd | _0x2f4d84 >>> 19;
          _0x2f4d84 = _0x5ea5d1 + _0x313d64 | 0x0;
          _0x4de82f ^= _0x2f4d84 << 0x12 | _0x2f4d84 >>> 14;
          _0x2f4d84 = _0x50a023 + _0x5763da | 0x0;
          _0x4cc892 ^= _0x2f4d84 << 0x7 | _0x2f4d84 >>> 25;
          _0x2f4d84 = _0x4cc892 + _0x50a023 | 0x0;
          _0x32145e ^= _0x2f4d84 << 0x9 | _0x2f4d84 >>> 23;
          _0x2f4d84 = _0x32145e + _0x4cc892 | 0x0;
          _0x5763da ^= _0x2f4d84 << 0xd | _0x2f4d84 >>> 19;
          _0x2f4d84 = _0x5763da + _0x32145e | 0x0;
          _0x50a023 ^= _0x2f4d84 << 0x12 | _0x2f4d84 >>> 14;
          _0x2f4d84 = _0x5b3a5b + _0x2a8714 | 0x0;
          _0x48b43b ^= _0x2f4d84 << 0x7 | _0x2f4d84 >>> 25;
          _0x2f4d84 = _0x48b43b + _0x5b3a5b | 0x0;
          _0x4fd15c ^= _0x2f4d84 << 0x9 | _0x2f4d84 >>> 23;
          _0x2f4d84 = _0x4fd15c + _0x48b43b | 0x0;
          _0x2a8714 ^= _0x2f4d84 << 0xd | _0x2f4d84 >>> 19;
          _0x2f4d84 = _0x2a8714 + _0x4fd15c | 0x0;
          _0x5b3a5b ^= _0x2f4d84 << 0x12 | _0x2f4d84 >>> 14;
        }
        _0x3e34bb = _0x3e34bb + _0x15a6ff | 0x0;
        _0x2da0bd = _0x2da0bd + _0x38af03 | 0x0;
        _0x415c51 = _0x415c51 + _0x12664a | 0x0;
        _0x337c20 = _0x337c20 + _0x2af025 | 0x0;
        _0x5ea5d1 = _0x5ea5d1 + _0x54680f | 0x0;
        _0x4de82f = _0x4de82f + _0x324114 | 0x0;
        _0x5aecd1 = _0x5aecd1 + _0x2ae601 | 0x0;
        _0x313d64 = _0x313d64 + _0x534440 | 0x0;
        _0x32145e = _0x32145e + _0x1cf1b1 | 0x0;
        _0x5763da = _0x5763da + _0x3582d2 | 0x0;
        _0x50a023 = _0x50a023 + _0x1a68e1 | 0x0;
        _0x4cc892 = _0x4cc892 + _0x377554 | 0x0;
        _0x48b43b = _0x48b43b + _0x142e29 | 0x0;
        _0x4fd15c = _0x4fd15c + _0x438f27 | 0x0;
        _0x2a8714 = _0x2a8714 + _0xc09e44 | 0x0;
        _0x5b3a5b = _0x5b3a5b + _0x1d5943 | 0x0;
        _0x4eed0d[0x0] = _0x3e34bb >>> 0x0 & 0xff;
        _0x4eed0d[0x1] = _0x3e34bb >>> 0x8 & 0xff;
        _0x4eed0d[0x2] = _0x3e34bb >>> 0x10 & 0xff;
        _0x4eed0d[0x3] = _0x3e34bb >>> 0x18 & 0xff;
        _0x4eed0d[0x4] = _0x2da0bd >>> 0x0 & 0xff;
        _0x4eed0d[0x5] = _0x2da0bd >>> 0x8 & 0xff;
        _0x4eed0d[0x6] = _0x2da0bd >>> 0x10 & 0xff;
        _0x4eed0d[0x7] = _0x2da0bd >>> 0x18 & 0xff;
        _0x4eed0d[0x8] = _0x415c51 >>> 0x0 & 0xff;
        _0x4eed0d[0x9] = _0x415c51 >>> 0x8 & 0xff;
        _0x4eed0d[0xa] = _0x415c51 >>> 0x10 & 0xff;
        _0x4eed0d[0xb] = _0x415c51 >>> 0x18 & 0xff;
        _0x4eed0d[0xc] = _0x337c20 >>> 0x0 & 0xff;
        _0x4eed0d[0xd] = _0x337c20 >>> 0x8 & 0xff;
        _0x4eed0d[0xe] = _0x337c20 >>> 0x10 & 0xff;
        _0x4eed0d[0xf] = _0x337c20 >>> 0x18 & 0xff;
        _0x4eed0d[0x10] = _0x5ea5d1 >>> 0x0 & 0xff;
        _0x4eed0d[0x11] = _0x5ea5d1 >>> 0x8 & 0xff;
        _0x4eed0d[0x12] = _0x5ea5d1 >>> 0x10 & 0xff;
        _0x4eed0d[0x13] = _0x5ea5d1 >>> 0x18 & 0xff;
        _0x4eed0d[0x14] = _0x4de82f >>> 0x0 & 0xff;
        _0x4eed0d[0x15] = _0x4de82f >>> 0x8 & 0xff;
        _0x4eed0d[0x16] = _0x4de82f >>> 0x10 & 0xff;
        _0x4eed0d[0x17] = _0x4de82f >>> 0x18 & 0xff;
        _0x4eed0d[0x18] = _0x5aecd1 >>> 0x0 & 0xff;
        _0x4eed0d[0x19] = _0x5aecd1 >>> 0x8 & 0xff;
        _0x4eed0d[0x1a] = _0x5aecd1 >>> 0x10 & 0xff;
        _0x4eed0d[0x1b] = _0x5aecd1 >>> 0x18 & 0xff;
        _0x4eed0d[0x1c] = _0x313d64 >>> 0x0 & 0xff;
        _0x4eed0d[0x1d] = _0x313d64 >>> 0x8 & 0xff;
        _0x4eed0d[0x1e] = _0x313d64 >>> 0x10 & 0xff;
        _0x4eed0d[0x1f] = _0x313d64 >>> 0x18 & 0xff;
        _0x4eed0d[0x20] = _0x32145e >>> 0x0 & 0xff;
        _0x4eed0d[0x21] = _0x32145e >>> 0x8 & 0xff;
        _0x4eed0d[0x22] = _0x32145e >>> 0x10 & 0xff;
        _0x4eed0d[0x23] = _0x32145e >>> 0x18 & 0xff;
        _0x4eed0d[0x24] = _0x5763da >>> 0x0 & 0xff;
        _0x4eed0d[0x25] = _0x5763da >>> 0x8 & 0xff;
        _0x4eed0d[0x26] = _0x5763da >>> 0x10 & 0xff;
        _0x4eed0d[0x27] = _0x5763da >>> 0x18 & 0xff;
        _0x4eed0d[0x28] = _0x50a023 >>> 0x0 & 0xff;
        _0x4eed0d[0x29] = _0x50a023 >>> 0x8 & 0xff;
        _0x4eed0d[0x2a] = _0x50a023 >>> 0x10 & 0xff;
        _0x4eed0d[0x2b] = _0x50a023 >>> 0x18 & 0xff;
        _0x4eed0d[0x2c] = _0x4cc892 >>> 0x0 & 0xff;
        _0x4eed0d[0x2d] = _0x4cc892 >>> 0x8 & 0xff;
        _0x4eed0d[0x2e] = _0x4cc892 >>> 0x10 & 0xff;
        _0x4eed0d[0x2f] = _0x4cc892 >>> 0x18 & 0xff;
        _0x4eed0d[0x30] = _0x48b43b >>> 0x0 & 0xff;
        _0x4eed0d[0x31] = _0x48b43b >>> 0x8 & 0xff;
        _0x4eed0d[0x32] = _0x48b43b >>> 0x10 & 0xff;
        _0x4eed0d[0x33] = _0x48b43b >>> 0x18 & 0xff;
        _0x4eed0d[0x34] = _0x4fd15c >>> 0x0 & 0xff;
        _0x4eed0d[0x35] = _0x4fd15c >>> 0x8 & 0xff;
        _0x4eed0d[0x36] = _0x4fd15c >>> 0x10 & 0xff;
        _0x4eed0d[0x37] = _0x4fd15c >>> 0x18 & 0xff;
        _0x4eed0d[0x38] = _0x2a8714 >>> 0x0 & 0xff;
        _0x4eed0d[0x39] = _0x2a8714 >>> 0x8 & 0xff;
        _0x4eed0d[0x3a] = _0x2a8714 >>> 0x10 & 0xff;
        _0x4eed0d[0x3b] = _0x2a8714 >>> 0x18 & 0xff;
        _0x4eed0d[0x3c] = _0x5b3a5b >>> 0x0 & 0xff;
        _0x4eed0d[0x3d] = _0x5b3a5b >>> 0x8 & 0xff;
        _0x4eed0d[0x3e] = _0x5b3a5b >>> 0x10 & 0xff;
        _0x4eed0d[0x3f] = _0x5b3a5b >>> 0x18 & 0xff;
      }
      __defProp(_0x187a59, "name", {
        'value': "core_salsa20",
        'configurable': true
      });
      function _0x5ecf03(_0x352700, _0x25dc81, _0x30b301, _0x1e423b) {
        var _0xe81d53 = _0x1e423b[0x0] & 0xff | (_0x1e423b[0x1] & 0xff) << 0x8 | (_0x1e423b[0x2] & 0xff) << 0x10 | (_0x1e423b[0x3] & 0xff) << 0x18;
        var _0xd220e1 = _0x30b301[0x0] & 0xff | (_0x30b301[0x1] & 0xff) << 0x8 | (_0x30b301[0x2] & 0xff) << 0x10 | (_0x30b301[0x3] & 0xff) << 0x18;
        var _0x43a1de = _0x30b301[0x4] & 0xff | (_0x30b301[0x5] & 0xff) << 0x8 | (_0x30b301[0x6] & 0xff) << 0x10 | (_0x30b301[0x7] & 0xff) << 0x18;
        var _0x454c8c = _0x30b301[0x8] & 0xff | (_0x30b301[0x9] & 0xff) << 0x8 | (_0x30b301[0xa] & 0xff) << 0x10 | (_0x30b301[0xb] & 0xff) << 0x18;
        var _0x3dde79 = _0x30b301[0xc] & 0xff | (_0x30b301[0xd] & 0xff) << 0x8 | (_0x30b301[0xe] & 0xff) << 0x10 | (_0x30b301[0xf] & 0xff) << 0x18;
        var _0x5ebc02 = _0x1e423b[0x4] & 0xff | (_0x1e423b[0x5] & 0xff) << 0x8 | (_0x1e423b[0x6] & 0xff) << 0x10 | (_0x1e423b[0x7] & 0xff) << 0x18;
        var _0x279e86 = _0x25dc81[0x0] & 0xff | (_0x25dc81[0x1] & 0xff) << 0x8 | (_0x25dc81[0x2] & 0xff) << 0x10 | (_0x25dc81[0x3] & 0xff) << 0x18;
        var _0x1569c6 = _0x25dc81[0x4] & 0xff | (_0x25dc81[0x5] & 0xff) << 0x8 | (_0x25dc81[0x6] & 0xff) << 0x10 | (_0x25dc81[0x7] & 0xff) << 0x18;
        var _0x54e9a2 = _0x25dc81[0x8] & 0xff | (_0x25dc81[0x9] & 0xff) << 0x8 | (_0x25dc81[0xa] & 0xff) << 0x10 | (_0x25dc81[0xb] & 0xff) << 0x18;
        var _0x52e948 = _0x25dc81[0xc] & 0xff | (_0x25dc81[0xd] & 0xff) << 0x8 | (_0x25dc81[0xe] & 0xff) << 0x10 | (_0x25dc81[0xf] & 0xff) << 0x18;
        var _0x3064b5 = _0x1e423b[0x8] & 0xff | (_0x1e423b[0x9] & 0xff) << 0x8 | (_0x1e423b[0xa] & 0xff) << 0x10 | (_0x1e423b[0xb] & 0xff) << 0x18;
        var _0x140096 = _0x30b301[0x10] & 0xff | (_0x30b301[0x11] & 0xff) << 0x8 | (_0x30b301[0x12] & 0xff) << 0x10 | (_0x30b301[0x13] & 0xff) << 0x18;
        var _0x188e19 = _0x30b301[0x14] & 0xff | (_0x30b301[0x15] & 0xff) << 0x8 | (_0x30b301[0x16] & 0xff) << 0x10 | (_0x30b301[0x17] & 0xff) << 0x18;
        var _0x425287 = _0x30b301[0x18] & 0xff | (_0x30b301[0x19] & 0xff) << 0x8 | (_0x30b301[0x1a] & 0xff) << 0x10 | (_0x30b301[0x1b] & 0xff) << 0x18;
        var _0x10da95 = _0x30b301[0x1c] & 0xff | (_0x30b301[0x1d] & 0xff) << 0x8 | (_0x30b301[0x1e] & 0xff) << 0x10 | (_0x30b301[0x1f] & 0xff) << 0x18;
        var _0x10ebc2 = _0x1e423b[0xc] & 0xff | (_0x1e423b[0xd] & 0xff) << 0x8 | (_0x1e423b[0xe] & 0xff) << 0x10 | (_0x1e423b[0xf] & 0xff) << 0x18;
        var _0xde8dba = _0xe81d53;
        var _0x4694f5 = _0xd220e1;
        var _0x3c1e94 = _0x43a1de;
        var _0x83df5a = _0x454c8c;
        var _0xbc2d77 = _0x3dde79;
        var _0x4e3e6a = _0x5ebc02;
        var _0x15193a = _0x279e86;
        var _0x19445f = _0x1569c6;
        var _0xf56788 = _0x54e9a2;
        var _0x208c40 = _0x52e948;
        var _0x3e8e57 = _0x3064b5;
        var _0x5888fd = _0x140096;
        var _0x2e6fe5 = _0x188e19;
        var _0xd3e9e4 = _0x425287;
        var _0x54307a = _0x10da95;
        var _0x11ea3f = _0x10ebc2;
        var _0x91f00a;
        for (var _0x474051 = 0x0; _0x474051 < 0x14; _0x474051 += 0x2) {
          _0x91f00a = _0xde8dba + _0x2e6fe5 | 0x0;
          _0xbc2d77 ^= _0x91f00a << 0x7 | _0x91f00a >>> 25;
          _0x91f00a = _0xbc2d77 + _0xde8dba | 0x0;
          _0xf56788 ^= _0x91f00a << 0x9 | _0x91f00a >>> 23;
          _0x91f00a = _0xf56788 + _0xbc2d77 | 0x0;
          _0x2e6fe5 ^= _0x91f00a << 0xd | _0x91f00a >>> 19;
          _0x91f00a = _0x2e6fe5 + _0xf56788 | 0x0;
          _0xde8dba ^= _0x91f00a << 0x12 | _0x91f00a >>> 14;
          _0x91f00a = _0x4e3e6a + _0x4694f5 | 0x0;
          _0x208c40 ^= _0x91f00a << 0x7 | _0x91f00a >>> 25;
          _0x91f00a = _0x208c40 + _0x4e3e6a | 0x0;
          _0xd3e9e4 ^= _0x91f00a << 0x9 | _0x91f00a >>> 23;
          _0x91f00a = _0xd3e9e4 + _0x208c40 | 0x0;
          _0x4694f5 ^= _0x91f00a << 0xd | _0x91f00a >>> 19;
          _0x91f00a = _0x4694f5 + _0xd3e9e4 | 0x0;
          _0x4e3e6a ^= _0x91f00a << 0x12 | _0x91f00a >>> 14;
          _0x91f00a = _0x3e8e57 + _0x15193a | 0x0;
          _0x54307a ^= _0x91f00a << 0x7 | _0x91f00a >>> 25;
          _0x91f00a = _0x54307a + _0x3e8e57 | 0x0;
          _0x3c1e94 ^= _0x91f00a << 0x9 | _0x91f00a >>> 23;
          _0x91f00a = _0x3c1e94 + _0x54307a | 0x0;
          _0x15193a ^= _0x91f00a << 0xd | _0x91f00a >>> 19;
          _0x91f00a = _0x15193a + _0x3c1e94 | 0x0;
          _0x3e8e57 ^= _0x91f00a << 0x12 | _0x91f00a >>> 14;
          _0x91f00a = _0x11ea3f + _0x5888fd | 0x0;
          _0x83df5a ^= _0x91f00a << 0x7 | _0x91f00a >>> 25;
          _0x91f00a = _0x83df5a + _0x11ea3f | 0x0;
          _0x19445f ^= _0x91f00a << 0x9 | _0x91f00a >>> 23;
          _0x91f00a = _0x19445f + _0x83df5a | 0x0;
          _0x5888fd ^= _0x91f00a << 0xd | _0x91f00a >>> 19;
          _0x91f00a = _0x5888fd + _0x19445f | 0x0;
          _0x11ea3f ^= _0x91f00a << 0x12 | _0x91f00a >>> 14;
          _0x91f00a = _0xde8dba + _0x83df5a | 0x0;
          _0x4694f5 ^= _0x91f00a << 0x7 | _0x91f00a >>> 25;
          _0x91f00a = _0x4694f5 + _0xde8dba | 0x0;
          _0x3c1e94 ^= _0x91f00a << 0x9 | _0x91f00a >>> 23;
          _0x91f00a = _0x3c1e94 + _0x4694f5 | 0x0;
          _0x83df5a ^= _0x91f00a << 0xd | _0x91f00a >>> 19;
          _0x91f00a = _0x83df5a + _0x3c1e94 | 0x0;
          _0xde8dba ^= _0x91f00a << 0x12 | _0x91f00a >>> 14;
          _0x91f00a = _0x4e3e6a + _0xbc2d77 | 0x0;
          _0x15193a ^= _0x91f00a << 0x7 | _0x91f00a >>> 25;
          _0x91f00a = _0x15193a + _0x4e3e6a | 0x0;
          _0x19445f ^= _0x91f00a << 0x9 | _0x91f00a >>> 23;
          _0x91f00a = _0x19445f + _0x15193a | 0x0;
          _0xbc2d77 ^= _0x91f00a << 0xd | _0x91f00a >>> 19;
          _0x91f00a = _0xbc2d77 + _0x19445f | 0x0;
          _0x4e3e6a ^= _0x91f00a << 0x12 | _0x91f00a >>> 14;
          _0x91f00a = _0x3e8e57 + _0x208c40 | 0x0;
          _0x5888fd ^= _0x91f00a << 0x7 | _0x91f00a >>> 25;
          _0x91f00a = _0x5888fd + _0x3e8e57 | 0x0;
          _0xf56788 ^= _0x91f00a << 0x9 | _0x91f00a >>> 23;
          _0x91f00a = _0xf56788 + _0x5888fd | 0x0;
          _0x208c40 ^= _0x91f00a << 0xd | _0x91f00a >>> 19;
          _0x91f00a = _0x208c40 + _0xf56788 | 0x0;
          _0x3e8e57 ^= _0x91f00a << 0x12 | _0x91f00a >>> 14;
          _0x91f00a = _0x11ea3f + _0x54307a | 0x0;
          _0x2e6fe5 ^= _0x91f00a << 0x7 | _0x91f00a >>> 25;
          _0x91f00a = _0x2e6fe5 + _0x11ea3f | 0x0;
          _0xd3e9e4 ^= _0x91f00a << 0x9 | _0x91f00a >>> 23;
          _0x91f00a = _0xd3e9e4 + _0x2e6fe5 | 0x0;
          _0x54307a ^= _0x91f00a << 0xd | _0x91f00a >>> 19;
          _0x91f00a = _0x54307a + _0xd3e9e4 | 0x0;
          _0x11ea3f ^= _0x91f00a << 0x12 | _0x91f00a >>> 14;
        }
        _0x352700[0x0] = _0xde8dba >>> 0x0 & 0xff;
        _0x352700[0x1] = _0xde8dba >>> 0x8 & 0xff;
        _0x352700[0x2] = _0xde8dba >>> 0x10 & 0xff;
        _0x352700[0x3] = _0xde8dba >>> 0x18 & 0xff;
        _0x352700[0x4] = _0x4e3e6a >>> 0x0 & 0xff;
        _0x352700[0x5] = _0x4e3e6a >>> 0x8 & 0xff;
        _0x352700[0x6] = _0x4e3e6a >>> 0x10 & 0xff;
        _0x352700[0x7] = _0x4e3e6a >>> 0x18 & 0xff;
        _0x352700[0x8] = _0x3e8e57 >>> 0x0 & 0xff;
        _0x352700[0x9] = _0x3e8e57 >>> 0x8 & 0xff;
        _0x352700[0xa] = _0x3e8e57 >>> 0x10 & 0xff;
        _0x352700[0xb] = _0x3e8e57 >>> 0x18 & 0xff;
        _0x352700[0xc] = _0x11ea3f >>> 0x0 & 0xff;
        _0x352700[0xd] = _0x11ea3f >>> 0x8 & 0xff;
        _0x352700[0xe] = _0x11ea3f >>> 0x10 & 0xff;
        _0x352700[0xf] = _0x11ea3f >>> 0x18 & 0xff;
        _0x352700[0x10] = _0x15193a >>> 0x0 & 0xff;
        _0x352700[0x11] = _0x15193a >>> 0x8 & 0xff;
        _0x352700[0x12] = _0x15193a >>> 0x10 & 0xff;
        _0x352700[0x13] = _0x15193a >>> 0x18 & 0xff;
        _0x352700[0x14] = _0x19445f >>> 0x0 & 0xff;
        _0x352700[0x15] = _0x19445f >>> 0x8 & 0xff;
        _0x352700[0x16] = _0x19445f >>> 0x10 & 0xff;
        _0x352700[0x17] = _0x19445f >>> 0x18 & 0xff;
        _0x352700[0x18] = _0xf56788 >>> 0x0 & 0xff;
        _0x352700[0x19] = _0xf56788 >>> 0x8 & 0xff;
        _0x352700[0x1a] = _0xf56788 >>> 0x10 & 0xff;
        _0x352700[0x1b] = _0xf56788 >>> 0x18 & 0xff;
        _0x352700[0x1c] = _0x208c40 >>> 0x0 & 0xff;
        _0x352700[0x1d] = _0x208c40 >>> 0x8 & 0xff;
        _0x352700[0x1e] = _0x208c40 >>> 0x10 & 0xff;
        _0x352700[0x1f] = _0x208c40 >>> 0x18 & 0xff;
      }
      __defProp(_0x5ecf03, "name", {
        'value': "core_hsalsa20",
        'configurable': true
      });
      function _0x19ff41(_0x1dfbb2, _0x74ff53, _0x489a53, _0x3492c6) {
        _0x187a59(_0x1dfbb2, _0x74ff53, _0x489a53, _0x3492c6);
      }
      __defProp(_0x19ff41, "name", {
        'value': "crypto_core_salsa20",
        'configurable': true
      });
      function _0x3b71b5(_0x690651, _0x3b9c4a, _0x21d6b6, _0x2249a1) {
        _0x5ecf03(_0x690651, _0x3b9c4a, _0x21d6b6, _0x2249a1);
      }
      __defProp(_0x3b71b5, "name", {
        'value': 'crypto_core_hsalsa20',
        'configurable': true
      });
      var _0x2e452a = new Uint8Array([0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x20, 0x33, 0x32, 0x2d, 0x62, 0x79, 0x74, 0x65, 0x20, 0x6b]);
      function _0x432213(_0x58ebf2, _0x3eee45, _0x4cbe4c, _0x1d4bec, _0x185a55, _0x41d9f8, _0x44cb49) {
        var _0xa15bbe = new Uint8Array(0x10);
        var _0x250ced = new Uint8Array(0x40);
        var _0x2a6cbc;
        var _0x89942a;
        for (_0x89942a = 0x0; _0x89942a < 0x10; _0x89942a++) {
          _0xa15bbe[_0x89942a] = 0x0;
        }
        for (_0x89942a = 0x0; _0x89942a < 0x8; _0x89942a++) {
          _0xa15bbe[_0x89942a] = _0x41d9f8[_0x89942a];
        }
        while (_0x185a55 >= 0x40) {
          _0x19ff41(_0x250ced, _0xa15bbe, _0x44cb49, _0x2e452a);
          for (_0x89942a = 0x0; _0x89942a < 0x40; _0x89942a++) {
            _0x58ebf2[_0x3eee45 + _0x89942a] = _0x4cbe4c[_0x1d4bec + _0x89942a] ^ _0x250ced[_0x89942a];
          }
          _0x2a6cbc = 0x1;
          for (_0x89942a = 0x8; _0x89942a < 0x10; _0x89942a++) {
            _0x2a6cbc = _0x2a6cbc + (_0xa15bbe[_0x89942a] & 0xff) | 0x0;
            _0xa15bbe[_0x89942a] = _0x2a6cbc & 0xff;
            _0x2a6cbc >>>= 0x8;
          }
          _0x185a55 -= 0x40;
          _0x3eee45 += 0x40;
          _0x1d4bec += 0x40;
        }
        if (_0x185a55 > 0x0) {
          _0x19ff41(_0x250ced, _0xa15bbe, _0x44cb49, _0x2e452a);
          for (_0x89942a = 0x0; _0x89942a < _0x185a55; _0x89942a++) {
            _0x58ebf2[_0x3eee45 + _0x89942a] = _0x4cbe4c[_0x1d4bec + _0x89942a] ^ _0x250ced[_0x89942a];
          }
        }
        return 0x0;
      }
      __defProp(_0x432213, "name", {
        'value': "crypto_stream_salsa20_xor",
        'configurable': true
      });
      function _0x7930e1(_0xb77577, _0x1a314b, _0x50f297, _0x22d195, _0x3a0294) {
        var _0x46dbfe = new Uint8Array(0x10);
        var _0x3383e2 = new Uint8Array(0x40);
        var _0x451bcd;
        var _0x3e56b9;
        for (_0x3e56b9 = 0x0; _0x3e56b9 < 0x10; _0x3e56b9++) {
          _0x46dbfe[_0x3e56b9] = 0x0;
        }
        for (_0x3e56b9 = 0x0; _0x3e56b9 < 0x8; _0x3e56b9++) {
          _0x46dbfe[_0x3e56b9] = _0x22d195[_0x3e56b9];
        }
        while (_0x50f297 >= 0x40) {
          _0x19ff41(_0x3383e2, _0x46dbfe, _0x3a0294, _0x2e452a);
          for (_0x3e56b9 = 0x0; _0x3e56b9 < 0x40; _0x3e56b9++) {
            _0xb77577[_0x1a314b + _0x3e56b9] = _0x3383e2[_0x3e56b9];
          }
          _0x451bcd = 0x1;
          for (_0x3e56b9 = 0x8; _0x3e56b9 < 0x10; _0x3e56b9++) {
            _0x451bcd = _0x451bcd + (_0x46dbfe[_0x3e56b9] & 0xff) | 0x0;
            _0x46dbfe[_0x3e56b9] = _0x451bcd & 0xff;
            _0x451bcd >>>= 0x8;
          }
          _0x50f297 -= 0x40;
          _0x1a314b += 0x40;
        }
        if (_0x50f297 > 0x0) {
          _0x19ff41(_0x3383e2, _0x46dbfe, _0x3a0294, _0x2e452a);
          for (_0x3e56b9 = 0x0; _0x3e56b9 < _0x50f297; _0x3e56b9++) {
            _0xb77577[_0x1a314b + _0x3e56b9] = _0x3383e2[_0x3e56b9];
          }
        }
        return 0x0;
      }
      __defProp(_0x7930e1, "name", {
        'value': "crypto_stream_salsa20",
        'configurable': true
      });
      function _0xc4ae57(_0x3ddf62, _0x5d965e, _0x4547e1, _0x37a906, _0x1bb367) {
        var _0x4089cd = new Uint8Array(0x20);
        _0x3b71b5(_0x4089cd, _0x37a906, _0x1bb367, _0x2e452a);
        var _0x356400 = new Uint8Array(0x8);
        for (var _0x2bc173 = 0x0; _0x2bc173 < 0x8; _0x2bc173++) {
          _0x356400[_0x2bc173] = _0x37a906[_0x2bc173 + 0x10];
        }
        return _0x7930e1(_0x3ddf62, _0x5d965e, _0x4547e1, _0x356400, _0x4089cd);
      }
      __defProp(_0xc4ae57, "name", {
        'value': "crypto_stream",
        'configurable': true
      });
      function _0x25cb33(_0x47076c, _0x3d1ea7, _0xa6969f, _0x3e261a, _0x20fb99, _0x3a4272, _0x220ac8) {
        var _0x31ce87 = new Uint8Array(0x20);
        _0x3b71b5(_0x31ce87, _0x3a4272, _0x220ac8, _0x2e452a);
        var _0x4f08bf = new Uint8Array(0x8);
        for (var _0xedfc9c = 0x0; _0xedfc9c < 0x8; _0xedfc9c++) {
          _0x4f08bf[_0xedfc9c] = _0x3a4272[_0xedfc9c + 0x10];
        }
        return _0x432213(_0x47076c, _0x3d1ea7, _0xa6969f, _0x3e261a, _0x20fb99, _0x4f08bf, _0x31ce87);
      }
      __defProp(_0x25cb33, "name", {
        'value': "crypto_stream_xor",
        'configurable': true
      });
      var _0x2fc1f7 = __defProp(function (_0xecd871) {
        this.buffer = new Uint8Array(0x10);
        this.r = new Uint16Array(0xa);
        this.h = new Uint16Array(0xa);
        this.pad = new Uint16Array(0x8);
        this.leftover = 0x0;
        this.fin = 0x0;
        var _0x1edecb;
        var _0x334755;
        var _0x33766c;
        var _0xc8f06;
        var _0x11ff00;
        var _0x377b75;
        var _0x10a50e;
        var _0x29ed4d;
        _0x1edecb = _0xecd871[0x0] & 0xff | (_0xecd871[0x1] & 0xff) << 0x8;
        this.r[0x0] = _0x1edecb & 0x1fff;
        _0x334755 = _0xecd871[0x2] & 0xff | (_0xecd871[0x3] & 0xff) << 0x8;
        this.r[0x1] = (_0x1edecb >>> 0xd | _0x334755 << 0x3) & 0x1fff;
        _0x33766c = _0xecd871[0x4] & 0xff | (_0xecd871[0x5] & 0xff) << 0x8;
        this.r[0x2] = (_0x334755 >>> 0xa | _0x33766c << 0x6) & 0x1f03;
        _0xc8f06 = _0xecd871[0x6] & 0xff | (_0xecd871[0x7] & 0xff) << 0x8;
        this.r[0x3] = (_0x33766c >>> 0x7 | _0xc8f06 << 0x9) & 0x1fff;
        _0x11ff00 = _0xecd871[0x8] & 0xff | (_0xecd871[0x9] & 0xff) << 0x8;
        this.r[0x4] = (_0xc8f06 >>> 0x4 | _0x11ff00 << 0xc) & 0xff;
        this.r[0x5] = _0x11ff00 >>> 0x1 & 0x1ffe;
        _0x377b75 = _0xecd871[0xa] & 0xff | (_0xecd871[0xb] & 0xff) << 0x8;
        this.r[0x6] = (_0x11ff00 >>> 0xe | _0x377b75 << 0x2) & 0x1fff;
        _0x10a50e = _0xecd871[0xc] & 0xff | (_0xecd871[0xd] & 0xff) << 0x8;
        this.r[0x7] = (_0x377b75 >>> 0xb | _0x10a50e << 0x5) & 0x1f81;
        _0x29ed4d = _0xecd871[0xe] & 0xff | (_0xecd871[0xf] & 0xff) << 0x8;
        this.r[0x8] = (_0x10a50e >>> 0x8 | _0x29ed4d << 0x8) & 0x1fff;
        this.r[0x9] = _0x29ed4d >>> 0x5 & 0x7f;
        this.pad[0x0] = _0xecd871[0x10] & 0xff | (_0xecd871[0x11] & 0xff) << 0x8;
        this.pad[0x1] = _0xecd871[0x12] & 0xff | (_0xecd871[0x13] & 0xff) << 0x8;
        this.pad[0x2] = _0xecd871[0x14] & 0xff | (_0xecd871[0x15] & 0xff) << 0x8;
        this.pad[0x3] = _0xecd871[0x16] & 0xff | (_0xecd871[0x17] & 0xff) << 0x8;
        this.pad[0x4] = _0xecd871[0x18] & 0xff | (_0xecd871[0x19] & 0xff) << 0x8;
        this.pad[0x5] = _0xecd871[0x1a] & 0xff | (_0xecd871[0x1b] & 0xff) << 0x8;
        this.pad[0x6] = _0xecd871[0x1c] & 0xff | (_0xecd871[0x1d] & 0xff) << 0x8;
        this.pad[0x7] = _0xecd871[0x1e] & 0xff | (_0xecd871[0x1f] & 0xff) << 0x8;
      }, "name", {
        'value': 'poly1305',
        'configurable': true
      });
      _0x2fc1f7.prototype.blocks = function (_0x568522, _0x467a59, _0x51e563) {
        var _0x412146 = this.fin ? 0x0 : 2048;
        var _0x1cc3f3;
        var _0x48f337;
        var _0x2c927a;
        var _0x33afc2;
        var _0x27208d;
        var _0x300959;
        var _0x20fe21;
        var _0x5708c8;
        var _0x1d1524;
        var _0x12b1d9;
        var _0x94e463;
        var _0x13552f;
        var _0x25d633;
        var _0x3b9670;
        var _0x1d2ec4;
        var _0x1fc1ad;
        var _0x5af41a;
        var _0x1136cc;
        var _0x5c1821;
        var _0x54657b = this.h[0x0];
        var _0x1020a1 = this.h[0x1];
        var _0x53d90c = this.h[0x2];
        var _0x209bf6 = this.h[0x3];
        var _0x4ea6e9 = this.h[0x4];
        var _0x16378a = this.h[0x5];
        var _0x31bcd9 = this.h[0x6];
        var _0x2730c4 = this.h[0x7];
        var _0x49c24f = this.h[0x8];
        var _0x32b5dc = this.h[0x9];
        var _0x234915 = this.r[0x0];
        var _0x3425db = this.r[0x1];
        var _0x1544bc = this.r[0x2];
        var _0xc6dc11 = this.r[0x3];
        var _0xf302b8 = this.r[0x4];
        var _0x564eec = this.r[0x5];
        var _0x23bcfb = this.r[0x6];
        var _0x3d5d7f = this.r[0x7];
        var _0x15e476 = this.r[0x8];
        var _0x3c527d = this.r[0x9];
        while (_0x51e563 >= 0x10) {
          _0x1cc3f3 = _0x568522[_0x467a59 + 0x0] & 0xff | (_0x568522[_0x467a59 + 0x1] & 0xff) << 0x8;
          _0x54657b += _0x1cc3f3 & 0x1fff;
          _0x48f337 = _0x568522[_0x467a59 + 0x2] & 0xff | (_0x568522[_0x467a59 + 0x3] & 0xff) << 0x8;
          _0x1020a1 += (_0x1cc3f3 >>> 0xd | _0x48f337 << 0x3) & 0x1fff;
          _0x2c927a = _0x568522[_0x467a59 + 0x4] & 0xff | (_0x568522[_0x467a59 + 0x5] & 0xff) << 0x8;
          _0x53d90c += (_0x48f337 >>> 0xa | _0x2c927a << 0x6) & 0x1fff;
          _0x33afc2 = _0x568522[_0x467a59 + 0x6] & 0xff | (_0x568522[_0x467a59 + 0x7] & 0xff) << 0x8;
          _0x209bf6 += (_0x2c927a >>> 0x7 | _0x33afc2 << 0x9) & 0x1fff;
          _0x27208d = _0x568522[_0x467a59 + 0x8] & 0xff | (_0x568522[_0x467a59 + 0x9] & 0xff) << 0x8;
          _0x4ea6e9 += (_0x33afc2 >>> 0x4 | _0x27208d << 0xc) & 0x1fff;
          _0x16378a += _0x27208d >>> 0x1 & 0x1fff;
          _0x300959 = _0x568522[_0x467a59 + 0xa] & 0xff | (_0x568522[_0x467a59 + 0xb] & 0xff) << 0x8;
          _0x31bcd9 += (_0x27208d >>> 0xe | _0x300959 << 0x2) & 0x1fff;
          _0x20fe21 = _0x568522[_0x467a59 + 0xc] & 0xff | (_0x568522[_0x467a59 + 0xd] & 0xff) << 0x8;
          _0x2730c4 += (_0x300959 >>> 0xb | _0x20fe21 << 0x5) & 0x1fff;
          _0x5708c8 = _0x568522[_0x467a59 + 0xe] & 0xff | (_0x568522[_0x467a59 + 0xf] & 0xff) << 0x8;
          _0x49c24f += (_0x20fe21 >>> 0x8 | _0x5708c8 << 0x8) & 0x1fff;
          _0x32b5dc += _0x5708c8 >>> 0x5 | _0x412146;
          _0x1d1524 = 0x0;
          _0x12b1d9 = _0x1d1524;
          _0x12b1d9 += _0x54657b * _0x234915;
          _0x12b1d9 += _0x1020a1 * (0x5 * _0x3c527d);
          _0x12b1d9 += _0x53d90c * (0x5 * _0x15e476);
          _0x12b1d9 += _0x209bf6 * (0x5 * _0x3d5d7f);
          _0x12b1d9 += _0x4ea6e9 * (0x5 * _0x23bcfb);
          _0x1d1524 = _0x12b1d9 >>> 0xd;
          _0x12b1d9 &= 0x1fff;
          _0x12b1d9 += _0x16378a * (0x5 * _0x564eec);
          _0x12b1d9 += _0x31bcd9 * (0x5 * _0xf302b8);
          _0x12b1d9 += _0x2730c4 * (0x5 * _0xc6dc11);
          _0x12b1d9 += _0x49c24f * (0x5 * _0x1544bc);
          _0x12b1d9 += _0x32b5dc * (0x5 * _0x3425db);
          _0x1d1524 += _0x12b1d9 >>> 0xd;
          _0x12b1d9 &= 0x1fff;
          _0x94e463 = _0x1d1524;
          _0x94e463 += _0x54657b * _0x3425db;
          _0x94e463 += _0x1020a1 * _0x234915;
          _0x94e463 += _0x53d90c * (0x5 * _0x3c527d);
          _0x94e463 += _0x209bf6 * (0x5 * _0x15e476);
          _0x94e463 += _0x4ea6e9 * (0x5 * _0x3d5d7f);
          _0x1d1524 = _0x94e463 >>> 0xd;
          _0x94e463 &= 0x1fff;
          _0x94e463 += _0x16378a * (0x5 * _0x23bcfb);
          _0x94e463 += _0x31bcd9 * (0x5 * _0x564eec);
          _0x94e463 += _0x2730c4 * (0x5 * _0xf302b8);
          _0x94e463 += _0x49c24f * (0x5 * _0xc6dc11);
          _0x94e463 += _0x32b5dc * (0x5 * _0x1544bc);
          _0x1d1524 += _0x94e463 >>> 0xd;
          _0x94e463 &= 0x1fff;
          _0x13552f = _0x1d1524;
          _0x13552f += _0x54657b * _0x1544bc;
          _0x13552f += _0x1020a1 * _0x3425db;
          _0x13552f += _0x53d90c * _0x234915;
          _0x13552f += _0x209bf6 * (0x5 * _0x3c527d);
          _0x13552f += _0x4ea6e9 * (0x5 * _0x15e476);
          _0x1d1524 = _0x13552f >>> 0xd;
          _0x13552f &= 0x1fff;
          _0x13552f += _0x16378a * (0x5 * _0x3d5d7f);
          _0x13552f += _0x31bcd9 * (0x5 * _0x23bcfb);
          _0x13552f += _0x2730c4 * (0x5 * _0x564eec);
          _0x13552f += _0x49c24f * (0x5 * _0xf302b8);
          _0x13552f += _0x32b5dc * (0x5 * _0xc6dc11);
          _0x1d1524 += _0x13552f >>> 0xd;
          _0x13552f &= 0x1fff;
          _0x25d633 = _0x1d1524;
          _0x25d633 += _0x54657b * _0xc6dc11;
          _0x25d633 += _0x1020a1 * _0x1544bc;
          _0x25d633 += _0x53d90c * _0x3425db;
          _0x25d633 += _0x209bf6 * _0x234915;
          _0x25d633 += _0x4ea6e9 * (0x5 * _0x3c527d);
          _0x1d1524 = _0x25d633 >>> 0xd;
          _0x25d633 &= 0x1fff;
          _0x25d633 += _0x16378a * (0x5 * _0x15e476);
          _0x25d633 += _0x31bcd9 * (0x5 * _0x3d5d7f);
          _0x25d633 += _0x2730c4 * (0x5 * _0x23bcfb);
          _0x25d633 += _0x49c24f * (0x5 * _0x564eec);
          _0x25d633 += _0x32b5dc * (0x5 * _0xf302b8);
          _0x1d1524 += _0x25d633 >>> 0xd;
          _0x25d633 &= 0x1fff;
          _0x3b9670 = _0x1d1524;
          _0x3b9670 += _0x54657b * _0xf302b8;
          _0x3b9670 += _0x1020a1 * _0xc6dc11;
          _0x3b9670 += _0x53d90c * _0x1544bc;
          _0x3b9670 += _0x209bf6 * _0x3425db;
          _0x3b9670 += _0x4ea6e9 * _0x234915;
          _0x1d1524 = _0x3b9670 >>> 0xd;
          _0x3b9670 &= 0x1fff;
          _0x3b9670 += _0x16378a * (0x5 * _0x3c527d);
          _0x3b9670 += _0x31bcd9 * (0x5 * _0x15e476);
          _0x3b9670 += _0x2730c4 * (0x5 * _0x3d5d7f);
          _0x3b9670 += _0x49c24f * (0x5 * _0x23bcfb);
          _0x3b9670 += _0x32b5dc * (0x5 * _0x564eec);
          _0x1d1524 += _0x3b9670 >>> 0xd;
          _0x3b9670 &= 0x1fff;
          _0x1d2ec4 = _0x1d1524;
          _0x1d2ec4 += _0x54657b * _0x564eec;
          _0x1d2ec4 += _0x1020a1 * _0xf302b8;
          _0x1d2ec4 += _0x53d90c * _0xc6dc11;
          _0x1d2ec4 += _0x209bf6 * _0x1544bc;
          _0x1d2ec4 += _0x4ea6e9 * _0x3425db;
          _0x1d1524 = _0x1d2ec4 >>> 0xd;
          _0x1d2ec4 &= 0x1fff;
          _0x1d2ec4 += _0x16378a * _0x234915;
          _0x1d2ec4 += _0x31bcd9 * (0x5 * _0x3c527d);
          _0x1d2ec4 += _0x2730c4 * (0x5 * _0x15e476);
          _0x1d2ec4 += _0x49c24f * (0x5 * _0x3d5d7f);
          _0x1d2ec4 += _0x32b5dc * (0x5 * _0x23bcfb);
          _0x1d1524 += _0x1d2ec4 >>> 0xd;
          _0x1d2ec4 &= 0x1fff;
          _0x1fc1ad = _0x1d1524;
          _0x1fc1ad += _0x54657b * _0x23bcfb;
          _0x1fc1ad += _0x1020a1 * _0x564eec;
          _0x1fc1ad += _0x53d90c * _0xf302b8;
          _0x1fc1ad += _0x209bf6 * _0xc6dc11;
          _0x1fc1ad += _0x4ea6e9 * _0x1544bc;
          _0x1d1524 = _0x1fc1ad >>> 0xd;
          _0x1fc1ad &= 0x1fff;
          _0x1fc1ad += _0x16378a * _0x3425db;
          _0x1fc1ad += _0x31bcd9 * _0x234915;
          _0x1fc1ad += _0x2730c4 * (0x5 * _0x3c527d);
          _0x1fc1ad += _0x49c24f * (0x5 * _0x15e476);
          _0x1fc1ad += _0x32b5dc * (0x5 * _0x3d5d7f);
          _0x1d1524 += _0x1fc1ad >>> 0xd;
          _0x1fc1ad &= 0x1fff;
          _0x5af41a = _0x1d1524;
          _0x5af41a += _0x54657b * _0x3d5d7f;
          _0x5af41a += _0x1020a1 * _0x23bcfb;
          _0x5af41a += _0x53d90c * _0x564eec;
          _0x5af41a += _0x209bf6 * _0xf302b8;
          _0x5af41a += _0x4ea6e9 * _0xc6dc11;
          _0x1d1524 = _0x5af41a >>> 0xd;
          _0x5af41a &= 0x1fff;
          _0x5af41a += _0x16378a * _0x1544bc;
          _0x5af41a += _0x31bcd9 * _0x3425db;
          _0x5af41a += _0x2730c4 * _0x234915;
          _0x5af41a += _0x49c24f * (0x5 * _0x3c527d);
          _0x5af41a += _0x32b5dc * (0x5 * _0x15e476);
          _0x1d1524 += _0x5af41a >>> 0xd;
          _0x5af41a &= 0x1fff;
          _0x1136cc = _0x1d1524;
          _0x1136cc += _0x54657b * _0x15e476;
          _0x1136cc += _0x1020a1 * _0x3d5d7f;
          _0x1136cc += _0x53d90c * _0x23bcfb;
          _0x1136cc += _0x209bf6 * _0x564eec;
          _0x1136cc += _0x4ea6e9 * _0xf302b8;
          _0x1d1524 = _0x1136cc >>> 0xd;
          _0x1136cc &= 0x1fff;
          _0x1136cc += _0x16378a * _0xc6dc11;
          _0x1136cc += _0x31bcd9 * _0x1544bc;
          _0x1136cc += _0x2730c4 * _0x3425db;
          _0x1136cc += _0x49c24f * _0x234915;
          _0x1136cc += _0x32b5dc * (0x5 * _0x3c527d);
          _0x1d1524 += _0x1136cc >>> 0xd;
          _0x1136cc &= 0x1fff;
          _0x5c1821 = _0x1d1524;
          _0x5c1821 += _0x54657b * _0x3c527d;
          _0x5c1821 += _0x1020a1 * _0x15e476;
          _0x5c1821 += _0x53d90c * _0x3d5d7f;
          _0x5c1821 += _0x209bf6 * _0x23bcfb;
          _0x5c1821 += _0x4ea6e9 * _0x564eec;
          _0x1d1524 = _0x5c1821 >>> 0xd;
          _0x5c1821 &= 0x1fff;
          _0x5c1821 += _0x16378a * _0xf302b8;
          _0x5c1821 += _0x31bcd9 * _0xc6dc11;
          _0x5c1821 += _0x2730c4 * _0x1544bc;
          _0x5c1821 += _0x49c24f * _0x3425db;
          _0x5c1821 += _0x32b5dc * _0x234915;
          _0x1d1524 += _0x5c1821 >>> 0xd;
          _0x5c1821 &= 0x1fff;
          _0x1d1524 = (_0x1d1524 << 0x2) + _0x1d1524 | 0x0;
          _0x1d1524 = _0x1d1524 + _0x12b1d9 | 0x0;
          _0x12b1d9 = _0x1d1524 & 0x1fff;
          _0x1d1524 = _0x1d1524 >>> 0xd;
          _0x94e463 += _0x1d1524;
          _0x54657b = _0x12b1d9;
          _0x1020a1 = _0x94e463;
          _0x53d90c = _0x13552f;
          _0x209bf6 = _0x25d633;
          _0x4ea6e9 = _0x3b9670;
          _0x16378a = _0x1d2ec4;
          _0x31bcd9 = _0x1fc1ad;
          _0x2730c4 = _0x5af41a;
          _0x49c24f = _0x1136cc;
          _0x32b5dc = _0x5c1821;
          _0x467a59 += 0x10;
          _0x51e563 -= 0x10;
        }
        this.h[0x0] = _0x54657b;
        this.h[0x1] = _0x1020a1;
        this.h[0x2] = _0x53d90c;
        this.h[0x3] = _0x209bf6;
        this.h[0x4] = _0x4ea6e9;
        this.h[0x5] = _0x16378a;
        this.h[0x6] = _0x31bcd9;
        this.h[0x7] = _0x2730c4;
        this.h[0x8] = _0x49c24f;
        this.h[0x9] = _0x32b5dc;
      };
      _0x2fc1f7.prototype.finish = function (_0x2731bc, _0x5115e2) {
        var _0x2d5323 = new Uint16Array(0xa);
        var _0x552ab2;
        var _0x11cf6f;
        var _0x3d0585;
        var _0x404bcc;
        if (this.leftover) {
          _0x404bcc = this.leftover;
          this.buffer[_0x404bcc++] = 0x1;
          for (; _0x404bcc < 0x10; _0x404bcc++) {
            this.buffer[_0x404bcc] = 0x0;
          }
          this.fin = 0x1;
          this.blocks(this.buffer, 0x0, 0x10);
        }
        _0x552ab2 = this.h[0x1] >>> 0xd;
        this.h[0x1] &= 0x1fff;
        for (_0x404bcc = 0x2; _0x404bcc < 0xa; _0x404bcc++) {
          this.h[_0x404bcc] += _0x552ab2;
          _0x552ab2 = this.h[_0x404bcc] >>> 0xd;
          this.h[_0x404bcc] &= 0x1fff;
        }
        this.h[0x0] += _0x552ab2 * 0x5;
        _0x552ab2 = this.h[0x0] >>> 0xd;
        this.h[0x0] &= 0x1fff;
        this.h[0x1] += _0x552ab2;
        _0x552ab2 = this.h[0x1] >>> 0xd;
        this.h[0x1] &= 0x1fff;
        this.h[0x2] += _0x552ab2;
        _0x2d5323[0x0] = this.h[0x0] + 0x5;
        _0x552ab2 = _0x2d5323[0x0] >>> 0xd;
        _0x2d5323[0x0] &= 0x1fff;
        for (_0x404bcc = 0x1; _0x404bcc < 0xa; _0x404bcc++) {
          _0x2d5323[_0x404bcc] = this.h[_0x404bcc] + _0x552ab2;
          _0x552ab2 = _0x2d5323[_0x404bcc] >>> 0xd;
          _0x2d5323[_0x404bcc] &= 0x1fff;
        }
        _0x2d5323[0x9] -= 8192;
        _0x11cf6f = (_0x552ab2 ^ 0x1) - 0x1;
        for (_0x404bcc = 0x0; _0x404bcc < 0xa; _0x404bcc++) {
          _0x2d5323[_0x404bcc] &= _0x11cf6f;
        }
        _0x11cf6f = ~_0x11cf6f;
        for (_0x404bcc = 0x0; _0x404bcc < 0xa; _0x404bcc++) {
          this.h[_0x404bcc] = this.h[_0x404bcc] & _0x11cf6f | _0x2d5323[_0x404bcc];
        }
        this.h[0x0] = (this.h[0x0] | this.h[0x1] << 0xd) & 0xffff;
        this.h[0x1] = (this.h[0x1] >>> 0x3 | this.h[0x2] << 0xa) & 0xffff;
        this.h[0x2] = (this.h[0x2] >>> 0x6 | this.h[0x3] << 0x7) & 0xffff;
        this.h[0x3] = (this.h[0x3] >>> 0x9 | this.h[0x4] << 0x4) & 0xffff;
        this.h[0x4] = (this.h[0x4] >>> 0xc | this.h[0x5] << 0x1 | this.h[0x6] << 0xe) & 0xffff;
        this.h[0x5] = (this.h[0x6] >>> 0x2 | this.h[0x7] << 0xb) & 0xffff;
        this.h[0x6] = (this.h[0x7] >>> 0x5 | this.h[0x8] << 0x8) & 0xffff;
        this.h[0x7] = (this.h[0x8] >>> 0x8 | this.h[0x9] << 0x5) & 0xffff;
        _0x3d0585 = this.h[0x0] + this.pad[0x0];
        this.h[0x0] = _0x3d0585 & 0xffff;
        for (_0x404bcc = 0x1; _0x404bcc < 0x8; _0x404bcc++) {
          _0x3d0585 = (this.h[_0x404bcc] + this.pad[_0x404bcc] | 0x0) + (_0x3d0585 >>> 0x10) | 0x0;
          this.h[_0x404bcc] = _0x3d0585 & 0xffff;
        }
        _0x2731bc[_0x5115e2 + 0x0] = this.h[0x0] >>> 0x0 & 0xff;
        _0x2731bc[_0x5115e2 + 0x1] = this.h[0x0] >>> 0x8 & 0xff;
        _0x2731bc[_0x5115e2 + 0x2] = this.h[0x1] >>> 0x0 & 0xff;
        _0x2731bc[_0x5115e2 + 0x3] = this.h[0x1] >>> 0x8 & 0xff;
        _0x2731bc[_0x5115e2 + 0x4] = this.h[0x2] >>> 0x0 & 0xff;
        _0x2731bc[_0x5115e2 + 0x5] = this.h[0x2] >>> 0x8 & 0xff;
        _0x2731bc[_0x5115e2 + 0x6] = this.h[0x3] >>> 0x0 & 0xff;
        _0x2731bc[_0x5115e2 + 0x7] = this.h[0x3] >>> 0x8 & 0xff;
        _0x2731bc[_0x5115e2 + 0x8] = this.h[0x4] >>> 0x0 & 0xff;
        _0x2731bc[_0x5115e2 + 0x9] = this.h[0x4] >>> 0x8 & 0xff;
        _0x2731bc[_0x5115e2 + 0xa] = this.h[0x5] >>> 0x0 & 0xff;
        _0x2731bc[_0x5115e2 + 0xb] = this.h[0x5] >>> 0x8 & 0xff;
        _0x2731bc[_0x5115e2 + 0xc] = this.h[0x6] >>> 0x0 & 0xff;
        _0x2731bc[_0x5115e2 + 0xd] = this.h[0x6] >>> 0x8 & 0xff;
        _0x2731bc[_0x5115e2 + 0xe] = this.h[0x7] >>> 0x0 & 0xff;
        _0x2731bc[_0x5115e2 + 0xf] = this.h[0x7] >>> 0x8 & 0xff;
      };
      _0x2fc1f7.prototype.update = function (_0x5305bb, _0x3ddb8f, _0x34b364) {
        var _0x19d519;
        var _0xbb6f99;
        if (this.leftover) {
          _0xbb6f99 = 0x10 - this.leftover;
          if (_0xbb6f99 > _0x34b364) {
            _0xbb6f99 = _0x34b364;
          }
          for (_0x19d519 = 0x0; _0x19d519 < _0xbb6f99; _0x19d519++) {
            this.buffer[this.leftover + _0x19d519] = _0x5305bb[_0x3ddb8f + _0x19d519];
          }
          _0x34b364 -= _0xbb6f99;
          _0x3ddb8f += _0xbb6f99;
          this.leftover += _0xbb6f99;
          if (this.leftover < 0x10) {
            return;
          }
          this.blocks(this.buffer, 0x0, 0x10);
          this.leftover = 0x0;
        }
        if (_0x34b364 >= 0x10) {
          _0xbb6f99 = _0x34b364 - _0x34b364 % 0x10;
          this.blocks(_0x5305bb, _0x3ddb8f, _0xbb6f99);
          _0x3ddb8f += _0xbb6f99;
          _0x34b364 -= _0xbb6f99;
        }
        if (_0x34b364) {
          for (_0x19d519 = 0x0; _0x19d519 < _0x34b364; _0x19d519++) {
            this.buffer[this.leftover + _0x19d519] = _0x5305bb[_0x3ddb8f + _0x19d519];
          }
          this.leftover += _0x34b364;
        }
      };
      function _0x386443(_0x5811c0, _0x54596e, _0x1f7b40, _0x4e0657, _0x4cc4f7, _0x4f9ba8) {
        var _0x5e1f01 = new _0x2fc1f7(_0x4f9ba8);
        _0x5e1f01.update(_0x1f7b40, _0x4e0657, _0x4cc4f7);
        _0x5e1f01.finish(_0x5811c0, _0x54596e);
        return 0x0;
      }
      __defProp(_0x386443, "name", {
        'value': 'crypto_onetimeauth',
        'configurable': true
      });
      function _0x4688e5(_0x29e5b8, _0x436eb5, _0x319cfd, _0x6198f1, _0x161bf3, _0x1d11b0) {
        var _0x3af5a6 = new Uint8Array(0x10);
        _0x386443(_0x3af5a6, 0x0, _0x319cfd, _0x6198f1, _0x161bf3, _0x1d11b0);
        return _0x17aafa(_0x29e5b8, _0x436eb5, _0x3af5a6, 0x0, 0x10);
      }
      __defProp(_0x4688e5, "name", {
        'value': 'crypto_onetimeauth_verify',
        'configurable': true
      });
      function _0x264a51(_0x106a65, _0xb90ba3, _0x221a1c, _0x399235, _0x112e82) {
        var _0x5493bd;
        if (_0x221a1c < 0x20) {
          return -0x1;
        }
        _0x25cb33(_0x106a65, 0x0, _0xb90ba3, 0x0, _0x221a1c, _0x399235, _0x112e82);
        _0x386443(_0x106a65, 0x10, _0x106a65, 0x20, _0x221a1c - 0x20, _0x106a65);
        for (_0x5493bd = 0x0; _0x5493bd < 0x10; _0x5493bd++) {
          _0x106a65[_0x5493bd] = 0x0;
        }
        return 0x0;
      }
      __defProp(_0x264a51, "name", {
        'value': 'crypto_secretbox',
        'configurable': true
      });
      function _0x4981b9(_0x339341, _0x52fde0, _0x216c9b, _0x3f7dec, _0x1e2b3b) {
        var _0x4f4c52;
        var _0x2ad56f = new Uint8Array(0x20);
        if (_0x216c9b < 0x20) {
          return -0x1;
        }
        _0xc4ae57(_0x2ad56f, 0x0, 0x20, _0x3f7dec, _0x1e2b3b);
        if (_0x4688e5(_0x52fde0, 0x10, _0x52fde0, 0x20, _0x216c9b - 0x20, _0x2ad56f) !== 0x0) {
          return -0x1;
        }
        _0x25cb33(_0x339341, 0x0, _0x52fde0, 0x0, _0x216c9b, _0x3f7dec, _0x1e2b3b);
        for (_0x4f4c52 = 0x0; _0x4f4c52 < 0x20; _0x4f4c52++) {
          _0x339341[_0x4f4c52] = 0x0;
        }
        return 0x0;
      }
      __defProp(_0x4981b9, "name", {
        'value': "crypto_secretbox_open",
        'configurable': true
      });
      function _0xd37069(_0x382173, _0x180a3e) {
        var _0x5d5ace;
        for (_0x5d5ace = 0x0; _0x5d5ace < 0x10; _0x5d5ace++) {
          _0x382173[_0x5d5ace] = _0x180a3e[_0x5d5ace] | 0x0;
        }
      }
      __defProp(_0xd37069, "name", {
        'value': "set25519",
        'configurable': true
      });
      function _0x230990(_0x5d55fe) {
        var _0x18b284;
        var _0x398762;
        var _0x2539c8 = 0x1;
        for (_0x18b284 = 0x0; _0x18b284 < 0x10; _0x18b284++) {
          _0x398762 = _0x5d55fe[_0x18b284] + _0x2539c8 + 0xffff;
          _0x2539c8 = Math.floor(_0x398762 / 0x10000);
          _0x5d55fe[_0x18b284] = _0x398762 - _0x2539c8 * 0x10000;
        }
        _0x5d55fe[0x0] += _0x2539c8 - 0x1 + 0x25 * (_0x2539c8 - 0x1);
      }
      __defProp(_0x230990, "name", {
        'value': "car25519",
        'configurable': true
      });
      function _0x1c6753(_0x3368a6, _0x482a81, _0x4b0ec5) {
        var _0x5d642e;
        var _0x51e035 = ~(_0x4b0ec5 - 0x1);
        for (var _0x6d8bf0 = 0x0; _0x6d8bf0 < 0x10; _0x6d8bf0++) {
          _0x5d642e = _0x51e035 & (_0x3368a6[_0x6d8bf0] ^ _0x482a81[_0x6d8bf0]);
          _0x3368a6[_0x6d8bf0] ^= _0x5d642e;
          _0x482a81[_0x6d8bf0] ^= _0x5d642e;
        }
      }
      __defProp(_0x1c6753, "name", {
        'value': "sel25519",
        'configurable': true
      });
      function _0x184fc9(_0x38287d, _0x158332) {
        var _0x2691ca;
        var _0x258d50;
        var _0x467c62;
        var _0x52b5dc = _0xa7b002();
        var _0x305b7a = _0xa7b002();
        for (_0x2691ca = 0x0; _0x2691ca < 0x10; _0x2691ca++) {
          _0x305b7a[_0x2691ca] = _0x158332[_0x2691ca];
        }
        _0x230990(_0x305b7a);
        _0x230990(_0x305b7a);
        _0x230990(_0x305b7a);
        for (_0x258d50 = 0x0; _0x258d50 < 0x2; _0x258d50++) {
          _0x52b5dc[0x0] = _0x305b7a[0x0] - 0xffed;
          for (_0x2691ca = 0x1; _0x2691ca < 0xf; _0x2691ca++) {
            _0x52b5dc[_0x2691ca] = _0x305b7a[_0x2691ca] - 0xffff - (_0x52b5dc[_0x2691ca - 0x1] >> 0x10 & 0x1);
            _0x52b5dc[_0x2691ca - 0x1] &= 0xffff;
          }
          _0x52b5dc[0xf] = _0x305b7a[0xf] - 0x7fff - (_0x52b5dc[0xe] >> 0x10 & 0x1);
          _0x467c62 = _0x52b5dc[0xf] >> 0x10 & 0x1;
          _0x52b5dc[0xe] &= 0xffff;
          _0x1c6753(_0x305b7a, _0x52b5dc, 0x1 - _0x467c62);
        }
        for (_0x2691ca = 0x0; _0x2691ca < 0x10; _0x2691ca++) {
          _0x38287d[0x2 * _0x2691ca] = _0x305b7a[_0x2691ca] & 0xff;
          _0x38287d[0x2 * _0x2691ca + 0x1] = _0x305b7a[_0x2691ca] >> 0x8;
        }
      }
      __defProp(_0x184fc9, "name", {
        'value': 'pack25519',
        'configurable': true
      });
      function _0x2866be(_0x4bff9d, _0x4878b4) {
        var _0x1aa485 = new Uint8Array(0x20);
        var _0x3a11de = new Uint8Array(0x20);
        _0x184fc9(_0x1aa485, _0x4bff9d);
        _0x184fc9(_0x3a11de, _0x4878b4);
        return _0x17aafa(_0x1aa485, 0x0, _0x3a11de, 0x0, 0x20);
      }
      __defProp(_0x2866be, "name", {
        'value': "neq25519",
        'configurable': true
      });
      function _0x2987f3(_0x1a72a1) {
        var _0xac5a4 = new Uint8Array(0x20);
        _0x184fc9(_0xac5a4, _0x1a72a1);
        return _0xac5a4[0x0] & 0x1;
      }
      __defProp(_0x2987f3, "name", {
        'value': "par25519",
        'configurable': true
      });
      function _0x1f6b32(_0x583aeb, _0x290e63) {
        var _0x5e556b;
        for (_0x5e556b = 0x0; _0x5e556b < 0x10; _0x5e556b++) {
          _0x583aeb[_0x5e556b] = _0x290e63[0x2 * _0x5e556b] + (_0x290e63[0x2 * _0x5e556b + 0x1] << 0x8);
        }
        _0x583aeb[0xf] &= 0x7fff;
      }
      __defProp(_0x1f6b32, "name", {
        'value': 'unpack25519',
        'configurable': true
      });
      function _0x2cb160(_0x2c1579, _0x50748c, _0x59989f) {
        for (var _0x4854aa = 0x0; _0x4854aa < 0x10; _0x4854aa++) {
          _0x2c1579[_0x4854aa] = _0x50748c[_0x4854aa] + _0x59989f[_0x4854aa];
        }
      }
      __defProp(_0x2cb160, "name", {
        'value': 'A',
        'configurable': true
      });
      function _0x3f2745(_0x5ec49c, _0x535954, _0x6ce4a4) {
        for (var _0x126fdc = 0x0; _0x126fdc < 0x10; _0x126fdc++) {
          _0x5ec49c[_0x126fdc] = _0x535954[_0x126fdc] - _0x6ce4a4[_0x126fdc];
        }
      }
      __defProp(_0x3f2745, "name", {
        'value': 'Z',
        'configurable': true
      });
      function _0x102314(_0x238785, _0x4f8fbf, _0x22058f) {
        var _0x34c420;
        var _0x3cab0a;
        var _0x15c9bf = 0x0;
        var _0x47311f = 0x0;
        var _0x2c440e = 0x0;
        var _0x3ec27a = 0x0;
        var _0x1408b7 = 0x0;
        var _0x424b09 = 0x0;
        var _0x24399c = 0x0;
        var _0x4b4022 = 0x0;
        var _0x475ac9 = 0x0;
        var _0x5729b4 = 0x0;
        var _0x311d8d = 0x0;
        var _0x238f8f = 0x0;
        var _0x2c5817 = 0x0;
        var _0xc650a = 0x0;
        var _0x431a88 = 0x0;
        var _0x14d320 = 0x0;
        var _0x2e8521 = 0x0;
        var _0x13fe5d = 0x0;
        var _0x3692ae = 0x0;
        var _0xd2ed70 = 0x0;
        var _0x2f2809 = 0x0;
        var _0x4a707a = 0x0;
        var _0x3aede7 = 0x0;
        var _0x2169d7 = 0x0;
        var _0x480207 = 0x0;
        var _0x5b30ba = 0x0;
        var _0x518c33 = 0x0;
        var _0x1dce0f = 0x0;
        var _0x55c139 = 0x0;
        var _0x262ecf = 0x0;
        var _0x30bb2f = 0x0;
        var _0x13ab19 = _0x22058f[0x0];
        var _0x2c1199 = _0x22058f[0x1];
        var _0x1b8d57 = _0x22058f[0x2];
        var _0x3f7825 = _0x22058f[0x3];
        var _0x6d4a43 = _0x22058f[0x4];
        var _0x730f78 = _0x22058f[0x5];
        var _0x14f0cd = _0x22058f[0x6];
        var _0x5a8763 = _0x22058f[0x7];
        var _0x382d87 = _0x22058f[0x8];
        var _0x4fab7c = _0x22058f[0x9];
        var _0x7aa785 = _0x22058f[0xa];
        var _0x7b303d = _0x22058f[0xb];
        var _0x113ffd = _0x22058f[0xc];
        var _0x5f10d5 = _0x22058f[0xd];
        var _0x126951 = _0x22058f[0xe];
        var _0x3b3221 = _0x22058f[0xf];
        _0x34c420 = _0x4f8fbf[0x0];
        _0x15c9bf += _0x34c420 * _0x13ab19;
        _0x47311f += _0x34c420 * _0x2c1199;
        _0x2c440e += _0x34c420 * _0x1b8d57;
        _0x3ec27a += _0x34c420 * _0x3f7825;
        _0x1408b7 += _0x34c420 * _0x6d4a43;
        _0x424b09 += _0x34c420 * _0x730f78;
        _0x24399c += _0x34c420 * _0x14f0cd;
        _0x4b4022 += _0x34c420 * _0x5a8763;
        _0x475ac9 += _0x34c420 * _0x382d87;
        _0x5729b4 += _0x34c420 * _0x4fab7c;
        _0x311d8d += _0x34c420 * _0x7aa785;
        _0x238f8f += _0x34c420 * _0x7b303d;
        _0x2c5817 += _0x34c420 * _0x113ffd;
        _0xc650a += _0x34c420 * _0x5f10d5;
        _0x431a88 += _0x34c420 * _0x126951;
        _0x14d320 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x1];
        _0x47311f += _0x34c420 * _0x13ab19;
        _0x2c440e += _0x34c420 * _0x2c1199;
        _0x3ec27a += _0x34c420 * _0x1b8d57;
        _0x1408b7 += _0x34c420 * _0x3f7825;
        _0x424b09 += _0x34c420 * _0x6d4a43;
        _0x24399c += _0x34c420 * _0x730f78;
        _0x4b4022 += _0x34c420 * _0x14f0cd;
        _0x475ac9 += _0x34c420 * _0x5a8763;
        _0x5729b4 += _0x34c420 * _0x382d87;
        _0x311d8d += _0x34c420 * _0x4fab7c;
        _0x238f8f += _0x34c420 * _0x7aa785;
        _0x2c5817 += _0x34c420 * _0x7b303d;
        _0xc650a += _0x34c420 * _0x113ffd;
        _0x431a88 += _0x34c420 * _0x5f10d5;
        _0x14d320 += _0x34c420 * _0x126951;
        _0x2e8521 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x2];
        _0x2c440e += _0x34c420 * _0x13ab19;
        _0x3ec27a += _0x34c420 * _0x2c1199;
        _0x1408b7 += _0x34c420 * _0x1b8d57;
        _0x424b09 += _0x34c420 * _0x3f7825;
        _0x24399c += _0x34c420 * _0x6d4a43;
        _0x4b4022 += _0x34c420 * _0x730f78;
        _0x475ac9 += _0x34c420 * _0x14f0cd;
        _0x5729b4 += _0x34c420 * _0x5a8763;
        _0x311d8d += _0x34c420 * _0x382d87;
        _0x238f8f += _0x34c420 * _0x4fab7c;
        _0x2c5817 += _0x34c420 * _0x7aa785;
        _0xc650a += _0x34c420 * _0x7b303d;
        _0x431a88 += _0x34c420 * _0x113ffd;
        _0x14d320 += _0x34c420 * _0x5f10d5;
        _0x2e8521 += _0x34c420 * _0x126951;
        _0x13fe5d += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x3];
        _0x3ec27a += _0x34c420 * _0x13ab19;
        _0x1408b7 += _0x34c420 * _0x2c1199;
        _0x424b09 += _0x34c420 * _0x1b8d57;
        _0x24399c += _0x34c420 * _0x3f7825;
        _0x4b4022 += _0x34c420 * _0x6d4a43;
        _0x475ac9 += _0x34c420 * _0x730f78;
        _0x5729b4 += _0x34c420 * _0x14f0cd;
        _0x311d8d += _0x34c420 * _0x5a8763;
        _0x238f8f += _0x34c420 * _0x382d87;
        _0x2c5817 += _0x34c420 * _0x4fab7c;
        _0xc650a += _0x34c420 * _0x7aa785;
        _0x431a88 += _0x34c420 * _0x7b303d;
        _0x14d320 += _0x34c420 * _0x113ffd;
        _0x2e8521 += _0x34c420 * _0x5f10d5;
        _0x13fe5d += _0x34c420 * _0x126951;
        _0x3692ae += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x4];
        _0x1408b7 += _0x34c420 * _0x13ab19;
        _0x424b09 += _0x34c420 * _0x2c1199;
        _0x24399c += _0x34c420 * _0x1b8d57;
        _0x4b4022 += _0x34c420 * _0x3f7825;
        _0x475ac9 += _0x34c420 * _0x6d4a43;
        _0x5729b4 += _0x34c420 * _0x730f78;
        _0x311d8d += _0x34c420 * _0x14f0cd;
        _0x238f8f += _0x34c420 * _0x5a8763;
        _0x2c5817 += _0x34c420 * _0x382d87;
        _0xc650a += _0x34c420 * _0x4fab7c;
        _0x431a88 += _0x34c420 * _0x7aa785;
        _0x14d320 += _0x34c420 * _0x7b303d;
        _0x2e8521 += _0x34c420 * _0x113ffd;
        _0x13fe5d += _0x34c420 * _0x5f10d5;
        _0x3692ae += _0x34c420 * _0x126951;
        _0xd2ed70 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x5];
        _0x424b09 += _0x34c420 * _0x13ab19;
        _0x24399c += _0x34c420 * _0x2c1199;
        _0x4b4022 += _0x34c420 * _0x1b8d57;
        _0x475ac9 += _0x34c420 * _0x3f7825;
        _0x5729b4 += _0x34c420 * _0x6d4a43;
        _0x311d8d += _0x34c420 * _0x730f78;
        _0x238f8f += _0x34c420 * _0x14f0cd;
        _0x2c5817 += _0x34c420 * _0x5a8763;
        _0xc650a += _0x34c420 * _0x382d87;
        _0x431a88 += _0x34c420 * _0x4fab7c;
        _0x14d320 += _0x34c420 * _0x7aa785;
        _0x2e8521 += _0x34c420 * _0x7b303d;
        _0x13fe5d += _0x34c420 * _0x113ffd;
        _0x3692ae += _0x34c420 * _0x5f10d5;
        _0xd2ed70 += _0x34c420 * _0x126951;
        _0x2f2809 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x6];
        _0x24399c += _0x34c420 * _0x13ab19;
        _0x4b4022 += _0x34c420 * _0x2c1199;
        _0x475ac9 += _0x34c420 * _0x1b8d57;
        _0x5729b4 += _0x34c420 * _0x3f7825;
        _0x311d8d += _0x34c420 * _0x6d4a43;
        _0x238f8f += _0x34c420 * _0x730f78;
        _0x2c5817 += _0x34c420 * _0x14f0cd;
        _0xc650a += _0x34c420 * _0x5a8763;
        _0x431a88 += _0x34c420 * _0x382d87;
        _0x14d320 += _0x34c420 * _0x4fab7c;
        _0x2e8521 += _0x34c420 * _0x7aa785;
        _0x13fe5d += _0x34c420 * _0x7b303d;
        _0x3692ae += _0x34c420 * _0x113ffd;
        _0xd2ed70 += _0x34c420 * _0x5f10d5;
        _0x2f2809 += _0x34c420 * _0x126951;
        _0x4a707a += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x7];
        _0x4b4022 += _0x34c420 * _0x13ab19;
        _0x475ac9 += _0x34c420 * _0x2c1199;
        _0x5729b4 += _0x34c420 * _0x1b8d57;
        _0x311d8d += _0x34c420 * _0x3f7825;
        _0x238f8f += _0x34c420 * _0x6d4a43;
        _0x2c5817 += _0x34c420 * _0x730f78;
        _0xc650a += _0x34c420 * _0x14f0cd;
        _0x431a88 += _0x34c420 * _0x5a8763;
        _0x14d320 += _0x34c420 * _0x382d87;
        _0x2e8521 += _0x34c420 * _0x4fab7c;
        _0x13fe5d += _0x34c420 * _0x7aa785;
        _0x3692ae += _0x34c420 * _0x7b303d;
        _0xd2ed70 += _0x34c420 * _0x113ffd;
        _0x2f2809 += _0x34c420 * _0x5f10d5;
        _0x4a707a += _0x34c420 * _0x126951;
        _0x3aede7 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x8];
        _0x475ac9 += _0x34c420 * _0x13ab19;
        _0x5729b4 += _0x34c420 * _0x2c1199;
        _0x311d8d += _0x34c420 * _0x1b8d57;
        _0x238f8f += _0x34c420 * _0x3f7825;
        _0x2c5817 += _0x34c420 * _0x6d4a43;
        _0xc650a += _0x34c420 * _0x730f78;
        _0x431a88 += _0x34c420 * _0x14f0cd;
        _0x14d320 += _0x34c420 * _0x5a8763;
        _0x2e8521 += _0x34c420 * _0x382d87;
        _0x13fe5d += _0x34c420 * _0x4fab7c;
        _0x3692ae += _0x34c420 * _0x7aa785;
        _0xd2ed70 += _0x34c420 * _0x7b303d;
        _0x2f2809 += _0x34c420 * _0x113ffd;
        _0x4a707a += _0x34c420 * _0x5f10d5;
        _0x3aede7 += _0x34c420 * _0x126951;
        _0x2169d7 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0x9];
        _0x5729b4 += _0x34c420 * _0x13ab19;
        _0x311d8d += _0x34c420 * _0x2c1199;
        _0x238f8f += _0x34c420 * _0x1b8d57;
        _0x2c5817 += _0x34c420 * _0x3f7825;
        _0xc650a += _0x34c420 * _0x6d4a43;
        _0x431a88 += _0x34c420 * _0x730f78;
        _0x14d320 += _0x34c420 * _0x14f0cd;
        _0x2e8521 += _0x34c420 * _0x5a8763;
        _0x13fe5d += _0x34c420 * _0x382d87;
        _0x3692ae += _0x34c420 * _0x4fab7c;
        _0xd2ed70 += _0x34c420 * _0x7aa785;
        _0x2f2809 += _0x34c420 * _0x7b303d;
        _0x4a707a += _0x34c420 * _0x113ffd;
        _0x3aede7 += _0x34c420 * _0x5f10d5;
        _0x2169d7 += _0x34c420 * _0x126951;
        _0x480207 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0xa];
        _0x311d8d += _0x34c420 * _0x13ab19;
        _0x238f8f += _0x34c420 * _0x2c1199;
        _0x2c5817 += _0x34c420 * _0x1b8d57;
        _0xc650a += _0x34c420 * _0x3f7825;
        _0x431a88 += _0x34c420 * _0x6d4a43;
        _0x14d320 += _0x34c420 * _0x730f78;
        _0x2e8521 += _0x34c420 * _0x14f0cd;
        _0x13fe5d += _0x34c420 * _0x5a8763;
        _0x3692ae += _0x34c420 * _0x382d87;
        _0xd2ed70 += _0x34c420 * _0x4fab7c;
        _0x2f2809 += _0x34c420 * _0x7aa785;
        _0x4a707a += _0x34c420 * _0x7b303d;
        _0x3aede7 += _0x34c420 * _0x113ffd;
        _0x2169d7 += _0x34c420 * _0x5f10d5;
        _0x480207 += _0x34c420 * _0x126951;
        _0x5b30ba += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0xb];
        _0x238f8f += _0x34c420 * _0x13ab19;
        _0x2c5817 += _0x34c420 * _0x2c1199;
        _0xc650a += _0x34c420 * _0x1b8d57;
        _0x431a88 += _0x34c420 * _0x3f7825;
        _0x14d320 += _0x34c420 * _0x6d4a43;
        _0x2e8521 += _0x34c420 * _0x730f78;
        _0x13fe5d += _0x34c420 * _0x14f0cd;
        _0x3692ae += _0x34c420 * _0x5a8763;
        _0xd2ed70 += _0x34c420 * _0x382d87;
        _0x2f2809 += _0x34c420 * _0x4fab7c;
        _0x4a707a += _0x34c420 * _0x7aa785;
        _0x3aede7 += _0x34c420 * _0x7b303d;
        _0x2169d7 += _0x34c420 * _0x113ffd;
        _0x480207 += _0x34c420 * _0x5f10d5;
        _0x5b30ba += _0x34c420 * _0x126951;
        _0x518c33 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0xc];
        _0x2c5817 += _0x34c420 * _0x13ab19;
        _0xc650a += _0x34c420 * _0x2c1199;
        _0x431a88 += _0x34c420 * _0x1b8d57;
        _0x14d320 += _0x34c420 * _0x3f7825;
        _0x2e8521 += _0x34c420 * _0x6d4a43;
        _0x13fe5d += _0x34c420 * _0x730f78;
        _0x3692ae += _0x34c420 * _0x14f0cd;
        _0xd2ed70 += _0x34c420 * _0x5a8763;
        _0x2f2809 += _0x34c420 * _0x382d87;
        _0x4a707a += _0x34c420 * _0x4fab7c;
        _0x3aede7 += _0x34c420 * _0x7aa785;
        _0x2169d7 += _0x34c420 * _0x7b303d;
        _0x480207 += _0x34c420 * _0x113ffd;
        _0x5b30ba += _0x34c420 * _0x5f10d5;
        _0x518c33 += _0x34c420 * _0x126951;
        _0x1dce0f += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0xd];
        _0xc650a += _0x34c420 * _0x13ab19;
        _0x431a88 += _0x34c420 * _0x2c1199;
        _0x14d320 += _0x34c420 * _0x1b8d57;
        _0x2e8521 += _0x34c420 * _0x3f7825;
        _0x13fe5d += _0x34c420 * _0x6d4a43;
        _0x3692ae += _0x34c420 * _0x730f78;
        _0xd2ed70 += _0x34c420 * _0x14f0cd;
        _0x2f2809 += _0x34c420 * _0x5a8763;
        _0x4a707a += _0x34c420 * _0x382d87;
        _0x3aede7 += _0x34c420 * _0x4fab7c;
        _0x2169d7 += _0x34c420 * _0x7aa785;
        _0x480207 += _0x34c420 * _0x7b303d;
        _0x5b30ba += _0x34c420 * _0x113ffd;
        _0x518c33 += _0x34c420 * _0x5f10d5;
        _0x1dce0f += _0x34c420 * _0x126951;
        _0x55c139 += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0xe];
        _0x431a88 += _0x34c420 * _0x13ab19;
        _0x14d320 += _0x34c420 * _0x2c1199;
        _0x2e8521 += _0x34c420 * _0x1b8d57;
        _0x13fe5d += _0x34c420 * _0x3f7825;
        _0x3692ae += _0x34c420 * _0x6d4a43;
        _0xd2ed70 += _0x34c420 * _0x730f78;
        _0x2f2809 += _0x34c420 * _0x14f0cd;
        _0x4a707a += _0x34c420 * _0x5a8763;
        _0x3aede7 += _0x34c420 * _0x382d87;
        _0x2169d7 += _0x34c420 * _0x4fab7c;
        _0x480207 += _0x34c420 * _0x7aa785;
        _0x5b30ba += _0x34c420 * _0x7b303d;
        _0x518c33 += _0x34c420 * _0x113ffd;
        _0x1dce0f += _0x34c420 * _0x5f10d5;
        _0x55c139 += _0x34c420 * _0x126951;
        _0x262ecf += _0x34c420 * _0x3b3221;
        _0x34c420 = _0x4f8fbf[0xf];
        _0x14d320 += _0x34c420 * _0x13ab19;
        _0x2e8521 += _0x34c420 * _0x2c1199;
        _0x13fe5d += _0x34c420 * _0x1b8d57;
        _0x3692ae += _0x34c420 * _0x3f7825;
        _0xd2ed70 += _0x34c420 * _0x6d4a43;
        _0x2f2809 += _0x34c420 * _0x730f78;
        _0x4a707a += _0x34c420 * _0x14f0cd;
        _0x3aede7 += _0x34c420 * _0x5a8763;
        _0x2169d7 += _0x34c420 * _0x382d87;
        _0x480207 += _0x34c420 * _0x4fab7c;
        _0x5b30ba += _0x34c420 * _0x7aa785;
        _0x518c33 += _0x34c420 * _0x7b303d;
        _0x1dce0f += _0x34c420 * _0x113ffd;
        _0x55c139 += _0x34c420 * _0x5f10d5;
        _0x262ecf += _0x34c420 * _0x126951;
        _0x30bb2f += _0x34c420 * _0x3b3221;
        _0x15c9bf += 0x26 * _0x2e8521;
        _0x47311f += 0x26 * _0x13fe5d;
        _0x2c440e += 0x26 * _0x3692ae;
        _0x3ec27a += 0x26 * _0xd2ed70;
        _0x1408b7 += 0x26 * _0x2f2809;
        _0x424b09 += 0x26 * _0x4a707a;
        _0x24399c += 0x26 * _0x3aede7;
        _0x4b4022 += 0x26 * _0x2169d7;
        _0x475ac9 += 0x26 * _0x480207;
        _0x5729b4 += 0x26 * _0x5b30ba;
        _0x311d8d += 0x26 * _0x518c33;
        _0x238f8f += 0x26 * _0x1dce0f;
        _0x2c5817 += 0x26 * _0x55c139;
        _0xc650a += 0x26 * _0x262ecf;
        _0x431a88 += 0x26 * _0x30bb2f;
        _0x3cab0a = 0x1;
        _0x34c420 = _0x15c9bf + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x15c9bf = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x47311f + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x47311f = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x2c440e + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x2c440e = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x3ec27a + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x3ec27a = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x1408b7 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x1408b7 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x424b09 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x424b09 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x24399c + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x24399c = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x4b4022 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x4b4022 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x475ac9 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x475ac9 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x5729b4 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x5729b4 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x311d8d + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x311d8d = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x238f8f + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x238f8f = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x2c5817 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x2c5817 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0xc650a + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0xc650a = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x431a88 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x431a88 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x14d320 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x14d320 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x15c9bf += _0x3cab0a - 0x1 + 0x25 * (_0x3cab0a - 0x1);
        _0x3cab0a = 0x1;
        _0x34c420 = _0x15c9bf + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x15c9bf = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x47311f + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x47311f = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x2c440e + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x2c440e = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x3ec27a + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x3ec27a = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x1408b7 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x1408b7 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x424b09 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x424b09 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x24399c + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x24399c = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x4b4022 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x4b4022 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x475ac9 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x475ac9 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x5729b4 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x5729b4 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x311d8d + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x311d8d = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x238f8f + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x238f8f = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x2c5817 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x2c5817 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0xc650a + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0xc650a = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x431a88 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x431a88 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x34c420 = _0x14d320 + _0x3cab0a + 0xffff;
        _0x3cab0a = Math.floor(_0x34c420 / 0x10000);
        _0x14d320 = _0x34c420 - _0x3cab0a * 0x10000;
        _0x15c9bf += _0x3cab0a - 0x1 + 0x25 * (_0x3cab0a - 0x1);
        _0x238785[0x0] = _0x15c9bf;
        _0x238785[0x1] = _0x47311f;
        _0x238785[0x2] = _0x2c440e;
        _0x238785[0x3] = _0x3ec27a;
        _0x238785[0x4] = _0x1408b7;
        _0x238785[0x5] = _0x424b09;
        _0x238785[0x6] = _0x24399c;
        _0x238785[0x7] = _0x4b4022;
        _0x238785[0x8] = _0x475ac9;
        _0x238785[0x9] = _0x5729b4;
        _0x238785[0xa] = _0x311d8d;
        _0x238785[0xb] = _0x238f8f;
        _0x238785[0xc] = _0x2c5817;
        _0x238785[0xd] = _0xc650a;
        _0x238785[0xe] = _0x431a88;
        _0x238785[0xf] = _0x14d320;
      }
      __defProp(_0x102314, "name", {
        'value': 'M',
        'configurable': true
      });
      function _0x58952b(_0xc42103, _0x3dfae8) {
        _0x102314(_0xc42103, _0x3dfae8, _0x3dfae8);
      }
      __defProp(_0x58952b, "name", {
        'value': 'S',
        'configurable': true
      });
      function _0x3b30a9(_0x55cbf2, _0x2e3c31) {
        var _0x210df6 = _0xa7b002();
        var _0x3b0411;
        for (_0x3b0411 = 0x0; _0x3b0411 < 0x10; _0x3b0411++) {
          _0x210df6[_0x3b0411] = _0x2e3c31[_0x3b0411];
        }
        for (_0x3b0411 = 0xfd; _0x3b0411 >= 0x0; _0x3b0411--) {
          _0x58952b(_0x210df6, _0x210df6);
          if (_0x3b0411 !== 0x2 && _0x3b0411 !== 0x4) {
            _0x102314(_0x210df6, _0x210df6, _0x2e3c31);
          }
        }
        for (_0x3b0411 = 0x0; _0x3b0411 < 0x10; _0x3b0411++) {
          _0x55cbf2[_0x3b0411] = _0x210df6[_0x3b0411];
        }
      }
      __defProp(_0x3b30a9, "name", {
        'value': "inv25519",
        'configurable': true
      });
      function _0x1ae375(_0x1fd530, _0xe14c97) {
        var _0x38b7fa = _0xa7b002();
        var _0x3f5715;
        for (_0x3f5715 = 0x0; _0x3f5715 < 0x10; _0x3f5715++) {
          _0x38b7fa[_0x3f5715] = _0xe14c97[_0x3f5715];
        }
        for (_0x3f5715 = 0xfa; _0x3f5715 >= 0x0; _0x3f5715--) {
          _0x58952b(_0x38b7fa, _0x38b7fa);
          if (_0x3f5715 !== 0x1) {
            _0x102314(_0x38b7fa, _0x38b7fa, _0xe14c97);
          }
        }
        for (_0x3f5715 = 0x0; _0x3f5715 < 0x10; _0x3f5715++) {
          _0x1fd530[_0x3f5715] = _0x38b7fa[_0x3f5715];
        }
      }
      __defProp(_0x1ae375, "name", {
        'value': "pow2523",
        'configurable': true
      });
      function _0x539a98(_0x57635a, _0x26623d, _0x4df62b) {
        var _0x263dbd = new Uint8Array(0x20);
        var _0x101ed4 = new Float64Array(0x50);
        var _0x5c4b3c;
        var _0x5379d2;
        var _0x3dd350 = _0xa7b002();
        var _0xed0df6 = _0xa7b002();
        var _0x2e1261 = _0xa7b002();
        var _0x3d3b95 = _0xa7b002();
        var _0x1c16aa = _0xa7b002();
        var _0x36daa7 = _0xa7b002();
        for (_0x5379d2 = 0x0; _0x5379d2 < 0x1f; _0x5379d2++) {
          _0x263dbd[_0x5379d2] = _0x26623d[_0x5379d2];
        }
        _0x263dbd[0x1f] = _0x26623d[0x1f] & 0x7f | 0x40;
        _0x263dbd[0x0] &= 0xf8;
        _0x1f6b32(_0x101ed4, _0x4df62b);
        for (_0x5379d2 = 0x0; _0x5379d2 < 0x10; _0x5379d2++) {
          _0xed0df6[_0x5379d2] = _0x101ed4[_0x5379d2];
          _0x3d3b95[_0x5379d2] = _0x3dd350[_0x5379d2] = _0x2e1261[_0x5379d2] = 0x0;
        }
        _0x3dd350[0x0] = _0x3d3b95[0x0] = 0x1;
        for (_0x5379d2 = 0xfe; _0x5379d2 >= 0x0; --_0x5379d2) {
          _0x5c4b3c = _0x263dbd[_0x5379d2 >>> 0x3] >>> (_0x5379d2 & 0x7) & 0x1;
          _0x1c6753(_0x3dd350, _0xed0df6, _0x5c4b3c);
          _0x1c6753(_0x2e1261, _0x3d3b95, _0x5c4b3c);
          _0x2cb160(_0x1c16aa, _0x3dd350, _0x2e1261);
          _0x3f2745(_0x3dd350, _0x3dd350, _0x2e1261);
          _0x2cb160(_0x2e1261, _0xed0df6, _0x3d3b95);
          _0x3f2745(_0xed0df6, _0xed0df6, _0x3d3b95);
          _0x58952b(_0x3d3b95, _0x1c16aa);
          _0x58952b(_0x36daa7, _0x3dd350);
          _0x102314(_0x3dd350, _0x2e1261, _0x3dd350);
          _0x102314(_0x2e1261, _0xed0df6, _0x1c16aa);
          _0x2cb160(_0x1c16aa, _0x3dd350, _0x2e1261);
          _0x3f2745(_0x3dd350, _0x3dd350, _0x2e1261);
          _0x58952b(_0xed0df6, _0x3dd350);
          _0x3f2745(_0x2e1261, _0x3d3b95, _0x36daa7);
          _0x102314(_0x3dd350, _0x2e1261, _0x88af0b);
          _0x2cb160(_0x3dd350, _0x3dd350, _0x3d3b95);
          _0x102314(_0x2e1261, _0x2e1261, _0x3dd350);
          _0x102314(_0x3dd350, _0x3d3b95, _0x36daa7);
          _0x102314(_0x3d3b95, _0xed0df6, _0x101ed4);
          _0x58952b(_0xed0df6, _0x1c16aa);
          _0x1c6753(_0x3dd350, _0xed0df6, _0x5c4b3c);
          _0x1c6753(_0x2e1261, _0x3d3b95, _0x5c4b3c);
        }
        for (_0x5379d2 = 0x0; _0x5379d2 < 0x10; _0x5379d2++) {
          _0x101ed4[_0x5379d2 + 0x10] = _0x3dd350[_0x5379d2];
          _0x101ed4[_0x5379d2 + 0x20] = _0x2e1261[_0x5379d2];
          _0x101ed4[_0x5379d2 + 0x30] = _0xed0df6[_0x5379d2];
          _0x101ed4[_0x5379d2 + 0x40] = _0x3d3b95[_0x5379d2];
        }
        var _0x14302d = _0x101ed4.subarray(0x20);
        var _0x168484 = _0x101ed4.subarray(0x10);
        _0x3b30a9(_0x14302d, _0x14302d);
        _0x102314(_0x168484, _0x168484, _0x14302d);
        _0x184fc9(_0x57635a, _0x168484);
        return 0x0;
      }
      __defProp(_0x539a98, "name", {
        'value': "crypto_scalarmult",
        'configurable': true
      });
      function _0x20bf42(_0x37f91c, _0x180927) {
        return _0x539a98(_0x37f91c, _0x180927, _0x27d00d);
      }
      __defProp(_0x20bf42, "name", {
        'value': "crypto_scalarmult_base",
        'configurable': true
      });
      function _0x569122(_0x3cdfe6, _0x5a00a8) {
        _0x19202a(_0x5a00a8, 0x20);
        return _0x539a98(_0x3cdfe6, _0x5a00a8, _0x27d00d);
      }
      __defProp(_0x569122, "name", {
        'value': "crypto_box_keypair",
        'configurable': true
      });
      function _0x447e55(_0x427913, _0x37d424, _0x5b4843) {
        var _0xd5f973 = new Uint8Array(0x20);
        _0x539a98(_0xd5f973, _0x5b4843, _0x37d424);
        return _0x3b71b5(_0x427913, _0x36ad7e, _0xd5f973, _0x2e452a);
      }
      __defProp(_0x447e55, "name", {
        'value': 'crypto_box_beforenm',
        'configurable': true
      });
      function _0x36d9aa(_0x53c793, _0x2d0856, _0x2ffd53, _0x342ebf, _0x1338c5, _0xc241f1) {
        var _0xd37e22 = new Uint8Array(0x20);
        _0x447e55(_0xd37e22, _0x1338c5, _0xc241f1);
        return _0x264a51(_0x53c793, _0x2d0856, _0x2ffd53, _0x342ebf, _0xd37e22);
      }
      __defProp(_0x36d9aa, "name", {
        'value': 'crypto_box',
        'configurable': true
      });
      function _0x15ea5c(_0xeaa07, _0x11e5b4, _0x305db9, _0x527986, _0x2a89ee, _0x26b58e) {
        var _0x3512d9 = new Uint8Array(0x20);
        _0x447e55(_0x3512d9, _0x2a89ee, _0x26b58e);
        return _0x4981b9(_0xeaa07, _0x11e5b4, _0x305db9, _0x527986, _0x3512d9);
      }
      __defProp(_0x15ea5c, "name", {
        'value': "crypto_box_open",
        'configurable': true
      });
      var _0x5bd269 = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
      function _0x4ce59b(_0x18b679, _0x1db9a8, _0x5e1741, _0x5c7415) {
        var _0x50a107 = new Int32Array(0x10);
        var _0x5fee7b = new Int32Array(0x10);
        var _0x349667;
        var _0x29b715;
        var _0x200a30;
        var _0x18069a;
        var _0x5245d8;
        var _0x3beace;
        var _0x2e02bf;
        var _0x187199;
        var _0xe4cb60;
        var _0x2e1770;
        var _0x330638;
        var _0x486d67;
        var _0xc42bad;
        var _0xceb6c0;
        var _0x3f3e50;
        var _0x2c61ea;
        var _0x148eaa;
        var _0xa48cf4;
        var _0x5703ef;
        var _0x2a80e4;
        var _0x3f8793;
        var _0x54daf0;
        var _0x3ea48c;
        var _0x4969e4;
        var _0x305be3;
        var _0x2b8185;
        var _0x112e41 = _0x18b679[0x0];
        var _0x1e9c10 = _0x18b679[0x1];
        var _0x49a2d7 = _0x18b679[0x2];
        var _0x20d7f5 = _0x18b679[0x3];
        var _0x35e10d = _0x18b679[0x4];
        var _0x4c4905 = _0x18b679[0x5];
        var _0x40e17c = _0x18b679[0x6];
        var _0x2d5f9b = _0x18b679[0x7];
        var _0x589ba7 = _0x1db9a8[0x0];
        var _0x18ef16 = _0x1db9a8[0x1];
        var _0x1a7526 = _0x1db9a8[0x2];
        var _0x2b6a36 = _0x1db9a8[0x3];
        var _0x5c77b6 = _0x1db9a8[0x4];
        var _0x44a375 = _0x1db9a8[0x5];
        var _0x412bae = _0x1db9a8[0x6];
        var _0x223df1 = _0x1db9a8[0x7];
        var _0xfece39 = 0x0;
        while (_0x5c7415 >= 0x80) {
          for (_0x5703ef = 0x0; _0x5703ef < 0x10; _0x5703ef++) {
            _0x2a80e4 = 0x8 * _0x5703ef + _0xfece39;
            _0x50a107[_0x5703ef] = _0x5e1741[_0x2a80e4 + 0x0] << 0x18 | _0x5e1741[_0x2a80e4 + 0x1] << 0x10 | _0x5e1741[_0x2a80e4 + 0x2] << 0x8 | _0x5e1741[_0x2a80e4 + 0x3];
            _0x5fee7b[_0x5703ef] = _0x5e1741[_0x2a80e4 + 0x4] << 0x18 | _0x5e1741[_0x2a80e4 + 0x5] << 0x10 | _0x5e1741[_0x2a80e4 + 0x6] << 0x8 | _0x5e1741[_0x2a80e4 + 0x7];
          }
          for (_0x5703ef = 0x0; _0x5703ef < 0x50; _0x5703ef++) {
            _0x349667 = _0x112e41;
            _0x29b715 = _0x1e9c10;
            _0x200a30 = _0x49a2d7;
            _0x18069a = _0x20d7f5;
            _0x5245d8 = _0x35e10d;
            _0x3beace = _0x4c4905;
            _0x2e02bf = _0x40e17c;
            _0x187199 = _0x2d5f9b;
            _0xe4cb60 = _0x589ba7;
            _0x2e1770 = _0x18ef16;
            _0x330638 = _0x1a7526;
            _0x486d67 = _0x2b6a36;
            _0xc42bad = _0x5c77b6;
            _0xceb6c0 = _0x44a375;
            _0x3f3e50 = _0x412bae;
            _0x2c61ea = _0x223df1;
            _0x3f8793 = _0x2d5f9b;
            _0x54daf0 = _0x223df1;
            _0x3ea48c = _0x54daf0 & 0xffff;
            _0x4969e4 = _0x54daf0 >>> 0x10;
            _0x305be3 = _0x3f8793 & 0xffff;
            _0x2b8185 = _0x3f8793 >>> 0x10;
            _0x3f8793 = (_0x35e10d >>> 0xe | _0x5c77b6 << 18) ^ (_0x35e10d >>> 0x12 | _0x5c77b6 << 14) ^ (_0x5c77b6 >>> 9 | _0x35e10d << 23);
            _0x54daf0 = (_0x5c77b6 >>> 0xe | _0x35e10d << 18) ^ (_0x5c77b6 >>> 0x12 | _0x35e10d << 14) ^ (_0x35e10d >>> 9 | _0x5c77b6 << 23);
            _0x3ea48c += _0x54daf0 & 0xffff;
            _0x4969e4 += _0x54daf0 >>> 0x10;
            _0x305be3 += _0x3f8793 & 0xffff;
            _0x2b8185 += _0x3f8793 >>> 0x10;
            _0x3f8793 = _0x35e10d & _0x4c4905 ^ ~_0x35e10d & _0x40e17c;
            _0x54daf0 = _0x5c77b6 & _0x44a375 ^ ~_0x5c77b6 & _0x412bae;
            _0x3ea48c += _0x54daf0 & 0xffff;
            _0x4969e4 += _0x54daf0 >>> 0x10;
            _0x305be3 += _0x3f8793 & 0xffff;
            _0x2b8185 += _0x3f8793 >>> 0x10;
            _0x3f8793 = _0x5bd269[_0x5703ef * 0x2];
            _0x54daf0 = _0x5bd269[_0x5703ef * 0x2 + 0x1];
            _0x3ea48c += _0x54daf0 & 0xffff;
            _0x4969e4 += _0x54daf0 >>> 0x10;
            _0x305be3 += _0x3f8793 & 0xffff;
            _0x2b8185 += _0x3f8793 >>> 0x10;
            _0x3f8793 = _0x50a107[_0x5703ef % 0x10];
            _0x54daf0 = _0x5fee7b[_0x5703ef % 0x10];
            _0x3ea48c += _0x54daf0 & 0xffff;
            _0x4969e4 += _0x54daf0 >>> 0x10;
            _0x305be3 += _0x3f8793 & 0xffff;
            _0x2b8185 += _0x3f8793 >>> 0x10;
            _0x4969e4 += _0x3ea48c >>> 0x10;
            _0x305be3 += _0x4969e4 >>> 0x10;
            _0x2b8185 += _0x305be3 >>> 0x10;
            _0x148eaa = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
            _0xa48cf4 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
            _0x3f8793 = _0x148eaa;
            _0x54daf0 = _0xa48cf4;
            _0x3ea48c = _0x54daf0 & 0xffff;
            _0x4969e4 = _0x54daf0 >>> 0x10;
            _0x305be3 = _0x3f8793 & 0xffff;
            _0x2b8185 = _0x3f8793 >>> 0x10;
            _0x3f8793 = (_0x112e41 >>> 0x1c | _0x589ba7 << 4) ^ (_0x589ba7 >>> 2 | _0x112e41 << 30) ^ (_0x589ba7 >>> 7 | _0x112e41 << 25);
            _0x54daf0 = (_0x589ba7 >>> 0x1c | _0x112e41 << 4) ^ (_0x112e41 >>> 2 | _0x589ba7 << 30) ^ (_0x112e41 >>> 7 | _0x589ba7 << 25);
            _0x3ea48c += _0x54daf0 & 0xffff;
            _0x4969e4 += _0x54daf0 >>> 0x10;
            _0x305be3 += _0x3f8793 & 0xffff;
            _0x2b8185 += _0x3f8793 >>> 0x10;
            _0x3f8793 = _0x112e41 & _0x1e9c10 ^ _0x112e41 & _0x49a2d7 ^ _0x1e9c10 & _0x49a2d7;
            _0x54daf0 = _0x589ba7 & _0x18ef16 ^ _0x589ba7 & _0x1a7526 ^ _0x18ef16 & _0x1a7526;
            _0x3ea48c += _0x54daf0 & 0xffff;
            _0x4969e4 += _0x54daf0 >>> 0x10;
            _0x305be3 += _0x3f8793 & 0xffff;
            _0x2b8185 += _0x3f8793 >>> 0x10;
            _0x4969e4 += _0x3ea48c >>> 0x10;
            _0x305be3 += _0x4969e4 >>> 0x10;
            _0x2b8185 += _0x305be3 >>> 0x10;
            _0x187199 = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
            _0x2c61ea = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
            _0x3f8793 = _0x18069a;
            _0x54daf0 = _0x486d67;
            _0x3ea48c = _0x54daf0 & 0xffff;
            _0x4969e4 = _0x54daf0 >>> 0x10;
            _0x305be3 = _0x3f8793 & 0xffff;
            _0x2b8185 = _0x3f8793 >>> 0x10;
            _0x3f8793 = _0x148eaa;
            _0x54daf0 = _0xa48cf4;
            _0x3ea48c += _0x54daf0 & 0xffff;
            _0x4969e4 += _0x54daf0 >>> 0x10;
            _0x305be3 += _0x3f8793 & 0xffff;
            _0x2b8185 += _0x3f8793 >>> 0x10;
            _0x4969e4 += _0x3ea48c >>> 0x10;
            _0x305be3 += _0x4969e4 >>> 0x10;
            _0x2b8185 += _0x305be3 >>> 0x10;
            _0x18069a = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
            _0x486d67 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
            _0x1e9c10 = _0x349667;
            _0x49a2d7 = _0x29b715;
            _0x20d7f5 = _0x200a30;
            _0x35e10d = _0x18069a;
            _0x4c4905 = _0x5245d8;
            _0x40e17c = _0x3beace;
            _0x2d5f9b = _0x2e02bf;
            _0x112e41 = _0x187199;
            _0x18ef16 = _0xe4cb60;
            _0x1a7526 = _0x2e1770;
            _0x2b6a36 = _0x330638;
            _0x5c77b6 = _0x486d67;
            _0x44a375 = _0xc42bad;
            _0x412bae = _0xceb6c0;
            _0x223df1 = _0x3f3e50;
            _0x589ba7 = _0x2c61ea;
            if (_0x5703ef % 0x10 === 0xf) {
              for (_0x2a80e4 = 0x0; _0x2a80e4 < 0x10; _0x2a80e4++) {
                _0x3f8793 = _0x50a107[_0x2a80e4];
                _0x54daf0 = _0x5fee7b[_0x2a80e4];
                _0x3ea48c = _0x54daf0 & 0xffff;
                _0x4969e4 = _0x54daf0 >>> 0x10;
                _0x305be3 = _0x3f8793 & 0xffff;
                _0x2b8185 = _0x3f8793 >>> 0x10;
                _0x3f8793 = _0x50a107[(_0x2a80e4 + 0x9) % 0x10];
                _0x54daf0 = _0x5fee7b[(_0x2a80e4 + 0x9) % 0x10];
                _0x3ea48c += _0x54daf0 & 0xffff;
                _0x4969e4 += _0x54daf0 >>> 0x10;
                _0x305be3 += _0x3f8793 & 0xffff;
                _0x2b8185 += _0x3f8793 >>> 0x10;
                _0x148eaa = _0x50a107[(_0x2a80e4 + 0x1) % 0x10];
                _0xa48cf4 = _0x5fee7b[(_0x2a80e4 + 0x1) % 0x10];
                _0x3f8793 = (_0x148eaa >>> 0x1 | _0xa48cf4 << 31) ^ (_0x148eaa >>> 0x8 | _0xa48cf4 << 24) ^ _0x148eaa >>> 0x7;
                _0x54daf0 = (_0xa48cf4 >>> 0x1 | _0x148eaa << 31) ^ (_0xa48cf4 >>> 0x8 | _0x148eaa << 24) ^ (_0xa48cf4 >>> 0x7 | _0x148eaa << 25);
                _0x3ea48c += _0x54daf0 & 0xffff;
                _0x4969e4 += _0x54daf0 >>> 0x10;
                _0x305be3 += _0x3f8793 & 0xffff;
                _0x2b8185 += _0x3f8793 >>> 0x10;
                _0x148eaa = _0x50a107[(_0x2a80e4 + 0xe) % 0x10];
                _0xa48cf4 = _0x5fee7b[(_0x2a80e4 + 0xe) % 0x10];
                _0x3f8793 = (_0x148eaa >>> 0x13 | _0xa48cf4 << 13) ^ (_0xa48cf4 >>> 29 | _0x148eaa << 3) ^ _0x148eaa >>> 0x6;
                _0x54daf0 = (_0xa48cf4 >>> 0x13 | _0x148eaa << 13) ^ (_0x148eaa >>> 29 | _0xa48cf4 << 3) ^ (_0xa48cf4 >>> 0x6 | _0x148eaa << 26);
                _0x3ea48c += _0x54daf0 & 0xffff;
                _0x4969e4 += _0x54daf0 >>> 0x10;
                _0x305be3 += _0x3f8793 & 0xffff;
                _0x2b8185 += _0x3f8793 >>> 0x10;
                _0x4969e4 += _0x3ea48c >>> 0x10;
                _0x305be3 += _0x4969e4 >>> 0x10;
                _0x2b8185 += _0x305be3 >>> 0x10;
                _0x50a107[_0x2a80e4] = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
                _0x5fee7b[_0x2a80e4] = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
              }
            }
          }
          _0x3f8793 = _0x112e41;
          _0x54daf0 = _0x589ba7;
          _0x3ea48c = _0x54daf0 & 0xffff;
          _0x4969e4 = _0x54daf0 >>> 0x10;
          _0x305be3 = _0x3f8793 & 0xffff;
          _0x2b8185 = _0x3f8793 >>> 0x10;
          _0x3f8793 = _0x18b679[0x0];
          _0x54daf0 = _0x1db9a8[0x0];
          _0x3ea48c += _0x54daf0 & 0xffff;
          _0x4969e4 += _0x54daf0 >>> 0x10;
          _0x305be3 += _0x3f8793 & 0xffff;
          _0x2b8185 += _0x3f8793 >>> 0x10;
          _0x4969e4 += _0x3ea48c >>> 0x10;
          _0x305be3 += _0x4969e4 >>> 0x10;
          _0x2b8185 += _0x305be3 >>> 0x10;
          _0x18b679[0x0] = _0x112e41 = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
          _0x1db9a8[0x0] = _0x589ba7 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
          _0x3f8793 = _0x1e9c10;
          _0x54daf0 = _0x18ef16;
          _0x3ea48c = _0x54daf0 & 0xffff;
          _0x4969e4 = _0x54daf0 >>> 0x10;
          _0x305be3 = _0x3f8793 & 0xffff;
          _0x2b8185 = _0x3f8793 >>> 0x10;
          _0x3f8793 = _0x18b679[0x1];
          _0x54daf0 = _0x1db9a8[0x1];
          _0x3ea48c += _0x54daf0 & 0xffff;
          _0x4969e4 += _0x54daf0 >>> 0x10;
          _0x305be3 += _0x3f8793 & 0xffff;
          _0x2b8185 += _0x3f8793 >>> 0x10;
          _0x4969e4 += _0x3ea48c >>> 0x10;
          _0x305be3 += _0x4969e4 >>> 0x10;
          _0x2b8185 += _0x305be3 >>> 0x10;
          _0x18b679[0x1] = _0x1e9c10 = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
          _0x1db9a8[0x1] = _0x18ef16 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
          _0x3f8793 = _0x49a2d7;
          _0x54daf0 = _0x1a7526;
          _0x3ea48c = _0x54daf0 & 0xffff;
          _0x4969e4 = _0x54daf0 >>> 0x10;
          _0x305be3 = _0x3f8793 & 0xffff;
          _0x2b8185 = _0x3f8793 >>> 0x10;
          _0x3f8793 = _0x18b679[0x2];
          _0x54daf0 = _0x1db9a8[0x2];
          _0x3ea48c += _0x54daf0 & 0xffff;
          _0x4969e4 += _0x54daf0 >>> 0x10;
          _0x305be3 += _0x3f8793 & 0xffff;
          _0x2b8185 += _0x3f8793 >>> 0x10;
          _0x4969e4 += _0x3ea48c >>> 0x10;
          _0x305be3 += _0x4969e4 >>> 0x10;
          _0x2b8185 += _0x305be3 >>> 0x10;
          _0x18b679[0x2] = _0x49a2d7 = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
          _0x1db9a8[0x2] = _0x1a7526 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
          _0x3f8793 = _0x20d7f5;
          _0x54daf0 = _0x2b6a36;
          _0x3ea48c = _0x54daf0 & 0xffff;
          _0x4969e4 = _0x54daf0 >>> 0x10;
          _0x305be3 = _0x3f8793 & 0xffff;
          _0x2b8185 = _0x3f8793 >>> 0x10;
          _0x3f8793 = _0x18b679[0x3];
          _0x54daf0 = _0x1db9a8[0x3];
          _0x3ea48c += _0x54daf0 & 0xffff;
          _0x4969e4 += _0x54daf0 >>> 0x10;
          _0x305be3 += _0x3f8793 & 0xffff;
          _0x2b8185 += _0x3f8793 >>> 0x10;
          _0x4969e4 += _0x3ea48c >>> 0x10;
          _0x305be3 += _0x4969e4 >>> 0x10;
          _0x2b8185 += _0x305be3 >>> 0x10;
          _0x18b679[0x3] = _0x20d7f5 = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
          _0x1db9a8[0x3] = _0x2b6a36 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
          _0x3f8793 = _0x35e10d;
          _0x54daf0 = _0x5c77b6;
          _0x3ea48c = _0x54daf0 & 0xffff;
          _0x4969e4 = _0x54daf0 >>> 0x10;
          _0x305be3 = _0x3f8793 & 0xffff;
          _0x2b8185 = _0x3f8793 >>> 0x10;
          _0x3f8793 = _0x18b679[0x4];
          _0x54daf0 = _0x1db9a8[0x4];
          _0x3ea48c += _0x54daf0 & 0xffff;
          _0x4969e4 += _0x54daf0 >>> 0x10;
          _0x305be3 += _0x3f8793 & 0xffff;
          _0x2b8185 += _0x3f8793 >>> 0x10;
          _0x4969e4 += _0x3ea48c >>> 0x10;
          _0x305be3 += _0x4969e4 >>> 0x10;
          _0x2b8185 += _0x305be3 >>> 0x10;
          _0x18b679[0x4] = _0x35e10d = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
          _0x1db9a8[0x4] = _0x5c77b6 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
          _0x3f8793 = _0x4c4905;
          _0x54daf0 = _0x44a375;
          _0x3ea48c = _0x54daf0 & 0xffff;
          _0x4969e4 = _0x54daf0 >>> 0x10;
          _0x305be3 = _0x3f8793 & 0xffff;
          _0x2b8185 = _0x3f8793 >>> 0x10;
          _0x3f8793 = _0x18b679[0x5];
          _0x54daf0 = _0x1db9a8[0x5];
          _0x3ea48c += _0x54daf0 & 0xffff;
          _0x4969e4 += _0x54daf0 >>> 0x10;
          _0x305be3 += _0x3f8793 & 0xffff;
          _0x2b8185 += _0x3f8793 >>> 0x10;
          _0x4969e4 += _0x3ea48c >>> 0x10;
          _0x305be3 += _0x4969e4 >>> 0x10;
          _0x2b8185 += _0x305be3 >>> 0x10;
          _0x18b679[0x5] = _0x4c4905 = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
          _0x1db9a8[0x5] = _0x44a375 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
          _0x3f8793 = _0x40e17c;
          _0x54daf0 = _0x412bae;
          _0x3ea48c = _0x54daf0 & 0xffff;
          _0x4969e4 = _0x54daf0 >>> 0x10;
          _0x305be3 = _0x3f8793 & 0xffff;
          _0x2b8185 = _0x3f8793 >>> 0x10;
          _0x3f8793 = _0x18b679[0x6];
          _0x54daf0 = _0x1db9a8[0x6];
          _0x3ea48c += _0x54daf0 & 0xffff;
          _0x4969e4 += _0x54daf0 >>> 0x10;
          _0x305be3 += _0x3f8793 & 0xffff;
          _0x2b8185 += _0x3f8793 >>> 0x10;
          _0x4969e4 += _0x3ea48c >>> 0x10;
          _0x305be3 += _0x4969e4 >>> 0x10;
          _0x2b8185 += _0x305be3 >>> 0x10;
          _0x18b679[0x6] = _0x40e17c = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
          _0x1db9a8[0x6] = _0x412bae = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
          _0x3f8793 = _0x2d5f9b;
          _0x54daf0 = _0x223df1;
          _0x3ea48c = _0x54daf0 & 0xffff;
          _0x4969e4 = _0x54daf0 >>> 0x10;
          _0x305be3 = _0x3f8793 & 0xffff;
          _0x2b8185 = _0x3f8793 >>> 0x10;
          _0x3f8793 = _0x18b679[0x7];
          _0x54daf0 = _0x1db9a8[0x7];
          _0x3ea48c += _0x54daf0 & 0xffff;
          _0x4969e4 += _0x54daf0 >>> 0x10;
          _0x305be3 += _0x3f8793 & 0xffff;
          _0x2b8185 += _0x3f8793 >>> 0x10;
          _0x4969e4 += _0x3ea48c >>> 0x10;
          _0x305be3 += _0x4969e4 >>> 0x10;
          _0x2b8185 += _0x305be3 >>> 0x10;
          _0x18b679[0x7] = _0x2d5f9b = _0x305be3 & 0xffff | _0x2b8185 << 0x10;
          _0x1db9a8[0x7] = _0x223df1 = _0x3ea48c & 0xffff | _0x4969e4 << 0x10;
          _0xfece39 += 0x80;
          _0x5c7415 -= 0x80;
        }
        return _0x5c7415;
      }
      __defProp(_0x4ce59b, "name", {
        'value': 'crypto_hashblocks_hl',
        'configurable': true
      });
      function _0x39f222(_0x511641, _0x1f38b3, _0x1360d0) {
        var _0x41ce43 = new Int32Array(0x8);
        var _0x46d71c = new Int32Array(0x8);
        var _0x5b62b0 = new Uint8Array(0x100);
        var _0x2ec435;
        var _0x59c03e = _0x1360d0;
        _0x41ce43[0x0] = 0x6a09e667;
        _0x41ce43[0x1] = 0xbb67ae85;
        _0x41ce43[0x2] = 0x3c6ef372;
        _0x41ce43[0x3] = 0xa54ff53a;
        _0x41ce43[0x4] = 0x510e527f;
        _0x41ce43[0x5] = 0x9b05688c;
        _0x41ce43[0x6] = 0x1f83d9ab;
        _0x41ce43[0x7] = 0x5be0cd19;
        _0x46d71c[0x0] = 0xf3bcc908;
        _0x46d71c[0x1] = 0x84caa73b;
        _0x46d71c[0x2] = 0xfe94f82b;
        _0x46d71c[0x3] = 0x5f1d36f1;
        _0x46d71c[0x4] = 0xade682d1;
        _0x46d71c[0x5] = 0x2b3e6c1f;
        _0x46d71c[0x6] = 0xfb41bd6b;
        _0x46d71c[0x7] = 0x137e2179;
        _0x4ce59b(_0x41ce43, _0x46d71c, _0x1f38b3, _0x1360d0);
        _0x1360d0 %= 0x80;
        for (_0x2ec435 = 0x0; _0x2ec435 < _0x1360d0; _0x2ec435++) {
          _0x5b62b0[_0x2ec435] = _0x1f38b3[_0x59c03e - _0x1360d0 + _0x2ec435];
        }
        _0x5b62b0[_0x1360d0] = 0x80;
        _0x1360d0 = 0x100 - 0x80 * (_0x1360d0 < 0x70 ? 0x1 : 0x0);
        _0x5b62b0[_0x1360d0 - 0x9] = 0x0;
        _0x46c6a9(_0x5b62b0, _0x1360d0 - 0x8, _0x59c03e / 0x20000000 | 0x0, _0x59c03e << 0x3);
        _0x4ce59b(_0x41ce43, _0x46d71c, _0x5b62b0, _0x1360d0);
        for (_0x2ec435 = 0x0; _0x2ec435 < 0x8; _0x2ec435++) {
          _0x46c6a9(_0x511641, 0x8 * _0x2ec435, _0x41ce43[_0x2ec435], _0x46d71c[_0x2ec435]);
        }
        return 0x0;
      }
      __defProp(_0x39f222, "name", {
        'value': "crypto_hash",
        'configurable': true
      });
      function _0x2f0572(_0x1480e1, _0x502ac0) {
        var _0x1614f2 = _0xa7b002();
        var _0x47efbc = _0xa7b002();
        var _0x454af9 = _0xa7b002();
        var _0x33d56c = _0xa7b002();
        var _0x1a7496 = _0xa7b002();
        var _0x1e7028 = _0xa7b002();
        var _0x3f6ff3 = _0xa7b002();
        var _0x405858 = _0xa7b002();
        var _0x3d7131 = _0xa7b002();
        _0x3f2745(_0x1614f2, _0x1480e1[0x1], _0x1480e1[0x0]);
        _0x3f2745(_0x3d7131, _0x502ac0[0x1], _0x502ac0[0x0]);
        _0x102314(_0x1614f2, _0x1614f2, _0x3d7131);
        _0x2cb160(_0x47efbc, _0x1480e1[0x0], _0x1480e1[0x1]);
        _0x2cb160(_0x3d7131, _0x502ac0[0x0], _0x502ac0[0x1]);
        _0x102314(_0x47efbc, _0x47efbc, _0x3d7131);
        _0x102314(_0x454af9, _0x1480e1[0x3], _0x502ac0[0x3]);
        _0x102314(_0x454af9, _0x454af9, _0x554702);
        _0x102314(_0x33d56c, _0x1480e1[0x2], _0x502ac0[0x2]);
        _0x2cb160(_0x33d56c, _0x33d56c, _0x33d56c);
        _0x3f2745(_0x1a7496, _0x47efbc, _0x1614f2);
        _0x3f2745(_0x1e7028, _0x33d56c, _0x454af9);
        _0x2cb160(_0x3f6ff3, _0x33d56c, _0x454af9);
        _0x2cb160(_0x405858, _0x47efbc, _0x1614f2);
        _0x102314(_0x1480e1[0x0], _0x1a7496, _0x1e7028);
        _0x102314(_0x1480e1[0x1], _0x405858, _0x3f6ff3);
        _0x102314(_0x1480e1[0x2], _0x3f6ff3, _0x1e7028);
        _0x102314(_0x1480e1[0x3], _0x1a7496, _0x405858);
      }
      __defProp(_0x2f0572, "name", {
        'value': "add",
        'configurable': true
      });
      function _0xe7535c(_0x3efc66, _0xc4678f, _0x1565c6) {
        var _0x494a06;
        for (_0x494a06 = 0x0; _0x494a06 < 0x4; _0x494a06++) {
          _0x1c6753(_0x3efc66[_0x494a06], _0xc4678f[_0x494a06], _0x1565c6);
        }
      }
      __defProp(_0xe7535c, "name", {
        'value': 'cswap',
        'configurable': true
      });
      function _0x1a46b6(_0x11c835, _0x33baa5) {
        var _0x4434e9 = _0xa7b002();
        var _0x37895e = _0xa7b002();
        var _0x7c4126 = _0xa7b002();
        _0x3b30a9(_0x7c4126, _0x33baa5[0x2]);
        _0x102314(_0x4434e9, _0x33baa5[0x0], _0x7c4126);
        _0x102314(_0x37895e, _0x33baa5[0x1], _0x7c4126);
        _0x184fc9(_0x11c835, _0x37895e);
        _0x11c835[0x1f] ^= _0x2987f3(_0x4434e9) << 0x7;
      }
      __defProp(_0x1a46b6, "name", {
        'value': "pack",
        'configurable': true
      });
      function _0x18d42d(_0x2eee1a, _0x3c876a, _0x4e03bb) {
        var _0x322a83;
        var _0x41b93c;
        _0xd37069(_0x2eee1a[0x0], _0x14b3e9);
        _0xd37069(_0x2eee1a[0x1], _0x35bf8b);
        _0xd37069(_0x2eee1a[0x2], _0x35bf8b);
        _0xd37069(_0x2eee1a[0x3], _0x14b3e9);
        for (_0x41b93c = 0xff; _0x41b93c >= 0x0; --_0x41b93c) {
          _0x322a83 = _0x4e03bb[_0x41b93c / 0x8 | 0x0] >> (_0x41b93c & 0x7) & 0x1;
          _0xe7535c(_0x2eee1a, _0x3c876a, _0x322a83);
          _0x2f0572(_0x3c876a, _0x2eee1a);
          _0x2f0572(_0x2eee1a, _0x2eee1a);
          _0xe7535c(_0x2eee1a, _0x3c876a, _0x322a83);
        }
      }
      __defProp(_0x18d42d, "name", {
        'value': 'scalarmult',
        'configurable': true
      });
      function _0x53b6b9(_0x472f0c, _0x352a06) {
        var _0x60dbc2 = [_0xa7b002(), _0xa7b002(), _0xa7b002(), _0xa7b002()];
        _0xd37069(_0x60dbc2[0x0], _0x4044c);
        _0xd37069(_0x60dbc2[0x1], _0x38f9b0);
        _0xd37069(_0x60dbc2[0x2], _0x35bf8b);
        _0x102314(_0x60dbc2[0x3], _0x4044c, _0x38f9b0);
        _0x18d42d(_0x472f0c, _0x60dbc2, _0x352a06);
      }
      __defProp(_0x53b6b9, "name", {
        'value': 'scalarbase',
        'configurable': true
      });
      function _0x22a69d(_0x149cab, _0x496912, _0x4202a7) {
        var _0x5538e0 = new Uint8Array(0x40);
        var _0x36b395 = [_0xa7b002(), _0xa7b002(), _0xa7b002(), _0xa7b002()];
        var _0x18c7da;
        if (!_0x4202a7) {
          _0x19202a(_0x496912, 0x20);
        }
        _0x39f222(_0x5538e0, _0x496912, 0x20);
        _0x5538e0[0x0] &= 0xf8;
        _0x5538e0[0x1f] &= 0x7f;
        _0x5538e0[0x1f] |= 0x40;
        _0x53b6b9(_0x36b395, _0x5538e0);
        _0x1a46b6(_0x149cab, _0x36b395);
        for (_0x18c7da = 0x0; _0x18c7da < 0x20; _0x18c7da++) {
          _0x496912[_0x18c7da + 0x20] = _0x149cab[_0x18c7da];
        }
        return 0x0;
      }
      __defProp(_0x22a69d, "name", {
        'value': "crypto_sign_keypair",
        'configurable': true
      });
      var _0x2ac90d = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x10]);
      function _0x37b78b(_0x1e9cb6, _0x5adb01) {
        var _0x12845e;
        var _0x37ed25;
        var _0x3d85a4;
        var _0x41805d;
        for (_0x37ed25 = 0x3f; _0x37ed25 >= 0x20; --_0x37ed25) {
          _0x12845e = 0x0;
          _0x3d85a4 = _0x37ed25 - 0x20;
          for (_0x41805d = _0x37ed25 - 0xc; _0x3d85a4 < _0x41805d; ++_0x3d85a4) {
            _0x5adb01[_0x3d85a4] += _0x12845e - 0x10 * _0x5adb01[_0x37ed25] * _0x2ac90d[_0x3d85a4 - (_0x37ed25 - 0x20)];
            _0x12845e = Math.floor((_0x5adb01[_0x3d85a4] + 0x80) / 0x100);
            _0x5adb01[_0x3d85a4] -= _0x12845e * 0x100;
          }
          _0x5adb01[_0x3d85a4] += _0x12845e;
          _0x5adb01[_0x37ed25] = 0x0;
        }
        _0x12845e = 0x0;
        for (_0x3d85a4 = 0x0; _0x3d85a4 < 0x20; _0x3d85a4++) {
          _0x5adb01[_0x3d85a4] += _0x12845e - (_0x5adb01[0x1f] >> 0x4) * _0x2ac90d[_0x3d85a4];
          _0x12845e = _0x5adb01[_0x3d85a4] >> 0x8;
          _0x5adb01[_0x3d85a4] &= 0xff;
        }
        for (_0x3d85a4 = 0x0; _0x3d85a4 < 0x20; _0x3d85a4++) {
          _0x5adb01[_0x3d85a4] -= _0x12845e * _0x2ac90d[_0x3d85a4];
        }
        for (_0x37ed25 = 0x0; _0x37ed25 < 0x20; _0x37ed25++) {
          _0x5adb01[_0x37ed25 + 0x1] += _0x5adb01[_0x37ed25] >> 0x8;
          _0x1e9cb6[_0x37ed25] = _0x5adb01[_0x37ed25] & 0xff;
        }
      }
      __defProp(_0x37b78b, "name", {
        'value': "modL",
        'configurable': true
      });
      function _0x4af39b(_0x4f1c67) {
        var _0x32e969 = new Float64Array(0x40);
        var _0x3c33b7;
        for (_0x3c33b7 = 0x0; _0x3c33b7 < 0x40; _0x3c33b7++) {
          _0x32e969[_0x3c33b7] = _0x4f1c67[_0x3c33b7];
        }
        for (_0x3c33b7 = 0x0; _0x3c33b7 < 0x40; _0x3c33b7++) {
          _0x4f1c67[_0x3c33b7] = 0x0;
        }
        _0x37b78b(_0x4f1c67, _0x32e969);
      }
      __defProp(_0x4af39b, "name", {
        'value': "reduce",
        'configurable': true
      });
      function _0x1348bd(_0x4117da, _0x4ba965, _0x321a77, _0x233e7c) {
        var _0xff575d = new Uint8Array(0x40);
        var _0x43d4e1 = new Uint8Array(0x40);
        var _0x5db5c7 = new Uint8Array(0x40);
        var _0x1699fd;
        var _0x5049e9;
        var _0x1dfedc = new Float64Array(0x40);
        var _0x4d6b1b = [_0xa7b002(), _0xa7b002(), _0xa7b002(), _0xa7b002()];
        _0x39f222(_0xff575d, _0x233e7c, 0x20);
        _0xff575d[0x0] &= 0xf8;
        _0xff575d[0x1f] &= 0x7f;
        _0xff575d[0x1f] |= 0x40;
        var _0x5757bb = _0x321a77 + 0x40;
        for (_0x1699fd = 0x0; _0x1699fd < _0x321a77; _0x1699fd++) {
          _0x4117da[0x40 + _0x1699fd] = _0x4ba965[_0x1699fd];
        }
        for (_0x1699fd = 0x0; _0x1699fd < 0x20; _0x1699fd++) {
          _0x4117da[0x20 + _0x1699fd] = _0xff575d[0x20 + _0x1699fd];
        }
        _0x39f222(_0x5db5c7, _0x4117da.subarray(0x20), _0x321a77 + 0x20);
        _0x4af39b(_0x5db5c7);
        _0x53b6b9(_0x4d6b1b, _0x5db5c7);
        _0x1a46b6(_0x4117da, _0x4d6b1b);
        for (_0x1699fd = 0x20; _0x1699fd < 0x40; _0x1699fd++) {
          _0x4117da[_0x1699fd] = _0x233e7c[_0x1699fd];
        }
        _0x39f222(_0x43d4e1, _0x4117da, _0x321a77 + 0x40);
        _0x4af39b(_0x43d4e1);
        for (_0x1699fd = 0x0; _0x1699fd < 0x40; _0x1699fd++) {
          _0x1dfedc[_0x1699fd] = 0x0;
        }
        for (_0x1699fd = 0x0; _0x1699fd < 0x20; _0x1699fd++) {
          _0x1dfedc[_0x1699fd] = _0x5db5c7[_0x1699fd];
        }
        for (_0x1699fd = 0x0; _0x1699fd < 0x20; _0x1699fd++) {
          for (_0x5049e9 = 0x0; _0x5049e9 < 0x20; _0x5049e9++) {
            _0x1dfedc[_0x1699fd + _0x5049e9] += _0x43d4e1[_0x1699fd] * _0xff575d[_0x5049e9];
          }
        }
        _0x37b78b(_0x4117da.subarray(0x20), _0x1dfedc);
        return _0x5757bb;
      }
      __defProp(_0x1348bd, "name", {
        'value': "crypto_sign",
        'configurable': true
      });
      function _0x27cca7(_0x433fe2, _0x41abb0) {
        var _0x36e5ea = _0xa7b002();
        var _0x5a6a37 = _0xa7b002();
        var _0x1f48e = _0xa7b002();
        var _0x207806 = _0xa7b002();
        var _0x4c80e3 = _0xa7b002();
        var _0x5b3e64 = _0xa7b002();
        var _0x3fabbe = _0xa7b002();
        _0xd37069(_0x433fe2[0x2], _0x35bf8b);
        _0x1f6b32(_0x433fe2[0x1], _0x41abb0);
        _0x58952b(_0x1f48e, _0x433fe2[0x1]);
        _0x102314(_0x207806, _0x1f48e, _0x5984fa);
        _0x3f2745(_0x1f48e, _0x1f48e, _0x433fe2[0x2]);
        _0x2cb160(_0x207806, _0x433fe2[0x2], _0x207806);
        _0x58952b(_0x4c80e3, _0x207806);
        _0x58952b(_0x5b3e64, _0x4c80e3);
        _0x102314(_0x3fabbe, _0x5b3e64, _0x4c80e3);
        _0x102314(_0x36e5ea, _0x3fabbe, _0x1f48e);
        _0x102314(_0x36e5ea, _0x36e5ea, _0x207806);
        _0x1ae375(_0x36e5ea, _0x36e5ea);
        _0x102314(_0x36e5ea, _0x36e5ea, _0x1f48e);
        _0x102314(_0x36e5ea, _0x36e5ea, _0x207806);
        _0x102314(_0x36e5ea, _0x36e5ea, _0x207806);
        _0x102314(_0x433fe2[0x0], _0x36e5ea, _0x207806);
        _0x58952b(_0x5a6a37, _0x433fe2[0x0]);
        _0x102314(_0x5a6a37, _0x5a6a37, _0x207806);
        if (_0x2866be(_0x5a6a37, _0x1f48e)) {
          _0x102314(_0x433fe2[0x0], _0x433fe2[0x0], _0x2f44f6);
        }
        _0x58952b(_0x5a6a37, _0x433fe2[0x0]);
        _0x102314(_0x5a6a37, _0x5a6a37, _0x207806);
        if (_0x2866be(_0x5a6a37, _0x1f48e)) {
          return -0x1;
        }
        if (_0x2987f3(_0x433fe2[0x0]) === _0x41abb0[0x1f] >> 0x7) {
          _0x3f2745(_0x433fe2[0x0], _0x14b3e9, _0x433fe2[0x0]);
        }
        _0x102314(_0x433fe2[0x3], _0x433fe2[0x0], _0x433fe2[0x1]);
        return 0x0;
      }
      __defProp(_0x27cca7, "name", {
        'value': "unpackneg",
        'configurable': true
      });
      function _0x864bce(_0x46dc67, _0x294d35, _0x508fa2, _0x11a546) {
        var _0x10218f;
        var _0x3a6ab8 = new Uint8Array(0x20);
        var _0x20565f = new Uint8Array(0x40);
        var _0x5400ba = [_0xa7b002(), _0xa7b002(), _0xa7b002(), _0xa7b002()];
        var _0x1fcb8d = [_0xa7b002(), _0xa7b002(), _0xa7b002(), _0xa7b002()];
        if (_0x508fa2 < 0x40) {
          return -0x1;
        }
        if (_0x27cca7(_0x1fcb8d, _0x11a546)) {
          return -0x1;
        }
        for (_0x10218f = 0x0; _0x10218f < _0x508fa2; _0x10218f++) {
          _0x46dc67[_0x10218f] = _0x294d35[_0x10218f];
        }
        for (_0x10218f = 0x0; _0x10218f < 0x20; _0x10218f++) {
          _0x46dc67[_0x10218f + 0x20] = _0x11a546[_0x10218f];
        }
        _0x39f222(_0x20565f, _0x46dc67, _0x508fa2);
        _0x4af39b(_0x20565f);
        _0x18d42d(_0x5400ba, _0x1fcb8d, _0x20565f);
        _0x53b6b9(_0x1fcb8d, _0x294d35.subarray(0x20));
        _0x2f0572(_0x5400ba, _0x1fcb8d);
        _0x1a46b6(_0x3a6ab8, _0x5400ba);
        _0x508fa2 -= 0x40;
        if (_0x17aafa(_0x294d35, 0x0, _0x3a6ab8, 0x0, 0x20)) {
          for (_0x10218f = 0x0; _0x10218f < _0x508fa2; _0x10218f++) {
            _0x46dc67[_0x10218f] = 0x0;
          }
          return -0x1;
        }
        for (_0x10218f = 0x0; _0x10218f < _0x508fa2; _0x10218f++) {
          _0x46dc67[_0x10218f] = _0x294d35[_0x10218f + 0x40];
        }
        return _0x508fa2;
      }
      __defProp(_0x864bce, "name", {
        'value': "crypto_sign_open",
        'configurable': true
      });
      _0x435478.lowlevel = {
        'crypto_core_hsalsa20': _0x3b71b5,
        'crypto_stream_xor': _0x25cb33,
        'crypto_stream': _0xc4ae57,
        'crypto_stream_salsa20_xor': _0x432213,
        'crypto_stream_salsa20': _0x7930e1,
        'crypto_onetimeauth': _0x386443,
        'crypto_onetimeauth_verify': _0x4688e5,
        'crypto_verify_16': _0x4abc44,
        'crypto_verify_32': _0x383e43,
        'crypto_secretbox': _0x264a51,
        'crypto_secretbox_open': _0x4981b9,
        'crypto_scalarmult': _0x539a98,
        'crypto_scalarmult_base': _0x20bf42,
        'crypto_box_beforenm': _0x447e55,
        'crypto_box_afternm': _0x264a51,
        'crypto_box': _0x36d9aa,
        'crypto_box_open': _0x15ea5c,
        'crypto_box_keypair': _0x569122,
        'crypto_hash': _0x39f222,
        'crypto_sign': _0x1348bd,
        'crypto_sign_keypair': _0x22a69d,
        'crypto_sign_open': _0x864bce,
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
        'gf': _0xa7b002,
        'D': _0x5984fa,
        'L': _0x2ac90d,
        'pack25519': _0x184fc9,
        'unpack25519': _0x1f6b32,
        'M': _0x102314,
        'A': _0x2cb160,
        'S': _0x58952b,
        'Z': _0x3f2745,
        'pow2523': _0x1ae375,
        'add': _0x2f0572,
        'set25519': _0xd37069,
        'modL': _0x37b78b,
        'scalarmult': _0x18d42d,
        'scalarbase': _0x53b6b9
      };
      function _0x93d33c(_0x62449f, _0x533163) {
        if (_0x62449f.length !== 0x20) {
          throw new Error("bad key size");
        }
        if (_0x533163.length !== 0x18) {
          throw new Error("bad nonce size");
        }
      }
      __defProp(_0x93d33c, "name", {
        'value': "checkLengths",
        'configurable': true
      });
      function _0x400468(_0x6df318, _0x3e853f) {
        if (_0x6df318.length !== 0x20) {
          throw new Error("bad public key size");
        }
        if (_0x3e853f.length !== 0x20) {
          throw new Error("bad secret key size");
        }
      }
      __defProp(_0x400468, "name", {
        'value': 'checkBoxLengths',
        'configurable': true
      });
      function _0x10843b() {
        for (var _0xe4d120 = 0x0; _0xe4d120 < arguments.length; _0xe4d120++) {
          if (!(arguments[_0xe4d120] instanceof Uint8Array)) {
            throw new TypeError("unexpected type, use Uint8Array");
          }
        }
      }
      __defProp(_0x10843b, "name", {
        'value': 'checkArrayTypes',
        'configurable': true
      });
      function _0x5b3255(_0x4b873c) {
        for (var _0x3b95f4 = 0x0; _0x3b95f4 < _0x4b873c.length; _0x3b95f4++) {
          _0x4b873c[_0x3b95f4] = 0x0;
        }
      }
      __defProp(_0x5b3255, "name", {
        'value': "cleanup",
        'configurable': true
      });
      _0x435478.randomBytes = function (_0x3aeadc) {
        var _0x542398 = new Uint8Array(_0x3aeadc);
        _0x19202a(_0x542398, _0x3aeadc);
        return _0x542398;
      };
      _0x435478.secretbox = function (_0x14db41, _0x1da1a9, _0x4bcb9c) {
        _0x10843b(_0x14db41, _0x1da1a9, _0x4bcb9c);
        _0x93d33c(_0x4bcb9c, _0x1da1a9);
        var _0x467304 = new Uint8Array(0x20 + _0x14db41.length);
        var _0x31f69a = new Uint8Array(_0x467304.length);
        for (var _0x142cdb = 0x0; _0x142cdb < _0x14db41.length; _0x142cdb++) {
          _0x467304[_0x142cdb + 0x20] = _0x14db41[_0x142cdb];
        }
        _0x264a51(_0x31f69a, _0x467304, _0x467304.length, _0x1da1a9, _0x4bcb9c);
        return _0x31f69a.subarray(0x10);
      };
      _0x435478.secretbox.open = function (_0x4506c9, _0x5cee4b, _0xa90314) {
        _0x10843b(_0x4506c9, _0x5cee4b, _0xa90314);
        _0x93d33c(_0xa90314, _0x5cee4b);
        var _0x226d13 = new Uint8Array(0x10 + _0x4506c9.length);
        var _0x2c63ba = new Uint8Array(_0x226d13.length);
        for (var _0xfe3a7e = 0x0; _0xfe3a7e < _0x4506c9.length; _0xfe3a7e++) {
          _0x226d13[_0xfe3a7e + 0x10] = _0x4506c9[_0xfe3a7e];
        }
        if (_0x226d13.length < 0x20) {
          return null;
        }
        if (_0x4981b9(_0x2c63ba, _0x226d13, _0x226d13.length, _0x5cee4b, _0xa90314) !== 0x0) {
          return null;
        }
        return _0x2c63ba.subarray(0x20);
      };
      _0x435478.secretbox.keyLength = 0x20;
      _0x435478.secretbox.nonceLength = 0x18;
      _0x435478.secretbox.overheadLength = 0x10;
      _0x435478.scalarMult = function (_0x293be8, _0x3176e1) {
        _0x10843b(_0x293be8, _0x3176e1);
        if (_0x293be8.length !== 0x20) {
          throw new Error("bad n size");
        }
        if (_0x3176e1.length !== 0x20) {
          throw new Error("bad p size");
        }
        var _0x3ed6f7 = new Uint8Array(0x20);
        _0x539a98(_0x3ed6f7, _0x293be8, _0x3176e1);
        return _0x3ed6f7;
      };
      _0x435478.scalarMult.base = function (_0x15e008) {
        _0x10843b(_0x15e008);
        if (_0x15e008.length !== 0x20) {
          throw new Error("bad n size");
        }
        var _0x406f45 = new Uint8Array(0x20);
        _0x539a98(_0x406f45, _0x15e008, _0x27d00d);
        return _0x406f45;
      };
      _0x435478.scalarMult.scalarLength = 0x20;
      _0x435478.scalarMult.groupElementLength = 0x20;
      _0x435478.box = function (_0x20117b, _0x37aea0, _0x232792, _0x31f8d7) {
        var _0x152d85 = _0x435478.box.before(_0x232792, _0x31f8d7);
        return _0x435478.secretbox(_0x20117b, _0x37aea0, _0x152d85);
      };
      _0x435478.box.before = function (_0x1e2270, _0x35c0e5) {
        _0x10843b(_0x1e2270, _0x35c0e5);
        _0x400468(_0x1e2270, _0x35c0e5);
        var _0x389509 = new Uint8Array(0x20);
        _0x447e55(_0x389509, _0x1e2270, _0x35c0e5);
        return _0x389509;
      };
      _0x435478.box.after = _0x435478.secretbox;
      _0x435478.box.open = function (_0x59d4ee, _0x241cb4, _0x3ef751, _0x2e45a9) {
        var _0x35d281 = _0x435478.box.before(_0x3ef751, _0x2e45a9);
        return _0x435478.secretbox.open(_0x59d4ee, _0x241cb4, _0x35d281);
      };
      _0x435478.box.open.after = _0x435478.secretbox.open;
      _0x435478.box.keyPair = function () {
        var _0x11a6cd = new Uint8Array(0x20);
        var _0x3ba8e5 = new Uint8Array(0x20);
        _0x569122(_0x11a6cd, _0x3ba8e5);
        return {
          'publicKey': _0x11a6cd,
          'secretKey': _0x3ba8e5
        };
      };
      _0x435478.box.keyPair.fromSecretKey = function (_0x5042bc) {
        _0x10843b(_0x5042bc);
        if (_0x5042bc.length !== 0x20) {
          throw new Error("bad secret key size");
        }
        var _0x3fa67d = new Uint8Array(0x20);
        _0x539a98(_0x3fa67d, _0x5042bc, _0x27d00d);
        return {
          'publicKey': _0x3fa67d,
          'secretKey': new Uint8Array(_0x5042bc)
        };
      };
      _0x435478.box.publicKeyLength = 0x20;
      _0x435478.box.secretKeyLength = 0x20;
      _0x435478.box.sharedKeyLength = 0x20;
      _0x435478.box.nonceLength = 0x18;
      _0x435478.box.overheadLength = _0x435478.secretbox.overheadLength;
      _0x435478.sign = function (_0x5e9d78, _0x479291) {
        _0x10843b(_0x5e9d78, _0x479291);
        if (_0x479291.length !== 0x40) {
          throw new Error("bad secret key size");
        }
        var _0x3a211f = new Uint8Array(0x40 + _0x5e9d78.length);
        _0x1348bd(_0x3a211f, _0x5e9d78, _0x5e9d78.length, _0x479291);
        return _0x3a211f;
      };
      _0x435478.sign.open = function (_0x1119c7, _0x2eec8b) {
        _0x10843b(_0x1119c7, _0x2eec8b);
        if (_0x2eec8b.length !== 0x20) {
          throw new Error("bad public key size");
        }
        var _0x11d841 = new Uint8Array(_0x1119c7.length);
        var _0x1957a5 = _0x864bce(_0x11d841, _0x1119c7, _0x1119c7.length, _0x2eec8b);
        if (_0x1957a5 < 0x0) {
          return null;
        }
        var _0x1eb4f1 = new Uint8Array(_0x1957a5);
        for (var _0x3f0c32 = 0x0; _0x3f0c32 < _0x1eb4f1.length; _0x3f0c32++) {
          _0x1eb4f1[_0x3f0c32] = _0x11d841[_0x3f0c32];
        }
        return _0x1eb4f1;
      };
      _0x435478.sign.detached = function (_0x315350, _0x47adbe) {
        var _0x387af4 = _0x435478.sign(_0x315350, _0x47adbe);
        var _0xddd0a4 = new Uint8Array(0x40);
        for (var _0x56f67b = 0x0; _0x56f67b < _0xddd0a4.length; _0x56f67b++) {
          _0xddd0a4[_0x56f67b] = _0x387af4[_0x56f67b];
        }
        return _0xddd0a4;
      };
      _0x435478.sign.detached.verify = function (_0x254ba9, _0x1bd4a3, _0x73f2bb) {
        _0x10843b(_0x254ba9, _0x1bd4a3, _0x73f2bb);
        if (_0x1bd4a3.length !== 0x40) {
          throw new Error("bad signature size");
        }
        if (_0x73f2bb.length !== 0x20) {
          throw new Error("bad public key size");
        }
        var _0x115066 = new Uint8Array(0x40 + _0x254ba9.length);
        var _0x33297d = new Uint8Array(0x40 + _0x254ba9.length);
        var _0x2f3f26;
        for (_0x2f3f26 = 0x0; _0x2f3f26 < 0x40; _0x2f3f26++) {
          _0x115066[_0x2f3f26] = _0x1bd4a3[_0x2f3f26];
        }
        for (_0x2f3f26 = 0x0; _0x2f3f26 < _0x254ba9.length; _0x2f3f26++) {
          _0x115066[_0x2f3f26 + 0x40] = _0x254ba9[_0x2f3f26];
        }
        return _0x864bce(_0x33297d, _0x115066, _0x115066.length, _0x73f2bb) >= 0x0;
      };
      _0x435478.sign.keyPair = function () {
        var _0x13071a = new Uint8Array(0x20);
        var _0x29e3d4 = new Uint8Array(0x40);
        _0x22a69d(_0x13071a, _0x29e3d4);
        return {
          'publicKey': _0x13071a,
          'secretKey': _0x29e3d4
        };
      };
      _0x435478.sign.keyPair.fromSecretKey = function (_0x6d933f) {
        _0x10843b(_0x6d933f);
        if (_0x6d933f.length !== 0x40) {
          throw new Error("bad secret key size");
        }
        var _0x1e2fd8 = new Uint8Array(0x20);
        for (var _0x16b138 = 0x0; _0x16b138 < _0x1e2fd8.length; _0x16b138++) {
          _0x1e2fd8[_0x16b138] = _0x6d933f[0x20 + _0x16b138];
        }
        return {
          'publicKey': _0x1e2fd8,
          'secretKey': new Uint8Array(_0x6d933f)
        };
      };
      _0x435478.sign.keyPair.fromSeed = function (_0x53a424) {
        _0x10843b(_0x53a424);
        if (_0x53a424.length !== 0x20) {
          throw new Error("bad seed size");
        }
        var _0x1eff57 = new Uint8Array(0x20);
        var _0x18506c = new Uint8Array(0x40);
        for (var _0x4bafe8 = 0x0; _0x4bafe8 < 0x20; _0x4bafe8++) {
          _0x18506c[_0x4bafe8] = _0x53a424[_0x4bafe8];
        }
        _0x22a69d(_0x1eff57, _0x18506c, true);
        return {
          'publicKey': _0x1eff57,
          'secretKey': _0x18506c
        };
      };
      _0x435478.sign.publicKeyLength = 0x20;
      _0x435478.sign.secretKeyLength = 0x40;
      _0x435478.sign.seedLength = 0x20;
      _0x435478.sign.signatureLength = 0x40;
      _0x435478.hash = function (_0x13d283) {
        _0x10843b(_0x13d283);
        var _0x136735 = new Uint8Array(0x40);
        _0x39f222(_0x136735, _0x13d283, _0x13d283.length);
        return _0x136735;
      };
      _0x435478.hash.hashLength = 0x40;
      _0x435478.verify = function (_0xca0de9, _0x30af8b) {
        _0x10843b(_0xca0de9, _0x30af8b);
        if (_0xca0de9.length === 0x0 || _0x30af8b.length === 0x0) {
          return false;
        }
        if (_0xca0de9.length !== _0x30af8b.length) {
          return false;
        }
        return !!(_0x17aafa(_0xca0de9, 0x0, _0x30af8b, 0x0, _0xca0de9.length) === 0x0);
      };
      _0x435478.setPRNG = function (_0x2335d6) {
        _0x19202a = _0x2335d6;
      };
      (function () {
        var _0x33ef3e = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (_0x33ef3e && _0x33ef3e.getRandomValues) {
          _0x435478.setPRNG(function (_0x3e88a0, _0x5de3f5) {
            var _0x671b1c;
            var _0x341773 = new Uint8Array(_0x5de3f5);
            for (_0x671b1c = 0x0; _0x671b1c < _0x5de3f5; _0x671b1c += 0x10000) {
              _0x33ef3e.getRandomValues(_0x341773.subarray(_0x671b1c, _0x671b1c + Math.min(_0x5de3f5 - _0x671b1c, 0x10000)));
            }
            for (_0x671b1c = 0x0; _0x671b1c < _0x5de3f5; _0x671b1c++) {
              _0x3e88a0[_0x671b1c] = _0x341773[_0x671b1c];
            }
            _0x5b3255(_0x341773);
          });
        } else if (typeof __require !== 'undefined') {
          _0x33ef3e = require_crypto();
          if (_0x33ef3e && _0x33ef3e.randomBytes) {
            _0x435478.setPRNG(function (_0x435e01, _0x156dbb) {
              var _0x32bcc6;
              var _0xb4c97f = _0x33ef3e.randomBytes(_0x156dbb);
              for (_0x32bcc6 = 0x0; _0x32bcc6 < _0x156dbb; _0x32bcc6++) {
                _0x435e01[_0x32bcc6] = _0xb4c97f[_0x32bcc6];
              }
              _0x5b3255(_0xb4c97f);
            });
          }
        }
      })();
    })(typeof _0x24ac8d !== 'undefined' && _0x24ac8d.exports ? _0x24ac8d.exports : self.nacl = self.nacl || {});
  }
});
var require_buffer = __commonJS({
  '(disabled):buffer'() {}
});
var require_sha256 = __commonJS({
  'node_modules/js-sha256/src/sha256.js'(_0x13aaed, _0x2b7f77) {
    (function () {
      'use strict';

      var _0x4c9ee7 = typeof window === "object";
      var _0x477d33 = _0x4c9ee7 ? window : {};
      if (_0x477d33.JS_SHA256_NO_WINDOW) {
        _0x4c9ee7 = false;
      }
      var _0x55dc60 = !_0x4c9ee7 && typeof self === "object";
      var _0x4d1341 = !_0x477d33.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (_0x4d1341) {
        _0x477d33 = global;
      } else if (_0x55dc60) {
        _0x477d33 = self;
      }
      var _0x24f1a4 = !_0x477d33.JS_SHA256_NO_COMMON_JS && typeof _0x2b7f77 === "object" && _0x2b7f77.exports;
      var _0x2f9398 = typeof define === 'function' && define.amd;
      var _0x44efc7 = !_0x477d33.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
      var _0x5ee548 = "0123456789abcdef".split('');
      var _0x5cc1b2 = [-0x80000000, 0x800000, 0x8000, 0x80];
      var _0x3cd7ec = [0x18, 0x10, 0x8, 0x0];
      var _0x5bb2da = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
      var _0x3676a0 = ["hex", "array", 'digest', "arrayBuffer"];
      var _0x467752 = [];
      if (_0x477d33.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function (_0x32546b) {
          return Object.prototype.toString.call(_0x32546b) === "[object Array]";
        };
      }
      if (_0x44efc7 && (_0x477d33.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function (_0x49e657) {
          return typeof _0x49e657 === 'object' && _0x49e657.buffer && _0x49e657.buffer.constructor === ArrayBuffer;
        };
      }
      var _0x2f6757 = __defProp(function (_0x1d29f4, _0x5be433) {
        return function (_0x4ce0bd) {
          return new _0x30dd20(_0x5be433, true).update(_0x4ce0bd)[_0x1d29f4]();
        };
      }, "name", {
        'value': "createOutputMethod",
        'configurable': true
      });
      var _0x29bd52 = __defProp(function (_0x4e0995) {
        var _0x4481aa = _0x2f6757("hex", _0x4e0995);
        if (_0x4d1341) {
          _0x4481aa = _0x2e6b09(_0x4481aa, _0x4e0995);
        }
        _0x4481aa.create = function () {
          return new _0x30dd20(_0x4e0995);
        };
        _0x4481aa.update = function (_0x185343) {
          return _0x4481aa.create().update(_0x185343);
        };
        for (var _0x4518b7 = 0x0; _0x4518b7 < _0x3676a0.length; ++_0x4518b7) {
          var _0x4d8088 = _0x3676a0[_0x4518b7];
          _0x4481aa[_0x4d8088] = _0x2f6757(_0x4d8088, _0x4e0995);
        }
        return _0x4481aa;
      }, "name", {
        'value': 'createMethod',
        'configurable': true
      });
      var _0x2e6b09 = __defProp(function (_0x43aeca, _0x3a41c6) {
        var _0x133665 = require_crypto();
        var _0x28258c = require_buffer().Buffer;
        var _0x17603a = _0x3a41c6 ? "sha224" : 'sha256';
        var _0x5e3bb8;
        if (_0x28258c.from && !_0x477d33.JS_SHA256_NO_BUFFER_FROM) {
          _0x5e3bb8 = _0x28258c.from;
        } else {
          _0x5e3bb8 = __defProp(function (_0x577042) {
            return new _0x28258c(_0x577042);
          }, "name", {
            'value': "bufferFrom",
            'configurable': true
          });
        }
        var _0x397d28 = __defProp(function (_0x307bf7) {
          if (typeof _0x307bf7 === 'string') {
            return _0x133665.createHash(_0x17603a).update(_0x307bf7, "utf8").digest('hex');
          } else {
            if (_0x307bf7 === null || _0x307bf7 === undefined) {
              throw new Error("input is invalid type");
            } else if (_0x307bf7.constructor === ArrayBuffer) {
              _0x307bf7 = new Uint8Array(_0x307bf7);
            }
          }
          return Array.isArray(_0x307bf7) || ArrayBuffer.isView(_0x307bf7) || _0x307bf7.constructor === _0x28258c ? _0x133665.createHash(_0x17603a).update(_0x5e3bb8(_0x307bf7)).digest("hex") : _0x43aeca(_0x307bf7);
        }, "name", {
          'value': "nodeMethod",
          'configurable': true
        });
        return _0x397d28;
      }, "name", {
        'value': "nodeWrap",
        'configurable': true
      });
      var _0x2edab6 = __defProp(function (_0x552e74, _0x3c47a2) {
        return function (_0x22593b, _0x18fc29) {
          return new _0x1b430c(_0x22593b, _0x3c47a2, true).update(_0x18fc29)[_0x552e74]();
        };
      }, "name", {
        'value': 'createHmacOutputMethod',
        'configurable': true
      });
      var _0x363320 = __defProp(function (_0x9074c8) {
        var _0x30e4fc = _0x2edab6("hex", _0x9074c8);
        _0x30e4fc.create = function (_0x2103ab) {
          return new _0x1b430c(_0x2103ab, _0x9074c8);
        };
        _0x30e4fc.update = function (_0x5ed1a7, _0xd24a6d) {
          return _0x30e4fc.create(_0x5ed1a7).update(_0xd24a6d);
        };
        for (var _0x460fc3 = 0x0; _0x460fc3 < _0x3676a0.length; ++_0x460fc3) {
          var _0x5211d1 = _0x3676a0[_0x460fc3];
          _0x30e4fc[_0x5211d1] = _0x2edab6(_0x5211d1, _0x9074c8);
        }
        return _0x30e4fc;
      }, "name", {
        'value': "createHmacMethod",
        'configurable': true
      });
      function _0x30dd20(_0x397e6f, _0x37f359) {
        if (_0x37f359) {
          _0x467752[0x0] = _0x467752[0x10] = _0x467752[0x1] = _0x467752[0x2] = _0x467752[0x3] = _0x467752[0x4] = _0x467752[0x5] = _0x467752[0x6] = _0x467752[0x7] = _0x467752[0x8] = _0x467752[0x9] = _0x467752[0xa] = _0x467752[0xb] = _0x467752[0xc] = _0x467752[0xd] = _0x467752[0xe] = _0x467752[0xf] = 0x0;
          this.blocks = _0x467752;
        } else {
          this.blocks = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        }
        if (_0x397e6f) {
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
        this.is224 = _0x397e6f;
      }
      __defProp(_0x30dd20, "name", {
        'value': 'Sha256',
        'configurable': true
      });
      _0x30dd20.prototype.update = function (_0x75506) {
        if (this.finalized) {
          return;
        }
        var _0x1dcb3d;
        var _0x254cdc = typeof _0x75506;
        if (_0x254cdc !== "string") {
          if (_0x254cdc === "object") {
            if (_0x75506 === null) {
              throw new Error("input is invalid type");
            } else {
              if (_0x44efc7 && _0x75506.constructor === ArrayBuffer) {
                _0x75506 = new Uint8Array(_0x75506);
              } else {
                if (!Array.isArray(_0x75506)) {
                  if (!_0x44efc7 || !ArrayBuffer.isView(_0x75506)) {
                    throw new Error("input is invalid type");
                  }
                }
              }
            }
          } else {
            throw new Error("input is invalid type");
          }
          _0x1dcb3d = true;
        }
        var _0x3ecbe5;
        var _0x172ced = 0x0;
        var _0x3cd2d4;
        var _0xba13fc = _0x75506.length;
        var _0x280e6a = this.blocks;
        while (_0x172ced < _0xba13fc) {
          if (this.hashed) {
            this.hashed = false;
            _0x280e6a[0x0] = this.block;
            this.block = _0x280e6a[0x10] = _0x280e6a[0x1] = _0x280e6a[0x2] = _0x280e6a[0x3] = _0x280e6a[0x4] = _0x280e6a[0x5] = _0x280e6a[0x6] = _0x280e6a[0x7] = _0x280e6a[0x8] = _0x280e6a[0x9] = _0x280e6a[0xa] = _0x280e6a[0xb] = _0x280e6a[0xc] = _0x280e6a[0xd] = _0x280e6a[0xe] = _0x280e6a[0xf] = 0x0;
          }
          if (_0x1dcb3d) {
            for (_0x3cd2d4 = this.start; _0x172ced < _0xba13fc && _0x3cd2d4 < 0x40; ++_0x172ced) {
              _0x280e6a[_0x3cd2d4 >>> 0x2] |= _0x75506[_0x172ced] << _0x3cd7ec[_0x3cd2d4++ & 0x3];
            }
          } else {
            for (_0x3cd2d4 = this.start; _0x172ced < _0xba13fc && _0x3cd2d4 < 0x40; ++_0x172ced) {
              _0x3ecbe5 = _0x75506.charCodeAt(_0x172ced);
              if (_0x3ecbe5 < 0x80) {
                _0x280e6a[_0x3cd2d4 >>> 0x2] |= _0x3ecbe5 << _0x3cd7ec[_0x3cd2d4++ & 0x3];
              } else {
                if (_0x3ecbe5 < 0x800) {
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0xc0 | _0x3ecbe5 >>> 0x6) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0x80 | _0x3ecbe5 & 0x3f) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                } else if (_0x3ecbe5 < 0xd800 || _0x3ecbe5 >= 0xe000) {
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0xe0 | _0x3ecbe5 >>> 0xc) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0x80 | _0x3ecbe5 >>> 0x6 & 0x3f) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0x80 | _0x3ecbe5 & 0x3f) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                } else {
                  _0x3ecbe5 = 0x10000 + ((_0x3ecbe5 & 0x3ff) << 0xa | _0x75506.charCodeAt(++_0x172ced) & 0x3ff);
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0xf0 | _0x3ecbe5 >>> 0x12) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0x80 | _0x3ecbe5 >>> 0xc & 0x3f) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0x80 | _0x3ecbe5 >>> 0x6 & 0x3f) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                  _0x280e6a[_0x3cd2d4 >>> 0x2] |= (0x80 | _0x3ecbe5 & 0x3f) << _0x3cd7ec[_0x3cd2d4++ & 0x3];
                }
              }
            }
          }
          this.lastByteIndex = _0x3cd2d4;
          this.bytes += _0x3cd2d4 - this.start;
          if (_0x3cd2d4 >= 0x40) {
            this.block = _0x280e6a[0x10];
            this.start = _0x3cd2d4 - 0x40;
            this.hash();
            this.hashed = true;
          } else {
            this.start = _0x3cd2d4;
          }
        }
        if (this.bytes > 0xffffffff) {
          this.hBytes += this.bytes / 0x100000000 << 0x0;
          this.bytes = this.bytes % 0x100000000;
        }
        return this;
      };
      _0x30dd20.prototype.finalize = function () {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var _0x191523 = this.blocks;
        var _0x1475f0 = this.lastByteIndex;
        _0x191523[0x10] = this.block;
        _0x191523[_0x1475f0 >>> 0x2] |= _0x5cc1b2[_0x1475f0 & 0x3];
        this.block = _0x191523[0x10];
        if (_0x1475f0 >= 0x38) {
          if (!this.hashed) {
            this.hash();
          }
          _0x191523[0x0] = this.block;
          _0x191523[0x10] = _0x191523[0x1] = _0x191523[0x2] = _0x191523[0x3] = _0x191523[0x4] = _0x191523[0x5] = _0x191523[0x6] = _0x191523[0x7] = _0x191523[0x8] = _0x191523[0x9] = _0x191523[0xa] = _0x191523[0xb] = _0x191523[0xc] = _0x191523[0xd] = _0x191523[0xe] = _0x191523[0xf] = 0x0;
        }
        _0x191523[0xe] = this.hBytes << 0x3 | this.bytes >>> 0x1d;
        _0x191523[0xf] = this.bytes << 0x3;
        this.hash();
      };
      _0x30dd20.prototype.hash = function () {
        var _0x2439a0 = this.h0;
        var _0x24e4c3 = this.h1;
        var _0x25c7ce = this.h2;
        var _0x3b59ce = this.h3;
        var _0x2f2074 = this.h4;
        var _0x34e862 = this.h5;
        var _0x1294ad = this.h6;
        var _0x4e37c5 = this.h7;
        var _0x56cadb = this.blocks;
        var _0x494ca7;
        var _0x37b135;
        var _0x23d026;
        var _0x4c7dca;
        var _0x46ad8e;
        var _0x1a17ac;
        var _0x188d26;
        var _0xd32652;
        var _0x92fd7f;
        var _0x1318b2;
        var _0x15c3c1;
        for (_0x494ca7 = 0x10; _0x494ca7 < 0x40; ++_0x494ca7) {
          _0x46ad8e = _0x56cadb[_0x494ca7 - 0xf];
          _0x37b135 = (_0x46ad8e >>> 0x7 | _0x46ad8e << 0x19) ^ (_0x46ad8e >>> 0x12 | _0x46ad8e << 0xe) ^ _0x46ad8e >>> 0x3;
          _0x46ad8e = _0x56cadb[_0x494ca7 - 0x2];
          _0x23d026 = (_0x46ad8e >>> 0x11 | _0x46ad8e << 0xf) ^ (_0x46ad8e >>> 0x13 | _0x46ad8e << 0xd) ^ _0x46ad8e >>> 0xa;
          _0x56cadb[_0x494ca7] = _0x56cadb[_0x494ca7 - 0x10] + _0x37b135 + _0x56cadb[_0x494ca7 - 0x7] + _0x23d026 << 0x0;
        }
        _0x15c3c1 = _0x24e4c3 & _0x25c7ce;
        for (_0x494ca7 = 0x0; _0x494ca7 < 0x40; _0x494ca7 += 0x4) {
          if (this.first) {
            if (this.is224) {
              _0xd32652 = 0x49400;
              _0x46ad8e = _0x56cadb[0x0] - 0x543c9a5b;
              _0x4e37c5 = _0x46ad8e - 0x8f1a6c7 << 0x0;
              _0x3b59ce = _0x46ad8e + 0x170e9b5 << 0x0;
            } else {
              _0xd32652 = 0x2a01a605;
              _0x46ad8e = _0x56cadb[0x0] - 0xc881298;
              _0x4e37c5 = _0x46ad8e - 0x5ab00ac6 << 0x0;
              _0x3b59ce = _0x46ad8e + 0x8909ae5 << 0x0;
            }
            this.first = false;
          } else {
            _0x37b135 = (_0x2439a0 >>> 0x2 | _0x2439a0 << 0x1e) ^ (_0x2439a0 >>> 0xd | _0x2439a0 << 0x13) ^ (_0x2439a0 >>> 0x16 | _0x2439a0 << 0xa);
            _0x23d026 = (_0x2f2074 >>> 0x6 | _0x2f2074 << 0x1a) ^ (_0x2f2074 >>> 0xb | _0x2f2074 << 0x15) ^ (_0x2f2074 >>> 0x19 | _0x2f2074 << 0x7);
            _0xd32652 = _0x2439a0 & _0x24e4c3;
            _0x4c7dca = _0xd32652 ^ _0x2439a0 & _0x25c7ce ^ _0x15c3c1;
            _0x188d26 = _0x2f2074 & _0x34e862 ^ ~_0x2f2074 & _0x1294ad;
            _0x46ad8e = _0x4e37c5 + _0x23d026 + _0x188d26 + _0x5bb2da[_0x494ca7] + _0x56cadb[_0x494ca7];
            _0x1a17ac = _0x37b135 + _0x4c7dca;
            _0x4e37c5 = _0x3b59ce + _0x46ad8e << 0x0;
            _0x3b59ce = _0x46ad8e + _0x1a17ac << 0x0;
          }
          _0x37b135 = (_0x3b59ce >>> 0x2 | _0x3b59ce << 0x1e) ^ (_0x3b59ce >>> 0xd | _0x3b59ce << 0x13) ^ (_0x3b59ce >>> 0x16 | _0x3b59ce << 0xa);
          _0x23d026 = (_0x4e37c5 >>> 0x6 | _0x4e37c5 << 0x1a) ^ (_0x4e37c5 >>> 0xb | _0x4e37c5 << 0x15) ^ (_0x4e37c5 >>> 0x19 | _0x4e37c5 << 0x7);
          _0x92fd7f = _0x3b59ce & _0x2439a0;
          _0x4c7dca = _0x92fd7f ^ _0x3b59ce & _0x24e4c3 ^ _0xd32652;
          _0x188d26 = _0x4e37c5 & _0x2f2074 ^ ~_0x4e37c5 & _0x34e862;
          _0x46ad8e = _0x1294ad + _0x23d026 + _0x188d26 + _0x5bb2da[_0x494ca7 + 0x1] + _0x56cadb[_0x494ca7 + 0x1];
          _0x1a17ac = _0x37b135 + _0x4c7dca;
          _0x1294ad = _0x25c7ce + _0x46ad8e << 0x0;
          _0x25c7ce = _0x46ad8e + _0x1a17ac << 0x0;
          _0x37b135 = (_0x25c7ce >>> 0x2 | _0x25c7ce << 0x1e) ^ (_0x25c7ce >>> 0xd | _0x25c7ce << 0x13) ^ (_0x25c7ce >>> 0x16 | _0x25c7ce << 0xa);
          _0x23d026 = (_0x1294ad >>> 0x6 | _0x1294ad << 0x1a) ^ (_0x1294ad >>> 0xb | _0x1294ad << 0x15) ^ (_0x1294ad >>> 0x19 | _0x1294ad << 0x7);
          _0x1318b2 = _0x25c7ce & _0x3b59ce;
          _0x4c7dca = _0x1318b2 ^ _0x25c7ce & _0x2439a0 ^ _0x92fd7f;
          _0x188d26 = _0x1294ad & _0x4e37c5 ^ ~_0x1294ad & _0x2f2074;
          _0x46ad8e = _0x34e862 + _0x23d026 + _0x188d26 + _0x5bb2da[_0x494ca7 + 0x2] + _0x56cadb[_0x494ca7 + 0x2];
          _0x1a17ac = _0x37b135 + _0x4c7dca;
          _0x34e862 = _0x24e4c3 + _0x46ad8e << 0x0;
          _0x24e4c3 = _0x46ad8e + _0x1a17ac << 0x0;
          _0x37b135 = (_0x24e4c3 >>> 0x2 | _0x24e4c3 << 0x1e) ^ (_0x24e4c3 >>> 0xd | _0x24e4c3 << 0x13) ^ (_0x24e4c3 >>> 0x16 | _0x24e4c3 << 0xa);
          _0x23d026 = (_0x34e862 >>> 0x6 | _0x34e862 << 0x1a) ^ (_0x34e862 >>> 0xb | _0x34e862 << 0x15) ^ (_0x34e862 >>> 0x19 | _0x34e862 << 0x7);
          _0x15c3c1 = _0x24e4c3 & _0x25c7ce;
          _0x4c7dca = _0x15c3c1 ^ _0x24e4c3 & _0x3b59ce ^ _0x1318b2;
          _0x188d26 = _0x34e862 & _0x1294ad ^ ~_0x34e862 & _0x4e37c5;
          _0x46ad8e = _0x2f2074 + _0x23d026 + _0x188d26 + _0x5bb2da[_0x494ca7 + 0x3] + _0x56cadb[_0x494ca7 + 0x3];
          _0x1a17ac = _0x37b135 + _0x4c7dca;
          _0x2f2074 = _0x2439a0 + _0x46ad8e << 0x0;
          _0x2439a0 = _0x46ad8e + _0x1a17ac << 0x0;
          this.chromeBugWorkAround = true;
        }
        this.h0 = this.h0 + _0x2439a0 << 0x0;
        this.h1 = this.h1 + _0x24e4c3 << 0x0;
        this.h2 = this.h2 + _0x25c7ce << 0x0;
        this.h3 = this.h3 + _0x3b59ce << 0x0;
        this.h4 = this.h4 + _0x2f2074 << 0x0;
        this.h5 = this.h5 + _0x34e862 << 0x0;
        this.h6 = this.h6 + _0x1294ad << 0x0;
        this.h7 = this.h7 + _0x4e37c5 << 0x0;
      };
      _0x30dd20.prototype.hex = function () {
        this.finalize();
        var _0x59b816 = this.h0;
        var _0x5e4e30 = this.h1;
        var _0x260916 = this.h2;
        var _0x1ccb10 = this.h3;
        var _0x1d9411 = this.h4;
        var _0x1c16e7 = this.h5;
        var _0x23b9fe = this.h6;
        var _0x225b7c = this.h7;
        var _0x368f89 = _0x5ee548[_0x59b816 >>> 0x1c & 0xf] + _0x5ee548[_0x59b816 >>> 0x18 & 0xf] + _0x5ee548[_0x59b816 >>> 0x14 & 0xf] + _0x5ee548[_0x59b816 >>> 0x10 & 0xf] + _0x5ee548[_0x59b816 >>> 0xc & 0xf] + _0x5ee548[_0x59b816 >>> 0x8 & 0xf] + _0x5ee548[_0x59b816 >>> 0x4 & 0xf] + _0x5ee548[_0x59b816 & 0xf] + _0x5ee548[_0x5e4e30 >>> 0x1c & 0xf] + _0x5ee548[_0x5e4e30 >>> 0x18 & 0xf] + _0x5ee548[_0x5e4e30 >>> 0x14 & 0xf] + _0x5ee548[_0x5e4e30 >>> 0x10 & 0xf] + _0x5ee548[_0x5e4e30 >>> 0xc & 0xf] + _0x5ee548[_0x5e4e30 >>> 0x8 & 0xf] + _0x5ee548[_0x5e4e30 >>> 0x4 & 0xf] + _0x5ee548[_0x5e4e30 & 0xf] + _0x5ee548[_0x260916 >>> 0x1c & 0xf] + _0x5ee548[_0x260916 >>> 0x18 & 0xf] + _0x5ee548[_0x260916 >>> 0x14 & 0xf] + _0x5ee548[_0x260916 >>> 0x10 & 0xf] + _0x5ee548[_0x260916 >>> 0xc & 0xf] + _0x5ee548[_0x260916 >>> 0x8 & 0xf] + _0x5ee548[_0x260916 >>> 0x4 & 0xf] + _0x5ee548[_0x260916 & 0xf] + _0x5ee548[_0x1ccb10 >>> 0x1c & 0xf] + _0x5ee548[_0x1ccb10 >>> 0x18 & 0xf] + _0x5ee548[_0x1ccb10 >>> 0x14 & 0xf] + _0x5ee548[_0x1ccb10 >>> 0x10 & 0xf] + _0x5ee548[_0x1ccb10 >>> 0xc & 0xf] + _0x5ee548[_0x1ccb10 >>> 0x8 & 0xf] + _0x5ee548[_0x1ccb10 >>> 0x4 & 0xf] + _0x5ee548[_0x1ccb10 & 0xf] + _0x5ee548[_0x1d9411 >>> 0x1c & 0xf] + _0x5ee548[_0x1d9411 >>> 0x18 & 0xf] + _0x5ee548[_0x1d9411 >>> 0x14 & 0xf] + _0x5ee548[_0x1d9411 >>> 0x10 & 0xf] + _0x5ee548[_0x1d9411 >>> 0xc & 0xf] + _0x5ee548[_0x1d9411 >>> 0x8 & 0xf] + _0x5ee548[_0x1d9411 >>> 0x4 & 0xf] + _0x5ee548[_0x1d9411 & 0xf] + _0x5ee548[_0x1c16e7 >>> 0x1c & 0xf] + _0x5ee548[_0x1c16e7 >>> 0x18 & 0xf] + _0x5ee548[_0x1c16e7 >>> 0x14 & 0xf] + _0x5ee548[_0x1c16e7 >>> 0x10 & 0xf] + _0x5ee548[_0x1c16e7 >>> 0xc & 0xf] + _0x5ee548[_0x1c16e7 >>> 0x8 & 0xf] + _0x5ee548[_0x1c16e7 >>> 0x4 & 0xf] + _0x5ee548[_0x1c16e7 & 0xf] + _0x5ee548[_0x23b9fe >>> 0x1c & 0xf] + _0x5ee548[_0x23b9fe >>> 0x18 & 0xf] + _0x5ee548[_0x23b9fe >>> 0x14 & 0xf] + _0x5ee548[_0x23b9fe >>> 0x10 & 0xf] + _0x5ee548[_0x23b9fe >>> 0xc & 0xf] + _0x5ee548[_0x23b9fe >>> 0x8 & 0xf] + _0x5ee548[_0x23b9fe >>> 0x4 & 0xf] + _0x5ee548[_0x23b9fe & 0xf];
        if (!this.is224) {
          _0x368f89 += _0x5ee548[_0x225b7c >>> 0x1c & 0xf] + _0x5ee548[_0x225b7c >>> 0x18 & 0xf] + _0x5ee548[_0x225b7c >>> 0x14 & 0xf] + _0x5ee548[_0x225b7c >>> 0x10 & 0xf] + _0x5ee548[_0x225b7c >>> 0xc & 0xf] + _0x5ee548[_0x225b7c >>> 0x8 & 0xf] + _0x5ee548[_0x225b7c >>> 0x4 & 0xf] + _0x5ee548[_0x225b7c & 0xf];
        }
        return _0x368f89;
      };
      _0x30dd20.prototype.toString = _0x30dd20.prototype.hex;
      _0x30dd20.prototype.digest = function () {
        this.finalize();
        var _0x3d4fd4 = this.h0;
        var _0x525a58 = this.h1;
        var _0x3fd8a6 = this.h2;
        var _0x29e3ff = this.h3;
        var _0x4de662 = this.h4;
        var _0xcdfe60 = this.h5;
        var _0x57b00a = this.h6;
        var _0x55f17e = this.h7;
        var _0x53c926 = [_0x3d4fd4 >>> 0x18 & 0xff, _0x3d4fd4 >>> 0x10 & 0xff, _0x3d4fd4 >>> 0x8 & 0xff, _0x3d4fd4 & 0xff, _0x525a58 >>> 0x18 & 0xff, _0x525a58 >>> 0x10 & 0xff, _0x525a58 >>> 0x8 & 0xff, _0x525a58 & 0xff, _0x3fd8a6 >>> 0x18 & 0xff, _0x3fd8a6 >>> 0x10 & 0xff, _0x3fd8a6 >>> 0x8 & 0xff, _0x3fd8a6 & 0xff, _0x29e3ff >>> 0x18 & 0xff, _0x29e3ff >>> 0x10 & 0xff, _0x29e3ff >>> 0x8 & 0xff, _0x29e3ff & 0xff, _0x4de662 >>> 0x18 & 0xff, _0x4de662 >>> 0x10 & 0xff, _0x4de662 >>> 0x8 & 0xff, _0x4de662 & 0xff, _0xcdfe60 >>> 0x18 & 0xff, _0xcdfe60 >>> 0x10 & 0xff, _0xcdfe60 >>> 0x8 & 0xff, _0xcdfe60 & 0xff, _0x57b00a >>> 0x18 & 0xff, _0x57b00a >>> 0x10 & 0xff, _0x57b00a >>> 0x8 & 0xff, _0x57b00a & 0xff];
        if (!this.is224) {
          _0x53c926.push(_0x55f17e >>> 0x18 & 0xff, _0x55f17e >>> 0x10 & 0xff, _0x55f17e >>> 0x8 & 0xff, _0x55f17e & 0xff);
        }
        return _0x53c926;
      };
      _0x30dd20.prototype.array = _0x30dd20.prototype.digest;
      _0x30dd20.prototype.arrayBuffer = function () {
        this.finalize();
        var _0x144a21 = new ArrayBuffer(this.is224 ? 0x1c : 0x20);
        var _0x1fc954 = new DataView(_0x144a21);
        _0x1fc954.setUint32(0x0, this.h0);
        _0x1fc954.setUint32(0x4, this.h1);
        _0x1fc954.setUint32(0x8, this.h2);
        _0x1fc954.setUint32(0xc, this.h3);
        _0x1fc954.setUint32(0x10, this.h4);
        _0x1fc954.setUint32(0x14, this.h5);
        _0x1fc954.setUint32(0x18, this.h6);
        if (!this.is224) {
          _0x1fc954.setUint32(0x1c, this.h7);
        }
        return _0x144a21;
      };
      function _0x1b430c(_0x32ce2e, _0x4d1e20, _0x2c20a4) {
        var _0xbe3c40;
        var _0x130a7c = typeof _0x32ce2e;
        if (_0x130a7c === 'string') {
          var _0x4e83ee = [];
          var _0x58c78a = _0x32ce2e.length;
          var _0x178117 = 0x0;
          var _0x281066;
          for (_0xbe3c40 = 0x0; _0xbe3c40 < _0x58c78a; ++_0xbe3c40) {
            _0x281066 = _0x32ce2e.charCodeAt(_0xbe3c40);
            if (_0x281066 < 0x80) {
              _0x4e83ee[_0x178117++] = _0x281066;
            } else {
              if (_0x281066 < 0x800) {
                _0x4e83ee[_0x178117++] = 0xc0 | _0x281066 >>> 0x6;
                _0x4e83ee[_0x178117++] = 0x80 | _0x281066 & 0x3f;
              } else if (_0x281066 < 0xd800 || _0x281066 >= 0xe000) {
                _0x4e83ee[_0x178117++] = 0xe0 | _0x281066 >>> 0xc;
                _0x4e83ee[_0x178117++] = 0x80 | _0x281066 >>> 0x6 & 0x3f;
                _0x4e83ee[_0x178117++] = 0x80 | _0x281066 & 0x3f;
              } else {
                _0x281066 = 0x10000 + ((_0x281066 & 0x3ff) << 0xa | _0x32ce2e.charCodeAt(++_0xbe3c40) & 0x3ff);
                _0x4e83ee[_0x178117++] = 0xf0 | _0x281066 >>> 0x12;
                _0x4e83ee[_0x178117++] = 0x80 | _0x281066 >>> 0xc & 0x3f;
                _0x4e83ee[_0x178117++] = 0x80 | _0x281066 >>> 0x6 & 0x3f;
                _0x4e83ee[_0x178117++] = 0x80 | _0x281066 & 0x3f;
              }
            }
          }
          _0x32ce2e = _0x4e83ee;
        } else {
          if (_0x130a7c === 'object') {
            if (_0x32ce2e === null) {
              throw new Error("input is invalid type");
            } else {
              if (_0x44efc7 && _0x32ce2e.constructor === ArrayBuffer) {
                _0x32ce2e = new Uint8Array(_0x32ce2e);
              } else {
                if (!Array.isArray(_0x32ce2e)) {
                  if (!_0x44efc7 || !ArrayBuffer.isView(_0x32ce2e)) {
                    throw new Error("input is invalid type");
                  }
                }
              }
            }
          } else {
            throw new Error("input is invalid type");
          }
        }
        if (_0x32ce2e.length > 0x40) {
          _0x32ce2e = new _0x30dd20(_0x4d1e20, true).update(_0x32ce2e).array();
        }
        var _0x3b453e = [];
        var _0x478fe6 = [];
        for (_0xbe3c40 = 0x0; _0xbe3c40 < 0x40; ++_0xbe3c40) {
          var _0x823d0f = _0x32ce2e[_0xbe3c40] || 0x0;
          _0x3b453e[_0xbe3c40] = 0x5c ^ _0x823d0f;
          _0x478fe6[_0xbe3c40] = 0x36 ^ _0x823d0f;
        }
        _0x30dd20.call(this, _0x4d1e20, _0x2c20a4);
        this.update(_0x478fe6);
        this.oKeyPad = _0x3b453e;
        this.inner = true;
        this.sharedMemory = _0x2c20a4;
      }
      __defProp(_0x1b430c, "name", {
        'value': 'HmacSha256',
        'configurable': true
      });
      _0x1b430c.prototype = new _0x30dd20();
      _0x1b430c.prototype.finalize = function () {
        _0x30dd20.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var _0x4a44cd = this.array();
          _0x30dd20.call(this, this.is224, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(_0x4a44cd);
          _0x30dd20.prototype.finalize.call(this);
        }
      };
      var _0x251f7b = _0x29bd52();
      _0x251f7b.sha256 = _0x251f7b;
      _0x251f7b.sha224 = _0x29bd52(true);
      _0x251f7b.sha256.hmac = _0x363320();
      _0x251f7b.sha224.hmac = _0x363320(true);
      if (_0x24f1a4) {
        _0x2b7f77.exports = _0x251f7b;
      } else {
        _0x477d33.sha256 = _0x251f7b.sha256;
        _0x477d33.sha224 = _0x251f7b.sha224;
        if (_0x2f9398) {
          define(function () {
            return _0x251f7b;
          });
        }
      }
    })();
  }
});
var isCryptoKey = __defProp(_0x53c911 => _0x53c911 instanceof CryptoKey, "name", {
  'value': "isCryptoKey",
  'configurable': true
});
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function concat(..._0x51b4ab) {
  const _0x3d9dc9 = _0x51b4ab.reduce((_0x43848d, {
    length: _0x21d9dd
  }) => _0x43848d + _0x21d9dd, 0x0);
  const _0xe7ab5f = new Uint8Array(_0x3d9dc9);
  let _0x2971e9 = 0x0;
  for (const _0x5e9f15 of _0x51b4ab) {
    _0xe7ab5f.set(_0x5e9f15, _0x2971e9);
    _0x2971e9 += _0x5e9f15.length;
  }
  return _0xe7ab5f;
}
__defProp(concat, "name", {
  'value': "concat",
  'configurable': true
});
var encodeBase64 = __defProp(_0x4f149e => {
  let _0x4fd589 = _0x4f149e;
  if (typeof _0x4fd589 === "string") {
    _0x4fd589 = encoder.encode(_0x4fd589);
  }
  const _0x7d3af5 = [];
  for (let _0x3d01e4 = 0x0; _0x3d01e4 < _0x4fd589.length; _0x3d01e4 += 0x8000) {
    _0x7d3af5.push(String.fromCharCode.apply(null, _0x4fd589.subarray(_0x3d01e4, _0x3d01e4 + 0x8000)));
  }
  return btoa(_0x7d3af5.join(''));
}, "name", {
  'value': "encodeBase64",
  'configurable': true
});
var encode = __defProp(_0x190364 => {
  return encodeBase64(_0x190364).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}, "name", {
  'value': "encode",
  'configurable': true
});
var decodeBase64 = __defProp(_0x24011b => {
  const _0x1f7cf3 = atob(_0x24011b);
  const _0x1e04ea = new Uint8Array(_0x1f7cf3.length);
  for (let _0x444f7d = 0x0; _0x444f7d < _0x1f7cf3.length; _0x444f7d++) {
    _0x1e04ea[_0x444f7d] = _0x1f7cf3.charCodeAt(_0x444f7d);
  }
  return _0x1e04ea;
}, "name", {
  'value': "decodeBase64",
  'configurable': true
});
var decode = __defProp(_0x3cb573 => {
  let _0x5dcd75 = _0x3cb573;
  if (_0x5dcd75 instanceof Uint8Array) {
    _0x5dcd75 = decoder.decode(_0x5dcd75);
  }
  _0x5dcd75 = _0x5dcd75.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
  try {
    return decodeBase64(_0x5dcd75);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}, "name", {
  'value': 'decode',
  'configurable': true
});
var JOSEError = class extends Error {
  constructor(_0x51bcc7, _0x402879) {
    super(_0x51bcc7, _0x402879);
    this.code = "ERR_JOSE_GENERIC";
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
__defProp(JOSEError, "name", {
  'value': "JOSEError",
  'configurable': true
});
JOSEError.code = "ERR_JOSE_GENERIC";
var JWTClaimValidationFailed = class extends JOSEError {
  constructor(_0x2138cb, _0x3a772e, _0x258963 = 'unspecified', _0x572035 = "unspecified") {
    super(_0x2138cb, {
      'cause': {
        'claim': _0x258963,
        'reason': _0x572035,
        'payload': _0x3a772e
      }
    });
    this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    this.claim = _0x258963;
    this.reason = _0x572035;
    this.payload = _0x3a772e;
  }
};
__defProp(JWTClaimValidationFailed, "name", {
  'value': "JWTClaimValidationFailed",
  'configurable': true
});
JWTClaimValidationFailed.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
var JWTExpired = class extends JOSEError {
  constructor(_0x4c9423, _0x4afb0e, _0x4213cb = "unspecified", _0x3a9c5b = 'unspecified') {
    super(_0x4c9423, {
      'cause': {
        'claim': _0x4213cb,
        'reason': _0x3a9c5b,
        'payload': _0x4afb0e
      }
    });
    this.code = "ERR_JWT_EXPIRED";
    this.claim = _0x4213cb;
    this.reason = _0x3a9c5b;
    this.payload = _0x4afb0e;
  }
};
__defProp(JWTExpired, "name", {
  'value': "JWTExpired",
  'configurable': true
});
JWTExpired.code = "ERR_JWT_EXPIRED";
var JOSEAlgNotAllowed = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = 'ERR_JOSE_ALG_NOT_ALLOWED';
  }
};
__defProp(JOSEAlgNotAllowed, "name", {
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
__defProp(JOSENotSupported, "name", {
  'value': "JOSENotSupported",
  'configurable': true
});
JOSENotSupported.code = "ERR_JOSE_NOT_SUPPORTED";
var JWEDecryptionFailed = class extends JOSEError {
  constructor(_0x938e41 = "decryption operation failed", _0xd9014c) {
    super(_0x938e41, _0xd9014c);
    this.code = "ERR_JWE_DECRYPTION_FAILED";
  }
};
__defProp(JWEDecryptionFailed, "name", {
  'value': "JWEDecryptionFailed",
  'configurable': true
});
JWEDecryptionFailed.code = "ERR_JWE_DECRYPTION_FAILED";
var JWEInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWE_INVALID";
  }
};
__defProp(JWEInvalid, "name", {
  'value': "JWEInvalid",
  'configurable': true
});
JWEInvalid.code = "ERR_JWE_INVALID";
var JWSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = 'ERR_JWS_INVALID';
  }
};
__defProp(JWSInvalid, "name", {
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
__defProp(JWTInvalid, "name", {
  'value': 'JWTInvalid',
  'configurable': true
});
JWTInvalid.code = "ERR_JWT_INVALID";
var JWKInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWK_INVALID";
  }
};
__defProp(JWKInvalid, "name", {
  'value': 'JWKInvalid',
  'configurable': true
});
JWKInvalid.code = "ERR_JWK_INVALID";
var JWKSInvalid = class extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWKS_INVALID";
  }
};
__defProp(JWKSInvalid, "name", {
  'value': 'JWKSInvalid',
  'configurable': true
});
JWKSInvalid.code = "ERR_JWKS_INVALID";
var JWKSNoMatchingKey = class extends JOSEError {
  constructor(_0x16dec0 = "no applicable key found in the JSON Web Key Set", _0x1c3533) {
    super(_0x16dec0, _0x1c3533);
    this.code = "ERR_JWKS_NO_MATCHING_KEY";
  }
};
__defProp(JWKSNoMatchingKey, "name", {
  'value': 'JWKSNoMatchingKey',
  'configurable': true
});
JWKSNoMatchingKey.code = "ERR_JWKS_NO_MATCHING_KEY";
var JWKSMultipleMatchingKeys = class extends JOSEError {
  constructor(_0xc09495 = "multiple matching keys found in the JSON Web Key Set", _0x1a6640) {
    super(_0xc09495, _0x1a6640);
    this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
  }
};
__defProp(JWKSMultipleMatchingKeys, "name", {
  'value': "JWKSMultipleMatchingKeys",
  'configurable': true
});
JWKSMultipleMatchingKeys.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
var JWKSTimeout = class extends JOSEError {
  constructor(_0x262ed1 = "request timed out", _0x1ad4a) {
    super(_0x262ed1, _0x1ad4a);
    this.code = "ERR_JWKS_TIMEOUT";
  }
};
__defProp(JWKSTimeout, "name", {
  'value': "JWKSTimeout",
  'configurable': true
});
JWKSTimeout.code = "ERR_JWKS_TIMEOUT";
var JWSSignatureVerificationFailed = class extends JOSEError {
  constructor(_0x9119d9 = "signature verification failed", _0x416f9a) {
    super(_0x9119d9, _0x416f9a);
    this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  }
};
__defProp(JWSSignatureVerificationFailed, "name", {
  'value': 'JWSSignatureVerificationFailed',
  'configurable': true
});
JWSSignatureVerificationFailed.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
function unusable(_0x23bb21, _0x45b637 = "algorithm.name") {
  return new TypeError("CryptoKey does not support this operation, its " + _0x45b637 + " must be " + _0x23bb21);
}
__defProp(unusable, "name", {
  'value': "unusable",
  'configurable': true
});
function isAlgorithm(_0x175a55, _0x5b305d) {
  return _0x175a55.name === _0x5b305d;
}
__defProp(isAlgorithm, "name", {
  'value': "isAlgorithm",
  'configurable': true
});
function getHashLength(_0x308787) {
  return parseInt(_0x308787.name.slice(0x4), 0xa);
}
__defProp(getHashLength, "name", {
  'value': "getHashLength",
  'configurable': true
});
function getNamedCurve(_0x126e11) {
  switch (_0x126e11) {
    case 'ES256':
      return 'P-256';
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
__defProp(getNamedCurve, "name", {
  'value': "getNamedCurve",
  'configurable': true
});
function checkUsage(_0x246c33, _0x9e33a5) {
  if (_0x9e33a5.length && !_0x9e33a5.some(_0x465736 => _0x246c33.usages.includes(_0x465736))) {
    let _0x4cb0d9 = "CryptoKey does not support this operation, its usages must include ";
    if (_0x9e33a5.length > 0x2) {
      const _0x375341 = _0x9e33a5.pop();
      _0x4cb0d9 += "one of " + _0x9e33a5.join(", ") + ", or " + _0x375341 + '.';
    } else if (_0x9e33a5.length === 0x2) {
      _0x4cb0d9 += "one of " + _0x9e33a5[0x0] + " or " + _0x9e33a5[0x1] + '.';
    } else {
      _0x4cb0d9 += _0x9e33a5[0x0] + '.';
    }
    throw new TypeError(_0x4cb0d9);
  }
}
__defProp(checkUsage, "name", {
  'value': "checkUsage",
  'configurable': true
});
function checkSigCryptoKey(_0x31cbd5, _0x18a568, ..._0x5dda4c) {
  switch (_0x18a568) {
    case "HS256":
    case "HS384":
    case "HS512":
      {
        if (!(_0x31cbd5.algorithm.name === "HMAC")) {
          throw unusable("HMAC");
        }
        const _0x127b85 = parseInt(_0x18a568.slice(0x2), 0xa);
        const _0x4cc915 = parseInt(_0x31cbd5.algorithm.hash.name.slice(0x4), 0xa);
        if (_0x4cc915 !== _0x127b85) {
          throw unusable("SHA-" + _0x127b85, "algorithm.hash");
        }
        break;
      }
    case "RS256":
    case 'RS384':
    case "RS512":
      {
        if (!(_0x31cbd5.algorithm.name === 'RSASSA-PKCS1-v1_5')) {
          throw unusable("RSASSA-PKCS1-v1_5");
        }
        const _0x34e316 = parseInt(_0x18a568.slice(0x2), 0xa);
        const _0x5c3501 = parseInt(_0x31cbd5.algorithm.hash.name.slice(0x4), 0xa);
        if (_0x5c3501 !== _0x34e316) {
          throw unusable("SHA-" + _0x34e316, 'algorithm.hash');
        }
        break;
      }
    case "PS256":
    case 'PS384':
    case "PS512":
      {
        if (!(_0x31cbd5.algorithm.name === "RSA-PSS")) {
          throw unusable("RSA-PSS");
        }
        const _0x32caf4 = parseInt(_0x18a568.slice(0x2), 0xa);
        const _0x1cbd71 = parseInt(_0x31cbd5.algorithm.hash.name.slice(0x4), 0xa);
        if (_0x1cbd71 !== _0x32caf4) {
          throw unusable("SHA-" + _0x32caf4, "algorithm.hash");
        }
        break;
      }
    case 'EdDSA':
      {
        if (_0x31cbd5.algorithm.name !== "Ed25519" && _0x31cbd5.algorithm.name !== "Ed448") {
          throw unusable("Ed25519 or Ed448");
        }
        break;
      }
    case "ES256":
    case 'ES384':
    case "ES512":
      {
        if (!(_0x31cbd5.algorithm.name === "ECDSA")) {
          throw unusable("ECDSA");
        }
        const _0x2142dc = getNamedCurve(_0x18a568);
        const _0x164f44 = _0x31cbd5.algorithm.namedCurve;
        if (_0x164f44 !== _0x2142dc) {
          throw unusable(_0x2142dc, "algorithm.namedCurve");
        }
        break;
      }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(_0x31cbd5, _0x5dda4c);
}
__defProp(checkSigCryptoKey, "name", {
  'value': 'checkSigCryptoKey',
  'configurable': true
});
function message(_0x17bcfa, _0x25b331, ..._0x3376a3) {
  _0x3376a3 = _0x3376a3.filter(Boolean);
  if (_0x3376a3.length > 0x2) {
    const _0x39f5f9 = _0x3376a3.pop();
    _0x17bcfa += "one of type " + _0x3376a3.join(", ") + ", or " + _0x39f5f9 + '.';
  } else if (_0x3376a3.length === 0x2) {
    _0x17bcfa += "one of type " + _0x3376a3[0x0] + " or " + _0x3376a3[0x1] + '.';
  } else {
    _0x17bcfa += "of type " + _0x3376a3[0x0] + '.';
  }
  if (_0x25b331 == null) {
    _0x17bcfa += " Received " + _0x25b331;
  } else {
    if (typeof _0x25b331 === "function" && _0x25b331.name) {
      _0x17bcfa += " Received function " + _0x25b331.name;
    } else if (typeof _0x25b331 === "object" && _0x25b331 != null) {
      if (_0x25b331.constructor?.["name"]) {
        _0x17bcfa += " Received an instance of " + _0x25b331.constructor.name;
      }
    }
  }
  return _0x17bcfa;
}
__defProp(message, "name", {
  'value': 'message',
  'configurable': true
});
var invalid_key_input_default = __defProp((_0x271a54, ..._0x1fb4a0) => {
  return message("Key must be ", _0x271a54, ..._0x1fb4a0);
}, "name", {
  'value': "default",
  'configurable': true
});
function withAlg(_0x1fee01, _0x4b05c3, ..._0x134d8a) {
  return message("Key for the " + _0x1fee01 + " algorithm must be ", _0x4b05c3, ..._0x134d8a);
}
__defProp(withAlg, "name", {
  'value': "withAlg",
  'configurable': true
});
var is_key_like_default = __defProp(_0x267d83 => {
  if (isCryptoKey(_0x267d83)) {
    return true;
  }
  return _0x267d83?.[Symbol.toStringTag] === "KeyObject";
}, "name", {
  'value': "default",
  'configurable': true
});
var types = ['CryptoKey'];
var isDisjoint = __defProp((..._0x4b3515) => {
  const _0x528d69 = _0x4b3515.filter(Boolean);
  if (_0x528d69.length === 0x0 || _0x528d69.length === 0x1) {
    return true;
  }
  let _0x42969a;
  for (const _0x5859aa of _0x528d69) {
    const _0x44f390 = Object.keys(_0x5859aa);
    if (!_0x42969a || _0x42969a.size === 0x0) {
      _0x42969a = new Set(_0x44f390);
      continue;
    }
    for (const _0x1c81ee of _0x44f390) {
      if (_0x42969a.has(_0x1c81ee)) {
        return false;
      }
      _0x42969a.add(_0x1c81ee);
    }
  }
  return true;
}, "name", {
  'value': "isDisjoint",
  'configurable': true
});
function isObjectLike(_0x591f78) {
  return typeof _0x591f78 === 'object' && _0x591f78 !== null;
}
__defProp(isObjectLike, "name", {
  'value': 'isObjectLike',
  'configurable': true
});
function isObject(_0x4b7fc6) {
  if (!(typeof _0x4b7fc6 === 'object' && _0x4b7fc6 !== null) || Object.prototype.toString.call(_0x4b7fc6) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(_0x4b7fc6) === null) {
    return true;
  }
  let _0x18494e = _0x4b7fc6;
  while (Object.getPrototypeOf(_0x18494e) !== null) {
    _0x18494e = Object.getPrototypeOf(_0x18494e);
  }
  return Object.getPrototypeOf(_0x4b7fc6) === _0x18494e;
}
__defProp(isObject, "name", {
  'value': "isObject",
  'configurable': true
});
var check_key_length_default = __defProp((_0x472729, _0x28bf5f) => {
  if (_0x472729.startsWith('RS') || _0x472729.startsWith('PS')) {
    const {
      modulusLength: _0x2e7e13
    } = _0x28bf5f.algorithm;
    if (typeof _0x2e7e13 !== "number" || _0x2e7e13 < 0x800) {
      throw new TypeError(_0x472729 + " requires key modulusLength to be 2048 bits or larger");
    }
  }
}, "name", {
  'value': "default",
  'configurable': true
});
function isJWK(_0xe9d97f) {
  return isObject(_0xe9d97f) && typeof _0xe9d97f.kty === "string";
}
__defProp(isJWK, "name", {
  'value': "isJWK",
  'configurable': true
});
function isPrivateJWK(_0x5cebfe) {
  return _0x5cebfe.kty !== "oct" && typeof _0x5cebfe.d === 'string';
}
__defProp(isPrivateJWK, "name", {
  'value': 'isPrivateJWK',
  'configurable': true
});
function isPublicJWK(_0x51c425) {
  return _0x51c425.kty !== "oct" && typeof _0x51c425.d === "undefined";
}
__defProp(isPublicJWK, "name", {
  'value': "isPublicJWK",
  'configurable': true
});
function isSecretJWK(_0x59dc31) {
  return isObject(_0x59dc31) && typeof _0x59dc31.kty === "string" && _0x59dc31.kty === 'oct' && typeof _0x59dc31.k === "string";
}
__defProp(isSecretJWK, "name", {
  'value': "isSecretJWK",
  'configurable': true
});
function subtleMapping(_0xc0fa71) {
  let _0x5c36ec;
  let _0x278ddb;
  switch (_0xc0fa71.kty) {
    case 'RSA':
      {
        switch (_0xc0fa71.alg) {
          case 'PS256':
          case "PS384":
          case 'PS512':
            _0x5c36ec = {
              'name': "RSA-PSS",
              'hash': 'SHA-' + _0xc0fa71.alg.slice(-0x3)
            };
            _0x278ddb = _0xc0fa71.d ? ["sign"] : ['verify'];
            break;
          case "RS256":
          case "RS384":
          case "RS512":
            _0x5c36ec = {
              'name': 'RSASSA-PKCS1-v1_5',
              'hash': "SHA-" + _0xc0fa71.alg.slice(-0x3)
            };
            _0x278ddb = _0xc0fa71.d ? ["sign"] : ['verify'];
            break;
          case 'RSA-OAEP':
          case "RSA-OAEP-256":
          case 'RSA-OAEP-384':
          case "RSA-OAEP-512":
            _0x5c36ec = {
              'name': "RSA-OAEP",
              'hash': "SHA-" + (parseInt(_0xc0fa71.alg.slice(-0x3), 0xa) || 0x1)
            };
            _0x278ddb = _0xc0fa71.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
            break;
          default:
            throw new JOSENotSupported("Invalid or unsupported JWK \"alg\" (Algorithm) Parameter value");
        }
        break;
      }
    case 'EC':
      {
        switch (_0xc0fa71.alg) {
          case "ES256":
            _0x5c36ec = {
              'name': "ECDSA",
              'namedCurve': "P-256"
            };
            _0x278ddb = _0xc0fa71.d ? ['sign'] : ["verify"];
            break;
          case "ES384":
            _0x5c36ec = {
              'name': "ECDSA",
              'namedCurve': "P-384"
            };
            _0x278ddb = _0xc0fa71.d ? ["sign"] : ["verify"];
            break;
          case "ES512":
            _0x5c36ec = {
              'name': "ECDSA",
              'namedCurve': "P-521"
            };
            _0x278ddb = _0xc0fa71.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            _0x5c36ec = {
              'name': "ECDH",
              'namedCurve': _0xc0fa71.crv
            };
            _0x278ddb = _0xc0fa71.d ? ["deriveBits"] : [];
            break;
          default:
            throw new JOSENotSupported("Invalid or unsupported JWK \"alg\" (Algorithm) Parameter value");
        }
        break;
      }
    case "OKP":
      {
        switch (_0xc0fa71.alg) {
          case 'EdDSA':
            _0x5c36ec = {
              'name': _0xc0fa71.crv
            };
            _0x278ddb = _0xc0fa71.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case 'ECDH-ES+A128KW':
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            _0x5c36ec = {
              'name': _0xc0fa71.crv
            };
            _0x278ddb = _0xc0fa71.d ? ["deriveBits"] : [];
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
    'algorithm': _0x5c36ec,
    'keyUsages': _0x278ddb
  };
}
__defProp(subtleMapping, "name", {
  'value': "subtleMapping",
  'configurable': true
});
var parse = __defProp(async _0x22aed4 => {
  if (!_0x22aed4.alg) {
    throw new TypeError("\"alg\" argument is required when \"jwk.alg\" is not present");
  }
  const {
    algorithm: _0x139bda,
    keyUsages: _0x208670
  } = subtleMapping(_0x22aed4);
  const _0x31e592 = [_0x139bda, _0x22aed4.ext ?? false, _0x22aed4.key_ops ?? _0x208670];
  const _0x51a27e = {
    ..._0x22aed4
  };
  delete _0x51a27e.alg;
  delete _0x51a27e.use;
  return crypto.subtle.importKey("jwk", _0x51a27e, ..._0x31e592);
}, "name", {
  'value': 'parse',
  'configurable': true
});
var exportKeyValue = __defProp(_0x3f2e2a => decode(_0x3f2e2a), "name", {
  'value': "exportKeyValue",
  'configurable': true
});
var privCache;
var pubCache;
var isKeyObject = __defProp(_0x4758bc => {
  return _0x4758bc?.[Symbol.toStringTag] === "KeyObject";
}, "name", {
  'value': "isKeyObject",
  'configurable': true
});
var importAndCache = __defProp(async (_0x17d0e1, _0x27b1d0, _0x65c71b, _0x1303c6, _0x1abb88 = false) => {
  let _0x154f6c = _0x17d0e1.get(_0x27b1d0);
  if (_0x154f6c?.[_0x1303c6]) {
    return _0x154f6c[_0x1303c6];
  }
  const _0x3f7239 = await parse({
    ..._0x65c71b,
    'alg': _0x1303c6
  });
  if (_0x1abb88) {
    Object.freeze(_0x27b1d0);
  }
  if (!_0x154f6c) {
    _0x17d0e1.set(_0x27b1d0, {
      [_0x1303c6]: _0x3f7239
    });
  } else {
    _0x154f6c[_0x1303c6] = _0x3f7239;
  }
  return _0x3f7239;
}, "name", {
  'value': "importAndCache",
  'configurable': true
});
var normalizePublicKey = __defProp((_0x365647, _0x3e73dd) => {
  if (isKeyObject(_0x365647)) {
    let _0x2a6f37 = _0x365647["export"]({
      'format': "jwk"
    });
    delete _0x2a6f37.d;
    delete _0x2a6f37.dp;
    delete _0x2a6f37.dq;
    delete _0x2a6f37.p;
    delete _0x2a6f37.q;
    delete _0x2a6f37.qi;
    if (_0x2a6f37.k) {
      return exportKeyValue(_0x2a6f37.k);
    }
    if (!pubCache) {
      pubCache = new WeakMap();
    }
    return importAndCache(pubCache, _0x365647, _0x2a6f37, _0x3e73dd);
  }
  if (isObject(_0x365647) && typeof _0x365647.kty === "string") {
    if (_0x365647.k) {
      return decode(_0x365647.k);
    }
    if (!pubCache) {
      pubCache = new WeakMap();
    }
    const _0x5a95c6 = importAndCache(pubCache, _0x365647, _0x365647, _0x3e73dd, true);
    return _0x5a95c6;
  }
  return _0x365647;
}, "name", {
  'value': "normalizePublicKey",
  'configurable': true
});
var normalizePrivateKey = __defProp((_0x39eb6a, _0x5359ae) => {
  if (isKeyObject(_0x39eb6a)) {
    let _0x2e4e54 = _0x39eb6a["export"]({
      'format': "jwk"
    });
    if (_0x2e4e54.k) {
      return exportKeyValue(_0x2e4e54.k);
    }
    if (!privCache) {
      privCache = new WeakMap();
    }
    return importAndCache(privCache, _0x39eb6a, _0x2e4e54, _0x5359ae);
  }
  if (isObject(_0x39eb6a) && typeof _0x39eb6a.kty === "string") {
    if (_0x39eb6a.k) {
      return decode(_0x39eb6a.k);
    }
    if (!privCache) {
      privCache = new WeakMap();
    }
    const _0x84a984 = importAndCache(privCache, _0x39eb6a, _0x39eb6a, _0x5359ae, true);
    return _0x84a984;
  }
  return _0x39eb6a;
}, "name", {
  'value': 'normalizePrivateKey',
  'configurable': true
});
var normalize_key_default = {
  'normalizePublicKey': normalizePublicKey,
  'normalizePrivateKey': normalizePrivateKey
};
async function importJWK(_0x396b59, _0x251eba) {
  if (!isObject(_0x396b59)) {
    throw new TypeError("JWK must be an object");
  }
  if (!_0x251eba) {
    _0x251eba = _0x396b59.alg;
  }
  switch (_0x396b59.kty) {
    case "oct":
      if (typeof _0x396b59.k !== "string" || !_0x396b59.k) {
        throw new TypeError("missing \"k\" (Key Value) Parameter value");
      }
      return decode(_0x396b59.k);
    case "RSA":
      if (_0x396b59.oth !== undefined) {
        throw new JOSENotSupported("RSA JWK \"oth\" (Other Primes Info) Parameter value is not supported");
      }
    case 'EC':
    case "OKP":
      return parse({
        ..._0x396b59,
        'alg': _0x251eba
      });
    default:
      throw new JOSENotSupported("Unsupported \"kty\" (Key Type) Parameter value");
  }
}
__defProp(importJWK, "name", {
  'value': 'importJWK',
  'configurable': true
});
var tag = __defProp(_0x5c80be => _0x5c80be?.[Symbol.toStringTag], "name", {
  'value': 'tag',
  'configurable': true
});
var jwkMatchesOp = __defProp((_0x3f2b58, _0x3a04b0, _0xf06787) => {
  if (_0x3a04b0.use !== undefined && _0x3a04b0.use !== 'sig') {
    throw new TypeError("Invalid key for this operation, when present its use must be sig");
  }
  if (_0x3a04b0.key_ops !== undefined && _0x3a04b0.key_ops.includes?.(_0xf06787) !== true) {
    throw new TypeError("Invalid key for this operation, when present its key_ops must include " + _0xf06787);
  }
  if (_0x3a04b0.alg !== undefined && _0x3a04b0.alg !== _0x3f2b58) {
    throw new TypeError("Invalid key for this operation, when present its alg must be " + _0x3f2b58);
  }
  return true;
}, "name", {
  'value': "jwkMatchesOp",
  'configurable': true
});
var symmetricTypeCheck = __defProp((_0x4b3e8a, _0x5ca4f4, _0x590f73, _0x40b6cd) => {
  if (_0x5ca4f4 instanceof Uint8Array) {
    return;
  }
  if (_0x40b6cd && isObject(_0x5ca4f4) && typeof _0x5ca4f4.kty === "string") {
    if (isObject(_0x5ca4f4) && typeof _0x5ca4f4.kty === "string" && _0x5ca4f4.kty === 'oct' && typeof _0x5ca4f4.k === "string" && jwkMatchesOp(_0x4b3e8a, _0x5ca4f4, _0x590f73)) {
      return;
    }
    throw new TypeError("JSON Web Key for symmetric algorithms must have JWK \"kty\" (Key Type) equal to \"oct\" and the JWK \"k\" (Key Value) present");
  }
  if (!is_key_like_default(_0x5ca4f4)) {
    throw new TypeError(withAlg(_0x4b3e8a, _0x5ca4f4, ...types, 'Uint8Array', _0x40b6cd ? "JSON Web Key" : null));
  }
  if (_0x5ca4f4.type !== "secret") {
    throw new TypeError(tag(_0x5ca4f4) + " instances for symmetric algorithms must be of type \"secret\"");
  }
}, "name", {
  'value': "symmetricTypeCheck",
  'configurable': true
});
var asymmetricTypeCheck = __defProp((_0x222ffc, _0x194226, _0x41b8d0, _0x3a7d69) => {
  if (_0x3a7d69 && isObject(_0x194226) && typeof _0x194226.kty === "string") {
    switch (_0x41b8d0) {
      case "sign":
        if (_0x194226.kty !== "oct" && typeof _0x194226.d === 'string' && jwkMatchesOp(_0x222ffc, _0x194226, _0x41b8d0)) {
          return;
        }
        throw new TypeError("JSON Web Key for this operation be a private JWK");
      case "verify":
        if (_0x194226.kty !== "oct" && typeof _0x194226.d === "undefined" && jwkMatchesOp(_0x222ffc, _0x194226, _0x41b8d0)) {
          return;
        }
        throw new TypeError("JSON Web Key for this operation be a public JWK");
    }
  }
  if (!is_key_like_default(_0x194226)) {
    throw new TypeError(withAlg(_0x222ffc, _0x194226, ...types, _0x3a7d69 ? "JSON Web Key" : null));
  }
  if (_0x194226.type === "secret") {
    throw new TypeError(tag(_0x194226) + " instances for asymmetric algorithms must not be of type \"secret\"");
  }
  if (_0x41b8d0 === "sign" && _0x194226.type === "public") {
    throw new TypeError(tag(_0x194226) + " instances for asymmetric algorithm signing must be of type \"private\"");
  }
  if (_0x41b8d0 === "decrypt" && _0x194226.type === "public") {
    throw new TypeError(tag(_0x194226) + " instances for asymmetric algorithm decryption must be of type \"private\"");
  }
  if (_0x194226.algorithm && _0x41b8d0 === 'verify' && _0x194226.type === "private") {
    throw new TypeError(tag(_0x194226) + " instances for asymmetric algorithm verifying must be of type \"public\"");
  }
  if (_0x194226.algorithm && _0x41b8d0 === "encrypt" && _0x194226.type === "private") {
    throw new TypeError(tag(_0x194226) + " instances for asymmetric algorithm encryption must be of type \"public\"");
  }
}, "name", {
  'value': "asymmetricTypeCheck",
  'configurable': true
});
function checkKeyType(_0x58bb47, _0x165239, _0x1688e1, _0x297ed5) {
  const _0x3132b5 = _0x165239.startsWith('HS') || _0x165239 === "dir" || _0x165239.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(_0x165239);
  if (_0x3132b5) {
    symmetricTypeCheck(_0x165239, _0x1688e1, _0x297ed5, _0x58bb47);
  } else {
    asymmetricTypeCheck(_0x165239, _0x1688e1, _0x297ed5, _0x58bb47);
  }
}
__defProp(checkKeyType, "name", {
  'value': "checkKeyType",
  'configurable': true
});
var check_key_type_default = checkKeyType.bind(undefined, false);
var checkKeyTypeWithJwk = checkKeyType.bind(undefined, true);
function validateCrit(_0x26cba9, _0x2f66e5, _0x4aaf3e, _0x1b5593, _0x43fbaa) {
  if (_0x43fbaa.crit !== undefined && _0x1b5593?.["crit"] === undefined) {
    throw new _0x26cba9("\"crit\" (Critical) Header Parameter MUST be integrity protected");
  }
  if (!_0x1b5593 || _0x1b5593.crit === undefined) {
    return new Set();
  }
  if (!Array.isArray(_0x1b5593.crit) || _0x1b5593.crit.length === 0x0 || _0x1b5593.crit.some(_0xf459c5 => typeof _0xf459c5 !== "string" || _0xf459c5.length === 0x0)) {
    throw new _0x26cba9("\"crit\" (Critical) Header Parameter MUST be an array of non-empty strings when present");
  }
  let _0x51374a;
  if (_0x4aaf3e !== undefined) {
    _0x51374a = new Map([...Object.entries(_0x4aaf3e), ..._0x2f66e5.entries()]);
  } else {
    _0x51374a = _0x2f66e5;
  }
  for (const _0x4ddf90 of _0x1b5593.crit) {
    if (!_0x51374a.has(_0x4ddf90)) {
      throw new JOSENotSupported("Extension Header Parameter \"" + _0x4ddf90 + "\" is not recognized");
    }
    if (_0x43fbaa[_0x4ddf90] === undefined) {
      throw new _0x26cba9("Extension Header Parameter \"" + _0x4ddf90 + "\" is missing");
    }
    if (_0x51374a.get(_0x4ddf90) && _0x1b5593[_0x4ddf90] === undefined) {
      throw new _0x26cba9("Extension Header Parameter \"" + _0x4ddf90 + "\" MUST be integrity protected");
    }
  }
  return new Set(_0x1b5593.crit);
}
__defProp(validateCrit, "name", {
  'value': "validateCrit",
  'configurable': true
});
var validateAlgorithms = __defProp((_0x42e30f, _0xb477b8) => {
  if (_0xb477b8 !== undefined && (!Array.isArray(_0xb477b8) || _0xb477b8.some(_0x2e4a6d => typeof _0x2e4a6d !== "string"))) {
    throw new TypeError("\"" + _0x42e30f + "\" option must be an array of strings");
  }
  if (!_0xb477b8) {
    return undefined;
  }
  return new Set(_0xb477b8);
}, "name", {
  'value': "validateAlgorithms",
  'configurable': true
});
function subtleDsa(_0x1036a4, _0x4935c7) {
  const _0x3e8118 = "SHA-" + _0x1036a4.slice(-0x3);
  switch (_0x1036a4) {
    case "HS256":
    case "HS384":
    case "HS512":
      return {
        'hash': _0x3e8118,
        'name': "HMAC"
      };
    case "PS256":
    case "PS384":
    case 'PS512':
      return {
        'hash': _0x3e8118,
        'name': "RSA-PSS",
        'saltLength': _0x1036a4.slice(-0x3) >> 0x3
      };
    case "RS256":
    case 'RS384':
    case "RS512":
      return {
        'hash': _0x3e8118,
        'name': 'RSASSA-PKCS1-v1_5'
      };
    case 'ES256':
    case "ES384":
    case "ES512":
      return {
        'hash': _0x3e8118,
        'name': "ECDSA",
        'namedCurve': _0x4935c7.namedCurve
      };
    case "EdDSA":
      return {
        'name': _0x4935c7.name
      };
    default:
      throw new JOSENotSupported("alg " + _0x1036a4 + " is not supported either by JOSE or your javascript runtime");
  }
}
__defProp(subtleDsa, "name", {
  'value': "subtleDsa",
  'configurable': true
});
async function getCryptoKey(_0x35fc0e, _0x92b080, _0x40a70e) {
  if (_0x40a70e === "sign") {
    _0x92b080 = await normalize_key_default.normalizePrivateKey(_0x92b080, _0x35fc0e);
  }
  if (_0x40a70e === "verify") {
    _0x92b080 = await normalize_key_default.normalizePublicKey(_0x92b080, _0x35fc0e);
  }
  if (isCryptoKey(_0x92b080)) {
    checkSigCryptoKey(_0x92b080, _0x35fc0e, _0x40a70e);
    return _0x92b080;
  }
  if (_0x92b080 instanceof Uint8Array) {
    if (!_0x35fc0e.startsWith('HS')) {
      throw new TypeError(invalid_key_input_default(_0x92b080, ...types));
    }
    return crypto.subtle.importKey("raw", _0x92b080, {
      'hash': "SHA-" + _0x35fc0e.slice(-0x3),
      'name': "HMAC"
    }, false, [_0x40a70e]);
  }
  throw new TypeError(invalid_key_input_default(_0x92b080, ...types, "Uint8Array", "JSON Web Key"));
}
__defProp(getCryptoKey, "name", {
  'value': "getCryptoKey",
  'configurable': true
});
var verify = __defProp(async (_0x4dab78, _0x5eb174, _0x4169a8, _0x5da835) => {
  const _0x7a73cb = await getCryptoKey(_0x4dab78, _0x5eb174, "verify");
  check_key_length_default(_0x4dab78, _0x7a73cb);
  const _0xbc907f = subtleDsa(_0x4dab78, _0x7a73cb.algorithm);
  try {
    return await crypto.subtle.verify(_0xbc907f, _0x7a73cb, _0x4169a8, _0x5da835);
  } catch {
    return false;
  }
}, "name", {
  'value': "verify",
  'configurable': true
});
async function flattenedVerify(_0x1e4a0c, _0x4a2c02, _0x283837) {
  if (!isObject(_0x1e4a0c)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (_0x1e4a0c["protected"] === undefined && _0x1e4a0c.header === undefined) {
    throw new JWSInvalid("Flattened JWS must have either of the \"protected\" or \"header\" members");
  }
  if (_0x1e4a0c["protected"] !== undefined && typeof _0x1e4a0c["protected"] !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (_0x1e4a0c.payload === undefined) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof _0x1e4a0c.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (_0x1e4a0c.header !== undefined && !isObject(_0x1e4a0c.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let _0x43f7c7 = {};
  if (_0x1e4a0c['protected']) {
    try {
      const _0x4d2fb3 = decode(_0x1e4a0c["protected"]);
      _0x43f7c7 = JSON.parse(decoder.decode(_0x4d2fb3));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!isDisjoint(_0x43f7c7, _0x1e4a0c.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const _0x2746e7 = {
    ..._0x43f7c7,
    ..._0x1e4a0c.header
  };
  const _0x3a6f7b = validateCrit(JWSInvalid, new Map([["b64", true]]), _0x283837?.["crit"], _0x43f7c7, _0x2746e7);
  let _0x15a6cd = true;
  if (_0x3a6f7b.has("b64")) {
    _0x15a6cd = _0x43f7c7.b64;
    if (typeof _0x15a6cd !== "boolean") {
      throw new JWSInvalid("The \"b64\" (base64url-encode payload) Header Parameter must be a boolean");
    }
  }
  const {
    alg: _0x3b48c3
  } = _0x2746e7;
  if (typeof _0x3b48c3 !== "string" || !_0x3b48c3) {
    throw new JWSInvalid("JWS \"alg\" (Algorithm) Header Parameter missing or invalid");
  }
  const _0x1e15a5 = _0x283837 && validateAlgorithms("algorithms", _0x283837.algorithms);
  if (_0x1e15a5 && !_0x1e15a5.has(_0x3b48c3)) {
    throw new JOSEAlgNotAllowed("\"alg\" (Algorithm) Header Parameter value not allowed");
  }
  if (_0x15a6cd) {
    if (typeof _0x1e4a0c.payload !== 'string') {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else {
    if (typeof _0x1e4a0c.payload !== 'string' && !(_0x1e4a0c.payload instanceof Uint8Array)) {
      throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
    }
  }
  let _0x44d29a = false;
  if (typeof _0x4a2c02 === "function") {
    _0x4a2c02 = await _0x4a2c02(_0x43f7c7, _0x1e4a0c);
    _0x44d29a = true;
    checkKeyTypeWithJwk(_0x3b48c3, _0x4a2c02, "verify");
    if (isObject(_0x4a2c02) && typeof _0x4a2c02.kty === "string") {
      _0x4a2c02 = await importJWK(_0x4a2c02, _0x3b48c3);
    }
  } else {
    checkKeyTypeWithJwk(_0x3b48c3, _0x4a2c02, "verify");
  }
  const _0x3404ae = concat(encoder.encode(_0x1e4a0c["protected"] ?? ''), encoder.encode('.'), typeof _0x1e4a0c.payload === 'string' ? encoder.encode(_0x1e4a0c.payload) : _0x1e4a0c.payload);
  let _0x3d3cee;
  try {
    _0x3d3cee = decode(_0x1e4a0c.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const _0x440b51 = await verify(_0x3b48c3, _0x4a2c02, _0x3d3cee, _0x3404ae);
  if (!_0x440b51) {
    throw new JWSSignatureVerificationFailed();
  }
  let _0x2a35be;
  if (_0x15a6cd) {
    try {
      _0x2a35be = decode(_0x1e4a0c.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof _0x1e4a0c.payload === 'string') {
    _0x2a35be = encoder.encode(_0x1e4a0c.payload);
  } else {
    _0x2a35be = _0x1e4a0c.payload;
  }
  const _0x5dd6a6 = {
    'payload': _0x2a35be
  };
  if (_0x1e4a0c["protected"] !== undefined) {
    _0x5dd6a6.protectedHeader = _0x43f7c7;
  }
  if (_0x1e4a0c.header !== undefined) {
    _0x5dd6a6.unprotectedHeader = _0x1e4a0c.header;
  }
  if (_0x44d29a) {
    return {
      ..._0x5dd6a6,
      'key': _0x4a2c02
    };
  }
  return _0x5dd6a6;
}
__defProp(flattenedVerify, "name", {
  'value': "flattenedVerify",
  'configurable': true
});
async function compactVerify(_0x12531c, _0x2e3059, _0x5a9ec4) {
  if (_0x12531c instanceof Uint8Array) {
    _0x12531c = decoder.decode(_0x12531c);
  }
  if (typeof _0x12531c !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const {
    0x0: _0x54d0de,
    0x1: _0x5500f7,
    0x2: _0x439af8,
    length: _0x26d4da
  } = _0x12531c.split('.');
  if (_0x26d4da !== 0x3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const _0x432c68 = await flattenedVerify({
    'payload': _0x5500f7,
    'protected': _0x54d0de,
    'signature': _0x439af8
  }, _0x2e3059, _0x5a9ec4);
  const _0x192e7 = {
    'payload': _0x432c68.payload,
    'protectedHeader': _0x432c68.protectedHeader
  };
  if (typeof _0x2e3059 === 'function') {
    return {
      ..._0x192e7,
      'key': _0x432c68.key
    };
  }
  return _0x192e7;
}
__defProp(compactVerify, "name", {
  'value': "compactVerify",
  'configurable': true
});
var epoch_default = __defProp(_0x10a1c4 => Math.floor(_0x10a1c4.getTime() / 0x3e8), "name", {
  'value': "default",
  'configurable': true
});
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var secs_default = __defProp(_0x2959bf => {
  const _0x12cb7f = REGEX.exec(_0x2959bf);
  if (!_0x12cb7f || _0x12cb7f[0x4] && _0x12cb7f[0x1]) {
    throw new TypeError("Invalid time period format");
  }
  const _0x466683 = parseFloat(_0x12cb7f[0x2]);
  const _0xcbfe17 = _0x12cb7f[0x3].toLowerCase();
  let _0x3cd70e;
  switch (_0xcbfe17) {
    case 'sec':
    case 'secs':
    case 'second':
    case "seconds":
    case 's':
      _0x3cd70e = Math.round(_0x466683);
      break;
    case 'minute':
    case "minutes":
    case "min":
    case "mins":
    case 'm':
      _0x3cd70e = Math.round(_0x466683 * 0x3c);
      break;
    case "hour":
    case 'hours':
    case 'hr':
    case 'hrs':
    case 'h':
      _0x3cd70e = Math.round(_0x466683 * 3600);
      break;
    case 'day':
    case "days":
    case 'd':
      _0x3cd70e = Math.round(_0x466683 * 86400);
      break;
    case "week":
    case "weeks":
    case 'w':
      _0x3cd70e = Math.round(_0x466683 * 604800);
      break;
    default:
      _0x3cd70e = Math.round(_0x466683 * 31557600);
      break;
  }
  if (_0x12cb7f[0x1] === '-' || _0x12cb7f[0x4] === "ago") {
    return -_0x3cd70e;
  }
  return _0x3cd70e;
}, "name", {
  'value': 'default',
  'configurable': true
});
var normalizeTyp = __defProp(_0x36be37 => _0x36be37.toLowerCase().replace(/^application\//, ''), "name", {
  'value': "normalizeTyp",
  'configurable': true
});
var checkAudiencePresence = __defProp((_0x2b828f, _0x266f03) => {
  if (typeof _0x2b828f === "string") {
    return _0x266f03.includes(_0x2b828f);
  }
  if (Array.isArray(_0x2b828f)) {
    return _0x266f03.some(Set.prototype.has.bind(new Set(_0x2b828f)));
  }
  return false;
}, "name", {
  'value': "checkAudiencePresence",
  'configurable': true
});
var jwt_claims_set_default = __defProp((_0x2feb68, _0x437ee0, _0x135603 = {}) => {
  let _0x802d4;
  try {
    _0x802d4 = JSON.parse(decoder.decode(_0x437ee0));
  } catch {}
  if (!isObject(_0x802d4)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const {
    typ: _0xa8008f
  } = _0x135603;
  if (_0xa8008f && (typeof _0x2feb68.typ !== "string" || normalizeTyp(_0x2feb68.typ) !== normalizeTyp(_0xa8008f))) {
    throw new JWTClaimValidationFailed("unexpected \"typ\" JWT header value", _0x802d4, "typ", "check_failed");
  }
  const {
    requiredClaims = [],
    issuer: _0x35eebd,
    subject: _0x2471db,
    audience: _0x366f39,
    maxTokenAge: _0x51b574
  } = _0x135603;
  const _0x22d85e = [...requiredClaims];
  if (_0x51b574 !== undefined) {
    _0x22d85e.push("iat");
  }
  if (_0x366f39 !== undefined) {
    _0x22d85e.push('aud');
  }
  if (_0x2471db !== undefined) {
    _0x22d85e.push("sub");
  }
  if (_0x35eebd !== undefined) {
    _0x22d85e.push('iss');
  }
  for (const _0x275538 of new Set(_0x22d85e.reverse())) {
    if (!(_0x275538 in _0x802d4)) {
      throw new JWTClaimValidationFailed("missing required \"" + _0x275538 + "\" claim", _0x802d4, _0x275538, "missing");
    }
  }
  if (_0x35eebd && !(Array.isArray(_0x35eebd) ? _0x35eebd : [_0x35eebd]).includes(_0x802d4.iss)) {
    throw new JWTClaimValidationFailed("unexpected \"iss\" claim value", _0x802d4, "iss", "check_failed");
  }
  if (_0x2471db && _0x802d4.sub !== _0x2471db) {
    throw new JWTClaimValidationFailed("unexpected \"sub\" claim value", _0x802d4, "sub", "check_failed");
  }
  if (_0x366f39 && !checkAudiencePresence(_0x802d4.aud, typeof _0x366f39 === "string" ? [_0x366f39] : _0x366f39)) {
    throw new JWTClaimValidationFailed("unexpected \"aud\" claim value", _0x802d4, "aud", "check_failed");
  }
  let _0x4e6a46;
  switch (typeof _0x135603.clockTolerance) {
    case "string":
      _0x4e6a46 = secs_default(_0x135603.clockTolerance);
      break;
    case "number":
      _0x4e6a46 = _0x135603.clockTolerance;
      break;
    case "undefined":
      _0x4e6a46 = 0x0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const {
    currentDate: _0x4f5bd8
  } = _0x135603;
  const _0x120fd5 = epoch_default(_0x4f5bd8 || new Date());
  if ((_0x802d4.iat !== undefined || _0x51b574) && typeof _0x802d4.iat !== "number") {
    throw new JWTClaimValidationFailed("\"iat\" claim must be a number", _0x802d4, 'iat', "invalid");
  }
  if (_0x802d4.nbf !== undefined) {
    if (typeof _0x802d4.nbf !== "number") {
      throw new JWTClaimValidationFailed("\"nbf\" claim must be a number", _0x802d4, 'nbf', "invalid");
    }
    if (_0x802d4.nbf > _0x120fd5 + _0x4e6a46) {
      throw new JWTClaimValidationFailed("\"nbf\" claim timestamp check failed", _0x802d4, "nbf", "check_failed");
    }
  }
  if (_0x802d4.exp !== undefined) {
    if (typeof _0x802d4.exp !== "number") {
      throw new JWTClaimValidationFailed("\"exp\" claim must be a number", _0x802d4, 'exp', "invalid");
    }
    if (_0x802d4.exp <= _0x120fd5 - _0x4e6a46) {
      throw new JWTExpired("\"exp\" claim timestamp check failed", _0x802d4, 'exp', "check_failed");
    }
  }
  if (_0x51b574) {
    const _0x1a4b55 = _0x120fd5 - _0x802d4.iat;
    const _0x26c168 = typeof _0x51b574 === 'number' ? _0x51b574 : secs_default(_0x51b574);
    if (_0x1a4b55 - _0x4e6a46 > _0x26c168) {
      throw new JWTExpired("\"iat\" claim timestamp check failed (too far in the past)", _0x802d4, "iat", "check_failed");
    }
    if (_0x1a4b55 < 0x0 - _0x4e6a46) {
      throw new JWTClaimValidationFailed("\"iat\" claim timestamp check failed (it should be in the past)", _0x802d4, "iat", "check_failed");
    }
  }
  return _0x802d4;
}, "name", {
  'value': "default",
  'configurable': true
});
async function jwtVerify(_0x45a273, _0x4fedad, _0x4302ef) {
  const _0x44da1f = await compactVerify(_0x45a273, _0x4fedad, _0x4302ef);
  if (_0x44da1f.protectedHeader.crit?.['includes']("b64") && _0x44da1f.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const _0x3624c2 = jwt_claims_set_default(_0x44da1f.protectedHeader, _0x44da1f.payload, _0x4302ef);
  const _0x555032 = {
    'payload': _0x3624c2,
    'protectedHeader': _0x44da1f.protectedHeader
  };
  if (typeof _0x4fedad === "function") {
    return {
      ..._0x555032,
      'key': _0x44da1f.key
    };
  }
  return _0x555032;
}
__defProp(jwtVerify, "name", {
  'value': 'jwtVerify',
  'configurable': true
});
var sign = __defProp(async (_0x527ed9, _0x52710e, _0x32722a) => {
  const _0x2a777d = await getCryptoKey(_0x527ed9, _0x52710e, "sign");
  check_key_length_default(_0x527ed9, _0x2a777d);
  const _0x403fb6 = await crypto.subtle.sign(subtleDsa(_0x527ed9, _0x2a777d.algorithm), _0x2a777d, _0x32722a);
  return new Uint8Array(_0x403fb6);
}, "name", {
  'value': "sign",
  'configurable': true
});
var FlattenedSign = class {
  constructor(_0x4cc0a6) {
    if (!(_0x4cc0a6 instanceof Uint8Array)) {
      throw new TypeError("payload must be an instance of Uint8Array");
    }
    this._payload = _0x4cc0a6;
  }
  ['setProtectedHeader'](_0x46bb48) {
    if (this._protectedHeader) {
      throw new TypeError("setProtectedHeader can only be called once");
    }
    this._protectedHeader = _0x46bb48;
    return this;
  }
  ['setUnprotectedHeader'](_0x20d885) {
    if (this._unprotectedHeader) {
      throw new TypeError("setUnprotectedHeader can only be called once");
    }
    this._unprotectedHeader = _0x20d885;
    return this;
  }
  async ["sign"](_0x2d8630, _0x3a35d6) {
    if (!this._protectedHeader && !this._unprotectedHeader) {
      throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    }
    if (!isDisjoint(this._protectedHeader, this._unprotectedHeader)) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const _0x4e3b05 = {
      ...this._protectedHeader,
      ...this._unprotectedHeader
    };
    const _0x50bc4e = validateCrit(JWSInvalid, new Map([["b64", true]]), _0x3a35d6?.["crit"], this._protectedHeader, _0x4e3b05);
    let _0x3031c4 = true;
    if (_0x50bc4e.has("b64")) {
      _0x3031c4 = this._protectedHeader.b64;
      if (typeof _0x3031c4 !== "boolean") {
        throw new JWSInvalid("The \"b64\" (base64url-encode payload) Header Parameter must be a boolean");
      }
    }
    const {
      alg: _0x10d16e
    } = _0x4e3b05;
    if (typeof _0x10d16e !== 'string' || !_0x10d16e) {
      throw new JWSInvalid("JWS \"alg\" (Algorithm) Header Parameter missing or invalid");
    }
    checkKeyTypeWithJwk(_0x10d16e, _0x2d8630, "sign");
    let _0x5c9b47 = this._payload;
    if (_0x3031c4) {
      _0x5c9b47 = encoder.encode(encode(_0x5c9b47));
    }
    let _0x444cdd;
    if (this._protectedHeader) {
      _0x444cdd = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
    } else {
      _0x444cdd = encoder.encode('');
    }
    const _0x348d04 = concat(_0x444cdd, encoder.encode('.'), _0x5c9b47);
    const _0x54747f = await sign(_0x10d16e, _0x2d8630, _0x348d04);
    const _0x4593d2 = {
      'signature': encode(_0x54747f),
      'payload': ''
    };
    if (_0x3031c4) {
      _0x4593d2.payload = decoder.decode(_0x5c9b47);
    }
    if (this._unprotectedHeader) {
      _0x4593d2.header = this._unprotectedHeader;
    }
    if (this._protectedHeader) {
      _0x4593d2["protected"] = decoder.decode(_0x444cdd);
    }
    return _0x4593d2;
  }
};
__defProp(FlattenedSign, "name", {
  'value': "FlattenedSign",
  'configurable': true
});
var CompactSign = class {
  constructor(_0x4802c1) {
    this._flattened = new FlattenedSign(_0x4802c1);
  }
  ["setProtectedHeader"](_0x43d152) {
    this._flattened.setProtectedHeader(_0x43d152);
    return this;
  }
  async ["sign"](_0x3014e4, _0x21c5a2) {
    const _0x1c3bf8 = await this._flattened.sign(_0x3014e4, _0x21c5a2);
    if (_0x1c3bf8.payload === undefined) {
      throw new TypeError("use the flattened module for creating JWS with b64: false");
    }
    return _0x1c3bf8['protected'] + '.' + _0x1c3bf8.payload + '.' + _0x1c3bf8.signature;
  }
};
__defProp(CompactSign, "name", {
  'value': "CompactSign",
  'configurable': true
});
function validateInput(_0x47d161, _0x4d95c2) {
  if (!Number.isFinite(_0x4d95c2)) {
    throw new TypeError("Invalid " + _0x47d161 + " input");
  }
  return _0x4d95c2;
}
__defProp(validateInput, "name", {
  'value': 'validateInput',
  'configurable': true
});
var ProduceJWT = class {
  constructor(_0x5a2d5e = {}) {
    if (!isObject(_0x5a2d5e)) {
      throw new TypeError("JWT Claims Set MUST be an object");
    }
    this._payload = _0x5a2d5e;
  }
  ["setIssuer"](_0x54f071) {
    this._payload = {
      ...this._payload,
      'iss': _0x54f071
    };
    return this;
  }
  ["setSubject"](_0x310aea) {
    this._payload = {
      ...this._payload,
      'sub': _0x310aea
    };
    return this;
  }
  ["setAudience"](_0x42e233) {
    this._payload = {
      ...this._payload,
      'aud': _0x42e233
    };
    return this;
  }
  ['setJti'](_0x50c71e) {
    this._payload = {
      ...this._payload,
      'jti': _0x50c71e
    };
    return this;
  }
  ["setNotBefore"](_0x430f51) {
    if (typeof _0x430f51 === "number") {
      this._payload = {
        ...this._payload,
        'nbf': validateInput('setNotBefore', _0x430f51)
      };
    } else if (_0x430f51 instanceof Date) {
      this._payload = {
        ...this._payload,
        'nbf': validateInput("setNotBefore", epoch_default(_0x430f51))
      };
    } else {
      this._payload = {
        ...this._payload,
        'nbf': epoch_default(new Date()) + secs_default(_0x430f51)
      };
    }
    return this;
  }
  ["setExpirationTime"](_0x816fbf) {
    if (typeof _0x816fbf === "number") {
      this._payload = {
        ...this._payload,
        'exp': validateInput("setExpirationTime", _0x816fbf)
      };
    } else if (_0x816fbf instanceof Date) {
      this._payload = {
        ...this._payload,
        'exp': validateInput("setExpirationTime", epoch_default(_0x816fbf))
      };
    } else {
      this._payload = {
        ...this._payload,
        'exp': epoch_default(new Date()) + secs_default(_0x816fbf)
      };
    }
    return this;
  }
  ["setIssuedAt"](_0x49d127) {
    if (typeof _0x49d127 === "undefined") {
      this._payload = {
        ...this._payload,
        'iat': epoch_default(new Date())
      };
    } else {
      if (_0x49d127 instanceof Date) {
        this._payload = {
          ...this._payload,
          'iat': validateInput("setIssuedAt", epoch_default(_0x49d127))
        };
      } else if (typeof _0x49d127 === 'string') {
        this._payload = {
          ...this._payload,
          'iat': validateInput("setIssuedAt", epoch_default(new Date()) + secs_default(_0x49d127))
        };
      } else {
        this._payload = {
          ...this._payload,
          'iat': validateInput("setIssuedAt", _0x49d127)
        };
      }
    }
    return this;
  }
};
__defProp(ProduceJWT, "name", {
  'value': "ProduceJWT",
  'configurable': true
});
var SignJWT = class extends ProduceJWT {
  ['setProtectedHeader'](_0x11f913) {
    this._protectedHeader = _0x11f913;
    return this;
  }
  async ["sign"](_0x5a7a52, _0x46e7fc) {
    const _0x5967ea = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
    _0x5967ea.setProtectedHeader(this._protectedHeader);
    if (Array.isArray(this._protectedHeader?.['crit']) && this._protectedHeader.crit.includes('b64') && this._protectedHeader.b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    return _0x5967ea.sign(_0x5a7a52, _0x46e7fc);
  }
};
__defProp(SignJWT, "name", {
  'value': "SignJWT",
  'configurable': true
});
var import_tweetnacl = __toESM(require_nacl_fast());
async function renderLoginPage() {
  const _0x58596d = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>User Login</title>\n    <style>\n        :root {\n            --color: black;\n            --primary-color: #09639f;\n            --header-color: #09639f; \n            --background-color: #fff;\n            --form-background-color: #f9f9f9;\n            --lable-text-color: #333;\n            --h2-color: #3b3b3b;\n            --border-color: #ddd;\n            --input-background-color: white;\n            --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        body {\n            font-family: system-ui;\n            background-color: var(--background-color);\n            position: relative;\n            overflow: hidden;\n        }\n        body.dark-mode {\n            --color: white;\n            --primary-color: #09639F;\n            --header-color: #3498DB; \n            --background-color: #121212;\n            --form-background-color: #121212;\n            --lable-text-color: #DFDFDF;\n            --h2-color: #D5D5D5;\n            --border-color: #353535;\n            --input-background-color: #252525;\n            --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        .container {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 90%;\n        }\n        h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); margin: 0 auto 30px; text-shadow: var(--header-shadow); }        \n        h2 { text-align: center; color: var(--h2-color) }\n        .form-container {\n            background: var(--form-background-color);\n            border: 1px solid var(--border-color);\n            border-radius: 10px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 20px;\n        }\n        .form-control { margin-bottom: 15px; display: flex; align-items: center; }\n        label {\n            display: block;\n            margin-bottom: 5px;\n            padding-right: 20px;\n            font-size: 110%;\n            font-weight: 600;\n            color: var(--lable-text-color);\n        }\n        input[type=\"text\"],\n        input[type=\"password\"] {\n            width: 100%;\n            padding: 10px;\n            border: 1px solid var(--border-color);\n            border-radius: 5px;\n            color: var(--lable-text-color);\n            background-color: var(--input-background-color);\n        }\n        button {\n            display: block;\n            width: 100%;\n            padding: 10px;\n            font-size: 16px;\n            font-weight: 600;\n            border: none;\n            border-radius: 5px;\n            color: white;\n            background-color: var(--primary-color);\n            cursor: pointer;\n            transition: background-color 0.3s ease;\n        }\n        .button:hover,\n        button:focus {\n            background-color: #2980b9;\n            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n            transform: translateY(-2px);\n        }\n        button.button:hover { color: white; }\n        .button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n        @media only screen and (min-width: 768px) {\n            .container { width: 30%; }\n        }\n    </style>\n    </head>\n    <body>\n        <div class=\"container\">\n            <h1>BPB Panel <span style=\"font-size: smaller;\">" + globalThis.panelVersion + "</span> 💦</h1>\n            <div class=\"form-container\">\n                <h2>User Login</h2>\n                <form id=\"loginForm\">\n                    <div class=\"form-control\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" id=\"password\" name=\"password\" required>\n                    </div>\n                    <div id=\"passwordError\" style=\"color: red; margin-bottom: 10px;\"></div>\n                    <button type=\"submit\" class=\"button\">Login</button>\n                </form>\n            </div>\n        </div>\n    <script>\n        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n        document.getElementById('loginForm').addEventListener('submit', async (event) => {\n            event.preventDefault();\n            const password = document.getElementById('password').value;\n\n            try {\n                const response = await fetch('/login', {\n                    method: 'POST',\n                    headers: {\n                        'Content-Type': 'text/plain'\n                    },\n                    body: password\n                });\n            \n                if (!response.ok) {\n                    passwordError.textContent = '⚠️ Wrong Password!';\n                    const errorMessage = await response.text();\n                    console.error('Login failed:', errorMessage);\n                    return;\n                }\n                window.location.href = '/panel';\n            } catch (error) {\n                console.error('Error during login:', error);\n            }\n        });\n    </script>\n    </body>\n    </html>";
  return new Response(_0x58596d, {
    'status': 0xc8,
    'headers': {
      'Content-Type': 'text/html;charset=utf-8',
      'Access-Control-Allow-Origin': globalThis.urlOrigin,
      'Access-Control-Allow-Methods': "GET, POST",
      'Access-Control-Allow-Headers': "Content-Type, Authorization",
      'X-Content-Type-Options': "nosniff",
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': "strict-origin-when-cross-origin",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate, no-transform",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(renderLoginPage, "name", {
  'value': "renderLoginPage",
  'configurable': true
});
async function generateJWTToken(_0x2297d1, _0x40d71c) {
  const _0x404004 = await _0x2297d1.text();
  const _0x3c84ce = await _0x40d71c.bpb.get("pwd");
  if (_0x404004 !== _0x3c84ce) {
    return new Response("Method Not Allowed", {
      'status': 0x195
    });
  }
  let _0x331740 = await _0x40d71c.bpb.get("secretKey");
  if (!_0x331740) {
    _0x331740 = generateSecretKey();
    await _0x40d71c.bpb.put("secretKey", _0x331740);
  }
  const _0x176761 = new TextEncoder().encode(_0x331740);
  const _0x4b9997 = await new SignJWT({
    'userID': globalThis.userID
  }).setProtectedHeader({
    'alg': 'HS256'
  }).setIssuedAt().setExpirationTime("24h").sign(_0x176761);
  return new Response('Success', {
    'status': 0xc8,
    'headers': {
      'Set-Cookie': "jwtToken=" + _0x4b9997 + "; HttpOnly; Secure; Max-Age=" + 604800 + "; Path=/; SameSite=Strict",
      'Content-Type': "text/plain"
    }
  });
}
__defProp(generateJWTToken, "name", {
  'value': "generateJWTToken",
  'configurable': true
});
function generateSecretKey() {
  const _0x2f7bf0 = import_tweetnacl["default"].randomBytes(0x20);
  return Array.from(_0x2f7bf0, _0x2b4e19 => _0x2b4e19.toString(0x10).padStart(0x2, '0')).join('');
}
__defProp(generateSecretKey, "name", {
  'value': "generateSecretKey",
  'configurable': true
});
async function Authenticate(_0x79233b, _0x2aa8ad) {
  try {
    const _0x573257 = await _0x2aa8ad.bpb.get('secretKey');
    const _0x5d80b0 = new TextEncoder().encode(_0x573257);
    const _0x2736e8 = _0x79233b.headers.get("Cookie")?.['match'](/(^|;\s*)jwtToken=([^;]*)/);
    const _0x1425f8 = _0x2736e8 ? _0x2736e8[0x2] : null;
    if (!_0x1425f8) {
      console.log("Unauthorized: Token not available!");
      return false;
    }
    const {
      payload: _0xde31dd
    } = await jwtVerify(_0x1425f8, _0x5d80b0);
    console.log("Successfully authenticated, User ID: " + _0xde31dd.userID);
    return true;
  } catch (_0xe7b09d) {
    console.log(_0xe7b09d);
    return false;
  }
}
__defProp(Authenticate, "name", {
  'value': "Authenticate",
  'configurable': true
});
function logout() {
  return new Response('Success', {
    'status': 0xc8,
    'headers': {
      'Set-Cookie': "jwtToken=; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      'Content-Type': "text/plain"
    }
  });
}
__defProp(logout, "name", {
  'value': 'logout',
  'configurable': true
});
async function resetPassword(_0x3be5f0, _0x3a1831) {
  let _0x122e12 = await Authenticate(_0x3be5f0, _0x3a1831);
  const _0x5d1794 = await _0x3a1831.bpb.get("pwd");
  if (_0x5d1794 && !_0x122e12) {
    return new Response("Unauthorized!", {
      'status': 0x191
    });
  }
  const _0x51471a = await _0x3be5f0.text();
  if (_0x51471a === _0x5d1794) {
    return new Response("Please enter a new Password!", {
      'status': 0x190
    });
  }
  await _0x3a1831.bpb.put("pwd", _0x51471a);
  return new Response("Success", {
    'status': 0xc8,
    'headers': {
      'Set-Cookie': "jwtToken=; Path=/; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      'Content-Type': "text/plain"
    }
  });
}
__defProp(resetPassword, "name", {
  'value': "resetPassword",
  'configurable': true
});
async function login(_0x298c33, _0x4d5b88) {
  const _0x69ab45 = await Authenticate(_0x298c33, _0x4d5b88);
  if (_0x69ab45) {
    return Response.redirect(globalThis.urlOrigin + "/panel", 0x12e);
  }
  if (_0x298c33.method === "POST") {
    return await generateJWTToken(_0x298c33, _0x4d5b88);
  }
  return await renderLoginPage();
}
__defProp(login, "name", {
  'value': "login",
  'configurable': true
});
var import_tweetnacl2 = __toESM(require_nacl_fast());
async function fetchWarpConfigs(_0x2e3352, _0x4898f) {
  let _0x1780cf = [];
  const {
    warpPlusLicense: _0x381042
  } = _0x4898f;
  const _0x2d7696 = [generateKeyPair(), generateKeyPair()];
  const _0x3930bd = {
    'install_id': '',
    'fcm_token': '',
    'tos': new Date().toISOString(),
    'type': "Android",
    'model': 'PC',
    'locale': 'en_US',
    'warp_enabled': true
  };
  const _0x278f79 = __defProp(async _0x45dcbb => {
    const _0x5f56ff = await fetch("https://api.cloudflareclient.com/v0a4005/reg", {
      'method': "POST",
      'headers': {
        'User-Agent': "insomnia/8.6.1",
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        ..._0x3930bd,
        'key': _0x45dcbb.publicKey
      })
    });
    return await _0x5f56ff.json();
  }, "name", {
    'value': "fetchAccount",
    'configurable': true
  });
  const _0x377f16 = __defProp(async (_0x348785, _0x27a37a) => {
    const _0x117c88 = await fetch("https://api.cloudflareclient.com/v0a4005/reg/" + _0x348785.id + "/account", {
      'method': 'PUT',
      'headers': {
        'User-Agent': "insomnia/8.6.1",
        'Content-Type': "application/json",
        'Authorization': "Bearer " + _0x348785.token
      },
      'body': JSON.stringify({
        ..._0x3930bd,
        'key': _0x27a37a.publicKey,
        'license': _0x381042
      })
    });
    return {
      'status': _0x117c88.status,
      'data': await _0x117c88.json()
    };
  }, "name", {
    'value': "updateAccount",
    'configurable': true
  });
  for (const _0x2e9915 of _0x2d7696) {
    const _0x5a7333 = await _0x278f79(_0x2e9915);
    _0x1780cf.push({
      'privateKey': _0x2e9915.privateKey,
      'account': _0x5a7333
    });
    if (_0x381042) {
      const {
        status: _0xb988c7,
        data: _0x22d8c9
      } = await _0x377f16(_0x5a7333, _0x2e9915);
      if (_0xb988c7 !== 0xc8 && !_0x22d8c9.success) {
        return {
          'error': _0x22d8c9.errors[0x0]?.['message'],
          'configs': null
        };
      }
    }
  }
  const _0xad2707 = JSON.stringify(_0x1780cf);
  await _0x2e3352.bpb.put('warpConfigs', _0xad2707);
  return {
    'error': null,
    'configs': _0xad2707
  };
}
__defProp(fetchWarpConfigs, "name", {
  'value': 'fetchWarpConfigs',
  'configurable': true
});
var generateKeyPair = __defProp(() => {
  const _0x291f2d = __defProp(_0x22dbd9 => btoa(String.fromCharCode.apply(null, _0x22dbd9)), "name", {
    'value': "base64Encode",
    'configurable': true
  });
  let _0x5cad2e = import_tweetnacl2["default"].randomBytes(0x20);
  _0x5cad2e[0x0] &= 0xf8;
  _0x5cad2e[0x1f] &= 0x7f;
  _0x5cad2e[0x1f] |= 0x40;
  let _0x3072cb = import_tweetnacl2['default'].scalarMult.base(_0x5cad2e);
  const _0x2f5067 = _0x291f2d(_0x3072cb);
  const _0x3b9ed2 = _0x291f2d(_0x5cad2e);
  return {
    'publicKey': _0x2f5067,
    'privateKey': _0x3b9ed2
  };
}, "name", {
  'value': "generateKeyPair",
  'configurable': true
});
async function getDataset(_0x4e8803, _0x20de95) {
  let _0x1b0914;
  let _0x37bba1;
  try {
    _0x1b0914 = await _0x20de95.bpb.get("proxySettings", {
      'type': "json"
    });
    _0x37bba1 = await _0x20de95.bpb.get("warpConfigs", {
      'type': "json"
    });
  } catch (_0x1e0287) {
    console.log(_0x1e0287);
    throw new Error("An error occurred while getting KV - " + _0x1e0287);
  }
  if (!_0x1b0914) {
    _0x1b0914 = await updateDataset(_0x4e8803, _0x20de95);
    const {
      error: _0x32a813,
      configs: _0x2c0328
    } = await fetchWarpConfigs(_0x20de95, _0x1b0914);
    if (_0x32a813) {
      throw new Error("An error occurred while getting Warp configs - " + _0x32a813);
    }
    _0x37bba1 = _0x2c0328;
  }
  if (globalThis.panelVersion !== _0x1b0914.panelVersion) {
    _0x1b0914 = await updateDataset(_0x4e8803, _0x20de95);
  }
  return {
    'proxySettings': _0x1b0914,
    'warpConfigs': _0x37bba1
  };
}
__defProp(getDataset, "name", {
  'value': "getDataset",
  'configurable': true
});
async function updateDataset(_0x194847, _0x55ef2d) {
  let _0x377a02 = _0x194847.method === "POST" ? await _0x194847.formData() : null;
  const _0x5852c6 = _0x377a02?.["get"]("resetSettings") === "true";
  let _0x510864;
  if (!_0x5852c6) {
    try {
      _0x510864 = await _0x55ef2d.bpb.get('proxySettings', {
        'type': 'json'
      });
    } catch (_0x4798c1) {
      console.log(_0x4798c1);
      throw new Error("An error occurred while getting current KV settings - " + _0x4798c1);
    }
  } else {
    await _0x55ef2d.bpb["delete"]('warpConfigs');
    _0x377a02 = null;
  }
  const _0x3b1111 = __defProp(_0x2fe646 => {
    const _0x2cd864 = _0x377a02?.["get"](_0x2fe646);
    if (_0x2cd864 === undefined) {
      return null;
    }
    if (_0x2cd864 === 'true') {
      return true;
    }
    if (_0x2cd864 === 'false') {
      return false;
    }
    return _0x2cd864;
  }, "name", {
    'value': "validateField",
    'configurable': true
  });
  const _0x29edc0 = _0x3b1111('remoteDNS') ?? _0x510864?.["remoteDNS"] ?? "https://8.8.8.8/dns-query";
  const _0x277b24 = _0x3b1111("enableIPv6") ?? _0x510864?.['enableIPv6'] ?? true;
  const _0x1503e9 = new URL(_0x29edc0);
  const _0x259e7d = _0x1503e9.hostname;
  const _0x308f10 = isDomain(_0x259e7d);
  let _0x404198 = {};
  if (_0x308f10) {
    try {
      const _0x16ca3d = await resolveDNS(_0x259e7d);
      _0x404198 = {
        'server': _0x259e7d,
        'staticIPs': _0x277b24 ? [..._0x16ca3d.ipv4, ..._0x16ca3d.ipv6] : _0x16ca3d.ipv4
      };
    } catch (_0x4ed728) {
      console.log(_0x4ed728);
      throw new Error("An error occurred while resolving remote DNS server, please try agian! - " + _0x4ed728);
    }
  }
  const _0x2cdbef = {
    'remoteDNS': _0x29edc0,
    'resolvedRemoteDNS': _0x404198,
    'localDNS': _0x3b1111("localDNS") ?? _0x510864?.['localDNS'] ?? "8.8.8.8",
    'vlessTrojanFakeDNS': _0x3b1111("vlessTrojanFakeDNS") ?? _0x510864?.['vlessTrojanFakeDNS'] ?? false,
    'proxyIP': _0x3b1111("proxyIP")?.["replaceAll"](" ", '') ?? _0x510864?.["proxyIP"] ?? '',
    'outProxy': _0x3b1111("outProxy") ?? _0x510864?.['outProxy'] ?? '',
    'outProxyParams': extractChainProxyParams(_0x3b1111("outProxy")) ?? _0x510864?.["outProxyParams"] ?? {},
    'cleanIPs': _0x3b1111("cleanIPs")?.["replaceAll"](" ", '') ?? _0x510864?.["cleanIPs"] ?? '',
    'enableIPv6': _0x277b24,
    'customCdnAddrs': _0x3b1111("customCdnAddrs")?.["replaceAll"](" ", '') ?? _0x510864?.["customCdnAddrs"] ?? '',
    'customCdnHost': _0x3b1111("customCdnHost")?.["trim"]() ?? _0x510864?.['customCdnHost'] ?? '',
    'customCdnSni': _0x3b1111('customCdnSni')?.["trim"]() ?? _0x510864?.["customCdnSni"] ?? '',
    'bestVLESSTrojanInterval': _0x3b1111("bestVLESSTrojanInterval") ?? _0x510864?.["bestVLESSTrojanInterval"] ?? '30',
    'vlessConfigs': _0x3b1111("vlessConfigs") ?? _0x510864?.['vlessConfigs'] ?? true,
    'trojanConfigs': _0x3b1111("trojanConfigs") ?? _0x510864?.['trojanConfigs'] ?? false,
    'ports': _0x3b1111("ports")?.["split"](',') ?? _0x510864?.["ports"] ?? ["443"],
    'lengthMin': _0x3b1111("fragmentLengthMin") ?? _0x510864?.["lengthMin"] ?? "100",
    'lengthMax': _0x3b1111('fragmentLengthMax') ?? _0x510864?.["lengthMax"] ?? '200',
    'intervalMin': _0x3b1111("fragmentIntervalMin") ?? _0x510864?.["intervalMin"] ?? '1',
    'intervalMax': _0x3b1111('fragmentIntervalMax') ?? _0x510864?.["intervalMax"] ?? '1',
    'fragmentPackets': _0x3b1111("fragmentPackets") ?? _0x510864?.["fragmentPackets"] ?? "tlshello",
    'bypassLAN': _0x3b1111("bypass-lan") ?? _0x510864?.["bypassLAN"] ?? false,
    'bypassIran': _0x3b1111("bypass-iran") ?? _0x510864?.["bypassIran"] ?? false,
    'bypassChina': _0x3b1111("bypass-china") ?? _0x510864?.["bypassChina"] ?? false,
    'bypassRussia': _0x3b1111("bypass-russia") ?? _0x510864?.["bypassRussia"] ?? false,
    'blockAds': _0x3b1111("block-ads") ?? _0x510864?.["blockAds"] ?? false,
    'blockPorn': _0x3b1111("block-porn") ?? _0x510864?.["blockPorn"] ?? false,
    'blockUDP443': _0x3b1111("block-udp-443") ?? _0x510864?.["blockUDP443"] ?? false,
    'customBypassRules': _0x3b1111("customBypassRules")?.["replaceAll"](" ", '') ?? _0x510864?.["customBypassRules"] ?? '',
    'customBlockRules': _0x3b1111('customBlockRules')?.["replaceAll"](" ", '') ?? _0x510864?.["customBlockRules"] ?? '',
    'warpEndpoints': _0x3b1111('warpEndpoints')?.['replaceAll'](" ", '') ?? _0x510864?.['warpEndpoints'] ?? "engage.cloudflareclient.com:2408",
    'warpFakeDNS': _0x3b1111('warpFakeDNS') ?? _0x510864?.["warpFakeDNS"] ?? false,
    'warpEnableIPv6': _0x3b1111("warpEnableIPv6") ?? _0x510864?.['warpEnableIPv6'] ?? true,
    'warpPlusLicense': _0x3b1111("warpPlusLicense") ?? _0x510864?.["warpPlusLicense"] ?? '',
    'bestWarpInterval': _0x3b1111("bestWarpInterval") ?? _0x510864?.["bestWarpInterval"] ?? '30',
    'hiddifyNoiseMode': _0x3b1111('hiddifyNoiseMode') ?? _0x510864?.["hiddifyNoiseMode"] ?? 'm4',
    'nikaNGNoiseMode': _0x3b1111("nikaNGNoiseMode") ?? _0x510864?.['nikaNGNoiseMode'] ?? 'quic',
    'noiseCountMin': _0x3b1111("noiseCountMin") ?? _0x510864?.["noiseCountMin"] ?? '10',
    'noiseCountMax': _0x3b1111("noiseCountMax") ?? _0x510864?.["noiseCountMax"] ?? '15',
    'noiseSizeMin': _0x3b1111("noiseSizeMin") ?? _0x510864?.["noiseSizeMin"] ?? '5',
    'noiseSizeMax': _0x3b1111("noiseSizeMax") ?? _0x510864?.["noiseSizeMax"] ?? '10',
    'noiseDelayMin': _0x3b1111("noiseDelayMin") ?? _0x510864?.["noiseDelayMin"] ?? '1',
    'noiseDelayMax': _0x3b1111("noiseDelayMax") ?? _0x510864?.["noiseDelayMax"] ?? '1',
    'panelVersion': globalThis.panelVersion
  };
  try {
    await _0x55ef2d.bpb.put("proxySettings", JSON.stringify(_0x2cdbef));
  } catch (_0x2586d1) {
    console.log(_0x2586d1);
    throw new Error("An error occurred while updating KV - " + _0x2586d1);
  }
  return _0x2cdbef;
}
__defProp(updateDataset, "name", {
  'value': 'updateDataset',
  'configurable': true
});
function extractChainProxyParams(_0x331bca) {
  let _0x2d0dfb = {};
  if (!_0x331bca) {
    return {};
  }
  const _0x3fd187 = new URL(_0x331bca);
  const _0x11d527 = _0x3fd187.protocol.slice(0x0, -0x1);
  if (_0x11d527 === "vless") {
    const _0x43496e = new URLSearchParams(_0x3fd187.search);
    _0x2d0dfb = {
      'protocol': _0x11d527,
      'uuid': _0x3fd187.username,
      'server': _0x3fd187.hostname,
      'port': _0x3fd187.port
    };
    _0x43496e.forEach((_0x1168bc, _0x553288) => {
      _0x2d0dfb[_0x553288] = _0x1168bc;
    });
  } else {
    _0x2d0dfb = {
      'protocol': _0x11d527,
      'user': _0x3fd187.username,
      'pass': _0x3fd187.password,
      'server': _0x3fd187.host,
      'port': _0x3fd187.port
    };
  }
  return JSON.stringify(_0x2d0dfb);
}
__defProp(extractChainProxyParams, "name", {
  'value': "extractChainProxyParams",
  'configurable': true
});
async function updateWarpConfigs(_0x215b01, _0x35548a) {
  const _0x46c974 = await Authenticate(_0x215b01, _0x35548a);
  if (!_0x46c974) {
    return new Response('Unauthorized', {
      'status': 0x191
    });
  }
  if (_0x215b01.method === 'POST') {
    try {
      const {
        proxySettings: _0x571198
      } = await getDataset(_0x215b01, _0x35548a);
      const {
        error: _0x4b77df
      } = await fetchWarpConfigs(_0x35548a, _0x571198);
      if (_0x4b77df) {
        return new Response(_0x4b77df, {
          'status': 0x190
        });
      }
      return new Response("Warp configs updated successfully", {
        'status': 0xc8
      });
    } catch (_0x58d9d9) {
      console.log(_0x58d9d9);
      return new Response("An error occurred while updating Warp configs! - " + _0x58d9d9, {
        'status': 0x1f4
      });
    }
  } else {
    return new Response("Unsupported request", {
      'status': 0x195
    });
  }
}
__defProp(updateWarpConfigs, "name", {
  'value': "updateWarpConfigs",
  'configurable': true
});
async function renderHomePage(_0x353a16, _0x5eeb1b) {
  const {
    remoteDNS: _0xb00528,
    localDNS: _0x2889a8,
    vlessTrojanFakeDNS: _0x528e0e,
    proxyIP: _0x5708be,
    outProxy: _0x2a5409,
    cleanIPs: _0x143f08,
    enableIPv6: _0x1b9397,
    customCdnAddrs: _0xcd9916,
    customCdnHost: _0x402541,
    customCdnSni: _0xd865cc,
    bestVLESSTrojanInterval: _0x393e90,
    vlessConfigs: _0x315082,
    trojanConfigs: _0xf8acb1,
    ports: _0xac77a4,
    lengthMin: _0x809ae0,
    lengthMax: _0x5d9b74,
    intervalMin: _0x371a0d,
    intervalMax: _0x4dcfff,
    fragmentPackets: _0x2671d3,
    warpEndpoints: _0x51842c,
    warpFakeDNS: _0x3a2db2,
    warpEnableIPv6: _0x4d8b78,
    warpPlusLicense: _0x104a93,
    bestWarpInterval: _0x5770a3,
    hiddifyNoiseMode: _0x4c6da6,
    nikaNGNoiseMode: _0x50b428,
    noiseCountMin: _0x20e668,
    noiseCountMax: _0x28cbf8,
    noiseSizeMin: _0x5ef276,
    noiseSizeMax: _0x417feb,
    noiseDelayMin: _0xcbe2e3,
    noiseDelayMax: _0x2fc69a,
    bypassLAN: _0x1259a2,
    bypassIran: _0x3b9123,
    bypassChina: _0x27066e,
    bypassRussia: _0x254e34,
    blockAds: _0x11ec8e,
    blockPorn: _0x259275,
    blockUDP443: _0x3f00ab,
    customBypassRules: _0x23b43f,
    customBlockRules: _0x178187
  } = _0x353a16;
  const _0x1cc25a = !!_0x104a93;
  const _0x3a9fd5 = (_0x315082 ? 0x1 : 0x0) + (_0xf8acb1 ? 0x1 : 0x0);
  let _0xbb4896 = '';
  let _0x3c84fd = '';
  const _0x483478 = [...(globalThis.hostName.includes("workers.dev") ? globalThis.defaultHttpPorts : []), ...globalThis.defaultHttpsPorts];
  _0x483478.forEach(_0x19a92a => {
    const _0x8a967a = "port-" + _0x19a92a;
    const _0x264889 = _0xac77a4.includes(_0x19a92a) ? "checked" : '';
    const _0x3d12f4 = "\n            <div class=\"routing\" style=\"grid-template-columns: 1fr 2fr; margin-right: 10px;\">\n                <input type=\"checkbox\" id=" + _0x8a967a + " name=" + _0x19a92a + " onchange=\"handlePortChange(event)\" value=\"true\" " + _0x264889 + ">\n                <label style=\"margin-bottom: 3px;\" for=" + _0x8a967a + '>' + _0x19a92a + "</label>\n            </div>";
    if (globalThis.defaultHttpsPorts.includes(_0x19a92a)) {
      _0x3c84fd += _0x3d12f4;
    } else {
      _0xbb4896 += _0x3d12f4;
    }
  });
  const _0x41d880 = __defProp(_0x231a38 => _0x231a38.map(_0x2da503 => "\n        <div>\n            <span class=\"material-symbols-outlined symbol\">verified</span>\n            <span>" + _0x2da503 + "</span>\n        </div>").join(''), "name", {
    'value': "supportedApps",
    'configurable': true
  });
  const _0x7c588d = __defProp((_0x5a0b0f, _0x165eb1, _0x2dad86, _0x5da5af, _0x56d480) => {
    const _0x35e5d8 = (_0x56d480 ? 'sing-box://import-remote-profile?url=' : '') + "https://" + globalThis.hostName + '/' + _0x5a0b0f + '/' + globalThis.userID + (_0x165eb1 ? '?app=' + _0x165eb1 : '') + '#' + _0x2dad86;
    return "\n            <button onclick=\"openQR('" + _0x35e5d8 + "', '" + _0x5da5af + "')\" style=\"margin-bottom: 8px;\">\n                QR Code&nbsp;<span class=\"material-symbols-outlined\">qr_code</span>\n            </button>";
  }, "name", {
    'value': "subQR",
    'configurable': true
  });
  const _0x4b4092 = __defProp((_0xdf32ae, _0x168ae6, _0x189fcf) => {
    const _0x2b6018 = "https://" + globalThis.hostName + '/' + _0xdf32ae + '/' + globalThis.userID + (_0x168ae6 ? "?app=" + _0x168ae6 : '') + '#' + _0x189fcf;
    return "\n            <button onclick=\"copyToClipboard('" + _0x2b6018 + "')\">\n                Copy Sub<span class=\"material-symbols-outlined\">format_list_bulleted</span>\n            </button>";
  }, "name", {
    'value': "subURL",
    'configurable': true
  });
  const _0x247752 = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta name=\"timestamp\" content=" + Date.now() + ">\n        <title>BPB Panel " + globalThis.panelVersion + "</title>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\" />\n        <title>Collapsible Sections</title>\n        <style>\n            :root {\n                --color: black;\n                --primary-color: #09639f;\n                --secondary-color: #3498db;\n                --header-color: #09639f; \n                --background-color: #fff;\n                --form-background-color: #f9f9f9;\n                --table-active-color: #f2f2f2;\n                --hr-text-color: #3b3b3b;\n                --lable-text-color: #333;\n                --border-color: #ddd;\n                --button-color: #09639f;\n                --input-background-color: white;\n                --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n            }\n            body { font-family: Twemoji Country Flags, system-ui; background-color: var(--background-color); color: var(--color) }\n            body.dark-mode {\n                --color: white;\n                --primary-color: #09639F;\n                --secondary-color: #3498DB;\n                --header-color: #3498DB; \n                --background-color: #121212;\n                --form-background-color: #121212;\n                --table-active-color: #252525;\n                --hr-text-color: #D5D5D5;\n                --lable-text-color: #DFDFDF;\n                --border-color: #353535;\n                --button-color: #3498DB;\n                --input-background-color: #252525;\n                --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n            }\n            .material-symbols-outlined {\n                margin-left: 5px;\n                font-variation-settings:\n                'FILL' 0,\n                'wght' 400,\n                'GRAD' 0,\n                'opsz' 24\n            }\n            details { border-bottom: 1px solid var(--border-color); }\n            summary {\n                font-weight: bold;\n                cursor: pointer;\n                text-align: center;\n                text-wrap: nowrap;\n            }\n            summary::marker { font-size: 1.5rem; color: var(--secondary-color); }\n            summary h2 { display: inline-flex; }\n            h1 { font-size: 2.5em; text-align: center; color: var(--header-color); text-shadow: var(--header-shadow); }\n            h2,h3 { margin: 30px 0; text-align: center; color: var(--hr-text-color); }\n            hr { border: 1px solid var(--border-color); margin: 20px 0; }\n            .footer {\n                display: flex;\n                font-weight: 600;\n                margin: 10px auto 0 auto;\n                justify-content: center;\n                align-items: center;\n            }\n            .footer button {margin: 0 20px; background: #212121; max-width: fit-content;}\n            .footer button:hover, .footer button:focus { background: #3b3b3b;}\n            .form-control a, a.link { text-decoration: none; }\n            .form-control {\n                margin-bottom: 20px;\n                font-family: Arial, sans-serif;\n                display: flex;\n                flex-direction: column;\n            }\n            .form-control button {\n                background-color: var(--form-background-color);\n                font-size: 1.1rem;\n                font-weight: 600;\n                color: var(--button-color);\n                border-color: var(--primary-color);\n                border: 1px solid;\n            }\n            #apply {display: block; margin-top: 20px;}\n            input.button {font-weight: 600; padding: 15px 0; font-size: 1.1rem;}\n            label {\n                display: block;\n                margin-bottom: 5px;\n                font-size: 110%;\n                font-weight: 600;\n                color: var(--lable-text-color);\n            }\n            input[type=\"text\"],\n            input[type=\"number\"],\n            input[type=\"url\"],\n            textarea,\n            select {\n                width: 100%;\n                text-align: center;\n                padding: 10px;\n                border: 1px solid var(--border-color);\n                border-radius: 5px;\n                font-size: 16px;\n                color: var(--lable-text-color);\n                background-color: var(--input-background-color);\n                box-sizing: border-box;\n                transition: border-color 0.3s ease;\n            }\t\n            input[type=\"text\"]:focus,\n            input[type=\"number\"]:focus,\n            input[type=\"url\"]:focus,\n            textarea:focus,\n            select:focus { border-color: var(--secondary-color); outline: none; }\n            .button,\n            table button {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                width: 100%;\n                white-space: nowrap;\n                padding: 10px 15px;\n                font-size: 16px;\n                font-weight: 600;\n                letter-spacing: 1px;\n                border: none;\n                border-radius: 5px;\n                color: white;\n                background-color: var(--primary-color);\n                cursor: pointer;\n                outline: none;\n                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n                transition: all 0.3s ease;\n            }\n            input[type=\"checkbox\"] { \n                background-color: var(--input-background-color);\n                style=\"margin: 0; \n                grid-column: 2;\"\n            }\n            table button { margin: auto; width: auto; }\n            .button.disabled {\n                background-color: #ccc;\n                cursor: not-allowed;\n                box-shadow: none;\n                pointer-events: none;\n            }\n            .button:hover,\n            table button:hover,\n            table button:focus {\n                background-color: #2980b9;\n                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n                transform: translateY(-2px);\n            }\n            .header-container button:hover {\n                transform: scale(1.1);\n            }\n            button.button:hover { color: white; }\n            .button:active,\n            table button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n            .form-container {\n                max-width: 90%;\n                margin: 0 auto;\n                padding: 20px;\n                background: var(--form-background-color);\n                border: 1px solid var(--border-color);\n                border-radius: 10px;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                margin-bottom: 100px;\n            }\n            .table-container { margin-top: 20px; overflow-x: auto; }\n            table { \n                width: 100%;\n                border: 1px solid var(--border-color);\n                border-collapse: separate;\n                border-spacing: 0; \n                border-radius: 10px;\n                margin-bottom: 20px;\n                overflow: hidden;\n            }\n            th, td { padding: 10px; border-bottom: 1px solid var(--border-color); }\n            td div { display: flex; align-items: center; }\n            th { background-color: var(--secondary-color); color: white; font-weight: bold; font-size: 1.1rem; width: 50%;}\n            td:last-child { background-color: var(--table-active-color); }               \n            tr:hover { background-color: var(--table-active-color); }\n            .modal {\n                display: none;\n                position: fixed;\n                z-index: 1;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                overflow: auto;\n                background-color: rgba(0, 0, 0, 0.4);\n            }\n            .modal-content {\n                background-color: var(--form-background-color);\n                margin: auto;\n                padding: 10px 20px 20px;\n                border: 1px solid var(--border-color);\n                border-radius: 10px;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                width: 80%;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n            }\n            .close { color: var(--color); float: right; font-size: 28px; font-weight: bold; }\n            .close:hover,\n            .close:focus { color: black; text-decoration: none; cursor: pointer; }\n            .form-control label {\n                display: block;\n                margin-bottom: 8px;\n                font-size: 110%;\n                font-weight: 600;\n                color: var(--lable-text-color);\n                line-height: 1.3em;\n            }\n            .form-control input[type=\"password\"] {\n                width: 100%;\n                padding: 10px;\n                border: 1px solid var(--border-color);\n                border-radius: 5px;\n                font-size: 16px;\n                color: var(--lable-text-color);\n                background-color: var(--input-background-color);\n                box-sizing: border-box;\n                margin-bottom: 15px;\n                transition: border-color 0.3s ease;\n            }\n            .routing { \n                display: grid;\n                justify-content: flex-start;\n                grid-template-columns: 1fr 1fr 10fr 1fr;\n                margin-bottom: 15px;\n            }\n            .form-control .routing input { grid-column: 2 / 3; }\n            #routing-rules.form-control { display: grid; grid-template-columns: 1fr 1fr; }\n            .routing label {\n                text-align: left;\n                margin: 0 0 0 10px;\n                font-weight: 400;\n                font-size: 100%;\n                text-wrap: nowrap;\n            }\n            .form-control input[type=\"password\"]:focus { border-color: var(--secondary-color); outline: none; }\n            #passwordError { color: red; margin-bottom: 10px; }\n            .symbol { margin-right: 8px; }\n            .modalQR {\n                display: none;\n                position: fixed;\n                z-index: 1;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                overflow: auto;\n                background-color: rgba(0, 0, 0, 0.4);\n            }\n            .floating-button {\n                position: fixed;\n                bottom: 20px;\n                left: 20px;\n                background-color: var(--color);\n                color: white;\n                border: none;\n                border-radius: 50%;\n                width: 60px;\n                height: 60px;\n                font-size: 24px;\n                cursor: pointer;\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n                transition: background-color 0.3s, transform 0.3s;\n            }\n            .floating-button:hover { transform: scale(1.1); }\n            .min-max { display: grid; grid-template-columns: 1fr auto 1fr; align-items: baseline; width: 100%; }\n            .min-max span { text-align: center; white-space: pre; }\n            .input-with-select { width: 100%; }\n            body.dark-mode .floating-button { background-color: var(--color); }\n            body.dark-mode .floating-button:hover { transform: scale(1.1); }\n            #ips th { background-color: var(--hr-text-color); color: var(--background-color); width: unset; }\n            #ips td { background-color: unset; }\n            #ips td:first-child { background-color: var(--table-active-color); }\n            .header-container { display: flex; align-items: center; justify-content: center; }\n            @media only screen and (min-width: 768px) {\n                .form-container { max-width: 70%; }\n                .form-control { \n                    margin-bottom: 15px;\n                    display: grid;\n                    grid-template-columns: 1fr 1fr;\n                    align-items: baseline;\n                    justify-content: flex-end;\n                    font-family: Arial, sans-serif;\n                }\n                #apply { display: block; margin: 20px auto 0 auto; max-width: 50%; }\n                .modal-content { width: 30% }\n                .routing { display: grid; grid-template-columns: 4fr 1fr 3fr 4fr; }\n            }\n        </style>\n    </head>\n    <body>\n        <h1>BPB Panel <span style=\"font-size: smaller;\">" + globalThis.panelVersion + "</span> 💦</h1>\n        <div class=\"form-container\">\n            <form id=\"configForm\">\n                <details open>\n                    <summary><h2>VLESS - TROJAN ⚙️</h2></summary>\n                    <div class=\"form-control\">\n                        <label for=\"remoteDNS\">🌏 Remote DNS</label>\n                        <input type=\"url\" id=\"remoteDNS\" name=\"remoteDNS\" value=\"" + _0xb00528 + "\" required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"localDNS\">🏚️ Local DNS</label>\n                        <input type=\"text\" id=\"localDNS\" name=\"localDNS\" value=\"" + _0x2889a8 + "\"\n                            pattern=\"^(?:\\d{1,3}\\.){3}\\d{1,3}$\"\n                            title=\"Please enter a valid DNS IP Address!\"  required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"vlessTrojanFakeDNS\">🧢 Fake DNS</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"vlessTrojanFakeDNS\" name=\"vlessTrojanFakeDNS\">\n                                <option value=\"true\" " + (_0x528e0e ? 'selected' : '') + ">Enabled</option>\n                                <option value=\"false\" " + (!_0x528e0e ? "selected" : '') + ">Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"proxyIP\">📍 Proxy IPs / Domains</label>\n                        <input type=\"text\" id=\"proxyIP\" name=\"proxyIP\" value=\"" + _0x5708be.replaceAll(',', " , ") + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"outProxy\">✈️ Chain Proxy</label>\n                        <input type=\"text\" id=\"outProxy\" name=\"outProxy\" value=\"" + _0x2a5409 + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"cleanIPs\">✨ Clean IPs / Domains</label>\n                        <input type=\"text\" id=\"cleanIPs\" name=\"cleanIPs\" value=\"" + _0x143f08.replaceAll(',', " , ") + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"scanner\">🔎 Clean IP Scanner</label>\n                        <a href=\"" + atob("aHR0cHM6Ly9naXRodWIuY29tL2JpYS1wYWluLWJhY2hl") + "/Cloudflare-Clean-IP-Scanner/releases/tag/v2.2.5\" name=\"scanner\" target=\"_blank\" style=\"width: 100%;\">\n                            <button type=\"button\" id=\"scanner\" class=\"button\">\n                                Download Scanner\n                                <span class=\"material-symbols-outlined\">open_in_new</span>\n                            </button>\n                        </a>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"enableIPv6\">🔛 IPv6</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"enableIPv6\" name=\"enableIPv6\">\n                                <option value=\"true\" " + (_0x1b9397 ? 'selected' : '') + ">Enabled</option>\n                                <option value=\"false\" " + (!_0x1b9397 ? 'selected' : '') + ">Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"customCdnAddrs\">💀 Custom CDN Addrs</label>\n                        <input type=\"text\" id=\"customCdnAddrs\" name=\"customCdnAddrs\" value=\"" + _0xcd9916.replaceAll(',', " , ") + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"customCdnHost\">💀 Custom CDN Host</label> \n                        <input type=\"text\" id=\"customCdnHost\" name=\"customCdnHost\" value=\"" + _0x402541 + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"customCdnSni\">💀 Custom CDN SNI</label>\n                        <input type=\"text\" id=\"customCdnSni\" name=\"customCdnSni\" value=\"" + _0xd865cc + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"bestVLESSTrojanInterval\">🔄 Best Interval</label>\n                        <input type=\"number\" id=\"bestVLESSTrojanInterval\" name=\"bestVLESSTrojanInterval\" min=\"10\" max=\"90\" value=\"" + _0x393e90 + "\">\n                    </div>\n                    <div class=\"form-control\" style=\"padding-top: 10px;\">\n                        <label for=\"vlessConfigs\">⚙️ Protocols</label>\n                        <div style=\"width: 100%; display: grid; grid-template-columns: 1fr 1fr; align-items: baseline; margin-top: 10px;\">\n                            <div style = \"display: flex; justify-content: center; align-items: center;\">\n                                <input type=\"checkbox\" id=\"vlessConfigs\" name=\"vlessConfigs\" onchange=\"handleProtocolChange(event)\" value=\"true\" " + (_0x315082 ? 'checked' : '') + ">\n                                <label for=\"vlessConfigs\" style=\"margin: 0 5px; font-weight: normal; font-size: unset;\">VLESS</label>\n                            </div>\n                            <div style = \"display: flex; justify-content: center; align-items: center;\">\n                                <input type=\"checkbox\" id=\"trojanConfigs\" name=\"trojanConfigs\" onchange=\"handleProtocolChange(event)\" value=\"true\" " + (_0xf8acb1 ? "checked" : '') + ">\n                                <label for=\"trojanConfigs\" style=\"margin: 0 5px; font-weight: normal; font-size: unset;\">Trojan</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"table-container\">\n                        <table id=\"ports-block\">\n                            <tr>\n                                <th style=\"text-wrap: nowrap; background-color: gray;\">Config type</th>\n                                <th style=\"text-wrap: nowrap; background-color: gray;\">Ports</th>\n                            </tr>\n                            <tr>\n                                <td style=\"text-align: center; font-size: larger;\"><b>TLS</b></td>\n                                <td>\n                                    <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;\">" + _0x3c84fd + "</div>\n                                </td>    \n                            </tr>\n                            " + (!_0xbb4896 ? '' : "<tr>\n                                <td style=\"text-align: center; font-size: larger;\"><b>Non TLS</b></td>\n                                <td>\n                                    <div style=\"display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;\">" + _0xbb4896 + "</div>\n                                </td>    \n                            </tr>") + "        \n                        </table>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>FRAGMENT ⚙️</h2></summary>\t\n                    <div class=\"form-control\">\n                        <label for=\"fragmentLengthMin\">📐 Length</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"fragmentLengthMin\" name=\"fragmentLengthMin\" value=\"" + _0x809ae0 + "\" min=\"10\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"fragmentLengthMax\" name=\"fragmentLengthMax\" value=\"" + _0x5d9b74 + "\" max=\"500\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"fragmentIntervalMin\">🕞 Interval</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"fragmentIntervalMin\" name=\"fragmentIntervalMin\"\n                                value=\"" + _0x371a0d + "\" min=\"1\" max=\"30\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"fragmentIntervalMax\" name=\"fragmentIntervalMax\"\n                                value=\"" + _0x4dcfff + "\" min=\"1\" max=\"30\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"fragmentPackets\">📦 Packets</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"fragmentPackets\" name=\"fragmentPackets\">\n                                <option value=\"tlshello\" " + (_0x2671d3 === "tlshello" ? "selected" : '') + ">tlshello</option>\n                                <option value=\"1-1\" " + (_0x2671d3 === "1-1" ? "selected" : '') + ">1-1</option>\n                                <option value=\"1-2\" " + (_0x2671d3 === "1-2" ? "selected" : '') + ">1-2</option>\n                                <option value=\"1-3\" " + (_0x2671d3 === "1-3" ? "selected" : '') + ">1-3</option>\n                                <option value=\"1-5\" " + (_0x2671d3 === "1-5" ? "selected" : '') + ">1-5</option>\n                            </select>\n                        </div>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>WARP GENERAL ⚙️</h2></summary>\n                    <div class=\"form-control\">\n                        <label for=\"warpEndpoints\">✨ Endpoints</label>\n                        <input type=\"text\" id=\"warpEndpoints\" name=\"warpEndpoints\" value=\"" + _0x51842c.replaceAll(',', " , ") + "\" required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"endpointScanner\" style=\"line-height: 1.5;\">🔎 Scan Endpoint</label>\n                        <button type=\"button\" id=\"endpointScanner\" class=\"button\" style=\"padding: 10px 0;\" onclick=\"copyToClipboard('bash <(curl -fsSL " + atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2JpYS1wYWluLWJhY2hl') + "/warp-script/refs/heads/main/endip/install.sh)', false)\">\n                            Copy Script<span class=\"material-symbols-outlined\">terminal</span>\n                        </button>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"warpFakeDNS\">🧢 Fake DNS</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"warpFakeDNS\" name=\"warpFakeDNS\">\n                                <option value=\"true\" " + (_0x3a2db2 ? "selected" : '') + ">Enabled</option>\n                                <option value=\"false\" " + (!_0x3a2db2 ? 'selected' : '') + ">Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"warpEnableIPv6\">🔛 IPv6</label>\n                        <div class=\"input-with-select\">\n                            <select id=\"warpEnableIPv6\" name=\"warpEnableIPv6\">\n                                <option value=\"true\" " + (_0x4d8b78 ? "selected" : '') + ">Enabled</option>\n                                <option value=\"false\" " + (!_0x4d8b78 ? "selected" : '') + ">Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"warpPlusLicense\">➕ Warp+ License</label>\n                        <input type=\"text\" id=\"warpPlusLicense\" name=\"warpPlusLicense\" value=\"" + _0x104a93 + "\" \n                            pattern=\"^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{8}-[a-zA-Z0-9]{8}$\" \n                            title=\"Please enter a valid Warp Plus license in xxxxxxxx-xxxxxxxx-xxxxxxxx format\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"refreshBtn\">♻️ Warp Configs</label>\n                        <button id=\"refreshBtn\" type=\"button\" class=\"button\" style=\"padding: 10px 0;\" onclick=\"getWarpConfigs()\">\n                            Update<span class=\"material-symbols-outlined\">autorenew</span>\n                        </button>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"bestWarpInterval\">🔄 Best Interval</label>\n                        <input type=\"number\" id=\"bestWarpInterval\" name=\"bestWarpInterval\" min=\"10\" max=\"90\" value=\"" + _0x5770a3 + "\">\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>WARP PRO ⚙️</h2></summary>\n                    <div class=\"form-control\">\n                        <label for=\"hiddifyNoiseMode\">😵‍💫 Hiddify Mode</label>\n                        <input type=\"text\" id=\"hiddifyNoiseMode\" name=\"hiddifyNoiseMode\" \n                            pattern=\"^(m[1-6]|h_[0-9A-Fa-f]{2}|g_([0-9A-Fa-f]{2}_){2}[0-9A-Fa-f]{2})$\" \n                            title=\"Enter 'm1-m6', 'h_HEX', 'g_HEX_HEX_HEX' which HEX can be between 00 to ff\"\n                            value=\"" + _0x4c6da6 + "\" required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"nikaNGNoiseMode\">😵‍💫 NikaNG Mode</label>\n                        <input type=\"text\" id=\"nikaNGNoiseMode\" name=\"nikaNGNoiseMode\" \n                            pattern=\"^(none|quic|random|[0-9A-Fa-f]+)$\" \n                            title=\"Enter 'none', 'quic', 'random', or any HEX string like 'ee0000000108aaaa'\"\n                            value=\"" + _0x50b428 + "\" required>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"noiseCountMin\">🎚️ Noise Count</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"noiseCountMin\" name=\"noiseCountMin\"\n                                value=\"" + _0x20e668 + "\" min=\"1\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"noiseCountMax\" name=\"noiseCountMax\"\n                                value=\"" + _0x28cbf8 + "\" min=\"1\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"noiseSizeMin\">📏 Noise Size</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"noiseSizeMin\" name=\"noiseSizeMin\"\n                                value=\"" + _0x5ef276 + "\" min=\"1\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"noiseSizeMax\" name=\"noiseSizeMax\"\n                                value=\"" + _0x417feb + "\" min=\"1\" required>\n                        </div>\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"noiseDelayMin\">🕞 Noise Delay</label>\n                        <div class=\"min-max\">\n                            <input type=\"number\" id=\"noiseDelayMin\" name=\"noiseDelayMin\"\n                                value=\"" + _0xcbe2e3 + "\" min=\"1\" required>\n                            <span> - </span>\n                            <input type=\"number\" id=\"noiseDelayMax\" name=\"noiseDelayMax\"\n                                value=\"" + _0x2fc69a + "\" min=\"1\" required>\n                        </div>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>ROUTING RULES ⚙️</h2></summary>\n                    <div id=\"routing-rules\" class=\"form-control\" style=\"margin-bottom: 20px;\">\t\t\t\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"bypass-lan\" name=\"bypass-lan\" value=\"true\" " + (_0x1259a2 ? "checked" : '') + ">\n                            <label for=\"bypass-lan\">Bypass LAN</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"block-ads\" name=\"block-ads\" value=\"true\" " + (_0x11ec8e ? 'checked' : '') + ">\n                            <label for=\"block-ads\">Block Ads.</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"bypass-iran\" name=\"bypass-iran\" value=\"true\" " + (_0x3b9123 ? "checked" : '') + ">\n                            <label for=\"bypass-iran\">Bypass Iran</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"block-porn\" name=\"block-porn\" value=\"true\" " + (_0x259275 ? "checked" : '') + ">\n                            <label for=\"block-porn\">Block Porn</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"bypass-china\" name=\"bypass-china\" value=\"true\" " + (_0x27066e ? "checked" : '') + ">\n                            <label for=\"bypass-china\">Bypass China</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"block-udp-443\" name=\"block-udp-443\" value=\"true\" " + (_0x3f00ab ? "checked" : '') + ">\n                            <label for=\"block-udp-443\">Block QUIC</label>\n                        </div>\n                        <div class=\"routing\">\n                            <input type=\"checkbox\" id=\"bypass-russia\" name=\"bypass-russia\" value=\"true\" " + (_0x254e34 ? "checked" : '') + ">\n                            <label for=\"bypass-russia\">Bypass Russia</label>\n                        </div>\n                    </div>\n                    <h3>CUSTOM RULES 🔧</h3>\n                    <div class=\"form-control\">\n                        <label for=\"customBypassRules\">🟩 Bypass IPs / Domains</label>\n                        <input type=\"text\" id=\"customBypassRules\" name=\"customBypassRules\" value=\"" + _0x23b43f.replaceAll(',', " , ") + "\">\n                    </div>\n                    <div class=\"form-control\">\n                        <label for=\"customBlockRules\">🟥 Block IPs / Domains</label>\n                        <input type=\"text\" id=\"customBlockRules\" name=\"customBlockRules\" value=\"" + _0x178187.replaceAll(',', " , ") + "\">\n                    </div>\n                </details>\n                <div id=\"apply\" class=\"form-control\">\n                    <div style=\"grid-column: 2; width: 100%; display: inline-flex;\">\n                        <input type=\"submit\" id=\"applyButton\" style=\"margin-right: 10px;\" class=\"button disabled\" value=\"APPLY SETTINGS 💥\" form=\"configForm\">\n                        <button type=\"button\" id=\"resetSettings\" style=\"background: none; margin: 0; border: none; cursor: pointer;\">\n                            <i class=\"fa fa-refresh fa-2x fa-border\" style=\"border-radius: .2em; border-color: var(--border-color);\" aria-hidden=\"true\"></i>\n                        </button>\n                    </div>\n                </div>\n            </form>\n            <hr>            \n            <h2>🔗 NORMAL SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"normal-configs-table\">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["v2rayNG", "NikaNG", "MahsaNG", "v2rayN", "v2rayN-PRO", "Shadowrocket", "Streisand", "Hiddify", "Nekoray (Xray)"]) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d("sub", '', "BPB-Normal", "Normal Subscription") + "\n                            " + _0x4b4092("sub", '', 'BPB-Normal') + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["husi", 'Nekobox', "Nekoray (sing-Box)", "Karing"]) + "\n                        </td>\n                        <td>\n                            " + _0x4b4092("sub", "singbox", "BPB-Normal") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 FULL NORMAL SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"full-normal-configs-table\">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["v2rayNG", 'NikaNG', 'MahsaNG', 'v2rayN', "v2rayN-PRO", "Streisand"]) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d('sub', "xray", "BPB-Full-Normal", "Full normal Subscription") + "\n                            " + _0x4b4092("sub", "xray", 'BPB-Full-Normal') + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["sing-box", "v2rayN (sing-box)"]) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d("sub", "sfa", "BPB-Full-Normal", "Full normal Subscription", true) + "\n                            " + _0x4b4092("sub", "sfa", 'BPB-Full-Normal') + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["Clash Meta", "Clash Verge", "FlClash", "Stash", "v2rayN (mihomo)"]) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d("sub", "clash", 'BPB-Full-Normal', "Full normal Subscription") + "\n                            " + _0x4b4092("sub", 'clash', "BPB-Full-Normal") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 FRAGMENT SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"frag-sub-table\">\n                    <tr>\n                        <th style=\"text-wrap: nowrap;\">Application</th>\n                        <th style=\"text-wrap: nowrap;\">Subscription</th>\n                    </tr>\n                    <tr>\n                        <td style=\"text-wrap: nowrap;\">\n                            " + _0x41d880(["v2rayNG", "NikaNG", 'MahsaNG', 'v2rayN', "v2rayN-PRO", "Streisand"]) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d("fragsub", '', "BPB-Fragment", "Fragment Subscription") + "\n                            " + _0x4b4092("fragsub", '', "BPB-Fragment") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-wrap: nowrap;\">\n                            " + _0x41d880(['Hiddify']) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d("fragsub", "hiddify", "BPB-Fragment", "Fragment Subscription") + "\n                            " + _0x4b4092("fragsub", 'hiddify', "BPB-Fragment") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 WARP SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"normal-configs-table\">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["v2rayNG", "v2rayN", 'Streisand']) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d('warpsub', "xray", 'BPB-Warp', "Warp Subscription") + "\n                            " + _0x4b4092("warpsub", 'xray', "BPB-Warp") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(['Hiddify', "sing-box", "v2rayN (sing-box)"]) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d("sub", "singbox", 'BPB-Warp', "Warp Subscription", true) + "\n                            " + _0x4b4092("warpsub", 'singbox', "BPB-Warp") + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["Clash Meta", "Clash Verge", "FlClash", 'Stash', "v2rayN (mihomo)"]) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d('warpsub', "clash", 'BPB-Warp', "Warp Subscription") + "\n                            " + _0x4b4092("warpsub", "clash", "BPB-Warp") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 WARP PRO SUB</h2>\n            <div class=\"table-container\">\n                <table id=\"warp-pro-configs-table\">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["NikaNG", "MahsaNG", 'v2rayN-PRO']) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d("warpsub", "nikang", "BPB-Warp-Pro", "Warp Pro Subscription") + "\n                            " + _0x4b4092("warpsub", "nikang", 'BPB-Warp-Pro') + "\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            " + _0x41d880(["Hiddify"]) + "\n                        </td>\n                        <td>\n                            " + _0x7c588d("warpsub", "hiddify", "BPB-Warp-Pro", "Warp Pro Subscription", true) + "\n                            " + _0x4b4092("warpsub", "hiddify", "BPB-Warp-Pro") + "\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div id=\"myModal\" class=\"modal\">\n                <div class=\"modal-content\">\n                    <span class=\"close\">&times;</span>\n                    <form id=\"passwordChangeForm\">\n                        <h2>Change Password</h2>\n                        <div class=\"form-control\">\n                            <label for=\"newPassword\">New Password</label>\n                            <input type=\"password\" id=\"newPassword\" name=\"newPassword\" required>\n                            </div>\n                        <div class=\"form-control\">\n                            <label for=\"confirmPassword\">Confirm Password</label>\n                            <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" required>\n                        </div>\n                        <div id=\"passwordError\" style=\"color: red; margin-bottom: 10px;\"></div>\n                        <button id=\"changePasswordBtn\" type=\"submit\" class=\"button\">Change Password</button>\n                    </form>\n                </div>\n            </div>\n            <div id=\"myQRModal\" class=\"modalQR\">\n                <div class=\"modal-content\" style=\"width: auto; text-align: center;\">\n                    <div style=\"display: flex; flex-direction: column; align-items: center; margin-bottom: 10px;\">\n                        <span id=\"closeQRModal\" class=\"close\" style=\"align-self: flex-end;\">&times;</span>\n                        <span id=\"qrcodeTitle\" style=\"align-self: center; font-weight: bold;\"></span>\n                    </div>\n                    <div id=\"qrcode-container\"></div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"header-container\">\n                <h2 style=\"margin: 0 5px;\">💡 MY IP</h2>\n                <button type=\"button\" id=\"refresh-geo-location\" onclick=\"fetchIPInfo()\" style=\"background: none; margin: 0; border: none; cursor: pointer;\">\n                    <i class=\"fa fa-refresh fa-2x\" style=\"color: var(--button-color);\" aria-hidden=\"true\"></i>\n                </button>       \n            </div>\n            <div class=\"table-container\">\n                <table id=\"ips\" style=\"text-align: center; margin-bottom: 15px; text-wrap-mode: nowrap;\">\n                    <tr>\n                        <th>Target Address</th>\n                        <th>IP</th>\n                        <th>Country</th>\n                        <th>City</th>\n                        <th>ISP</th>\n                    </tr>\n                    <tr>\n                        <td>Cloudflare CDN</td>\n                        <td id=\"cf-ip\"></td>\n                        <td><b id=\"cf-country\"></b></td>\n                        <td><b id=\"cf-city\"></b></td>\n                        <td><b id=\"cf-isp\"></b></td>\n                    </tr>\n                    <tr>\n                        <td>Others</td>\n                        <td id=\"ip\"></td>\n                        <td><b id=\"country\"></b></td>\n                        <td><b id=\"city\"></b></td>\n                        <td><b id=\"isp\"></b></td>\n                    </tr>\n                </table>\n            </div>\n            <hr>\n            <div class=\"footer\">\n                <i class=\"fa fa-github\" style=\"font-size:36px; margin-right: 10px;\"></i>\n                <a class=\"link\" href=\"" + atob("aHR0cHM6Ly9naXRodWIuY29tL2JpYS1wYWluLWJhY2hlL0JQQi1Xb3JrZXItUGFuZWw=") + "\" style=\"color: var(--color); text-decoration: underline;\" target=\"_blank\">Github</a>\n                <button id=\"openModalBtn\" class=\"button\">Change Password</button>\n                <button type=\"button\" id=\"logout\" style=\"background: none; color: var(--color); margin: 0; border: none; cursor: pointer;\">\n                    <i class=\"fa fa-power-off fa-2x\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n        </div>\n        <button id=\"darkModeToggle\" class=\"floating-button\">\n            <i id=\"modeIcon\" class=\"fa fa-2x fa-adjust\" style=\"color: var(--background-color);\" aria-hidden=\"true\"></i>\n        </button>\n    <script type=\"module\" defer>\n        import { polyfillCountryFlagEmojis } from \"https://cdn.skypack.dev/country-flag-emoji-polyfill\";\n        polyfillCountryFlagEmojis();\n    </script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js\"></script>\n    <script>\n        const defaultHttpsPorts = ['443', '8443', '2053', '2083', '2087', '2096'];\n        let activePortsNo = " + _0xac77a4.length + ";\n        let activeHttpsPortsNo = " + _0xac77a4.filter(_0x5d33e5 => globalThis.defaultHttpsPorts.includes(_0x5d33e5)).length + ";\n        let activeProtocols = " + _0x3a9fd5 + ";\n        const warpPlusLicense = '" + _0x104a93 + "';\n        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n\n        document.addEventListener('DOMContentLoaded', async () => {\n            const configForm = document.getElementById('configForm');            \n            const changePass = document.getElementById('openModalBtn');\n            const closeBtn = document.querySelector(\".close\");\n            const passwordChangeForm = document.getElementById('passwordChangeForm');                    \n            const initialFormData = new FormData(configForm);\n            const modal = document.getElementById('myModal');\n            const closeQR = document.getElementById('closeQRModal');\n            const resetSettings = document.getElementById('resetSettings');\n            let modalQR = document.getElementById('myQRModal');\n            let qrcodeContainer = document.getElementById('qrcode-container');\n            let forcedPassChange = false;\n            const darkModeToggle = document.getElementById('darkModeToggle');\n                    \n            const hasFormDataChanged = () => {\n                const currentFormData = new FormData(configForm);\n                const currentFormDataEntries = [...currentFormData.entries()];\n\n                const nonCheckboxFieldsChanged = currentFormDataEntries.some(\n                    ([key, value]) => !initialFormData.has(key) || initialFormData.get(key) !== value\n                );\n\n                const checkboxFieldsChanged = Array.from(configForm.elements)\n                    .filter((element) => element.type === 'checkbox')\n                    .some((checkbox) => {\n                    const initialValue = initialFormData.has(checkbox.name)\n                        ? initialFormData.get(checkbox.name)\n                        : false;\n                    const currentValue = currentFormDataEntries.find(([key]) => key === checkbox.name)?.[1] || false;\n                    return initialValue !== currentValue;\n                });\n\n                return nonCheckboxFieldsChanged || checkboxFieldsChanged;\n            };\n            \n            const enableApplyButton = () => {\n                const isChanged = hasFormDataChanged();\n                applyButton.disabled = !isChanged;\n                applyButton.classList.toggle('disabled', !isChanged);\n            };\n                        \n            passwordChangeForm.addEventListener('submit', event => resetPassword(event));\n            document.getElementById('logout').addEventListener('click', event => logout(event));\n            configForm.addEventListener('submit', (event) => applySettings(event, configForm));\n            configForm.addEventListener('input', enableApplyButton);\n            configForm.addEventListener('change', enableApplyButton);\n            changePass.addEventListener('click', () => {\n                forcedPassChange ? closeBtn.style.display = 'none' : closeBtn.style.display = '';\n                modal.style.display = \"block\";\n                document.body.style.overflow = \"hidden\";\n                forcedPassChange = false;\n            });        \n            closeBtn.addEventListener('click', () => {\n                modal.style.display = \"none\";\n                document.body.style.overflow = \"\";\n            });\n            closeQR.addEventListener('click', () => {\n                modalQR.style.display = \"none\";\n                qrcodeContainer.lastElementChild.remove();\n            });\n            resetSettings.addEventListener('click', async () => {\n                const confirmReset = confirm('⚠️ This will reset all panel settings.\\nAre you sure?');\n                if(!confirmReset) return;\n                const formData = new FormData();\n                formData.append('resetSettings', 'true');\n                try {\n                    document.body.style.cursor = 'wait';\n                    const refreshButtonVal = refreshBtn.innerHTML;\n                    refreshBtn.innerHTML = '⌛ Loading...';\n\n                    const response = await fetch('/panel', {\n                        method: 'POST',\n                        body: formData,\n                        credentials: 'include'\n                    });\n\n                    document.body.style.cursor = 'default';\n                    refreshBtn.innerHTML = refreshButtonVal;\n                    if (!response.ok) {\n                        const errorMessage = await response.text();\n                        console.error(errorMessage, response.status);\n                        alert('⚠️ An error occured, Please try again!\\n⛔ ' + errorMessage);\n                        return;\n                    }       \n                    alert('✅ Panel settings reset to default successfully! 😎');\n                    window.location.reload(true);\n                } catch (error) {\n                    console.error('Error:', error);\n                }\n            });\n            window.onclick = (event) => {\n                if (event.target == modalQR) {\n                    modalQR.style.display = \"none\";\n                    qrcodeContainer.lastElementChild.remove();\n                }\n            }\n            darkModeToggle.addEventListener('click', () => {\n                const isDarkMode = document.body.classList.toggle('dark-mode');\n                localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');\n            });\n\n            const isPassSet = " + _0x5eeb1b + ";\n            if (!isPassSet) {\n                forcedPassChange = true;\n                changePass.click();\n            }\n\n            await fetchIPInfo();\n        });\n\n        const fetchIPInfo = async () => {\n            const updateUI = (ip = '-', country = '-', countryCode = '-', city = '-', isp = '-', cfIP) => {\n                const flag = countryCode !== '-' ? String.fromCodePoint(...[...countryCode].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : '';\n                document.getElementById(cfIP ? 'cf-ip' : 'ip').textContent = ip;\n                document.getElementById(cfIP ? 'cf-country' : 'country').textContent = country + ' ' + flag;\n                document.getElementById(cfIP ? 'cf-city' : 'city').textContent = city;\n                document.getElementById(cfIP ? 'cf-isp' : 'isp').textContent = isp;\n            };\n\n            const refreshIcon = document.getElementById(\"refresh-geo-location\").querySelector('i');\n            refreshIcon.classList.add('fa-spin');\n            document.body.style.cursor = 'wait';\n\n            try {\n                const ipResponse = await fetch('https://ipwho.is/' + '?nocache=' + Date.now(), { cache: \"no-store\" });\n                const ipResponseObj = await ipResponse.json();\n                const geoResponse = await fetch('/my-ip', { \n                    method: 'POST',\n                    body: ipResponseObj.ip\n                });\n                const ipGeoLocation = await geoResponse.json();\n                updateUI(ipResponseObj.ip, ipGeoLocation.country, ipGeoLocation.countryCode, ipGeoLocation.city, ipGeoLocation.isp);\n                const cfIPresponse = await fetch('https://ipv4.icanhazip.com/?nocache=' + Date.now(), { cache: \"no-store\" });\n                const cfIP = await cfIPresponse.text();\n                const cfGeoResponse = await fetch('/my-ip', { \n                    method: 'POST',\n                    body: cfIP.trim()\n                });\n                const cfIPGeoLocation = await cfGeoResponse.json();\n                updateUI(cfIP, cfIPGeoLocation.country, cfIPGeoLocation.countryCode, cfIPGeoLocation.city, cfIPGeoLocation.isp, true);\n                refreshIcon.classList.remove('fa-spin');\n                document.body.style.cursor = 'default';\n            } catch (error) {\n                console.error('Error fetching IP address:', error);\n            }\n        }\n\n        const getWarpConfigs = async () => {\n            const license = document.getElementById('warpPlusLicense').value;\n            if (license !== warpPlusLicense) {\n                alert('⚠️ First APPLY SETTINGS and then update Warp configs!');\n                return false;\n            }\n            const confirmReset = confirm('⚠️ Are you sure?');\n            if(!confirmReset) return;\n            const refreshBtn = document.getElementById('refreshBtn');\n\n            try {\n                document.body.style.cursor = 'wait';\n                const refreshButtonVal = refreshBtn.innerHTML;\n                refreshBtn.innerHTML = '⌛ Loading...';\n\n                const response = await fetch('/update-warp', {\n                    method: 'POST',\n                    credentials: 'include'\n                });\n\n                document.body.style.cursor = 'default';\n                refreshBtn.innerHTML = refreshButtonVal;\n                if (!response.ok) {\n                    const errorMessage = await response.text();\n                    console.error(errorMessage, response.status);\n                    alert('⚠️ An error occured, Please try again!\\n⛔ ' + errorMessage);\n                    return;\n                }          \n                " + (_0x1cc25a ? "alert('✅ Warp configs upgraded to PLUS successfully! 😎');" : "alert('✅ Warp configs updated successfully! 😎');") + "\n            } catch (error) {\n                console.error('Error:', error);\n            } \n        }\n\n        const handlePortChange = (event) => {\n            \n            if(event.target.checked) { \n                activePortsNo++ \n                defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo++;\n            } else {\n                activePortsNo--;\n                defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo--;\n            }\n\n            if (activePortsNo === 0) {\n                event.preventDefault();\n                event.target.checked = !event.target.checked;\n                alert(\"⛔ At least one port should be selected! 🫤\");\n                activePortsNo = 1;\n                defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo++;\n                return false;\n            }\n                \n            if (activeHttpsPortsNo === 0) {\n                event.preventDefault();\n                event.target.checked = !event.target.checked;\n                alert(\"⛔ At least one TLS(https) port should be selected! 🫤\");\n                activeHttpsPortsNo = 1;\n                return false;\n            }\n        }\n        \n        const handleProtocolChange = (event) => {\n            \n            if(event.target.checked) { \n                activeProtocols++ \n            } else {\n                activeProtocols--;\n            }\n\n            if (activeProtocols === 0) {\n                event.preventDefault();\n                event.target.checked = !event.target.checked;\n                alert(\"⛔ At least one Protocol should be selected! 🫤\");\n                activeProtocols = 1;\n                return false;\n            }\n        }\n\n        const openQR = (url, title) => {\n            let qrcodeContainer = document.getElementById(\"qrcode-container\");\n            let qrcodeTitle = document.getElementById(\"qrcodeTitle\");\n            const modalQR = document.getElementById(\"myQRModal\");\n            qrcodeTitle.textContent = title;\n            modalQR.style.display = \"block\";\n            let qrcodeDiv = document.createElement(\"div\");\n            qrcodeDiv.className = \"qrcode\";\n            qrcodeDiv.style.padding = \"2px\";\n            qrcodeDiv.style.backgroundColor = \"#ffffff\";\n            new QRCode(qrcodeDiv, {\n                text: url,\n                width: 256,\n                height: 256,\n                colorDark: \"#000000\",\n                colorLight: \"#ffffff\",\n                correctLevel: QRCode.CorrectLevel.H\n            });\n            qrcodeContainer.appendChild(qrcodeDiv);\n        }\n\n        const copyToClipboard = (text) => {\n            const textarea = document.createElement('textarea');\n            textarea.value = text;\n            document.body.appendChild(textarea);\n            textarea.select();\n            document.execCommand('copy');\n            document.body.removeChild(textarea);\n            alert('📋 Copied to clipboard:\\n\\n' +  text);\n        }\n\n        const applySettings = async (event, configForm) => {\n            event.preventDefault();\n            event.stopPropagation();\n            const applyButton = document.getElementById('applyButton');\n            const getValue = (id) => parseInt(document.getElementById(id).value, 10);              \n            const lengthMin = getValue('fragmentLengthMin');\n            const lengthMax = getValue('fragmentLengthMax');\n            const intervalMin = getValue('fragmentIntervalMin');\n            const intervalMax = getValue('fragmentIntervalMax');\n            const customCdnAddrs = document.getElementById('customCdnAddrs').value?.split(',').filter(addr => addr !== '');\n            const customCdnHost = document.getElementById('customCdnHost').value;\n            const customCdnSni = document.getElementById('customCdnSni').value;\n            const isCustomCdn = customCdnAddrs.length || customCdnHost !== '' || customCdnSni !== '';\n            const warpEndpoints = document.getElementById('warpEndpoints').value?.replaceAll(' ', '').split(',');\n            const noiseCountMin = getValue('noiseCountMin');\n            const noiseCountMax = getValue('noiseCountMax');\n            const noiseSizeMin = getValue('noiseSizeMin');\n            const noiseSizeMax = getValue('noiseSizeMax');\n            const noiseDelayMin = getValue('noiseDelayMin');\n            const noiseDelayMax = getValue('noiseDelayMax');\n            const cleanIPs = document.getElementById('cleanIPs').value?.split(',');\n            const proxyIPs = document.getElementById('proxyIP').value?.split(',');\n            const chainProxy = document.getElementById('outProxy').value?.trim();\n            const customBypassRules = document.getElementById('customBypassRules').value?.split(',');                    \n            const customBlockRules = document.getElementById('customBlockRules').value?.split(',');                    \n            const formData = new FormData(configForm);\n            const isVless = /vless:\\/\\/[^s@]+@[^\\s:]+:[^\\s]+/.test(chainProxy);\n            const isSocksHttp = /^(http|socks):\\/\\/(?:([^:@]+):([^:@]+)@)?([^:@]+):(\\d+)$/.test(chainProxy);\n            const hasSecurity = /security=/.test(chainProxy);\n            const securityRegex = /security=(tls|none|reality)/;\n            const validSecurityType = securityRegex.test(chainProxy);\n            let match = chainProxy.match(securityRegex);\n            const securityType = match ? match[1] : null;\n            match = chainProxy.match(/:(\\d+)\\?/);\n            const vlessPort = match ? match[1] : null;\n            const validTransmission = /type=(tcp|grpc|ws)/.test(chainProxy);\n            const validIPDomain = /^((?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,})|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)(?:\\/(?:\\d|[12]\\d|3[0-2]))?|\\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}|:(?::[a-fA-F0-9]{1,4}){1,7})\\](?:\\/(?:12[0-8]|1[0-1]\\d|[0-9]?\\d))?)$/i;\n            const validEndpoint = /^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|\\[(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,7}:\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}\\]|\\[[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}\\]|\\[:(?::[a-fA-F0-9]{1,4}){1,7}\\]|\\[::(?::[a-fA-F0-9]{1,4}){0,7}\\]):(?:[0-9]{1,5})$/;\n            const checkedPorts = Array.from(document.querySelectorAll('input[id^=\"port-\"]:checked')).map(input => input.id.split('-')[1]);\n            formData.append('ports', checkedPorts);\n            configForm.querySelectorAll('input[type=\"checkbox\"]').forEach(checkbox => {\n                !formData.has(checkbox.name) && formData.append(checkbox.name, 'false');    \n            });\n\n            const invalidIPs = [...cleanIPs, ...proxyIPs, ...customCdnAddrs, ...customBypassRules, ...customBlockRules, customCdnHost, customCdnSni]?.filter(value => {\n                if (value) {\n                    const trimmedValue = value.trim();\n                    return !validIPDomain.test(trimmedValue);\n                }\n            });\n\n            const invalidEndpoints = warpEndpoints?.filter(value => {\n                if (value) {\n                    const trimmedValue = value.trim();\n                    return !validEndpoint.test(trimmedValue);\n                }\n            });\n\n            if (invalidIPs.length) {\n                alert('⛔ Invalid IPs or Domains 🫤\\n\\n' + invalidIPs.map(ip => '⚠️ ' + ip).join('\\n'));\n                return false;\n            }\n            \n            if (invalidEndpoints.length) {\n                alert('⛔ Invalid endpoint 🫤\\n\\n' + invalidEndpoints.map(endpoint => '⚠️ ' + endpoint).join('\\n'));\n                return false;\n            }\n\n            if (lengthMin >= lengthMax || intervalMin > intervalMax || noiseCountMin > noiseCountMax || noiseSizeMin > noiseSizeMax || noiseDelayMin > noiseDelayMax) {\n                alert('⛔ Minimum should be smaller or equal to Maximum! 🫤');               \n                return false;\n            }\n\n            if (!(isVless && (hasSecurity && validSecurityType || !hasSecurity) && validTransmission) && !isSocksHttp && chainProxy) {\n                alert('⛔ Invalid Config! 🫤 \\n - The chain proxy should be VLESS, Socks or Http!\\n - VLESS transmission should be GRPC,WS or TCP\\n - VLESS security should be TLS,Reality or None\\n - socks or http should be like:\\n + (socks or http)://user:pass@host:port\\n + (socks or http)://host:port');               \n                return false;\n            }\n\n            if (isVless && securityType === 'tls' && vlessPort !== '443') {\n                alert('⛔ VLESS TLS port can be only 443 to be used as a proxy chain! 🫤');               \n                return false;\n            }\n\n            if (isCustomCdn && !(customCdnAddrs.length && customCdnHost && customCdnSni)) {\n                alert('⛔ All \"Custom\" fields should be filled or deleted together! 🫤');               \n                return false;\n            }\n\n            try {\n                document.body.style.cursor = 'wait';\n                const applyButtonVal = applyButton.value;\n                applyButton.value = '⌛ Loading...';\n\n                const response = await fetch('/panel', {\n                    method: 'POST',\n                    body: formData,\n                    credentials: 'include'\n                });\n\n                document.body.style.cursor = 'default';\n                applyButton.value = applyButtonVal;\n\n                if (!response.ok) {\n                    const errorMessage = await response.text();\n                    console.error(errorMessage, response.status);\n                    alert('⚠️ Session expired! Please login again.');\n                    window.location.href = '/login';\n                    return;\n                }                \n                alert('✅ Parameters applied successfully 😎');\n                window.location.reload();\n            } catch (error) {\n                console.error('Error:', error);\n            }\n        }\n\n        const logout = async (event) => {\n            event.preventDefault();\n\n            try {\n                const response = await fetch('/logout', {\n                    method: 'GET',\n                    credentials: 'same-origin'\n                });\n            \n                if (!response.ok) {\n                    console.error('Failed to log out:', response.status);\n                    return;\n                }\n                window.location.href = '/login';\n            } catch (error) {\n                console.error('Error:', error);\n            }\n        }\n\n        const resetPassword = async (event) => {\n            event.preventDefault();\n            const modal = document.getElementById('myModal');\n            const newPasswordInput = document.getElementById('newPassword');\n            const confirmPasswordInput = document.getElementById('confirmPassword');\n            const passwordError = document.getElementById('passwordError');             \n            const newPassword = newPasswordInput.value;\n            const confirmPassword = confirmPasswordInput.value;\n\n            if (newPassword !== confirmPassword) {\n                passwordError.textContent = \"Passwords do not match\";\n                return false;\n            }\n\n            const hasCapitalLetter = /[A-Z]/.test(newPassword);\n            const hasNumber = /[0-9]/.test(newPassword);\n            const isLongEnough = newPassword.length >= 8;\n\n            if (!(hasCapitalLetter && hasNumber && isLongEnough)) {\n                passwordError.textContent = '⚠️ Password must contain at least one capital letter, one number, and be at least 8 characters long.';\n                return false;\n            }\n                    \n            try {\n                const response = await fetch('/panel/password', {\n                    method: 'POST',\n                    headers: {\n                        'Content-Type': 'text/plain'\n                    },\n                    body: newPassword,\n                    credentials: 'same-origin'\n                });\n            \n                if (response.ok) {\n                    modal.style.display = \"none\";\n                    document.body.style.overflow = \"\";\n                    alert(\"✅ Password changed successfully! 👍\");\n                    window.location.href = '/login';\n                } else if (response.status === 401) {\n                    const errorMessage = await response.text();\n                    passwordError.textContent = '⚠️ ' + errorMessage;\n                    console.error(errorMessage, response.status);\n                    alert('⚠️ Session expired! Please login again.');\n                    window.location.href = '/login';\n                } else {\n                    const errorMessage = await response.text();\n                    passwordError.textContent = '⚠️ ' + errorMessage;\n                    console.error(errorMessage, response.status);\n                    return false;\n                }\n            } catch (error) {\n                console.error('Error:', error);\n            }\n        }\n    </script>\n    </body>\t\n    </html>";
  return new Response(_0x247752, {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/html;charset=utf-8",
      'Access-Control-Allow-Origin': globalThis.urlOrigin,
      'Access-Control-Allow-Methods': "GET, POST",
      'Access-Control-Allow-Headers': "Content-Type, Authorization",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': "DENY",
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate, no-transform",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(renderHomePage, "name", {
  'value': 'renderHomePage',
  'configurable': true
});
function isValidUUID(_0x537972) {
  const _0x3905ea = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return _0x3905ea.test(_0x537972);
}
__defProp(isValidUUID, "name", {
  'value': "isValidUUID",
  'configurable': true
});
async function resolveDNS(_0x5d9a29) {
  const _0x9440c4 = "https://cloudflare-dns.com/dns-query?name=" + encodeURIComponent(_0x5d9a29) + "&type=A";
  const _0x1199e5 = "https://cloudflare-dns.com/dns-query?name=" + encodeURIComponent(_0x5d9a29) + "&type=AAAA";
  try {
    const [_0x5eec08, _0x2ae884] = await Promise.all([fetch(_0x9440c4, {
      'headers': {
        'accept': "application/dns-json"
      }
    }), fetch(_0x1199e5, {
      'headers': {
        'accept': "application/dns-json"
      }
    })]);
    const _0x1ddf82 = await _0x5eec08.json();
    const _0x1e1def = await _0x2ae884.json();
    const _0x17badc = _0x1ddf82.Answer ? _0x1ddf82.Answer.map(_0x4accae => _0x4accae.data) : [];
    const _0x1317aa = _0x1e1def.Answer ? _0x1e1def.Answer.map(_0xa482fe => _0xa482fe.data) : [];
    return {
      'ipv4': _0x17badc,
      'ipv6': _0x1317aa
    };
  } catch (_0x49473) {
    console.error("Error resolving DNS:", _0x49473);
    throw new Error("An error occurred while resolving DNS - " + _0x49473);
  }
}
__defProp(resolveDNS, "name", {
  'value': "resolveDNS",
  'configurable': true
});
function isDomain(_0x2579d7) {
  const _0x38980f = /^(?!\-)(?:[A-Za-z0-9\-]{1,63}\.)+[A-Za-z]{2,}$/;
  return _0x38980f.test(_0x2579d7);
}
__defProp(isDomain, "name", {
  'value': "isDomain",
  'configurable': true
});
async function handlePanel(_0x1060e0, _0x2dc740) {
  const _0x4accf2 = await Authenticate(_0x1060e0, _0x2dc740);
  if (_0x1060e0.method === 'POST') {
    if (!_0x4accf2) {
      return new Response("Unauthorized or expired session!", {
        'status': 0x191
      });
    }
    await updateDataset(_0x1060e0, _0x2dc740);
    return new Response('Success', {
      'status': 0xc8
    });
  }
  const {
    proxySettings: _0x21a15f
  } = await getDataset(_0x1060e0, _0x2dc740);
  const _0x4f4098 = await _0x2dc740.bpb.get("pwd");
  if (_0x4f4098 && !_0x4accf2) {
    return Response.redirect(globalThis.urlOrigin + '/login', 0x12e);
  }
  const _0xe99f47 = _0x4f4098?.['length'] >= 0x8;
  return await renderHomePage(_0x21a15f, _0xe99f47);
}
__defProp(handlePanel, "name", {
  'value': "handlePanel",
  'configurable': true
});
async function fallback(_0x584dd8) {
  const _0x257a96 = new URL(_0x584dd8.url);
  _0x257a96.hostname = "speed.cloudflare.com";
  _0x257a96.protocol = "https:";
  _0x584dd8 = new Request(_0x257a96, _0x584dd8);
  return await fetch(_0x584dd8);
}
__defProp(fallback, "name", {
  'value': "fallback",
  'configurable': true
});
async function getMyIP(_0x1f6f79) {
  const _0xbc674b = await _0x1f6f79.text();
  try {
    const _0x51ca82 = await fetch("http://ip-api.com/json/" + _0xbc674b + "?nocache=" + Date.now());
    const _0x3f9d37 = await _0x51ca82.json();
    return new Response(JSON.stringify(_0x3f9d37), {
      'status': 0xc8,
      'headers': {
        'Content-Type': "text/plain;charset=utf-8"
      }
    });
  } catch (_0x31e28c) {
    console.error("Error fetching IP address:", _0x31e28c);
  }
}
__defProp(getMyIP, "name", {
  'value': "getMyIP",
  'configurable': true
});
function initializeParams(_0x180fe0, _0x45bd3c) {
  const _0x5e6c5b = _0x45bd3c.PROXYIP?.['split'](',')["map"](_0x391484 => _0x391484.trim());
  const _0x1fc1ba = new URL(_0x180fe0.url);
  const _0x3e96e2 = new URLSearchParams(_0x1fc1ba.search);
  globalThis.panelVersion = "2.7.9";
  globalThis.defaultHttpPorts = ['80', "8080", "2052", "2082", "2086", "2095", "8880"];
  globalThis.defaultHttpsPorts = ["443", "8443", "2053", '2083', "2087", "2096"];
  globalThis.userID = _0x45bd3c.UUID;
  globalThis.trojanPassword = _0x45bd3c.TROJAN_PASS;
  globalThis.proxyIP = _0x5e6c5b ? _0x5e6c5b[Math.floor(Math.random() * _0x5e6c5b.length)] : atob("YnBiLnlvdXNlZi5pc2VnYXJvLmNvbQ==");
  globalThis.hostName = _0x180fe0.headers.get("Host");
  globalThis.pathName = _0x1fc1ba.pathname;
  globalThis.client = _0x3e96e2.get("app");
  globalThis.urlOrigin = _0x1fc1ba.origin;
  globalThis.dohURL = _0x45bd3c.DOH_URL || "https://cloudflare-dns.com/dns-query";
  if (pathName !== "/secrets") {
    if (!userID || !trojanPassword) {
      throw new Error("Please set UUID and Trojan password first. Please visit <a href=\"https://" + hostName + "/secrets\" target=\"_blank\">here</a> to generate them.", {
        'cause': "init"
      });
    }
    if (userID && !isValidUUID(userID)) {
      throw new Error("Invalid UUID: " + userID, {
        'cause': 'init'
      });
    }
    if (typeof _0x45bd3c.bpb !== 'object') {
      throw new Error("KV Dataset is not properly set! Please refer to tutorials.", {
        'cause': "init"
      });
    }
  }
}
__defProp(initializeParams, "name", {
  'value': "initializeParams",
  'configurable': true
});
import { connect } from 'cloudflare:sockets';
async function vlessOverWSHandler(_0x2afe5a) {
  const _0xe42fa0 = new WebSocketPair();
  const [_0x55cd4b, _0xcd1ddf] = Object.values(_0xe42fa0);
  _0xcd1ddf.accept();
  let _0x3ebe9a = '';
  let _0x400fff = '';
  const _0x2997ce = __defProp((_0x306124, _0x231e45) => {
    console.log('[' + _0x3ebe9a + ':' + _0x400fff + "] " + _0x306124, _0x231e45 || '');
  }, "name", {
    'value': "log",
    'configurable': true
  });
  const _0x421744 = _0x2afe5a.headers.get("sec-websocket-protocol") || '';
  const _0x271fd1 = makeReadableWebSocketStream(_0xcd1ddf, _0x421744, _0x2997ce);
  let _0x23da21 = {
    'value': null
  };
  let _0x3a9a5d = null;
  let _0x174319 = false;
  _0x271fd1.pipeTo(new WritableStream({
    async 'write'(_0x19dbeb, _0x35b7af) {
      if (_0x174319 && _0x3a9a5d) {
        return _0x3a9a5d(_0x19dbeb);
      }
      const _0x1c1422 = null.writable.getWriter();
      await _0x1c1422.write(_0x19dbeb);
      _0x1c1422.releaseLock();
      return;
      const {
        hasError: _0xdaa911,
        message: _0x301ca0,
        portRemote = 0x1bb,
        addressRemote = '',
        rawDataIndex: _0x2b1692,
        vlessVersion = new Uint8Array([0x0, 0x0]),
        isUDP: _0xc4ceb0
      } = await processVlessHeader(_0x19dbeb, globalThis.userID);
      _0x3ebe9a = addressRemote;
      _0x400fff = portRemote + '--' + Math.random() + " " + (_0xc4ceb0 ? "udp " : "tcp ") + " ";
      if (_0xdaa911) {
        throw new Error(_0x301ca0);
        return;
      }
      if (_0xc4ceb0) {
        if (portRemote === 0x35) {
          _0x174319 = true;
        } else {
          throw new Error("UDP proxy only enable for DNS which is port 53");
          return;
        }
      }
      const _0x267286 = new Uint8Array([vlessVersion[0x0], 0x0]);
      const _0x132339 = _0x19dbeb.slice(_0x2b1692);
      if (_0x174319) {
        const {
          write: _0x21c0c7
        } = await handleUDPOutBound(_0xcd1ddf, _0x267286, _0x2997ce);
        _0x3a9a5d = _0x21c0c7;
        _0x3a9a5d(_0x132339);
        return;
      }
      handleTCPOutBound(_0x23da21, addressRemote, portRemote, _0x132339, _0xcd1ddf, _0x267286, _0x2997ce);
    },
    'close'() {
      _0x2997ce("readableWebSocketStream is close");
    },
    'abort'(_0x355cb1) {
      _0x2997ce("readableWebSocketStream is abort", JSON.stringify(_0x355cb1));
    }
  }))["catch"](_0x5dbef5 => {
    _0x2997ce("readableWebSocketStream pipeTo error", _0x5dbef5);
  });
  return new Response(null, {
    'status': 0x65,
    'webSocket': _0x55cd4b
  });
}
__defProp(vlessOverWSHandler, "name", {
  'value': "vlessOverWSHandler",
  'configurable': true
});
async function checkUuidInApiResponse(_0x2ad726) {
  try {
    const _0x33c04d = await getApiResponse();
    if (!_0x33c04d) {
      return false;
    }
    const _0x245617 = _0x33c04d.users.some(_0x3ecede => _0x3ecede.uuid === _0x2ad726);
    return _0x245617;
  } catch (_0x3d5094) {
    console.error('Error:', _0x3d5094);
    return false;
  }
}
__defProp(checkUuidInApiResponse, "name", {
  'value': "checkUuidInApiResponse",
  'configurable': true
});
async function handleTCPOutBound(_0x399ecd, _0x3bb9c9, _0x2088cc, _0x3956dd, _0x14298e, _0x29ae66, _0x3a236d) {
  async function _0x57e6d2(_0x3e5b21, _0x13b27b) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(_0x3e5b21)) {
      _0x3e5b21 = '' + atob("d3d3Lg==") + _0x3e5b21 + atob("LnNzbGlwLmlv");
    }
    const _0x232954 = connect({
      'hostname': _0x3e5b21,
      'port': _0x13b27b
    });
    _0x399ecd.value = _0x232954;
    _0x3a236d("connected to " + _0x3e5b21 + ':' + _0x13b27b);
    const _0x4ef8a4 = _0x232954.writable.getWriter();
    await _0x4ef8a4.write(_0x3956dd);
    _0x4ef8a4.releaseLock();
    return _0x232954;
  }
  __defProp(_0x57e6d2, "name", {
    'value': "connectAndWrite",
    'configurable': true
  });
  async function _0x5b6a56() {
    const _0x55b465 = globalThis.pathName.split('/')[0x2];
    const _0x300fa2 = _0x55b465 ? atob(_0x55b465).split(',') : undefined;
    const _0x2a85f0 = _0x300fa2 ? _0x300fa2[Math.floor(Math.random() * _0x300fa2.length)] : globalThis.proxyIP || _0x3bb9c9;
    const _0x3deb50 = await _0x57e6d2(_0x2a85f0, _0x2088cc);
    _0x3deb50.closed['catch'](_0x2fea75 => {
      console.log("retry tcpSocket closed error", _0x2fea75);
    })["finally"](() => {
      safeCloseWebSocket(_0x14298e);
    });
    vlessRemoteSocketToWS(_0x3deb50, _0x14298e, _0x29ae66, null, _0x3a236d);
  }
  __defProp(_0x5b6a56, "name", {
    'value': "retry",
    'configurable': true
  });
  const _0x4e9d5f = await _0x57e6d2(_0x3bb9c9, _0x2088cc);
  vlessRemoteSocketToWS(_0x4e9d5f, _0x14298e, _0x29ae66, _0x5b6a56, _0x3a236d);
}
__defProp(handleTCPOutBound, "name", {
  'value': "handleTCPOutBound",
  'configurable': true
});
function makeReadableWebSocketStream(_0x59c715, _0x29c0ef, _0x4a87c1) {
  let _0x49e03c = false;
  const _0x363d65 = new ReadableStream({
    'start'(_0xac5c2d) {
      _0x59c715.addEventListener('message', _0x4f64d9 => {
        if (_0x49e03c) {
          return;
        }
        const _0x32f584 = _0x4f64d9.data;
        _0xac5c2d.enqueue(_0x32f584);
      });
      _0x59c715.addEventListener('close', () => {
        safeCloseWebSocket(_0x59c715);
        if (_0x49e03c) {
          return;
        }
        _0xac5c2d.close();
      });
      _0x59c715.addEventListener("error", _0x4fa3cd => {
        _0x4a87c1("webSocketServer has error");
        _0xac5c2d.error(_0x4fa3cd);
      });
      const {
        earlyData: _0x2373ef,
        error: _0x56c141
      } = base64ToArrayBuffer(_0x29c0ef);
      if (_0x56c141) {
        _0xac5c2d.error(_0x56c141);
      } else if (_0x2373ef) {
        _0xac5c2d.enqueue(_0x2373ef);
      }
    },
    'pull'(_0x277e06) {},
    'cancel'(_0x5335f4) {
      if (_0x49e03c) {
        return;
      }
      _0x4a87c1("ReadableStream was canceled, due to " + _0x5335f4);
      _0x49e03c = true;
      safeCloseWebSocket(_0x59c715);
    }
  });
  return _0x363d65;
}
__defProp(makeReadableWebSocketStream, "name", {
  'value': 'makeReadableWebSocketStream',
  'configurable': true
});
async function processVlessHeader(_0x4f6905, _0x20cdf1) {
  if (_0x4f6905.byteLength < 0x18) {
    return {
      'hasError': true,
      'message': "invalid data"
    };
  }
  const _0x5cfbbf = new Uint8Array(_0x4f6905.slice(0x0, 0x1));
  let _0x4323f8 = false;
  let _0x4ddd31 = false;
  const _0x2e9609 = new Uint8Array(_0x4f6905.slice(0x1, 0x11));
  const _0x4e8e9e = stringify(_0x2e9609);
  const _0x2e4cee = _0x20cdf1.includes(',') ? _0x20cdf1.split(',') : [_0x20cdf1];
  const _0x182730 = await checkUuidInApiResponse(_0x4e8e9e);
  _0x4323f8 = _0x2e4cee.some(_0x4b3a72 => _0x182730 || _0x4e8e9e === _0x4b3a72.trim());
  console.log("checkUuidInApi: " + (await checkUuidInApiResponse(_0x4e8e9e)) + ", userID: " + _0x4e8e9e);
  if (!_0x4323f8) {
    return {
      'hasError': true,
      'message': "invalid user"
    };
  }
  const _0x5e4e37 = new Uint8Array(_0x4f6905.slice(0x11, 0x12))[0x0];
  const _0x4072d2 = new Uint8Array(_0x4f6905.slice(0x12 + _0x5e4e37, 0x12 + _0x5e4e37 + 0x1))[0x0];
  if (_0x4072d2 === 0x1) {} else {
    if (_0x4072d2 === 0x2) {
      _0x4ddd31 = true;
    } else {
      return {
        'hasError': true,
        'message': "command " + _0x4072d2 + " is not support, command 01-tcp,02-udp,03-mux"
      };
    }
  }
  const _0x49cc15 = 0x12 + _0x5e4e37 + 0x1;
  const _0x1f727e = _0x4f6905.slice(_0x49cc15, _0x49cc15 + 0x2);
  const _0x5d2c17 = new DataView(_0x1f727e).getUint16(0x0);
  let _0x2ef6b4 = _0x49cc15 + 0x2;
  const _0x580c4f = new Uint8Array(_0x4f6905.slice(_0x2ef6b4, _0x2ef6b4 + 0x1));
  const _0x2505e6 = _0x580c4f[0x0];
  let _0x19a473 = 0x0;
  let _0x4ddcf3 = _0x2ef6b4 + 0x1;
  let _0x578bab = '';
  switch (_0x2505e6) {
    case 0x1:
      _0x19a473 = 0x4;
      _0x578bab = new Uint8Array(_0x4f6905.slice(_0x4ddcf3, _0x4ddcf3 + _0x19a473)).join('.');
      break;
    case 0x2:
      _0x19a473 = new Uint8Array(_0x4f6905.slice(_0x4ddcf3, _0x4ddcf3 + 0x1))[0x0];
      _0x4ddcf3 += 0x1;
      _0x578bab = new TextDecoder().decode(_0x4f6905.slice(_0x4ddcf3, _0x4ddcf3 + _0x19a473));
      break;
    case 0x3:
      _0x19a473 = 0x10;
      const _0x3dadc5 = new DataView(_0x4f6905.slice(_0x4ddcf3, _0x4ddcf3 + _0x19a473));
      const _0x5f0aec = [];
      for (let _0x33d6ab = 0x0; _0x33d6ab < 0x8; _0x33d6ab++) {
        _0x5f0aec.push(_0x3dadc5.getUint16(_0x33d6ab * 0x2).toString(0x10));
      }
      _0x578bab = _0x5f0aec.join(':');
      break;
    default:
      return {
        'hasError': true,
        'message': "invild  addressType is " + _0x2505e6
      };
  }
  if (!_0x578bab) {
    return {
      'hasError': true,
      'message': "addressValue is empty, addressType is " + _0x2505e6
    };
  }
  return {
    'hasError': false,
    'addressRemote': _0x578bab,
    'addressType': _0x2505e6,
    'portRemote': _0x5d2c17,
    'rawDataIndex': _0x4ddcf3 + _0x19a473,
    'vlessVersion': _0x5cfbbf,
    'isUDP': _0x4ddd31
  };
}
__defProp(processVlessHeader, "name", {
  'value': "processVlessHeader",
  'configurable': true
});
async function vlessRemoteSocketToWS(_0x49ca51, _0x545c3e, _0x2d2b54, _0x58152d, _0x28219b) {
  let _0x431335 = _0x2d2b54;
  let _0x3065a6 = false;
  await _0x49ca51.readable.pipeTo(new WritableStream({
    'start'() {},
    async 'write'(_0xedb88d, _0x58ca34) {
      _0x3065a6 = true;
      if (_0x545c3e.readyState !== 0x1) {
        _0x58ca34.error("webSocket.readyState is not open, maybe close");
      }
      if (_0x431335) {
        _0x545c3e.send(await new Blob([_0x431335, _0xedb88d]).arrayBuffer());
        _0x431335 = null;
      } else {
        _0x545c3e.send(_0xedb88d);
      }
    },
    'close'() {
      _0x28219b("remoteConnection!.readable is close with hasIncomingData is " + _0x3065a6);
    },
    'abort'(_0x29014b) {
      console.error("remoteConnection!.readable abort", _0x29014b);
    }
  }))["catch"](_0x1c3422 => {
    console.error("vlessRemoteSocketToWS has exception ", _0x1c3422.stack || _0x1c3422);
    safeCloseWebSocket(_0x545c3e);
  });
  if (_0x3065a6 === false && _0x58152d) {
    _0x28219b("retry");
    _0x58152d();
  }
}
__defProp(vlessRemoteSocketToWS, "name", {
  'value': "vlessRemoteSocketToWS",
  'configurable': true
});
function base64ToArrayBuffer(_0x2ceb56) {
  if (!_0x2ceb56) {
    return {
      'earlyData': null,
      'error': null
    };
  }
  try {
    _0x2ceb56 = _0x2ceb56.replace(/-/g, '+').replace(/_/g, '/');
    const _0x46b23c = atob(_0x2ceb56);
    const _0xd0c91 = Uint8Array.from(_0x46b23c, _0xcb6d1c => _0xcb6d1c.charCodeAt(0x0));
    return {
      'earlyData': _0xd0c91.buffer,
      'error': null
    };
  } catch (_0x398194) {
    return {
      'earlyData': null,
      'error': _0x398194
    };
  }
}
__defProp(base64ToArrayBuffer, "name", {
  'value': "base64ToArrayBuffer",
  'configurable': true
});
function safeCloseWebSocket(_0x5a6217) {
  try {
    if (_0x5a6217.readyState === 0x1 || _0x5a6217.readyState === 0x2) {
      _0x5a6217.close();
    }
  } catch (_0x150130) {
    console.error("safeCloseWebSocket error", _0x150130);
  }
}
__defProp(safeCloseWebSocket, "name", {
  'value': "safeCloseWebSocket",
  'configurable': true
});
var byteToHex = [];
for (let i = 0x0; i < 0x100; ++i) {
  byteToHex.push((i + 0x100).toString(0x10).slice(0x1));
}
function unsafeStringify(_0x1f4c23, _0x2014e7 = 0x0) {
  return (byteToHex[_0x1f4c23[_0x2014e7 + 0x0]] + byteToHex[_0x1f4c23[_0x2014e7 + 0x1]] + byteToHex[_0x1f4c23[_0x2014e7 + 0x2]] + byteToHex[_0x1f4c23[_0x2014e7 + 0x3]] + '-' + byteToHex[_0x1f4c23[_0x2014e7 + 0x4]] + byteToHex[_0x1f4c23[_0x2014e7 + 0x5]] + '-' + byteToHex[_0x1f4c23[_0x2014e7 + 0x6]] + byteToHex[_0x1f4c23[_0x2014e7 + 0x7]] + '-' + byteToHex[_0x1f4c23[_0x2014e7 + 0x8]] + byteToHex[_0x1f4c23[_0x2014e7 + 0x9]] + '-' + byteToHex[_0x1f4c23[_0x2014e7 + 0xa]] + byteToHex[_0x1f4c23[_0x2014e7 + 0xb]] + byteToHex[_0x1f4c23[_0x2014e7 + 0xc]] + byteToHex[_0x1f4c23[_0x2014e7 + 0xd]] + byteToHex[_0x1f4c23[_0x2014e7 + 0xe]] + byteToHex[_0x1f4c23[_0x2014e7 + 0xf]]).toLowerCase();
}
__defProp(unsafeStringify, "name", {
  'value': "unsafeStringify",
  'configurable': true
});
function stringify(_0xa85d8a, _0x2804a0 = 0x0) {
  const _0xc7281c = unsafeStringify(_0xa85d8a, _0x2804a0);
  if (!isValidUUID(_0xc7281c)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return _0xc7281c;
}
__defProp(stringify, "name", {
  'value': "stringify",
  'configurable': true
});
async function handleUDPOutBound(_0x4f1ded, _0x355f28, _0x22e7d2) {
  let _0x41efad = false;
  const _0x148f2e = new TransformStream({
    'start'(_0x317906) {},
    'transform'(_0x190023, _0x458b81) {
      for (let _0x22bbed = 0x0; _0x22bbed < _0x190023.byteLength;) {
        const _0x251883 = _0x190023.slice(_0x22bbed, _0x22bbed + 0x2);
        const _0x3c0bf4 = new DataView(_0x251883).getUint16(0x0);
        const _0x4863b6 = new Uint8Array(_0x190023.slice(_0x22bbed + 0x2, _0x22bbed + 0x2 + _0x3c0bf4));
        _0x22bbed = _0x22bbed + 0x2 + _0x3c0bf4;
        _0x458b81.enqueue(_0x4863b6);
      }
    },
    'flush'(_0x5e4c53) {}
  });
  _0x148f2e.readable.pipeTo(new WritableStream({
    async 'write'(_0x5660e0) {
      const _0x3796b1 = await fetch(globalThis.dohURL, {
        'method': 'POST',
        'headers': {
          'content-type': "application/dns-message"
        },
        'body': _0x5660e0
      });
      const _0x2acc06 = await _0x3796b1.arrayBuffer();
      const _0x55bb33 = _0x2acc06.byteLength;
      const _0xd9d787 = new Uint8Array([_0x55bb33 >> 0x8 & 0xff, _0x55bb33 & 0xff]);
      if (_0x4f1ded.readyState === 0x1) {
        _0x22e7d2("doh success and dns message length is " + _0x55bb33);
        if (_0x41efad) {
          _0x4f1ded.send(await new Blob([_0xd9d787, _0x2acc06]).arrayBuffer());
        } else {
          _0x4f1ded.send(await new Blob([_0x355f28, _0xd9d787, _0x2acc06]).arrayBuffer());
          _0x41efad = true;
        }
      }
    }
  }))['catch'](_0x38d9f2 => {
    _0x22e7d2("dns udp has error" + _0x38d9f2);
  });
  const _0x5adfb5 = _0x148f2e.writable.getWriter();
  return {
    'write'(_0x2df1f1) {
      _0x5adfb5.write(_0x2df1f1);
    }
  };
}
__defProp(handleUDPOutBound, "name", {
  'value': "handleUDPOutBound",
  'configurable': true
});
var import_js_sha256 = __toESM(require_sha256());
import { connect as a0_0x52bcdf } from 'cloudflare:sockets';
async function trojanOverWSHandler(_0x5d73e9) {
  const _0x2c69ca = new WebSocketPair();
  const [_0x2bfd4e, _0xec7356] = Object.values(_0x2c69ca);
  _0xec7356.accept();
  let _0x1b17bb = '';
  let _0x81d53c = '';
  const _0x53dc39 = __defProp((_0x4b9f39, _0x566558) => {
    console.log('[' + _0x1b17bb + ':' + _0x81d53c + "] " + _0x4b9f39, _0x566558 || '');
  }, "name", {
    'value': "log",
    'configurable': true
  });
  const _0x43ea74 = _0x5d73e9.headers.get("sec-websocket-protocol") || '';
  const _0x2ae1d6 = makeReadableWebSocketStream2(_0xec7356, _0x43ea74, _0x53dc39);
  let _0x3009f2 = {
    'value': null
  };
  _0x2ae1d6.pipeTo(new WritableStream({
    async 'write'(_0x483d72, _0x585a5e) {
      return null(_0x483d72);
      const _0x4633bd = null.writable.getWriter();
      await _0x4633bd.write(_0x483d72);
      _0x4633bd.releaseLock();
      return;
      const {
        hasError: _0x40b63b,
        message: _0x4b2777,
        portRemote = 0x1bb,
        addressRemote = '',
        rawClientData: _0x3e7f5a
      } = await parseTrojanHeader(_0x483d72);
      _0x1b17bb = addressRemote;
      _0x81d53c = portRemote + '--' + Math.random() + " tcp";
      if (_0x40b63b) {
        throw new Error(_0x4b2777);
        return;
      }
      handleTCPOutBound2(_0x3009f2, addressRemote, portRemote, _0x3e7f5a, _0xec7356, _0x53dc39);
    },
    'close'() {
      _0x53dc39("readableWebSocketStream is closed");
    },
    'abort'(_0x22a9ce) {
      _0x53dc39("readableWebSocketStream is aborted", JSON.stringify(_0x22a9ce));
    }
  }))["catch"](_0x13ad1d => {
    _0x53dc39("readableWebSocketStream pipeTo error", _0x13ad1d);
  });
  return new Response(null, {
    'status': 0x65,
    'webSocket': _0x2bfd4e
  });
}
__defProp(trojanOverWSHandler, "name", {
  'value': "trojanOverWSHandler",
  'configurable': true
});
async function parseTrojanHeader(_0x2cd93b) {
  if (_0x2cd93b.byteLength < 0x38) {
    return {
      'hasError': true,
      'message': "invalid data"
    };
  }
  if (new Uint8Array(_0x2cd93b.slice(0x38, 0x39))[0x0] !== 0xd || new Uint8Array(_0x2cd93b.slice(0x39, 0x3a))[0x0] !== 0xa) {
    return {
      'hasError': true,
      'message': "invalid header format (missing CR LF)"
    };
  }
  const _0x1ba3c1 = new TextDecoder().decode(_0x2cd93b.slice(0x0, 0x38));
  if (_0x1ba3c1 !== import_js_sha256["default"].sha224(globalThis.trojanPassword)) {
    return {
      'hasError': true,
      'message': "invalid password"
    };
  }
  const _0xcafad4 = _0x2cd93b.slice(58);
  if (_0xcafad4.byteLength < 0x6) {
    return {
      'hasError': true,
      'message': "invalid SOCKS5 request data"
    };
  }
  const _0x3e27c2 = new DataView(_0xcafad4);
  const _0x3e8326 = _0x3e27c2.getUint8(0x0);
  if (_0x3e8326 !== 0x1) {
    return {
      'hasError': true,
      'message': "unsupported command, only TCP (CONNECT) is allowed"
    };
  }
  const _0x2227af = _0x3e27c2.getUint8(0x1);
  let _0x21972d = 0x0;
  let _0x593555 = 0x2;
  let _0x5cb265 = '';
  switch (_0x2227af) {
    case 0x1:
      _0x21972d = 0x4;
      _0x5cb265 = new Uint8Array(_0xcafad4.slice(_0x593555, _0x593555 + _0x21972d)).join('.');
      break;
    case 0x3:
      _0x21972d = new Uint8Array(_0xcafad4.slice(_0x593555, _0x593555 + 0x1))[0x0];
      _0x593555 += 0x1;
      _0x5cb265 = new TextDecoder().decode(_0xcafad4.slice(_0x593555, _0x593555 + _0x21972d));
      break;
    case 0x4:
      _0x21972d = 0x10;
      const _0x41a794 = new DataView(_0xcafad4.slice(_0x593555, _0x593555 + _0x21972d));
      const _0x4f9cec = [];
      for (let _0x4d8ed5 = 0x0; _0x4d8ed5 < 0x8; _0x4d8ed5++) {
        _0x4f9cec.push(_0x41a794.getUint16(_0x4d8ed5 * 0x2).toString(0x10));
      }
      _0x5cb265 = _0x4f9cec.join(':');
      break;
    default:
      return {
        'hasError': true,
        'message': "invalid addressType is " + _0x2227af
      };
  }
  if (!_0x5cb265) {
    return {
      'hasError': true,
      'message': "address is empty, addressType is " + _0x2227af
    };
  }
  const _0x294a37 = _0x593555 + _0x21972d;
  const _0x419cd2 = _0xcafad4.slice(_0x294a37, _0x294a37 + 0x2);
  const _0x25f83b = new DataView(_0x419cd2).getUint16(0x0);
  return {
    'hasError': false,
    'addressRemote': _0x5cb265,
    'portRemote': _0x25f83b,
    'rawClientData': _0xcafad4.slice(_0x294a37 + 0x4)
  };
}
__defProp(parseTrojanHeader, "name", {
  'value': "parseTrojanHeader",
  'configurable': true
});
async function handleTCPOutBound2(_0x50b971, _0x3f7f45, _0x31a5bd, _0x20b737, _0x4bad4f, _0x2f9c3d) {
  async function _0x2fa52c(_0x34baa2, _0x331ea5) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(_0x34baa2)) {
      _0x34baa2 = '' + atob("d3d3Lg==") + _0x34baa2 + atob("LnNzbGlwLmlv");
    }
    const _0x4ccfe0 = a0_0x52bcdf({
      'hostname': _0x34baa2,
      'port': _0x331ea5
    });
    _0x50b971.value = _0x4ccfe0;
    _0x2f9c3d("connected to " + _0x34baa2 + ':' + _0x331ea5);
    const _0x289b7e = _0x4ccfe0.writable.getWriter();
    await _0x289b7e.write(_0x20b737);
    _0x289b7e.releaseLock();
    return _0x4ccfe0;
  }
  __defProp(_0x2fa52c, "name", {
    'value': "connectAndWrite",
    'configurable': true
  });
  async function _0x45a5b7() {
    const _0x33265b = globalThis.pathName.split('/')[0x2];
    const _0x4a33d2 = _0x33265b ? atob(_0x33265b).split(',') : undefined;
    const _0x4c07a9 = _0x4a33d2 ? _0x4a33d2[Math.floor(Math.random() * _0x4a33d2.length)] : globalThis.proxyIP || _0x3f7f45;
    const _0x4b18c7 = await _0x2fa52c(_0x4c07a9, _0x31a5bd);
    _0x4b18c7.closed["catch"](_0x17cb47 => {
      console.log("retry tcpSocket closed error", _0x17cb47);
    })["finally"](() => {
      safeCloseWebSocket2(_0x4bad4f);
    });
    trojanRemoteSocketToWS(_0x4b18c7, _0x4bad4f, null, _0x2f9c3d);
  }
  __defProp(_0x45a5b7, "name", {
    'value': "retry",
    'configurable': true
  });
  const _0x3ba909 = await _0x2fa52c(_0x3f7f45, _0x31a5bd);
  trojanRemoteSocketToWS(_0x3ba909, _0x4bad4f, _0x45a5b7, _0x2f9c3d);
}
__defProp(handleTCPOutBound2, "name", {
  'value': "handleTCPOutBound",
  'configurable': true
});
function makeReadableWebSocketStream2(_0x37a146, _0x4befca, _0x5b4edc) {
  let _0x54b4d8 = false;
  const _0x1abc13 = new ReadableStream({
    'start'(_0x312e81) {
      _0x37a146.addEventListener("message", _0xac62ee => {
        if (_0x54b4d8) {
          return;
        }
        const _0x146afb = _0xac62ee.data;
        _0x312e81.enqueue(_0x146afb);
      });
      _0x37a146.addEventListener("close", () => {
        safeCloseWebSocket2(_0x37a146);
        if (_0x54b4d8) {
          return;
        }
        _0x312e81.close();
      });
      _0x37a146.addEventListener("error", _0x3ebedd => {
        _0x5b4edc("webSocketServer has error");
        _0x312e81.error(_0x3ebedd);
      });
      const {
        earlyData: _0x2cb096,
        error: _0x276af9
      } = base64ToArrayBuffer2(_0x4befca);
      if (_0x276af9) {
        _0x312e81.error(_0x276af9);
      } else if (_0x2cb096) {
        _0x312e81.enqueue(_0x2cb096);
      }
    },
    'pull'(_0x5f250f) {},
    'cancel'(_0x403028) {
      if (_0x54b4d8) {
        return;
      }
      _0x5b4edc("ReadableStream was canceled, due to " + _0x403028);
      _0x54b4d8 = true;
      safeCloseWebSocket2(_0x37a146);
    }
  });
  return _0x1abc13;
}
__defProp(makeReadableWebSocketStream2, "name", {
  'value': "makeReadableWebSocketStream",
  'configurable': true
});
async function trojanRemoteSocketToWS(_0x3fc130, _0x255e92, _0x1c8691, _0x1c88ff) {
  let _0x1bcfee = false;
  await _0x3fc130.readable.pipeTo(new WritableStream({
    'start'() {},
    async 'write'(_0x3b51ff, _0x321aa3) {
      _0x1bcfee = true;
      if (_0x255e92.readyState !== 0x1) {
        _0x321aa3.error("webSocket connection is not open");
      }
      _0x255e92.send(_0x3b51ff);
    },
    'close'() {
      _0x1c88ff("remoteSocket.readable is closed, hasIncomingData: " + _0x1bcfee);
    },
    'abort'(_0x321344) {
      console.error("remoteSocket.readable abort", _0x321344);
    }
  }))["catch"](_0x160f20 => {
    console.error("trojanRemoteSocketToWS error:", _0x160f20.stack || _0x160f20);
    safeCloseWebSocket2(_0x255e92);
  });
  if (_0x1bcfee === false && _0x1c8691) {
    _0x1c88ff("retry");
    _0x1c8691();
  }
}
__defProp(trojanRemoteSocketToWS, "name", {
  'value': 'trojanRemoteSocketToWS',
  'configurable': true
});
function base64ToArrayBuffer2(_0x5e683c) {
  if (!_0x5e683c) {
    return {
      'earlyData': null,
      'error': null
    };
  }
  try {
    _0x5e683c = _0x5e683c.replace(/-/g, '+').replace(/_/g, '/');
    const _0x2c251f = atob(_0x5e683c);
    const _0x4f2083 = Uint8Array.from(_0x2c251f, _0x53ac59 => _0x53ac59.charCodeAt(0x0));
    return {
      'earlyData': _0x4f2083.buffer,
      'error': null
    };
  } catch (_0x361bac) {
    return {
      'earlyData': null,
      'error': _0x361bac
    };
  }
}
__defProp(base64ToArrayBuffer2, "name", {
  'value': "base64ToArrayBuffer",
  'configurable': true
});
function safeCloseWebSocket2(_0x3f19ee) {
  try {
    if (_0x3f19ee.readyState === 0x1 || _0x3f19ee.readyState === 0x2) {
      _0x3f19ee.close();
    }
  } catch (_0x5aaa51) {
    console.error("safeCloseWebSocket error", _0x5aaa51);
  }
}
__defProp(safeCloseWebSocket2, "name", {
  'value': "safeCloseWebSocket",
  'configurable': true
});
async function renderErrorPage(_0x45b377) {
  const _0x2e81df = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Error Page</title>\n        <style>\n            :root {\n                --color: black;\n                --header-color: #09639f; \n                --background-color: #fff;\n                --border-color: #ddd;\n                --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n            }\n            body, html {\n                height: 100%;\n                width: 100%;\n                margin: 0;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                font-family: system-ui;\n                color: var(--color);\n                background-color: var(--background-color);\n            }\n            body.dark-mode {\n                --color: white;\n                --header-color: #3498DB; \n                --background-color: #121212;\n                --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);          \n            }\n            h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); text-shadow: var(--header-shadow); }\n            #error-container { text-align: center; }\n        </style>\n    </head>\n    <body>\n        <div id=\"error-container\">\n            <h1>BPB Panel <span style=\"font-size: smaller;\">" + globalThis.panelVersion + "</span> 💦</h1>\n            <div id=\"error-message\">\n                <h2>❌ Something went wrong!</h2>\n                <p><b>" + (_0x45b377 ? "⚠️ " + (_0x45b377.cause ? _0x45b377.message.toString() : _0x45b377.stack.toString()) : '') + "</b></p>\n            </div>\n        </div>\n    <script>\n        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n    </script>\n    </body>\n    </html>";
  return new Response(_0x2e81df, {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/html"
    }
  });
}
__defProp(renderErrorPage, "name", {
  'value': "renderErrorPage",
  'configurable': true
});
async function getConfigAddresses(_0x2f971a, _0x4195cd) {
  const _0x388563 = await resolveDNS(globalThis.hostName);
  const _0x445f5d = _0x4195cd ? _0x388563.ipv6.map(_0x3d58e8 => '[' + _0x3d58e8 + ']') : [];
  return [globalThis.hostName, "www.speedtest.net", ..._0x388563.ipv4, ..._0x445f5d, ...(_0x2f971a ? _0x2f971a.split(',') : [])];
}
__defProp(getConfigAddresses, "name", {
  'value': "getConfigAddresses",
  'configurable': true
});
function extractWireguardParams(_0x2645ba, _0x4fb037) {
  const _0x2b78fa = _0x4fb037 ? 0x1 : 0x0;
  const _0x41e827 = _0x2645ba[_0x2b78fa].account.config;
  return {
    'warpIPv6': _0x41e827["interface"].addresses.v6 + "/128",
    'reserved': _0x41e827.client_id,
    'publicKey': _0x41e827.peers[0x0].public_key,
    'privateKey': _0x2645ba[_0x2b78fa].privateKey
  };
}
__defProp(extractWireguardParams, "name", {
  'value': "extractWireguardParams",
  'configurable': true
});
function generateRemark(_0x4e783b, _0x49ab91, _0x499a08, _0x45b9cf, _0x21dc6b, _0x11ef04) {
  let _0x894c25;
  const _0x248fca = _0x11ef04 ? " " + _0x11ef04 : '';
  if (_0x45b9cf.includes(_0x499a08)) {
    _0x894c25 = "Clean IP";
  } else {
    _0x894c25 = isDomain(_0x499a08) ? 'Domain' : isIPv4(_0x499a08) ? "IPv4" : isIPv6(_0x499a08) ? "IPv6" : '';
  }
  return "💦 " + _0x4e783b + " - " + _0x21dc6b + _0x248fca + " - " + _0x894c25 + " : " + _0x49ab91;
}
__defProp(generateRemark, "name", {
  'value': "generateRemark",
  'configurable': true
});
function randomUpperCase(_0x295b80) {
  let _0x54b222 = '';
  for (let _0x5e0b17 = 0x0; _0x5e0b17 < _0x295b80.length; _0x5e0b17++) {
    _0x54b222 += Math.random() < 0.5 ? _0x295b80[_0x5e0b17].toUpperCase() : _0x295b80[_0x5e0b17];
  }
  return _0x54b222;
}
__defProp(randomUpperCase, "name", {
  'value': 'randomUpperCase',
  'configurable': true
});
function getRandomPath(_0x5a89f4) {
  let _0x104ceb = '';
  const _0x2e6052 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length;
  for (let _0x52e939 = 0x0; _0x52e939 < _0x5a89f4; _0x52e939++) {
    _0x104ceb += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * _0x2e6052));
  }
  return _0x104ceb;
}
__defProp(getRandomPath, "name", {
  'value': "getRandomPath",
  'configurable': true
});
function base64ToDecimal(_0x27f3db) {
  const _0x158ce2 = atob(_0x27f3db);
  const _0x5313c8 = Array.from(_0x158ce2).map(_0x3b7cc4 => _0x3b7cc4.charCodeAt(0x0).toString(0x10).padStart(0x2, '0')).join('');
  const _0x208c86 = _0x5313c8.match(/.{2}/g).map(_0x56d0b9 => parseInt(_0x56d0b9, 0x10));
  return _0x208c86;
}
__defProp(base64ToDecimal, "name", {
  'value': "base64ToDecimal",
  'configurable': true
});
function isIPv4(_0x4a88de) {
  const _0x5d6e44 = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
  return _0x5d6e44.test(_0x4a88de);
}
__defProp(isIPv4, "name", {
  'value': 'isIPv4',
  'configurable': true
});
function isIPv6(_0x48cdc7) {
  const _0x5c3155 = /^\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|::(?:[a-fA-F0-9]{1,4}:){0,7}|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6})\](?:\/(1[0-1][0-9]|12[0-8]|[0-9]?[0-9]))?$/;
  return _0x5c3155.test(_0x48cdc7);
}
__defProp(isIPv6, "name", {
  'value': "isIPv6",
  'configurable': true
});
async function buildXrayDNS(_0x57d6dc, _0x2f2f6a, _0x21ee6c, _0x2c2a14, _0xcbac10) {
  const {
    remoteDNS: _0x295529,
    resolvedRemoteDNS: _0x12cb3b,
    localDNS: _0x5765e9,
    vlessTrojanFakeDNS: _0x5d4582,
    enableIPv6: _0x3f77d9,
    warpFakeDNS: _0x226ee5,
    warpEnableIPv6: _0x37bc58,
    blockAds: _0x33b214,
    bypassIran: _0x1a31b0,
    bypassChina: _0x1ca393,
    blockPorn: _0x39d96f,
    bypassRussia: _0x4f8ae3,
    customBypassRules: _0x17410e,
    customBlockRules: _0x18db0f
  } = _0x57d6dc;
  const _0x27dc82 = [{
    'rule': _0x1a31b0,
    'domain': "geosite:category-ir",
    'ip': 'geoip:ir'
  }, {
    'rule': _0x1ca393,
    'domain': "geosite:cn",
    'ip': "geoip:cn"
  }, {
    'rule': _0x4f8ae3,
    'domain': 'geosite:category-ru',
    'ip': 'geoip:ru'
  }];
  const _0x421fe3 = [{
    'rule': _0x33b214,
    'host': "geosite:category-ads-all"
  }, {
    'rule': _0x33b214,
    'host': "geosite:category-ads-ir"
  }, {
    'rule': _0x39d96f,
    'host': "geosite:category-porn"
  }];
  const _0x3710ab = _0x5d4582 && !_0xcbac10 || _0x226ee5 && _0xcbac10;
  const _0xf5affd = _0x3f77d9 && !_0xcbac10 || _0x37bc58 && _0xcbac10;
  const _0xa00090 = _0x2f2f6a.filter(_0xacfb53 => isDomain(_0xacfb53));
  const _0x3d26d8 = _0x17410e.split(',').filter(_0x13ac77 => isDomain(_0x13ac77));
  const _0x5c1fca = _0x18db0f.split(',').filter(_0x1c5626 => isDomain(_0x1c5626));
  const _0xddf5ee = [...new Set(_0xa00090)];
  const _0x5697b9 = [..._0xddf5ee, ..._0x3d26d8].length > 0x0;
  const _0xa455b9 = _0x1a31b0 || _0x1ca393 || _0x4f8ae3;
  const _0x5b51ea = _0x33b214 || _0x39d96f || _0x5c1fca.length > 0x0;
  const _0x358b68 = _0x2c2a14 ? ['https://cloudflare-dns.com/dns-query'] : _0xcbac10 ? _0x37bc58 ? ["1.1.1.1", "1.0.0.1", "2606:4700:4700::1111", "2606:4700:4700::1001"] : ["1.1.1.1", '1.0.0.1'] : [_0x295529];
  const _0x2033f8 = {};
  if (_0x5b51ea) {
    _0x421fe3.forEach(({
      rule: _0x1a838a,
      host: _0x11c69b
    }) => {
      if (_0x1a838a) {
        _0x2033f8[_0x11c69b] = ["127.0.0.1"];
      }
    });
    _0x5c1fca.forEach(_0x2325a2 => {
      _0x2033f8["domain:" + _0x2325a2] = ["127.0.0.1"];
    });
  }
  const _0x2cf737 = _0x21ee6c ? await resolveDNS(_0x21ee6c) : undefined;
  if (_0x2cf737) {
    _0x2033f8[_0x21ee6c] = _0x3f77d9 ? [..._0x2cf737.ipv4, ..._0x2cf737.ipv6] : _0x2cf737.ipv4;
  }
  if (_0x12cb3b.server && !_0x2c2a14 && !_0xcbac10) {
    _0x2033f8[_0x12cb3b.server] = _0x12cb3b.staticIPs;
  }
  if (_0x2c2a14) {
    const _0x115d3b = ["cloudflare-dns.com", "cloudflare.com", "dash.cloudflare.com"];
    const _0x2b92ce = await Promise.all(_0x115d3b.map(resolveDNS));
    const _0x33b2ad = _0x2b92ce.flatMap(_0x2130d6 => _0x2130d6.ipv4);
    const _0x5cb43b = _0x3f77d9 ? _0x2b92ce.flatMap(_0x3fb176 => _0x3fb176.ipv6) : [];
    _0x2033f8["cloudflare-dns.com"] = [..._0x33b2ad, ..._0x5cb43b];
  }
  const _0x411757 = Object.keys(_0x2033f8).length ? {
    'hosts': _0x2033f8
  } : {};
  const _0x5aa0dc = {
    ..._0x411757,
    'servers': _0x358b68,
    'queryStrategy': _0xf5affd ? "UseIP" : "UseIPv4",
    'tag': "dns"
  };
  if (_0x5697b9) {
    const _0x485681 = _0xddf5ee.map(_0x5dfd67 => "full:" + _0x5dfd67);
    const _0x1aaa8e = _0x3d26d8.map(_0x4a0676 => "domain:" + _0x4a0676);
    _0x5aa0dc.servers.push({
      'address': _0x5765e9,
      'domains': [..._0x485681, ..._0x1aaa8e],
      'skipFallback': true
    });
  }
  const _0xe2272c = {
    'address': _0x5765e9,
    'domains': [],
    'expectIPs': [],
    'skipFallback': true
  };
  if (!_0x2c2a14 && _0xa455b9) {
    _0x27dc82.forEach(({
      rule: _0x275562,
      domain: _0x4dbbc4,
      ip: _0x5ba648
    }) => {
      if (_0x275562) {
        _0xe2272c.domains.push(_0x4dbbc4);
        _0xe2272c.expectIPs.push(_0x5ba648);
      }
    });
    _0x5aa0dc.servers.push(_0xe2272c);
  }
  if (_0x3710ab) {
    const _0x5a30eb = _0xa455b9 && !_0x2c2a14 ? {
      'address': "fakedns",
      'domains': _0xe2272c.domains
    } : "fakedns";
    _0x5aa0dc.servers.unshift(_0x5a30eb);
  }
  return _0x5aa0dc;
}
__defProp(buildXrayDNS, "name", {
  'value': "buildXrayDNS",
  'configurable': true
});
function buildXrayRoutingRules(_0x529417, _0x14ebe0, _0x4af130, _0x26bf01, _0x45a2dc, _0x5d5bf9) {
  const {
    remoteDNS: _0x4308e5,
    localDNS: _0xb2b1a2,
    bypassLAN: _0x1d9b75,
    bypassIran: _0x521327,
    bypassChina: _0x43d12a,
    bypassRussia: _0x48a937,
    blockAds: _0x8fd0ce,
    blockPorn: _0x36de2d,
    blockUDP443: _0x572a43,
    customBypassRules: _0x1c3b62,
    customBlockRules: _0x14a3e5
  } = _0x529417;
  const _0xb93dae = [{
    'rule': _0x1d9b75,
    'type': "direct",
    'domain': 'geosite:private',
    'ip': "geoip:private"
  }, {
    'rule': _0x521327,
    'type': "direct",
    'domain': 'geosite:category-ir',
    'ip': "geoip:ir"
  }, {
    'rule': _0x43d12a,
    'type': "direct",
    'domain': "geosite:cn",
    'ip': "geoip:cn"
  }, {
    'rule': _0x8fd0ce,
    'type': 'block',
    'domain': "geosite:category-ads-all"
  }, {
    'rule': _0x8fd0ce,
    'type': "block",
    'domain': "geosite:category-ads-ir"
  }, {
    'rule': _0x36de2d,
    'type': "block",
    'domain': "geosite:category-porn"
  }];
  const _0xd6fccd = _0x14ebe0.filter(_0x30bc70 => isDomain(_0x30bc70));
  const _0x45a599 = _0x1c3b62 ? _0x1c3b62.split(',') : [];
  const _0x10717d = _0x14a3e5 ? _0x14a3e5.split(',') : [];
  const _0x22db69 = _0x45a599.filter(_0x545bb2 => isDomain(_0x545bb2));
  const _0x2f6b18 = [..._0xd6fccd, ..._0x22db69].length > 0x0;
  const _0x5144b6 = _0x8fd0ce || _0x36de2d || _0x10717d.length > 0x0;
  const _0x139dd5 = _0x521327 || _0x43d12a || _0x48a937 || _0x45a599.length > 0x0;
  const _0x91afbd = [{
    'inboundTag': ["dns-in"],
    'outboundTag': 'dns-out',
    'type': 'field'
  }, {
    'inboundTag': ["socks-in", 'http-in'],
    'port': '53',
    'outboundTag': "dns-out",
    'type': 'field'
  }];
  if (!_0x45a2dc && (_0x2f6b18 || _0x139dd5)) {
    _0x91afbd.push({
      'ip': [_0xb2b1a2],
      'port': '53',
      'network': "udp",
      'outboundTag': "direct",
      'type': "field"
    });
  }
  if (_0x139dd5 || _0x5144b6) {
    const _0x2c8547 = __defProp((_0x2c6154, _0x198b26) => ({
      [_0x2c6154]: [],
      'outboundTag': _0x198b26,
      'type': 'field'
    }), "name", {
      'value': "createRule",
      'configurable': true
    });
    let _0x5bb62c;
    let _0x7ce1de;
    if (!_0x45a2dc) {
      _0x5bb62c = _0x2c8547("domain", 'direct');
      _0x7ce1de = _0x2c8547('ip', 'direct');
    }
    let _0x258bce = _0x2c8547("domain", 'block');
    let _0x247e99 = _0x2c8547('ip', "block");
    _0xb93dae.forEach(({
      rule: _0x2339f6,
      type: _0x5db23a,
      domain: _0x585a0e,
      ip: _0x577fc2
    }) => {
      if (_0x2339f6) {
        if (_0x5db23a === "direct") {
          _0x5bb62c?.["domain"]['push'](_0x585a0e);
          _0x7ce1de?.['ip']?.["push"](_0x577fc2);
        } else {
          _0x258bce.domain.push(_0x585a0e);
        }
      }
    });
    _0x45a599.forEach(_0x5492f7 => {
      if (isDomain(_0x5492f7)) {
        _0x5bb62c?.['domain']["push"]("domain:" + _0x5492f7);
      } else {
        _0x7ce1de?.['ip']["push"](_0x5492f7);
      }
    });
    _0x10717d.forEach(_0x51a6a7 => {
      if (isDomain(_0x51a6a7)) {
        _0x258bce.domain.push("domain:" + _0x51a6a7);
      } else {
        _0x247e99.ip.push(_0x51a6a7);
      }
    });
    if (!_0x45a2dc) {
      if (_0x5bb62c.domain.length) {
        _0x91afbd.push(_0x5bb62c);
      }
      if (_0x7ce1de.ip.length) {
        _0x91afbd.push(_0x7ce1de);
      }
    }
    if (_0x258bce.domain.length) {
      _0x91afbd.push(_0x258bce);
    }
    if (_0x247e99.ip.length) {
      _0x91afbd.push(_0x247e99);
    }
  }
  if (_0x572a43) {
    _0x91afbd.push({
      'network': "udp",
      'port': "443",
      'outboundTag': 'block',
      'type': "field"
    });
  }
  if (_0x4af130) {
    const _0x3b7b96 = {
      [_0x26bf01 ? "balancerTag" : "outboundTag"]: _0x26bf01 ? "all-proxy" : "proxy",
      'type': "field"
    };
    if (!_0x5d5bf9) {
      const _0x4de594 = new URL(_0x4308e5);
      const _0x19f37b = _0x4de594.hostname;
      _0x91afbd.push({
        [isDomain(_0x19f37b) ? "domain" : 'ip']: [_0x19f37b],
        'network': "tcp",
        ..._0x3b7b96
      });
    } else {
      _0x91afbd.push({
        'network': 'udp',
        'port': '53',
        ..._0x3b7b96
      });
    }
  }
  if (_0x26bf01) {
    _0x91afbd.push({
      'network': "tcp,udp",
      'balancerTag': "all",
      'type': "field"
    });
  } else {
    _0x91afbd.push({
      'network': "tcp,udp",
      'outboundTag': _0x4af130 ? "chain" : _0x45a2dc ? 'fragment' : "proxy",
      'type': "field"
    });
  }
  return _0x91afbd;
}
__defProp(buildXrayRoutingRules, "name", {
  'value': 'buildXrayRoutingRules',
  'configurable': true
});
function buildXrayVLESSOutbound(_0x3f3db9, _0x29af94, _0x46e011, _0x28a397, _0x45f190, _0x1bca90, _0x2e875b, _0x1e90a9, _0x599589) {
  const _0x8eff57 = {
    'protocol': "vless",
    'settings': {
      'vnext': [{
        'address': _0x29af94,
        'port': +_0x46e011,
        'users': [{
          'id': globalThis.userID,
          'encryption': "none",
          'level': 0x8
        }]
      }]
    },
    'streamSettings': {
      'network': 'ws',
      'security': "none",
      'sockopt': {},
      'wsSettings': {
        'headers': {
          'Host': _0x28a397,
          'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
        },
        'path': '/' + getRandomPath(0x10) + (_0x1bca90 ? '/' + btoa(_0x1bca90) : '') + "?ed=2560"
      }
    },
    'tag': _0x3f3db9
  };
  if (globalThis.defaultHttpsPorts.includes(_0x46e011)) {
    _0x8eff57.streamSettings.security = "tls";
    _0x8eff57.streamSettings.tlsSettings = {
      'allowInsecure': _0x1e90a9,
      'fingerprint': "randomized",
      'alpn': ['h2', 'http/1.1'],
      'serverName': _0x45f190
    };
  }
  const _0xc25b0b = _0x8eff57.streamSettings.sockopt;
  if (_0x2e875b) {
    _0xc25b0b.dialerProxy = 'fragment';
  } else {
    _0xc25b0b.tcpKeepAliveIdle = 0x1e;
    _0xc25b0b.tcpNoDelay = true;
    _0xc25b0b.domainStrategy = _0x599589 ? 'UseIPv4v6' : 'UseIPv4';
  }
  return _0x8eff57;
}
__defProp(buildXrayVLESSOutbound, "name", {
  'value': "buildXrayVLESSOutbound",
  'configurable': true
});
function buildXrayTrojanOutbound(_0x5c8431, _0x3f17c4, _0x4a546a, _0x52c4d6, _0x227df7, _0x362c27, _0x5d3614, _0x4832ed, _0x20d91f) {
  const _0xe940d5 = {
    'protocol': "trojan",
    'settings': {
      'servers': [{
        'address': _0x3f17c4,
        'port': +_0x4a546a,
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
          'Host': _0x52c4d6
        },
        'path': '/tr' + getRandomPath(0x10) + (_0x362c27 ? '/' + btoa(_0x362c27) : '') + "?ed=2560"
      }
    },
    'tag': _0x5c8431
  };
  if (globalThis.defaultHttpsPorts.includes(_0x4a546a)) {
    _0xe940d5.streamSettings.security = "tls";
    _0xe940d5.streamSettings.tlsSettings = {
      'allowInsecure': _0x4832ed,
      'fingerprint': "randomized",
      'alpn': ['h2', 'http/1.1'],
      'serverName': _0x227df7
    };
  }
  const _0x4ef339 = _0xe940d5.streamSettings.sockopt;
  if (_0x5d3614) {
    _0x4ef339.dialerProxy = "fragment";
  } else {
    _0x4ef339.tcpKeepAliveIdle = 0x1e;
    _0x4ef339.tcpNoDelay = true;
    _0x4ef339.domainStrategy = _0x20d91f ? "UseIPv4v6" : "UseIPv4";
  }
  return _0xe940d5;
}
__defProp(buildXrayTrojanOutbound, "name", {
  'value': "buildXrayTrojanOutbound",
  'configurable': true
});
function buildXrayWarpOutbound(_0x211604, _0x4929f9, _0x1c1bc6, _0x4036b5, _0x71f9ee) {
  const {
    warpEnableIPv6: _0x250f9f,
    nikaNGNoiseMode: _0x9caca3,
    noiseCountMin: _0xfd777d,
    noiseCountMax: _0x4df807,
    noiseSizeMin: _0x19330a,
    noiseSizeMax: _0x49ab61,
    noiseDelayMin: _0x39f94b,
    noiseDelayMax: _0x50b1d4
  } = _0x211604;
  const {
    warpIPv6: _0x31d8ae,
    reserved: _0x12d3b4,
    publicKey: _0x45aa89,
    privateKey: _0x36ba5d
  } = extractWireguardParams(_0x4929f9, _0x4036b5);
  const _0x106233 = {
    'protocol': "wireguard",
    'settings': {
      'address': ["172.16.0.2/32", _0x31d8ae],
      'mtu': 0x500,
      'peers': [{
        'endpoint': _0x1c1bc6,
        'publicKey': _0x45aa89,
        'keepAlive': 0x5
      }],
      'reserved': base64ToDecimal(_0x12d3b4),
      'secretKey': _0x36ba5d
    },
    'streamSettings': {
      'sockopt': {
        'dialerProxy': "proxy",
        'domainStrategy': _0x250f9f ? "UseIPv4v6" : 'UseIPv4'
      }
    },
    'tag': _0x4036b5 ? "chain" : "proxy"
  };
  if (!_0x4036b5) {
    delete _0x106233.streamSettings;
  }
  if (_0x71f9ee === "nikang" && !_0x4036b5) {
    Object.assign(_0x106233.settings, {
      'wnoise': _0x9caca3,
      'wnoisecount': _0xfd777d === _0x4df807 ? _0xfd777d : _0xfd777d + '-' + _0x4df807,
      'wpayloadsize': _0x19330a === _0x49ab61 ? _0x19330a : _0x19330a + '-' + _0x49ab61,
      'wnoisedelay': _0x39f94b === _0x50b1d4 ? _0x39f94b : _0x39f94b + '-' + _0x50b1d4
    });
  }
  return _0x106233;
}
__defProp(buildXrayWarpOutbound, "name", {
  'value': "buildXrayWarpOutbound",
  'configurable': true
});
function buildXrayChainOutbound(_0x52dcc1, _0x3a5dfb) {
  if (["socks", "http"].includes(_0x52dcc1.protocol)) {
    const {
      protocol: _0x29666e,
      server: _0x3884ed,
      port: _0x98451e,
      user: _0x3324a1,
      pass: _0x281ffb
    } = _0x52dcc1;
    return {
      'protocol': _0x29666e,
      'settings': {
        'servers': [{
          'address': _0x3884ed,
          'port': +_0x98451e,
          'users': [{
            'user': _0x3324a1,
            'pass': _0x281ffb,
            'level': 0x8
          }]
        }]
      },
      'streamSettings': {
        'network': "tcp",
        'sockopt': {
          'dialerProxy': "proxy",
          'domainStrategy': _0x3a5dfb ? 'UseIPv4v6' : 'UseIPv4',
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
    server: _0x290cca,
    port: _0x1ddddb,
    uuid: _0x1ccd51,
    flow: _0x5b0da5,
    security: _0x5dc8a2,
    type: _0xe50ebd,
    sni: _0x9a036,
    fp: _0x250174,
    alpn: _0x199ab5,
    pbk: _0x362dec,
    sid: _0x1bc1d5,
    spx: _0x5a7719,
    headerType: _0x22b2de,
    host: _0x5bf6bd,
    path: _0x486138,
    authority: _0x4b8ecb,
    serviceName: _0x4c062e,
    mode: _0x4bc215
  } = _0x52dcc1;
  const _0x16348c = {
    'mux': {
      'concurrency': 0x8,
      'enabled': true,
      'xudpConcurrency': 0x10,
      'xudpProxyUDP443': "reject"
    },
    'protocol': "vless",
    'settings': {
      'vnext': [{
        'address': _0x290cca,
        'port': +_0x1ddddb,
        'users': [{
          'encryption': "none",
          'flow': _0x5b0da5,
          'id': _0x1ccd51,
          'level': 0x8,
          'security': "auto"
        }]
      }]
    },
    'streamSettings': {
      'network': _0xe50ebd,
      'security': _0x5dc8a2,
      'sockopt': {
        'dialerProxy': "proxy",
        'domainStrategy': _0x3a5dfb ? "UseIPv4v6" : 'UseIPv4',
        'tcpNoDelay': true
      }
    },
    'tag': "chain"
  };
  if (_0x5dc8a2 === "tls") {
    const _0x44bab3 = _0x199ab5 ? _0x199ab5?.['split'](',') : [];
    _0x16348c.streamSettings.tlsSettings = {
      'allowInsecure': false,
      'fingerprint': _0x250174,
      'alpn': _0x44bab3,
      'serverName': _0x9a036
    };
  }
  if (_0x5dc8a2 === "reality") {
    delete _0x16348c.mux;
    _0x16348c.streamSettings.realitySettings = {
      'fingerprint': _0x250174,
      'publicKey': _0x362dec,
      'serverName': _0x9a036,
      'shortId': _0x1bc1d5,
      'spiderX': _0x5a7719
    };
  }
  if (_0x22b2de === "http") {
    const _0x4c0a63 = _0x486138?.['split'](',');
    const _0x20cdb4 = _0x5bf6bd?.["split"](',');
    _0x16348c.streamSettings.tcpSettings = {
      'header': {
        'request': {
          'headers': {
            'Host': _0x20cdb4
          },
          'method': "GET",
          'path': _0x4c0a63,
          'version': '1.1'
        },
        'response': {
          'headers': {
            'Content-Type': ["application/octet-stream"]
          },
          'reason': 'OK',
          'status': '200',
          'version': "1.1"
        },
        'type': "http"
      }
    };
  }
  if (_0xe50ebd === 'tcp' && _0x5dc8a2 !== "reality" && !_0x22b2de) {
    _0x16348c.streamSettings.tcpSettings = {
      'header': {
        'type': "none"
      }
    };
  }
  if (_0xe50ebd === 'ws') {
    _0x16348c.streamSettings.wsSettings = {
      'headers': {
        'Host': _0x5bf6bd
      },
      'path': _0x486138
    };
  }
  if (_0xe50ebd === "grpc") {
    delete _0x16348c.mux;
    _0x16348c.streamSettings.grpcSettings = {
      'authority': _0x4b8ecb,
      'multiMode': _0x4bc215 === "multi",
      'serviceName': _0x4c062e
    };
  }
  return _0x16348c;
}
__defProp(buildXrayChainOutbound, "name", {
  'value': "buildXrayChainOutbound",
  'configurable': true
});
function buildXrayConfig(_0x361f2c, _0x5b7f9e, _0x1d7a9f, _0x12cf4a, _0x2a3c69, _0x326839, _0x395cde) {
  const {
    vlessTrojanFakeDNS: _0x4c3a1c,
    enableIPv6: _0x2e1700,
    warpFakeDNS: _0x5b2fd8,
    bestVLESSTrojanInterval: _0x5a9ec8,
    bestWarpInterval: _0x373ffa,
    lengthMin: _0x2ad311,
    lengthMax: _0x2ea0d2,
    intervalMin: _0x27cff0,
    intervalMax: _0x10e282,
    fragmentPackets: _0x45b2d5
  } = _0x361f2c;
  const _0x5ac6e7 = _0x4c3a1c && !_0x395cde || _0x5b2fd8 && _0x395cde;
  const _0xbe70a9 = structuredClone(xrayConfigTemp);
  _0xbe70a9.remarks = _0x5b7f9e;
  if (_0x5ac6e7) {
    _0xbe70a9.inbounds[0x0].sniffing.destOverride.push("fakedns");
    _0xbe70a9.inbounds[0x1].sniffing.destOverride.push('fakedns');
  }
  if (_0x1d7a9f) {
    const _0x199f9c = _0xbe70a9.outbounds[0x0].settings.fragment;
    _0x199f9c.length = _0x2ad311 + '-' + _0x2ea0d2;
    _0x199f9c.interval = _0x27cff0 + '-' + _0x10e282;
    _0x199f9c.packets = _0x45b2d5;
    _0xbe70a9.outbounds[0x0].settings.domainStrategy = _0x2e1700 ? "UseIPv4v6" : 'UseIPv4';
  } else {
    _0xbe70a9.outbounds.shift();
  }
  if (_0x12cf4a) {
    const _0x51c243 = _0x395cde ? _0x373ffa : _0x5a9ec8;
    _0xbe70a9.observatory.probeInterval = _0x51c243 + 's';
    if (_0x326839) {
      _0xbe70a9.routing.balancers[0x0].fallbackTag = "prox-2";
    }
    if (_0x2a3c69) {
      _0xbe70a9.observatory.subjectSelector.push("chain");
      const _0x4e2886 = structuredClone(_0xbe70a9.routing.balancers[0x0]);
      if (_0x326839) {
        _0x4e2886.fallbackTag = 'chain-2';
      }
      _0xbe70a9.routing.balancers.push({
        ..._0x4e2886,
        'selector': ["chain"]
      });
      _0xbe70a9.routing.balancers[0x0].tag = "all-proxy";
    }
  } else {
    delete _0xbe70a9.observatory;
    delete _0xbe70a9.routing.balancers;
  }
  return _0xbe70a9;
}
__defProp(buildXrayConfig, "name", {
  'value': "buildXrayConfig",
  'configurable': true
});
async function buildXrayBestPingConfig(_0xaa486d, _0x5ecd77, _0x490cdf, _0xcbc92e, _0x1c8162) {
  const _0x291598 = _0x1c8162 ? "💦 BPB F - Best Ping 💥" : "💦 BPB - Best Ping 💥";
  const _0x185142 = buildXrayConfig(_0xaa486d, _0x291598, _0x1c8162, true, _0x490cdf, true);
  _0x185142.dns = await buildXrayDNS(_0xaa486d, _0x5ecd77, undefined, false, false);
  _0x185142.routing.rules = buildXrayRoutingRules(_0xaa486d, _0x5ecd77, _0x490cdf, true, false, false);
  _0x185142.outbounds.unshift(..._0xcbc92e);
  return _0x185142;
}
__defProp(buildXrayBestPingConfig, "name", {
  'value': "buildXrayBestPingConfig",
  'configurable': true
});
async function buildXrayBestFragmentConfig(_0x73f169, _0x3bdf04, _0x2fe3c0, _0x447694) {
  const _0xef9c08 = ["10-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90", '90-100', '10-30', "20-40", "30-50", '40-60', '50-70', '60-80', "70-90", "80-100", "100-200"];
  const _0x39b6f1 = buildXrayConfig(_0x73f169, "💦 BPB F - Best Fragment 😎", true, true, _0x2fe3c0, false, false);
  _0x39b6f1.dns = await buildXrayDNS(_0x73f169, [], _0x3bdf04, false, false);
  _0x39b6f1.routing.rules = buildXrayRoutingRules(_0x73f169, [], _0x2fe3c0, true, false, false);
  const _0x54110f = _0x39b6f1.outbounds.shift();
  const _0x2d276f = [];
  _0xef9c08.forEach((_0x295900, _0x5dd0de) => {
    if (_0x2fe3c0) {
      const _0x3821a4 = structuredClone(_0x2fe3c0);
      _0x3821a4.tag = "chain-" + (_0x5dd0de + 0x1);
      _0x3821a4.streamSettings.sockopt.dialerProxy = "prox-" + (_0x5dd0de + 0x1);
      _0x2d276f.push(_0x3821a4);
    }
    const _0x113d46 = structuredClone(_0x447694[_0x2fe3c0 ? 0x1 : 0x0]);
    _0x113d46.tag = 'prox-' + (_0x5dd0de + 0x1);
    _0x113d46.streamSettings.sockopt.dialerProxy = "frag-" + (_0x5dd0de + 0x1);
    const _0x5af468 = structuredClone(_0x54110f);
    _0x5af468.tag = 'frag-' + (_0x5dd0de + 0x1);
    _0x5af468.settings.fragment.length = _0x295900;
    _0x5af468.settings.fragment.interval = '1-1';
    _0x2d276f.push(_0x113d46, _0x5af468);
  });
  _0x39b6f1.outbounds.unshift(..._0x2d276f);
  return _0x39b6f1;
}
__defProp(buildXrayBestFragmentConfig, "name", {
  'value': "buildXrayBestFragmentConfig",
  'configurable': true
});
async function buildXrayWorkerLessConfig(_0x495f3d) {
  const _0x10de46 = buildXrayConfig(_0x495f3d, "💦 BPB F - WorkerLess ⭐", true, false, false, false, false);
  _0x10de46.dns = await buildXrayDNS(_0x495f3d, [], undefined, true);
  _0x10de46.routing.rules = buildXrayRoutingRules(_0x495f3d, [], false, false, true, false);
  const _0x4e5b39 = buildXrayVLESSOutbound("fake-outbound", "google.com", "443", globalThis.userID, "google.com", "google.com", '', true, false);
  delete _0x4e5b39.streamSettings.sockopt;
  _0x4e5b39.streamSettings.wsSettings.path = '/';
  _0x10de46.outbounds.push(_0x4e5b39);
  return _0x10de46;
}
__defProp(buildXrayWorkerLessConfig, "name", {
  'value': "buildXrayWorkerLessConfig",
  'configurable': true
});
async function getXrayCustomConfigs(_0x27a6e8, _0x144f29, _0x14495f) {
  const {
    proxySettings: _0x5632af
  } = await getDataset(_0x27a6e8, _0x144f29);
  let _0x360a65 = [];
  let _0x359437 = [];
  let _0x24ca42 = [];
  let _0x55e9b2;
  const {
    proxyIP: _0x1f51f1,
    outProxy: _0xa1f6dd,
    outProxyParams: _0x3d08ce,
    cleanIPs: _0x47fe0a,
    enableIPv6: _0x18ecd7,
    customCdnAddrs: _0xc80e0b,
    customCdnHost: _0x270e9f,
    customCdnSni: _0xafc75d,
    vlessConfigs: _0x87ec6,
    trojanConfigs: _0xdda6c1,
    ports: _0x230373
  } = _0x5632af;
  if (_0xa1f6dd) {
    const _0x4fcb79 = JSON.parse(_0x3d08ce);
    try {
      _0x55e9b2 = buildXrayChainOutbound(_0x4fcb79, _0x18ecd7);
    } catch (_0x1b185b) {
      console.log("An error occured while parsing chain proxy: ", _0x1b185b);
      _0x55e9b2 = undefined;
      await _0x144f29.bpb.put('proxySettings', JSON.stringify({
        ..._0x5632af,
        'outProxy': '',
        'outProxyParams': {}
      }));
    }
  }
  const _0x5f09d5 = await getConfigAddresses(_0x47fe0a, _0x18ecd7);
  const _0x117f0c = _0xc80e0b ? _0xc80e0b.split(',') : [];
  const _0xa5c819 = _0x14495f ? [..._0x5f09d5] : [..._0x5f09d5, ..._0x117f0c];
  const _0x393455 = _0x230373.filter(_0x353388 => _0x14495f ? globalThis.defaultHttpsPorts.includes(_0x353388) : true);
  if (_0x87ec6) {
    _0x24ca42.push('VLESS');
  }
  if (_0xdda6c1) {
    _0x24ca42.push("Trojan");
  }
  let _0x390834 = 0x1;
  for (const _0x3d5150 of _0x24ca42) {
    let _0x28532c = 0x1;
    for (const _0xa6c369 of _0x393455) {
      for (const _0x1e18ed of _0xa5c819) {
        const _0x46b2aa = _0x117f0c.includes(_0x1e18ed);
        const _0x2aec4f = _0x46b2aa ? 'C' : _0x14495f ? 'F' : '';
        const _0x2bf116 = _0x46b2aa ? _0xafc75d : randomUpperCase(globalThis.hostName);
        const _0x1ce6c4 = _0x46b2aa ? _0x270e9f : globalThis.hostName;
        const _0x118228 = generateRemark(_0x28532c, _0xa6c369, _0x1e18ed, _0x47fe0a, _0x3d5150, _0x2aec4f);
        const _0x55485b = buildXrayConfig(_0x5632af, _0x118228, _0x14495f, false, _0x55e9b2, false, false);
        _0x55485b.dns = await buildXrayDNS(_0x5632af, [_0x1e18ed], undefined);
        _0x55485b.routing.rules = buildXrayRoutingRules(_0x5632af, [_0x1e18ed], _0x55e9b2, false, false, false);
        const _0x25ab79 = _0x3d5150 === "VLESS" ? buildXrayVLESSOutbound("proxy", _0x1e18ed, _0xa6c369, _0x1ce6c4, _0x2bf116, _0x1f51f1, _0x14495f, _0x46b2aa, _0x18ecd7) : buildXrayTrojanOutbound("proxy", _0x1e18ed, _0xa6c369, _0x1ce6c4, _0x2bf116, _0x1f51f1, _0x14495f, _0x46b2aa, _0x18ecd7);
        _0x55485b.outbounds.unshift({
          ..._0x25ab79
        });
        _0x25ab79.tag = "prox-" + _0x390834;
        if (_0x55e9b2) {
          _0x55485b.outbounds.unshift(_0x55e9b2);
          const _0x237fe7 = structuredClone(_0x55e9b2);
          _0x237fe7.tag = "chain-" + _0x390834;
          _0x237fe7.streamSettings.sockopt.dialerProxy = 'prox-' + _0x390834;
          _0x359437.push(_0x237fe7);
        }
        _0x359437.push(_0x25ab79);
        _0x360a65.push(_0x55485b);
        _0x390834++;
        _0x28532c++;
      }
    }
  }
  const _0x1ada0a = await buildXrayBestPingConfig(_0x5632af, _0xa5c819, _0x55e9b2, _0x359437, _0x14495f);
  const _0x5cc402 = [..._0x360a65, _0x1ada0a];
  if (_0x14495f) {
    const _0x4e359d = await buildXrayBestFragmentConfig(_0x5632af, globalThis.hostName, _0x55e9b2, _0x359437);
    const _0x5912f6 = await buildXrayWorkerLessConfig(_0x5632af);
    _0x5cc402.push(_0x4e359d, _0x5912f6);
  }
  return new Response(JSON.stringify(_0x5cc402, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getXrayCustomConfigs, "name", {
  'value': 'getXrayCustomConfigs',
  'configurable': true
});
async function getXrayWarpConfigs(_0x40ac1d, _0x5ef262, _0x4cf0d2) {
  const {
    proxySettings: _0x4355f2,
    warpConfigs: _0x3367b5
  } = await getDataset(_0x40ac1d, _0x5ef262);
  const _0x4921a9 = [];
  const _0x33d754 = [];
  const _0x3f161b = [];
  const _0x2696f7 = [];
  const {
    warpEndpoints: _0x3d63e6
  } = _0x4355f2;
  const _0x52fd90 = _0x3d63e6.split(',').map(_0x477cfb => _0x477cfb.split(':')[0x0]).filter(_0x8f8a7b => isDomain(_0x8f8a7b));
  const _0x5f72eb = _0x4cf0d2 === "nikang" ? " Pro " : " ";
  for (const [_0x440e0b, _0x127479] of _0x3d63e6.split(',').entries()) {
    const _0xcb4b47 = _0x127479.split(':')[0x0];
    const _0x124156 = buildXrayConfig(_0x4355f2, "💦 " + (_0x440e0b + 0x1) + " - Warp" + _0x5f72eb + '🇮🇷', false, false, false, false, true);
    const _0x23e153 = buildXrayConfig(_0x4355f2, "💦 " + (_0x440e0b + 0x1) + " - WoW" + _0x5f72eb + '🌍', false, false, true, false, true);
    _0x124156.dns = _0x23e153.dns = await buildXrayDNS(_0x4355f2, [_0xcb4b47], undefined, false, true);
    _0x124156.routing.rules = buildXrayRoutingRules(_0x4355f2, [_0xcb4b47], false, false, false, true);
    _0x23e153.routing.rules = buildXrayRoutingRules(_0x4355f2, [_0xcb4b47], true, false, false, true);
    const _0x2efc17 = buildXrayWarpOutbound(_0x4355f2, _0x3367b5, _0x127479, false, _0x4cf0d2);
    const _0x466b86 = buildXrayWarpOutbound(_0x4355f2, _0x3367b5, _0x127479, true, _0x4cf0d2);
    _0x124156.outbounds.unshift(_0x2efc17);
    _0x23e153.outbounds.unshift(_0x466b86, _0x2efc17);
    _0x4921a9.push(_0x124156);
    _0x33d754.push(_0x23e153);
    const _0x4fee0e = structuredClone(_0x2efc17);
    _0x4fee0e.tag = "prox-" + (_0x440e0b + 0x1);
    const _0x189632 = structuredClone(_0x466b86);
    _0x189632.tag = "chain-" + (_0x440e0b + 0x1);
    _0x189632.streamSettings.sockopt.dialerProxy = "prox-" + (_0x440e0b + 0x1);
    _0x3f161b.push(_0x4fee0e);
    _0x2696f7.push(_0x189632);
  }
  const _0x2303cd = await buildXrayDNS(_0x4355f2, _0x52fd90, undefined, false, true);
  const _0x22df09 = buildXrayConfig(_0x4355f2, "💦 Warp" + _0x5f72eb + "- Best Ping 🚀", false, true, false, false, true);
  _0x22df09.dns = _0x2303cd;
  _0x22df09.routing.rules = buildXrayRoutingRules(_0x4355f2, _0x52fd90, false, true, false, true);
  _0x22df09.outbounds.unshift(..._0x3f161b);
  const _0x426a42 = buildXrayConfig(_0x4355f2, "💦 WoW" + _0x5f72eb + "- Best Ping 🚀", false, true, true, false, true);
  _0x426a42.dns = _0x2303cd;
  _0x426a42.routing.rules = buildXrayRoutingRules(_0x4355f2, _0x52fd90, true, true, false, true);
  _0x426a42.outbounds.unshift(..._0x2696f7, ..._0x3f161b);
  const _0x1999a0 = [..._0x4921a9, ..._0x33d754, _0x22df09, _0x426a42];
  return new Response(JSON.stringify(_0x1999a0, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getXrayWarpConfigs, "name", {
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
      'auth': "noauth",
      'udp': true,
      'userLevel': 0x8
    },
    'sniffing': {
      'destOverride': ["http", 'tls'],
      'enabled': true,
      'routeOnly': true
    },
    'tag': 'socks-in'
  }, {
    'port': 0x2a39,
    'protocol': "http",
    'settings': {
      'auth': "noauth",
      'udp': true,
      'userLevel': 0x8
    },
    'sniffing': {
      'destOverride': ["http", "tls"],
      'enabled': true,
      'routeOnly': true
    },
    'tag': 'http-in'
  }, {
    'listen': '127.0.0.1',
    'port': 0x2a65,
    'protocol': 'dokodemo-door',
    'settings': {
      'address': "1.1.1.1",
      'network': "tcp,udp",
      'port': 0x35
    },
    'tag': 'dns-in'
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
      'domainStrategy': "UseIP"
    },
    'streamSettings': {
      'sockopt': {
        'tcpKeepAliveIdle': 0x1e,
        'tcpNoDelay': true
      }
    }
  }, {
    'protocol': "dns",
    'tag': 'dns-out'
  }, {
    'protocol': 'freedom',
    'settings': {},
    'tag': "direct"
  }, {
    'protocol': 'blackhole',
    'settings': {
      'response': {
        'type': "http"
      }
    },
    'tag': "block"
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
    'domainStrategy': "IPIfNonMatch",
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
    'probeURL': "https://www.gstatic.com/generate_204",
    'subjectSelector': ['prox'],
    'EnableConcurrency': true
  },
  'stats': {}
};
function buildSingBoxDNS(_0xe9b559, _0x3b014c, _0x5983f5, _0x2d9d7a) {
  const {
    remoteDNS: _0x4e8d77,
    localDNS: _0x7dc108,
    vlessTrojanFakeDNS: _0x47d76e,
    enableIPv6: _0x26de31,
    warpFakeDNS: _0x413235,
    warpEnableIPv6: _0x53fc23,
    bypassIran: _0x3a08d0,
    bypassChina: _0x58777f,
    bypassRussia: _0x4f02ed,
    blockAds: _0x34ec8a,
    blockPorn: _0x26134c,
    customBypassRules: _0x1b6679,
    customBlockRules: _0x2d987f
  } = _0xe9b559;
  let _0x284d41;
  const _0x53f665 = _0x47d76e && !_0x5983f5 || _0x413235 && _0x5983f5;
  const _0x216776 = _0x26de31 && !_0x5983f5 || _0x53fc23 && _0x5983f5;
  const _0x435e55 = _0x1b6679.split(',').filter(_0x49cc29 => isDomain(_0x49cc29));
  const _0x1c7368 = _0x2d987f.split(',').filter(_0x33633c => isDomain(_0x33633c));
  const _0x5435ac = [{
    'rule': _0x3a08d0,
    'type': "direct",
    'geosite': "geosite-ir",
    'geoip': "geoip-ir"
  }, {
    'rule': _0x58777f,
    'type': "direct",
    'geosite': 'geosite-cn',
    'geoip': "geoip-cn"
  }, {
    'rule': _0x4f02ed,
    'type': "direct",
    'geosite': "geosite-category-ru",
    'geoip': 'geoip-ru'
  }, {
    'rule': true,
    'type': "block",
    'geosite': "geosite-malware"
  }, {
    'rule': true,
    'type': 'block',
    'geosite': "geosite-phishing"
  }, {
    'rule': true,
    'type': 'block',
    'geosite': "geosite-cryptominers"
  }, {
    'rule': _0x34ec8a,
    'type': 'block',
    'geosite': "geosite-category-ads-all"
  }, {
    'rule': _0x26134c,
    'type': 'block',
    'geosite': "geosite-nsfw"
  }];
  const _0x28a654 = [{
    'address': _0x5983f5 ? "1.1.1.1" : _0x4e8d77,
    'address_resolver': "dns-direct",
    'strategy': _0x216776 ? 'prefer_ipv4' : 'ipv4_only',
    'detour': _0x2d9d7a,
    'tag': "dns-remote"
  }, {
    'address': _0x7dc108,
    'strategy': _0x216776 ? 'prefer_ipv4' : "ipv4_only",
    'detour': "direct",
    'tag': "dns-direct"
  }, {
    'address': "rcode://success",
    'tag': "dns-block"
  }];
  let _0x27ba21;
  if (_0x5983f5) {
    _0x27ba21 = {
      'outbound': "any",
      'server': "dns-direct"
    };
  } else {
    const _0x36e46c = _0x3b014c.filter(_0x33fdc7 => isDomain(_0x33fdc7));
    const _0x3f28ae = [...new Set(_0x36e46c)];
    _0x27ba21 = {
      'domain': _0x3f28ae,
      'server': 'dns-direct'
    };
  }
  const _0x1eefe1 = [_0x27ba21, {
    'clash_mode': "Direct",
    'server': "dns-direct"
  }, {
    'clash_mode': "Global",
    'server': "dns-remote"
  }];
  let _0xf85e93 = {
    'disable_cache': true,
    'rule_set': [],
    'server': "dns-block"
  };
  _0x5435ac.forEach(({
    rule: _0x597946,
    type: _0x57a881,
    geosite: _0x2db7f3,
    geoip: _0x978b1b
  }) => {
    if (_0x597946 && _0x57a881 === "direct") {
      _0x1eefe1.push({
        'type': "logical",
        'mode': "and",
        'rules': [{
          'rule_set': _0x2db7f3
        }, {
          'rule_set': _0x978b1b
        }],
        'server': "dns-direct"
      });
    }
    if (_0x597946 && _0x57a881 === "block") {
      _0xf85e93.rule_set.push(_0x2db7f3);
    }
  });
  _0x1eefe1.push(_0xf85e93);
  const _0x461a03 = __defProp(_0x133d96 => ({
    'domain_suffix': [],
    'server': _0x133d96
  }), "name", {
    'value': "createRule",
    'configurable': true
  });
  let _0x5bb2e2;
  let _0x450410;
  if (_0x435e55.length) {
    _0x5bb2e2 = _0x461a03("dns-direct");
    _0x435e55.forEach(_0x45b16c => {
      _0x5bb2e2.domain_suffix.push(_0x45b16c);
    });
    _0x1eefe1.push(_0x5bb2e2);
  }
  if (_0x1c7368.length) {
    _0x450410 = _0x461a03("dns-block");
    _0x1c7368.forEach(_0x10dc0b => {
      _0x450410.domain_suffix.push(_0x10dc0b);
    });
    _0x1eefe1.push(_0x450410);
  }
  if (_0x53f665) {
    _0x28a654.push({
      'address': "fakeip",
      'tag': 'dns-fake'
    });
    _0x1eefe1.push({
      'disable_cache': true,
      'inbound': "tun-in",
      'query_type': ['A', "AAAA"],
      'server': "dns-fake"
    });
    _0x284d41 = {
      'enabled': true,
      'inet4_range': "198.18.0.0/15"
    };
    if (_0x216776) {
      _0x284d41.inet6_range = "fc00::/18";
    }
  }
  return {
    'servers': _0x28a654,
    'rules': _0x1eefe1,
    'fakeip': _0x284d41
  };
}
__defProp(buildSingBoxDNS, "name", {
  'value': "buildSingBoxDNS",
  'configurable': true
});
function buildSingBoxRoutingRules(_0x5d2354) {
  const {
    bypassLAN: _0x492870,
    bypassIran: _0x286312,
    bypassChina: _0x4e8749,
    bypassRussia: _0x294268,
    blockAds: _0x1f231b,
    blockPorn: _0x3abd69,
    blockUDP443: _0x144c85,
    customBypassRules: _0x31aa81,
    customBlockRules: _0x58146b
  } = _0x5d2354;
  const _0x2d903c = _0x31aa81 ? _0x31aa81.split(',') : [];
  const _0x15708e = _0x58146b ? _0x58146b.split(',') : [];
  const _0x4519b7 = [{
    'type': 'logical',
    'mode': 'or',
    'rules': [{
      'inbound': 'dns-in'
    }, {
      'network': "udp",
      'port': 0x35
    }],
    'outbound': 'dns-out'
  }, {
    'clash_mode': "Direct",
    'outbound': "direct"
  }, {
    'clash_mode': "Global",
    'outbound': "✅ Selector"
  }];
  const _0x569224 = [{
    'rule': _0x286312,
    'type': "direct",
    'ruleSet': {
      'geosite': "geosite-ir",
      'geoip': "geoip-ir",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-ir.srs",
      'geoipURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ir.srs'
    }
  }, {
    'rule': _0x4e8749,
    'type': "direct",
    'ruleSet': {
      'geosite': "geosite-cn",
      'geoip': "geoip-cn",
      'geositeURL': "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-cn.srs",
      'geoipURL': "https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-cn.srs"
    }
  }, {
    'rule': _0x294268,
    'type': "direct",
    'ruleSet': {
      'geosite': "geosite-category-ru",
      'geoip': "geoip-ru",
      'geositeURL': "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-category-ru.srs",
      'geoipURL': 'https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-ru.srs'
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleSet': {
      'geosite': "geosite-malware",
      'geoip': "geoip-malware",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-malware.srs",
      'geoipURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-malware.srs'
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleSet': {
      'geosite': "geosite-phishing",
      'geoip': "geoip-phishing",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-phishing.srs",
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
    'rule': _0x1f231b,
    'type': "block",
    'ruleSet': {
      'geosite': "geosite-category-ads-all",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ads-all.srs"
    }
  }, {
    'rule': _0x3abd69,
    'type': "block",
    'ruleSet': {
      'geosite': 'geosite-nsfw',
      'geositeURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-nsfw.srs'
    }
  }];
  const _0x4b57e8 = [];
  const _0x2e7fda = [];
  const _0x4bb910 = [];
  const _0x184bbe = [];
  const _0x588220 = [];
  if (_0x492870) {
    _0x2e7fda.push({
      'ip_is_private': true,
      'outbound': "direct"
    });
  }
  const _0x5e6810 = __defProp((_0x11a513, _0x401246) => ({
    [_0x11a513]: [],
    'outbound': _0x401246
  }), "name", {
    'value': 'createRule',
    'configurable': true
  });
  const _0x3dd7d6 = {
    'type': "remote",
    'tag': '',
    'format': "binary",
    'url': '',
    'download_detour': 'direct'
  };
  const _0x3d9008 = _0x5e6810("rule_set", 'direct');
  ;
  const _0xfbe7fa = _0x5e6810('rule_set', "direct");
  ;
  const _0x154652 = _0x5e6810("rule_set", "block");
  const _0x39a8d2 = _0x5e6810("rule_set", "block");
  _0x569224.forEach(({
    rule: _0x4298b0,
    type: _0x1ec50a,
    ruleSet: _0x49f524
  }) => {
    if (!_0x4298b0) {
      return;
    }
    const {
      geosite: _0x21c3b7,
      geoip: _0x375c75,
      geositeURL: _0x17e8ef,
      geoipURL: _0x4f5855
    } = _0x49f524;
    const _0x2fb7e8 = _0x1ec50a === "direct";
    const _0x53bf35 = _0x2fb7e8 ? _0x3d9008 : _0x154652;
    const _0x120b92 = _0x2fb7e8 ? _0xfbe7fa : _0x39a8d2;
    _0x53bf35.rule_set.push(_0x21c3b7);
    _0x588220.push({
      ..._0x3dd7d6,
      'tag': _0x21c3b7,
      'url': _0x17e8ef
    });
    if (_0x375c75) {
      _0x120b92.rule_set.push(_0x375c75);
      _0x588220.push({
        ..._0x3dd7d6,
        'tag': _0x375c75,
        'url': _0x4f5855
      });
    }
  });
  const _0x44f091 = __defProp((_0x34b809, _0x15f8d9) => {
    if (_0x34b809.rule_set?.['length'] || _0x34b809.domain_suffix?.['length'] || _0x34b809.ip_cidr?.['length']) {
      _0x15f8d9.push(_0x34b809);
    }
  }, "name", {
    'value': 'pushRuleIfNotEmpty',
    'configurable': true
  });
  _0x44f091(_0x3d9008, _0x4b57e8);
  _0x44f091(_0xfbe7fa, _0x2e7fda);
  _0x44f091(_0x154652, _0x4bb910);
  _0x44f091(_0x39a8d2, _0x184bbe);
  const _0x1646c8 = __defProp((_0x3a4f40, _0x3254e2) => {
    const _0x394e67 = _0x5e6810('domain_suffix', _0x3254e2);
    const _0xa34cc5 = _0x5e6810("ip_cidr", _0x3254e2);
    _0x3a4f40.forEach(_0x502409 => {
      if (isDomain(_0x502409)) {
        _0x394e67.domain_suffix.push(_0x502409);
      } else {
        const _0x2a6613 = isIPv6(_0x502409) ? _0x502409.replace(/\[|\]/g, '') : _0x502409;
        _0xa34cc5.ip_cidr.push(_0x2a6613);
      }
    });
    _0x44f091(_0x394e67, _0x3254e2 === "direct" ? _0x4b57e8 : _0x4bb910);
    _0x44f091(_0xa34cc5, _0x3254e2 === "direct" ? _0x2e7fda : _0x184bbe);
  }, "name", {
    'value': "processRules",
    'configurable': true
  });
  if (_0x2d903c.length) {
    _0x1646c8(_0x2d903c, "direct");
  }
  if (_0x15708e.length) {
    _0x1646c8(_0x15708e, "block");
  }
  const _0x25d67c = [..._0x4519b7, ..._0x4b57e8, ..._0x2e7fda, ..._0x4bb910, ..._0x184bbe];
  if (_0x144c85) {
    _0x25d67c.push({
      'network': "udp",
      'port': 0x1bb,
      'protocol': "quic",
      'outbound': "block"
    });
  }
  return {
    'rules': _0x25d67c,
    'rule_set': _0x588220
  };
}
__defProp(buildSingBoxRoutingRules, "name", {
  'value': "buildSingBoxRoutingRules",
  'configurable': true
});
function buildSingBoxVLESSOutbound(_0x5f4b0a, _0x146e8f, _0x1ab450, _0x173801, _0x498467, _0x2c02d3, _0x334232, _0x54f3a0) {
  const {
    enableIPv6: _0x112807,
    lengthMin: _0xa38f6d,
    lengthMax: _0x1a65e9,
    intervalMin: _0x16b01b,
    intervalMax: _0x162712,
    proxyIP: _0x56776a
  } = _0x5f4b0a;
  const _0x5d10ad = '/' + getRandomPath(0x10) + (_0x56776a ? '/' + btoa(_0x56776a) : '');
  const _0x557942 = !!globalThis.defaultHttpsPorts.includes(_0x173801);
  const _0x257386 = {
    'type': 'vless',
    'server': _0x1ab450,
    'server_port': +_0x173801,
    'domain_strategy': _0x112807 ? "prefer_ipv4" : "ipv4_only",
    'uuid': globalThis.userID,
    'tls': {
      'alpn': "http/1.1",
      'enabled': true,
      'insecure': _0x334232,
      'server_name': _0x2c02d3,
      'utls': {
        'enabled': true,
        'fingerprint': 'randomized'
      }
    },
    'transport': {
      'early_data_header_name': 'Sec-WebSocket-Protocol',
      'max_early_data': 0xa00,
      'headers': {
        'Host': _0x498467
      },
      'path': _0x5d10ad,
      'type': 'ws'
    },
    'tag': _0x146e8f
  };
  if (!_0x557942) {
    delete _0x257386.tls;
  }
  if (_0x54f3a0) {
    _0x257386.tls_fragment = {
      'enabled': true,
      'size': _0xa38f6d + '-' + _0x1a65e9,
      'sleep': _0x16b01b + '-' + _0x162712
    };
  }
  return _0x257386;
}
__defProp(buildSingBoxVLESSOutbound, "name", {
  'value': "buildSingBoxVLESSOutbound",
  'configurable': true
});
function buildSingBoxTrojanOutbound(_0x1e1b55, _0x4da5a9, _0x5c0235, _0x344fd4, _0x3526f2, _0x40bc31, _0x36049e, _0x540e26) {
  const {
    enableIPv6: _0x498a97,
    lengthMin: _0x40837b,
    lengthMax: _0x2b5a04,
    intervalMin: _0x5eec61,
    intervalMax: _0x9b4632,
    proxyIP: _0x248d51
  } = _0x1e1b55;
  const _0x4a8a22 = '/tr' + getRandomPath(0x10) + (_0x248d51 ? '/' + btoa(_0x248d51) : '');
  const _0x1324f6 = !!globalThis.defaultHttpsPorts.includes(_0x344fd4);
  const _0xf5438c = {
    'type': "trojan",
    'password': globalThis.trojanPassword,
    'server': _0x5c0235,
    'server_port': +_0x344fd4,
    'domain_strategy': _0x498a97 ? 'prefer_ipv4' : 'ipv4_only',
    'tls': {
      'alpn': 'http/1.1',
      'enabled': true,
      'insecure': _0x36049e,
      'server_name': _0x40bc31,
      'utls': {
        'enabled': true,
        'fingerprint': 'randomized'
      }
    },
    'transport': {
      'early_data_header_name': 'Sec-WebSocket-Protocol',
      'max_early_data': 0xa00,
      'headers': {
        'Host': _0x3526f2
      },
      'path': _0x4a8a22,
      'type': 'ws'
    },
    'tag': _0x4da5a9
  };
  if (!_0x1324f6) {
    delete _0xf5438c.tls;
  }
  if (_0x540e26) {
    _0xf5438c.tls_fragment = {
      'enabled': true,
      'size': _0x40837b + '-' + _0x2b5a04,
      'sleep': _0x5eec61 + '-' + _0x9b4632
    };
  }
  return _0xf5438c;
}
__defProp(buildSingBoxTrojanOutbound, "name", {
  'value': "buildSingBoxTrojanOutbound",
  'configurable': true
});
function buildSingBoxWarpOutbound(_0x5b939b, _0x1556d6, _0x193602, _0x2b22c3, _0x36dfc8, _0x19ee13) {
  const _0x4cd087 = /\[(.*?)\]/;
  const _0x2a0292 = /[^:]*$/;
  const _0x2c909b = _0x2b22c3.includes('[') ? _0x2b22c3.match(_0x4cd087)[0x1] : _0x2b22c3.split(':')[0x0];
  const _0x22c803 = _0x2b22c3.includes('[') ? +_0x2b22c3.match(_0x2a0292)[0x0] : +_0x2b22c3.split(':')[0x1];
  const {
    warpEnableIPv6: _0x3b1f37,
    hiddifyNoiseMode: _0x13fca2,
    noiseCountMin: _0x90b92c,
    noiseCountMax: _0x103654,
    noiseSizeMin: _0x10e1bc,
    noiseSizeMax: _0x27b153,
    noiseDelayMin: _0x340a07,
    noiseDelayMax: _0x3d3bb6
  } = _0x5b939b;
  const {
    warpIPv6: _0x3963c3,
    reserved: _0x872f6e,
    publicKey: _0x5b0e27,
    privateKey: _0x36cfa0
  } = extractWireguardParams(_0x1556d6, _0x36dfc8);
  const _0x320a1c = {
    'local_address': ["172.16.0.2/32", _0x3963c3],
    'mtu': 0x500,
    'peer_public_key': _0x5b0e27,
    'private_key': _0x36cfa0,
    'reserved': _0x872f6e,
    'server': _0x2c909b,
    'server_port': _0x22c803,
    'domain_strategy': _0x3b1f37 ? "prefer_ipv4" : "ipv4_only",
    'type': 'wireguard',
    'detour': _0x36dfc8,
    'tag': _0x193602
  };
  if (_0x19ee13 === "hiddify") {
    Object.assign(_0x320a1c, {
      'fake_packets_mode': _0x13fca2,
      'fake_packets': _0x90b92c === _0x103654 ? _0x90b92c : _0x90b92c + '-' + _0x103654,
      'fake_packets_size': _0x10e1bc === _0x27b153 ? _0x10e1bc : _0x10e1bc + '-' + _0x27b153,
      'fake_packets_delay': _0x340a07 === _0x3d3bb6 ? _0x340a07 : _0x340a07 + '-' + _0x3d3bb6
    });
  }
  return _0x320a1c;
}
__defProp(buildSingBoxWarpOutbound, "name", {
  'value': "buildSingBoxWarpOutbound",
  'configurable': true
});
function buildSingBoxChainOutbound(_0x55de34, _0x518fb7) {
  if (["socks", "http"].includes(_0x55de34.protocol)) {
    const {
      protocol: _0x126e25,
      server: _0x5eaa31,
      port: _0x597cae,
      user: _0x5915ea,
      pass: _0x2cf470
    } = _0x55de34;
    const _0x1154fe = {
      'type': _0x126e25,
      'tag': '',
      'server': _0x5eaa31,
      'server_port': +_0x597cae,
      'username': _0x5915ea,
      'password': _0x2cf470,
      'detour': ''
    };
    if (_0x126e25 === 'socks') {
      _0x1154fe.version = '5';
    }
    return _0x1154fe;
  }
  const {
    server: _0x1fc4ef,
    port: _0x4355d9,
    uuid: _0x34f231,
    flow: _0x52ba48,
    security: _0x11ae69,
    type: _0x37e0a2,
    sni: _0x68f228,
    fp: _0x38f5ec,
    alpn: _0x3f4a29,
    pbk: _0x25914e,
    sid: _0x44b16c,
    headerType: _0x56de29,
    host: _0x459826,
    path: _0x45f988,
    serviceName: _0x2f5deb
  } = _0x55de34;
  const _0x1f37bc = {
    'type': "vless",
    'tag': '',
    'server': _0x1fc4ef,
    'server_port': +_0x4355d9,
    'domain_strategy': _0x518fb7 ? "prefer_ipv4" : "ipv4_only",
    'uuid': _0x34f231,
    'flow': _0x52ba48,
    'detour': ''
  };
  if (_0x11ae69 === 'tls' || _0x11ae69 === "reality") {
    const _0x2ce76c = _0x3f4a29 ? _0x3f4a29?.["split"](',')["filter"](_0x2d5331 => _0x2d5331 !== 'h2') : [];
    _0x1f37bc.tls = {
      'enabled': true,
      'server_name': _0x68f228,
      'insecure': false,
      'alpn': _0x2ce76c,
      'utls': {
        'enabled': true,
        'fingerprint': _0x38f5ec
      }
    };
    if (_0x11ae69 === 'reality') {
      _0x1f37bc.tls.reality = {
        'enabled': true,
        'public_key': _0x25914e,
        'short_id': _0x44b16c
      };
      delete _0x1f37bc.tls.alpn;
    }
  }
  if (_0x56de29 === "http") {
    const _0x5d2d97 = _0x459826?.['split'](',');
    _0x1f37bc.transport = {
      'type': "http",
      'host': _0x5d2d97,
      'path': _0x45f988,
      'method': "GET",
      'headers': {
        'Connection': ["keep-alive"],
        'Content-Type': ["application/octet-stream"]
      }
    };
  }
  if (_0x37e0a2 === 'ws') {
    const _0x36755a = _0x45f988?.["split"]("?ed=")[0x0];
    const _0x186bce = +_0x45f988?.["split"]("?ed=")[0x1] || 0x0;
    _0x1f37bc.transport = {
      'type': 'ws',
      'path': _0x36755a,
      'headers': {
        'Host': _0x459826
      },
      'max_early_data': _0x186bce,
      'early_data_header_name': "Sec-WebSocket-Protocol"
    };
  }
  if (_0x37e0a2 === "grpc") {
    _0x1f37bc.transport = {
      'type': "grpc",
      'service_name': _0x2f5deb
    };
  }
  return _0x1f37bc;
}
__defProp(buildSingBoxChainOutbound, "name", {
  'value': 'buildSingBoxChainOutbound',
  'configurable': true
});
async function getSingBoxWarpConfig(_0x5a9d59, _0x42163c, _0x21cd74) {
  const {
    proxySettings: _0x512dbe,
    warpConfigs: _0x3db3ae
  } = await getDataset(_0x5a9d59, _0x42163c);
  const {
    warpEndpoints: _0x269101
  } = _0x512dbe;
  const _0x254699 = structuredClone(singboxConfigTemp);
  const _0x3158f9 = _0x21cd74 === "hiddify" ? " Pro " : " ";
  const _0x5ca29a = buildSingBoxDNS(_0x512dbe, undefined, true, "💦 Warp" + _0x3158f9 + "- Best Ping 🚀");
  const {
    rules: _0xb9df2a,
    rule_set: _0x227b90
  } = buildSingBoxRoutingRules(_0x512dbe);
  _0x254699.dns.servers = _0x5ca29a.servers;
  _0x254699.dns.rules = _0x5ca29a.rules;
  if (_0x5ca29a.fakeip) {
    _0x254699.dns.fakeip = _0x5ca29a.fakeip;
  }
  _0x254699.route.rules = _0xb9df2a;
  _0x254699.route.rule_set = _0x227b90;
  const _0x2eee02 = _0x254699.outbounds[0x0];
  const _0x1f5a5e = _0x254699.outbounds[0x1];
  _0x2eee02.outbounds = ["💦 Warp" + _0x3158f9 + "- Best Ping 🚀", "💦 WoW" + _0x3158f9 + "- Best Ping 🚀"];
  _0x254699.outbounds.splice(0x2, 0x0, structuredClone(_0x1f5a5e));
  const _0x12c76b = _0x254699.outbounds[0x2];
  _0x1f5a5e.tag = "💦 Warp" + _0x3158f9 + "- Best Ping 🚀";
  _0x1f5a5e.interval = _0x512dbe.bestWarpInterval + 's';
  _0x12c76b.tag = "💦 WoW" + _0x3158f9 + "- Best Ping 🚀";
  _0x12c76b.interval = _0x512dbe.bestWarpInterval + 's';
  const _0x57c99c = [];
  const _0x3be7f9 = [];
  _0x269101.split(',').forEach((_0x44d243, _0x50e968) => {
    const _0x26e4b7 = "💦 " + (_0x50e968 + 0x1) + " - Warp 🇮🇷";
    const _0x938eb2 = "💦 " + (_0x50e968 + 0x1) + " - WoW 🌍";
    const _0x1211f7 = buildSingBoxWarpOutbound(_0x512dbe, _0x3db3ae, _0x26e4b7, _0x44d243, '', _0x21cd74);
    const _0x2d0e58 = buildSingBoxWarpOutbound(_0x512dbe, _0x3db3ae, _0x938eb2, _0x44d243, _0x26e4b7, _0x21cd74);
    _0x254699.outbounds.push(_0x2d0e58, _0x1211f7);
    _0x57c99c.push(_0x26e4b7);
    _0x3be7f9.push(_0x938eb2);
    _0x1f5a5e.outbounds.push(_0x26e4b7);
    _0x12c76b.outbounds.push(_0x938eb2);
  });
  _0x2eee02.outbounds.push(..._0x57c99c, ..._0x3be7f9);
  return new Response(JSON.stringify(_0x254699, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getSingBoxWarpConfig, "name", {
  'value': "getSingBoxWarpConfig",
  'configurable': true
});
async function getSingBoxCustomConfig(_0x12ca4b, _0x5e6d6d, _0x47dfb3) {
  const {
    proxySettings: _0x5a8b29
  } = await getDataset(_0x12ca4b, _0x5e6d6d);
  let _0x557784;
  const {
    cleanIPs: _0x485d2b,
    ports: _0x3fc5df,
    vlessConfigs: _0x5ee92f,
    trojanConfigs: _0x5394e6,
    outProxy: _0x181813,
    outProxyParams: _0x3ffafb,
    customCdnAddrs: _0x5b3da3,
    customCdnHost: _0x305408,
    customCdnSni: _0x87a598,
    bestVLESSTrojanInterval: _0x28ad4d,
    enableIPv6: _0x25d545
  } = _0x5a8b29;
  if (_0x181813) {
    const _0x3c1e83 = JSON.parse(_0x3ffafb);
    try {
      _0x557784 = buildSingBoxChainOutbound(_0x3c1e83, _0x25d545);
    } catch (_0x5c41fd) {
      console.log("An error occured while parsing chain proxy: ", _0x5c41fd);
      _0x557784 = undefined;
      await _0x5e6d6d.bpb.put("proxySettings", JSON.stringify({
        ..._0x5a8b29,
        'outProxy': '',
        'outProxyParams': {}
      }));
    }
  }
  const _0x2fc25c = await getConfigAddresses(_0x485d2b, _0x25d545);
  const _0x20ad17 = _0x5b3da3 ? _0x5b3da3.split(',') : [];
  const _0x24a077 = [..._0x2fc25c, ..._0x20ad17];
  const _0x3099e5 = structuredClone(singboxConfigTemp);
  const _0x370bf3 = buildSingBoxDNS(_0x5a8b29, _0x24a077, false, _0x557784 ? "proxy-1" : "✅ Selector");
  const {
    rules: _0x34282d,
    rule_set: _0x5dfd61
  } = buildSingBoxRoutingRules(_0x5a8b29);
  _0x3099e5.dns.servers = _0x370bf3.servers;
  _0x3099e5.dns.rules = _0x370bf3.rules;
  if (_0x370bf3.fakeip) {
    _0x3099e5.dns.fakeip = _0x370bf3.fakeip;
  }
  _0x3099e5.route.rules = _0x34282d;
  _0x3099e5.route.rule_set = _0x5dfd61;
  const _0x38a05a = _0x3099e5.outbounds[0x0];
  const _0x1cc292 = _0x3099e5.outbounds[0x1];
  _0x38a05a.outbounds = ["💦 Best Ping 💥"];
  _0x1cc292.interval = _0x28ad4d + 's';
  _0x1cc292.tag = "💦 Best Ping 💥";
  const _0x5af291 = _0x3fc5df.filter(_0x534365 => _0x47dfb3 ? globalThis.defaultHttpsPorts.includes(_0x534365) : true);
  let _0x1428be = 0x1;
  const _0x300982 = [...(_0x5ee92f ? ["VLESS"] : []), ...(_0x5394e6 ? ["Trojan"] : [])];
  _0x300982.forEach(_0x1bfc45 => {
    let _0x30ff1d = 0x1;
    _0x5af291.forEach(_0x5d8e70 => {
      _0x24a077.forEach(_0x4c64bf => {
        let _0x57d8b0;
        let _0x51dc38;
        const _0x109296 = _0x20ad17.includes(_0x4c64bf);
        const _0x4f6785 = _0x109296 ? 'C' : _0x47dfb3 ? 'F' : '';
        const _0x5ed553 = _0x109296 ? _0x87a598 : randomUpperCase(globalThis.hostName);
        const _0x10aa56 = _0x109296 ? _0x305408 : globalThis.hostName;
        const _0x219d43 = generateRemark(_0x30ff1d, _0x5d8e70, _0x4c64bf, _0x485d2b, _0x1bfc45, _0x4f6785);
        if (_0x1bfc45 === 'VLESS') {
          _0x57d8b0 = buildSingBoxVLESSOutbound(_0x5a8b29, _0x557784 ? "proxy-" + _0x1428be : _0x219d43, _0x4c64bf, _0x5d8e70, _0x10aa56, _0x5ed553, _0x109296, _0x47dfb3);
          _0x3099e5.outbounds.push(_0x57d8b0);
        }
        if (_0x1bfc45 === "Trojan") {
          _0x51dc38 = buildSingBoxTrojanOutbound(_0x5a8b29, _0x557784 ? "proxy-" + _0x1428be : _0x219d43, _0x4c64bf, _0x5d8e70, _0x10aa56, _0x5ed553, _0x109296, _0x47dfb3);
          _0x3099e5.outbounds.push(_0x51dc38);
        }
        if (_0x557784) {
          const _0x2a046d = structuredClone(_0x557784);
          _0x2a046d.tag = _0x219d43;
          _0x2a046d.detour = "proxy-" + _0x1428be;
          _0x3099e5.outbounds.push(_0x2a046d);
        }
        _0x38a05a.outbounds.push(_0x219d43);
        _0x1cc292.outbounds.push(_0x219d43);
        _0x1428be++;
        _0x30ff1d++;
      });
    });
  });
  return new Response(JSON.stringify(_0x3099e5, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': 'no-store'
    }
  });
}
__defProp(getSingBoxCustomConfig, "name", {
  'value': "getSingBoxCustomConfig",
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
    'tag': "tun-in",
    'address': ["172.18.0.1/28", "fdfe:dcba:9876::1/126"],
    'mtu': 0x2328,
    'auto_route': true,
    'strict_route': true,
    'stack': 'mixed',
    'endpoint_independent_nat': true,
    'sniff': true,
    'sniff_override_destination': true
  }, {
    'type': 'mixed',
    'tag': 'mixed-in',
    'listen': '0.0.0.0',
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
    'url': "https://www.gstatic.com/generate_204",
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
    'server': 'time.apple.com',
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
      'external_ui_download_detour': "direct",
      'default_mode': "Rule"
    }
  }
};
async function buildClashDNS(_0x8dbed, _0x478c71, _0x43279c) {
  const {
    remoteDNS: _0x32d593,
    localDNS: _0x32dd71,
    vlessTrojanFakeDNS: _0x1748b4,
    outProxyParams: _0xc7d345,
    enableIPv6: _0x42c0a3,
    warpFakeDNS: _0xe5f41b,
    warpEnableIPv6: _0x5984cd,
    bypassIran: _0xb9309a,
    bypassChina: _0x52243f,
    bypassRussia: _0x138518,
    customBypassRules: _0x4f4ac7,
    customBlockRules: _0x5a24f1
  } = _0x8dbed;
  const _0x974273 = _0x5984cd ? ['1.1.1.1', "1.0.0.1", "[2606:4700:4700::1111]", '[2606:4700:4700::1001]'] : ['1.1.1.1', '1.0.0.1'];
  const _0x4ccbf1 = _0x1748b4 && !_0x43279c || _0xe5f41b && _0x43279c;
  const _0x263f91 = _0x42c0a3 && !_0x43279c || _0x5984cd && _0x43279c;
  const _0x25be06 = _0x4f4ac7.split(',').filter(_0x20fe2b => isDomain(_0x20fe2b));
  const _0x593fc8 = _0xb9309a || _0x52243f || _0x138518;
  const _0x2307e4 = [{
    'rule': _0xb9309a,
    'geosite': 'ir'
  }, {
    'rule': _0x52243f,
    'geosite': 'cn'
  }, {
    'rule': _0x138518,
    'geosite': 'ru'
  }];
  const _0x37a3ad = {
    'enable': true,
    'listen': '0.0.0.0:1053',
    'ipv6': _0x263f91,
    'respect-rules': true,
    'use-hosts': true,
    'use-system-hosts': false,
    'nameserver': _0x43279c ? _0x974273.map(_0x55b75c => _0x478c71 ? _0x55b75c + "#💦 Warp - Best Ping 🚀" : _0x55b75c + "#✅ Selector") : [_0x478c71 ? _0x32d593 + '#proxy-1' : _0x32d593 + "#✅ Selector"],
    'proxy-server-nameserver': [_0x32dd71 + "#DIRECT"]
  };
  if (_0x478c71 && !_0x43279c) {
    const _0x51e5a6 = JSON.parse(_0xc7d345).server;
    if (isDomain(_0x51e5a6)) {
      _0x37a3ad["nameserver-policy"] = {
        [_0x51e5a6]: _0x478c71 ? _0x32d593 + "#proxy-1" : _0x32d593 + "#✅ Selector"
      };
    }
  }
  if (_0x593fc8) {
    const _0x258e2b = [];
    _0x2307e4.forEach(({
      rule: _0x11fb77,
      geosite: _0x1280b2
    }) => {
      if (_0x11fb77) {
        _0x258e2b.push(_0x1280b2);
      }
    });
    _0x37a3ad["nameserver-policy"] = {
      ..._0x37a3ad["nameserver-policy"],
      ["rule-set:" + _0x258e2b.join(',')]: [_0x32dd71 + '#DIRECT']
    };
  }
  _0x25be06.forEach(_0x1e8912 => {
    _0x37a3ad['nameserver-policy'] = {
      ..._0x37a3ad["nameserver-policy"],
      ['+.' + _0x1e8912]: [_0x32dd71 + "#DIRECT"]
    };
  });
  if (_0x4ccbf1) {
    Object.assign(_0x37a3ad, {
      'enhanced-mode': 'fake-ip',
      'fake-ip-range': "198.18.0.1/16",
      'fake-ip-filter': ["geosite:private"]
    });
  }
  return _0x37a3ad;
}
__defProp(buildClashDNS, "name", {
  'value': 'buildClashDNS',
  'configurable': true
});
function buildClashRoutingRules(_0x1fe38b) {
  const {
    bypassLAN: _0x2f979e,
    bypassIran: _0x4b7728,
    bypassChina: _0x4b6c07,
    bypassRussia: _0x40f082,
    blockAds: _0x32ee45,
    blockPorn: _0x2e1f68,
    blockUDP443: _0x9dd4bb,
    customBypassRules: _0x4958d5,
    customBlockRules: _0x45f23c
  } = _0x1fe38b;
  const _0xb6b1ba = _0x4958d5 ? _0x4958d5.split(',') : [];
  const _0xde22a4 = _0x45f23c ? _0x45f23c.split(',') : [];
  const _0x4c52fe = [{
    'rule': _0x2f979e,
    'type': 'direct',
    'noResolve': true,
    'ruleProvider': {
      'format': "yaml",
      'geosite': "private",
      'geoip': "private-cidr",
      'geositeURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.yaml",
      'geoipURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.yaml"
    }
  }, {
    'rule': _0x4b7728,
    'type': 'direct',
    'ruleProvider': {
      'format': "text",
      'geosite': 'ir',
      'geoip': 'ir-cidr',
      'geositeURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ir.txt',
      'geoipURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ircidr.txt"
    }
  }, {
    'rule': _0x4b6c07,
    'type': "direct",
    'ruleProvider': {
      'format': "yaml",
      'geosite': 'cn',
      'geoip': "cn-cidr",
      'geositeURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml",
      'geoipURL': 'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml'
    }
  }, {
    'rule': _0x40f082,
    'type': "direct",
    'ruleProvider': {
      'format': "yaml",
      'geosite': 'ru',
      'geoip': "ru-cidr",
      'geositeURL': "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ru.yaml",
      'geoipURL': 'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/ru.yaml'
    }
  }, {
    'rule': true,
    'type': 'block',
    'ruleProvider': {
      'format': "text",
      'geosite': "malware",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware.txt"
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleProvider': {
      'format': 'text',
      'geosite': "phishing",
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing.txt"
    }
  }, {
    'rule': true,
    'type': "block",
    'ruleProvider': {
      'format': "text",
      'geosite': 'cryptominers',
      'geositeURL': "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/cryptominers.txt"
    }
  }, {
    'rule': _0x32ee45,
    'type': 'block',
    'ruleProvider': {
      'format': 'text',
      'geosite': 'ads',
      'geositeURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ads.txt'
    }
  }, {
    'rule': _0x2e1f68,
    'type': "block",
    'ruleProvider': {
      'format': "text",
      'geosite': "nsfw",
      'geositeURL': 'https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/nsfw.txt'
    }
  }];
  function _0x2be5d4(_0x123b56, _0x3ce3d0, _0x16201e, _0x102fd7) {
    const _0xb3ba73 = _0x3ce3d0 === 'text' ? 'txt' : _0x3ce3d0;
    return {
      [_0x123b56]: {
        'type': "http",
        'format': _0x3ce3d0,
        'behavior': _0x16201e,
        'url': _0x102fd7,
        'path': "./ruleset/" + _0x123b56 + '.' + _0xb3ba73,
        'interval': 0x15180
      }
    };
  }
  __defProp(_0x2be5d4, "name", {
    'value': "buildRuleProvider",
    'configurable': true
  });
  const _0x90d1d = [];
  const _0x393d98 = [];
  const _0x1dc971 = [];
  const _0x5853fe = [];
  const _0x350ed0 = {};
  _0x4c52fe.forEach(({
    rule: _0x5217bc,
    type: _0x239540,
    ruleProvider: _0x37f1b9,
    noResolve: _0xcf2b96
  }) => {
    const {
      geosite: _0x142760,
      geoip: _0x3806df,
      geositeURL: _0x597299,
      geoipURL: _0x53850a,
      format: _0x5434d2
    } = _0x37f1b9;
    if (_0x5217bc) {
      if (_0x142760) {
        const _0x24ec80 = _0x239540 === 'direct' ? _0x90d1d : _0x1dc971;
        _0x24ec80.push("RULE-SET," + _0x142760 + ',' + (_0x239540 === "direct" ? "DIRECT" : "REJECT"));
        const _0x11b645 = _0x2be5d4(_0x142760, _0x5434d2, "domain", _0x597299);
        Object.assign(_0x350ed0, _0x11b645);
      }
      if (_0x3806df) {
        const _0x1823f9 = _0x239540 === "direct" ? _0x393d98 : _0x5853fe;
        _0x1823f9.push("RULE-SET," + _0x3806df + ',' + (_0x239540 === "direct" ? "DIRECT" : "REJECT") + (_0xcf2b96 ? ",no-resolve" : ''));
        const _0x440d48 = _0x2be5d4(_0x3806df, _0x5434d2, "ipcidr", _0x53850a);
        Object.assign(_0x350ed0, _0x440d48);
      }
    }
  });
  const _0x45a0f8 = __defProp((_0x452b7c, _0x479448) => {
    if (isDomain(_0x452b7c)) {
      return "DOMAIN-SUFFIX," + _0x452b7c + ',' + _0x479448;
    } else {
      const _0x3962a0 = isIPv4(_0x452b7c) ? "IP-CIDR" : "IP-CIDR6";
      const _0x20ebc8 = isIPv6(_0x452b7c) ? _0x452b7c.replace(/\[|\]/g, '') : _0x452b7c;
      const _0x167d50 = _0x452b7c.includes('/') ? '' : isIPv4(_0x452b7c) ? "/32" : '/128';
      return _0x3962a0 + ',' + _0x20ebc8 + _0x167d50 + ',' + _0x479448 + ',no-resolve';
    }
  }, "name", {
    'value': "generateRule",
    'configurable': true
  });
  [..._0xb6b1ba, ..._0xde22a4].forEach((_0x448c40, _0x162b37) => {
    const _0x10da12 = _0x162b37 < _0xb6b1ba.length;
    const _0x203a95 = _0x10da12 ? 'DIRECT' : 'REJECT';
    const _0xb4d2b9 = _0x10da12 ? isDomain(_0x448c40) ? _0x90d1d : _0x393d98 : isDomain(_0x448c40) ? _0x1dc971 : _0x5853fe;
    _0xb4d2b9.push(_0x45a0f8(_0x448c40, _0x203a95));
  });
  const _0x11f58a = [..._0x90d1d, ..._0x393d98, ..._0x1dc971, ..._0x5853fe];
  if (_0x9dd4bb) {
    _0x11f58a.push('AND,((NETWORK,udp),(DST-PORT,443)),REJECT');
  }
  _0x11f58a.push("MATCH,✅ Selector");
  return {
    'rules': _0x11f58a,
    'ruleProviders': _0x350ed0
  };
}
__defProp(buildClashRoutingRules, "name", {
  'value': "buildClashRoutingRules",
  'configurable': true
});
function buildClashVLESSOutbound(_0x5146b9, _0x1e8134, _0x55cf77, _0xe22ac4, _0x2d24b2, _0x4ee05d, _0x3a57a4) {
  const _0x366e7e = !!globalThis.defaultHttpsPorts.includes(_0x55cf77);
  const _0x3f19fe = isIPv6(_0x1e8134) ? _0x1e8134.replace(/\[|\]/g, '') : _0x1e8134;
  const _0x1555a9 = {
    'name': _0x5146b9,
    'type': 'vless',
    'server': _0x3f19fe,
    'port': +_0x55cf77,
    'uuid': globalThis.userID,
    'tls': _0x366e7e,
    'network': 'ws',
    'udp': true,
    'ws-opts': {
      'path': _0x4ee05d,
      'headers': {
        'host': _0xe22ac4
      },
      'max-early-data': 0xa00,
      'early-data-header-name': 'Sec-WebSocket-Protocol'
    }
  };
  if (_0x366e7e) {
    Object.assign(_0x1555a9, {
      'servername': _0x2d24b2,
      'alpn': ['h2', "http/1.1"],
      'client-fingerprint': 'random',
      'skip-cert-verify': _0x3a57a4
    });
  }
  return _0x1555a9;
}
__defProp(buildClashVLESSOutbound, "name", {
  'value': "buildClashVLESSOutbound",
  'configurable': true
});
function buildClashTrojanOutbound(_0x503dd4, _0x541784, _0x4693b8, _0x16c8df, _0x232c42, _0x546de1, _0x50073f) {
  const _0x32b3d3 = isIPv6(_0x541784) ? _0x541784.replace(/\[|\]/g, '') : _0x541784;
  return {
    'name': _0x503dd4,
    'type': "trojan",
    'server': _0x32b3d3,
    'port': +_0x4693b8,
    'password': globalThis.trojanPassword,
    'network': 'ws',
    'udp': true,
    'ws-opts': {
      'path': _0x546de1,
      'headers': {
        'host': _0x16c8df
      },
      'max-early-data': 0xa00,
      'early-data-header-name': "Sec-WebSocket-Protocol"
    },
    'sni': _0x232c42,
    'alpn': ['h2', "http/1.1"],
    'client-fingerprint': 'random',
    'skip-cert-verify': _0x50073f
  };
}
__defProp(buildClashTrojanOutbound, "name", {
  'value': "buildClashTrojanOutbound",
  'configurable': true
});
function buildClashWarpOutbound(_0x609fa1, _0x3ecc8d, _0x34c532, _0x5ddadc) {
  const _0xe9759f = /\[(.*?)\]/;
  const _0x29958a = /[^:]*$/;
  const _0x217515 = _0x34c532.includes('[') ? _0x34c532.match(_0xe9759f)[0x1] : _0x34c532.split(':')[0x0];
  const _0x5878eb = _0x34c532.includes('[') ? +_0x34c532.match(_0x29958a)[0x0] : +_0x34c532.split(':')[0x1];
  const {
    warpIPv6: _0x50128b,
    reserved: _0x58cfe8,
    publicKey: _0x1e2c64,
    privateKey: _0x6764fb
  } = extractWireguardParams(_0x609fa1, _0x5ddadc);
  return {
    'name': _0x3ecc8d,
    'type': "wireguard",
    'ip': '172.16.0.2/32',
    'ipv6': _0x50128b,
    'private-key': _0x6764fb,
    'server': _0x217515,
    'port': _0x5878eb,
    'public-key': _0x1e2c64,
    'allowed-ips': ["0.0.0.0/0", '::/0'],
    'reserved': _0x58cfe8,
    'udp': true,
    'mtu': 0x500,
    'dialer-proxy': _0x5ddadc
  };
}
__defProp(buildClashWarpOutbound, "name", {
  'value': 'buildClashWarpOutbound',
  'configurable': true
});
function buildClashChainOutbound(_0x119cf6) {
  if (["socks", "http"].includes(_0x119cf6.protocol)) {
    const {
      protocol: _0x329ade,
      server: _0x18df14,
      port: _0x1dc81b,
      user: _0x589251,
      pass: _0x2c6b4a
    } = _0x119cf6;
    const _0x18b8dd = _0x329ade === "socks" ? "socks5" : _0x329ade;
    return {
      'name': '',
      'type': _0x18b8dd,
      'server': _0x18df14,
      'port': +_0x1dc81b,
      'dialer-proxy': '',
      'username': _0x589251,
      'password': _0x2c6b4a
    };
  }
  const {
    server: _0xdb0c5,
    port: _0x5733ec,
    uuid: _0x5f5de1,
    flow: _0x4b890a,
    security: _0xedef14,
    type: _0x320709,
    sni: _0x9b79c6,
    fp: _0x3f96b1,
    alpn: _0x1db335,
    pbk: _0x5c9dc9,
    sid: _0x450824,
    headerType: _0x188b9a,
    host: _0x4077a9,
    path: _0x249f61,
    serviceName: _0x56040e
  } = _0x119cf6;
  const _0xcb61b7 = {
    'name': "💦 Chain Best Ping 💥",
    'type': "vless",
    'server': _0xdb0c5,
    'port': +_0x5733ec,
    'udp': true,
    'uuid': _0x5f5de1,
    'flow': _0x4b890a,
    'network': _0x320709,
    'dialer-proxy': "💦 Best Ping 💥"
  };
  if (_0xedef14 === "tls") {
    const _0x5bd956 = _0x1db335 ? _0x1db335?.['split'](',') : [];
    Object.assign(_0xcb61b7, {
      'tls': true,
      'servername': _0x9b79c6,
      'alpn': _0x5bd956,
      'client-fingerprint': _0x3f96b1
    });
  }
  if (_0xedef14 === 'reality') {
    Object.assign(_0xcb61b7, {
      'tls': true,
      'servername': _0x9b79c6,
      'client-fingerprint': _0x3f96b1,
      'reality-opts': {
        'public-key': _0x5c9dc9,
        'short-id': _0x450824
      }
    });
  }
  if (_0x188b9a === 'http') {
    const _0x3a225f = _0x249f61?.['split'](',');
    _0xcb61b7["http-opts"] = {
      'method': "GET",
      'path': _0x3a225f,
      'headers': {
        'Connection': ['keep-alive'],
        'Content-Type': ["application/octet-stream"]
      }
    };
  }
  if (_0x320709 === 'ws') {
    const _0x46894d = _0x249f61?.["split"]("?ed=")[0x0];
    const _0x2ffbc6 = +_0x249f61?.["split"]("?ed=")[0x1];
    _0xcb61b7["ws-opts"] = {
      'path': _0x46894d,
      'headers': {
        'Host': _0x4077a9
      },
      'max-early-data': _0x2ffbc6,
      'early-data-header-name': 'Sec-WebSocket-Protocol'
    };
  }
  if (_0x320709 === 'grpc') {
    _0xcb61b7["grpc-opts"] = {
      'grpc-service-name': _0x56040e
    };
  }
  return _0xcb61b7;
}
__defProp(buildClashChainOutbound, "name", {
  'value': 'buildClashChainOutbound',
  'configurable': true
});
async function getClashWarpConfig(_0x5165b9, _0x894207) {
  const {
    proxySettings: _0x4bcdc6,
    warpConfigs: _0x5e752a
  } = await getDataset(_0x5165b9, _0x894207);
  const {
    warpEndpoints: _0x3a6af2
  } = _0x4bcdc6;
  const _0x31de8d = structuredClone(clashConfigTemp);
  _0x31de8d.dns = await buildClashDNS(_0x4bcdc6, true, true);
  const {
    rules: _0xf8a0dc,
    ruleProviders: _0xedab8d
  } = buildClashRoutingRules(_0x4bcdc6);
  _0x31de8d.rules = _0xf8a0dc;
  _0x31de8d["rule-providers"] = _0xedab8d;
  const _0x1cf57f = _0x31de8d['proxy-groups'][0x0];
  const _0x549117 = _0x31de8d["proxy-groups"][0x1];
  _0x1cf57f.proxies = ["💦 Warp - Best Ping 🚀", "💦 WoW - Best Ping 🚀"];
  _0x549117.name = "💦 Warp - Best Ping 🚀";
  _0x549117.interval = +_0x4bcdc6.bestWarpInterval;
  _0x31de8d["proxy-groups"].push(structuredClone(_0x549117));
  const _0x1ce198 = _0x31de8d["proxy-groups"][0x2];
  _0x1ce198.name = "💦 WoW - Best Ping 🚀";
  let _0x2e2392 = [];
  let _0x343ade = [];
  _0x3a6af2.split(',').forEach((_0x45a259, _0x4dfb13) => {
    const _0x2b21be = "💦 " + (_0x4dfb13 + 0x1) + " - Warp 🇮🇷";
    const _0x35f3de = "💦 " + (_0x4dfb13 + 0x1) + " - WoW 🌍";
    const _0xb7f947 = buildClashWarpOutbound(_0x5e752a, _0x2b21be, _0x45a259, '');
    const _0x35ad10 = buildClashWarpOutbound(_0x5e752a, _0x35f3de, _0x45a259, _0x2b21be);
    _0x31de8d.proxies.push(_0x35ad10, _0xb7f947);
    _0x2e2392.push(_0x2b21be);
    _0x343ade.push(_0x35f3de);
    _0x549117.proxies.push(_0x2b21be);
    _0x1ce198.proxies.push(_0x35f3de);
  });
  _0x1cf57f.proxies.push(..._0x2e2392, ..._0x343ade);
  return new Response(JSON.stringify(_0x31de8d, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/plain;charset=utf-8",
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getClashWarpConfig, "name", {
  'value': "getClashWarpConfig",
  'configurable': true
});
async function getClashNormalConfig(_0x5300c5, _0x1fce0e) {
  const {
    proxySettings: _0x2d3e64
  } = await getDataset(_0x5300c5, _0x1fce0e);
  let _0x448540;
  const {
    resolvedRemoteDNS: _0x294cf2,
    cleanIPs: _0x220048,
    proxyIP: _0xaf1791,
    ports: _0x556efa,
    vlessConfigs: _0x305c61,
    trojanConfigs: _0x1f469b,
    outProxy: _0x466b28,
    outProxyParams: _0x570c16,
    customCdnAddrs: _0x1d6748,
    customCdnHost: _0x30e5eb,
    customCdnSni: _0x3e46b7,
    bestVLESSTrojanInterval: _0x6bd34c,
    enableIPv6: _0x1c6482
  } = _0x2d3e64;
  if (_0x466b28) {
    const _0x40a3bf = JSON.parse(_0x570c16);
    try {
      _0x448540 = buildClashChainOutbound(_0x40a3bf);
    } catch (_0x358352) {
      console.log("An error occured while parsing chain proxy: ", _0x358352);
      _0x448540 = undefined;
      await _0x1fce0e.bpb.put("proxySettings", JSON.stringify({
        ..._0x2d3e64,
        'outProxy': '',
        'outProxyParams': {}
      }));
    }
  }
  const _0xf826cd = structuredClone(clashConfigTemp);
  if (_0x294cf2.server) {
    _0xf826cd.hosts = {
      [_0x294cf2.server]: _0x294cf2.staticIPs
    };
  } else {
    delete _0xf826cd.hosts;
  }
  const {
    rules: _0x2adfaa,
    ruleProviders: _0x157cd8
  } = buildClashRoutingRules(_0x2d3e64);
  _0xf826cd.dns = await buildClashDNS(_0x2d3e64, _0x448540, false);
  _0xf826cd.rules = _0x2adfaa;
  _0xf826cd['rule-providers'] = _0x157cd8;
  const _0x4b097b = _0xf826cd["proxy-groups"][0x0];
  const _0xe6bc59 = _0xf826cd['proxy-groups'][0x1];
  _0x4b097b.proxies = ["💦 Best Ping 💥"];
  _0xe6bc59.name = "💦 Best Ping 💥";
  _0xe6bc59.interval = +_0x6bd34c;
  const _0x11445c = await getConfigAddresses(_0x220048, _0x1c6482);
  const _0x4bd2e3 = _0x1d6748 ? _0x1d6748.split(',') : [];
  const _0x5353f4 = [..._0x11445c, ..._0x4bd2e3];
  let _0x36f402 = 0x1;
  let _0x2c6c71;
  const _0x80da2e = [...(_0x305c61 ? ["VLESS"] : []), ...(_0x1f469b ? ["Trojan"] : [])];
  _0x80da2e.forEach(_0x22c1e8 => {
    let _0x3b168b = 0x1;
    _0x556efa.forEach(_0xa6e12c => {
      _0x5353f4.forEach(_0x567b73 => {
        let _0x1e1202;
        let _0x48ce23;
        const _0x4eba3a = _0x4bd2e3.includes(_0x567b73);
        const _0x43468a = _0x4eba3a ? 'C' : '';
        const _0x54285c = _0x4eba3a ? _0x3e46b7 : randomUpperCase(globalThis.hostName);
        const _0x4bb767 = _0x4eba3a ? _0x30e5eb : globalThis.hostName;
        const _0xcbcb75 = generateRemark(_0x3b168b, _0xa6e12c, _0x567b73, _0x220048, _0x22c1e8, _0x43468a).replace(" : ", " - ");
        if (_0x22c1e8 === "VLESS") {
          _0x2c6c71 = '/' + getRandomPath(0x10) + (_0xaf1791 ? '/' + btoa(_0xaf1791) : '');
          _0x1e1202 = buildClashVLESSOutbound(_0x448540 ? "proxy-" + _0x36f402 : _0xcbcb75, _0x567b73, _0xa6e12c, _0x4bb767, _0x54285c, _0x2c6c71, _0x4eba3a);
          _0xf826cd.proxies.push(_0x1e1202);
          _0x4b097b.proxies.push(_0xcbcb75);
          _0xe6bc59.proxies.push(_0xcbcb75);
        }
        if (_0x22c1e8 === "Trojan" && globalThis.defaultHttpsPorts.includes(_0xa6e12c)) {
          _0x2c6c71 = "/tr" + getRandomPath(0x10) + (_0xaf1791 ? '/' + btoa(_0xaf1791) : '');
          _0x48ce23 = buildClashTrojanOutbound(_0x448540 ? "proxy-" + _0x36f402 : _0xcbcb75, _0x567b73, _0xa6e12c, _0x4bb767, _0x54285c, _0x2c6c71, _0x4eba3a);
          _0xf826cd.proxies.push(_0x48ce23);
          _0x4b097b.proxies.push(_0xcbcb75);
          _0xe6bc59.proxies.push(_0xcbcb75);
        }
        if (_0x448540) {
          let _0x1e59c5 = structuredClone(_0x448540);
          _0x1e59c5.name = _0xcbcb75;
          _0x1e59c5['dialer-proxy'] = "proxy-" + _0x36f402;
          _0xf826cd.proxies.push(_0x1e59c5);
        }
        _0x36f402++;
        _0x3b168b++;
      });
    });
  });
  return new Response(JSON.stringify(_0xf826cd, null, 0x4), {
    'status': 0xc8,
    'headers': {
      'Content-Type': 'text/plain;charset=utf-8',
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getClashNormalConfig, "name", {
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
    'server': "time.apple.com",
    'port': 0x7b,
    'interval': 0x1e
  }
};
async function getNormalConfigs(_0x2db7c2, _0x52b98c) {
  const {
    proxySettings: _0x1c8ce4
  } = await getDataset(_0x2db7c2, _0x52b98c);
  const {
    cleanIPs: _0x4fbaf1,
    proxyIP: _0x18f23d,
    ports: _0x10e518,
    vlessConfigs: _0x13e29b,
    trojanConfigs: _0x110a25,
    outProxy: _0x15ff57,
    customCdnAddrs: _0x2a8ee3,
    customCdnHost: _0x32e184,
    customCdnSni: _0x2654d5,
    enableIPv6: _0x277c93
  } = _0x1c8ce4;
  let _0x203ed4 = '';
  let _0x51e79d = '';
  let _0x220db6 = '';
  let _0x190a15 = 0x1;
  const _0x229fad = await getConfigAddresses(_0x4fbaf1, _0x277c93);
  const _0x5b25d3 = _0x2a8ee3 ? _0x2a8ee3.split(',') : [];
  const _0x23560d = [..._0x229fad, ..._0x5b25d3];
  const _0x48acaf = globalThis.client === 'singbox' ? "http/1.1" : 'h2,http/1.1';
  const _0x38d11f = encodeURIComponent(globalThis.trojanPassword);
  const _0x11e664 = globalThis.client === 'singbox' ? "&eh=Sec-WebSocket-Protocol&ed=2560" : encodeURIComponent("?ed=2560");
  _0x10e518.forEach(_0x6c5111 => {
    _0x23560d.forEach((_0x13fadc, _0x2c5ecc) => {
      const _0x3ad237 = _0x2c5ecc > _0x229fad.length - 0x1;
      const _0x4b75d8 = _0x3ad237 ? 'C' : '';
      const _0x554402 = _0x3ad237 ? _0x2654d5 : randomUpperCase(globalThis.hostName);
      const _0x96a7ee = _0x3ad237 ? _0x32e184 : globalThis.hostName;
      const _0x3125e8 = '' + getRandomPath(0x10) + (_0x18f23d ? '/' + encodeURIComponent(btoa(_0x18f23d)) : '') + _0x11e664;
      const _0x2b3c8a = encodeURIComponent(generateRemark(_0x190a15, _0x6c5111, _0x13fadc, _0x4fbaf1, 'VLESS', _0x4b75d8));
      const _0x4b3968 = encodeURIComponent(generateRemark(_0x190a15, _0x6c5111, _0x13fadc, _0x4fbaf1, 'Trojan', _0x4b75d8));
      const _0x3a054b = globalThis.defaultHttpsPorts.includes(_0x6c5111) ? "&security=tls&sni=" + _0x554402 + "&fp=randomized&alpn=" + _0x48acaf : "&security=none";
      if (_0x13e29b) {
        _0x203ed4 += '' + atob('dmxlc3M6Ly8=') + globalThis.userID + '@' + _0x13fadc + ':' + _0x6c5111 + '?path=/' + _0x3125e8 + "&encryption=none&host=" + _0x96a7ee + "&type=ws" + _0x3a054b + '#' + _0x2b3c8a + "\n";
      }
      if (_0x110a25) {
        _0x51e79d += '' + atob("dHJvamFuOi8v") + _0x38d11f + '@' + _0x13fadc + ':' + _0x6c5111 + "?path=/tr" + _0x3125e8 + "&host=" + _0x96a7ee + "&type=ws" + _0x3a054b + '#' + _0x4b3968 + "\n";
      }
      _0x190a15++;
    });
  });
  if (_0x15ff57) {
    let _0x202e53 = '#' + encodeURIComponent("💦 Chain proxy 🔗");
    if (_0x15ff57.startsWith("socks") || _0x15ff57.startsWith("http")) {
      const _0x429332 = /^(?:socks|http):\/\/([^@]+)@/;
      const _0x3d07b6 = _0x15ff57.match(_0x429332);
      const _0x30140a = _0x3d07b6 ? _0x3d07b6[0x1] : false;
      _0x220db6 = _0x30140a ? _0x15ff57.replace(_0x30140a, btoa(_0x30140a)) + _0x202e53 : _0x15ff57 + _0x202e53;
    } else {
      _0x220db6 = _0x15ff57.split('#')[0x0] + _0x202e53;
    }
  }
  const _0x4fce07 = btoa(_0x203ed4 + _0x51e79d + _0x220db6);
  return new Response(_0x4fce07, {
    'status': 0xc8,
    'headers': {
      'Content-Type': 'text/plain;charset=utf-8',
      'Cache-Control': "no-store, no-cache, must-revalidate, proxy-revalidate",
      'CDN-Cache-Control': "no-store"
    }
  });
}
__defProp(getNormalConfigs, "name", {
  'value': "getNormalConfigs",
  'configurable': true
});
async function renderSecretsPage() {
  const _0x24d83d = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>User Login</title>\n    <style>\n        :root {\n            --color: black;\n            --primary-color: #09639f;\n            --header-color: #09639f; \n            --background-color: #fff;\n            --form-background-color: #f9f9f9;\n            --lable-text-color: #333;\n            --h2-color: #3b3b3b;\n            --border-color: #ddd;\n            --input-background-color: white;\n            --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        body {\n            font-family: system-ui;\n            background-color: var(--background-color);\n            position: relative;\n            overflow: hidden;\n            text-align: center;\n        }\n        body.dark-mode {\n            --color: white;\n            --primary-color: #09639F;\n            --header-color: #3498DB; \n            --background-color: #121212;\n            --form-background-color: #121212;\n            --lable-text-color: #DFDFDF;\n            --h2-color: #D5D5D5;\n            --border-color: #353535;\n            --input-background-color: #252525;\n            --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        .container {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 90%;\n        }\n        h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); margin: 0 auto 30px; text-shadow: var(--header-shadow); }        \n        h2 { text-align: center; color: var(--h2-color) }\n        strong { color: var(--lable-text-color); }\n        .output-container {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            margin: 15px 0;\n            padding: 10px;\n            background-color: var(--input-background-color);\n            color: var(--lable-text-color);\n            border: 1px solid var(--border-color);\n            border-radius: 5px;\n            font-family: monospace;\n            font-size: 1rem;\n            word-wrap: break-word;\n        }\n        .output { flex: 1; margin-right: 10px; overflow-wrap: break-word; }\n        .copy-icon {\n            cursor: pointer;\n            font-size: 1.2rem;\n            color: var(--primary-color);\n            transition: color 0.2s;\n        }\n        .copy-icon:hover { color: #2980b9; }\n        .form-container {\n            background: var(--form-background-color);\n            border: 1px solid var(--border-color);\n            border-radius: 10px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 20px;\n        }\n        .form-control { margin-bottom: 15px; display: flex; align-items: center; }\n        button {\n            display: block;\n            width: 100%;\n            padding: 10px;\n            font-size: 16px;\n            font-weight: 600;\n            border: none;\n            border-radius: 5px;\n            color: white;\n            background-color: var(--primary-color);\n            cursor: pointer;\n            transition: background-color 0.3s ease;\n        }\n        .button:hover,\n        button:focus {\n            background-color: #2980b9;\n            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n            transform: translateY(-2px);\n        }\n        button.button:hover { color: white; }\n        .button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n        @media only screen and (min-width: 768px) {\n            .container { width: 40%; }\n        }\n    </style>\n    </head>\n    <body>\n        <div class=\"container\">\n            <h1>BPB Panel <span style=\"font-size: smaller;\">" + globalThis.panelVersion + "</span> 💦</h1>\n            <div class=\"form-container\">\n                <h2>Secrets generator</h2>\n                <div>\n                    <strong>Random UUID</strong>\n                    <div class=\"output-container\">\n                        <span id=\"uuid\" class=\"output\"></span>\n                        <span class=\"copy-icon\" onclick=\"copyToClipboard('uuid')\">📋</span>\n                    </div>\n                </div>\n                <div>\n                    <strong>Random Trojan Password</strong>\n                    <div class=\"output-container\">\n                        <span id=\"trojan-password\" class=\"output\"></span>\n                        <span class=\"copy-icon\" onclick=\"copyToClipboard('trojan-password')\">📋</span>\n                    </div>\n                </div>\n                <button class=\"button\" onclick=\"generateCredentials()\">Generate Again ♻️</button>\n            </div>\n        </div>\n        <script>\n            localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n            function generateUUID() {\n                return crypto.randomUUID();\n            }\n    \n            function generateStrongPassword() {\n                const charset =\n                    \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?\";\n                let password = '';\n                const randomValues = new Uint8Array(16);\n                crypto.getRandomValues(randomValues);\n    \n                for (let i = 0; i < 16; i++) {\n                    password += charset[randomValues[i] % charset.length];\n                }\n                return password;\n            }\n    \n            function generateCredentials() {\n                const uuid = generateUUID();\n                const password = generateStrongPassword();\n    \n                document.getElementById('uuid').textContent = uuid;\n                document.getElementById('trojan-password').textContent = password;\n            }\n    \n            function copyToClipboard(elementId) {\n                const textToCopy = document.getElementById(elementId).textContent;\n                navigator.clipboard.writeText(textToCopy)\n                    .then(() => alert('✅ Copied to clipboard!'))\n                    .catch(err => console.error('Failed to copy text:', err));\n            }\n    \n            generateCredentials();\n        </script>\n    </body>\n    </html>";
  return new Response(_0x24d83d, {
    'status': 0xc8,
    'headers': {
      'Content-Type': "text/html"
    }
  });
}
__defProp(renderSecretsPage, "name", {
  'value': "renderSecretsPage",
  'configurable': true
});
var worker_default = {
  async 'fetch'(_0x32f8c, _0x541587) {
    try {
      initializeParams(_0x32f8c, _0x541587);
      const _0x360e9e = _0x32f8c.headers.get('Upgrade');
      if (!_0x360e9e || _0x360e9e !== 'websocket') {
        switch (globalThis.pathName) {
          case "/update-warp":
            return await updateWarpConfigs(_0x32f8c, _0x541587);
          case "/sub/" + globalThis.userID:
            if (globalThis.client === "sfa") {
              return await getSingBoxCustomConfig(_0x32f8c, _0x541587, false);
            }
            if (globalThis.client === "clash") {
              return await getClashNormalConfig(_0x32f8c, _0x541587);
            }
            if (globalThis.client === "xray") {
              return await getXrayCustomConfigs(_0x32f8c, _0x541587, false);
            }
            return await getNormalConfigs(_0x32f8c, _0x541587);
          case "/fragsub/" + globalThis.userID:
            return globalThis.client === "hiddify" ? await getSingBoxCustomConfig(_0x32f8c, _0x541587, true) : await getXrayCustomConfigs(_0x32f8c, _0x541587, true);
          case "/warpsub/" + globalThis.userID:
            if (globalThis.client === 'clash') {
              return await getClashWarpConfig(_0x32f8c, _0x541587);
            }
            if (globalThis.client === "singbox" || globalThis.client === "hiddify") {
              return await getSingBoxWarpConfig(_0x32f8c, _0x541587, globalThis.client);
            }
            return await getXrayWarpConfigs(_0x32f8c, _0x541587, globalThis.client);
          case "/panel":
            return await handlePanel(_0x32f8c, _0x541587);
          case "/login":
            return await login(_0x32f8c, _0x541587);
          case '/logout':
            return new Response('Success', {
              'status': 0xc8,
              'headers': {
                'Set-Cookie': "jwtToken=; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
                'Content-Type': "text/plain"
              }
            });
          case "/panel/password":
            return await resetPassword(_0x32f8c, _0x541587);
          case "/my-ip":
            return await getMyIP(_0x32f8c);
          case "/secrets":
            return await renderSecretsPage();
          default:
            return await fallback(_0x32f8c);
        }
      } else {
        return globalThis.pathName.startsWith('/tr') ? await trojanOverWSHandler(_0x32f8c) : await vlessOverWSHandler(_0x32f8c);
      }
    } catch (_0x16d3c7) {
      return await renderErrorPage(_0x16d3c7);
    }
  }
};
export { worker_default as default };
