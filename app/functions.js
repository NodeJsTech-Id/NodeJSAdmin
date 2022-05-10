const config = require("../modules/dashboard/configs")
const fetch = require('node-fetch')
const moment = require('moment')
const axios = require('axios')

async function loginByFetch() {
    var url = `${config.protocol}` + "://" + `${config.host}` + ":"+`${config.port}` +`${config.auth_endpoint}`;
    var body = {
        email: config.username,
        password: config.password
    }
    // console.log(url);
    // console.log(JSON.stringify(body))
    let result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: body
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.success == false) {
            console.log(moment().format('YYYY-MM-DD h:mm:ss a') + ": ");
            console.log("Login to API Server failed");
            console.log(data)
            // throw new Error(data.message);           
        } else {
            return data.data.access_token;
        }
    })
    .catch(err => {
        throw err;
    });
    return result;
}

function loginByAxios(){
    var url = `${config.protocol}` + "://" + `${config.host}` + ":"+`${config.port}` +`${config.auth_endpoint}`;
    var data = {
        email: config.username,
        password: config.password
    }

    axios
      .post(url, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(({data}) => {
        console.log(data);
    });
}

module.exports = {
    loginByFetch,
    loginByAxios
}