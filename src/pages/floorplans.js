import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import styled from '@emotion/styled'
import icon from '../img/floorplan.svg'

const Title = styled.div`
    display: flex;
    align-items: flex-end;
`

const FloorPlans = () => {
    return (
        <Layout>
            <Wrapper>
                <Title>
                    <Heading title="Estate Agent Floor Plans"/>
                    <img src={icon} alt="" style={{ width: "77px", marginLeft: "24px"}}/>
                </Title>
            </Wrapper>
        </Layout>
    )
}

export default FloorPlans