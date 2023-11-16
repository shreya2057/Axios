import axios from "axios";

// instance -> An instance refers to a configured copy of the Axios library. 
//          -> When an Axios instance is created, a copy of Axios with 
//             predefined settings (base URL, headers, etc.) is created. 
//          -> This allows to reuse the same configuration across multiple 
//             requests.

// axios.create() -> Method in Axios library used to create new instance
//                   of Axios.
//                -> axios.create({
//                      baseURL: url, 
//                      timeout: time,
//                      headers: {headers}
//                   })
//                      -> baseURL=: Sets base Url for all requests made 
//                                   through this instance.
//                      -> timeout=: Sets default timeout for request made
//                                   through this instance.
//                      -> headers=: It allows to define default headers for
//                                   the requests made using this instance. 
//                                   Common headers such as Authorization 
//                                   or Content-Type can be set here.

const url = "https://axios-43afa-default-rtdb.firebaseio.com/";

const axios_instance = axios.create({
    baseURL: url
});

export {axios_instance}