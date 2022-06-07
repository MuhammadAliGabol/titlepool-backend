const User = require('../models/user');

const me = async (req, res) => {
    const userId = req.user.id
    const user = await User.findById(userId);
    if(user) {
        res.status(200).json(user)  
    }  
    else{    
        res.status(400).json({       
            message:"Bad request"    
        })  
    }
}

module.exports = {
    me,
}