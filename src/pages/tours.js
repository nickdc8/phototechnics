import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import icon from '../img/360icon.svg'
import styled from '@emotion/styled'
import EstateAgentTours from '../components/EstateAgentTours'
import BusinessTours from '../components/BusinessTours'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/react-tabs.css'

const Title = styled.div`
    display: flex;
    align-items: flex-end;
`

const Tours = () => {
    return (
        <Layout>
            <Wrapper>
                <Title>
                    <Heading title="360° Tours"/>
                    <img src={icon} alt="" style={{ width: "77px", marginLeft: "24px"}}/>
                </Title>
                <Tabs>
                    <TabList>
                        <Tab>Estate Agent Tours</Tab>
                        <Tab>Business Tours</Tab>
                    </TabList>
                    <TabPanel>
                        <EstateAgentTours />
                    </TabPanel>
                    <TabPanel>
                        <BusinessTours />
                    </TabPanel>
                </Tabs>
            </Wrapper>
        </Layout>
    )
}

export default Tours