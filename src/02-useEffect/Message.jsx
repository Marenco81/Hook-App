import { useEffect } from "react";

export const Message = () => {

    
    useEffect(() => {
        console.log('message Mounted');

        return () => {
            console.log('message UnMounted')
        }

    }, []);


  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
