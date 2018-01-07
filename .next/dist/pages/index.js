'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostLink = function PostLink(props) {
	return _react2.default.createElement('li', {
		className: 'jsx-65420515'
	}, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?id=' + props.id }, _react2.default.createElement('a', {
		className: 'jsx-65420515'
	}, props.name)), _react2.default.createElement(_style2.default, {
		styleId: '65420515',
		css: ['li.jsx-65420515{list-style:none;margin:5px 0;}', 'a.jsx-65420515{text-decoration:none;color:red;}', 'a.jsx-65420515:hover{opacity:0.6;}']
	}));
};

var Index = function Index(props) {
	return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', {
		className: 'jsx-1479636525'
	}, 'Batman TV Shows'), _react2.default.createElement('ul', {
		className: 'jsx-1479636525'
	}, props.shows.map(function (_ref) {
		var show = _ref.show;
		return _react2.default.createElement(PostLink, { key: show.id, id: show.id, name: show.name });
	})), _react2.default.createElement(_style2.default, {
		styleId: '1479636525',
		css: ['h1.jsx-1479636525,a.jsx-1479636525{font-family:"Arial";color:green;}', 'ul.jsx-1479636525{padding:0;}']
	}));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	var data;
	return _regenerator2.default.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return _axios2.default.get('https://api.tvmaze.com/search/shows?q=batman').then(function (response) {
						return response.data;
					});

				case 2:
					data = _context.sent;

					console.log('Show data detched. Count: ' + data.length);

					return _context.abrupt('return', {
						shows: data
					});

				case 5:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
}));

exports.default = Index;