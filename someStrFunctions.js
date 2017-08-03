var camelize = function(str){
    return str.replace(/\W+(.)/g, function(match, chr){
        return chr.toUpperCase();
    });
}
var lowerFirstLetter = function(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}
