import httpCommon from "../http-common";


    const getlistArrondissement =() => {
        return httpCommon.get('/api/tree/listArrondissement');
    }

    const getlistGenre = () => {
        return httpCommon.get(`/api/tree/listArbreByGenre`);
    }




export default {getlistArrondissement,getlistGenre};