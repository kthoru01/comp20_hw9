var songs = [
	{
	"title"   : "Say You Won't Let Go",
	"artists" : ["James Arthur"],
	"genres"  : ["pop"],
	"year"    : 2016,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "Falling Like the Stars",
	"artists" : ["James Arthur"],
	"genres"  : ["pop"],
	"year"    : 2019,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "Tennessee Whiskey",
	"artists" : ["Chris Stapleton"],
	"genres"  : ["country"],
	"year"    : 2015,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "In Case You Didn't Know",
	"artists" : ["Brett Young"],
	"genres"  : ["country"],
	"year"    : 2017,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "10,000 Hours",
	"artists" : ["Dan and Shay", "Justin Bieber"],
	"genres"  : ["country"],
	"year"    : 2019,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "Beautiful People",
	"artists" : ["Ed Sheeran"],
	"genres"  : ["pop"],
	"year"    : 2019,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "Isn't She Lovely",
	"artists" : ["Stevie Wonder"],
	"genres"  : ["R&B", "soul"],
	"year"    : 1976,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "Sir Duke",
	"artists" : ["Stevie Wonder"],
	"genres"  : ["R&B"],
	"year"    : 1976,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "Superstition",
	"artists" : ["Stevie Wonder"],
	"genres"  : ["R&B", "soul"],
	"year"    : 1972,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	},

	{
	"title"   : "Signed Sealed Delivered",
	"artists" : ["Stevie Wonder"],
	"genres"  : ["soul"],
	"year"    : 1970,
	toJSON() {
		return "<b>" + this.title + "</b><br/>" + "Artist(s): " + this.artists + "<br/>"
	           + "Genre(s): " + this.genres + "<br/>" + "Released " + this.year}
	}
];