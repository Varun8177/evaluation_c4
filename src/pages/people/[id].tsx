import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetUsersInformationApi, GetUsersTodoInfoApi } from '@/utils/api'
import { TodoType } from '@/utils/types'

const PeopleTodoData = ({ todos }: { todos: TodoType[] }) => {
    const router = useRouter()
    const { query: { id } } = router
    return (
        <Box p={10}>
            <Heading w={'fit-content'} m={'auto'} fontSize={{
                base: '15px',
                sm: '20px',
                md: '20px',
                lg: '40px',
                xl: '50px',
                "2xl": '60px'
            }}>UserID:{id}</Heading>
            <Heading w={'fit-content'} m={'auto'} fontSize={{
                base: '15px',
                sm: '20px',
                md: '20px',
                lg: '40px',
                xl: '50px',
                "2xl": '60px'
            }}>Todos Data</Heading>
            {todos.map((item: TodoType) => {
                return <Box key={item.id} p={5} boxShadow={'lg'} w={{
                    base: '200px',
                    sm: '300px',
                    md: '300px',
                    lg: '400px',
                    xl: '450px',
                    "2xl": '500px'
                }} m={'auto'} mb={'10px'} borderRadius={'10px'}>
                    <Text>{item.title}</Text>
                </Box>
            })}

        </Box>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const res = await GetUsersInformationApi()

    return {
        paths: res.map((item) => ({ params: { id: String(item.id) } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id: any = context.params?.id
    const data = await GetUsersTodoInfoApi(id)
    return {
        props: {
            todos: data
        }
    }
}
export default PeopleTodoData