const category = require("../models/category");
const Joi = require('joi');
const categoryController = {
    index:(req,res)=>{
        category.getAll((err,data)=>{
            if(err){
                res.send(new Error(err));
            } else{
            
                res.render('admin/category',{data});
            }
        })
       
    },

    add :(req,res)=>{

        res.render('admin/category-add');
    },

    create: async (req,res)=>{
        const unique = (value,helpers)=>{
           
            category.filter(value,(err,data)=>{
                console.log(data);
                if(data.length >0){
                    return helpers.error('Đã tồn tài');
                }
                return value;
            })
            return value;
        };

        const schema = Joi.object({
            name: Joi.string().min(3).max(100).required().custom(unique),

        });
        
       
        try {
            const value = await schema.validateAsync({ name: req.body.name});
            category.create(req.body,(err,data)=>{
                if(err){
                    res.send(err);
                } else{
                    res.redirect('/admin/category');
                }
            })
        }
        catch (err) { 
            let errs = err.details;
            res.render('admin/category-add',{errs});
        }
       
    },

    edit: (req, res) => {
        category.getByID(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('admin/category-update', {category: data[0]});
            }
        });
    },

    update : (req, res) => {
        category.update(req.params.id, req.body, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/admin/category');
            }
        });
    },

    delete: (req, res) => {
        category.delete(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/admin/category');
            }
        });
    }
}
module.exports = categoryController;