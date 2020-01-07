console.log('Running SW');
assets = [
	'js/categories.js',
	'js/Dice.js',
	'js/generalFunctions.js',
	'js/probabilityCalculations.js',
	'media/d1.png',
	'media/d2.png',
	'media/d3.png',
	'media/d4.png',
	'media/d5.png',
	'media/d6.png',
	'index.html',
	'./',
	'manifest.json',
	'sw.js'
];

self.addEventListener('install', evt => {
	caches.open('cache1').then(cache => {
		for (let i = 0; i < assets.length; i++) {
			console.log('Caching', assets[i]);
			cache.add(assets[i]).then(() => {
				console.log('Successfully cached', assets[i]);
			}).catch(err => {
				console.log('Could not cache', assets[i], ':', err);
			});
		}
	});
});

self.addEventListener('fetch', evt => {
	console.log('Fetching', evt.request);
	evt.respondWith(caches.match(evt.request).then(cacheRes => {
		console.log('Found cache:', cacheRes, 'for request:', evt.request);
		return cacheRes || fetch(evt.request);
	}).catch(err => {
		console.log('Error while fetching:', err);
	}));
});