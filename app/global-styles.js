import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /**
	Normalize
   */

   html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}

  /**
  */
  html,
  body {
	height: 100%;
	width: 100%;
	line-height: 1.5;
  }

  body {
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
	font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  /**
	Base.css
   */
	*, *::after, *::before {
		box-sizing: border-box;
	}

body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* Colors */
	--color-text: #000;
	--color-bg-main: #fff;
	--color-menu-item: #fff;
	--color-menu-item-hover: #e0f3ca;
	--color-bg-menu: #cbf3ee;
	--color-bg-facts: #000;
	--color-text-facts: #fff;
	--color-bg-img: #000;
	--color-bg-more-1: #fee9b1;
	--color-bg-more-2: #e0f3ca;
	--color-bg-more-3: #f3cae8;
	--color-bg-more-4: #cacaf3;
	--color-nav: #ddd;
	--color-nav-hover: #000;
	--color-link: #000;
	--color-link-hover: #333;
}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1) rotate(90deg);
	}
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
}

a:hover,
a:focus {
	color: var(--color-link-hover);
	outline: none;
}

.hidden {
	position: absolute;
	overflow: hidden;
	width: 0;
	height: 0;
	pointer-events: none;
}

button {
	border: 0;
	background: none;
	margin: 0;
	padding: 0;
	font-family: inherit;
	cursor: pointer;
	-webkit-appearance: none;
}

button:focus {
	outline: none;
}

.sections__header {
	padding: 2rem 3rem 0 2rem;
	display: flex;
}

.title {
	text-transform: lowercase;
	font-size: 1.35rem;
	margin: 0;
}

.menu {
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	z-index: 3000;
	display: grid;
	grid-template-columns: 100%;
	pointer-events: none;
	align-items: start;
}

.menu::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.9);
	right: 0;
	transition: opacity 0.3s;
	pointer-events: none;
	opacity: 0;
}

.menu--open::before {
	opacity: 1;
	pointer-events: auto;
}

.menu__inner {
	padding: 4rem 2rem 0 0;
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	list-style: none;
	opacity: 1;
	position: relative;
	text-align: right;
}

.menu__toggle {
	position: absolute;
	top: 0;
	right: 0;
	margin: 2.3rem 2rem;
	display: grid;
	grid-template: 100% / 100%;
	pointer-events: auto;
	cursor: pointer;
}

.menu__toggle-inner {
	display: block;
	grid-area: 1 / 1 / 1 / 1;
}

.menu__toggle-inner--close {
	opacity: 0;
	color: var(--color-menu-item);;
}

.menu__item {
	font-size: 2.25rem;
	margin: 0 0 1.5rem;
	font-weight: bold;
	opacity: 0;
}

.menu--open .menu__item {
	pointer-events: auto;
}

.menu__item-link {
	color: var(--color-menu-item);
}

.menu__item-link:hover {
	color: var(--color-menu-item-hover);
}

.sections__index,
.sections__nav {
	display: none;
}

.facts {
	display: none;
}

.section__content {
	padding: 2rem;
}

.section__title {
	font-size: 10vw;
	text-transform: lowercase;
	margin: 0;
	letter-spacing: -0.35vw;
	position: relative;
	overflow: hidden;
}

.section__title span {
	display: inline-block;
}

.section__description {
	line-height: 1.75;
	overflow: hidden;
	position: relative;
	padding: 0 2rem 0 0;
	font-weight: 300;
}

.section__description-inner {
	display: block;
}

.section__img {
	height: 45vh;
	pointer-events: none;
}

.section__img-inner {
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: 50% 50%;
}

.section__facts {
	padding: 2rem;
	margin: 0;
	list-style: none;
	background: var(--color-bg-facts);
	color: var(--color-text-facts);
}

.section__facts-item {
	margin: 0 0 2.5rem 0;
}

.section__facts-img {
	max-width: 200px;
	border-radius: 5px;
	display: block;
	cursor: pointer;
	margin: 4rem 0 2rem 0;
	position: relative;
}

.section__facts-img::before,
.section__facts-img::after {
	content: '';
	width: 100%;
	height: 100%;
	background: #2f2f2f;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
}

