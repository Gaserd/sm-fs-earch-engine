const pool = require('../lib/db');

function search(search_string, func) {
	 pool.query(
	 	"SELECT * FROM university WHERE fts @@ to_tsquery('english',$1)", 
	 	[search_string],
	 	function(err, result) {	 
		    if(err) {
		    	func([])
		    } else {
		    	func(result.rows)
		    }
		}
	);
}

module.exports = search