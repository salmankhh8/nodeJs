var indexof;

if(typeof Array.prototype.indexOf==="function"){
    indexof= function(haystack, needle){
        return haystack.indexOf(needle)
    }
}