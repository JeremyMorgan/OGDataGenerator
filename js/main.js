(function() {

    var title = null;
    var url = null;
    var author = null;
    var description = null;
    var imageurl = null;
    var twitterhandle = null;

})();

function generateTags() {

    // populate values
    title = document.getElementById('title').value;
    url = document.getElementById('url').value;
    author = document.getElementById('author').value;
    description = document.getElementById('description').value;
    imageurl = document.getElementById('imageurl').value;
    twitterhandle = document.getElementById('twitterhandle').value;

    var metaOutput = makeMetaData();
    var openGraphOutput = makeOpenGraphData();
    var twitterOutput = makeTwitterData();

    document.getElementById('outputrow').style.display = "block";
    document.getElementById('output').innerHTML = metaOutput + openGraphOutput + twitterOutput;
}

function makeMetaData() {

    var metaOutput = "";

    console.log(url);

    if (url !== null && url != '') {
        metaOutput += '<link rel="canonical" href="' + url + '" />' + "\n";
    }
    if (description !== null && description != '') {
        metaOutput += '<meta name="description" content="' + description + '" />' + "\n";
        metaOutput += '<meta itemprop="description" content="' + description + '" />' + "\n";
    }
    if (author !== null && author != '') {
        metaOutput += '<meta name="author" content="' + author + '" />' + "\n";
        metaOutput += '<meta property="article:author" content="' + author + '" />' + "\n";
    }
    if (title !== null && title != '') {
        metaOutput += '<meta itemprop="name" content="' + title + '" />' + "\n";
    }

    return metaOutput;
}

function makeOpenGraphData() {

    var openGraphOutput = "";

    openGraphOutput += '<meta property="og:type" content="article">' + "\n";

    if (url !== null && url != '') {
        openGraphOutput += '<meta property="og:url" content="' + url + '">' + "\n";
    }

    if (title !== null && title != '') {
        openGraphOutput += '<meta property="og:title" content="' + title + '">' + "\n";
    }

    if (description !== null && description != '') {
        openGraphOutput += '<meta property="og:description" content="' + description + '">' + "\n";
    }

    if (imageurl !== null && imageurl != '') {
        openGraphOutput += '<meta property="og:image" content="' + imageurl + '">' + "\n";
        openGraphOutput += '<meta property="og:image:secure_url" content="' + imageurl + '">' + "\n";
        openGraphOutput += '<meta property="og:image:type" content="image/jpeg">' + "\n";
        openGraphOutput += '<meta property="og:image:width" content="1200">' + "\n";
        openGraphOutput += '<meta property="og:image:height" content="675">' + "\n";
    }

    return openGraphOutput;
}

function makeTwitterData() {

    twitterDataOutput = ""; // init
    twitterDataOutput += '<meta name=twitter:card content="summary_large_image">' + "\n";

    if (twitterhandle !== null && twitterhandle != '') {
        twitterDataOutput += '<meta name=twitter:site content="' + twitterhandle + '">' + "\n";
        twitterDataOutput += '<meta name=twitter:creator content="' + twitterhandle + '">' + "\n";
    }

    if (title !== null && title != '') {
        twitterDataOutput += '<meta name=twitter:title content="' + title + '">' + "\n";
    }

    if (description !== null && description != '') {
        twitterDataOutput += '<meta name=twitter:description content="' + description + '">' + "\n";
    }

    if (imageurl !== null && imageurl != '') {
        twitterDataOutput += '<meta name=twitter:image content="' + imageurl + '">' + "\n";
    }

    if (url !== null && url != '') {
        twitterDataOutput += '<meta name=twitter:url content="' + url + '"></meta>' + "\n";
    }

    return twitterDataOutput;
}