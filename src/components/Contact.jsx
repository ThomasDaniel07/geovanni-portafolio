import React, {useState} from 'react'
import { IoMdHome } from 'react-icons/io'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import swal from 'sweetalert';


export const Contact = () => {

  const [inputs,setInputs] = useState({
    "nombre":"",
    "correo":"",
    "mensaje":""
  })

  const handleChange = (event)=>{

    const name = event.target.name;

    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))

  }

  const alertSubmit = (data)=>{
    if (data.message === "The form was submitted successfully.") {
      swal({
        title: "Formulario enviado con exito !",
        text: "Muchas gracias por tu mensaje",
        icon: "success",
      });
      setInputs({})
    }else {
      swal("oh!, hubo un error", "Porfavor intente de nuevo", "error");
    }
  }

  const handlerSubmit = (event)=>{

    event.preventDefault();

    if (inputs.nombre.length === 0 || inputs.correo.length === 0 || inputs.mensaje.length === 0) {
      swal("oh!, te faltaron datos", "Porfavor llene todos los datos", "error");
    }else {
      fetch("https://formsubmit.co/ajax/geovanny790972255228@gmail.com",{
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: inputs.nombre,
          correo: inputs.correo,
          mensaje: inputs.mensaje
        })
      })
        .then(response => response.json())
        .then(data => alertSubmit(data))
        .catch(error => console.log(error));
  
      event.target.reset();
    }

  }

  return (
    <div className='pt-20 pb-12 dark:bg-zinc-900 font-["poppins"]' id='contacto'>

      <div className='flex flex-col items-center '>
        <h3 className='text-4xl sm:text-5xl font-bold font-sans text-orange-400'>Contactame</h3>
        <div className='flex items-center mt-3'>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600 '></span>
          <span className='w-28 h-[2px] bg-zinc-900 dark:bg-white'></span>
          <span className='w-2 h-2 bg-transparent border-2 rounded-full border-orange-600'></span>
        </div>
        <span className='w-24 mt-1 h-[2px] bg-black dark:bg-white'></span>
      </div>


      <div className='flex flex-wrap justify-center items-center mt-14 '>

        <div className='w-4/5 sm:w-auto'>
          <div className='flex flex-wrap sm:justify-start items-center dark:text-white'>
            <div className='p-2 bg-transparent mr-2 border-4 border-orange-400 dark:border-white rounded-full'>
              <IoMdHome size={35}/>
            </div>
            <p className='text-xs mt-3 md:text-base'>geovannijosesb@gmail.com</p>
          </div>
          <div className='flex text-xs items-center dark:text-white mt-4'>
            <div className='p-2 bg-transparent mr-2 border-4 border-orange-400 dark:border-white rounded-full'>
              <IoCall size={35}/>
            </div>
            <p>3116100683</p>
          </div>
          <div className='flex text-xs items-center dark:text-white mt-4'>
            <div className='p-2 bg-transparent mr-2 border-4 border-orange-400 dark:border-white rounded-full'>
                <IoLocationSharp size={35}/>
            </div>
            <p>Barranquilla, Colombia</p>
          </div>
        </div>

        <form method='POST' onSubmit={handlerSubmit} className='w-[90%] mt-5 lg:mt-0 lg:w-1/2 lg:ml-4 flex flex-col dark:text-white'>
          
          <div className='flex justify-around'>

            <input type="text" name='nombre' onChange={handleChange}  placeholder='Tu nombre...' className='outline-none w-4/5 mr-3 p-2 dark:bg-neutral-900 border-2 border-orange-500 duration-200 focus:shadow-2xl focus:shadow-orange-400'/>

            <input type="email" name="correo" onChange={handleChange}  placeholder='Tu correo...' className='outline-none w-4/5 p-2 dark:bg-neutral-900 border-2 border-orange-500 duration-200 focus:shadow-2xl focus:shadow-orange-400'/>

          </div>

          <textarea name="mensaje" id="" onChange={handleChange} cols="30" rows="10" placeholder='Tu mensaje...' className='outline-none min-h-[300px] max-h-[300px] min-w-full max-w-full mt-4 p-2 dark:bg-neutral-900 border-2 border-orange-500 duration-200 focus:shadow-2xl focus:shadow-orange-400'></textarea>

          <button className='text-blue-50 font-["poppins"] mt-8 duration-300 bg-stone-900 hover:bg-orange-400 hover:text-black dark:hover:text-black dark:hover:bg-blue-50 dark:bg-orange-400 font-semibold p-3 rounded-3xl shadow-2xl shadow-orange-300 lg:w-1/4 '>Enviar mensaje</button>

        </form>

      </div>

    </div>
  )
}
