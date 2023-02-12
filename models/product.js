const conn = require('../database/connect');

const product = {
    getAll: (cb) => {
        return conn.query("SELECT sp.*, dm.name as CateName FROM product sp JOIN category dm ON sp.category_id = dm.id ORDER BY id DESC", cb);
    },
    create: (data, file_name, cb) => {
        return conn.query(`INSERT INTO product (name, image, price,category_id,status,descirption ) VALUES ('${data.name}', '${file_name}', '${data.price}', '${data.category_id}' , '${data.status}' , '${data.descirption}');`, cb);
    },

    filter: async (category_id) => {
        let check = await conn.query(`SELECT * FROM product WHERE category_id = '${category_id}'`);
        console.log(check);
    },
    getByID: (id, cb) => {
        return conn.query(`SELECT * FROM product WHERE id = '${id}'`, cb);
    },

    update: (id, data, file_name, cb) => {
        return conn.query(`UPDATE profuct SET name='${data.name}',image='${file_name}',price='${data.price}',category_id='${data.category_id}',status='${data.status}',descirption='${data.descirption}' WHERE id = '${id}'`, cb);
    },

    delete: (id, cb) => {
        return conn.query(`DELETE FROM product WHERE id = '${id}'`, cb);
    }
}

module.exports = product;