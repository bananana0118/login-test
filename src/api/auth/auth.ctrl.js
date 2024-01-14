const { client } = require("../../psql");

exports.login = (ctx) => {
    ctx.body = "login";
};

exports.logout = (ctx) => {
    ctx.body = "logout";
};

exports.signUp = (ctx) => {
    ctx.body = "signUp";
    client.connect();

    const date = new Date();
    const json = {key:"안녕"}
    const query = {
        text: "INSERT INTO  users(name, address, birth, json_data, date) VALUES ($1, $2, $3, $4, $5)",
        values: ["홍길동","동일로 752","1997-01-18",json,date],
    };

    client
    .query(query)
    .then((res) => {
        console.log(res);
        client.end();
    })
    .catch((e) => console.error(e.stack));

};
