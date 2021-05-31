var Module = require("module");

(function (moduleWrapCopy) {
    Module.wrap = function (script) {
        script = "console.log('modifiedMWF');" + script;

        return moduleWrapCopy(script);
    };
})(Module.wrap);

require("./module.js"); 