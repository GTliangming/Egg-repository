
const marked = require('marked');
import hljs from 'highlight.js';
// import ' highlight.js/styles/github.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: code => {
    return hljs.highlightAuto(code).value;
  },
});

export const markedToHtml = (value: string): string => {
  if (!value) {
    return '';
  }
  return marked(value);
};
