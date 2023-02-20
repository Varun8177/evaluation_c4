import React from 'react'
import { Box, Heading, Avatar, Grid, AvatarBadge, Text, Button } from '@chakra-ui/react'

import { GetUsersInformationApi } from "@/utils/api";
import { GetStaticProps } from "next";
import { UserData } from '../utils/types'
import Link from 'next/link';

const People = ({ users }: { users: UserData[] }) => {

    return (
        <Grid templateColumns={{
            base: 'repeat(1,1fr)',
            sm: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(2,1fr)',
            xl: 'repeat(3,1fr)',
            "2xl": 'repeat(3,1fr)'
        }} gap={10} p={5} m={'auto'}>
            {users.map((item) => {
                return <Box key={item.id} bgColor="3" p={"1rem"} boxShadow={'lg'} borderRadius={'10px'} m={'auto'} w={{
                    base: '200px',
                    sm: '300px',
                    md: '300px',
                    lg: '400px',
                    xl: '450px',
                    "2xl": '500px'
                }}>
                    <Avatar margin={'auto'} size='xl' name={item.name} src='https://bit.ly/broken-link' />
                    <Heading>{item.name}</Heading>
                    <Text as={'b'}>{item.username}</Text>
                    <Text>{item.address.street},{item.address.suite.substr(0, 15)}...</Text>
                    <Link href={`/people/${item.id}`}>
                        <Button w={'80%'} m={'auto'}>Get Todos</Button>
                    </Link>
                </Box>
            })}
        </Grid>
    )
}

export const getStaticProps = async () => {
    const response = await GetUsersInformationApi();
    return {
        props: {
            users: response
        },
    };
};
export default People

