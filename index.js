function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.getElementById('nested').querySelector('div.target');
}

function deepestChild() {
	return document.getElementById('grand-node').querySelectorAll('div')[3];
}

function increaseRankBy(n) {
	const list = document.querySelectorAll('ul.ranked-list')
	for (let i = 0; i < list.length; i++) {
	   list[i].innerHTML = (i + 1).toString();
	}
}
