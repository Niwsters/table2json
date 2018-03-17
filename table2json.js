// Credit to ccheney on GitHub: https://gist.github.com/ccheney/4389114
// Edits by Niwsters

var table2json = function (htmlStr, headerSelector) { 
  // Parse given HTML string to a jQuery object
  var $table = $($.parseHTML($.trim(htmlStr)));

  // Store all the headers to use as column names
  var headers = [];
  $table.find(headerSelector).each(function (i, n) {
    var $header = $(n);
    headers.push($header.text());
  });

  // Read all rows and put in a JSON object
  var rows = [];
  $table.find('tr').each(function (i, n) {
    var $row = $(n);

    var cols = {};
    for(var j in headers) {
      cols[headers[j]] = $row.find('td:eq(' + j + ')').text();
    }
    rows.push(cols);
  });

  // Remove first row because it's the row with headers
  rows.shift();

  // Convert JSON object to string and return
  return JSON.stringify(rows);
};