.section__facts-img::before {
	transform: rotate(3deg);
}

.section__facts-img::after {
	transform: rotate(-5deg);
}

.section__facts-img img {
	max-width: none;
	width: 100%;
}
.icon--grid {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 1.5rem;
	height: 1.5rem;
	margin: -0.75rem 0 0 -0.75rem;
}

.section__facts-title {
	font-size: 1em;
	margin: 0 0 0.5rem;
}

.section__facts-detail {
	font-weight: 300;
}

.section__facts-item--clickable {
	display: none;
}

.section__gallery {
	grid-area: 1 / 4 / 4 / 2;
	padding: 2rem;
	display: grid;
	grid-gap: 0.75rem;
	grid-template-columns: 50% 50%;
	grid-template-rows: 2rem 1fr 1fr 1fr;
	align-items: center;
	justify-content: center;
	z-index: 300;
	pointer-events: none;
	height: 100vh;
	background: var(--color-bg-facts);
}

.section__gallery-item {
	width: 100%;
	height: 100%;
	display: grid;
}

.section__gallery-item--title {
	grid-area: 1 / 1 / 2 / 3;
	color: #fff;
	font-size: 1em;
	margin: 0;
}

.section__gallery-item img {
	max-width: 100%;
	max-height: 100%;
	margin: auto 0;
	display: block;
}

.section__more {
	display: flex;
	align-items: stretch;
	overflow: hidden;
}

.section__more-inner {
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
}

.section__more-inner--bg1 {
	background-color: var(--color-bg-more-1);
}

.section__more-inner--bg2 {
	background-color: var(--color-bg-more-2);
}

.section__more-inner--bg3 {
	background-color: var(--color-bg-more-3);
}

.section__more-inner--bg4 {
	background-color: var(--color-bg-more-4);
}

.section__more-text {
	font-weight: bold;
	display: block;
	margin: 0 0 1rem 0;
}

.section__more-link {
	display: flex;
	cursor: pointer;
	font-weight: 300;
}

.section__more-linktext {
	margin: 0 0.5rem 0 0;
	line-height: 1;
}

.icon--arrowlong {
	width: 2rem;
	height: 1.25rem;
}

