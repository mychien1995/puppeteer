let getAbsoluteUrl = function(host, relativeUrl){
	if(!relativeUrl) return host;
	if(relativeUrl.startsWith('http:') || relativeUrl.startsWith('https:')) return relativeUrl;
	var baseUrl = host;
	if(baseUrl.endsWith('/')) baseUrl = baseUrl.trimEnd('/');
	var path = relativeUrl;
	if(path.startsWith('/')) path = path.trimStart('/');
	return baseUrl + '/' + path;
}


exports.getAbsoluteUrl = getAbsoluteUrl;