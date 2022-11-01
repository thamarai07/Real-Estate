import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";
import {Flex, Box , Text , Button} from "@chakra-ui/react";
import { baseUrl , fetchApi } from '../utils/fetchApi';
import Property from '../component/Property';

const Banner = ({purpose ,title1 , title2 ,desc1 , desc2 , ButtonText , linkName ,imageUrl}) =>(
<Flex flexWrap="wrap" justifyContent="center" alignItems="centre" m="10">
 <Image src={imageUrl} width="500" height="300" alt='Banner'/>
 <Box p="5" >
    <Text color="gray.500" fontSize="sm" fontWeight="medium" >{purpose}</Text>
    <Text  fontSize="3xl" fontWeight="bold" >{title1} <br/> {title2} </Text>
    <Text fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium" color="gray.700">{desc1} <br/> {desc2}</Text>
    <Button fontSize="xl" >
      <Link href={linkName} >{ButtonText}</Link>
    </Button>
 </Box>
</Flex>
)


export default function Home({propertiesForrent , propertiesForsale}) {
console.log(propertiesForrent)
  return (
   <>
   <Box>
    <Banner 
    purpose="RENT A HOME"
    title1="Rental Home For"
    title2="EveryOne"
    desc1="Explore Appartments ,Villas ,Home"
    desc2="And More"
    ButtonText="Explore Renting"
    linkName="/search?purpose=for-rent"
    imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
    />
    <Flex flexWrap="wrap"> 
    {propertiesForrent.map((property)=> <Property properties={property} key={property.id}/>)}
    </Flex>
    <Banner 
    purpose="BUY A HOME"
    title1="Find ,Buy & Own Your"
  title2="Dream Home"
desc1="Explore Appartments ,Villas ,Home"
desc2="And More"
ButtonText="Explore Buying"
linkName="/search?purpose=for-sale"
imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
/>
<Flex flexWrap="wrap"> 
{propertiesForsale.map((property)=> <Property properties={property} key={property.id}/>)}
</Flex>
</Box>
   </>
    )
}

export async function getStaticProps(){
  const propertyForsale =  await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForrent =  await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  return {
    props:{
      propertiesForsale : propertyForsale?.hits,
      propertiesForrent : propertyForrent?.hits,
    }
  }
}