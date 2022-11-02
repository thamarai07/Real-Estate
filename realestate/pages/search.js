import {useState} from 'react'
import {useRouter} from "next/router"
import Image from "next/image"
import {Flex , Box , Text , Icon } from "@chakra-ui/react"
import {BsSearch}from "react-icons/bs"

const Search  =() =>{
const [searchFilter , setserachFilter] = useState(false);
const router = useRouter();
return(
    <Box>
        <Flex 
            cursor="pointer" 
            bg="gray.100"
            borderBottom="1px"
            borderColor
        >
<Text>
    Search Property by filter
</Text>
        </Flex>
    </Box>
)
}
export default Search