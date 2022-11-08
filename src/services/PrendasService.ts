import Api from './Api'

export default {
    getPrendas(){
        return Api().get('/ropa')
    },
    addPrenda(prenda: object){
        Api().post('/ropa', prenda)
    },
    updatePrenda(prenda: object){
        Api().put('/ropa/' + prenda.id, prenda)
        window.location.reload();

    },
    deletePrenda(id: Int16Array){
        Api().delete('/ropa/' + id)
        window.location.reload();
    }
}