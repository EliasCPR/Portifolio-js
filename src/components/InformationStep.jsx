import React from 'react'

export default function InformationStep() {
  return (
    <div>
      <img
          className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="flex flex-col text-center w-full b-8">
          <h1 className="text-xl font-medium title-font mb-4 text-white">
            Elias Oliveira
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
            Sou nascido em 06/02/2004, moro em Itapevi-SP, eu sou uma pessoa que gosta de se descobrir a cada dia mais
            e acredito que em cada pedaço do meu ser tem uma ância por aprender mais coisas, atualmente eu estou na stack de 
            Back-end que é onde eu me encontrei e gosto de trabalhar então desfrute um pouco desse portifólio(ja que é algo não tão comum 
            da minha pessoa fazer).                              
          </p>
        </div>
    </div>
  )
}