@media screen and (min-width: 55em) and (min-height: 40em) {
	.sections {
		height: 100vh;
		overflow: hidden;
		display: grid;
		grid-template-columns: 45% 55%;
		grid-template-rows: 6rem calc(30% - 2rem) calc(44% - 2rem) calc(26% - 2rem);
		grid-template-areas: 	"header expander"
								"sections-index expander"
								"... expander"
								"sections-nav expander";
	}
	.codrops-links {
		position: absolute;
		top: 0;
		right: 0;
	}
	.sections--factsopen .codrops-links {
		opacity: 0;
		pointer-events: none;
	}
	.codrops-icon {
		color: #fff;
	}
	.menu {
		grid-template-columns: 47% 53%;
	}
	.menu__toggle {
		right: 53%;
		margin: 2.3rem 4rem 0 0;
	}
	.menu__inner {
		padding: 4rem 4rem 0 0;
	}
	.facts {
		position: relative;
		grid-area: expander;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		pointer-events: none;
		z-index: 200;
	}
	.facts__toggle {
		font-weight: bold;
		cursor: pointer;
		width: 48%;
		padding: 0 0 0 5vw;
		margin: 0 0 0 2vw;
		height: 5rem;
		position: relative;
		display: grid;
		grid-template: 100% / 100%;
		color: var(--color-text-facts);
		pointer-events: auto;
	}
	.facts__toggle:hover {
		opacity: 0.6;
	}
	.facts__toggle-inner {
		text-transform: uppercase;
		font-size: 0.6rem;
		letter-spacing: 0.25rem;
		grid-area: 1 / 1 / 1 / 1;
		display: flex;
	}
	.facts__toggle-inner--less {
		opacity: 0;
	}
	.facts__toggle-text {
		line-height: 1.75;
		margin: 0 0 0 0.25rem;
	}
	.button-contentclose {
		position: absolute;
		top: 0;
		right: 0;
		margin: 2rem;
		opacity: 0;
		pointer-events: none;
		color: var(--color-text-facts);
	}
	.sections__header {
		grid-area: header;
	}
	.sections__index {
		font-weight: bold;
		font-size: 0.75rem;
		display: block;
		align-self: end;
		padding: 0 4rem 3rem 20%;
		grid-area: sections-index;
		display: flex;
		z-index: 1;
	}
	.sections__index-current {
		position: relative;
		overflow: hidden;
	}
	.sections__index-total {
		position: relative;
		margin: 0 0 0 8rem;
	}
	.sections__index-total::after {
		content: '';
		position: absolute;
		width: 6rem;
		height: 3px;
		top: calc(50% - 1.5px);
		right: calc(100% + 1rem);
		background: #000;
	}
	.sections__index-inner {
		display: block;
		width: 1.15rem;
	}
	.sections__nav {
		display: block;
		grid-area: sections-nav;
		z-index: 5;
		padding: 2rem 4rem 0;
		background: linear-gradient(0deg, #ffffff 90%, rgba(255,255,255,0));
	}
	.sections__nav-item {
		border: 2px solid var(--color-nav);
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		background: var(--color-bg-main);
	}
	.sections__nav-item:hover {
		border-color: var(--color-nav-hover);
	}
	.sections__nav-item .icon {
		width: 100%;
		height: 100%;
	}
	.section {
		pointer-events: none;
		grid-area: 1 / 1 / 5 / 4;
		display: grid;
		grid-template-columns: 47% 25% 28%;
		grid-template-rows: 39% 39% 22%;
		grid-template-areas: 	"... slide-image slide-image"
								"slide-content slide-image slide-image"
								"... ... more";
	}
	.section--current {
		pointer-events: auto;
	}
	.section__content {
		padding: 0 4rem;
		grid-area: slide-content;
	}
	.section__expander {
		grid-area: 1 / 2 / 4 / 4;
		background: var(--color-bg-facts);
		transform-origin: 0 0;
		left: -2vw;
		position: relative;
		z-index: 100;
	}
	.section__img {
		height: auto;
		grid-area: slide-image;
		overflow: hidden;
		z-index: 99;
	}
	.section:fist-of-type .section__img {
		background: var(--color-bg-img);
	}
	.section__facts-item--clickable {
		display: block;
	}
	.section__gallery {
		grid-template-columns: repeat(2, calc(200px + 2rem));
		grid-gap: 1rem;
		padding: 10vh 5vw;
		background: transparent;
		position: relative;
	}
	.section__gallery-item {
		padding: 0 0 0 1rem;
		opacity: 0;
	}
	.section__more {
		grid-area: more;
	}
	.section__facts {
		padding: 10vh 5vw;
		pointer-events: none;
		background: transparent;
		position: relative;
		z-index: 200;
		grid-area: 1 / 2 / 4 / 3;
	}
	.section__facts-detail {
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.section__more-inner {
		padding: 0;
	}
	.sections--factsopen .sections__nav,
	.sections--factsopen .section__facts-item--clickable .section__facts-img,
	.sections--factsopen .facts__toggle {
		pointer-events: none;
	}
	.sections--factsopen .button-contentclose,
	.section--current .section__facts-item--clickable,
	.sections--factsopen .section__gallery-item {
		pointer-events: auto;
	}
	.js .section:not(.section--current) {
		pointer-events: none;
	}
	.js .section:not(.section--current) .section__title span,
	.js .section:not(.section--current) .section__description,
	.js .section:not(.section--current) .section__img-inner,
	.js .section:not(.section--current) .section__more-inner,
	.js .section:not(.section--current) .section__more-text,
	.js .section:not(.section--current) .section__more-link,
	.js .section:not(.section--current) .section__facts-item {
		opacity: 0;
	}
}

@media screen and (max-width: 54.9em), screen and (max-height: 39.9em) {
	.js .section__title span,
	.js .section__description,
	.js .section__img-inner,
	.js .section__more-inner,
	.js .section__more-text,
	.js .section__more-link,
	.js .section__facts-item,
	.js .section__gallery-item {
		opacity: 1 !important;
		transform: none !important;
	}
	.codrops-icon .icon {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: 2px solid;
		padding: 0.5rem;
	}
}

`;

export default GlobalStyle;
