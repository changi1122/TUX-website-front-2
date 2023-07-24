import { Remarkable } from 'remarkable';

export async function getMarkdownDocs(filename) {
    const fs = require('fs');
    const path = require('path');

    const fullPath = path.join(__dirname + '../../../../docs/', `${filename}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use remarkable to convert markdown into HTML string
    const md = new Remarkable({
        html:         true,        // Enable HTML tags in source
        xhtmlOut:     true,        // Use '/' to close single tags (<br />)
        breaks:       true,        // Convert '\n' in paragraphs into <br>
        langPrefix:   'language-',  // CSS language prefix for fenced blocks
      
        // Enable some language-neutral replacement + quotes beautification
        typographer:  false,
      
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
        quotes: '“”‘’',
      
        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed
        highlight: function (/*str, lang*/) { return ''; }
    });

    const contentHtml = md.render(fileContents);
  
    // Combine the data with the id and contentHtml
    return {
      filename,
      contentHtml
    };
  }