var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
	title: {
		type: String,
		unique: true
	},
	caption: {
		type: String
	}
	notes: [{
		type: Schema.Types.ObjectId,
		ref: "Note"
	}]
});

var Article = mongoose.model("Articles", ArticlesSchema);

module.exports  = Article; 