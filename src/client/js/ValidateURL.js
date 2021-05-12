function ValidateURL(url) {

    if(!url.length == 0){
        try {
            new URL(url);
        } catch (e) {
            // console.error(e);
            // alert("Invalid URL !");
            return false;
        }
        return true
    }else{
        // alert("Enter URL !");
    }
    return false;
}

// export { ValidateURL }
module.exports = {ValidateURL};
