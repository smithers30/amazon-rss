var Watcher = require('rss-watcher');
var feed = 'https://camelcamelcamel.com/alerts/fa6ee759faec208d30dbefe7142213542ce0223d.xml';

var watcher = new Watcher(feed);

watcher.set({interval: 5});

watcher.on('new article', function (article) {
	if (article.title !== 'You have no price watch alerts yet.') {
		console.log('new article');
		console.log(article);
	}
});

watcher.run();