//obtener todo
const Register =require("./../models/Register");

//insertar nuevos registros
const insert =(req, res)=>{
    const student = new Register(req.body);
    student.save ((error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(201).json({
            msg: "creado",
            register:documents
        });
    });
};

//buscar por id
const getOneRegister= (req,res)=>{
    Register.findById(req.params.id, (error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(200).json({
            msg:"ok",
            registers:documents
        });
    });
}

//funcion de todos los registros guardados en la base
const getRegister = (req,res)=>{
    Register.find({}, (error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(200).json({
            msg:"ok",
            registers:documents
        });
    });
};

module.exports={
    getRegister,
    insert,
    getOneRegister
};