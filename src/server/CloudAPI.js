const fetch = require('node-fetch');
var FormData = require('form-data');
const { response } = require('express');

const API_KEY = "d00d3da4628ec49a8839f948f203ca80";
const ENDPOINT = "https://api.meaningcloud.com/sentiment-2.1";

function getResult(url) {

    const formdata = new FormData();
    formdata.append("key", API_KEY);
    formdata.append("url", url);
    formdata.append("lang", "auto");  // 2-letter code, like en es fr ...

    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };


    return fetch(ENDPOINT, requestOptions)
    .then(res => res.json())
}


module.exports = getResult
