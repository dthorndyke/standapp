window.STANDAPP = window.STANDAPP || {};
window.STANDAPP.styles = ['#' + STANDAPP.NAMESPACE + ' {',
      'position: fixed;',
      'top: 0;',
      'left: 0;',
      'width: 100%;',
      'height: 100%;',
      'z-index: 99998;',
      'background-color: rgba(0, 0, 0, .7);',
      'transition: all .3s ease;',
      'opacity: 0;',
  '}',
  '#' + STANDAPP.NAMESPACE + '.show {',
      'opacity: 1;',
  '}',
  '@-webkit-keyframes flash {',
    '0% {',
        'background-color: rgba(255, 0, 0, .5);',
    '}',
    '25% {',
        'background-color: rgba(0, 0, 255, .5);',
    '}',
    '50% {',
        'background-color: rgba(255, 0, 0, .5);',
    '}',
    '100% {',
        'background-color: rgba(0, 0, 255, .5);',
    '}',
  '}',
  '#' + STANDAPP.NAMESPACE + '.overtime {',
      '-webkit-animation-name: flash;',
      '-webkit-animation-duration: 500ms;',
      '-webkit-animation-iteration-count: infinite;',
      '-webkit-animation-timing-function: ease-in-out;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal {',
      'position: absolute;',
      'display: flex;',
      'flex-direction: column;',
      'top: 10%;',
      'left: 10%;',
      'width: 80%;',
      'height: 80%;',
      'background-color: white;',
      'border-radius: 2px;',
      'padding: 15px;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .header {',
      'display: flex;',
      'height: 65px;',
      'text-align: center;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .header #currentMember {',
      'display: inline-block;',
      'flex-grow: 1;',
      'margin: 0;',
      'line-height: 50px;',
      'font-size: 36px;',
      'color: #0073B1;',
      'transition: opacity .3s ease-in-out;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .header #currentMember.hide {',
      'opacity: 0;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .header .timer,',
  '#' + STANDAPP.NAMESPACE + ' .modal .header .master-timer {',
      'display: inline-block;',
      'height: 50px;',
      'margin-bottom: 15px;',
      'background-color: white;',
      'color: black;',
      'line-height: 50px;',
      'font-size: 28px;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .header .timer {',
      'padding: 0 15px;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .header .timer.active {',
      'background-color: black;',
      'color: white;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .header .timer.active.alert {',
      'background-color: red;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main.wrap {',
      'position: relative;',
      'display: flex;',
      'flex-grow: 1;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members {',
      'display: inline-block;',
      'list-style: none;',
      'padding: 0;',
      'background-color: #0091CA;',
      'color: white;',
      'border-radius: 2px;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal #toggle-shuffle {',
      'display: none;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .toggle-shuffle-wrap label {',
      'display:inline-block;',
      'width: 190px;',
      'margin: 10px 0;',
      'padding: 0;',
      'font-size: 16px;',
      'color: #0091CA;',
      'cursor: pointer;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .toggle-shuffle-wrap label .check {',
      'display: inline-block;',
      'position: relative;',
      'top: 5px;',
      'width: 20px;',
      'height: 20px;',
      'margin: 0;',
      'font-size: 18px;',
      'color: white;',
      'border: 1px solid #0073B1;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .toggle-shuffle-wrap label .check:before {',
      'content: " ";',
      'position: absolute;',
      'top: 1px;',
      'left: 6px;',
      'width: 5px;',
      'height: 12px;',
      'display: block;',
      'transform: rotate(45deg);',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal #toggle-shuffle:checked ~ label .check:before {',
      'border-bottom: 3px solid #0073B1;',
      'border-right: 3px solid #0073B1;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members .member {',
      'width: 175px;',
      'padding: 10px 10px 10px 15px;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members .member.gone {',
      'font-style: italic;',
      'color: rgba(255, 255, 255, .4);',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members .member.active,',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members .member:hover {',
      'background: #E6F7FF;',
      'color: black;',
      'font-style: normal;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members .member .ghx-info {',
      'float: right;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members .member .ghx-description {',
      'margin-left: 10px;',
      'color: rgba(255, 255, 255, .4);',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members .member.active .ghx-description,',
  '#' + STANDAPP.NAMESPACE + ' .modal .left-panel.members .member:hover .ghx-description {',
      'color: #707070;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main-board {',
      'position: relative;',
      'display: flex;',
      'flex-grow: 1;',
      'flex-direction: column;',
      'margin: 0px;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main-board .pause-overlay {',
      'position: absolute;',
      'display: flex;',
      'flex-direction: column;',
      'align-items: center;',
      'justify-content: center;',
      'z-index: 9998;',
      'width: 100%;',
      'height: 100%;',
      'top: 90px;',
      'left: 0;',
      'background-color: transparent;',
      'transition: opacity .3s ease;',
      'margin-left: -9999px',
  '}',
  '#' + STANDAPP.NAMESPACE + '.finished .modal .main-board .pause-overlay {',
      'display: none;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main-board .pause-overlay .headline {',
      'margin-top: -145px;',
      'font-size: 80px;',
      'font-weight: bold;',
      'color: rgba(0, 0, 0, .6)',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main-board .pause-overlay .subheadline {',
      'font-size: 25px;',
      'padding: 0;',
      'color: rgba(0, 0, 0, .6);',
      'white-space: nowrap;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main-board .pause-overlay .subheadline img {',
      'display: inline-block;',
      'position: relative;',
      'top: 10px;',
      'margin-right: 5px;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main-board .finished-overlay {',
      'position: absolute;',
      'display: none;',
      'flex-direction: column;',
      'align-items: center;',
      'justify-content: center;',
      'z-index: 9999;',
      'width: 100%;',
      'height: 100%;',
      'top: 90px;',
      'left: 0;',
      'background-color: transparent;',
      'transition: opacity .3s ease;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main-board .finished-overlay img {',
      'margin-top: -100px;',
      '-webkit-animation-name: rotate;',
      '-webkit-animation-duration: 1s;',
      '-webkit-animation-iteration-count:  infinite;',
      '-webkit-animation-timing-function: linear;',
  '}',
  '@-webkit-keyframes rotate {',
    'from {',
      '-webkit-transform: rotate(0deg);',
    '}',
    'to { ',
      '-webkit-transform: rotate(360deg);',
    '}',
  '}',
  '#' + STANDAPP.NAMESPACE + '.finished .modal .main-board .finished-overlay {',
      'display: flex;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal .main-board .ghx-swimlane {',
      'margin-bottom: 0;',
      'overflow: scroll;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal.standby .main-board .ghx-column-headers,',
  '#' + STANDAPP.NAMESPACE + ' .modal.standby .main-board .ghx-swimlane {',
      'opacity: .2;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .modal.standby .main-board .pause-overlay {',
      'margin-left: 0;',
      'opacity: 1;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .arrow-right {',
      'position: absolute;',
      'display: inline-block;',
      'top: 13px;',
      'right: 20px;',
      'width: 0;',
      'height: 0;',
      'border-top: 15px solid transparent;',
      'border-bottom: 15px solid transparent;',
      'border-left: 20px solid white;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' .pause {',
      'position: absolute;',
      'display: inline-block;',
      'top: 15px;',
      'right: 20px;',
      'width: 6px;',
      'height: 25px;',
      'border-right: 8px solid white;',
      'border-left: 8px solid white;',
  '}',
  '#' + STANDAPP.NAMESPACE + ' #superTrooper {',
      'position: fixed;',
      'z-index: 999;',
      'left: 50%;',
      'margin-left: -197px;',
      'bottom: -300px;',
      'transition: bottom 5s ease-in-out;',
  '}',
  '#' + STANDAPP.NAMESPACE + '.supertrooper #superTrooper {',
      'bottom: 0;',
  '}'

].join(' ');
