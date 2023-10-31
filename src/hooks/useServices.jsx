// /* eslint-disable no-unused-vars */
// import axios from "axios";
// import { useEffect, useState } from "react";


// const useServices = () => {
//     const [services, setServices] = useState([]);

//     useEffect(() => {
//         fetch('https://genius-car-server-three-xi.vercel.app/services')
//             .then(res => res.json())
//             .then(data => {
//                 setServices(data);
//             })
//     }, [])

//     return services;
// };

// export default useServices;



import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://genius-car-server-three-xi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return services;
};

export default useServices;