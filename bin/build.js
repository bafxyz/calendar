const JSCompiler = require('webcompiler').JSCompiler;
const SASSCompiler = require('webcompiler').SASSCompiler;
const js = new JSCompiler();
const sass = new SASSCompiler();
const join = require('path').join;
const srcDir = join(__dirname, '../src');
const libDir = join(__dirname, '../dist');
const livereload = require('webcompiler/lib/livereload').livereload;
const lr = livereload();
const watch = require('webcompiler').watch;
const logger = require('webcompiler/lib/logger');
const log = logger.log;
const consoleStyles = logger.consoleStyles;
const {red, green, blue, bold, underline} = consoleStyles;

// Watch styles
watch(srcDir, 'scss', () => {
  sass.fe(join(srcDir, 'style.scss'), join(libDir, 'style.css'), function(f) {
    lr(join(libDir, 'style.css'));
    log(bold(red('Styles updated')));
  });
});

// Watch scripts
watch(srcDir, 'js', () => {
  js.fe(join(srcDir, 'script.js'), join(libDir, 'script.js'), function() {
    lr(join(libDir, 'script.js'));
    log(bold(blue('Scripts updated')));
  });
});
