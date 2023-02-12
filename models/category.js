const conn = require('../database/connect');

const category = {
    getAll: (cb) => {
        return conn.query("SELECT * FROM category ORDER BY id DESC", cb);
    },
    create: (data, cb) => {

        return conn.query(`INSERT INTO category (name) VALUES ('${data.name}') `, cb);
    },

    filter: async (name) => {
        let check = await conn.query(`SELECT * FROM category WHERE name = '${name}'`);
        console.log(check);
    },
    getByID: (id, cb) => {
        return conn.query(`SELECT * FROM category WHERE id = '${id}'`, cb);
    },

    update: (id, data, cb) => {
        return conn.query(`UPDATE category SET name ='${data.name }' WHERE id = '${id}'`, cb);
    },

    delete: (id, cb) => {
        return conn.query(`DELETE FROM category WHERE id = '${id}'`, cb);
    }
}

module.exports = category;