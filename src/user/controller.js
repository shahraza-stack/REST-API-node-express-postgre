const pool = require('../../db');
const queries = require ('../user/queries');

const getusers =(req, res) => {
    pool.query(queries.getUsers,(error,results)=> {
        if (error) throw error;
        res.status(200).json(results.rows);
    });

};

const getUserById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
const addUser = (req,res) =>{
    const { name, email, age } =req.body;

    //check if email exsist
    pool.query(queries.checkEmail,[email], (error,results) => {
        if(results.rows.length){
            res.send("Email exsists already..")
        }
        pool.query(
            queries.addUser, 
            [name, email, age], 
            (error,results)=>{
            if(error) throw error;
            res.status(200).send("User added..");
        })  
    })
}

const removeUser = (req,res) => {
    const id =parseInt(req.params.id);
    pool.query(queries.removeUser, [id], (error,results) =>{
        const noUserFound = !results.rows.length;
        if(noUserFound){
        res.send("User not exist");
        }

        pool.query(queries.removeUser, [id], (error,results)=>{
            if(error) throw error;
            res.status(200).send("User removed..")
        })

    } )
};
module.exports = {
    getusers,
    getUserById,
    addUser,
    removeUser,
};