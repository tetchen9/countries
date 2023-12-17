import React from 'react'
import Image from 'next/image'
import { Location } from '@/app/types'
import Modal from '@/app/Modal'
import { useDisclosure } from '@chakra-ui/react'

function Country({ id, name, description, photo }: Location) {
    const { onOpen, isOpen, onClose } = useDisclosure()

    return (
      <>
      <div key={id} onClick={onOpen}>
        <h3>{name}</h3>
        <Image
          src={`${photo}`}
          alt="reference"
          width={400}
          height={250}
          priority
        />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>

      <Modal 
        title={name} 
        children={description} 
        isOpen={isOpen} 
        onClose={onClose}
      />
    </>
    )
}

export default Country
