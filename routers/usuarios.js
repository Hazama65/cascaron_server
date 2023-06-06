const {Router,request,response} = require('express'); 

const router = Router();

//obtener usuarios get

router.get('/',(req=request, res=response) => {
    res.status(200).json({
        msg:'get todos los usuarios'
    });
});
//crear usuarios pots
router.post('/',(req= request, res=response) => {
    res.status(200).json({
        msg:'post success'
    })
});
//obtener usuarios por id get
router.get('/:id',(req= request, res= response) => {
    res.status(200).json({
        msg:'get usuarios por id'
    });
});
//actualizar usuarios put upadate
router.put('/:id',(req= request, res= response) =>{
    res.status(200).json({
        msg:'put usuarios por id'
    });
});
//elimiar usuarios delete
router.delete('/:id',(req= request, res=response) => {
    res.status(200).json({
        msg:'delete usuario por id'
    })
});

module.exports = router;