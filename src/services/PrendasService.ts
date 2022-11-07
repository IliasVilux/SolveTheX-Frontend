import Api from './Api'

export default {
    getPrendas(){
        return Api().get('/ropa')
    },
    addPrenda(prenda: object){
        Api().post('/ropa', prenda)
    },
    deletePrenda(id: Int16Array){
        Api().delete('/ropa/' + id)
    }
}