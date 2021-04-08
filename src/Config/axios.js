import axios from 'axios';
 

const clienteAxios = axios.create({
    baseURL : 'https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json'
});

export default clienteAxios;