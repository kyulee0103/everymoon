import { useEffect } from 'react'
import {Button, Text, View} from 'react-native'
import styled from 'styled-components/native'

const Total = styled.SafeAreaView`
    background-color: #f1d5d4;
    flex: 1;
`

const Contents = styled.View`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 90px;
`

const Top = styled.Text`
    color: #294747;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
`


function Setting({Navigation}) {
    return (
        <Total>
            <Contents>
                <Top>내 월경에 맞춰</Top>
                <Top>에브리문 세팅 중..</Top>
                
            </Contents>
        </Total>
    )
}

export default Setting